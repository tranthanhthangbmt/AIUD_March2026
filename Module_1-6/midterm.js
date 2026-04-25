const midtermApp = {
    config: {
        totalQuestions: 60,
        questionsPerModule: 10,
        timeLimitMinutes: 45,
        allowedEmailDomain: '@donga.edu.vn',
        modules: [
            { id: 1, name: "Module 1", file: "DB/MD1.csv" },
            { id: 2, name: "Module 2", file: "DB/MD2.csv" },
            { id: 3, name: "Module 3", file: "DB/MD3.csv" },
            { id: 4, name: "Module 4", file: "DB/MD4.csv" },
            { id: 5, name: "Module 5", file: "DB/MD5.csv" },
            { id: 6, name: "Module 6", file: "DB/MD6.csv" }
        ]
    },
    state: {
        user: null, // { email: string, name: string, picture: string }
        questions: [], // Array of 60 questions
        answers: {}, // map index -> selectedKey
        currentIndex: 0,
        timerInterval: null,
        timeLeft: 0, // in seconds
        cheatCount: 0,
        isSubmitted: false,
        startTime: null,
        endTime: null
    },

    init: function () {
        this.setupAntiCheat();
        this.showView('view-login');
    },

    // --- View Routing ---
    showView: function (viewId) {
        document.querySelectorAll('.view-section').forEach(el => {
            el.classList.add('hidden');
            el.classList.remove('fade-in');
        });
        const view = document.getElementById(viewId);
        if (view) {
            view.classList.remove('hidden');
            void view.offsetWidth; // trigger reflow
            view.classList.add('fade-in');
        }
    },

    // --- Authentication ---
    handleCredentialResponse: function (response) {
        try {
            // Decode JWT to get user info
            const base64Url = response.credential.split('.')[1];
            const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
            const jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            const payload = JSON.parse(jsonPayload);
            const email = payload.email;

            if (email.endsWith(this.config.allowedEmailDomain)) {
                this.loginSuccess({
                    email: email,
                    name: payload.name,
                    picture: payload.picture
                });
            } else {
                this.showLoginError();
            }
        } catch (error) {
            console.error("Auth error:", error);
            this.showLoginError();
        }
    },

    mockLogin: function () {
        this.loginSuccess({
            email: "sinhvien_test@donga.edu.vn",
            name: "Sinh Viên Test",
            picture: ""
        });
    },

    customLogin: function () {
        const emailInput = document.getElementById('student-email');
        const email = emailInput.value.trim();

        if (email && email.endsWith(this.config.allowedEmailDomain)) {
            document.getElementById('login-error').classList.add('hidden');
            this.loginSuccess({
                email: email,
                name: email.split('@')[0],
                picture: ""
            });
        } else {
            this.showLoginError();
        }
    },

    showLoginError: function () {
        document.getElementById('login-error').classList.remove('hidden');
    },

    loginSuccess: function (user) {
        this.state.user = user;

        // Update header
        const headerInfo = document.getElementById('header-user-info');
        headerInfo.classList.remove('hidden');
        document.getElementById('user-email').textContent = user.email;
        if (user.picture) {
            document.getElementById('user-avatar').src = user.picture;
        } else {
            // Default avatar
            document.getElementById('user-avatar').src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%2394a3b8"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>';
        }

        this.showView('view-intro');
    },

    handleClassSelection: function () {
        const select = document.getElementById('student-class-select');
        const otherContainer = document.getElementById('other-class-container');
        const textInput = document.getElementById('student-class');

        if (select.value === 'OTHER') {
            otherContainer.classList.remove('hidden');
            textInput.focus();
        } else {
            otherContainer.classList.add('hidden');
            if (select.value) {
                textInput.value = select.value;
            } else {
                textInput.value = '';
            }
        }
    },

    // --- Loading Questions ---
    startExam: async function () {
        const select = document.getElementById('student-class-select');
        const classInput = document.getElementById('student-class');

        let finalClassName = "";

        if (!select.value) {
            this.showToast("Vui lòng chọn Lớp sinh hoạt của bạn!", "warning");
            select.focus();
            return;
        }

        if (select.value === 'OTHER') {
            if (!classInput.value.trim()) {
                this.showToast("Vui lòng nhập tên lớp của bạn!", "warning");
                classInput.focus();
                return;
            }
            finalClassName = classInput.value.trim().toUpperCase();
        } else {
            finalClassName = select.value;
        }

        this.state.user.className = finalClassName;

        const loading = document.getElementById('loading');
        loading.classList.remove('hidden');

        try {
            await this.loadAllQuestions();

            // Initialize Exam State
            this.state.answers = {};
            this.state.currentIndex = 0;
            this.state.isSubmitted = false;
            this.state.cheatCount = 0;
            this.state.startTime = new Date();

            this.renderPalette();
            this.renderQuestion();
            this.startTimer();

            this.showView('view-quiz');
        } catch (error) {
            console.error("Error loading questions:", error);
            this.showToast("Lỗi tải đề thi. Vui lòng kiểm tra kết nối mạng và thử lại.", "error");
        } finally {
            loading.classList.add('hidden');
        }
    },

    loadAllQuestions: async function () {
        const promises = this.config.modules.map(mod => {
            return new Promise((resolve, reject) => {
                Papa.parse(mod.file, {
                    download: true,
                    header: true,
                    skipEmptyLines: true,
                    complete: (results) => {
                        const validData = results.data.filter(row => row.QuestionContent && row.QuestionContent.trim() !== "");
                        this.shuffleArray(validData);
                        // Pick 10 questions and inject module info
                        const picked = validData.slice(0, this.config.questionsPerModule).map(q => ({
                            ...q,
                            _moduleId: mod.id,
                            _moduleName: mod.name
                        }));
                        resolve(picked);
                    },
                    error: (err) => reject(err)
                });
            });
        });

        const results = await Promise.all(promises);
        let allPicked = results.flat();

        // Final shuffle of all 60 questions
        this.shuffleArray(allPicked);

        // Safety check
        if (allPicked.length < this.config.totalQuestions) {
            console.warn(`Only loaded ${allPicked.length} questions. Adjusting total questions.`);
            this.config.totalQuestions = allPicked.length;
        }

        this.state.questions = allPicked.slice(0, this.config.totalQuestions);
    },

    shuffleArray: function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    // --- Anti-Cheat ---
    setupAntiCheat: function () {
        // Prevent Context Menu
        document.addEventListener('contextmenu', e => {
            if (!this.state.isSubmitted && document.getElementById('view-quiz').classList.contains('hidden') === false) {
                e.preventDefault();
                this.recordCheat("Click chuột phải");
            }
        });

        // Prevent Copy/Paste/Cut
        document.addEventListener('copy', e => this.preventCheatEvent(e, "Copy"));
        document.addEventListener('cut', e => this.preventCheatEvent(e, "Cut"));
        document.addEventListener('paste', e => this.preventCheatEvent(e, "Paste"));

        // Prevent typical inspect element shortcuts (F12, Ctrl+Shift+I, etc)
        document.addEventListener('keydown', e => {
            if (this.state.isSubmitted || document.getElementById('view-quiz').classList.contains('hidden')) return;

            // Block Ctrl+C, Ctrl+V, etc
            if (e.ctrlKey || e.metaKey) {
                if (['c', 'v', 'x', 'p', 's', 'u'].includes(e.key.toLowerCase())) {
                    e.preventDefault();
                    this.recordCheat(`Phím tắt Ctrl+${e.key.toUpperCase()}`);
                }
            }
        });

        // Visibility API (Detect tab switching)
        document.addEventListener('visibilitychange', () => {
            if (this.state.isSubmitted || document.getElementById('view-quiz').classList.contains('hidden')) return;
            if (document.hidden) {
                this.recordCheat("Chuyển tab hoặc thu nhỏ trình duyệt");
            }
        });
    },

    preventCheatEvent: function (e, actionName) {
        if (!this.state.isSubmitted && document.getElementById('view-quiz').classList.contains('hidden') === false) {
            e.preventDefault();
            this.recordCheat(actionName);
        }
    },

    recordCheat: function (action) {
        this.state.cheatCount++;
        this.showToast(`CẢNH BÁO: Hành vi ${action} không được phép! (Lần ${this.state.cheatCount})`, "error");
        // We can choose to automatically submit after 3 warnings, but for now just warn.
    },

    // --- Timer ---
    startTimer: function () {
        this.state.timeLeft = this.config.timeLimitMinutes * 60;
        this.updateTimerDisplay();

        this.state.timerInterval = setInterval(() => {
            this.state.timeLeft--;
            this.updateTimerDisplay();

            if (this.state.timeLeft <= 0) {
                clearInterval(this.state.timerInterval);
                this.showToast("Hết giờ! Tự động nộp bài.", "warning");
                this.submitExam(true);
            }
        }, 1000);
    },

    updateTimerDisplay: function () {
        const m = Math.floor(this.state.timeLeft / 60);
        const s = this.state.timeLeft % 60;
        const display = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        const timerContainer = document.getElementById('timer-display').parentElement;
        document.getElementById('timer-display').querySelector('span').textContent = display;

        if (this.state.timeLeft <= 300) { // 5 minutes warning
            timerContainer.classList.add('timer-warning');
        }
    },

    // --- Quiz Logic ---
    renderPalette: function () {
        const container = document.getElementById('question-palette');
        container.innerHTML = '';

        this.state.questions.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = 'palette-item w-full aspect-square rounded-lg bg-slate-100 text-slate-600 text-sm font-medium flex items-center justify-center border border-slate-200 hover:bg-slate-200 focus:outline-none';
            btn.textContent = index + 1;
            btn.onclick = () => this.jumpToQuestion(index);
            btn.id = `palette-btn-${index}`;
            container.appendChild(btn);
        });

        this.updatePaletteStats();
    },

    renderQuestion: function () {
        const qIndex = this.state.currentIndex;
        const question = this.state.questions[qIndex];

        document.getElementById('current-question-number').textContent = qIndex + 1;
        document.getElementById('question-module-badge').textContent = question._moduleName;
        document.getElementById('question-text').textContent = question.QuestionContent;

        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        let optionKeys = [
            { key: 'A', text: question.AAnsver || question.AAnswer },
            { key: 'B', text: question.BAnswer },
            { key: 'C', text: question.CAnswer },
            { key: 'D', text: question.DAnswer }
        ].filter(opt => opt.text && opt.text.trim() !== "");

        // Only shuffle if it's not answered yet or we don't care about option order consistency
        // To be safe and consistent during navigation, we should seed the shuffle or just don't shuffle options for midterms
        // Let's just render them as A, B, C, D to keep it simple, or shuffle based on question ID.
        // For standard MIT exams, randomizing options is good, but without state persistence it might flip when navigating back.
        // We'll store the shuffled order in the question object itself.

        if (!question._options) {
            this.shuffleArray(optionKeys);
            question._options = optionKeys;
        }

        const currentAnswer = this.state.answers[qIndex];

        question._options.forEach(opt => {
            const el = document.createElement('div');
            const isSelected = currentAnswer === opt.key;

            el.className = `quiz-option p-4 rounded-xl flex items-center gap-4 ${isSelected ? 'selected' : 'border-slate-200 bg-white'}`;
            el.dataset.key = opt.key;
            el.onclick = () => this.selectAnswer(opt.key);

            el.innerHTML = `
                <div class="option-label w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-sm border transition-colors
                    ${isSelected ? '' : 'bg-slate-100 text-slate-600 border-slate-200'}">
                    ${opt.key}
                </div>
                <div class="font-medium text-slate-700 select-none">${opt.text}</div>
            `;
            optionsContainer.appendChild(el);
        });

        // Update nav buttons
        document.getElementById('btn-prev').disabled = qIndex === 0;
        document.getElementById('btn-next').disabled = qIndex === this.config.totalQuestions - 1;

        this.updatePaletteActive();
    },

    selectAnswer: function (key) {
        if (this.state.isSubmitted) return;

        this.state.answers[this.state.currentIndex] = key;

        // Re-render question to show selection
        this.renderQuestion();

        // Update palette
        const paletteBtn = document.getElementById(`palette-btn-${this.state.currentIndex}`);
        paletteBtn.classList.remove('bg-slate-100', 'text-slate-600');
        paletteBtn.classList.add('bg-mit', 'text-white', 'border-mit');

        this.updatePaletteStats();

        // Auto-advance
        if (this.state.currentIndex < this.config.totalQuestions - 1) {
            setTimeout(() => this.nextQuestion(), 400);
        }
    },

    jumpToQuestion: function (index) {
        this.state.currentIndex = index;
        this.renderQuestion();
    },

    nextQuestion: function () {
        if (this.state.currentIndex < this.config.totalQuestions - 1) {
            this.state.currentIndex++;
            this.renderQuestion();
        }
    },

    prevQuestion: function () {
        if (this.state.currentIndex > 0) {
            this.state.currentIndex--;
            this.renderQuestion();
        }
    },

    updatePaletteActive: function () {
        document.querySelectorAll('.palette-item').forEach(btn => btn.classList.remove('active'));
        const activeBtn = document.getElementById(`palette-btn-${this.state.currentIndex}`);
        if (activeBtn) activeBtn.classList.add('active');
    },

    updatePaletteStats: function () {
        const answered = Object.keys(this.state.answers).length;
        document.getElementById('count-answered').textContent = answered;
        document.getElementById('count-unanswered').textContent = this.config.totalQuestions - answered;
    },

    // --- Submission ---
    submitExamConfirm: function () {
        const answeredCount = Object.keys(this.state.answers).length;
        if (answeredCount < this.config.totalQuestions) {
            document.getElementById('modal-confirm-text').textContent = `Bạn mới hoàn thành ${answeredCount}/${this.config.totalQuestions} câu. Bạn có chắc chắn muốn nộp bài ngay?`;
        } else {
            document.getElementById('modal-confirm-text').textContent = "Bạn đã hoàn thành tất cả câu hỏi. Bạn có chắc chắn muốn nộp bài?";
        }

        const modal = document.getElementById('modal-confirm');
        modal.classList.remove('hidden');
        setTimeout(() => modal.classList.remove('opacity-0'), 10);
    },

    closeModal: function () {
        const modal = document.getElementById('modal-confirm');
        modal.classList.add('opacity-0');
        setTimeout(() => modal.classList.add('hidden'), 300);
    },

    submitExam: function (autoSubmit = false) {
        if (!autoSubmit) this.closeModal();

        clearInterval(this.state.timerInterval);
        this.state.isSubmitted = true;
        this.state.endTime = new Date();

        // Disable class to allow selecting text in results view if needed
        document.body.classList.remove('anti-cheat-enabled');

        this.calculateAndShowResults();
        this.saveResultsToServer();
    },

    calculateAndShowResults: function () {
        let correctCount = 0;
        let wrongCount = 0;
        let unattemptedCount = 0;

        this.state.questions.forEach((q, index) => {
            const userAns = this.state.answers[index];
            const correctAns = q.Answer.trim().toUpperCase();

            if (!userAns) {
                unattemptedCount++;
            } else if (userAns.trim().toUpperCase() === correctAns) {
                correctCount++;
            } else {
                wrongCount++;
            }
        });

        // 10 point scale
        const score = ((correctCount / this.config.totalQuestions) * 10).toFixed(2);

        // Time taken
        const timeTakenSec = Math.floor((this.state.endTime - this.state.startTime) / 1000);
        const m = Math.floor(timeTakenSec / 60);
        const s = timeTakenSec % 60;
        const timeStr = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

        // Update UI
        document.getElementById('result-user-email').textContent = this.state.user.email;
        document.getElementById('stat-correct').textContent = `${correctCount}/${this.config.totalQuestions}`;
        document.getElementById('stat-wrong').textContent = wrongCount + unattemptedCount;
        document.getElementById('stat-time').textContent = timeStr;

        let rank = "Yếu";
        let rankColor = "text-red-600";
        if (score >= 8.5) { rank = "Giỏi"; rankColor = "text-emerald-600"; }
        else if (score >= 7.0) { rank = "Khá"; rankColor = "text-blue-600"; }
        else if (score >= 5.0) { rank = "Trung bình"; rankColor = "text-amber-600"; }

        const rankEl = document.getElementById('stat-rank');
        rankEl.textContent = rank;
        rankEl.className = `text-lg font-bold mt-1 ${rankColor}`;

        // Animate Circle
        document.getElementById('score-text').textContent = score;
        const circle = document.getElementById('score-circle');
        const circumference = 283; // 2 * pi * r (r=45)
        const offset = circumference - (score / 10) * circumference;

        this.showView('view-result');

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
            if (score < 5) circle.style.stroke = "#ef4444";
            else if (score < 8) circle.style.stroke = "#3b82f6";
        }, 500);

        this.generateReviewContent();
    },

    toggleReview: function () {
        const area = document.getElementById('review-area');
        area.classList.toggle('hidden');
    },

    generateReviewContent: function () {
        const container = document.getElementById('review-list');
        container.innerHTML = '';

        this.state.questions.forEach((q, index) => {
            const userAns = this.state.answers[index];
            const correctAns = (q.Answer || "").toString().trim().toUpperCase();
            const isCorrect = userAns === correctAns;
            const isUnattempted = !userAns;

            let borderClass = isCorrect ? 'border-emerald-500' : 'border-red-500';
            if (isUnattempted) borderClass = 'border-amber-500';

            const div = document.createElement('div');
            div.className = `bg-slate-50 border-l-4 ${borderClass} p-5 rounded-r-xl shadow-sm`;

            let statusBadge = '';
            if (isCorrect) statusBadge = '<span class="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-1 rounded">Đúng</span>';
            else if (isUnattempted) statusBadge = '<span class="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded">Bỏ trống</span>';
            else statusBadge = '<span class="bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded">Sai</span>';

            let optionsHtml = '';
            q._options.forEach(opt => {
                let optClass = "text-slate-600";
                let icon = "";

                if (opt.key === correctAns) {
                    optClass = "text-emerald-700 font-bold bg-emerald-50 p-2 rounded";
                    icon = '<i class="fa-solid fa-check text-emerald-500 mr-2"></i>';
                } else if (opt.key === userAns) {
                    optClass = "text-red-600 line-through bg-red-50 p-2 rounded";
                    icon = '<i class="fa-solid fa-xmark text-red-500 mr-2"></i>';
                } else {
                    optClass = "p-2";
                    icon = '<span class="w-4 inline-block mr-2 text-slate-400">' + opt.key + '.</span>';
                }

                optionsHtml += `<div class="${optClass} text-sm">${icon} ${opt.text}</div>`;
            });

            div.innerHTML = `
                <div class="flex justify-between items-start mb-3">
                    <h4 class="font-bold text-slate-800">Câu ${index + 1}: ${q.QuestionContent}</h4>
                    ${statusBadge}
                </div>
                <div class="space-y-1 mt-3">
                    ${optionsHtml}
                </div>
            `;
            container.appendChild(div);
        });
    },

    // --- Data Storage ---
    saveResultsToServer: function () {
        // Prepare detailed answers
        const detailedAnswers = this.state.questions.map((q, index) => {
            const userAns = this.state.answers[index];
            const correctAns = (q.Answer || "").toString().trim().toUpperCase();
            return {
                questionIndex: index + 1,
                moduleId: q._moduleId,
                questionContent: q.QuestionContent,
                userAnswer: userAns || null,
                correctAnswer: correctAns,
                isCorrect: userAns === correctAns,
                options: q._options
            };
        });

        const payload = {
            email: this.state.user.email,
            className: this.state.user.className,
            score: document.getElementById('score-text').textContent,
            cheatCount: this.state.cheatCount,
            timeTaken: document.getElementById('stat-time').textContent,
            detailedAnswers: detailedAnswers,
            timestamp: new Date().toISOString()
        };

        console.log("Saving results to Google Sheets...", payload);

        // URL Google Apps Script
        const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzrOqIP-TVpOJ7-F8YrqJnawZWfSWioWYbS3i5JCUtqpIKYPBtkQVdXrbiFFC18CwB3/exec';

        // Hiển thị Overlay Loading to đùng
        const overlay = document.createElement('div');
        overlay.className = "fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center";
        overlay.innerHTML = `
            <div class="w-16 h-16 border-4 border-mit border-t-transparent rounded-full animate-spin mb-4"></div>
            <h2 class="text-2xl font-bold text-white mb-2">Đang lưu kết quả lên Google Sheets...</h2>
            <p class="text-slate-300">Vui lòng không đóng trình duyệt lúc này!</p>
        `;
        document.body.appendChild(overlay);

        // Dùng phương pháp chèn Form ẩn để vượt mọi rào cản CORS và AdBlock
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = GOOGLE_SCRIPT_URL;
        form.target = 'hidden_iframe';
        form.style.display = 'none';

        // Fake the POST content as plain text using enctype
        form.enctype = 'text/plain';

        const input = document.createElement('input');
        input.name = JSON.stringify(payload);
        input.value = ''; // We put the payload in the name attribute so it submits as `{"email":"..."}=`

        form.appendChild(input);

        const iframe = document.createElement('iframe');
        iframe.name = 'hidden_iframe';
        iframe.style.display = 'none';

        document.body.appendChild(iframe);
        document.body.appendChild(form);

        iframe.onload = () => {
            // Success
            overlay.innerHTML = `
                <div class="w-20 h-20 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/50">
                    <i class="fa-solid fa-check text-4xl text-white"></i>
                </div>
                <h2 class="text-3xl font-bold text-white mb-2">Đã lưu điểm thành công!</h2>
                <p class="text-emerald-200 text-lg">Hệ thống đã ghi nhận vào Google Sheets.</p>
                <button onclick="document.body.removeChild(this.parentElement)" class="mt-6 px-8 py-3 bg-white text-emerald-600 rounded-xl font-bold hover:bg-slate-100 transition-colors">Đóng thông báo này</button>
            `;
            setTimeout(() => {
                if(document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
            }, 5000);
            this.showToast("Đã nộp bài thành công!", "success");
        };

        // Submit form
        setTimeout(() => {
            form.submit();
        }, 500);
    },

    // --- Đăng xuất & Cho sinh viên khác thi ---
    logoutAndRetake: function () {
        if (confirm("Bắt đầu bài thi mới với tài khoản khác?")) {
            localStorage.removeItem('midterm_state');
            window.location.reload();
        }
    },

    // --- UI Utilities ---
    showToast: function (message, type = "info") {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');

        let bgClass = "bg-slate-800 text-white";
        let icon = '<i class="fa-solid fa-circle-info text-blue-400"></i>';

        if (type === "error" || type === "warning") {
            bgClass = "bg-red-50 text-red-700 border border-red-200";
            icon = '<i class="fa-solid fa-triangle-exclamation text-red-500"></i>';
        } else if (type === "success") {
            bgClass = "bg-emerald-50 text-emerald-700 border border-emerald-200";
            icon = '<i class="fa-solid fa-circle-check text-emerald-500"></i>';
        }

        toast.className = `px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 toast-enter ${bgClass}`;
        toast.innerHTML = `${icon} <span class="font-medium text-sm">${message}</span>`;

        container.appendChild(toast);

        setTimeout(() => {
            toast.classList.remove('toast-enter');
            toast.classList.add('toast-leave');
            setTimeout(() => toast.remove(), 300);
        }, 3000);
    }
};

// Global callback for Google Login
function handleCredentialResponse(response) {
    midtermApp.handleCredentialResponse(response);
}

document.addEventListener('DOMContentLoaded', () => {
    midtermApp.init();
});
