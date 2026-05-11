const sessionsData = [
    {
        id: 1,
        title: "Module 1: Khai thác dữ liệu và thông tin",
        description: "Hiểu được cách khai thác, tìm kiếm và quản lý dữ liệu số.",
        totalLessons: 3,
        quiz: "MD1.csv",
        lessons: [
            {
                id: 11,
                sessionId: 1,
                title: "Phần 1: Khai phá Đại dương Số",
                description: "Khám phá cách khai thác thông tin trên không gian mạng.",
                video: "Module_1-6/Video/Module_1/Phần 1_Khai_phá_Đại_dương_Số/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_1/Phần 1_Khai_phá_Đại_dương_Số/m1.1_Khai_phá_Đại_dương_Số.pdf" }
                ],
                steps: []
            },
            {
                id: 12,
                sessionId: 1,
                title: "Phần 2: Hành trình trở thành công dân số",
                description: "Kỹ năng cơ bản của công dân số.",
                video: "Module_1-6/Video/Module_1/Phần 2_/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_1/Phần 2_/m1.2_Digital_Navigator_Training.pdf" }
                ],
                steps: []
            },
            {
                id: 13,
                sessionId: 1,
                title: "Phần 3: LÀM CHỦ DỮ LIỆU SỐ",
                description: "Kỹ năng làm chủ và quản lý dữ liệu.",
                video: "Module_1-6/Video/Module_1/Phần 3_LÀM_CHỦ_DỮ_LIỆU_SỐ/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_1/Phần 3_LÀM_CHỦ_DỮ_LIỆU_SỐ/m1.3_LÀM_CHỦ_DỮ_LIỆU_SỐ.pdf" }
                ],
                steps: []
            }
        ]
    },
    {
        id: 2,
        title: "Module 2: Giao tiếp và hợp tác trong môi trường số",
        description: "Phương pháp và kỹ năng giao tiếp hiệu quả khi làm việc trực tuyến.",
        totalLessons: 2,
        quiz: "MD2.csv",
        lessons: [
            {
                id: 21,
                sessionId: 2,
                title: "Phần 1: Hành trình trở thành công dân số",
                description: "Nhận thức về môi trường giao tiếp số.",
                video: "Module_1-6/Video/Module_2/Phần 1_Hành trình trở thành công dân số/index.html",
                docs: [],
                steps: []
            },
            {
                id: 22,
                sessionId: 2,
                title: "Phần 2: Làm chủ tương tác",
                description: "Các kỹ năng tương tác và hợp tác thiết yếu.",
                video: "Module_1-6/Video/Module_2/Phần 2_Làm chủ tương tác/index.html",
                docs: [],
                steps: []
            }
        ]
    },
    {
        id: 3,
        title: "Module 3: Sáng tạo nội dung số",
        description: "Nguyên tắc và công cụ để sáng tạo và thiết kế nội dung trên nền tảng số.",
        totalLessons: 5,
        quiz: "MD3.csv",
        lessons: [
            {
                id: 31,
                sessionId: 3,
                title: "Phần 1: Digital Content Development",
                description: "Phát triển nội dung số.",
                video: "Module_1-6/Video/Module_3/Phần 1_Digital_Content_Development/index.html",
                docs: [],
                steps: []
            },
            {
                id: 32,
                sessionId: 3,
                title: "Phần 2: Digital Content Repurposing",
                description: "Tái sử dụng nội dung số.",
                video: "Module_1-6/Video/Module_3/Phần 2_Digital_Content_Repurposing/index.html",
                docs: [],
                steps: []
            },
            {
                id: 33,
                sessionId: 3,
                title: "Phần 3: Digital Rights and Programming",
                description: "Bản quyền và nguyên tắc cơ bản.",
                video: "Module_1-6/Video/Module_3/Phần 3_Digital_Rights_and_Programming/index.html",
                docs: [],
                steps: []
            },
            {
                id: 34,
                sessionId: 3,
                title: "Phần 4: Shorter",
                description: "Sử dụng Shorter để tạo video ngắn.",
                video: "Module_1-6/Video/Module_3/Phần 4_Shorter/index.html",
                docs: [
                    { name: "Kịch bản", file: "Module_1-6/Video/Module_3/Phần 4_Shorter/Kịch bản script_Module3_AC24M_v2.txt" }
                ],
                steps: []
            },
            {
                id: 35,
                sessionId: 3,
                title: "Phần 5: NotebookLM",
                description: "Công cụ sáng tạo nội dung NotebookLM.",
                video: "Module_1-6/Video/Module_3/Phần 5_NotebookLM/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_3/Phần 5_NotebookLM/slide NotebookLM_Công_Cụ_Sáng_Tạo_Nội_Dung.pdf" },
                    { name: "Kịch bản", file: "Module_1-6/Video/Module_3/Phần 5_NotebookLM/script.docx" }
                ],
                steps: []
            }
        ]
    },
    {
        id: 4,
        title: "Module 4: An toàn thông tin",
        description: "Bảo vệ thông tin, dữ liệu cá nhân và hệ thống khỏi các nguy cơ mạng.",
        totalLessons: 3,
        quiz: "MD4.csv",
        lessons: [
            {
                id: 41,
                sessionId: 4,
                title: "Phần 1: Digital Safety Blueprint",
                description: "Hiểu và lập kế hoạch an toàn số cơ bản.",
                video: "Module_1-6/Video/Module_4/Phần 1_M4_T1_Digital_Safety_Blueprint/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_4/Phần 1_M4_T1_Digital_Safety_Blueprint/M4_T1_Digital_Safety_Blueprint.pdf" }
                ],
                steps: []
            },
            {
                id: 42,
                sessionId: 4,
                title: "Phần 2: An toàn Mạng và An sinh số",
                description: "Bảo vệ bản thân và duy trì sức khỏe trong môi trường số.",
                video: "Module_1-6/Video/Module_4/Phần 2_M4_T2_An_toàn_Mạng_và_An_sinh_số/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_4/Phần 2_M4_T2_An_toàn_Mạng_và_An_sinh_số/M4_T2_An_toàn_Mạng_và_An_sinh_số.pdf" }
                ],
                steps: []
            },
            {
                id: 43,
                sessionId: 4,
                title: "Phần 3: Digital Sustainability",
                description: "Phát triển bền vững trong kỷ nguyên số.",
                video: "Module_1-6/Video/Module_4/Phần 3_M4_T3_Digital_Sustainability/index.html",
                docs: [
                    { name: "Tài liệu PDF", file: "Module_1-6/Video/Module_4/Phần 3_M4_T3_Digital_Sustainability/M4_T3_Digital_Sustainability.pdf" }
                ],
                steps: []
            }
        ]
    },
    {
        id: 5,
        title: "Module 5: Giải quyết vấn đề",
        description: "Ứng dụng công nghệ để phân tích và giải quyết các vấn đề thực tiễn.",
        totalLessons: 1,
        quiz: "MD5.csv",
        lessons: [
            {
                id: 51,
                sessionId: 5,
                title: "Phần 1: Giải quyết vấn đề",
                description: "Bài giảng và tài liệu cho Module 5.",
                video: "Module_1-6/Video/Module_5/index.html",
                docs: [
                    { name: "Slide PDF", file: "Module_1-6/Video/Module_5/slide module 5-Giải quyết vấn đề_v2.pdf" },
                    { name: "Kịch bản (DOCX)", file: "Module_1-6/Video/Module_5/Gemini-Chỉnh sửa kịch bản _Thám tử số_.docx" },
                    { name: "Infographic", file: "Module_1-6/Video/Module_5/inforgraphic_module 5.png" }
                ],
                steps: []
            }
        ]
    },
    {
        id: 6,
        title: "Module 6: Ứng dụng trí tuệ nhân tạo",
        description: "Tìm hiểu và khai thác các công cụ AI hỗ trợ trong học tập và công việc.",
        totalLessons: 3,
        quiz: "MD6.csv",
        lessons: [
            {
                id: 61,
                sessionId: 6,
                title: "Phần 1: AI Foundations and Applications",
                description: "Khám phá các nền tảng và ứng dụng của trí tuệ nhân tạo.",
                video: "Module_1-6/Video/Module_6/Phần 1_M6_P1_AI_Foundations_and_Applications/index.html",
                docs: [
                    { name: "Slide PDF", file: "Module_1-6/Video/Module_6/Phần 1_M6_P1_AI_Foundations_and_Applications/M6_P1_AI_Foundations_and_Applications.pdf" },
                    { name: "Kịch bản (DOCX)", file: "Module_1-6/Video/Module_6/Phần 1_M6_P1_AI_Foundations_and_Applications/script.docx" },
                    { name: "Kịch bản (TXT)", file: "Module_1-6/Video/Module_6/Phần 1_M6_P1_AI_Foundations_and_Applications/script.txt" }
                ],
                steps: [
                    { title: "Slide 1: Khái niệm cơ bản", content: "Chào mừng các em đến với Module 6: Ứng dụng Trí tuệ Nhân tạo. Bài 1 khám phá các khái niệm cơ bản và ứng dụng phổ biến.", icon: "fa-info-circle" },
                    { title: "Slide 2: Tầm quan trọng của AI", content: "AI đóng vai trò then chốt trong chuyển đổi số nhờ khả năng xử lý dữ liệu khổng lồ và tự động hóa quy trình.", icon: "fa-lightbulb" },
                    { title: "Slide 4: Định nghĩa AI", content: "AI là việc mô phỏng trí tuệ con người vào máy móc: Học hỏi, Suy luận, Giải quyết vấn đề, Nhận thức và Ngôn ngữ.", icon: "fa-robot" },
                    { title: "Slide 5: AI, Machine Learning, Deep Learning", content: "AI (vòng ngoài), Machine Learning (vòng giữa) và Deep Learning (tâm điểm) là các lớp cốt lõi của trí tuệ nhân tạo.", icon: "fa-layer-group" },
                    { title: "Slide 7: Các nhánh chính của AI", content: "NLP (Ngôn ngữ), Computer Vision (Thị giác), Robotics (Rô-bốt) và Expert Systems (Hệ chuyên gia).", icon: "fa-code-branch" }
                ]
            },
            {
                id: 62,
                sessionId: 6,
                title: "Phần 2: AI Application Blueprint",
                description: "Chiến lược và mô hình ứng dụng AI trong thực tế.",
                video: "Module_1-6/Video/Module_6/Phần 2_M6_P2_AI_Application_Blueprint/index.html",
                docs: [
                    { name: "Slide PDF", file: "Module_1-6/Video/Module_6/Phần 2_M6_P2_AI_Application_Blueprint/M6_P2_AI_Application_Blueprint.pdf" },
                    { name: "Kịch bản (DOCX)", file: "Module_1-6/Video/Module_6/Phần 2_M6_P2_AI_Application_Blueprint/script.docx" },
                    { name: "Kịch bản (TXT)", file: "Module_1-6/Video/Module_6/Phần 2_M6_P2_AI_Application_Blueprint/script.txt" }
                ],
                steps: [
                    { title: "Slide 1: Thực hành và Kiến tạo", content: "Bản thiết kế hoàn chỉnh về ứng dụng AI tạo sinh (GenAI) và cách tối ưu hóa sự hợp tác người-máy.", icon: "fa-tools" },
                    { title: "Slide 4: Cách mạng hóa văn bản", content: "GenAI có thể tóm tắt 50 trang trong 2 phút, dịch thuật 100 ngôn ngữ với độ chính xác 95%.", icon: "fa-file-alt" },
                    { title: "Slide 6: Kỷ nguyên Video mới", content: "Tạo video từ văn bản (Text-to-Video) với các công cụ như Sora, Veo, mang lại chất lượng điện ảnh.", icon: "fa-video" },
                    { title: "Slide 9: Prompt Engineering", content: "Công thức 4 bước cho câu lệnh hoàn hảo: Role (Vai trò), Context (Ngữ cảnh), Task (Nhiệm vụ), Format (Định dạng).", icon: "fa-terminal" },
                    { title: "Slide 13: 4 Nguyên tắc vàng", content: "1. Giám sát con người. 2. Bảo mật & Đạo đức. 3. Đào tạo hiệu quả. 4. AI là công cụ, không phải sự thay thế.", icon: "fa-star" }
                ]
            },
            {
                id: 63,
                sessionId: 6,
                title: "Phần 3: Working with AI",
                description: "Kỹ năng làm việc thực tế cùng trí tuệ nhân tạo.",
                video: "Module_1-6/Video/Module_6/Phần 3_Working with AI/index.html",
                docs: [
                    { name: "Tài liệu Elite AI", file: "Module_1-6/Video/Module_6/Phần 3_Working with AI/Elite_AI_Intelligence.pdf" },
                    { name: "Tài liệu Cognitive Gym", file: "Module_1-6/Video/Module_6/Phần 3_Working with AI/The_AI_Cognitive_Gym.pdf" },
                    { name: "Hướng dẫn AI (Phần 1)", file: "Module_1-6/Video/Module_6/Phần 3_Working with AI/Module_6_AI_part_1.md" },
                    { name: "Hướng dẫn AI (Phần 2)", file: "Module_1-6/Video/Module_6/Phần 3_Working with AI/Module_6_AI_part_2.md" },
                    { name: "Kịch bản (DOCX)", file: "Module_1-6/Video/Module_6/Phần 3_Working with AI/script.docx" },
                    { name: "Kịch bản (TXT)", file: "Module_1-6/Video/Module_6/Phần 3_Working with AI/script.txt" }
                ],
                steps: [
                    { title: "Slide 1: Đừng để AI thay thế bạn", content: "Chuyển đổi từ phụ thuộc công nghệ sang làm chủ tuyệt đối thông qua 'Phòng tập nhận thức'.", icon: "fa-user-shield" },
                    { title: "Slide 2: Tư duy Rèn luyện", content: "Coi AI như người hỗ trợ trong phòng tập, đối mặt với sức ì nhận thức để tăng trưởng trí tuệ.", icon: "fa-dumbbell" },
                    { title: "Slide 5: Đồ thị Payoff", content: "Sử dụng AI để 'lười biếng' ở Vùng Lười Biếng và dồn tâm huyết vào Vùng Ám Ảnh (Chiến lược, Sáng tạo).", icon: "fa-chart-line" },
                    { title: "Slide 6: Khung DRAG", content: "Drafting (Phác thảo), Research (Nghiên cứu), Analysis (Phân tích), Groundwork (Công việc chân tay).", icon: "fa-project-diagram" },
                    { title: "Slide 11: Quá tải tiến triển", content: "Rèn luyện với 4 cấp độ 'tạ': Làm nóng, Khởi động, Áp lực và Quá tải để hiểu sâu kiến thức.", icon: "fa-weight-hanging" }
                ]
            }
        ]
    },
    {
        id: 65,
        title: "Word Cơ Bản",
        description: "Các bài học cơ bản về Microsoft Word dựa trên giáo trình GCFGlobal.",
        totalLessons: 19,
        lessons: [
            {
                id: "wb_1",
                sessionId: 65,
                title: "Bài 1: Làm quen với từ",
                description: "Nội dung chi tiết cho bài Bài 1: Làm quen với từ.",
                video: "https://www.youtube.com/embed/j-ZAVHk5SaU",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Microsoft Word là ứng dụng ** xử lý văn bản ** cho phép bạn tạo nhiều loại ** tài liệu <strong>, bao gồm thư từ, sơ yếu lý lịch, v.v. Trong bài học này, bạn sẽ tìm hiểu cách điều hướng giao diện Word và làm quen với một số tính năng quan trọng nhất của nó, chẳng hạn như ** Ribbon </strong>, ** Quick Access Toolbar ** và ** Backstage view **.</p> <p>Hãy xem video dưới đây để làm quen hơn với Word.</p> <h4>Về hướng dẫn này</h4> <p>Các quy trình trong hướng dẫn này sẽ áp dụng cho ** tất cả các phiên bản Microsoft Word gần đây <strong>, bao gồm ** Word 2019 </strong>, ** Word ** ** 2016 ** và ** Office 365 <strong>. Có thể có một số khác biệt nhỏ, nhưng nhìn chung các phiên bản này đều giống nhau. Tuy nhiên, nếu đang sử dụng ** phiên bản cũ hơn </strong>, bạn có thể tham khảo một trong các <a href=\"../../../topics/word/index.html\">hướng dẫn Word</a> khác của chúng tôi.</p> <h4>Giao diện Word</h4> <p>Khi bạn Open Word lần đầu tiên, ** Start Screen ** sẽ xuất hiện. Từ đây, bạn sẽ có thể tạo tài liệu ** New <strong>, chọn ** Template ** và truy cập ** tài liệu được chỉnh sửa gần đây ** của bạn. Từ ** Start Screen </strong>, tìm và chọn ** Blank document ** để truy cập vào giao diện Word.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"creating a new blank document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/create_new_blank.png\" /></p> <p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về giao diện Word.</p> <p>doneedit điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"giao diện Word 2016\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_interface_background.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Ribbon",
                        content: "<p>Word sử dụng ** hệ thống theo thẻ Ribbon ** thay vì các menu truyền thống. ** Ribbon ** chứa ** nhiều tab ** mà bạn có thể tìm thấy ở gần đầu cửa sổ Word.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"tabs on the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ribbon_tabs.png\" /></p> <p>Mỗi tab chứa một số ** nhóm lệnh liên quan **. Ví dụ: nhóm Phông chữ trên tab Home chứa các lệnh để định dạng văn bản trong tài liệu của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Font group on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ribbon_group.png\" /></p> <p>Một số nhóm còn có ** mũi tên nhỏ ** ở góc dưới cùng bên phải mà bạn có thể nhấp vào để xem thêm Options.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the arrow to see more group commands\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ribbon_arrow.png\" /></p> <h4>Hiển thị và ẩn Ribbon</h4> <p>Nếu bạn thấy Ribbon chiếm quá nhiều không gian màn hình, bạn có thể ẩn nó. Để thực hiện việc này, hãy nhấp vào mũi tên ** Ribbon Display Options ** ở góc trên bên phải của Ribbon, sau đó chọn tùy chọn mong muốn từ menu thả xuống:</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hiding the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ribbon_minimize.png\" /></p> <ul> <li>** Auto-hide Ribbon **: Tự động ẩn hiển thị tài liệu của bạn ở chế độ toàn màn hình và ẩn hoàn toàn Ribbon khỏi View. Để hiển thị Ribbon, hãy nhấp vào lệnh ** Mở rộng Ribbon ** ở đầu màn hình.</li> <li>** Show Tabs **: Tùy chọn này ẩn tất cả các nhóm lệnh khi không sử dụng nhưng các tab sẽ vẫn hiển thị. Để hiển thị Ribbon, chỉ cần nhấp vào tab.</li> <li>** Show Tabs and Commands **: Tùy chọn này tối đa hóa Ribbon. Tất cả các tab và lệnh sẽ hiển thị. Tùy chọn này được chọn theo mặc định khi bạn Open Word lần đầu tiên.</li> </ul> <h4>Sử dụng tính năng Tell Me</h4> <p>Nếu bạn gặp khó khăn khi tìm lệnh mình muốn, tính năng ** Tell Me ** có thể Help. Nó hoạt động giống như một thanh tìm kiếm thông thường. Nhập nội dung bạn đang tìm kiếm và danh sách Options sẽ xuất hiện. Sau đó, bạn có thể sử dụng lệnh trực tiếp từ menu mà không cần phải tìm nó trên Ribbon.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"searching for commands with the Tell Me feature\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ribbon_tellme.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Quick Access Toolbar",
                        content: "<p>Nằm ngay phía trên Ribbon, ** Quick Access Toolbar ** cho phép bạn truy cập các lệnh phổ biến bất kể tab nào được chọn. Theo mặc định, nó hiển thị các lệnh ** Save **, ** Undo ** và ** Redo ** nhưng bạn có thể thêm các lệnh khác tùy theo nhu cầu của mình.</p> <h4>Để thêm lệnh vào Quick Access Toolbar:</h4> <ol> <li>Nhấp vào ** mũi tên thả xuống ** ở bên phải của ** Quick Access Toolbar **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Quick Access Toolbar drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_quick_start.png\" /> 2. Chọn ** lệnh ** bạn muốn thêm từ menu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding the Quick Print command to the Quick Access Toolbar\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_quick_print.png\" /> 3. Lệnh sẽ được ** thêm ** vào Quick Access Toolbar.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Quick Print command on the Quick Access Toolbar\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_quick_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Ruler",
                        content: "<p>** R <strong>*</strong> uler ** nằm ở trên cùng và bên trái tài liệu của bạn. Nó giúp ** điều chỉnh ** tài liệu của bạn một cách chính xác dễ dàng hơn. Nếu muốn, bạn có thể ẩn Ruler để tạo thêm không gian màn hình.</p> <h4>Để hiển thị hoặc ẩn Ruler:</h4> <ol> <li>Nhấp vào tab ** View **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the View tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ruler_tab.png\" /> 2. Nhấp vào hộp kiểm bên cạnh ** Ruler ** để ** hiển thị ** hoặc ** ẩn ** Ruler.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"turning on the Ruler\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_ruler_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Backstage view",
                        content: "<p>** Backstage view ** cung cấp cho bạn nhiều Options để lưu, mở File, in và chia sẻ tài liệu của bạn. Để truy cập Backstage view, hãy nhấp vào tab ** File ** trên ** Ribbon **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the File tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_backstage_file.png\" /></p> <p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về cách sử dụng Backstage view.</p> <p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_backstage_lg.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Document Views và thu phóng",
                        content: "<p>Word có nhiều kiểu xem Options thay đổi cách hiển thị tài liệu của bạn. Bạn có thể chọn View tài liệu của mình trong ** Read Mode <strong>, ** Print Layout ** hoặc ** Web Layout </strong>. Những chế độ xem này có thể hữu ích cho nhiều tác vụ khác nhau, đặc biệt nếu bạn định ** Print ** tài liệu. Bạn cũng có thể ** phóng to và thu nhỏ ** để làm cho tài liệu của bạn dễ đọc hơn.</p> <h4>Đang chuyển đổi Document Views</h4> <p>Việc chuyển đổi giữa Document Views khác nhau thật dễ dàng. Chỉ cần xác định vị trí và chọn lệnh ** tài liệu View ** mong muốn ở góc dưới cùng bên phải của cửa sổ Word.</p> <ul> <li>** Read Mode **: View này sẽ mở tài liệu ra toàn màn hình. View này rất phù hợp để đọc số lượng lớn văn bản hoặc đơn giản là xem lại tác phẩm của bạn.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"read mode\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_view_read.png\" /> * ** Print Layout **: Đây là tài liệu mặc định View trong Word. Nó cho thấy tài liệu sẽ trông như thế nào trên trang in.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"print layout mode\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_view_print.png\" /> * ** Web Layout **: View này hiển thị tài liệu dưới dạng trang web, điều này có thể hữu ích nếu bạn đang sử dụng Word để xuất bản nội dung trực tuyến.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"web layout mode\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_view_web.png\" title=\"web layout mode\" /></p> <h4>Phóng to và thu nhỏ</h4> <p>Để phóng to hoặc thu nhỏ, hãy nhấp và kéo thanh trượt ** Zoom Control ** ở góc dưới cùng bên phải của cửa sổ Word. Bạn cũng có thể chọn các lệnh <strong>++</strong> hoặc <strong>-</strong> <strong>** để phóng to hoặc thu nhỏ theo gia số nhỏ hơn. Con số bên cạnh thanh trượt hiển thị ** phần trăm thu phóng ** hiện tại, còn được gọi là ** mức thu phóng </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the Zoom slider\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/start_zoom.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Thử thách!",
                        content: "<ol> <li>Open ** Word ** và tạo ** Blank document **.</li> <li>Thay đổi ** Ribbon Display Options ** thành ** Show Tabs **.</li> <li>Sử dụng ** Customize Quick Access Toolbar <strong>, thêm ** New </strong>, ** Nhanh Print ** và ** Spelling &amp; Grammar.**</li> <li>Trong ** Tell me bar <strong>, nhập ** Hình dạng ** và nhấn ** Enter </strong>.</li> <li>Chọn một hình dạng từ menu và nhấp đúp vào vị trí nào đó trên tài liệu của bạn.</li> <li>Hiển thị ** Ruler ** nếu nó chưa hiển thị.</li> <li>** Thu phóng ** tài liệu lên 120%.</li> <li>Thay đổi ** Tài liệu View ** thành ** Web Layout **.</li> <li>Khi bạn hoàn tất, tài liệu của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Getting To Know Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_gettingtoknow3_img.png\" /> 10. Thay đổi ** Ribbon Display Options ** trở lại ** Show Tabs and Commands ** và thay đổi ** Document View ** trở lại ** Print Layout **.</p> <p>/en/word/hiểu-OneDrive/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_2",
                sessionId: 65,
                title: "Bài 2: hiểu-OneDrive",
                description: "Nội dung chi tiết cho bài Bài 2: hiểu-OneDrive.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Nhiều tính năng trong Office hướng tới việc lưu và chia sẻ tệp trực tuyến. ** OneDrive ** là không gian lưu trữ trực tuyến của Microsoft mà bạn có thể sử dụng để Save, chỉnh sửa và Share tài liệu của mình cũng như các tệp khác. Bạn có thể truy cập OneDrive từ máy tính, điện thoại thông minh hoặc bất kỳ thiết bị nào bạn sử dụng.</p> <p>Để bắt đầu với OneDrive, tất cả những gì bạn cần làm là thiết lập ** Microsoft Account ** miễn phí nếu bạn chưa có.</p> <p>Nếu chưa có Microsoft Account, bạn có thể đi tới bài học <a href=\"../../../microsoftaccount/creating-a-microsoft-Account/2/index.html\">Tạo Microsoft Account</a> trong hướng dẫn Microsoft Account của chúng tôi.</p> <p>Sau khi có Microsoft Account, bạn sẽ có thể đăng nhập vào Office. Chỉ cần nhấp vào ** Đăng nhập ** ở góc trên bên phải của cửa sổ Word.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"signing in to OneDrive\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/onedrive_signin.png\" /></p> <h4>Lợi ích của việc sử dụng OneDrive</h4> <p>Khi bạn đã đăng nhập vào Microsoft Account của mình, có một số điều bạn có thể thực hiện với OneDrive:</p> <ul> <li>** Truy cập tệp của bạn ở mọi nơi **: Khi bạn Save tệp của mình vào OneDrive, bạn sẽ có thể truy cập chúng từ bất kỳ máy tính, máy tính bảng hoặc điện thoại thông minh nào có kết nối Internet. Bạn cũng sẽ có thể tạo tài liệu New từ OneDrive.</li> <li>** Sao lưu tệp của bạn **: Việc lưu tệp vào OneDrive sẽ mang lại cho chúng thêm một lớp bảo vệ. Ngay cả khi có điều gì đó xảy ra với máy tính của bạn, OneDrive sẽ giữ cho các tệp của bạn an toàn và có thể truy cập được.</li> <li>** Share tệp **: Thật dễ dàng để Share tệp OneDrive của bạn với bạn bè và đồng nghiệp. Bạn có thể chọn xem họ có thể chỉnh sửa hay chỉ đọc tệp. Tùy chọn này rất phù hợp cho việc cộng tác vì nhiều người có thể chỉnh sửa tài liệu cùng lúc (còn được gọi là đồng tác giả).</li> </ul> <h4>Lưu và mở tập tin</h4> <p>Khi bạn đăng nhập vào Microsoft Account của mình, OneDrive sẽ xuất hiện dưới dạng tùy chọn bất cứ khi nào bạn Save hoặc Open và File. Bạn vẫn có tùy chọn lưu tập tin vào máy tính của mình. Tuy nhiên, việc lưu tệp vào OneDrive cho phép bạn truy cập chúng từ bất kỳ máy tính nào khác và nó cũng cho phép bạn truy cập tệp Share với bạn bè và đồng nghiệp.</p> <p>Ví dụ: khi nhấp vào ** Save As **, bạn có thể chọn OneDrive hoặc PC này làm vị trí Save.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"saving a file to OneDrive\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/onedrive_saveas.png\" /></p> <p>/en/word/tạo-và-mở-tài liệu/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_3",
                sessionId: 65,
                title: "Bài 3: Tạo và mở tài liệu",
                description: "Nội dung chi tiết cho bài Bài 3: Tạo và mở tài liệu.",
                video: "https://www.youtube.com/embed/PafCMUVH_OA",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_createopen_practice.doc"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Tệp Word được gọi là ** tài liệu <strong>. Bất cứ khi nào bạn bắt đầu dự án New trong Word, bạn sẽ cần ** tạo một tài liệu New </strong>, có thể để trống hoặc từ một Template. Bạn cũng cần biết cách ** Open một tài liệu hiện có **.</p> <p>Hãy xem video bên dưới để tìm hiểu thêm về cách tạo và mở tài liệu trong Word.</p> <h4>Để tạo New Blank document:</h4> <p>Khi bắt đầu dự án New trong Word, bạn thường muốn bắt đầu bằng New Blank document.</p> <ol> <li>Chọn tab ** File ** để truy cập ** Backstage view **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the File tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/create_new_file.png\" /> 2. Chọn ** New <strong>, sau đó nhấp vào ** Blank document </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"creating a new blank document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/create_new_blank.png\" /> 3. Một New Blank document sẽ xuất hiện.</p> <h4>Để tạo tài liệu New từ Template:</h4> <p>** Template ** là ** tài liệu được thiết kế trước ** mà bạn có thể sử dụng để tạo tài liệu New một cách nhanh chóng. Các mẫu thường bao gồm ** định dạng tùy chỉnh ** và ** thiết kế **, vì vậy chúng có thể giúp bạn Save mất rất nhiều thời gian và công sức khi bắt đầu một dự án New.</p> <ol> <li>Nhấp vào tab ** File ** để truy cập ** Backstage view <strong>, sau đó chọn ** New </strong>.</li> <li>Một số mẫu sẽ xuất hiện bên dưới tùy chọn ** Blank document **. Bạn cũng có thể sử dụng thanh tìm kiếm để tìm nội dung cụ thể hơn. Trong ví dụ của chúng tôi, chúng tôi sẽ tìm kiếm ** tờ rơi ** Template.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"searching for a specific template\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_template_start.png\" /> 3. Khi bạn tìm thấy nội dung nào đó mình thích, hãy chọn Template để xem trước nội dung đó.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking a template to preview it\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_template_search_.jpg\" /> 4. ** bản xem trước ** của Template sẽ xuất hiện. Nhấp vào ** Tạo ** để sử dụng Template đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"creating a document from a template\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_template_create.jpg\" /> 5. Tài liệu New sẽ xuất hiện cùng với ** Template ** đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"browsing templates by category\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_template_category_splat.png\" /></p> <p>None</p> <h4>Đến Open một tài liệu hiện có:</h4> <p>Ngoài việc tạo tài liệu New, bạn thường sẽ cần Open tài liệu đã được lưu trước đó. Để tìm hiểu thêm về cách lưu tài liệu, hãy truy cập bài học của chúng tôi về <a href=\"../../../word2016/ Saving-and-sharing-documents/1/index.html\">Lưu và chia sẻ tài liệu</a>.</p> <ol> <li>Điều hướng đến ** Backstage view <strong>, sau đó nhấp vào ** Open </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Open command in Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/create_open_command.png\" /> 2. Chọn ** PC này <strong>, sau đó nhấp vào ** Duyệt </strong>. Bạn cũng có thể chọn ** OneDrive ** cho các tệp Open được lưu trữ trên OneDrive của mình.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting Browse to look for a file to open\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_open_browse.png\" /> 3. Hộp thoại ** Open ** sẽ xuất hiện. Xác định vị trí và chọn ** tài liệu ** của bạn, sau đó nhấp vào ** Open **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"opening an existing file\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_open_select.png\" /> 4. Tài liệu đã chọn sẽ xuất hiện.</p> <p>Hầu hết các tính năng trong Microsoft Office, bao gồm Word, đều hướng đến việc lưu và chia sẻ tài liệu ** trực tuyến <strong>. Việc này được thực hiện với ** OneDrive </strong>, đây là không gian lưu trữ trực tuyến cho tài liệu và tệp của bạn. Nếu bạn muốn sử dụng OneDrive, hãy đảm bảo bạn đã đăng nhập vào Word bằng Microsoft Account của mình. Review bài học của chúng tôi về <a href=\"../../hiểu-OneDrive/1/index.html\">Hiểu OneDrive</a> để tìm hiểu thêm.</p> <h4>Để ghim một tài liệu:</h4> <p>Nếu thường xuyên làm việc với ** cùng một tài liệu **, bạn có thể ** ghim nó ** vào Backstage view để truy cập nhanh.</p> <ol> <li>Điều hướng đến ** Backstage view <strong>, nhấp vào ** Open </strong>, sau đó chọn ** Gần đây **.</li> <li>Một danh sách các tài liệu được chỉnh sửa gần đây sẽ xuất hiện. Di chuột qua ** tài liệu ** bạn muốn ghim, sau đó nhấp vào biểu tượng ** ghim.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"ghim tài liệu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_pin_start.png\" />** 3. Tài liệu sẽ ở trong danh sách Tài liệu gần đây cho đến khi được bỏ ghim. Để ** bỏ ghim ** tài liệu, hãy nhấp lại vào biểu tượng đinh ghim.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"unpinning a document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_pin_unpin.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Chế độ tương thích",
                        content: "<p>Đôi khi, bạn có thể cần phải làm việc với các tài liệu được tạo trong các phiên bản Microsoft Word cũ hơn, như Word 2010 hoặc Word 2007. Khi bạn Open những loại tài liệu này, chúng sẽ xuất hiện trong ** Chế độ tương thích **.</p> <p>Chế độ tương thích ** tắt ** một số tính năng nhất định, do đó bạn sẽ chỉ có thể truy cập các lệnh có trong chương trình được sử dụng để tạo tài liệu. Ví dụ: nếu bạn Open một tài liệu được tạo trong Word 2007, bạn chỉ có thể sử dụng các tab và lệnh có trong Word 2007.</p> <p>Trong hình ảnh bên dưới, bạn có thể thấy Chế độ tương thích có thể ảnh hưởng như thế nào đến các lệnh khả dụng. Vì tài liệu bên trái ở Chế độ tương thích nên nó chỉ hiển thị các lệnh có sẵn trong Word 2007.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"compatibility mode vs normal mode\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_convert_compare_crop.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Các lệnh trong Word 2007",
                        content: "<p>Để thoát khỏi Chế độ tương thích, bạn cần ** chuyển đổi ** tài liệu sang loại phiên bản hiện tại. Tuy nhiên, nếu bạn đang cộng tác với những người khác chỉ có quyền truy cập vào phiên bản Word cũ hơn, tốt nhất bạn nên để tài liệu ở Chế độ tương thích để định dạng không thay đổi.</p> <p>Bạn có thể Review <a href=\"../../../not-offline.html?url=https:/support.microsoft.com/en-us/office/Open-a-document-in-an-earlier-version-of-word-45c4dd2f-bf7b-4a0d-9ff2-7b2ff6b733f0?redirec tSourcePath=%252fen-US%252farticle%252fUse-Word-2016-to-Open-documents-created-in-earlier-versions-of-Word-5b38a00a-840b-4719-a8a3-ce155df82554&amp;ui=en-US&amp;rs=en-001&amp;ad=US\">hỗ trợ này page</a> từ Microsoft để tìm hiểu thêm về những tính năng bị tắt trong Chế độ tương thích.</p> <h4>Để chuyển đổi một tài liệu:</h4> <p>Nếu muốn truy cập vào các tính năng mới hơn, bạn có thể ** chuyển đổi ** tài liệu sang định dạng File hiện tại.</p> <ol> <li>Nhấp vào tab ** File ** để truy cập Backstage view, sau đó tìm và chọn lệnh ** Convert **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Convert command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_convert_command.png\" /> 2. Một hộp thoại sẽ xuất hiện. Nhấp vào ** OK ** để xác nhận nâng cấp File.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"converting a file to the newest file type\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/new_convert_ok.png\" /> 3. Tài liệu sẽ được chuyển đổi sang loại File mới nhất.</p> <p>Việc chuyển đổi File có thể gây ra một số thay đổi đối với ** Layout ** gốc của tài liệu.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_createopen_practice.doc\">tài liệu thực hành</a> của chúng tôi.</li> <li>Lưu ý rằng tài liệu sẽ mở ở ** Chế độ tương thích <strong>. ** Chuyển đổi ** nó sang định dạng File hiện tại. Nếu một hộp thoại xuất hiện hỏi bạn có muốn Close và mở lại File để xem các tính năng của New hay không, hãy chọn ** Có </strong>.</li> <li>Trong Backstage view, ** ghim ** một File hoặc thư mục.</li> </ol> <p>/en/word/save-and-sharing-documents/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_4",
                sessionId: 65,
                title: "Bài 4: Lưu và chia sẻ tài liệu",
                description: "Nội dung chi tiết cho bài Bài 4: Lưu và chia sẻ tài liệu.",
                video: "https://www.youtube.com/embed/iHuFzz7Wvt4",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_saveshare_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Khi tạo tài liệu New trong Word, bạn cần biết cách ** Save ** tài liệu đó để có thể truy cập và chỉnh sửa sau này. Giống như các phiên bản Word trước, bạn có thể Save tệp vào ** máy tính ** của mình. Nếu muốn, bạn cũng có thể Save tệp lên ** đám mây ** bằng cách sử dụng ** OneDrive **. Bạn thậm chí có thể ** Export ** và ** Share ** tài liệu trực tiếp từ Word.</p> <p>Xem video bên dưới để tìm hiểu cách Save và Share tài liệu Word.</p> <h4>Save và Save As</h4> <p>Word cung cấp hai cách để Save a File: ** Save ** và ** Save As **. Các Options này hoạt động theo cách tương tự nhau, có một số điểm khác biệt quan trọng.</p> <ul> <li>** Save **: Khi tạo hoặc chỉnh sửa tài liệu, bạn sẽ sử dụng lệnh ** Save ** cho Save các thay đổi của mình. Bạn sẽ sử dụng lệnh này hầu hết thời gian. Khi bạn Save một File, bạn sẽ chỉ cần chọn tên và vị trí File lần đầu tiên. Sau đó, bạn có thể nhấp vào lệnh Save để Save nó có cùng tên và vị trí.</li> <li>** Save As **: Bạn sẽ sử dụng lệnh này để tạo ** bản sao ** của tài liệu trong khi vẫn giữ bản gốc. Khi bạn sử dụng Save As, bạn sẽ cần chọn tên và/hoặc vị trí khác cho phiên bản đã sao chép.</li> </ul> <h4>Giới thiệu về OneDrive</h4> <p>Hầu hết các tính năng trong Microsoft Office, bao gồm Word, đều hướng đến việc lưu và chia sẻ tài liệu ** trực tuyến <strong>. Việc này được thực hiện với ** OneDrive </strong>, đây là không gian lưu trữ trực tuyến cho tài liệu và tệp của bạn. Nếu bạn muốn sử dụng OneDrive, hãy đảm bảo bạn đã đăng nhập vào Word bằng Microsoft Account của mình. Review bài học của chúng tôi về <a href=\"../../hiểu-OneDrive/1/index.html\">Hiểu OneDrive</a> để tìm hiểu thêm.</p> <h4>Tới Save một tài liệu:</h4> <p>Điều quan trọng là ** Save tài liệu của bạn ** bất cứ khi nào bạn bắt đầu dự án New hoặc thực hiện thay đổi đối với dự án hiện có. Lưu sớm và thường xuyên có thể giúp công việc của bạn không bị thất lạc. Bạn cũng cần phải chú ý Close đến ** nơi bạn Save ** tài liệu để có thể dễ dàng tìm thấy sau này.</p> <ol> <li>Xác định vị trí và chọn lệnh ** Save ** trên ** Quick ** ** Access Toolbar **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Save command on the Quick Access toolbar\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_command.png\" /> 2. Nếu bạn đang lưu File lần đầu tiên thì ngăn ** Save As ** sẽ xuất hiện trong ** Backstage ** ** View <strong>. 3. Sau đó, bạn sẽ cần chọn ** nơi đặt Save ** File và đặt tên ** File </strong>. Nhấp vào ** Duyệt ** để chọn vị trí trên máy tính của bạn. Bạn cũng có thể nhấp vào ** OneDrive ** để Save File cho OneDrive của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking Browse\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_browse.png\" /> 4. Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn Save tài liệu. 5. Nhập tên ** File ** cho tài liệu, sau đó nhấp vào ** Save **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the Save As dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_dialog.png\" /> 6. Tài liệu sẽ được ** lưu **. Bạn có thể nhấp lại vào lệnh ** Save ** để Save những thay đổi của bạn khi sửa đổi tài liệu.</p> <h4>Sử dụng Save As để tạo bản sao</h4> <p>Nếu bạn muốn Save một ** phiên bản khác ** của tài liệu trong khi vẫn giữ bản gốc, bạn có thể tạo ** bản sao <strong>. Ví dụ: nếu bạn có File có tên ** Báo cáo bán hàng </strong>, bạn có thể Save dưới dạng ** Báo cáo bán hàng 2 ** để bạn có thể chỉnh sửa New File và vẫn tham khảo lại phiên bản gốc.</p> <p>Để thực hiện việc này, bạn sẽ nhấp vào lệnh ** Save As ** trong Backstage view. Giống như khi lưu File lần đầu tiên, bạn sẽ cần chọn ** vị trí Save ** File và đặt cho nó một tên New ** File **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Save As command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_saveas.png\" /></p> <h4>Để thay đổi vị trí Save mặc định:</h4> <p>Nếu bạn không muốn sử dụng ** OneDrive **, bạn có thể cảm thấy khó chịu vì OneDrive được chọn làm vị trí mặc định khi lưu. Nếu thấy điều này bất tiện, bạn có thể thay đổi ** vị trí Save mặc định ** để ** PC này ** được chọn theo mặc định.</p> <ol> <li>Nhấp vào tab ** File ** để truy cập ** Hậu trường ** ** View **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the File tab to open Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/create_new_file.png\" /> 2. Nhấp vào ** Options **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Options in Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_default_options.png\" /> 3. Hộp thoại ** Word Options ** sẽ xuất hiện. Chọn ** Save ** ở bên trái, ** đánh dấu vào hộp ** bên cạnh ** Save vào Máy tính theo mặc định <strong>, sau đó nhấp vào ** OK </strong>. Vị trí Save mặc định sẽ được thay đổi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the default save location\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_default_dialog.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Tự động Phục hồi",
                        content: "<p>Word sẽ tự động lưu tài liệu của bạn vào một thư mục tạm thời trong khi bạn đang làm việc với chúng. Nếu bạn quên Save các thay đổi của mình hoặc nếu Word gặp sự cố, bạn có thể khôi phục File bằng ** Tự động phục hồi **.</p> <h4>Để sử dụng Tự động Phục hồi:</h4> <ol> <li>Open Từ. Nếu tìm thấy ** phiên bản được lưu tự động ** của File thì ngăn ** Tài liệu ** ** Phục hồi ** sẽ xuất hiện ở bên trái.</li> <li>Nhấp vào ** Open ** một File có sẵn. Tài liệu sẽ được ** phục hồi **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"recovering a document with the AutoRecover feature\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_autosave_recover.png\" /></p> <p>Theo mặc định, Word sẽ tự động lưu sau mỗi 10 phút. Nếu bạn đang chỉnh sửa tài liệu có thời lượng dưới 10 phút, Word có thể không tạo phiên bản lưu tự động.</p> <p>Nếu không thấy File mình cần, bạn có thể duyệt tất cả các tệp được lưu tự động từ ** Backstage ** ** View <strong>. Chọn tab ** File </strong>, nhấp vào ** Quản lý phiên bản <strong>, sau đó chọn ** Khôi phục tài liệu chưa lưu </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"accessing all unsaved versions\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_autosave_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Xuất tài liệu",
                        content: "<p>Theo mặc định, tài liệu Word được lưu ở loại <strong>.docx ** File. Tuy nhiên, có thể đôi khi bạn cần sử dụng ** loại File khác </strong>, chẳng hạn như ** PDF ** hoặc ** Tài liệu Word 97-2003 **. Thật dễ dàng để ** Export ** tài liệu của bạn từ Word đến nhiều loại File khác nhau.</p> <h4>Tới Export tài liệu dưới dạng PDF File:</h4> <p>Xuất tài liệu của bạn dưới dạng ** tài liệu Adobe Acrobat <strong>, thường được gọi là ** PDF File </strong>, có thể đặc biệt hữu ích nếu bạn đang chia sẻ tài liệu với người không có Word. PDF File sẽ giúp người nhận có thể View—nhưng không thể chỉnh sửa—nội dung tài liệu của bạn.</p> <ol> <li>Nhấp vào tab ** File ** để truy cập ** Hậu trường ** ** View <strong>, chọn ** Export </strong>, sau đó chọn ** Tạo PDF/XPS **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Export as PDF command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_export_pdf_command.png\" /> 2. Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn Export tài liệu, nhập tên ** File <strong>, sau đó nhấp vào ** Xuất bản.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"xuất tài liệu dưới dạng PDF File\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_export_pdf_dialog.png\" /></strong></p> <p>Nếu bạn cần chỉnh sửa tệp PDF File, Word cho phép bạn chuyển đổi tệp PDF File thành tài liệu có thể chỉnh sửa. Đọc hướng dẫn của chúng tôi về <a href=\"../../../word2013/editing-pdf-files/1/index.html\">Chỉnh sửa tệp PDF</a> để biết thêm thông tin.</p> <h4>Để Export một tài liệu sang các loại File khác:</h4> <p>Bạn cũng có thể thấy tài liệu này hữu ích Export đối với các loại File khác, chẳng hạn như ** Tài liệu Word 97-2003 ** nếu bạn cần Share với những người sử dụng phiên bản Word cũ hơn hoặc **.txt File ** nếu bạn cần phiên bản ** văn bản thuần ** của tài liệu.</p> <ol> <li>Nhấp vào tab ** File ** để truy cập ** Hậu trường ** ** View <strong>, chọn ** Export </strong>, sau đó chọn ** Thay đổi File Loại **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting Change File Type\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_export_file_command.png\" /> 2. Chọn một ** File ** ** loại <strong>, sau đó nhấp vào ** Save ** ** Như </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a file type for export\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_export_file_saveas.png\" /> 3. Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn Export tài liệu, nhập ** File tên <strong>, sau đó nhấp vào ** Save </strong>.</p> <p>Bạn cũng có thể sử dụng trình đơn thả xuống ** Save As loại ** trong hộp thoại ** Save As ** cho các tài liệu Save thuộc nhiều loại File khác nhau.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a file type from the Save As Type box drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_export_file_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Chia sẻ tài liệu",
                        content: "<p>Word giúp bạn dễ dàng ** Share ** ** và cộng tác ** trên các tài liệu bằng cách sử dụng ** OneDrive **. Trước đây, nếu bạn muốn Share một File với ai đó, bạn có thể gửi nó dưới dạng tệp đính kèm email. Mặc dù thuận tiện nhưng hệ thống này cũng tạo ** nhiều phiên bản ** của cùng một File, điều này có thể gây khó khăn cho việc sắp xếp.</p> <p>Khi bạn Share một tài liệu từ Word, thực tế là bạn đang cấp cho người khác quyền truy cập vào ** chính xác File **. Điều này cho phép bạn và những người Share cùng ** chỉnh sửa cùng một tài liệu ** mà không cần phải theo dõi nhiều phiên bản.</p> <p>Để Share một tài liệu, trước tiên tài liệu đó phải được ** lưu ** ** vào ** ** của bạn ** ** OneDrive **.</p> <h4>Tới Share một tài liệu:</h4> <ol> <li>Nhấp vào tab ** File ** để truy cập ** Hậu trường ** ** View <strong>, sau đó nhấp vào ** Share </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Share option in Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_share_command.png\" /> 2. Cửa sổ ** Gửi liên kết ** sẽ xuất hiện.</p> <p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về các cách khác nhau để Share tài liệu.</p> <p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"menu Gửi liên kết để chia sẻ\" src=\"image/share_menu.jpg\" title=\"menu Gửi liên kết để chia sẻ\" /></p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_5",
                sessionId: 65,
                title: "Bài 5: văn bản cơ bản",
                description: "Nội dung chi tiết cho bài Bài 5: văn bản cơ bản.",
                video: "https://www.youtube.com/embed/vmEzxQfVj5c",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_textbasics_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Nếu bạn New sử dụng Microsoft Word, bạn sẽ cần tìm hiểu những kiến ​​thức cơ bản về nhập, chỉnh sửa và sắp xếp văn bản. Các tác vụ cơ bản bao gồm khả năng ** thêm <strong>, ** xóa ** và ** di chuyển ** văn bản trong tài liệu của bạn cũng như cách ** cắt </strong>, ** sao chép ** và ** dán **.</p> <p>Hãy xem video bên dưới để tìm hiểu những kiến ​​thức cơ bản về cách làm việc với văn bản trong Word.</p> <h4>Sử dụng điểm chèn để thêm văn bản</h4> <p>** điểm chèn ** là đường thẳng đứng nhấp nháy trong tài liệu của bạn. Nó cho biết nơi bạn có thể nhập ** văn bản ** trên trang. Bạn có thể sử dụng điểm chèn theo nhiều cách khác nhau.</p> <ul> <li>** Blank document **: Khi New Blank document mở ra, điểm chèn sẽ xuất hiện ở góc trên cùng bên trái của trang. Nếu muốn, bạn có thể bắt đầu nhập từ vị trí này.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_insertion_point.png\" /> * ** Thêm dấu cách **: Nhấn ** phím cách ** để thêm ** dấu cách ** sau một từ hoặc ở giữa văn bản.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding spaces with the space bar\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_insertion_space_crop.png\" /> * ** New dòng đoạn **: Nhấn ** Enter ** trên bàn phím để di chuyển điểm chèn sang dòng đoạn tiếp theo.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pressing Enter to create a new line\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_insertion_newline_crop.png\" /> * ** Vị trí thủ công **: Sau khi bắt đầu nhập, bạn có thể sử dụng chuột để di chuyển điểm chèn đến vị trí cụ thể trong tài liệu của mình. Chỉ cần nhấp vào ** vị trí ** trong văn bản nơi bạn muốn đặt nó.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"moving the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_insertion_move_crop.png\" /></p> <ul> <li>** Phím mũi tên <strong>: Bạn cũng có thể sử dụng các phím mũi tên trên bàn phím để di chuyển điểm chèn. Các phím mũi tên ** trái ** và ** phải ** sẽ di chuyển giữa ** các ký tự liền kề ** trên cùng một dòng, trong khi các mũi tên ** lên ** và ** xuống ** sẽ di chuyển giữa ** các dòng đoạn </strong>. Bạn cũng có thể nhấn ** Ctrl+Left ** hoặc ** Ctrl+Right ** để di chuyển nhanh giữa toàn bộ các từ.</li> </ul> <p>Trong New Blank document, bạn có thể nhấp đúp chuột để di chuyển điểm chèn đến nơi khác trên trang.</p> <h4>Chọn văn bản</h4> <p>Trước khi có thể di chuyển hoặc định dạng văn bản, bạn cần ** chọn nó **. Để thực hiện việc này, hãy nhấp và kéo chuột qua văn bản, sau đó thả chuột. ** hộp được đánh dấu ** sẽ xuất hiện trên văn bản đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_select.png\" /></p> <p>Khi bạn chọn văn bản hoặc hình ảnh trong Word, ** thanh công cụ di chuột ** với các phím tắt lệnh sẽ xuất hiện. Nếu lúc đầu thanh công cụ không xuất hiện, hãy thử di chuột qua vùng chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Hover Toolbar\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_select_splat.png\" /></p> <h4>Để chọn nhiều dòng văn bản:</h4> <ol> <li>Di chuyển con trỏ chuột sang bên trái của bất kỳ dòng nào để nó trở thành ** mũi tên nghiêng phải **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"placing the cursor to the left of the text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_select_mult_place.png\" /> 2. Bấm chuột. Dòng sẽ được chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a line\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_select_mult_oneline.png\" /> 3. Để chọn ** nhiều dòng <strong>, hãy nhấp và kéo chuột lên hoặc xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chọn nhiều dòng văn bản\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_select_mult_several.png\" /> 4. Để ** chọn tất cả ** văn bản trong tài liệu của bạn, hãy chọn lệnh ** Chọn ** trên tab Home, sau đó nhấp vào ** Chọn tất cả </strong>. Bạn cũng có thể nhấn ** Ctrl+A ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting all text in the document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_select_mult_selectall.png\" /></p> <p>Các phím tắt khác bao gồm ** nhấp đúp ** để chọn một từ và ** nhấp ba lần ** để chọn toàn bộ câu hoặc đoạn văn.</p> <h4>Để xóa văn bản:</h4> <p>Có một số cách để ** xóa ** hoặc xóa văn bản:</p> <ul> <li>Để xóa văn bản ở ** trái ** của điểm chèn, hãy nhấn phím ** Backspace ** trên bàn phím của bạn.</li> <li>Để xóa văn bản ở ** bên phải ** điểm chèn, hãy nhấn phím ** Delete ** trên bàn phím của bạn.</li> <li>Chọn ** văn bản ** bạn muốn xóa, sau đó nhấn phím ** Xóa **.</li> </ul> <p>Nếu bạn chọn văn bản và bắt đầu nhập, văn bản đã chọn sẽ tự động bị xóa và thay thế bằng văn bản New.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Sao chép và di chuyển văn bản",
                        content: "<p>Word cho phép bạn ** sao chép ** văn bản đã có trong tài liệu của bạn và ** dán ** văn bản đó vào những nơi khác, điều này có thể Save bạn tốn rất nhiều thời gian và công sức. Nếu bạn muốn di chuyển văn bản trong tài liệu của mình, bạn có thể ** cắt và dán ** hoặc ** kéo và thả **.</p> <h4>Để sao chép và dán văn bản:</h4> <ol> <li>Chọn ** văn bản ** bạn muốn sao chép.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the text to copy\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_select.png\" /> 2. Nhấp vào lệnh ** Sao chép ** trên tab ** Home **. Bạn cũng có thể nhấn ** Ctrl+C ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the copy command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_command.png\" /> 3. Đặt điểm chèn vào nơi bạn muốn văn bản xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting where the copied text will appear\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_destination.png\" /> 4. Nhấp vào lệnh ** Dán ** trên tab Home. Bạn cũng có thể nhấn ** Ctrl+V ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Paste command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_paste_command.png\" /> 5. Văn bản sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the pasted text in the new location\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_done.png\" /></p> <h4>Để cắt và dán văn bản:</h4> <ol> <li>Chọn ** văn bản ** bạn muốn cắt.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text to cut\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_select.png\" /> 2. Nhấp vào lệnh ** Cut ** trên tab ** Home **. Bạn cũng có thể nhấn ** Ctrl+X ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the cut command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_cut_command.png\" /> 3. Đặt điểm chèn vào nơi bạn muốn văn bản xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a place for the cut text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_cut_destination.png\" /> 4. Nhấp vào lệnh ** Dán ** trên tab ** Home **. Bạn cũng có thể nhấn ** Ctrl+V ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the paste command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_copy_paste_command.png\" /> 5. Văn bản sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the cut text pasted in a new location\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_cut_done.png\" /></p> <p>Bạn cũng có thể cắt, sao chép và dán bằng cách nhấp chuột phải vào tài liệu của mình và chọn hành động mong muốn từ menu thả xuống. Khi sử dụng phương pháp này để dán, bạn có thể chọn từ ba Options xác định cách định dạng văn bản: ** Giữ định dạng nguồn <strong>, ** Hợp nhất định dạng ** và ** Chỉ giữ văn bản </strong>. Bạn có thể di chuột qua từng biểu tượng để xem nó trông như thế nào trước khi chọn.</p> <h4>Để kéo và thả văn bản:</h4> <ol> <li>Chọn ** văn bản ** bạn muốn di chuyển.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text to move\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_drag_select.png\" /> 2. Nhấp và kéo ** văn bản ** đến vị trí bạn muốn nó xuất hiện. Một hình chữ nhật nhỏ sẽ xuất hiện bên dưới mũi tên để cho biết bạn đang di chuyển văn bản.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"kéo và thả văn bản\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_drag_move.png\" /> 3. Nhả chuột và văn bản sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the moved text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_drag_done.png\" /></p> <p>Nếu văn bản ** không xuất hiện ** ở vị trí chính xác mà bạn muốn, bạn có thể nhấn phím ** Enter ** trên bàn phím để di chuyển văn bản đến dòng New.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Hoàn tác và làm lại",
                        content: "<p>Giả sử bạn đang làm việc trên một tài liệu và vô tình xóa một số văn bản. May mắn thay, bạn sẽ không phải gõ lại mọi thứ bạn vừa xóa! Word cho phép bạn ** hoàn tác ** hành động gần đây nhất của bạn khi bạn mắc lỗi như thế này.</p> <p>Để thực hiện việc này, hãy tìm và chọn lệnh ** Hoàn tác ** trên Quick Access Toolbar. Bạn cũng có thể nhấn ** Ctrl+Z ** trên bàn phím. Bạn có thể tiếp tục sử dụng lệnh này để hoàn tác nhiều thay đổi liên tiếp.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the Undo command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_undo.png\" /></p> <p>Ngược lại, lệnh ** Redo ** cho phép bạn đảo ngược thao tác hoàn tác cuối cùng. Bạn cũng có thể truy cập lệnh này bằng cách nhấn ** Ctrl+Y ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Redo command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_undo_redo.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Biểu tượng",
                        content: "<p>Nếu bạn cần Insert một ký tự bất thường không có trên bàn phím, chẳng hạn như biểu tượng bản quyền (©) hoặc nhãn hiệu (™), bạn thường có thể tìm thấy ký tự đó bằng lệnh ** Symbol **.</p> <h4>Gửi tới Insert một biểu tượng:</h4> <ol> <li>Đặt điểm chèn vào nơi bạn muốn biểu tượng xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing where the symbol will appear\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_symbol_select.png\" /> 2. Nhấp vào tab ** Insert **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"navigating to the insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_symbol_insert.png\" /> 3. Xác định vị trí và chọn lệnh ** Symbol <strong>, sau đó chọn biểu tượng mong muốn từ menu thả xuống. Nếu bạn không thấy biểu tượng mình muốn, hãy chọn ** Biểu tượng khác </strong>...</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inserting a symbol\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_symbol_command.png\" /> 4. Biểu tượng sẽ xuất hiện trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the inserted symbol\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/text_symbol_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_textbasics_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 2 **.</li> <li>Đặt điểm chèn ở trên cùng của tài liệu và gõ ** Bây giờ giới thiệu...**</li> <li>Sử dụng các phím mũi tên để di chuyển điểm chèn đến giá ** Gói chi tiết chữ ký ** và thay đổi thành <strong>$99,99 </strong><strong>/tháng </strong>.</li> <li>Ở cuối tài liệu, sử dụng ** kéo và thả ** để di chuyển ** Chỉ cần để lại thông tin chi tiết cho chúng tôi ** đến cuối dòng cuối cùng.</li> <li>Ở cuối dòng bạn vừa di chuyển, Insert ** biểu tượng nhãn hiệu **. Nếu bạn không thể tìm thấy biểu tượng nhãn hiệu, Insert một biểu tượng khác mà bạn chọn.</li> <li>Khi bạn hoàn tất, tài liệu của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Text Basics Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_textbasics2_img.png\" /></p> <p>/en/word/formatting-text/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_6",
                sessionId: 65,
                title: "Bài 6: định dạng văn bản",
                description: "Nội dung chi tiết cho bài Bài 6: định dạng văn bản.",
                video: "https://www.youtube.com/embed/ViGf0RKbCyA",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_formattext_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>** Văn bản được định dạng ** có thể Draw thu hút sự chú ý của người đọc đến các phần cụ thể của tài liệu và nhấn mạnh thông tin quan trọng. Trong Word, bạn có một số Options để điều chỉnh văn bản, bao gồm ** font <strong>, ** size ** và ** color </strong>. Bạn cũng có thể điều chỉnh ** căn chỉnh ** văn bản để thay đổi cách hiển thị trên trang.</p> <p>Xem video bên dưới để tìm hiểu thêm về định dạng văn bản trong Word.</p> <h4>Để thay đổi kích thước phông chữ:</h4> <ol> <li>Chọn văn bản bạn muốn sửa đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to modify\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_size_select.png\" /> 2. Trên tab ** Home <strong>, nhấp vào mũi tên thả xuống Cỡ chữ. Chọn cỡ chữ từ menu. Nếu cỡ chữ bạn cần không có sẵn trong menu, bạn có thể nhấp vào hộp Cỡ chữ và ** gõ ** cỡ chữ mong muốn, sau đó nhấn ** Enter </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a font size\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_size_menu.png\" /> 3. Kích thước phông chữ sẽ thay đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new font size\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_size_result.png\" /></p> <p>Bạn cũng có thể sử dụng lệnh ** Grow Font ** và ** Shrink Font ** để thay đổi kích thước phông chữ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Grow Font and Shrink Font commands\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_size_grow_shrink.png\" /></p> <h4>Để thay đổi phông chữ:</h4> <p>Theo mặc định, phông chữ của mỗi tài liệu New được đặt thành Calibri. Tuy nhiên, Word cung cấp nhiều phông chữ khác mà bạn có thể sử dụng để tùy chỉnh văn bản.</p> <ol> <li>Chọn văn bản bạn muốn sửa đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to modify\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_font_select.png\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào ** mũi tên thả xuống ** bên cạnh hộp ** Phông chữ </strong>. Một menu các kiểu phông chữ sẽ xuất hiện. 3. Chọn kiểu phông chữ bạn muốn sử dụng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the font style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_font_menu.png\" /> 4. Phông chữ sẽ thay đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new font style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_font_result.png\" /></p> <p>Khi tạo một tài liệu chuyên nghiệp hoặc một tài liệu có nhiều đoạn văn, bạn sẽ muốn chọn phông chữ dễ đọc. Cùng với Calibri, các phông chữ đọc tiêu chuẩn bao gồm Cambria, Times New Roman và Arial.</p> <h4>Để thay đổi màu phông chữ:</h4> <ol> <li>Chọn văn bản bạn muốn sửa đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to modify\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_color_select.png\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào mũi tên thả xuống ** Màu phông chữ </strong>. Trình đơn ** Màu phông chữ ** xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the font color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_color_menu2.png\" /> 3. Chọn màu phông chữ bạn muốn sử dụng. Màu phông chữ sẽ thay đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new font color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_color_result2.png\" /></p> <p>Lựa chọn màu sắc của bạn không bị giới hạn ở menu thả xuống xuất hiện. Chọn ** Màu khác ** ở cuối menu để truy cập hộp thoại ** Màu <strong>. Chọn màu bạn muốn, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Colors dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_color_more_colors.png\" /></p> <h4>Để sử dụng các lệnh In đậm, Nghiêng và Gạch chân:</h4> <p>Các lệnh In đậm, Nghiêng và Gạch chân có thể được sử dụng để Help Draw chú ý đến các từ hoặc cụm từ quan trọng.</p> <ol> <li>Chọn văn bản bạn muốn sửa đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to modify\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_emphasis_select.png\" /> 2. Trên tab Home, hãy nhấp vào lệnh In đậm (<strong> B </strong>), In nghiêng (<em> I </em>) hoặc Gạch dưới (U) trong nhóm ** F <strong>** ont </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ nhấp vào In đậm.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Making text bold\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_emphasis_command.png\" /> 3. Văn bản đã chọn sẽ được sửa đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The bolded text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_emphasis_result.png\" /></p> <h4>Để thay đổi kiểu chữ:</h4> <p>Khi cần thay đổi nhanh kiểu chữ, bạn có thể sử dụng lệnh ** Change Case ** thay vì xóa và gõ lại văn bản.</p> <ol> <li>Chọn văn bản bạn muốn sửa đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to modify\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_case_select.png\" /> 2. Trên tab Home, hãy nhấp vào lệnh ** Thay đổi chữ hoa ** trong nhóm ** Phông chữ **. 3. Một menu thả xuống sẽ xuất hiện. Chọn tùy chọn trường hợp mong muốn từ menu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the text case\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_case_menu.png\" /> 4. Trường hợp văn bản sẽ được thay đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new text case\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_case_result.png\" /></p> <h4>Để đánh dấu văn bản:</h4> <p>Đánh dấu có thể là một công cụ hữu ích để đánh dấu văn bản quan trọng trong tài liệu của bạn.</p> <ol> <li>Chọn văn bản bạn muốn đánh dấu.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to highlight\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_highlight_select.png\" /> 2. Từ tab ** Home <strong>, hãy nhấp vào mũi tên thả xuống ** Màu đánh dấu văn bản </strong>. Trình đơn ** Màu tô sáng ** xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Choosing a highlight color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_highlight_menu.png\" /> 3. Chọn vùng sáng mong muốn ** màu **. Văn bản đã chọn sau đó sẽ được đánh dấu trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The highlighted text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_highlight_result.png\" /></p> <p>Để xóa đánh dấu, hãy chọn văn bản được đánh dấu, sau đó nhấp vào mũi tên thả xuống ** Màu đánh dấu văn bản **. Chọn ** Không màu ** từ trình đơn thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing highlighting\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_highlight_no_color.png\" /></p> <p>Nếu bạn cần đánh dấu một số dòng văn bản, việc thay đổi chuột thành ** công cụ tô sáng ** có thể là một giải pháp thay thế hữu ích cho việc chọn và đánh dấu từng dòng riêng lẻ. Nhấp vào lệnh ** Màu đánh dấu văn bản ** và con trỏ thay đổi thành bút đánh dấu. Sau đó, bạn có thể nhấp và kéo bút đánh dấu qua các dòng bạn muốn đánh dấu.</p> <h4>Để thay đổi căn chỉnh văn bản:</h4> <p>Theo mặc định, Word căn chỉnh văn bản theo ** lề trái ** trong tài liệu New. Tuy nhiên, có thể đôi khi bạn muốn điều chỉnh căn chỉnh văn bản về giữa hoặc sang phải.</p> <ol> <li>Chọn văn bản bạn muốn sửa đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to highlight\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_alignment_select.png\" /> 2. Trên tab ** Home <strong>, chọn một trong bốn căn chỉnh Options từ nhóm ** Đoạn </strong>. Trong ví dụ của chúng tôi, chúng tôi đã chọn ** Căn chỉnh giữa **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Paragraph alignment commands\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_alignment_command.png\" /> 3. Văn bản sẽ được căn chỉnh lại trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The realigned text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/formatting_alignment_result.png\" /></p> <p>Nhấp vào mũi tên trong trình chiếu bên dưới để tìm hiểu thêm về cách căn chỉnh bốn văn bản Options.</p> <ul> <li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"căn trái\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/format_align_wide_1.png\" /></li> </ul> <p>** Căn chỉnh văn bản sang trái <strong>**:</strong> Thao tác này căn chỉnh tất cả văn bản đã chọn sang lề trái. Lệnh Căn chỉnh văn bản còn lại là cách căn chỉnh phổ biến nhất và được chọn theo mặc định khi tài liệu New được tạo. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"căn giữa\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/format_align_wide_2.png\" /></p> <p>** Giữa <strong><em>*</em>:</strong> Tùy chọn này căn chỉnh văn bản ở khoảng cách bằng nhau tính từ lề trái và lề phải. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"căn phải\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/format_align_wide_3.png\" /></p> <p>** Căn chỉnh văn bản đúng <strong>**:</strong> Điều này căn chỉnh tất cả văn bản đã chọn sang lề phải. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hợp lý\" src=\"hình ảnh/format_align_wide_4.png\" /></p> <p>** Căn đều <strong>**:</strong> Văn bản được căn đều bằng nhau ở cả hai bên. Nó xếp hàng ngang nhau ở lề phải và trái. Nhiều tờ báo và tạp chí sử dụng đầy đủ lời biện minh.</p> <p>Bạn có thể sử dụng tính năng ** Đặt làm mặc định ** tiện lợi của Word để ** Save ** tất cả các thay đổi ** định dạng ** mà bạn đã thực hiện và tự động áp dụng chúng cho tài liệu New. Để tìm hiểu cách thực hiện việc này, hãy đọc bài viết của chúng tôi về <a href=\"../../../word-tips/changed-your-default-settings-in-word/1/index.html\" title=\"Cách thay đổi cài đặt mặc định của bạn trong Word\">Thay đổi cài đặt mặc định của bạn trong Word</a>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_formattext_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 2 **.</li> <li>Chọn dòng chữ ** Cho thuê ** và thay đổi ** cỡ chữ ** thành ** 48 pt **.</li> <li>Với văn bản vẫn được chọn, hãy thay đổi ** font ** thành ** Franklin Gothic Demi <strong>. ** Lưu ý </strong>: Nếu bạn không thấy phông chữ này trong menu, bạn có thể chọn phông chữ khác.</li> <li>Sử dụng lệnh ** Thay đổi trường hợp ** để thay đổi Cho thuê thành ** CHỮ HOA **.</li> <li>Thay đổi màu của dòng chữ ** For Rent ** thành ** Gold, Accent 4 **.</li> <li>** Xóa phần đánh dấu ** khỏi số điện thoại (919-555-7237).</li> <li>Chọn tất cả văn bản từ ** For Rent ** đến <strong>(919-555-7237)</strong> và ** Center Align **.</li> <li>** Chữ nghiêng ** văn bản trong đoạn bên dưới ** Giới thiệu về Villa Piña **.</li> <li> <p>Khi bạn hoàn tất, trang của bạn sẽ trông như thế này:</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formatting Text Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_format_text_img.png\" /></p> </li> </ol> <p>/en/word/using-find-and-replace/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_7",
                sessionId: 65,
                title: "Bài 7: Sử dụng-tìm-và-thay thế",
                description: "Nội dung chi tiết cho bài Bài 7: Sử dụng-tìm-và-thay thế.",
                video: "https://www.youtube.com/embed/p3Ql9y3eEyo",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_findreplace_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Khi bạn làm việc với các tài liệu dài hơn, việc tìm một từ hoặc cụm từ cụ thể có thể khó khăn và tốn thời gian. Word có thể tự động tìm kiếm tài liệu của bạn bằng tính năng ** Tìm ** và cho phép bạn nhanh chóng thay đổi các từ hoặc cụm từ bằng cách sử dụng ** Thay thế **.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng Find and Replace.</p> <h4>Để tìm văn bản:</h4> <p>Trong ví dụ của chúng tôi, chúng tôi đã viết một bài báo học thuật và sẽ sử dụng lệnh Tìm để định vị tất cả các trường hợp của một từ cụ thể.</p> <ol> <li>Từ tab ** Home <strong>, hãy nhấp vào lệnh ** Tìm </strong>. Bạn cũng có thể nhấn ** Ctrl+F ** trên bàn phím.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Find command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-20-50.png\" title=\"the Find command\" /> 2. ** Khung điều hướng ** sẽ xuất hiện ở bên trái màn hình. 3. Nhập văn bản bạn muốn tìm vào trường ở đầu ngăn điều hướng. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập từ mà chúng tôi đang tìm kiếm.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"typing a search term\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-22-01.png\" title=\"typing a search term\" /> 4. Nếu tìm thấy văn bản trong tài liệu, văn bản đó sẽ được đánh dấu màu vàng và ** bản xem trước kết quả ** sẽ xuất hiện trong ** ngăn điều hướng **. Bạn cũng có thể nhấp vào một trong các kết quả bên dưới mũi tên để chuyển đến kết quả đó.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"search results with search terms highlighted\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_08-48-30.png\" title=\"search results with search terms highlighted\" /> 5. Khi bạn hoàn tất, hãy nhấp vào ** X ** để Close khung điều hướng. Điểm nổi bật sẽ biến mất.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"closing the Navigation pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-23-11.png\" title=\"closing the Navigation pane\" /></p> <p>Để tìm kiếm thêm Options, hãy nhấp vào mũi tên thả xuống bên cạnh trường tìm kiếm.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"expanding more search options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-23-43.png\" title=\"expanding more search options\" /></p> <h4>Để thay thế văn bản:</h4> <p>Bạn có thể phát hiện ra rằng mình đã mắc lỗi nhiều lần trong toàn bộ tài liệu của mình, chẳng hạn như viết sai chính tả tên của ai đó hoặc bạn cần đổi một từ hoặc cụm từ cụ thể sang một từ hoặc cụm từ khác. Bạn có thể sử dụng tính năng ** Find and Replace ** của Word để nhanh chóng sửa đổi. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng Find and Replace để thay đổi tiêu đề của một tạp chí để nó được viết tắt.</p> <ol> <li>Từ tab ** Home <strong>, hãy nhấp vào lệnh ** Thay thế </strong>. Bạn cũng có thể nhấn ** Ctrl+H ** trên bàn phím.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Replace command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-25-23.png\" title=\"the Replace command\" /> 2. Hộp thoại ** Find and Replace ** sẽ xuất hiện. 3. Nhập văn bản bạn muốn tìm vào trường ** Find what:<strong>. 4. Nhập văn bản bạn muốn thay thế vào trường ** Thay thế bằng:</strong>, sau đó nhấp vào ** Tìm tiếp **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking Find Next\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-26-17.png\" title=\"clicking Find Next\" /> 5. Word sẽ tìm phiên bản đầu tiên của văn bản và ** đánh dấu ** nó bằng màu xám. 6. ** Review ** văn bản để đảm bảo bạn muốn thay thế nó. Trong ví dụ của chúng tôi, văn bản là một phần của tiêu đề bài báo và không cần phải thay thế. Chúng ta sẽ nhấp lại vào ** Tìm tiếp ** để chuyển sang phiên bản tiếp theo.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using Find Next to skip a word\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_13-37-16.png\" title=\"using Find Next to skip a word\" /> 7. Nếu bạn muốn thay thế nó, bạn có thể nhấp vào ** Thay thế ** để thay đổi từng trường hợp văn bản. Bạn cũng có thể nhấp vào ** Thay thế tất cả ** để thay thế mọi phiên bản của văn bản trong toàn bộ tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"replacing Sewanee Review with SR\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-29-47.png\" title=\"replacing Sewanee Review with SR\" /> 8. Văn bản sẽ được thay thế.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"showing the replaced text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_09-08-57.png\" title=\"showing the replaced text\" /> 9. Khi bạn hoàn tất, hãy nhấp vào ** Close ** hoặc ** Hủy ** để Close hộp thoại.</p> <p>Để tìm kiếm bổ sung Options, hãy nhấp vào ** Thêm ** trong hộp thoại Find and Replace. Từ đây, bạn có thể chọn Options bổ sung, chẳng hạn như khớp chữ hoa chữ thường và bỏ qua dấu câu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking More to see additional Find options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_12-34-52.png\" title=\"clicking More to see additional Find options\" /></p> <p>Khi sử dụng Thay thế tất cả, điều quan trọng cần nhớ là nó có thể tìm thấy những kết quả phù hợp mà bạn không lường trước được và có thể bạn không thực sự muốn thay đổi. Bạn chỉ nên sử dụng tùy chọn này nếu bạn hoàn toàn chắc chắn rằng nó sẽ không thay thế bất cứ thứ gì bạn không mong muốn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_findreplace_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Sử dụng tính năng ** Tìm <strong>, xác định trang nào đề cập đến ** Caroline Gordon </strong>.</li> <li>Cái tên T.S. Eliot viết sai chính tả. Thay thế tất cả các phiên bản của ** Elliot ** bằng ** Eliot **. Khi hoàn tất, đáng lẽ bạn phải thực hiện ba lần thay thế.</li> <li>Tên của Allen Tate cũng sai chính tả. ** Find and Replace ** Alan và Allen. ** Gợi ý <strong>: Không sử dụng ** Thay thế tất cả </strong>. Nếu không, bạn có thể vô tình thay thế từ ** cân bằng **.</li> </ol> <p>/en/word/indents-and-tabs/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_8",
                sessionId: 65,
                title: "Bài 8: thụt lề và tab",
                description: "Nội dung chi tiết cho bài Bài 8: thụt lề và tab.",
                video: "https://www.youtube.com/embed/vJGYWVe52T4",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_indentstabs_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Văn bản thụt lề sẽ thêm cấu trúc vào tài liệu của bạn bằng cách cho phép bạn phân tách thông tin. Cho dù bạn muốn di chuyển một dòng hay toàn bộ đoạn văn, bạn có thể sử dụng ** bộ chọn tab ** và ** ngang Ruler ** để đặt ** tab ** và ** thụt lề **.</p> <p>Hãy xem video bên dưới để tìm hiểu thêm về cách sử dụng thụt lề và tab trong Word.</p> <h4>Thụt lề văn bản</h4> <p>Trong nhiều loại tài liệu, bạn có thể chỉ muốn thụt lề dòng đầu tiên của mỗi đoạn văn. Điều này giúp ** tách biệt ** các đoạn văn một cách trực quan **** tách biệt ** với nhau.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"paragraphs with first line indents\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-48-23.png\" title=\"paragraphs with first line indents\" /></p> <p>Bạn cũng có thể thụt lề mọi dòng ** ngoại trừ dòng đầu tiên <strong>, được gọi là ** thụt lề treo </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Works Cited page with hanging indents\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/indent_hanging_example2.png\" title=\"Works Cited page with hanging indents\" /></p> <h4>Để thụt lề bằng phím Tab:</h4> <p>Cách thụt lề nhanh chóng là sử dụng phím ** Tab <strong>. Điều này sẽ tạo ra mức thụt lề dòng đầu tiên là ** 1/2 inch </strong>.</p> <ol> <li>Đặt điểm chèn ** ở đầu ** đoạn bạn muốn thụt lề.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"insertion point at the beginning of a paragraph\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-52-21.png\" title=\"insertion point at the beginning of a paragraph\" /> 2. Nhấn phím ** Tab <strong>. Trên Ruler, bạn sẽ thấy ** điểm đánh dấu thụt lề dòng đầu tiên ** di chuyển sang bên phải ** 1/2 inch </strong>. 3. Dòng đầu tiên của đoạn văn sẽ được thụt lề.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"first line indent in a paragraph\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-15-13.png\" title=\"first line indent in a paragraph\" /></p> <p>Nếu bạn không thể thấy Ruler, hãy chọn tab ** View <strong>, sau đó nhấp vào hộp kiểm bên cạnh ** Ruler </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"enabling the Ruler\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-07_13-10-13.png\" title=\"enabling the Ruler\" /></p> <h4>Dấu thụt lề</h4> <p>Trong một số trường hợp, bạn có thể muốn có nhiều quyền kiểm soát hơn đối với việc thụt lề. Word cung cấp ** điểm đánh dấu thụt lề ** cho phép bạn thụt lề đoạn văn đến vị trí bạn muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"indent markers on the Ruler\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-07_13-43-05.png\" title=\"indent markers on the Ruler\" /></p> <p>Các điểm đánh dấu thụt lề nằm ở bên trái của Ruler ngang và chúng cung cấp một số Options thụt lề:</p> <ul> <li>** Điểm đánh dấu thụt lề dòng đầu tiên ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"thụt lề dòng đầu tiên\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/tabs_inline_first.png\" /> điều chỉnh thụt lề dòng đầu tiên</li> <li>** Điểm đánh dấu thụt lề treo ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"treo thụt lề\" src=\"image/tabs_inline_hanging.png\" /> điều chỉnh thụt lề treo</li> <li>** Điểm đánh dấu thụt lề trái ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"thụt lề trái\" src=\"image/tabs_inline_left_indent.png\" /> di chuyển ** cả hai ** dấu thụt lề dòng đầu tiên và dấu thụt lề treo cùng lúc (thụt lề tất cả các dòng trong một đoạn văn)</li> </ul> <h4>Để thụt lề bằng cách sử dụng dấu thụt lề:</h4> <ol> <li>Đặt ** điểm chèn ** vào bất kỳ vị trí nào trong đoạn văn bạn muốn thụt lề hoặc chọn một hoặc nhiều đoạn văn.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting multiple paragraphs\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-19-55.png\" title=\"selecting multiple paragraphs\" /> 2. Nhấp và kéo ** điểm đánh dấu thụt lề ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhấp và kéo điểm đánh dấu thụt lề trái.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"moving the left indent marker\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-20-51.png\" title=\"moving the left indent marker\" /> 3. Thả chuột. Các đoạn văn sẽ được thụt lề.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"indented paragraphs\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-21-37.png\" title=\"indented paragraphs\" /></p> <h4>Để thụt lề bằng lệnh thụt lề:</h4> <p>Nếu bạn muốn thụt lề nhiều dòng văn bản hoặc tất cả các dòng của một đoạn văn, bạn có thể sử dụng ** Lệnh thụt lề <strong>. Các lệnh thụt lề sẽ điều chỉnh mức thụt lề theo ** gia số 1/2 inch </strong>.</p> <ol> <li>Chọn văn bản bạn muốn thụt lề.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text in a resume\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/indent_commands_before.png\" title=\"selecting text in a resume\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào lệnh ** Tăng thụt lề ** hoặc ** Giảm thụt lề </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"increasing the indent\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-08_11-24-47.png\" title=\"increasing the indent\" /> 3. Văn bản sẽ thụt lề.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"indented text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/indent_commands_after.png\" title=\"indented text\" /></p> <p>Để tùy chỉnh mức thụt lề, hãy chọn tab ** Layout ** gần các giá trị mong muốn trong các hộp bên dưới ** Thụt lề **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"customizing indent amounts\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-26-25.png\" title=\"customizing indent amounts\" /></p> <h4>Tab</h4> <p>Việc sử dụng ** tab ** giúp bạn kiểm soát nhiều hơn vị trí của văn bản. Theo mặc định, mỗi lần bạn nhấn phím Tab, điểm chèn sẽ di chuyển ** 1/2 inch ** sang phải. Việc thêm ** điểm dừng tab ** vào ** Ruler ** cho phép bạn thay đổi kích thước của các tab và Word thậm chí còn cho phép bạn áp dụng nhiều điểm dừng tab cho một dòng. Ví dụ: trên sơ yếu lý lịch, bạn có thể ** căn lề trái ** phần đầu dòng và ** căn phải ** phần cuối dòng bằng cách thêm ** Tab phải **, như minh họa trong hình ảnh bên dưới.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"example of tab stops\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-29-35.png\" title=\"example of tab stops\" /></p> <p>Nhấn phím Tab có thể thêm ** tab ** hoặc tạo ** thụt lề dòng đầu tiên **, tùy thuộc vào vị trí của điểm chèn. Nói chung, nếu điểm chèn ở đầu đoạn văn hiện có, nó sẽ tạo ra thụt lề dòng đầu tiên; nếu không, nó sẽ tạo một tab.</p> <h4>Bộ chọn tab</h4> <p>** Bộ chọn tab ** nằm phía trên ** dọc Ruler ** ở bên trái. Di chuột qua bộ chọn tab để xem tên của ** điểm dừng tab ** đang hoạt động.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"tab selector\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-30-55.png\" title=\"tab selector\" /></p> <h4>Các loại điểm dừng tab:</h4> <ul> <li>** Tab bên trái **<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"điểm dừng tab bên trái\" src=\"image/2016-01-07_15-39-27.png\" /> căn trái văn bản tại điểm dừng tab</li> <li>** Tab giữa ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"điểm dừng tab ở giữa\" src=\"image/tabs_inline_center.png\" /> căn giữa văn bản xung quanh điểm dừng tab</li> <li>** Tab bên phải ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"điểm dừng tab bên phải\" src=\"image/2016-01-05_16-20-24.png\" /> căn chỉnh văn bản tại điểm dừng tab</li> <li>** Tab thập phân ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"tab thập phân\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_16-21-10.png\" /> căn chỉnh các số thập phân bằng dấu thập phân</li> <li>** Bar Tab ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"bar tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_16-22-04.png\" /> vẽ một đường thẳng đứng trên tài liệu</li> <li>** Thụt lề dòng đầu tiên ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"thụt lề dòng đầu tiên\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/tabs_inline_first.png\" /> chèn dấu thụt lề vào Ruler và thụt dòng văn bản đầu tiên trong một đoạn văn</li> <li>** Thụt lề treo ** <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"treo thụt lề\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/tabs_inline_hanging.png\" /> chèn dấu thụt lề treo và thụt lề tất cả các dòng ngoài dòng đầu tiên</li> </ul> <p>Mặc dù ** Bar Tab **, ** Thụt lề dòng đầu tiên ** và ** Thụt lề treo ** xuất hiện trên ** bộ chọn tab ** nhưng chúng không phải là tab về mặt kỹ thuật.</p> <h4>Để thêm điểm dừng tab:</h4> <ol> <li>Chọn đoạn văn hoặc các đoạn văn bạn muốn thêm điểm dừng tab vào. Nếu bạn không chọn bất kỳ đoạn văn nào, các điểm dừng tab sẽ áp dụng cho ** đoạn hiện tại ** và bất kỳ đoạn ** New nào ** mà bạn nhập bên dưới đoạn văn đó.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-33-14.png\" title=\"selecting text\" /> 2. Nhấp vào ** bộ chọn tab ** cho đến khi điểm dừng tab bạn muốn sử dụng xuất hiện. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Tab bên phải **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the tab selector\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-07_14-49-26.png\" title=\"clicking the tab selector\" /> 3. Nhấp vào ** vị trí trên Ruler ** nằm ngang nơi bạn muốn văn bản của mình xuất hiện (việc nhấp vào ** cạnh dưới ** của Ruler sẽ giúp ích. Bạn có thể thêm bao nhiêu điểm dừng tab tùy thích.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"creating a tab stop\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-35-28.png\" title=\"creating a tab stop\" /> 4. Đặt ** điểm chèn ** trước ** văn bản ** bạn muốn đặt tab, sau đó nhấn phím ** Tab **. Văn bản sẽ chuyển sang điểm dừng tab tiếp theo. Trong ví dụ của chúng tôi, chúng tôi sẽ di chuyển từng phạm vi ngày tới điểm dừng tab mà chúng tôi đã tạo.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pressing the Tab key to move the text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-07_14-54-27.png\" title=\"pressing the Tab key to move the text\" /></p> <h4>Xóa điểm dừng tab</h4> <p>Bạn nên xóa bất kỳ điểm dừng tab nào mà bạn không sử dụng để chúng không gây cản trở. Để xóa điểm dừng tab, trước tiên hãy chọn tất cả văn bản sử dụng điểm dừng tab. Sau đó nhấp và kéo nó ra khỏi Ruler.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"removing a tab stop\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_15-39-36.png\" title=\"removing a tab stop\" /></p> <p>Word cũng có thể hiển thị các ký hiệu định dạng ẩn như dấu cách (<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dấu cách\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-07_15-35-18.png\" />), dấu đoạn văn (<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dấu đoạn\" src=\"hình ảnh/2016-01-07_15-33-33.png\" />) và tab (<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"biểu tượng tab\" src=\"hình ảnh/2016-01-07_15-34-56.png\" />) cho đến Help bạn sẽ thấy định dạng trong tài liệu của mình. Để hiển thị các ký hiệu định dạng ẩn, hãy chọn tab ** Home <strong>, sau đó nhấp vào lệnh ** Hiển thị/Ẩn </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"showing hidden marks\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-05_16-39-51.png\" title=\"showing hidden marks\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_indentstabs_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Sử dụng ** phím Tab ** để thụt lề đầu mỗi đoạn trong nội dung thư xin việc. Chúng bắt đầu bằng ** Tôi cực kỳ quan tâm <strong>, ** Đang làm việc ** và ** Đính kèm là một bản sao </strong>.</li> <li>Khi bạn hoàn tất, trang đầu tiên sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Indents Challenge 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_indents2_img1.png\" /> 4. Cuộn đến ** trang 2 <strong>. 5. Chọn tất cả nội dung bên dưới ** Đào tạo &amp; Giáo dục ** ở trang 2. 6. Đặt ** tab bên phải ** ở dấu 6\" (15,25 cm). 7. Insert con trỏ của bạn trước mỗi phạm vi ngày, sau đó nhấn ** T </strong><strong><em>* phím ab </em>*. Những ngày này bao gồm ** 2008 </strong>,<strong> 1997-2001 ** và ** 1995-1997 </strong>. 8. Chọn từng mô tả công việc trong phần ** Kinh nghiệm ** và di chuyển ** thụt lề trái ** đến dấu 0,25\" (50 mm). 9. Khi bạn hoàn tất, trang 2 sẽ trông giống như thế này:</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Indents Challenge 2\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_indents2_img2.png\" /></p> <p>/en/word/line-and-paragraph-spacing/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_9",
                sessionId: 65,
                title: "Bài 9: Giãn cách dòng và đoạn",
                description: "Nội dung chi tiết cho bài Bài 9: Giãn cách dòng và đoạn.",
                video: "https://www.youtube.com/embed/mXWvKHWe2Co",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_lineparagraphspacing_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Khi bạn Design tài liệu của mình và đưa ra quyết định định dạng, bạn sẽ cần xem xét ** dòng ** và ** khoảng cách đoạn **. Bạn có thể ** tăng ** khoảng cách để cải thiện khả năng đọc và ** giảm ** khoảng cách để vừa với nhiều văn bản hơn trên trang.</p> <p>Xem video bên dưới để tìm hiểu cách điều chỉnh khoảng cách dòng và đoạn trong tài liệu của bạn.</p> <h4>Khoảng cách dòng</h4> <p>Giãn cách dòng là ** khoảng cách giữa mỗi dòng ** trong một đoạn văn. Word cho phép bạn tùy chỉnh khoảng cách dòng thành ** cách nhau một dòng ** (cao một dòng), ** cách đôi ** (cao hai dòng) hoặc bất kỳ khoảng cách nào khác mà bạn muốn. Khoảng cách mặc định trong Word là ** 1,08 dòng **, lớn hơn một chút so với khoảng cách đơn.</p> <p>Trong các hình ảnh bên dưới, bạn có thể so sánh các loại khoảng cách dòng khác nhau. Từ trái sang phải, những hình ảnh này hiển thị khoảng cách dòng mặc định, khoảng cách đơn và khoảng cách đôi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"example of different line spacings\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-08_10-34-42.png\" title=\"example of different line spacings\" /></p> <p>Khoảng cách dòng còn được gọi là khoảng cách dòng (phát âm là vần với ** đám cưới **).</p> <h4>Để định dạng khoảng cách dòng:</h4> <ol> <li>Chọn văn bản bạn muốn định dạng.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting paragraphs in a letter\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_09-46-34.png\" title=\"selecting paragraphs in a letter\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào lệnh ** Dãn cách dòng và đoạn </strong>, sau đó chọn khoảng cách dòng mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a line spacing option\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_09-49-05.png\" title=\"selecting a line spacing option\" /> 3. Khoảng cách dòng sẽ thay đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a document with new spacing\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_09-51-32.png\" title=\"a document with new spacing\" /></p> <h4>Điều chỉnh khoảng cách dòng</h4> <p>Khoảng cách dòng Options của bạn không bị giới hạn ở các khoảng cách trong trình đơn ** Khoảng cách dòng và đoạn <strong>. Để điều chỉnh khoảng cách chính xác hơn, hãy chọn ** Dãn cách dòng Options ** từ trình đơn để truy cập hộp thoại ** Đoạn </strong>. Sau đó, bạn sẽ có thêm một số Options mà bạn có thể sử dụng để tùy chỉnh khoảng cách.</p> <ul> <li> <p>** Chính xác <strong>:Khi bạn chọn tùy chọn này, khoảng cách dòng được ** đo bằng điểm </strong>, giống như kích thước phông chữ. Ví dụ: nếu bạn đang sử dụng văn bản ** 12 điểm <strong>, bạn có thể sử dụng khoảng cách ** 15 điểm </strong>.</p> </li> <li> <p><strong>Ít nhất </strong>: Giống như tùy chọn ** Chính xác **, tùy chọn này cho phép bạn chọn số điểm giãn cách mà bạn muốn. Tuy nhiên, nếu bạn có các kích cỡ văn bản khác nhau trên cùng một dòng, khoảng cách sẽ mở rộng để vừa với văn bản lớn hơn.</p> </li> <li>** Nhiều <strong>: Tùy chọn này cho phép bạn nhập số dòng giãn cách bạn muốn. Ví dụ: chọn ** Nhiều ** và thay đổi khoảng cách thành ** 1,2 ** sẽ làm cho văn bản trải rộng hơn một chút so với văn bản có khoảng cách đơn. Nếu muốn các đường gần nhau hơn, bạn có thể chọn giá trị nhỏ hơn, chẳng hạn như ** 0,9 </strong>.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"customizing line spacing in the Paragraph dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-08_10-42-20.png\" title=\"customizing line spacing in the Paragraph dialog box\" /></p> <h4>Giãn cách đoạn</h4> <p>Giống như bạn có thể định dạng khoảng cách giữa các dòng trong tài liệu của mình, bạn có thể điều chỉnh khoảng cách trước và sau các đoạn văn. Điều này rất hữu ích để tách các đoạn văn, tiêu đề và tiêu đề phụ.</p> <h4>Để định dạng giãn cách đoạn văn:</h4> <p>Trong ví dụ của chúng tôi, chúng tôi sẽ tăng khoảng cách trước mỗi đoạn để tách chúng ra một chút. Điều này sẽ làm cho nó dễ đọc hơn một chút.</p> <ol> <li>Chọn đoạn văn hoặc các đoạn văn bạn muốn định dạng.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting paragraphs in a letter\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_09-46-34.png\" title=\"selecting paragraphs in a letter\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào lệnh ** Dãn cách dòng và đoạn </strong>. Nhấp vào ** Thêm khoảng trắng trước đoạn ** hoặc ** Xóa khoảng trắng sau đoạn ** từ trình đơn thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Thêm dấu cách trước đoạn **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding space before a paragraph\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_13-00-51.png\" title=\"adding space before a paragraph\" /> 3. Khoảng cách đoạn văn sẽ thay đổi trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a paragraph with extra spacing\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-11_13-03-40.png\" title=\"a paragraph with extra spacing\" /></p> <p>Từ menu thả xuống, bạn cũng có thể chọn ** Dãn cách dòng Options ** đến Open hộp thoại Đoạn. Từ đây, bạn có thể kiểm soát khoảng trống ** trước ** và ** sau ** đoạn văn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adjusting paragraph spacing in the Paragraph dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/2016-01-08_10-58-38.png\" title=\"adjusting paragraph spacing in the Paragraph dialog box\" /></p> <p>Bạn có thể sử dụng tính năng ** Đặt làm mặc định ** tiện lợi của Word để ** Save ** tất cả các thay đổi ** định dạng ** mà bạn đã thực hiện và tự động áp dụng chúng cho tài liệu New. Để tìm hiểu cách thực hiện việc này, hãy đọc bài viết của chúng tôi về <a href=\"../../../word-tips/changed-your-default-settings-in-word/1/index.html\">Thay đổi cài đặt mặc định của bạn trong Word</a>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_lineparagraphspacing_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Chọn ngày và khối địa chỉ. Việc này bắt đầu bằng ** ngày 13 tháng 4 năm 2016 ** và kết thúc bằng ** Trenton, NJ 08601 **.</li> <li>Thay đổi khoảng cách ** trước ** đoạn văn thành ** 12 pt ** và khoảng cách ** sau ** đoạn văn thành ** 30 pt **.</li> <li>Chọn nội dung của bức thư. Điều này bắt đầu bằng ** Tôi vô cùng ** và kết thúc bằng ** sự cân nhắc của bạn **.</li> <li>Thay đổi ** khoảng cách dòng ** thành 1,15.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Line Spacing Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_linespacing_img3.png\" /></p> <p>/en/word/lists/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_10",
                sessionId: 65,
                title: "Bài học 10: danh sách",
                description: "Nội dung chi tiết cho bài Bài học 10: danh sách.",
                video: "https://www.youtube.com/embed/tyXahko-tX8",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_lists_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Danh sách có dấu đầu dòng và đánh số có thể được sử dụng trong tài liệu của bạn để phác thảo, sắp xếp và nhấn mạnh văn bản. Trong bài học này, bạn sẽ tìm hiểu cách ** sửa đổi dấu đầu dòng hiện có <strong>, Insert New ** dấu đầu dòng ** và ** danh sách được đánh số </strong>, chọn ** ký hiệu ** làm dấu đầu dòng và định dạng ** danh sách nhiều cấp **.</p> <p>Hãy xem video bên dưới để tìm hiểu thêm về danh sách trong Word.</p> <h4>Để tạo một danh sách có dấu đầu dòng:</h4> <ol> <li>Chọn văn bản bạn muốn định dạng dưới dạng danh sách.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to format\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_bulleted_select.png\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Bullets </strong>. Một menu các kiểu dấu đầu dòng sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Bullets drop-down arrow\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_bulleted_command.png\" /> 3. Di chuyển chuột qua các kiểu đạn khác nhau. Bản xem trước trực tiếp của kiểu dấu đầu dòng sẽ xuất hiện trong tài liệu. Chọn kiểu dấu đầu dòng bạn muốn sử dụng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a style from the bullets menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_bulleted_menu2.png\" /> 4. Văn bản sẽ được định dạng dưới dạng danh sách có dấu đầu dòng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected text is now a bulleted list.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_bulleted_result2.png\" /></p> <h4>Options để làm việc với danh sách</h4> <ul> <li>Để xóa số hoặc dấu đầu dòng khỏi danh sách, hãy chọn danh sách và nhấp vào lệnh ** Có dấu đầu dòng ** hoặc ** Danh sách được đánh số **.</li> <li>Khi chỉnh sửa danh sách, bạn có thể nhấn ** Enter ** để bắt đầu dòng New và dòng New sẽ tự động có dấu đầu dòng hoặc số. Khi bạn đã đến cuối danh sách, hãy nhấn ** Enter ** hai lần để trở về định dạng bình thường.</li> <li>Bằng cách kéo dấu thụt lề trên Ruler, bạn có thể tùy chỉnh mức thụt lề của danh sách cũng như khoảng cách giữa văn bản và dấu đầu dòng hoặc số.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adjusting the indentation\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_options_indentation2.png\" /></p> <h4>Để tạo một danh sách đánh số:</h4> <p>Khi bạn cần sắp xếp văn bản thành một danh sách ** đánh số <strong>, Word sẽ cung cấp một số ** đánh số ** Options. Bạn có thể định dạng danh sách của mình bằng ** số </strong>, ** chữ cái ** hoặc ** chữ số La Mã **.</p> <ol> <li>Chọn văn bản bạn muốn định dạng dưới dạng danh sách.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to format\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_numbered_select.png\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Đánh số </strong>. Một menu các kiểu đánh số sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The number command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_numbered_command.png\" /> 3. Di chuyển chuột qua các kiểu đánh số khác nhau. Bản xem trước trực tiếp của kiểu đánh số sẽ xuất hiện trong tài liệu. Chọn kiểu đánh số bạn muốn sử dụng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Viewing the live preview\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_numbered_menu.png\" /> 4. Văn bản sẽ định dạng dưới dạng danh sách được đánh số.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formatted list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_create_numbered_result.png\" /></p> <h4>Để khởi động lại danh sách được đánh số:</h4> <p>Nếu bạn muốn bắt đầu lại việc đánh số danh sách, Word có tùy chọn ** Khởi động lại ở 1 <strong>. Nó có thể được áp dụng cho danh sách ** số ** và ** chữ cái </strong>.</p> <ol> <li>Nhấp chuột phải vào ** mục danh sách ** bạn muốn bắt đầu lại việc đánh số, sau đó chọn ** Khởi động lại lúc 1 ** từ trình đơn xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Restarting a list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_restart_numbering_menu.png\" /> 2. Việc đánh số danh sách sẽ khởi động lại.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The restarted list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_restart_numbering_result.png\" /></p> <p>Bạn cũng có thể thiết lập danh sách để tiếp tục đánh số từ danh sách trước đó. Để thực hiện việc này, nhấp chuột phải và chọn ** Tiếp tục đánh số **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Continuing a list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_restart_numbering_continue.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Tùy chỉnh đạn",
                        content: "<p>Việc tùy chỉnh giao diện của dấu đầu dòng trong danh sách của bạn có thể Help nhấn mạnh các mục danh sách nhất định và cá nhân hóa Design trong danh sách của bạn. Word cho phép bạn định dạng dấu đầu dòng theo nhiều cách khác nhau. Bạn có thể sử dụng ** biểu tượng ** và ** màu sắc ** khác nhau hoặc thậm chí tải lên ** ảnh ** dưới dạng dấu đầu dòng.</p> <h4>Để sử dụng một biểu tượng làm dấu đầu dòng:</h4> <ol> <li>Chọn danh sách hiện có mà bạn muốn định dạng.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting an existing list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_symbol_select2.png\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Bullets </strong>. Chọn ** Xác định New Dấu đầu dòng ** từ menu thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Defining a new bullet\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_symbol_menu2.png\" /> 3. Hộp thoại ** Xác định New Dấu đầu dòng ** sẽ xuất hiện. Nhấp vào nút ** Biểu tượng **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Symbol button\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_symbol_define2.png\" /> 4. Hộp thoại ** Biểu tượng ** sẽ xuất hiện. 5. Nhấp vào hộp thả xuống ** Phông chữ ** và chọn một phông chữ. Phông chữ ** Wingdings ** và ** Symbol ** là những lựa chọn tốt vì chúng có nhiều biểu tượng hữu ích. 6. Chọn biểu tượng mong muốn, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a symbol\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_symbol_wingdings.png\" /> 7. Biểu tượng sẽ xuất hiện trong phần Xem trước của hộp thoại Dấu đầu dòng New. Nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Preview of the new symbol\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_symbol_ok.png\" /> 8. Biểu tượng sẽ xuất hiện trong danh sách.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formatted list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_symbol_result.png\" /></p> <h4>Để thay đổi màu đạn:</h4> <ol> <li>Chọn danh sách hiện có mà bạn muốn định dạng.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_color_select.png\" /> 2. Trên tab ** Home <strong>, hãy nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Bullets </strong>. Chọn ** Xác định New Dấu đầu dòng ** từ menu thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Define New Bullet in the Bullet menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_color_menu.png\" /> 3. Hộp thoại ** Xác định New Dấu đầu dòng ** sẽ xuất hiện. Nhấp vào nút ** Phông chữ **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Font button\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_color_define.png\" /> 4. Hộp thoại ** Phông chữ ** sẽ xuất hiện. Nhấp vào hộp thả xuống ** Màu phông chữ <strong>. Một menu màu phông chữ sẽ xuất hiện. 5. Chọn màu mong muốn, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the bullet color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_color_green.png\" /> 6. Màu dấu đầu dòng sẽ xuất hiện trong phần Xem trước của hộp thoại Xác định New Dấu đầu dòng. Nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking OK\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_color_ok.png\" /> 7. Màu đạn sẽ thay đổi trong danh sách.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new bullet color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_bullet_color_result.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Danh sách đa cấp",
                        content: "<p>Danh sách nhiều cấp độ cho phép bạn tạo ** phác thảo ** với ** nhiều cấp độ <strong>. Bất kỳ danh sách có dấu đầu dòng hoặc đánh số nào cũng có thể được chuyển thành danh sách đa cấp bằng cách sử dụng phím ** Tab </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A multilevel list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_intro.png\" /></p> <h4>Để tạo danh sách đa cấp:</h4> <ol> <li>Đặt ** điểm chèn ** vào đầu dòng bạn muốn di chuyển.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_create_select2.png\" /> 2. Nhấn phím ** Tab ** để tăng mức thụt lề của dòng. Dòng sẽ di chuyển sang bên phải.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Increasing the indent level\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_create_tab2.png\" /></p> <h4>Để tăng hoặc giảm mức thụt lề:</h4> <p>Bạn có thể thực hiện các điều chỉnh đối với việc tổ chức danh sách đa cấp bằng cách tăng hoặc giảm mức thụt lề. Có một số cách để thay đổi mức thụt lề.</p> <ul> <li>Để ** tăng ** mức thụt lề lên ** nhiều hơn một ** cấp, hãy đặt điểm chèn ở đầu dòng, sau đó nhấn phím ** Tab ** cho đến khi đạt đến mức mong muốn.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Increasing the indent level more than once\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_level_increase2.png\" /> * Để ** giảm ** mức thụt lề, đặt điểm chèn ở đầu dòng, sau đó giữ phím ** Shift ** và nhấn phím ** Tab **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Decreasing the level of a line\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_level_decrease2.png\" /> * Bạn cũng có thể tăng hoặc giảm mức độ văn bản bằng cách đặt điểm chèn ở bất kỳ đâu trong dòng và nhấp vào lệnh ** Tăng thụt lề ** hoặc ** Giảm thụt lề **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Increase Indent and Decrease Indent commands.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_level_commands2.png\" /></p> <p>Khi định dạng danh sách đa cấp, Word sẽ sử dụng kiểu dấu đầu dòng mặc định. Để thay đổi kiểu của danh sách nhiều cấp, hãy chọn danh sách, sau đó nhấp vào lệnh ** Danh sách nhiều cấp ** trên tab ** Home **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formatting a multilevel list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/lists_multilevel_level_style.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_lists_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 3 **.</li> <li>Chọn văn bản trong ** New Thành viên ** bắt đầu bằng ** Carolyn ** và kết thúc bằng ** Đồng thủ quỹ <strong>, rồi định dạng văn bản đó dưới dạng ** danh sách có dấu đầu dòng </strong>.</li> <li>Với văn bản vẫn được chọn, hãy sử dụng hộp thoại ** Xác định New Dấu đầu dòng ** để thay đổi dấu đầu dòng thành ** ngôi sao xanh <strong>. ** Gợi ý </strong>: Bạn có thể tìm thấy ngôi sao trong phông chữ Wingdings.</li> <li>** Tăng ** mức thụt lề ** lên 1 ** cho các dòng ** Tiếp thị truyền thông xã hội <strong>, ** Gây quỹ ** và </strong><strong> Đồng thủ quỹ </strong>**.</li> <li>** Tăng ** mức thụt lề ** lên 2 ** cho dòng ** Chủ yếu ở Châu Âu **.</li> <li>Trong danh sách ** Báo cáo của thủ quỹ <strong>, ** giảm ** mức thụt lề ** 1 ** cho dòng ** Số tiền khả dụng trong tháng này </strong>.</li> <li>Trong danh sách ** Báo cáo liên lạc **, ** bắt đầu đánh số lại ** ở 1.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Lists Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_lists_img.png\" /></p> <p>/en/word/links/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_11",
                sessionId: 65,
                title: "Bài 11: liên kết",
                description: "Nội dung chi tiết cho bài Bài 11: liên kết.",
                video: "https://www.youtube.com/embed/fqLQ1adyrjA",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_hyperlinks_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Việc thêm ** siêu liên kết <strong>, còn được gọi là ** liên kết </strong>, vào văn bản có thể cung cấp quyền truy cập vào ** trang web ** và ** địa chỉ email ** trực tiếp từ tài liệu của bạn. Có một số cách để Insert siêu liên kết vào tài liệu của bạn. Tùy thuộc vào cách bạn muốn liên kết xuất hiện, bạn có thể sử dụng ** định dạng liên kết tự động ** của Word hoặc ** chuyển đổi ** ** văn bản ** thành liên kết.</p> <p>Hãy xem video bên dưới để tìm hiểu thêm về siêu liên kết trong Word.</p> <h4>Hiểu siêu liên kết trong Word</h4> <p>Siêu liên kết có ** hai phần cơ bản <strong>: địa chỉ (URL) của trang web và ** văn bản hiển thị </strong>. Ví dụ: địa chỉ có thể là <strong><a href=\"../../../not-offline.html?url=https:/www.popsci.com\">http://www.popsci.com</a></strong> và văn bản hiển thị có thể là ** Tạp chí khoa học phổ biến **. Khi tạo siêu liên kết trong Word, bạn sẽ có thể chọn cả địa chỉ và văn bản hiển thị.</p> <p>Word thường nhận dạng email và địa chỉ web khi bạn nhập và sẽ tự động định dạng chúng dưới dạng siêu liên kết sau khi bạn nhấn ** Enter ** hoặc ** phím cách **. Trong hình ảnh bên dưới, bạn có thể thấy một địa chỉ web được liên kết.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Hyperlinked web address\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_understanding_website_example.png\" /></p> <p>Để theo dõi một siêu liên kết trong Word, hãy giữ phím ** Ctrl ** và nhấp vào ** siêu liên kết **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Following a hyperlink\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_understanding_ctrl_follow.png\" /></p> <h4>Để định dạng văn bản bằng siêu liên kết:</h4> <ol> <li>Chọn văn bản bạn muốn định dạng dưới dạng siêu liên kết.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to hyperlink\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_format_select.png\" /> 2. Chọn tab ** Insert <strong>, sau đó nhấp vào lệnh ** Link </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking Link in the Insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlink_link.jpg\" title=\"clicking Link in the Insert tab\" /></p> <p>Bạn cũng có thể Open hộp thoại Siêu liên kết Insert bằng cách nhấp chuột phải vào văn bản đã chọn và chọn ** Liên kết...<strong> từ trình đơn xuất hiện. 3. Hộp thoại ** Insert Siêu liên kết ** sẽ xuất hiện. Bằng cách sử dụng Options ở phía bên trái, bạn có thể chọn liên kết tới ** File </strong>, ** trang web <strong>, ** địa chỉ email </strong>, ** tài liệu ** hoặc một ** địa điểm trong tài liệu hiện tại <strong>. 4. Văn bản đã chọn sẽ xuất hiện trong trường ** Văn bản cần hiển thị:</strong> ở trên cùng. Bạn có thể thay đổi văn bản này nếu bạn muốn. 5. Trong trường ** Địa chỉ:<strong>, nhập địa chỉ bạn muốn liên kết đến, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Creating a hyperlink\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_format_insert.png\" /> 6. Văn bản sau đó sẽ được định dạng dưới dạng siêu liên kết.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The finished hyperlink\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_format_result.png\" /></p> <p>Sau khi tạo siêu liên kết, bạn nên ** kiểm tra ** nó. Nếu bạn đã liên kết đến một trang web, trình duyệt web của bạn sẽ tự động Open và hiển thị trang web đó. Nếu nó không hoạt động, hãy kiểm tra địa chỉ siêu liên kết xem có lỗi chính tả không.</p> <h4>Chỉnh sửa và xóa siêu liên kết</h4> <p>Sau khi chèn siêu liên kết, bạn có thể nhấp chuột phải vào siêu liên kết đó để ** chỉnh sửa <strong>, ** Open </strong>, ** sao chép ** hoặc ** xóa ** siêu liên kết đó.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Hyperlink options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_format_edit.png\" /></p> <p>Để xóa siêu liên kết, nhấp chuột phải vào siêu liên kết và chọn ** Xóa ** ** Siêu liên kết ** từ trình đơn xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing a hyperlink\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/hyperlinks_format_remove.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_hyperlinks_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 4 **.</li> <li>Trong dấu đầu dòng đầu tiên trong Lời nhắc của cộng đồng, hãy định dạng từ ** trang web ** dưới dạng ** siêu liên kết ** tới <a href=\"../../../not-offline.html?url=https:/www.epa.gov/recycle\">http://www.epa.gov/recycle</a>.</li> <li>Kiểm tra ** siêu liên kết ** của bạn để đảm bảo nó hoạt động.</li> <li>Ở dấu đầu dòng thứ hai, ** xóa siêu liên kết ** khỏi các từ ** Công viên và Giải trí **.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Hyperlink Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_hyperlink_img2.png\" /></p> <p>/en/word/page-Layout/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_12",
                sessionId: 65,
                title: "Bài 12: page-Layout",
                description: "Nội dung chi tiết cho bài Bài 12: page-Layout.",
                video: "https://www.youtube.com/embed/jgNpoksYOLE",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_pagelayout_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Word cung cấp nhiều loại trang Layout và định dạng Options ảnh hưởng đến cách nội dung xuất hiện trên trang. Bạn có thể tùy chỉnh ** hướng trang **, ** cỡ giấy ** và ** lề trang ** tùy thuộc vào cách bạn muốn tài liệu của mình xuất hiện.</p> <p>Xem video bên dưới để tìm hiểu thêm về trang Layout trong Word.</p> <h4>Hướng trang</h4> <p>Word cung cấp hai hướng trang Options: ** ngang ** và ** dọc **. So sánh ví dụ của chúng tôi bên dưới để biết hướng có thể ảnh hưởng đến hình thức và khoảng cách của văn bản và hình ảnh như thế nào.</p> <ul> <li>Nằm ngang có nghĩa là trang được định hướng ** theo chiều ngang **.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Landscape orientation\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_orientation_landscape.png\" /> * Chân dung có nghĩa là trang được định hướng ** theo chiều dọc **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Portrait orientation\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_orientation_portrait.png\" /></p> <h4>Để thay đổi hướng trang:</h4> <ol> <li>Chọn tab ** Layout **.</li> <li>Bấm vào lệnh ** Định hướng ** trong nhóm Thiết lập Trang.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Orientation command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_orientation_command.png\" /> 3. Một menu thả xuống sẽ xuất hiện. Nhấp vào ** Dọc ** hoặc ** Phong cảnh ** để thay đổi hướng trang.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the page orientation\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_orientation_menu.png\" /> 4. Hướng trang của tài liệu sẽ được thay đổi.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Kích thước trang",
                        content: "<p>Theo mặc định, ** kích thước trang ** của tài liệu New là 8,5 inch x 11 inch. Tùy thuộc vào dự án của bạn, bạn có thể cần điều chỉnh kích thước trang tài liệu của mình. Điều quan trọng cần lưu ý là trước khi sửa đổi kích thước trang mặc định, bạn nên kiểm tra xem máy in của bạn có thể đáp ứng kích thước trang nào.</p> <h4>Để thay đổi kích thước trang:</h4> <p>Word có nhiều ** kích thước trang được xác định trước ** để bạn lựa chọn.</p> <ol> <li>Chọn tab ** Layout <strong>, sau đó nhấp vào lệnh ** Size </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Size command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_size_command.png\" /> 2. Một menu thả xuống sẽ xuất hiện. Kích thước trang hiện tại được đánh dấu. Nhấp vào ** được xác định trước ** ** trang ** ** kích thước ** mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the page size\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_size_menu.png\" /> 3. Kích thước trang của tài liệu sẽ được thay đổi.</p> <h4>Để sử dụng kích thước trang tùy chỉnh:</h4> <p>Word cũng cho phép bạn tùy chỉnh kích thước trang trong hộp thoại ** Thiết lập trang **.</p> <ol> <li>Từ tab ** Layout <strong>, hãy nhấp vào ** Kích thước </strong>. Chọn ** Kích cỡ giấy khác ** từ trình đơn thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting More Paper Sizes...\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_custom_size_menu.png\" /> 2. Hộp thoại ** Thiết lập trang ** sẽ xuất hiện. 3. Điều chỉnh các giá trị cho ** Chiều rộng ** và ** Chiều cao <strong>, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adjusting page size\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_custom_size_page_setup.png\" /> 4. Kích thước trang của tài liệu sẽ được thay đổi.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Lề trang",
                        content: "<p>** lề ** là ** khoảng trắng ** giữa văn bản và cạnh tài liệu của bạn. Theo mặc định, lề của tài liệu New được đặt thành ** Bình thường **, nghĩa là nó có khoảng cách một inch giữa văn bản và mỗi cạnh. Tùy theo nhu cầu của bạn, Word cho phép bạn thay đổi kích thước lề của tài liệu.</p> <h4>Để định dạng lề trang:</h4> <p>Word có nhiều ** kích thước lề được xác định trước ** để bạn lựa chọn.</p> <ol> <li>Chọn tab ** Layout <strong>, sau đó nhấp vào lệnh ** Lề </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Margins command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_margins_command.png\" /> 2. Một menu thả xuống sẽ xuất hiện. Nhấp vào ** kích thước lề được xác định trước ** mà bạn muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the page margins\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_margins_menu.png\" /> 3. Lề của tài liệu sẽ được thay đổi.</p> <h4>Để sử dụng lề tùy chỉnh:</h4> <p>Word cũng cho phép bạn tùy chỉnh kích thước lề trong hộp thoại ** Thiết lập trang **.</p> <ol> <li>Từ tab ** Layout <strong>, hãy nhấp vào ** Lợi nhuận </strong>. Chọn ** Lợi nhuận tùy chỉnh ** từ trình đơn thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Custom Margins...\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_custom_margins_menu.png\" /> 2. Hộp thoại ** Thiết lập trang ** sẽ xuất hiện. 3. Điều chỉnh giá trị cho từng lề, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Page Setup dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_custom_margins_page_setup.png\" /> 4. Lề của tài liệu sẽ được thay đổi.</p> <p>Bạn cũng có thể Open hộp thoại Thiết lập Trang bằng cách điều hướng đến tab Layout và nhấp vào ** mũi tên ** nhỏ ở góc dưới cùng bên phải của nhóm ** Thiết lập Trang **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Opening the Page Setup dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/layout_page_setup.png\" /></p> <p>Bạn có thể sử dụng tính năng ** Đặt làm mặc định ** tiện lợi của Word để ** Save ** tất cả các thay đổi ** định dạng ** mà bạn đã thực hiện và tự động áp dụng chúng cho tài liệu New. Để tìm hiểu cách thực hiện việc này, hãy đọc bài học của chúng tôi về <a href=\"../../../word-tips/changed-your-default-settings-in-word/1/index.html\" title=\"Cách thay đổi cài đặt mặc định của bạn trong Word\">Thay đổi cài đặt mặc định của bạn trong Word</a>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_pagelayout_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Thay đổi ** hướng trang ** thành ** Dọc **.</li> <li>Thay đổi ** kích thước trang ** thành ** Pháp lý <strong>. Nếu không có khổ Legal, bạn có thể chọn khổ khác như ** A5 </strong>.</li> <li>Thay đổi ** lề ** thành cài đặt ** Thu hẹp **.</li> <li>Khi bạn hoàn tất, tài liệu của bạn sẽ là một trang nếu sử dụng kích thước Pháp lý. Nó sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page Layout Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_page_layout_img.png\" /></p> <p>/en/word/printing-documents/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_13",
                sessionId: 65,
                title: "Bài 13: in ấn tài liệu",
                description: "Nội dung chi tiết cho bài Bài 13: in ấn tài liệu.",
                video: "https://www.youtube.com/embed/7bLQFTCsH8Y",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_printing_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Sau khi tạo tài liệu, bạn có thể muốn ** Print ** tài liệu đó thành View và Share công việc của bạn ** ngoại tuyến <strong>. Thật dễ dàng để xem trước và Print một tài liệu trong Word bằng cách sử dụng khung ** Print </strong>.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách in tài liệu trong Word.</p> <h4>Để truy cập khung Print:</h4> <ol> <li>Chọn tab ** File **. ** Backstage view ** sẽ xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the File tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_pane_file_tab.png\" /> 2. Chọn ** Print **. Khung ** Print ** sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Print\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_pane_print_tab.png\" /></p> <p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về cách sử dụng khung Print.</p> <p>chỉnh sửa điểm phát sóngchỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Đồ họa tương tác với khung Print\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_pane_print_pane.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Ngăn xem trước",
                        content: "<p>Tại đây, bạn có thể xem bản xem trước tài liệu của bạn sẽ trông như thế nào khi được in.</p> <p>Bạn cũng có thể truy cập khung Print bằng cách nhấn ** Ctrl+P ** trên bàn phím.</p> <h4>Tới Print một tài liệu:</h4> <ol> <li>Điều hướng đến khung ** Print **, sau đó chọn ** máy in ** mong muốn.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a printer\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_to_print_1.png\" /> 2. Nhập số lượng ** bản sao ** bạn muốn Print.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the number of copies\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_to_print_2.png\" /> 3. Chọn bất kỳ ** cài đặt ** bổ sung nào nếu cần.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing additional settings\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_to_print_3.png\" /> 4. Nhấp vào ** Print **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking print\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_to_print_4.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: tùy chỉnh in ấn",
                        content: "<p>Đôi khi bạn có thể thấy không cần thiết phải Print toàn bộ tài liệu của mình, trong trường hợp đó ** in tùy chỉnh ** có thể phù hợp hơn với nhu cầu của bạn. Cho dù bạn đang in ** vài trang riêng lẻ ** hay ** phạm vi trang **, Word đều cho phép bạn ** chỉ định ** chính xác những trang bạn muốn Print.</p> <h4>Để tùy chỉnh Print một tài liệu:</h4> <p>Nếu bạn muốn Print trang hoặc phạm vi trang riêng lẻ, bạn sẽ cần phân tách từng mục bằng ** dấu phẩy ** (ví dụ: 1, 3, 5-7 hoặc 10-14).</p> <ol> <li>Điều hướng đến khung ** Print **.</li> <li>Trong trường ** Trang:**, nhập các trang bạn muốn Print.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Setting pages to print\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_custom_print_pages.png\" /> 3. Nhấp vào ** Print **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Print\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/printing_custom_print_print.png\" /></p> <p>Nếu tài liệu của bạn không được in theo cách bạn muốn, bạn có thể cần phải điều chỉnh một số cài đặt của trang Layout. Để tìm hiểu thêm, Review bài học <a href=\"../../page-Layout/1/index.html\">Trang Layout</a> của chúng tôi.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_printing_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Trong khung ** Print **, hãy thay đổi cài đặt thành Print ** chỉ ** trang 2 và 5.</li> <li>Thay đổi số lượng ** bản sao ** thành 2.</li> <li>Sử dụng các mũi tên ở cuối phần xem trước ** Print ** đến View mỗi trang.</li> <li>Khi bạn hoàn tất, ngăn Print của bạn sẽ trông giống như thế này:</li> </ol> <p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Thử thách in\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_printing_img_2.png\" /> 6. Tùy chọn: Nếu có máy in, bạn có thể nhấp vào lệnh ** Print **. Nó phải Print hai bản sao của trang 2 và 5.</p> <p>/en/word/breaks/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_14",
                sessionId: 65,
                title: "Bài 14: giờ giải lao",
                description: "Nội dung chi tiết cho bài Bài 14: giờ giải lao.",
                video: "https://www.youtube.com/embed/78fvQ9Ks8DA",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_breaks_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Khi bạn đang làm việc trên một tài liệu nhiều trang, có thể đôi khi bạn muốn có nhiều quyền kiểm soát hơn đối với cách văn bản trôi chảy chính xác. ** B <strong><em>* reaks ** có thể hữu ích trong những trường hợp này. Có nhiều loại dấu ngắt để bạn lựa chọn tùy thuộc vào nội dung bạn cần, bao gồm ** ngắt trang </em>*,</strong> ngắt phần ** và ** ngắt cột **.</p> <p>Hãy xem video bên dưới để tìm hiểu thêm về cách sử dụng dấu ngắt trong Word.</p> <h4>Để Insert ngắt trang:</h4> <p>Trong ví dụ của chúng tôi, các tiêu đề phần trên trang ba (<strong> Doanh thu hàng tháng ** và ** Theo khách hàng </strong>) được tách biệt khỏi bảng trên trang bên dưới. Và mặc dù chúng ta chỉ có thể nhấn ** Enter ** cho đến khi văn bản đó đến đầu trang bốn, nhưng nó có thể dễ dàng bị dịch chuyển xung quanh nếu chúng ta thêm hoặc xóa nội dung nào đó trong phần khác của tài liệu. Thay vào đó, chúng tôi sẽ Insert ** ngắt trang **.</p> <ol> <li>Đặt ** điểm chèn ** vào vị trí bạn muốn tạo ngắt trang. Trong ví dụ của chúng tôi, chúng tôi sẽ đặt nó ở đầu tiêu đề của chúng tôi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_page_start.png\" /> 2. Trên tab ** Insert <strong>, hãy nhấp vào lệnh ** Ngắt trang </strong>. Bạn cũng có thể nhấn ** Ctrl+Enter ** trên bàn phím.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Page Break command on the Insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_page_command.png\" /> 3. Việc ngắt trang sẽ được chèn vào tài liệu và văn bản sẽ chuyển sang trang tiếp theo.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the inserted page break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_page_done.png\" /></p> <p>Theo mặc định, dấu ngắt là ** ẩn <strong>. Nếu bạn muốn xem dấu ngắt trong tài liệu của mình, hãy nhấp vào lệnh ** Hiển thị/Ẩn ** trên tab ** Home </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the Show/Hide command on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_page_splat_showhide.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Ngắt phần",
                        content: "<p>** Ngắt phần ** tạo ** rào cản ** giữa các phần khác nhau của tài liệu, cho phép bạn định dạng từng phần một cách độc lập. Ví dụ: bạn có thể muốn một phần có hai cột mà không cần thêm cột vào toàn bộ tài liệu. Word cung cấp một số kiểu ngắt phần.</p> <ul> <li>** Trang tiếp theo **: Tùy chọn này chèn dấu ngắt phần và di chuyển văn bản sau dấu ngắt sang trang tiếp theo của tài liệu.</li> <li>** Liên tục **: Tùy chọn này chèn dấu ngắt phần và cho phép bạn tiếp tục làm việc trên cùng một trang.</li> <li>** Trang chẵn ** và ** Trang lẻ **: Options này thêm dấu ngắt phần và di chuyển văn bản sau dấu ngắt sang trang chẵn hoặc trang lẻ tiếp theo. Các Options này có thể hữu ích khi bạn cần bắt đầu phần New trên trang chẵn hoặc trang lẻ (chẳng hạn như chương New của một cuốn sách).</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"types of section breaks\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_section_intro.png\" /></p> <h4>Để Insert ngắt phần:</h4> <p>Trong ví dụ của chúng tôi, chúng tôi sẽ thêm dấu ngắt phần để tách một đoạn văn khỏi danh sách hai cột.</p> <ol> <li>Đặt ** điểm chèn ** vào nơi bạn muốn tạo dấu ngắt. Trong ví dụ của chúng tôi, chúng tôi sẽ đặt nó ở đầu đoạn văn mà chúng tôi muốn tách khỏi định dạng hai cột.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_section_start.png\" /> 2. Trên tab ** Trang Layout <strong>, hãy nhấp vào lệnh ** Ngắt </strong>, sau đó chọn ngắt phần mong muốn từ menu thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Liên tục ** để đoạn văn của chúng tôi vẫn ở trên cùng một trang với các cột.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inserting a Continuous section break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_section_command.png\" /> 3. Dấu ngắt phần sẽ xuất hiện trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the inserted section break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_section_added.png\" /> 4. Văn bản ** trước ** và ** sau ** ngắt phần giờ đây có thể được định dạng riêng. Trong ví dụ của chúng tôi, chúng tôi sẽ áp dụng định dạng một cột cho đoạn văn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"removing the two column formatting from the paragraph\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_section_columnformat.png\" /> 5. Định dạng sẽ được áp dụng cho phần hiện tại của tài liệu. Trong ví dụ của chúng tôi, văn bản phía trên dấu ngắt phần sử dụng định dạng hai cột, trong khi đoạn văn bên dưới dấu ngắt sử dụng định dạng một cột.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the separately formatted sections\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_section_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Các loại nghỉ giải lao khác",
                        content: "<p>Khi bạn muốn định dạng hình thức của các cột hoặc sửa đổi dòng văn bản bao quanh một hình ảnh, Word sẽ cung cấp thêm dấu ngắt Options có thể Help:</p> <ul> <li>** Cột **: Khi tạo nhiều cột, bạn có thể áp dụng ngắt cột để cân bằng hình thức của các cột. Bất kỳ văn bản nào sau dấu ngắt cột sẽ bắt đầu ở cột tiếp theo. Để tìm hiểu thêm về cách tạo cột trong tài liệu của bạn, Review bài học của chúng tôi về <a href=\"../../columns/1/index.html\">Cột</a>.</li> <li>** Gói văn bản **: Khi văn bản đã được ngắt dòng xung quanh một hình ảnh hoặc đối tượng, bạn có thể sử dụng dấu ngắt ngắt dòng văn bản để kết thúc ngắt dòng và bắt đầu nhập dòng bên dưới hình ảnh. Review bài học của chúng tôi về <a href=\"../../pictures-and-text-wrapping/1/index.html\">Gói hình ảnh và văn bản</a> để tìm hiểu thêm.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"other break options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_other_intro.png\" /></p> <h4>Để xóa giờ nghỉ:</h4> <p>Theo mặc định, thời gian nghỉ được ** ẩn **. Nếu bạn muốn xóa dấu ngắt, trước tiên bạn cần hiển thị dấu ngắt trong tài liệu của mình.</p> <ol> <li>Trên tab ** Home <strong>, hãy nhấp vào lệnh ** Hiển thị/Ẩn </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Show/Hide command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_delete_showhide.png\" /> 2. Xác định vị trí ** ngắt ** bạn muốn xóa, sau đó đặt dấu chèn vào đầu dấu ngắt.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"placing the insertion point in front a break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_delete_placeinsertion.png\" /> 3. Nhấn phím ** Xóa **. Dấu ngắt sẽ bị xóa khỏi tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the page after deleting the page break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/break_delete_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_breaks_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến phần ** Dự báo doanh thu ** ở gần cuối tài liệu.</li> <li>** Xóa ** ngắt trang sau biểu đồ ** Dự báo Quý 2 theo Khách hàng **.</li> <li>Đặt con trỏ của bạn ở đầu tiêu đề ** Dự đoán ứng dụng web **.</li> <li>Insert a ** Ngắt phần trang tiếp theo **.</li> <li>Trong nhóm ** Thiết lập trang ** trên tab ** Layout <strong>, hãy nhấp vào menu thả xuống ** Cột ** và chọn ** Một </strong>. Điều này sẽ định dạng trang trở lại một cột và sẽ cho phép tiêu đề Dự báo ứng dụng web và bảng bên dưới nó trải dài trên trang. Bạn sẽ tìm hiểu thêm về các cột trong bài học tiếp theo của chúng tôi.</li> <li>Khi bạn hoàn tất, hai trang cuối cùng sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Breaks Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_breaks_img_combined.png\" /></p> <p>/en/word/cột/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_15",
                sessionId: 65,
                title: "Bài 15: cột",
                description: "Nội dung chi tiết cho bài Bài 15: cột.",
                video: "https://www.youtube.com/embed/X1n2VG1yxFs",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_columns_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Đôi khi thông tin bạn đưa vào tài liệu được hiển thị tốt nhất ở ** cột <strong>. Cột có thể Help cải thiện khả năng đọc, đặc biệt với một số loại tài liệu nhất định—như bài báo, bản tin và tờ rơi. Word cũng cho phép bạn điều chỉnh các cột bằng cách thêm ** ngắt cột </strong>.</p> <p>Hãy xem video dưới đây để tìm hiểu thêm về các cột trong Word.</p> <h4>Để thêm cột vào tài liệu:</h4> <ol> <li>Chọn văn bản bạn muốn định dạng.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting text to format\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_add_select.png\" /> 2. Chọn tab ** Layout <strong>, sau đó nhấp vào lệnh ** Cột </strong>. Một menu thả xuống sẽ xuất hiện. 3. Chọn số cột bạn muốn tạo.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formatting text into columns\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_add_menu.png\" /> 4. Văn bản sẽ định dạng thành các cột.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formatted text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_add_result.png\" /></p> <p>Lựa chọn cột của bạn không bị giới hạn ở menu thả xuống xuất hiện. Chọn ** Thêm cột ** ở cuối menu để truy cập hộp thoại ** Cột <strong>. Nhấp vào mũi tên bên cạnh ** Số cột:</strong> để điều chỉnh số cột.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Columns dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_more_columns.png\" /></p> <p>Nếu bạn muốn điều chỉnh khoảng cách và căn chỉnh các cột, hãy nhấp và kéo ** điểm đánh dấu thụt lề ** trên ** Ruler ** cho đến khi các cột xuất hiện theo cách bạn muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adjusting the column\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_indent_markers.png\" /></p> <h4>Để xóa cột:</h4> <p>Để xóa định dạng cột, hãy đặt dấu chèn ở bất kỳ đâu trong cột, sau đó nhấp vào lệnh ** Cột ** trên tab ** Layout **. Chọn ** Một ** từ menu thả xuống xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing column formatting\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_remove_menu.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thêm ngắt cột",
                        content: "<p>Khi bạn đã tạo xong các cột, văn bản sẽ tự động chuyển từ cột này sang cột tiếp theo. Tuy nhiên, đôi khi bạn có thể muốn kiểm soát chính xác vị trí bắt đầu của mỗi cột. Bạn có thể thực hiện việc này bằng cách tạo ** ngắt cột **.</p> <h4>Để thêm ngắt cột:</h4> <p>Trong ví dụ bên dưới, chúng tôi sẽ thêm dấu ngắt cột để di chuyển văn bản đến đầu cột tiếp theo.</p> <ol> <li>Đặt ** điểm chèn ** vào đầu văn bản bạn muốn di chuyển.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_break_insert_callout.png\" /> 2. Chọn tab ** Layout <strong>, sau đó nhấp vào lệnh ** Ngắt </strong>. Một menu thả xuống sẽ xuất hiện. 3. Chọn ** Cột ** từ menu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adding a column break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_break_menu.png\" /> 4. Văn bản sẽ di chuyển về đầu cột. Trong ví dụ của chúng tôi, nó đã di chuyển đến đầu cột tiếp theo.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"After adding a column break\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_break_result.png\" /></p> <p>Để tìm hiểu thêm về cách thêm dấu ngắt vào tài liệu của bạn, Review bài học của chúng tôi về <a href=\"../../breaks/1/index.html\">Ngắt</a>.</p> <h4>Để loại bỏ ngắt cột:</h4> <ol> <li>Theo mặc định, thời gian nghỉ được ẩn. Nếu bạn muốn hiển thị dấu ngắt trong tài liệu của mình, hãy nhấp vào lệnh ** Hiển thị/Ẩn ** trên tab ** Home **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Show/Hide command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_remove_breaks_showhide.png\" /> 2. Đặt điểm chèn vào bên trái dấu ngắt mà bạn muốn xóa.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_remove_breaks_insertion.png\" /> 3. Nhấn phím xóa để loại bỏ dấu ngắt.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The break is deleted\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/columns_remove_breaks_result.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_columns_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 3 **.</li> <li>Chọn tất cả văn bản trong danh sách có dấu đầu dòng bên dưới ** Lời nhắc của cộng đồng ** và định dạng nó thành ** hai cột **.</li> <li>Đặt con trỏ của bạn ở đầu dấu đầu dòng thứ tư trước từ ** Khách truy cập **.</li> <li>Insert ** ngắt cột **.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Columns Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_columns2_img.png\" /></p> <p>/en/word/headers-and-footers/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_16",
                sessionId: 65,
                title: "Bài 16: Header và Footer",
                description: "Nội dung chi tiết cho bài Bài 16: Header và Footer.",
                video: "https://www.youtube.com/embed/lNdjuIYuB3o",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_headersfooters_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>** tiêu đề ** là một phần của tài liệu xuất hiện ở ** lề trên <strong>, trong khi ** chân trang ** là một phần của tài liệu xuất hiện ở ** lề dưới </strong>. Đầu trang và chân trang thường chứa thông tin bổ sung như ** số trang <strong>, ** ngày </strong>, ** an ** ** tên tác giả ** và ** chú thích cuối trang **, có thể Help sắp xếp tài liệu dài hơn và giúp chúng dễ đọc hơn. Văn bản được nhập vào đầu trang hoặc chân trang sẽ xuất hiện trên ** mỗi trang ** của tài liệu.</p> <p>Xem video bên dưới để tìm hiểu thêm về đầu trang và chân trang trong Word.</p> <h4>Để tạo đầu trang hoặc chân trang:</h4> <p>Trong ví dụ của chúng tôi, chúng tôi muốn hiển thị tên tác giả ở đầu mỗi trang, vì vậy chúng tôi sẽ đặt tên đó trong tiêu đề.</p> <ol> <li>Nhấp đúp vào bất kỳ vị trí nào trên ** lề trên hoặc dưới ** tài liệu của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ bấm đúp vào lề trên.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Double-clicking on the header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_create_click_callout.png\" /> 2. Đầu trang hoặc chân trang sẽ Open và tab ** Design ** sẽ xuất hiện ở bên phải của ** Ribbon **. Điểm chèn sẽ xuất hiện ở đầu trang hoặc chân trang.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The open header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_create_design_tab.png\" /> 3. Nhập ** thông tin mong muốn ** vào đầu trang hoặc chân trang. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập tên tác giả và ngày tháng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Typing text into a header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_create_type.png\" /> 4. Khi bạn hoàn tất, hãy nhấp vào ** Close Đầu trang và chân trang <strong>. Bạn cũng có thể nhấn phím ** Esc </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Close Header and Footer\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_create_close.png\" /> 5. Văn bản đầu trang hoặc chân trang sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The finished header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_create_result.png\" /></p> <h4>Đến Insert đầu trang hoặc chân trang đặt trước:</h4> <p>Word có nhiều ** đầu trang và chân trang cài sẵn ** mà bạn có thể sử dụng để cải thiện Design và Layout của tài liệu của mình. Trong ví dụ của chúng tôi, chúng tôi sẽ thêm tiêu đề đặt trước vào tài liệu của mình.</p> <ol> <li>Chọn tab ** Insert <strong>, sau đó nhấp vào lệnh ** Header ** hoặc ** Footer </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ nhấp vào lệnh ** Header **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Header command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_preset_command.png\" /> 2. Trong menu xuất hiện, chọn ** đầu trang hoặc chân trang đặt trước ** mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a preset header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_preset_menu3.png\" /> 3. Đầu trang hoặc chân trang sẽ xuất hiện. Nhiều đầu trang và chân trang đặt trước chứa phần giữ chỗ văn bản được gọi là trường ** Kiểm soát nội dung **. Những trường này rất phù hợp để thêm thông tin như tiêu đề tài liệu, tên tác giả, ngày tháng và số trang.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Content Control fields\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_preset_content_control.png\" /> 4. Để chỉnh sửa trường Kiểm soát nội dung, hãy nhấp vào trường đó và nhập ** thông tin mong muốn **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Editing a Content Control field\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_preset_type.png\" /> 5. Khi bạn hoàn tất, hãy nhấp vào ** Close Đầu trang và chân trang <strong>. Bạn cũng có thể nhấn phím ** Esc </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Closing the Header and Footer\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_create_close.png\" /></p> <p>Nếu bạn muốn xóa trường Kiểm soát nội dung, hãy nhấp chuột phải vào trường đó và chọn ** Xóa Kiểm soát nội dung ** từ trình đơn xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing a Content Control field\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_preset_remove_content.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Chỉnh sửa đầu trang và chân trang",
                        content: "<p>Sau Close đầu trang hoặc chân trang, nó sẽ vẫn hiển thị nhưng sẽ bị ** khóa <strong>. Chỉ cần nhấp đúp vào đầu trang hoặc chân trang để ** mở khóa </strong>, thao tác này sẽ cho phép bạn chỉnh sửa.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Opening a header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_edit_locked.png\" /></p> <h4>tab Design Options</h4> <p>Khi đầu trang và chân trang của tài liệu của bạn được mở khóa, tab ** Design ** sẽ xuất hiện ở bên phải của Ribbon, cung cấp cho bạn nhiều chỉnh sửa khác nhau Options:</p> <ul> <li>** Ẩn đầu trang và chân trang của trang đầu tiên <strong>: Đối với một số tài liệu, bạn có thể không muốn trang đầu tiên hiển thị đầu trang và chân trang, giống như nếu bạn có trang bìa và muốn bắt đầu đánh số trang từ trang thứ hai. Nếu bạn muốn ẩn đầu trang và chân trang của trang đầu tiên, hãy chọn hộp bên cạnh ** Trang đầu tiên khác nhau </strong>.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Hiding the first page header and footer\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_design_first_page.png\" /> * ** Xóa đầu trang hoặc chân trang <strong>: Nếu bạn muốn xóa tất cả thông tin có trong đầu trang, hãy nhấp vào lệnh ** Header ** và chọn ** Xóa tiêu đề ** từ menu xuất hiện. Tương tự, bạn có thể xóa chân trang bằng lệnh ** Footer </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing the header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_design_remove_header2.png\" /> * ** Số trang **: Bạn có thể tự động đánh số từng trang bằng lệnh Số trang. Review bài học <a href=\"../../page-numbers/1/index.html\">Số trang</a> của chúng tôi để tìm hiểu thêm.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page numbers\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_design_page_number.png\" /> * ** Bổ sung Options <strong>: Với các lệnh có sẵn trong nhóm Insert, bạn có thể thêm ** ngày và giờ </strong>, ** tài liệu Info <strong>, ** hình ảnh </strong>, v.v. vào đầu trang hoặc chân trang của mình.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Insert group on the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_design_additional_options2.png\" /></p> <h4>Để Insert ngày hoặc giờ vào đầu trang hoặc chân trang:</h4> <p>Đôi khi việc thêm ** ngày hoặc giờ ** vào đầu trang hoặc chân trang sẽ rất hữu ích. Ví dụ: bạn có thể muốn tài liệu của mình hiển thị ** ngày tạo **.</p> <p>Mặt khác, bạn có thể muốn hiển thị ** ngày in <strong>, bạn có thể thực hiện việc này bằng cách đặt thành ** cập nhật tự động </strong>. Điều này hữu ích nếu bạn thường xuyên cập nhật và Print một tài liệu vì bạn sẽ luôn có thể biết phiên bản nào là mới nhất.</p> <ol> <li>Bấm đúp vào bất kỳ đâu trên đầu trang hoặc chân trang để ** mở khóa ** nó. Đặt ** điểm chèn ** vào nơi bạn muốn ngày hoặc giờ xuất hiện. Trong ví dụ của chúng tôi, chúng tôi sẽ đặt điểm chèn vào dòng bên dưới tên tác giả.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Placing the insertion point in the unlocked header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_datetime_insert.png\" /> 2. Tab ** Design ** sẽ xuất hiện. Nhấp vào lệnh ** Ngày &amp; Giờ **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Date &amp; Time command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_datetime_command.png\" /> 3. Hộp thoại ** Ngày và Giờ ** sẽ xuất hiện. Chọn ** ngày ** hoặc ** định dạng thời gian ** mong muốn. 4. Chọn hộp bên cạnh ** Cập nhật tự động ** nếu bạn muốn ngày thay đổi mỗi khi bạn Open tài liệu. Nếu bạn không muốn thay đổi ngày, hãy bỏ chọn tùy chọn này. 5. Nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a date option\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_datetime_dialog.png\" /> 6. Ngày sẽ xuất hiện trong tiêu đề.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The date in the header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_datetime_result.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_headersfooters_practice.docx\">tài liệu thực hành</a> của chúng tôi. Nếu bạn đã tải xuống tài liệu thực hành của chúng tôi để theo dõi bài học, hãy nhớ tải xuống bản sao mới bằng cách nhấp vào liên kết trong bước này.</li> <li>Open ** tiêu đề **.</li> <li>Chọn ** Căn phải ** trên tab ** Home ** và nhập tên của bạn.</li> <li>Bên dưới tên của bạn, hãy sử dụng lệnh ** Ngày &amp; Giờ ** trên tab ** Design ** và Insert ngày bằng bất kỳ định dạng nào bạn muốn.</li> <li>Trong phần ** chân trang <strong>, Insert chân trang được đặt trước ** Grid </strong>. Nếu phiên bản Word của bạn không có cài đặt sẵn Lưới, bạn có thể chọn bất kỳ cài đặt sẵn nào.</li> <li>** Close ** đầu trang và chân trang.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"practice document after completing challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_header_footer_challenge.png\" title=\"practice document after completing challenge\" /></p> <p>/en/word/số trang/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_17",
                sessionId: 65,
                title: "Bài 17: số trang",
                description: "Nội dung chi tiết cho bài Bài 17: số trang.",
                video: "https://www.youtube.com/embed/JDqPR98mIZM",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_pagenumbers_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>** Số trang ** có thể được sử dụng để tự động đánh số từng trang trong tài liệu của bạn. Chúng có nhiều định dạng số khác nhau và có thể được tùy chỉnh để phù hợp với nhu cầu của bạn. Số trang thường được đặt ở ** tiêu đề <strong>, ** chân trang ** hoặc ** lề bên </strong>. Khi bạn cần đánh số trang khác nhau, Word cho phép bạn ** bắt đầu lại việc đánh số trang **.</p> <p>Hãy xem video dưới đây để tìm hiểu thêm về số trang trong Word.</p> <h4>Để thêm số trang:</h4> <p>Word có thể tự động gắn nhãn cho mỗi trang bằng số trang và đặt nó vào đầu trang, chân trang hoặc lề bên. Nếu bạn có đầu trang hoặc chân trang hiện có, nó sẽ bị xóa và thay thế bằng số trang.</p> <ol> <li>Trên tab ** Insert <strong>, hãy nhấp vào lệnh ** Số trang </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Page Number command on the Insert tab.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_insert_command.png\" /> 2. Open menu ** Đầu trang <strong>, ** Cuối trang ** hoặc ** Lề trang </strong>, tùy thuộc vào vị trí bạn muốn đặt số trang, sau đó chọn kiểu tiêu đề mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a header style.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_insert_menu.png\" /> 3. Đánh số trang sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page numbering in the header.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_insert_result.png\" /> 4. Nhấn phím ** Esc ** để khóa đầu trang và chân trang.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Locking the header.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_insert_esc.png\" /> 5. Nếu bạn cần thực hiện bất kỳ thay đổi nào đối với số trang của mình, chỉ cần nhấp đúp vào đầu trang hoặc chân trang để mở khóa.</p> <p>Nếu bạn đã tạo số trang ở ** lề bên ** thì số trang đó vẫn được coi là một phần của ** tiêu đề ** hoặc ** chân trang **. Bạn sẽ không thể chọn số trang trừ khi đầu trang hoặc chân trang được chọn.</p> <h4>Để thêm số trang vào đầu trang hoặc chân trang hiện có:</h4> <p>Nếu bạn đã có đầu trang hoặc chân trang và muốn thêm số trang vào đó, Word có tùy chọn tự động Insert số trang vào đầu trang hoặc chân trang hiện có. Trong ví dụ của chúng tôi, chúng tôi sẽ thêm đánh số trang vào tiêu đề tài liệu của mình.</p> <ol> <li>Nhấp đúp vào bất kỳ đâu trên ** tiêu đề ** hoặc ** chân trang ** để ** mở khóa ** nó.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Unlocking the header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_existing_unlock.png\" /> 2. Trên tab ** Design <strong>, hãy nhấp vào lệnh ** Số trang </strong>. Trong menu xuất hiện, hãy di chuột qua ** Vị trí hiện tại ** và chọn ** đánh số trang ** ** kiểu ** mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Page Number menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_existing_menu.png\" /> 3. Đánh số trang sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page numbering in the header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_existing_result.png\" /> 4. Khi bạn hoàn tất, hãy nhấn phím ** Esc **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Locking the header\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_existing_esc.png\" /></p> <h4>Để ẩn số trang ở trang đầu tiên:</h4> <p>Trong một số tài liệu, bạn có thể không muốn trang đầu tiên hiển thị số trang. Bạn có thể ** ẩn số trang đầu tiên ** mà không ảnh hưởng đến các trang còn lại.</p> <ol> <li>Bấm đúp vào đầu trang hoặc chân trang để mở khóa.</li> <li>Từ tab Design, hãy đánh dấu bên cạnh ** Trang đầu tiên khác **. Đầu trang và chân trang sẽ biến mất khỏi trang đầu tiên. Nếu muốn, bạn có thể nhập nội dung nào đó New vào đầu trang hoặc chân trang và nó sẽ chỉ ảnh hưởng đến trang đầu tiên.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Different First Page\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/header_design_first_page.png\" /></p> <p>Nếu bạn không thể chọn ** Trang đầu tiên khác **, có thể là do một đối tượng trong đầu trang hoặc chân trang đã được chọn. Bấm vào vùng trống trong đầu trang hoặc chân trang để đảm bảo không có gì được chọn.</p> <h4>Để bắt đầu lại việc đánh số trang:</h4> <p>Word cho phép bạn bắt đầu lại việc đánh số trang trên bất kỳ trang nào trong tài liệu của bạn. Bạn có thể thực hiện việc này bằng cách chèn dấu ngắt phần và chọn số bạn muốn bắt đầu đánh số lại. Trong ví dụ của chúng tôi, chúng tôi sẽ bắt đầu lại việc đánh số trang cho phần ** Tác phẩm được trích dẫn ** trong tài liệu của chúng tôi.</p> <ol> <li>Đặt ** điểm chèn ** ở ** đầu trang ** mà bạn muốn bắt đầu lại việc đánh số trang. Nếu có văn bản trên trang, hãy đặt dấu chèn ở ** đầu văn bản **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_restart_insert.png\" /> 2. Chọn tab ** Layout <strong>, sau đó nhấp vào lệnh ** Ngắt </strong>. Chọn ** Trang tiếp theo ** từ trình đơn thả xuống xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Next Page\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_restart_break.png\" /> 3. Dấu ngắt phần sẽ được thêm vào tài liệu. 4. Bấm đúp vào ** đầu trang hoặc chân trang ** chứa số trang bạn muốn khởi động lại.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the page number to restart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_restart_unlock.png\" /> 5. Bấm vào lệnh ** Số trang <strong>. Trong menu xuất hiện, chọn ** Định dạng số trang </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formatting the page number\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_restart_menu.png\" /> 6. Một hộp thoại sẽ xuất hiện. Nhấp vào nút ** Bắt đầu tại:<strong>. Theo mặc định, nó sẽ bắt đầu ở ** 1 </strong>. Nếu muốn, bạn có thể thay đổi số. Khi bạn hoàn tất, hãy nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Restarting the page numbering\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_restart_dialog.png\" /> 7. Việc đánh số trang sẽ bắt đầu lại.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The restarted page numbering\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/page_numbers_restart_result.png\" /></p> <p>Để tìm hiểu thêm về cách thêm dấu ngắt phần vào tài liệu của bạn, Review bài học của chúng tôi về <a href=\"../../breaks/1/index.html\">Ngắt</a>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_pagenumbers_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Trên trang 1, Insert số trang ** Accent Bar 4 ** ở ** Cuối trang **.</li> <li>Trong ** Design Options <strong>, chọn ** Trang đầu tiên khác </strong>. Số trang bây giờ sẽ được ẩn trên trang đầu tiên.</li> <li>Cuộn đến ** trang 27 ** của tài liệu.</li> <li>Đặt con trỏ của bạn ở đầu tiêu đề ** Tác phẩm được trích dẫn ** và Insert a ** Ngắt phần liên tục **.</li> <li>Ở chân trang 27, ** bắt đầu lại việc đánh số trang ** ở 1.</li> <li>Khi bạn hoàn tất, phần cuối trang 27 sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page Number Challenge 3\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_pagenumber_3_img.png\" /></p> <p>/en/word/pictures-and-text-wrapping/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_23",
                sessionId: 65,
                title: "Bài học 23: bảng",
                description: "Nội dung chi tiết cho bài Bài học 23: bảng.",
                video: "https://www.youtube.com/embed/XNBrCEgzddw",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_tables_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>** bảng ** là một lưới các ô được sắp xếp theo ** hàng ** và ** cột **. Bảng có thể được sử dụng để sắp xếp bất kỳ loại nội dung nào, cho dù bạn đang làm việc với dữ liệu văn bản hay số. Trong Word, bạn có thể nhanh chóng Insert một ** bảng trống ** hoặc chuyển đổi ** văn bản hiện có ** thành bảng. Bạn cũng có thể tùy chỉnh bảng của mình bằng cách sử dụng ** kiểu ** và ** bố cục ** khác nhau.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách tạo bảng.</p> <h4>Đến Insert một bảng trống:</h4> <ol> <li>Đặt điểm chèn vào nơi bạn muốn bảng xuất hiện.</li> <li>Điều hướng đến tab ** Insert <strong>, sau đó nhấp vào lệnh ** Table </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the table command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_blank_command.octet-stream\" /> 3. Thao tác này sẽ Open một menu thả xuống có chứa lưới. Di chuột qua lưới để chọn số lượng ** cột và hàng ** bạn muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the numbers of cells\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_blank_menu.png\" /> 4. Nhấp vào lưới để ** xác nhận ** lựa chọn của bạn và một bảng sẽ xuất hiện. 5. Để ** nhập văn bản **, hãy đặt dấu chèn vào ô bất kỳ, sau đó bắt đầu nhập.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"new table\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_blank_result.octet-stream\" /></p> <p>Để điều hướng giữa các ô, hãy sử dụng phím ** Tab ** hoặc phím ** mũi tên ** trên bàn phím của bạn. Nếu điểm chèn nằm ở ô cuối cùng, việc nhấn phím ** Tab ** sẽ tự động tạo hàng New.</p> <h4>Để chuyển đổi văn bản hiện có thành bảng:</h4> <p>Trong ví dụ bên dưới, mỗi dòng văn bản chứa một phần của ** danh sách kiểm tra <strong>, bao gồm công việc nhà và các ngày trong tuần. Các mục được phân tách bằng ** tab </strong>. Word có thể chuyển những thông tin này thành bảng, sử dụng các tab để phân tách dữ liệu thành các cột.</p> <ol> <li>Chọn văn bản bạn muốn ** chuyển đổi ** thành bảng. Nếu bạn đang sử dụng thông lệ File của chúng tôi, bạn có thể tìm thấy văn bản này trên trang 2 của tài liệu.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_convert_select.octet-stream\" /> 2. Đi tới tab ** Insert <strong>, sau đó nhấp vào lệnh ** Table </strong>. 3. Chọn ** Chuyển văn bản thành bảng ** từ trình đơn thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing convert to table\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_convert_menu.octet-stream\" /> 4. Một hộp thoại sẽ xuất hiện. Chọn một trong Options bên dưới ** Tách văn bản tại **. Đây là cách Word biết nên điền gì vào mỗi cột.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"conversion options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_convert_dialog.octet-stream\" /> 5. Nhấp vào ** OK **. Văn bản sẽ xuất hiện trong một bảng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"converted table\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_convert_result.octet-stream\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Sửa đổi bảng",
                        content: "<p>Bạn có thể dễ dàng thay đổi giao diện của bảng sau khi thêm bảng vào tài liệu của mình. Có một số Options để tùy chỉnh, bao gồm ** thêm hàng hoặc cột ** và thay đổi ** kiểu bảng **.</p> <h4>Để thêm một hàng hoặc cột:</h4> <ol> <li>Di chuột ra ngoài bảng nơi bạn muốn thêm hàng hoặc cột. Nhấp vào ** dấu cộng ** xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hovering outside the table\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_add_hover.octet-stream\" /> 2. Một hàng hoặc cột New sẽ được thêm vào bảng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"new column\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_add_result.png\" /></p> <p>Bạn cũng có thể ** nhấp chuột phải ** vào bảng, sau đó di chuột qua ** Insert ** để xem các hàng và cột khác nhau Options.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"insert menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_add_menu.png\" /></p> <h4>Để xóa một hàng hoặc cột:</h4> <ol> <li>Đặt điểm chèn vào ** hàng ** hoặc ** cột ** bạn muốn xóa.</li> <li>Nhấp chuột phải, sau đó chọn ** Xóa ô ** từ menu.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"delete menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_delete_menu.octet-stream\" /> 3. Một hộp thoại sẽ xuất hiện. Chọn ** Xóa toàn bộ hàng ** hoặc ** Xóa toàn bộ cột <strong>, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"delete options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_delete_dialog.octet-stream\" /> 4. Hàng hoặc cột sẽ bị xóa.</p> <h4>Để áp dụng kiểu bảng:</h4> <p>Kiểu bảng cho phép bạn thay đổi ** giao diện ** của bảng ngay lập tức. Chúng kiểm soát một số thành phần Design, bao gồm màu sắc, đường viền và phông chữ.</p> <ol> <li>Nhấp vào bất kỳ đâu trong bảng của bạn để chọn, sau đó nhấp vào tab ** Design ** ở ngoài cùng bên phải của Ribbon.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"navigating to the design tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_style_tab.png\" /> 2. Xác định vị trí nhóm ** kiểu bảng **, sau đó nhấp vào mũi tên thả xuống ** Thêm ** để xem danh sách đầy đủ các kiểu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"viewing more options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_style_more.png\" /> 3. Chọn ** bảng ** ** kiểu ** bạn muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a table style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_style_menu.octet-stream\" /> 4. Kiểu bảng sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"table with table style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_style_result.png\" /></p> <h4>Để sửa đổi kiểu bảng Options:</h4> <p>Sau khi chọn kiểu bảng, bạn có thể bật Options ** bật ** hoặc ** tắt ** khác nhau để thay đổi giao diện của bảng. Có sáu Options: ** Hàng tiêu đề <strong>, ** Hàng tổng </strong>, ** Hàng có dải băng <strong>, ** Cột đầu tiên </strong>, ** Cột cuối cùng ** và ** Cột có dải băng **.</p> <ol> <li>Nhấp vào bất kỳ đâu trong bảng của bạn, sau đó điều hướng đến tab ** Design **.</li> <li>Xác định vị trí nhóm ** Table Style Options **, sau đó ** chọn ** hoặc ** bỏ chọn ** Options mong muốn.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"table style options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_modify_options.octet-stream\" /> 3. Kiểu bảng sẽ được sửa đổi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"table style option - banded columns\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_modify_result.octet-stream\" /></p> <p>Tùy thuộc vào ** kiểu bảng ** bạn đã chọn, một số ** kiểu bảng Options ** nhất định có thể có hiệu ứng khác. Bạn có thể cần phải thử nghiệm để có được giao diện như mong muốn.</p> <h4>Để áp dụng đường viền cho bảng:</h4> <ol> <li>Chọn ** ô ** bạn muốn áp dụng đường viền.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_border_select.octet-stream\" /> 2. Sử dụng các lệnh trên tab ** Design ** để chọn ** Kiểu đường **, ** Độ dày đường ** và ** Màu bút ** mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"border options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_border_commands.octet-stream\" /> 3. Nhấp vào mũi tên ** thả xuống ** bên dưới lệnh ** Borders **. 4. Chọn ** loại đường viền ** từ trình đơn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a border type\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_border_menu.octet-stream\" /> 5. Đường viền sẽ được áp dụng cho các ô đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"cells with outside border\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/table_border_result.octet-stream\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Sửa đổi bảng bằng tab Layout",
                        content: "<p>Trong Word, tab ** Layout ** xuất hiện bất cứ khi nào bạn chọn bảng của mình. Bạn có thể sử dụng Options trên tab này để thực hiện nhiều sửa đổi khác nhau.</p> <p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về các điều khiển bảng Layout của Word.</p> <p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"bảng Layout điều khiển\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/tables_layout_tab.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_tables_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 3 ** và chọn tất cả văn bản bên dưới các ngày ** 8 tháng 7 - 12 tháng 7 **.</li> <li>Sử dụng ** Chuyển văn bản thành bảng ** thành Insert văn bản thành bảng ** 6 cột <strong>. Đảm bảo ** Tách văn bản tại Tab </strong>.</li> <li>** Xóa ** cột Thứ Bảy.</li> <li>** Insert một cột ** ở ** trái ** của cột Thứ Sáu và nhập ** Thứ Năm ** vào ô trên cùng.</li> <li>Thay đổi ** kiểu bảng ** thành bất kỳ kiểu nào bắt đầu bằng ** Bảng lưới 5 <strong>. ** Gợi ý </strong>: Tên kiểu xuất hiện khi bạn di chuột qua chúng.</li> <li>Trong trình đơn ** kiểu bảng Options **, hãy bỏ chọn Hàng có dải băng và chọn Cột có dải băng.</li> <li>Chọn ** toàn bộ bảng <strong>. Trong trình đơn thả xuống ** Biên giới </strong>, chọn ** Tất cả biên giới **.</li> <li>Với bảng vẫn được chọn, hãy tăng ** chiều cao hàng của bảng ** lên 0,3\" (0,8 cm).</li> <li>Chọn hàng đầu tiên và thay đổi ** căn chỉnh ô ** thành ** Căn giữa **.</li> <li> <p>Khi bạn hoàn tất, bảng của bạn sẽ trông giống như thế này:</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Tables Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_tables_img.png\" /></p> </li> </ol> <p>/en/word/charts/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wb_25",
                sessionId: 65,
                title: "Bài 25: Kiểm tra chính tả và ngữ pháp",
                description: "Nội dung chi tiết cho bài Bài 25: Kiểm tra chính tả và ngữ pháp.",
                video: "https://www.youtube.com/embed/uzrpa-gwN1A",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_spellinggrammar_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Bạn lo lắng về việc mắc lỗi khi gõ phím? Đừng như vậy. Word cung cấp cho bạn một số ** tính năng soát lỗi <strong>—bao gồm công cụ ** Chính tả và Ngữ pháp </strong>—có thể Help giúp bạn tạo ra các tài liệu chuyên nghiệp, không có lỗi.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng công cụ Chính tả và Ngữ pháp.</p> <h4>Để chạy kiểm tra Chính tả và Ngữ pháp:</h4> <ol> <li>Từ tab ** Review <strong>, hãy nhấp vào lệnh ** Spelling &amp; Grammar </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Spelling &amp; Grammar command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_command.png\" /> 2. Ngăn ** Chính tả và Ngữ pháp ** sẽ xuất hiện ở bên phải. Đối với mỗi lỗi trong tài liệu của bạn, Word sẽ đưa ra một hoặc nhiều ** gợi ý **. Bấm vào một gợi ý để sửa lỗi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking a spelling suggestion\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spelling_suggestions.jpg\" title=\"clicking a spelling suggestion\" /> 3. Word sẽ chuyển qua từng lỗi cho đến khi bạn xem lại hết chúng. Sau khi lỗi cuối cùng được xem xét, một hộp thoại sẽ xuất hiện xác nhận rằng việc kiểm tra chính tả và ngữ pháp đã hoàn tất. Nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"completing the spelling and grammar check\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_check_done.png\" /></p> <p>Nếu không có gợi ý nào được đưa ra, bạn có thể nhập thủ công chính tả vào tài liệu của mình.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bỏ qua “lỗi”",
                        content: "<p>Việc kiểm tra chính tả và ngữ pháp ** không phải lúc nào cũng đúng **. Riêng với ngữ pháp, có rất nhiều lỗi Word sẽ không để ý. Cũng có những lúc việc kiểm tra chính tả và ngữ pháp sẽ cho biết có lỗi trong khi thực tế không phải vậy. Điều này thường xảy ra với tên và danh từ riêng khác, có thể không có trong từ điển.</p> <p>Nếu Word thông báo có lỗi, bạn có thể chọn không thay đổi lỗi đó. Tùy thuộc vào đó là lỗi chính tả hay lỗi ngữ pháp, bạn có thể chọn từ một số Options.</p> <h4>Đối với \"lỗi\" chính tả:</h4> <ul> <li>** Bỏ qua một lần **: Thao tác này sẽ bỏ qua từ mà không thay đổi từ đó.</li> <li>** Bỏ qua tất cả **: Thao tác này sẽ bỏ qua từ mà không thay đổi từ đó và cũng sẽ bỏ qua tất cả các trường hợp khác của từ trong tài liệu.</li> <li>** Thêm vào từ điển **: Thao tác này sẽ thêm từ vào từ điển để nó không bao giờ bị lỗi. Đảm bảo từ đó được viết đúng chính tả trước khi chọn tùy chọn này.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Ignore Once button to ignore spelling errors\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spelling_ignore.jpg\" title=\"clicking the Ignore Once button to ignore spelling errors\" /></p> <h4>Đối với \"lỗi\" ngữ pháp:</h4> <ul> <li>** Bỏ qua một lần **: Thao tác này sẽ bỏ qua từ hoặc cụm từ mà không thay đổi nó.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Ignore Once button to ignore grammar errors\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/grammar_ignore.jpg\" title=\"clicking the Ignore Once button to ignore grammar errors\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Tự động kiểm tra chính tả và ngữ pháp",
                        content: "<p>Theo mặc định, Word tự động kiểm tra tài liệu của bạn để tìm lỗi ** chính tả và ngữ pháp **, do đó, bạn thậm chí có thể không cần thực hiện kiểm tra riêng. Những lỗi này được biểu thị bằng ** dòng màu ** bên dưới văn bản.</p> <ul> <li>** Dòng màu đỏ ** biểu thị từ sai chính tả.</li> <li>** Dòng màu xanh ** biểu thị lỗi ngữ pháp, có thể bao gồm các từ dùng sai.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"automatic spell check and grammar check markers\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_auto_bluered.png\" /></p> <p>** Từ bị sử dụng sai <strong>—còn được gọi là lỗi chính tả theo ngữ cảnh—xảy ra khi một từ được viết đúng chính tả nhưng được sử dụng không chính xác. Ví dụ: nếu bạn sử dụng cụm từ ** Deer Mr. Theodore ** ở đầu một chữ cái, ** deer ** sẽ là lỗi chính tả theo ngữ cảnh. ** Deer ** viết đúng chính tả nhưng lại dùng sai trong chữ cái. Từ đúng là ** Kính gửi </strong>.</p> <h4>Để sửa lỗi chính tả:</h4> <ol> <li>Nhấp chuột phải vào ** từ được gạch chân **, sau đó chọn ** đúng chính tả ** từ danh sách gợi ý.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"correcting a spelling error\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_fix_commercial.png\" /> 2. Từ được sửa sẽ xuất hiện trong tài liệu.</p> <p>Bạn cũng có thể chọn ** Bỏ qua tất cả ** trường hợp của từ được gạch chân hoặc thêm từ đó vào ** từ điển **.</p> <h4>Để sửa lỗi ngữ pháp:</h4> <ol> <li>Nhấp chuột phải vào ** từ hoặc cụm từ được gạch chân **, sau đó chọn ** đúng chính tả hoặc cụm từ ** từ danh sách đề xuất.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"correcting a grammatical error\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_fix_grammar.png\" /> 2. Cụm từ đã sửa sẽ xuất hiện trong tài liệu.</p> <h4>Để thay đổi cài đặt kiểm tra chính tả và ngữ pháp tự động:</h4> <ol> <li>Nhấp vào tab ** File ** để truy cập ** Backstage view <strong>, sau đó nhấp vào ** Options </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking Options in Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/save_default_options.png\" /> 2. Một hộp thoại sẽ xuất hiện. Ở bên trái hộp thoại, chọn ** Proofing <strong>. Từ đây, bạn có một số Options để lựa chọn. Ví dụ: nếu bạn không muốn Word tự động đánh dấu ** lỗi chính tả </strong>, ** lỗi ngữ pháp ** hoặc ** các từ thường bị nhầm lẫn **, bạn chỉ cần bỏ chọn tùy chọn mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"customizing spell check options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_options_dialog.png\" /></p> <p>Nếu đã tắt tính năng kiểm tra chính tả và/hoặc ngữ pháp tự động, bạn vẫn có thể chuyển tới tab ** Review ** và nhấp vào lệnh ** Spelling &amp; Grammar ** để chạy kiểm tra New.</p> <h4>Để ẩn lỗi chính tả và ngữ pháp trong tài liệu:</h4> <p>Nếu bạn đang chia sẻ một tài liệu như sơ yếu lý lịch với ai đó, bạn có thể không muốn người đó nhìn thấy các đường màu đỏ và xanh lam. Việc tắt tính năng tự động kiểm tra chính tả và ngữ pháp chỉ áp dụng cho máy tính của bạn nên các dòng vẫn có thể hiển thị khi người khác xem tài liệu của bạn. May mắn thay, Word cho phép bạn ẩn các lỗi chính tả và ngữ pháp để các dòng không hiển thị trên bất kỳ máy tính nào.</p> <ol> <li>Nhấp vào tab ** File ** để đi tới ** Backstage view <strong>, sau đó nhấp vào ** Options </strong>.</li> <li>Một hộp thoại sẽ xuất hiện. Chọn ** Đang kiểm tra <strong>, sau đó chọn hộp bên cạnh ** Chỉ ẩn lỗi chính tả trong tài liệu này ** và ** Chỉ ẩn lỗi ngữ pháp trong tài liệu này </strong>, sau đó nhấp vào ** OK **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hiding spell check for a specific document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/spell_options_hide.png\" /> 3. Các dòng trong tài liệu sẽ bị ẩn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Basic/practice_files/word_spellinggrammar_practice.docx\">tài liệu thực hành</a> của chúng tôi. Nếu bạn đã tải xuống tài liệu thực hành của chúng tôi để theo dõi bài học, hãy nhớ tải xuống bản sao mới bằng cách nhấp vào liên kết trong bước này.</li> <li>Chạy kiểm tra ** Spelling &amp; Grammar **.</li> <li>** Bỏ qua ** cách viết những cái tên như ** Marcom **.</li> <li>Sửa ** tất cả ** các lỗi chính tả và ngữ pháp khác.</li> <li>Khi bạn hoàn tất, tài liệu của bạn sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Spelling and Grammar Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Basic/images/word2016_spelling_img.png\" /></p> <p>/en/word/track-changes-and-comments/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            }
        ]
    },
    {
        id: 60,
        title: "Buổi 6: Định dạng (văn bản, bảng biểu, Tabstop, tạo ngắt trang)",
        description: "Làm quen với các thao tác cơ bản trong Microsoft Word: định dạng văn bản, tạo bảng, sử dụng tab stops và ngắt trang.",
        totalLessons: 4,
        quiz: "TN_Buoi6.csv",
        slide: "Slide_Word_Buoi6.pdf",
        lessons: [
            {
                id: 1,
                sessionId: 60,
                title: "Bài 1: Định Dạng Văn Bản",
                description: "Học cách định dạng font chữ, paragraph, và các thiết lập cơ bản trong Word.",
                video: "https://drive.google.com/file/d/1T94HCZQpXxvXvQINcn1p49ePkvisV20C/preview",
                tasks: [
                    { name: "Bài 1.2.1", file: "Lớp-Họ và tên-Bài 1.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 1_ĐỊNH DẠNG VĂN BẢN.pdf" }
                ],

                steps: [
                    {
                        title: "Lý thuyết",
                        content: "**Định dạng văn bản trong Word bao gồm các thao tác sau:**\n- Chọn font chữ, cỡ chữ, màu sắc, kiểu chữ (in đậm, in nghiêng, gạch chân).\n- Canh lề văn bản (trái, phải, giữa, đều hai bên).\n- Thiết lập khoảng cách dòng và đoạn.\n- Sử dụng các kiểu định dạng sẵn có (Styles) để áp dụng nhanh các định dạng cho văn bản.\n\n**Tại sao định dạng văn bản quan trọng?**\n- Giúp tài liệu trở nên chuyên nghiệp và dễ đọc hơn.\n- Tạo điểm nhấn cho các phần quan trọng trong văn bản.\n- Giúp người đọc dễ dàng theo dõi và hiểu nội dung.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Mở tệp bài tập",
                        content: "Mở tệp 'Lớp-Họ và tên-Bài 1.2.1.docx' trong mục tài nguyên.",
                        icon: "fa-folder-open"
                    },
                    {
                        title: "Bước 2: Hiển thị thanh thước, chuyển đơn vị đo",
                        content: "1. Hiển thị thanh thước: Chọn View -> đánh dấu chọn mục Ruler.\n2. Chuyển đơn vị đo: Chọn File -> chọn Options -> chọn Advanced -> tại mục Display (Show measurements in units of: Centimeters) -> nhấn OK.",
                        slideImage: "images/Buổi_6/Bài_1/1.2.png",
                        icon: "fa-ruler"
                    },
                    {
                        title: "Bước 3: Canh chỉnh khổ giấy, hướng giấy, lề",
                        content: "1. Canh chỉnh khổ giấy: chọn Page Layout -> chọn Size -> chọn A4. \n2. Canh chỉnh hướng giấy: chọn Layout -> chọn Orientation -> chọn hướng giấy đứng (Portrait), hướng giấy ngang (Landscape). \n3. Canh lề: chọn Layout -> chọn Margins -> chọn Custom Margins... -> lề trên(Top): 2 cm, lề dưới (Bottom): 2cm, lề trái (Left): 2.5cm hoặc 3cm, lề phải (Right): 2cm -> nhấn OK.",
                        slideImage: "images/Buổi_6/Bài_1/1.3.png",
                        icon: "fa-file-invoice"
                    },
                    {
                        title: "Bước 4: Soạn thảo và định dạng chuyên nghiệp (Modify Style).",
                        content: "1. Tại thẻ HOME, Click chuột phải vào ô Normal trong khung Styles → chọn Modify. \n2. Thiết lập thông số: Chọn Font Times New Roman, cỡ chữ 13, chọn Canh đều 2 bên (Justified) \n3. Chỉnh giãn dòng/đoạn: Bấm nút Format (góc dưới trái) → chọn Paragraph → Chỉnh Before/After (ví dụ 6pt) và Line spacing (1.5 lines) → OK.",
                        slideImage: "images/Buổi_6/Bài_1/1.4.png",
                        icon: "fa-text-height"
                    },
                    {
                        title: "Bước 5: Lưu bài",
                        content: "Nhấn File -> Save hoặc Ctrl+S để lưu lại kết quả.",
                        icon: "fa-save"
                    },
                ]
            },
            {
                id: 2,
                sessionId: 60,
                title: "Bài 2: Bảng Biểu (Table)",
                description: "Làm việc với bảng: Tạo bảng, gộp ô, định dạng đường viền và màu nền.",
                video: "https://drive.google.com/file/d/1GV0hJT8kEbYwrMXelJhUsdWP0HuLd0WL/preview",
                tasks: [
                    { name: "Bài 2.2.1", file: "Lớp-Họ và tên-Bài 2.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 2_TABLE .pdf" }
                ],
                steps: [
                    {
                        title: "Lý thuyết",
                        content: "**Bảng (Table)** trong Word là một công cụ hữu ích để tổ chức và trình bày dữ liệu một cách rõ ràng và có cấu trúc. Bảng giúp người dùng dễ dàng so sánh, phân loại và phân tích thông tin. \n\n**Các thành phần chính của bảng:**\n- **Hàng (Row):** Các dòng ngang trong bảng.\n- **Cột (Column):** Các dòng dọc trong bảng.\n- **Ô (Cell):** Giao điểm giữa hàng và cột, nơi chứa dữ liệu.\n\n**Lợi ích của việc sử dụng bảng:**\n- Tổ chức dữ liệu một cách logic và dễ hiểu.\n- Giúp trình bày thông tin một cách chuyên nghiệp.\n- Dễ dàng chỉnh sửa và định dạng dữ liệu.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Chèn bảng",
                        content: "Chọn thẻ Insert → chọn Table → chọn Insert Table… → Nhập số cột (Columns) và số hàng (Rows) → OK.",
                        slideImage: "images/Buổi_6/Bài_2/2.1.png",
                        icon: "fa-table"
                    },
                    {
                        title: "Bước 2: Chèn thêm cột và dòng vào bảng",
                        content: "1. để con trỏ chuột vào một ô trong bảng, ô này nằm trước hoặc sau cột định chèn thêm cột vào. \n2. Chọn Table Layout -> chọn Insert Column Left hoặc Insert Column Right để chèn thêm cột vào bảng. \n3. Chọn Insert Row Above hoặc Insert Row Below để chèn thêm dòng vào bảng.",
                        slideImage: "images/Buổi_6/Bài_2/2.2.png",
                        icon: "fa-plus-square"
                    },
                    {
                        title: "Bước 3: Gộp ô và tách ô",
                        content: "1. Chọn trên 2 ô cần gộp -> chọn Table Layout -> Merge Cells để gộp ô. \n2. Chọn trên 2 ô cần tách -> chọn Table Layout -> Split Cells để tách ô.",
                        slideImage: "images/Buổi_6/Bài_2/2.3.png",
                        icon: "fa-compress-arrows-alt"
                    },
                    {
                        title: "Bước 4: Lặp lại tiêu đề bảng ở các trang tiếp theo",
                        content: "1. Chọn tiêu đề Bảng (dòng đầu tiên của Bảng) -> Repeat Header Rows.",
                        slideImage: "images/Buổi_6/Bài_2/2.4.png",
                        icon: "fa-redo"
                    },
                    {
                        title: "Bước 5: Chuyển đổi bảng thành text",
                        content: "1. Chọn toàn bộ Bảng -> Table Layout -> Convert to Text.",
                        slideImage: "images/Buổi_6/Bài_2/2.5.png",
                        icon: "fa-exchange-alt"
                    },
                    {
                        title: "Bước 6: Thiết kế bảng",
                        content: "1. Chọn toàn bộ Bảng -> Table Design.\n2. Tại Table Styles có thể lựa chọn kiểu bảng.\n3. Tại Boders, có thể chọn kiểu viền cho bảng.",
                        slideImage: "images/Buổi_6/Bài_2/2.6.png",
                        icon: "fa-paint-brush"
                    },
                ]
            },
            {
                id: 3,
                sessionId: 60,
                title: "Bài 3: Tab Stop",
                description: "Sử dụng Tab để căn chỉnh văn bản chuyên nghiệp: Tab trái, phải, giữa, thập phân.",
                video: "https://drive.google.com/file/d/1G7dTKcHvz2_wtDJd9l277x-khvxTnXpn/preview",
                tasks: [
                    { name: "Bài 3.2.1", file: "Lớp-Họ và tên-Bài 3.2.1.docx" },
                    { name: "Bài 3.2.2", file: "Lớp-Họ và tên-Bài 3.2.2.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 3-TABSTOP.pdf" }
                ],
                steps: [
                    {
                        title: "Lý thuyết",
                        content: "**Tab Stop** là một công cụ trong Microsoft Word giúp người dùng căn chỉnh văn bản một cách chính xác và nhanh chóng. Khi sử dụng Tab Stop, người dùng có thể định vị con trỏ tại các điểm cụ thể trên dòng văn bản, từ đó dễ dàng tạo ra các khoảng cách đều nhau giữa các đoạn văn bản hoặc các phần tử khác nhau trong tài liệu.\n\n**Các loại Tab Stop phổ biến:**\n- **Left Tab (Tab trái):** Căn lề trái cho văn bản bắt đầu từ vị trí Tab Stop.\n- **Center Tab (Tab giữa):** Căn giữa văn bản tại vị trí Tab Stop.\n- **Right Tab (Tab phải):** Căn lề phải cho văn bản kết thúc tại vị trí Tab Stop.\n- **Decimal Tab (Tab thập phân):** Căn chỉnh số theo dấu thập phân tại vị trí Tab Stop.\n\n**Lợi ích của việc sử dụng Tab Stop:**\n- Giúp tài liệu trở nên gọn gàng và chuyên nghiệp hơn.\n- Dễ dàng điều chỉnh khoảng cách giữa các phần tử trong văn bản.\n- Tiết kiệm thời gian khi soạn thảo và định dạng tài liệu.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Đặt con trỏ vào vị trí cần đặt Tab",
                        content: "Đặt con trỏ tại vị trí cần đặt Tab.",
                        icon: "fa-mouse-pointer"
                    },
                    {
                        title: "Bước 2: Đặt vị trí Tab",
                        content: "1. Đặt chuột lên thước ngang (Ruler) tại vị trí muốn đặt Tab Stop. Nhấn chuột trái để đặt Tab Stop. \n2. Click đúp chuột vào biểu tượng Tab Stop trên thước ngang để mở hộp thoại Tabs.",
                        slideImage: "images/Buổi_6/Bài_3/3.2.png",
                        icon: "fa-ruler"
                    },
                    {
                        title: "Bước 3: Chọn Leader",
                        content: "Chọn kiểu ký tự dẫn (Leader: 1 None, 2...., 3----). Nhấn Set -> OK.",
                        slideImage: "images/Buổi_6/Bài_3/3.3.png",
                        icon: "fa-list-ol"
                    },
                    {
                        title: "Bước 4: Sử dụng Tab",
                        content: "Nhấn phím Tab trên bàn phím để di chuyển con trỏ đến vị trí đã đặt.",
                        icon: "fa-keyboard"
                    }
                ]
            },
            {
                id: 4,
                sessionId: 60,
                title: "Bài 4: Tạo Ngắt (Breaks)",
                description: "Chia cột báo (Columns) và ngắt trang, ngắt đoạn (Section Break).",
                video: "https://drive.google.com/file/d/1SjenMmbmJWvOBIY9RlZW4qx8xkxJUims/preview",
                tasks: [
                    { name: "Bài 4.2.1", file: "Lớp-Họ và tên-Bài 4.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 4_TẠO NGẮT .pdf" }
                ],
                steps: [
                    {
                        title: "Lý thuyết",
                        content: "**Breaks (Ngắt)** trong Microsoft Word là một công cụ quan trọng giúp người dùng kiểm soát cách bố trí và trình bày tài liệu. Breaks cho phép bạn chia nhỏ tài liệu thành các phần riêng biệt, giúp dễ dàng quản lý và định dạng nội dung. Có nhiều loại Breaks khác nhau, bao gồm:\n\n- **Page Break (Ngắt trang):** Chuyển con trỏ sang trang mới, thường được sử dụng để bắt đầu một chương hoặc phần mới trong tài liệu.\n- **Column Break (Ngắt cột):** Chuyển con trỏ sang cột tiếp theo trong tài liệu có định dạng cột, hữu ích khi tạo các bản tin hoặc báo cáo.\n- **Section Break (Ngắt đoạn):** Chia tài liệu thành các phần riêng biệt, cho phép áp dụng các định dạng khác nhau cho từng phần, như thay đổi lề, hướng trang hoặc số trang.\n\nSử dụng Breaks một cách hiệu quả giúp tài liệu trở nên chuyên nghiệp hơn và dễ dàng chỉnh sửa khi cần thiết.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Chia cột và ngắt cột",
                        content: "1. Bôi đen văn bản. Vào Layout -> Columns -> Chọn số cột (Two, Three...)\n2. Đặt con trỏ tại vị trí muốn ngắt sang cột mới. Vào Layout -> Breaks -> Column.",
                        slideImage: "images/Buổi_6/Bài_4/4.1.png",
                        icon: "fa-columns"
                    },
                    {
                        title: "Bước 2: Ngắt trang và xóa ngắt trang",
                        content: "**Ngắt trang:** \nĐặt con trỏ tại vị trí muốn ngắt sang trang mới. Vào Insert -> Page Break.\n**Xóa ngắt trang:** \n1. Gõ Ctrl + H để mở hộp thoại Find and Replace.\n2. Tìm kiếm \"^m\" -> Replace All.",
                        slideImage: "images/Buổi_6/Bài_4/4.2.png",
                        icon: "fa-file-alt"
                    },
                    {
                        title: "Bước 3: Ngắt đoạn (Section Break)",
                        content: "1. Vào Home -> chọn biểu tượng Show/Hide Break Editing Marks.\n2. Chức năng Section Break cung cấp cho người sử dụng 4 lựa chọn: \n- Next Page: Tạo ngắt trang sau đoạn văn.\n- Continuous: Tạo ngắt trang sau đoạn văn.\n- Even Page hoặc Odd Page: Ngắt đoạn và di chuyển văn bản sau dấu ngắt sang trang chẵn hoặc trang lẻ tiếp theo.\n3. Xóa dấu ngắt đoạn: \n- Chọn Home -> chọn icon (Show/Hide Editing Marks) để hiển thị tất cả các dấu đoạn và các ký hiệu định dạng bị ẩn trong tài liệu thông thường. \n- Đặt con trỏ chuột trước dấu ngắt phần / ngắt đoạn và sau đó nhấn phím xóa để xóa. \n- Hoặc gõ Ctrl + H để mở hộp thoại Find and Replace.\n- Tìm kiếm \"^b\" -> Replace All.",
                        slideImage: "images/Buổi_6/Bài_4/4.3.png",
                        icon: "fa-cut"
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Buổi 7: Mục lục (Multilevel List, caption, nội dung, hình ảnh, bảng biểu)",
        description: "Học các kỹ thuật nâng cao: Multilevel List, Header/Footer, Table of Contents và References.",
        totalLessons: 3,
        quiz: "TN_Buoi7.csv",
        slide: "Slide_Word_Buoi7.pdf",
        lessons: [
            {
                id: 5,
                sessionId: 2,
                title: "Bài 5: Multilevel List (Đã cập nhật)",
                description: "Tạo danh sách đa cấp với các cấp độ khác nhau.",
                video: "https://mymedia.donga.edu.vn/f/MultiLevelList_Index_caption_1777878466.mp4",
                videos: [
                    "https://mymedia.donga.edu.vn/f/MultiLevelList_Index_caption_1777878466.mp4",
                    "https://drive.google.com/file/d/1BZ8ABVT0bOa4oD8R2JaZUcQwSGCodK4C/preview"
                ],
                tasks: [
                    { name: "Bài 5.2.1", file: "Lớp-Họ và tên-Bài 5.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Buổi 7/Buổi 02 - Bài 5 đến Bài 7 - WORD NC.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Định nghĩa Multilevel List",
                        content: "Vào Home -> Chọn biểu tượng Multilevel List -> Define New Multilevel List.",
                        slideImage: "images/Buổi_7/Bài_5/5.1.png",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Bước 2: Thiết lập Level 1",
                        content: "- Tại vị trí số (1 - Click level to modify) là cấp độ của đầu mục, chọn cấp độ cao nhất trước. Hãy click vào số 1 trong mục Click level to modify \n- Số(2) xóa hết đi gõ: BÀI(thêm dấu cách – Space)\n- Số(3) thì chọn kiểu 1, 2, 3,…\n- Số(2) thêm dấu “.” sau chữ Bài 1\n- Số(5), (6) thì sửa lại là 0\n- Tại số(7) bạn chọn Heading 1(vì sẽ dùng để tạo mục lục).\n- Tại vị trí số(8 – Follow number with) chọn SPACE\n- Sau khi chỉnh xong thì được như bên dưới \n- Số(2) thêm dấu “.” sau chữ Bài 1 \n- Số(5), (6) thì sửa lại là 0 \n- Tại số(7) bạn chọn Heading 1(vì sẽ dùng để tạo mục lục).\n- Tại vị trí số(8 – Follow number with) chọn SPACE\n-> OK",
                        slideImage: "images/Buổi_7/Bài_5/5.2.png",
                        icon: "fa-level-up-alt"
                    },
                    {
                        title: "Bước 3: Thiết lập Level 2",
                        content: "- Tại vị trí số (1 - Click level to modify): chọn vào số 2 trong mục Click level to modify\n- Số(2) xóa hết đi\n- Số (4 – Include level number from) thì chọn: LEVEL 1\n- Số(2) thêm dấu “.” sau cùng\n- Số (3) thì chọn kiểu 1,2,3,…\n-  Số (2): thêm dấu “.” sau cùng\n- Số (5), (6) thì sửa lại là 0\n- Tại số (7) bạn chọn Heading 2 (vì sẽ dùng để tạo mục lục)\n- Tại vị trí số (8 – Follow number with) chọn SPACE\n-> OK",
                        slideImage: "images/Buổi_7/Bài_5/5.3.png",
                        icon: "fa-level-down-alt"
                    },
                    {
                        title: "Bước 4: Thiết lập Level 3",
                        content: "- Tại vị trí số (1 - Click level to modify): chọn vào số 3 trong mục Click level to modify\n- Số(2) xóa hết đi\n- Số (4 – Include level number from) thì chọn: LEVEL 1\n- Số(2) thêm dấu “.” sau cùng\n- Số (4): chọn tiếp LEVEL 2\n- Số(2) thêm dấu “.” sau cùng\n- Số (3) thì chọn kiểu 1,2,3,…\n-  Số (2): thêm dấu “.” sau cùng\n- Số (5), (6) thì sửa lại là 0\n- Tại số (7) bạn chọn Heading 3 (vì sẽ dùng để tạo mục lục)\n- Tại vị trí số (8 – Follow number with) chọn SPACE\n-> OK",
                        slideImage: "images/Buổi_7/Bài_5/5.4.png",
                        icon: "fa-level-down-alt"
                    },
                    {
                        title: "Bước 5: Chỉnh sửa Style Heading 1, Heading 2 và Heading 3",
                        content: "Kích phải chuột vô Heading 1: chọn MODIFY. Font chữ Time New Roman, cỡ chữ 13, in đậm, màu đen, canh đều 2 biên, Chọn Format -> Paragraph để giãn dòng, đoạn(đã hướng dẫn bài 1) -> OK\nChỉnh sửa tương tự cho Heading 2 và Heading 3.",
                        slideImage: "images/Buổi_7/Bài_5/5.5.png",
                        icon: "fa-edit"
                    },
                ]
            },
            {
                id: 6,
                sessionId: 2,
                title: "Bài 6: Caption",
                description: "Tạo và tùy chỉnh Header, Footer, Page Number cho tài liệu chuyên nghiệp.",
                video: "https://drive.google.com/file/d/1c5gYvFM39rFwmGWGTSjejVCNQdoQBtpc/preview",
                tasks: [
                    { name: "Bài 6.2.1", file: "Lớp-Họ và tên-Bài 6.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Buổi 7/Buổi 02 - Bài 5 đến Bài 7 - WORD NC.pdf" }
                ],
                steps: [
                    {
                        title: "Lý thuyết",
                        content: "**Caption là gì?**\nChức năng cho **Caption** trong Word cho chúng ta có thể chèn chú thích vào những đối tượng như: hình ảnh(Picture), bảng(Table), công thức(Equation), biểu đồ(Chart) và từ đó có thể tạo ra các phụ lục, danh mục cho tất cả những đối tượng đó để có thể quản lý chúng một cách nhanh chóng và dễ dàng.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Chèn đối tượng (Insert Picture, Table, Chart, Equation)",
                        content: "1. Thêm đối tượng cần chèn Caption vào tài liệu (Hình ảnh, Bảng, Biểu đồ, Công thức).\n2. Chọn đối tượng muốn chèn chú thích, kích chuột phải vào đối tượng chọn: **INSERT CAPTION**.",
                        icon: "fa-mouse-pointer",
                        slideImage: "images/Buổi_7/Bài_6/6.1.png"
                    },
                    {
                        title: "Bước 2: Nhập nội dung Caption",
                        content: "**(1) CAPTION**: Nhập nội dung đối tượng vào \n**(2) LABEL**: Chọn nhãn dán.Để thay đổi nội dung của Nhãn thì chọn(4 – NEW LABEL) \n**(3) POSITION**: Vị trí của ghi chú: Trên đối tượng(ABOVE), dưới đối tượng(BELOW)\n**(4) NEW LABEL**: Tạo nhãn mới.\n**(5) NUMBERING**: Định dạng thứ tự ảnh. Nếu muốn gán đối tượng đó thuộc Chương/ Bài/ Phần nào thì đánh dấu tick vào ô Include chapter number",
                        icon: "fa-tag",
                        slideImage: "images/Buổi_7/Bài_6/6.2.png"
                    }
                ]
            },
            {
                id: 7,
                sessionId: 2,
                title: "Bài 7: Mục lục",
                description: "Tạo mục lục tự động với Table of Contents và sử dụng Styles.",
                video: "https://drive.google.com/file/d/1G7dTKcHvz2_wtDJd9l277x-khvxTnXpn/preview",
                tasks: [
                    { name: "Bài 7.2.1", file: "Lớp-Họ và tên-Bài 7.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Buổi 7/Buổi 02 - Bài 5 đến Bài 7 - WORD NC.pdf" }
                ],
                steps: [
                    {
                        title: "Lý thuyết",
                        content: "Mục lục là danh sách các tiêu đề chính và phụ trong tài liệu, giúp người đọc dễ dàng điều hướng và tìm kiếm thông tin. Sử dụng Styles để định dạng tiêu đề giúp tạo mục lục tự động và chuyên nghiệp.\n\n**Lợi ích của việc sử dụng Mục lục:**\n- Dễ dàng điều hướng tài liệu dài.\n- Cập nhật tự động khi có thay đổi trong nội dung.\n- Tăng tính chuyên nghiệp cho tài liệu.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Áp dụng Heading Styles",
                        content: "Chọn tiêu đề và áp dụng Heading 1, Heading 2, Heading 3.",
                        icon: "fa-text-height",
                        slideImage: 'images/Buổi_7/Bài_7/7.1.png'
                    },
                    {
                        title: "Bước 2: Chèn Table of Contents",
                        content: "Vào **References** -> **Table of Contents** -> Chọn kiểu mục lục.\nCó thể thay đổi tuỳ chỉnh hiển thị mục lục. Click vào **Table of Content** -> **Custom Table of Contents…** Trong tab **Table of Contents** tuỳ chỉnh các thiết lập sau:\n- **Show page numbers**: Hiển thị số trang ứng với tên đề mục.\n- **Right align page numbers**: Hiển thị số trang nằm ở sát lề bên phải(nếu bỏ chọn, số trang sẽ nằm ở ngay liền sau tên đề mục).\n- **Tab leader**: Hình thức dóng hàng, đối chiếu giữa tên đề mục và số trang(dùng chuỗi các dấu chấm, dấu gạch ngang, hoặc bỏ trắng).",
                        icon: "fa-list-ol",
                        slideImage: "images/Buổi_7/Bài_7/7.2.png"
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Buổi 9: Ứng dụng AI trong Word",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        lessons: [
            {
                id: 8,
                sessionId: 3,
                title: "Tạo bảng với chat AI",
                description: "Tạo bảng với chat AI.",
                video: "https://drive.google.com/file/d/1SjenMmbmJWvOBIY9RlZW4qx8xkxJUims/preview",
                tasks: [
                    { name: "Bài 8.2.1", file: "Lớp-Họ và tên-Bài 8.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 8_SMARTART.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Thêm chat AI vào Word",
                        content: "Vào Home -> Add-ins -> Tìm kiếm từ khóa **\"ChatGPT\"** -> Chọn ChatGPT for MS Word-> Add -> Chấp nhận các điều khoản để thêm ChatGPT vào Word.",
                        icon: "fa-robot",
                        slideImage: "images/Buổi_9/9.1.png"
                    },
                    {
                        title: "Bước 2: Ra lệnh cho chat AI tạo bảng",
                        content: "Tại thẻ Home -> Chọn biểu tượng ChatGPT for MS Word -> Đăng nhập tài khoản OpenAI. \nNhập lệnh tạo bảng vào ô chat, ví dụ: **\"Tạo bảng so sánh các ngôn ngữ lập trình phổ biến hiện nay với các tiêu chí: Tên ngôn ngữ, Năm ra mắt, Mục đích sử dụng, Ưu điểm, Nhược điểm. Yêu cầu bảng đẹp mắt và thân thiện.\"**\nNhấn **CREATE TEXT** để gửi lệnh và chờ chat AI tạo bảng.",
                        icon: "fa-keyboard",
                        slideImage: "images/Buổi_9/9.2.png"
                    },
                    {
                        title: "Bước 3: Nhận kết quả và tùy chỉnh bảng",
                        content: "Chat AI sẽ trả về bảng theo yêu cầu. Người dùng có thể tùy chỉnh định dạng bảng như thay đổi màu sắc, kiểu dáng, và bố cục để phù hợp với tài liệu.",
                        icon: "fa-table",
                        slideImage: "images/Buổi_9/9.3.png"
                    },
                    {
                        title: "Tùy chọn: Chọn chat AI khác",
                        content: "Ngoài ChatGPT for MS Word, người dùng có thể thử các chat AI khác như **YouChat** hoặc **Perplexity AI** bằng cách tìm kiếm và thêm chúng vào Word tương tự như bước 1. Các chat AI này cũng hỗ trợ tạo bảng và các nội dung khác theo yêu cầu.",
                        icon: "fa-robot",
                        slideImage: "images/Buổi_9/9.4.png"
                    },
                ]
            }
        ]
    },
    {
        id: 66,
        title: "Word Nâng Cao",
        description: "Các bài học nâng cao về Microsoft Word dựa trên giáo trình GCFGlobal.",
        totalLessons: 16,
        lessons: [
            {
                id: "wa_18",
                sessionId: 66,
                title: "Bài 18: Pictures-và-gói văn bản",
                description: "Nội dung chi tiết cho bài Bài 18: Pictures-và-gói văn bản.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_picturestextwrapping_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Thêm ** Pictures ** vào tài liệu của bạn có thể là một cách tuyệt vời để ** minh họa ** ** thông tin quan trọng ** và thêm ** điểm nhấn trang trí ** vào văn bản hiện có. Được sử dụng ở mức độ vừa phải, Pictures có thể cải thiện giao diện tổng thể của tài liệu của bạn.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách thêm Pictures vào tài liệu của bạn.</p> <h4>Đến Insert ảnh từ File:</h4> <p>Nếu bạn nghĩ đến một hình ảnh cụ thể, bạn có thể ** Insert một hình ảnh từ File **. Trong ví dụ của chúng tôi, chúng tôi sẽ Insert một ảnh được lưu cục bộ trên máy tính của chúng tôi. Nếu bạn muốn làm việc với ví dụ của chúng tôi, hãy nhấp chuột phải vào hình ảnh bên dưới và Save nó vào máy tính của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"example logo\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/logo.png\" title=\"example logo\" /></p> <ol> <li>Đặt ** điểm chèn ** vào nơi bạn muốn hình ảnh xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the insertion point at the beginning of a heading\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-11_10-50-52.png\" title=\"the insertion point at the beginning of a heading\" /> 2. Chọn tab ** Insert ** trên ** Ribbon <strong>, sau đó nhấp vào lệnh ** Pictures </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Pictures command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-06_15-03-43.png\" title=\"clicking the Pictures command\" /> 3. Hộp thoại ** Insert Picture ** sẽ xuất hiện. Điều hướng đến thư mục chứa hình ảnh của bạn, sau đó chọn hình ảnh và nhấp vào ** Insert **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Insert Image dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-11_10-51-57.png\" title=\"the Insert Image dialog box\" /> 4. Hình ảnh sẽ xuất hiện trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the logo added to the document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-11_10-53-09.png\" title=\"the logo added to the document\" /></p> <p>Để thay đổi kích thước hình ảnh, hãy nhấp và kéo một trong các ** bộ điều khiển định cỡ góc <strong>. Hình ảnh sẽ thay đổi kích thước trong khi vẫn giữ nguyên tỷ lệ. Nếu bạn muốn kéo dài theo chiều ngang hoặc chiều dọc, bạn có thể sử dụng ** tay cầm định cỡ bên </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"resizing an image\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/insert_picture_resize.png\" title=\"resizing an image\" /></p> <h4>Thay đổi cài đặt Text Wrapping</h4> <p>Khi bạn Insert một ảnh từ File, bạn có thể nhận thấy rằng rất khó để di chuyển ảnh đó chính xác đến nơi bạn muốn. Điều này là do ** Text Wrapping ** cho hình ảnh được đặt thành ** In Line with Text **. Bạn sẽ cần thay đổi cài đặt ** Text Wrapping ** nếu bạn muốn di chuyển hình ảnh một cách tự do hoặc nếu bạn chỉ muốn văn bản bao quanh hình ảnh theo cách tự nhiên hơn.</p> <h4>Để bao văn bản xung quanh một hình ảnh:</h4> <ol> <li>Chọn ** hình ảnh ** bạn muốn bao quanh văn bản. Tab ** Định dạng ** sẽ xuất hiện ở bên phải của Ribbon.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting an image\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-12_09-23-34.png\" title=\"selecting an image\" /> 2. Trên ** tab Định dạng **, hãy nhấp vào lệnh ** Ngắt dòng ** trong ** Sắp xếp ** Group, sau đó chọn tùy chọn Text Wrapping mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Ở phía trước văn bản ** để chúng tôi có thể tự do di chuyển nó mà không ảnh hưởng đến văn bản. Bạn cũng có thể chọn ** Thêm Layout Options ** để tinh chỉnh Layout.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"thay đổi Text Wrapping thành Phía trước văn bản\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-12_09-24-44.png\" title=\"thay đổi Text Wrapping thành Phía trước văn bản\" /> 3. Văn bản sẽ bao quanh hình ảnh. Bây giờ bạn có thể ** di chuyển ** hình ảnh nếu muốn. Chỉ cần nhấp và kéo nó đến ** vị trí ** mong muốn. Khi bạn di chuyển nó, ** hướng dẫn căn chỉnh ** sẽ xuất hiện trước Help bạn Align hình ảnh trên trang.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"moving an image\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-12_09-26-17.png\" title=\"moving an image\" /></p> <p>Bạn cũng có thể truy cập Text Wrapping Options bằng cách chọn hình ảnh và nhấp vào nút ** Layout Options ** xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the Layout Options button \" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-12_09-27-19.png\" title=\"using the Layout Options button\" /></p> <p>Nếu hướng dẫn căn chỉnh không xuất hiện, hãy chọn tab Trang Layout, sau đó nhấp vào lệnh Align. Chọn ** Sử dụng Hướng dẫn Căn chỉnh ** từ trình đơn thả xuống xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Using Alignment Guides\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-12_09-27-59.png\" title=\"Using Alignment Guides\" /></p> <h4>Sử dụng cài đặt Text Wrapping được xác định trước</h4> <p>Text Wrapping được xác định trước cho phép bạn nhanh chóng di chuyển hình ảnh đến một vị trí cụ thể trên trang. Văn bản sẽ tự động bao quanh đối tượng nên vẫn dễ đọc.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a predefined text wrapping setting\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-12_09-50-34.png\" title=\"selecting a predefined text wrapping setting\" /></p> <h4>Chèn trực tuyến Pictures</h4> <p>Nếu bạn không có ảnh mình muốn trên máy tính, bạn có thể ** tìm ảnh trực tuyến ** để thêm vào tài liệu của mình. Word cung cấp hai Options để tìm kiếm trực tuyến Pictures:</p> <ul> <li>** Tìm kiếm Hình ảnh trên Bing <strong>: Bạn có thể sử dụng tùy chọn này để tìm kiếm hình ảnh trên Internet. Theo mặc định, Bing chỉ hiển thị những hình ảnh được cấp phép theo ** Creative Commons </strong>, nghĩa là bạn có thể sử dụng chúng cho các dự án của riêng mình. Tuy nhiên, bạn nên nhấp vào liên kết tới trang web của hình ảnh để xem liệu có bất kỳ hạn chế nào về cách sử dụng nó hay không.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inserting an image from Bing\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/pictures_bing_ocean.jpg\" title=\"inserting an image from Bing\" /> * ** OneDrive **: Bạn có thể Insert một hình ảnh được lưu trữ trên OneDrive của bạn. Bạn cũng có thể liên kết ** tài khoản trực tuyến ** khác với Microsoft Account của mình, bao gồm Facebook và Flickr.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inserting an image from OneDrive\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/pictures_onedrive.jpg\" title=\"inserting an image from OneDrive\" /></p> <p>#### Đến Insert một ảnh trực tuyến:</p> <ol> <li>Đặt ** điểm chèn ** vào nơi bạn muốn hình ảnh xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the insertion point at the beginning of a paragraph\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-06_15-10-17.png\" title=\"the insertion point at the beginning of a paragraph\" /> 2. Chọn tab ** Insert <strong>, sau đó nhấp vào lệnh ** Trực tuyến Pictures </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Online Pictures command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-06_15-11-38.png\" title=\"clicking the Online Pictures command\" /> 3. Hộp thoại Insert Pictures sẽ xuất hiện. 4. Chọn ** Tìm kiếm hình ảnh trên Bing ** hoặc ** OneDrive ** của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng Tìm kiếm hình ảnh Bing.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using Bing image search to find an image\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/pictures_search.jpg\" title=\"using Bing image search to find an image\" /> 5. Nhấn phím ** Enter <strong>. Kết quả tìm kiếm của bạn sẽ xuất hiện trong hộp. 6. Chọn hình ảnh mong muốn, sau đó nhấp vào ** Insert </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting an image to insert\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/pictures_insert.jpg\" title=\"selecting an image to insert\" /> 7. Hình ảnh sẽ xuất hiện trong tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the document with a new image\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2016-01-06_15-29-52.png\" title=\"the document with a new image\" /></p> <p>Khi thêm hình ảnh, video hoặc nhạc vào dự án của riêng bạn, điều quan trọng là phải đảm bảo bạn có quyền hợp pháp để sử dụng chúng. Hầu hết những thứ bạn mua hoặc tải xuống trực tuyến đều ** được bảo vệ bởi bản quyền **, nghĩa là bạn có thể không được phép sử dụng chúng. Để biết thêm thông tin, Review <a href=\"../../../useinformationchính xác/copyright-and-fair-use/1/index.html\">Bài học về Bản quyền và Sử dụng hợp lý</a>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_picturestextwrapping_practice.docx\">tài liệu thực hành</a> của chúng tôi và cuộn đến ** trang 3 **.</li> <li>Thay đổi ** Text Wrapping ** của hình ảnh con chó thành ** Hình vuông **.</li> <li>Kéo hình ảnh sang bên phải của đoạn văn dưới cùng.</li> <li>Đặt điểm chèn bên cạnh tiêu đề ** Lời nhắc của cộng đồng **.</li> <li>Sử dụng lệnh ** Trực tuyến Pictures ** và nhập từ ** Recycle ** vào tìm kiếm.</li> <li>Insert một ** biểu tượng tái chế **.</li> <li>Nếu cần, hãy sử dụng ** bộ điều khiển định cỡ góc ** để thay đổi kích thước biểu tượng tái chế sao cho mọi thứ đều vừa với trang 3.</li> <li>Thay đổi Text Wrapping thành ** Hình vuông ** và kéo biểu tượng sang bên phải của dấu đầu dòng đầu tiên.</li> <li>Khi bạn hoàn tất, trang 3 sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Text Wrapping Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_pictureswrapping2_img.png\" /></p> <p>/en/word/formatting-Pictures/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/sqkEDw99szg"
            },
            {
                id: "wa_19",
                sessionId: 66,
                title: "Bài 19: định dạng-Pictures",
                description: "Nội dung chi tiết cho bài Bài 19: định dạng-Pictures.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_formatpictures_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Có nhiều cách để ** định dạng ** Pictures trong Word. Ví dụ: bạn có thể thay đổi ** kích thước hoặc hình dạng ** của hình ảnh để phù hợp hơn với tài liệu của mình. Bạn cũng có thể cải thiện ** giao diện ** của nó bằng cách sử dụng các công cụ điều chỉnh hình ảnh của Word.</p> <p>Xem video bên dưới để tìm hiểu thêm về định dạng Pictures.</p> <h4>Để cắt một hình ảnh:</h4> <p>Khi bạn cắt ảnh, một phần của ảnh sẽ bị ** xóa **. Việc cắt xén có thể hữu ích nếu bạn đang làm việc với một hình ảnh quá lớn và bạn chỉ muốn tập trung vào ** một phần ** của hình ảnh đó.</p> <ol> <li>Chọn hình ảnh bạn muốn cắt. Tab ** Định dạng ** sẽ xuất hiện.</li> <li>Từ tab Định dạng, nhấp vào lệnh ** Cắt **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"crop command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_crop_command2.png\" /> 3. ** C <strong><em>* tay cầm ropping ** sẽ xuất hiện ở các cạnh và góc của hình ảnh. Nhấp và kéo ** bất kỳ </em></strong>* tay cầm ** nào để cắt hình ảnh. Vì bộ điều khiển cắt xén nằm gần bộ điều khiển thay đổi kích thước nên hãy cẩn thận để không kéo nhầm bộ điều khiển thay đổi kích thước.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the cropping handles\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_crop_handles2.png\" /> 4. Để xác nhận, nhấp lại vào lệnh ** Cắt **. Hình ảnh sẽ được cắt.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"finished cropped image\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_crop_result.png\" /></p> <p>Các tay cầm ở góc rất hữu ích để cắt xén hình ảnh ** theo chiều ngang ** và ** theo chiều dọc ** cùng một lúc.</p> <h4>Để cắt hình ảnh thành hình dạng:</h4> <ol> <li>Chọn hình ảnh bạn muốn cắt, sau đó nhấp vào tab ** Định dạng **.</li> <li>Nhấp vào mũi tên thả xuống ** Cắt <strong>. Di chuột qua ** Cắt thành hình </strong>, sau đó chọn ** hình ** mong muốn từ trình đơn thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_shape_command.png\" /> 3. Hình ảnh sẽ được cắt theo hình dạng đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"image cropped to teardrop shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_shape_result.png\" /></p> <h4>Để thêm đường viền vào ảnh:</h4> <ol> <li>Chọn ảnh bạn muốn thêm đường viền, sau đó nhấp vào tab ** Định dạng **.</li> <li>Nhấp vào lệnh ** Picture Border **. Một menu thả xuống sẽ xuất hiện.</li> <li>Từ đây, bạn có thể chọn ** màu **, ** trọng lượng ** (độ dày) và liệu đường có ** nét đứt ** hay không.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"applying a border\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_border_command.png\" /> 4. Đường viền sẽ xuất hiện xung quanh hình ảnh.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thực hiện điều chỉnh hình ảnh",
                        content: "<p>Với ** công cụ điều chỉnh hình ảnh ** của Word, bạn có thể dễ dàng thay đổi các thuộc tính như màu sắc, độ tương phản, độ bão hòa và tông màu. Word cũng cung cấp ** hình ảnh Styles ** tích hợp sẵn, có thể được sử dụng để thêm khung, đổ bóng và các hiệu ứng xác định trước khác.</p> <p>Khi bạn đã sẵn sàng điều chỉnh một hình ảnh, chỉ cần chọn nó. Sau đó, hãy sử dụng Options bên dưới, có thể tìm thấy trên tab ** Định dạng **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adjustment options\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_adjust_all.png\" /></p> <h4>Sửa chữa</h4> <p>Từ đây, bạn có thể ** làm sắc nét hoặc làm mềm ** hình ảnh để điều chỉnh mức độ rõ nét hoặc mờ của hình ảnh. Bạn cũng có thể điều chỉnh ** độ sáng và ** ** độ tương phản **, những điều này ảnh hưởng đến độ sáng và cường độ chung của hình ảnh.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"corrections menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_adjust_corrections.png\" /></p> <h4>Màu sắc</h4> <p>Sử dụng lệnh này, bạn có thể điều chỉnh ** độ bão hòa ** (mức độ rực rỡ của màu sắc), ** tông màu ** (nhiệt độ màu của hình ảnh, từ mát đến ấm) và ** tô màu ** (sắc độ tổng thể của hình ảnh).</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"color menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_adjust_color.png\" /></p> <h4>Hiệu ứng nghệ thuật</h4> <p>Tại đây, bạn có thể áp dụng ** hiệu ứng đặc biệt ** cho hình ảnh của mình, chẳng hạn như màu phấn, màu nước hoặc các cạnh phát sáng. Vì kết quả rất đậm nên bạn có thể muốn sử dụng những hiệu ứng này một cách tiết kiệm (đặc biệt là trong các tài liệu chuyên nghiệp).</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"artistic effects menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_adjust_artistic.png\" /></p> <h4>Hình ảnh Styles Group</h4> <p>Group này chứa các ** Styles ** được xác định trước khác nhau giúp việc định dạng hình ảnh trở nên dễ dàng hơn. Ảnh Styles được thiết kế để ** đóng khung ** hình ảnh của bạn mà không thay đổi các cài đặt hoặc hiệu ứng cơ bản.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"picture styles menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_adjust_styles.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Đang nén Pictures",
                        content: "<p>Nếu bạn dự định gửi tài liệu có chứa Pictures qua email thì bạn cần theo dõi kích thước ** File của nó **. Hình ảnh lớn, độ phân giải cao có thể khiến tài liệu của bạn trở nên rất lớn, điều này có thể gây khó khăn cho việc đính kèm vào email. Ngoài ra, ** các vùng bị cắt ** của Pictures được lưu trong tài liệu theo mặc định, có thể thêm vào kích thước File.</p> <p>Rất may, bạn có thể giảm kích thước File tài liệu của mình bằng cách ** nén ** Pictures. Điều này sẽ làm giảm ** độ phân giải ** và ** xóa các vùng đã cắt **.</p> <p>Việc nén ảnh có thể ảnh hưởng đáng kể đến chất lượng của ảnh (ví dụ: ảnh có thể bị mờ hoặc bị vỡ pixel). Vì lý do này, chúng tôi khuyên bạn nên ** lưu thêm một bản sao tài liệu ** trước khi nén Pictures. Ngoài ra, hãy chuẩn bị sử dụng ** Lệnh hoàn tác ** nếu bạn không hài lòng với kết quả.</p> <h4>Để nén ảnh:</h4> <ol> <li>Chọn ảnh bạn muốn nén, sau đó điều hướng đến tab ** Định dạng **.</li> <li>Nhấp vào lệnh ** Nén Pictures **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"compress pictures command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_compress_command.png\" /> 3. Một hộp thoại sẽ xuất hiện. Chọn hộp bên cạnh ** Xóa các vùng đã cắt của Pictures <strong>. Bạn cũng có thể chọn áp dụng cài đặt cho ** chỉ ảnh này ** hay cho tất cả Pictures trong tài liệu. 4. Chọn một ** Đầu ra mục tiêu </strong>. Nếu bạn gửi tài liệu của mình qua email, bạn có thể muốn chọn ** Email <strong>, tạo ra kích thước File nhỏ nhất. 5. Nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"compress pictures dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/formatpics_compress_dialog.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_formatpictures_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 2 ** và chọn hình ảnh những chiếc thuyền buồm.</li> <li>Trong tab ** Định dạng <strong>, thay đổi kiểu thành ** Khung đơn giản, Trắng </strong>.</li> <li>Với ảnh vẫn được chọn, hãy sử dụng ** Cắt theo hình ** và cắt thành hình ** Sóng kép ** trong danh mục ** Sao và Biểu ngữ <strong>. ** Gợi ý </strong>: Tên hình dạng sẽ xuất hiện khi bạn di chuột qua chúng.</li> <li>Chọn hình ảnh của ** neo **.</li> <li>Trong tab ** Định dạng <strong>, hãy sử dụng menu thả xuống ** Màu ** để tô màu lại mỏ neo thành ** Vàng, Màu nhấn 2 nhạt </strong>.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Format Pictures Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_formatpictures_img.png\" /></p> <p>/en/word/Shapes/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/eC4bRXx9k6g"
            },
            {
                id: "wa_20",
                sessionId: 66,
                title: "Bài 20: Shapes",
                description: "Nội dung chi tiết cho bài Bài 20: Shapes.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_shapes_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Bạn có thể thêm ** nhiều loại Shapes ** vào tài liệu của mình, bao gồm mũi tên, chú thích, hình vuông, ngôi sao và sơ đồ Shapes. Bạn muốn đặt tên và địa chỉ của mình ngoài phần còn lại trong sơ yếu lý lịch của bạn? Sử dụng một dòng. Bạn cần tạo sơ đồ hiển thị dòng thời gian hoặc quy trình? Sử dụng sơ đồ Shapes. Mặc dù bạn có thể không cần Shapes trong mọi tài liệu bạn tạo nhưng chúng có thể thêm ** sự hấp dẫn trực quan và sự rõ ràng **.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng Shapes trong Word.</p> <h4>Đối với Insert một hình dạng:</h4> <ol> <li>Chọn tab ** Insert <strong>, sau đó nhấp vào lệnh ** Shapes </strong>. Menu thả xuống Shapes sẽ xuất hiện.</li> <li>Chọn ** hình dạng ** mong muốn.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_insert_menu2.png\" /> 3. Nhấp và kéo vào vị trí mong muốn để thêm hình dạng vào tài liệu của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Inserting a new shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_insert_in_document3.png\" /></p> <p>Nếu muốn, bạn có thể nhập văn bản vào một hình dạng. Khi hình dạng xuất hiện trong tài liệu của bạn, bạn có thể bắt đầu nhập. Sau đó, bạn có thể sử dụng ** định dạng Options ** trên tab ** Home ** để thay đổi phông chữ, cỡ chữ hoặc màu sắc của văn bản.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering text in a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_insert_text.jpg\" /></p> <h4>Để thay đổi thứ tự của Shapes:</h4> <p>Nếu một hình chồng lên một hình khác, bạn có thể cần thay đổi ** thứ tự ** để hình dạng chính xác xuất hiện ở phía trước. Bạn có thể đưa một hình dạng lên ** phía trước ** hoặc gửi nó ra ** phía sau **. Nếu có nhiều hình ảnh, bạn có thể sử dụng ** Đưa lên trước ** hoặc ** Gửi ra sau ** để điều chỉnh thứ tự. Bạn cũng có thể di chuyển hình dạng ** ở phía trước ** hoặc ** phía sau ** văn bản.</p> <ol> <li>Nhấp chuột phải vào ** hình ** bạn muốn di chuyển. Trong ví dụ của chúng tôi, chúng tôi muốn trái tim xuất hiện phía sau Ribbon, vì vậy chúng tôi sẽ nhấp chuột phải vào trái tim.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Right-clicking the shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_order_select.jpg\" /> 2. Trong menu xuất hiện, hãy di chuột qua ** Đưa ra phía trước ** hoặc ** Gửi ra phía sau <strong>. Một số thứ tự Options sẽ xuất hiện. Chọn tùy chọn đặt hàng mong muốn. Trong ví dụ này, chúng tôi sẽ chọn ** Gửi lại </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting an ordering option\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_order_menu.jpg\" /> 3. Thứ tự của Shapes sẽ thay đổi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The reordered shapes\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_order_result.jpg\" /></p> <p>Trong một số trường hợp, tùy chọn sắp xếp bạn chọn sẽ không ảnh hưởng đến thứ tự của Shapes. Nếu điều này xảy ra, hãy thử chọn lại tùy chọn tương tự hoặc thử một tùy chọn khác.</p> <p>Nếu bạn có nhiều Shapes xếp chồng lên nhau thì có thể khó chọn một hình dạng riêng lẻ. ** Selection Pane ** cho phép bạn chọn một hình dạng và kéo nó đến vị trí New. Để truy cập Selection Pane, hãy nhấp vào ** Selection Pane ** trên tab ** Định dạng **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the order of a shape in the Selection Pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_order_selection_pane.jpg\" /></p> <h4>Để thay đổi kích thước một hình dạng:</h4> <ol> <li>Chọn hình dạng bạn muốn thay đổi kích thước. ** Bộ điều khiển định cỡ ** sẽ xuất hiện ở các góc và cạnh của hình.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_resize_select.jpg\" /> 2. Nhấp và kéo ** bộ điều khiển định cỡ ** cho đến khi hình dạng có kích thước mong muốn. Bạn có thể sử dụng bộ điều khiển định cỡ ở góc để thay đổi ** chiều cao ** và ** chiều rộng ** của hình dạng cùng một lúc.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Resizing the shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_resize_handle.jpg\" /> 3. Để Rotate hình dạng, hãy nhấp và kéo núm điều khiển xoay.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Rotating the shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_resize_rotate.jpg\" /></p> <p>Một số Shapes còn có một hoặc nhiều ** tay cầm màu vàng ** có thể dùng để sửa đổi hình dạng. Ví dụ: với banner Shapes bạn có thể điều chỉnh vị trí của các nếp gấp.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Modifying the shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_resize_yellow.jpg\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Đang sửa đổi Shapes",
                        content: "<p>Word cho phép bạn sửa đổi Shapes theo nhiều cách khác nhau để bạn có thể điều chỉnh chúng cho phù hợp với dự án của mình. Bạn có thể ** thay đổi ** hình dạng thành ** hình dạng khác **, ** định dạng kiểu và màu của hình dạng ** và thêm nhiều ** hiệu ứng ** khác nhau.</p> <h4>Để thay đổi kiểu dáng hình dạng:</h4> <p>Việc chọn ** kiểu hình dạng ** cho phép bạn áp dụng các màu sắc và hiệu ứng cài sẵn để nhanh chóng thay đổi hình thức của hình dạng.</p> <ol> <li>Chọn hình dạng bạn muốn thay đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_style_select.jpg\" /> 2. Trên tab ** Định dạng **, hãy nhấp vào mũi tên thả xuống ** Thêm ** trong ** Hình dạng Styles ** Group.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the shape style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_style_command.png\" /> 3. Menu thả xuống Styles sẽ xuất hiện. Chọn ** kiểu ** bạn muốn sử dụng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_style_menu.png\" /> 4. Hình dạng sẽ xuất hiện theo kiểu đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The shape is formatted in the new style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_style_result.jpg\" /></p> <h4>Để thay đổi màu tô của hình dạng:</h4> <ol> <li>Chọn hình dạng bạn muốn thay đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_fill_select.jpg\" /> 2. Trên tab ** Định dạng <strong>, nhấp vào mũi tên thả xuống ** Shape Fill </strong>. Chọn ** màu ** bạn muốn sử dụng. Để View màu bổ sung Options, hãy chọn ** Màu tô khác **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the shape fill color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_fill_menu.png\" /> 3. Hình dạng sẽ xuất hiện với màu tô đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The shape is formatted with the new fill color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_fill_result.jpg\" /></p> <p>Nếu bạn muốn sử dụng kiểu tô màu khác, hãy chọn ** Gradient ** hoặc ** Hoạ tiết ** từ trình đơn thả xuống. Bạn cũng có thể chọn ** Không điền ** để làm cho nó trong suốt.</p> <h4>Để thay đổi đường viền hình dạng:</h4> <ol> <li>Chọn hình dạng bạn muốn thay đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_outline_select.jpg\" /> 2. Trên tab ** Định dạng <strong>, nhấp vào mũi tên thả xuống ** Hình dạng phác thảo </strong>. Trình đơn ** Phác thảo hình dạng ** sẽ xuất hiện. 3. Chọn ** màu ** bạn muốn sử dụng. Nếu bạn muốn làm cho đường viền trong suốt, hãy chọn ** Không có đường viền **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the shape outline color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_outline_menu.png\" /> 4. Hình dạng sẽ xuất hiện với màu đường viền đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The shape is formatted with the new outline\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_outline_result.jpg\" /></p> <p>Từ trình đơn thả xuống, bạn có thể thay đổi đường viền ** màu **, ** độ dày ** (độ dày) và liệu đó có phải là đường ** nét đứt ** hay không.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A thicker line\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_outline_lines.png\" /></p> <h4>Để thêm hiệu ứng hình dạng:</h4> <ol> <li>Chọn hình dạng bạn muốn thay đổi.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_effects_select.jpg\" /> 2. Trên tab ** Định dạng <strong>, hãy nhấp vào mũi tên thả xuống ** Hiệu ứng hình dạng </strong>. Trong menu xuất hiện, hãy di chuột qua kiểu hiệu ứng bạn muốn thêm, sau đó chọn hiệu ứng cài sẵn mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a bevel style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_effects_menu.png\" /> 3. Hình dạng sẽ xuất hiện với hiệu ứng đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The shape with the selected effect.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_effects_result.jpg\" /></p> <p>Để điều chỉnh thêm hiệu ứng hình dạng của bạn, hãy chọn ** Options ** ở cuối mỗi menu. Bảng Format Shape sẽ xuất hiện cho phép bạn tùy chỉnh các hiệu ứng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Format Shape pane.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_effects_format.jpg\" /></p> <h4>Để thay đổi sang hình dạng khác:</h4> <ol> <li>Chọn hình dạng bạn muốn thay đổi. Tab ** Định dạng ** sẽ xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_edit_select.jpg\" /> 2. Trên tab ** Định dạng <strong>, nhấp vào lệnh ** Chỉnh sửa hình dạng </strong>. Trong menu xuất hiện, hãy di chuột qua ** Thay đổi hình dạng **, sau đó chọn ** hình dạng ** mong muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_edit_menu.png\" /> 3. Hình dạng New sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/shapes_edit_result.jpg\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_shapes_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Ở bên phải trang, Insert một ** hình đám mây ** từ ** Cơ bản Shapes ** Group. ** Gợi ý:** Tên hình dạng xuất hiện khi bạn di chuột qua chúng.</li> <li>Thay đổi ** đường viền hình dạng ** thành màu xám.</li> <li>Thay đổi ** màu tô hình ** thành màu trắng.</li> <li>Trong trình đơn thả xuống ** Shape Effects <strong>, thêm ** Circle Bevel </strong>.</li> <li>Trên đám mây, Insert một ** Hình mặt trời ** từ ** Cơ bản Shapes ** Group.</li> <li>Thay đổi ** kiểu hình dạng ** thành kiểu ** Vàng ** mà bạn chọn. ** Gợi ý **: Tên kiểu xuất hiện khi bạn di chuột qua chúng. Đảm bảo tên kiểu có từ ** Vàng ** trong đó.</li> <li>Gửi hình mặt trời ** ngược lại ** để nó ở phía sau hình đám mây.</li> <li>Nếu cần, hãy di chuyển hình dạng đám mây để mặt trời ló ra từ phía sau nó.</li> <li> <p>Khi bạn hoàn tất, hình ảnh của bạn sẽ trông giống như thế này:</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Shapes Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_shapes_img_edited2.png\" /></p> </li> </ol> <p>/en/word/text-boxes/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/uJLhMtlypbQ"
            },
            {
                id: "wa_21",
                sessionId: 66,
                title: "Bài 21: hộp văn bản",
                description: "Nội dung chi tiết cho bài Bài 21: hộp văn bản.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_textboxes_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Hộp văn bản có thể hữu ích trong việc thu hút sự chú ý đến văn bản cụ thể. Chúng cũng có thể hữu ích khi bạn cần di chuyển văn bản trong tài liệu của mình. Word cho phép bạn ** định dạng ** hộp văn bản và văn bản bên trong chúng bằng nhiều Styles và hiệu ứng.</p> <p>Xem video bên dưới để tìm hiểu thêm về hộp văn bản trong Word.</p> <h4>Tới Insert và Text Box:</h4> <ol> <li>Chọn tab ** Insert **, sau đó nhấp vào lệnh ** Text Box ** trong ** Văn bản ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Text Box command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_insert_command.png\" /> 2. Một menu thả xuống sẽ xuất hiện. Chọn ** Draw Text Box **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Draw Text Box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_insert_menu.png\" /> 3. Nhấp và kéo bất cứ nơi nào trên tài liệu để tạo Text Box.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Drawing a text box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_insert_drag.png\" /> 4. Điểm chèn sẽ xuất hiện bên trong Text Box. Bây giờ bạn có thể nhập để tạo văn bản bên trong Text Box.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Creating text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_insert_draw.png\" /> 5. Nếu muốn, bạn có thể chọn văn bản rồi thay đổi ** phông chữ <strong>, ** màu ** và ** kích thước ** bằng cách sử dụng các lệnh trên tab ** Định dạng ** và ** Home </strong>. Để tìm hiểu thêm về cách sử dụng các lệnh định dạng này, hãy xem bài học Review <a href=\"../../formatting-text/1/index.html\">Định dạng văn bản</a> của chúng tôi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formatted text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_insert_format.png\" /> 6. Nhấp vào bất kỳ đâu bên ngoài Text Box để quay lại tài liệu của bạn.</p> <p>Bạn cũng có thể chọn một trong các hộp văn bản ** tích hợp ** có màu sắc, phông chữ, vị trí và kích thước được xác định trước. Nếu bạn chọn tùy chọn này, Text Box sẽ tự động xuất hiện nên bạn sẽ không cần phải Draw nó.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A built-in text box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_insert_built_in.png\" /></p> <h4>Để di chuyển Text Box:</h4> <ol> <li>Nhấp vào ** Text Box ** bạn muốn di chuyển.</li> <li>Di chuột qua một trong các cạnh của Text Box. Chuột sẽ thay đổi thành ** chữ thập có mũi tên **.</li> <li>Nhấp và kéo Text Box đến ** vị trí ** mong muốn.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Moving a text box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_move2.png\" /></p> <h4>Để thay đổi kích thước Text Box:</h4> <ol> <li>Nhấp vào ** Text Box ** bạn muốn thay đổi kích thước.</li> <li>Nhấp và kéo bất kỳ ** bộ điều khiển định cỡ ** nào ở các góc hoặc cạnh của Text Box cho đến khi đạt được kích thước mong muốn.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Resizing a text box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_resize.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Sửa đổi hộp văn bản",
                        content: "<p>Word cung cấp một số Options để thay đổi cách các hộp văn bản xuất hiện trong tài liệu của bạn. Bạn có thể thay đổi ** hình dạng **, ** kiểu ** và ** màu ** của hộp văn bản hoặc thêm các hiệu ứng khác nhau.</p> <h4>Để thay đổi kiểu dáng hình dạng:</h4> <p>Việc chọn ** kiểu hình dạng ** cho phép bạn áp dụng các màu và hiệu ứng đặt trước để nhanh chóng thay đổi giao diện của Text Box.</p> <ol> <li>Chọn Text Box bạn muốn thay đổi.</li> <li>Trên tab ** Định dạng **, hãy nhấp vào mũi tên thả xuống ** Thêm ** trong ** Hình dạng Styles ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the More drop-down arrow\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_shape_style_command.png\" /> 3. Menu thả xuống Styles sẽ xuất hiện. Chọn ** kiểu ** bạn muốn sử dụng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Changing the text box style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_shape_style_menu.png\" /> 4. Text Box sẽ xuất hiện theo kiểu đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_shape_style_result.png\" /></p> <p>Nếu muốn có nhiều quyền kiểm soát hơn đối với định dạng Text Box, bạn có thể sử dụng bất kỳ định dạng hình dạng nào Options như ** Shape Fill ** và ** Shape Outline **. Để tìm hiểu thêm, Review bài học <a href=\"../../Shapes/1/index.html\">Shapes</a> của chúng tôi.</p> <h4>Để thay đổi hình dạng Text Box:</h4> <p>Thay đổi hình dạng của Text Box có thể là một tùy chọn hữu ích để tạo giao diện thú vị cho tài liệu của bạn.</p> <ol> <li>Chọn Text Box bạn muốn thay đổi. Tab ** Định dạng ** sẽ xuất hiện.</li> <li>Từ tab ** Định dạng <strong>, hãy nhấp vào lệnh ** Chỉnh sửa hình dạng </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Edit Shape command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_edit_shape_command.png\" /> 3. Di chuột qua ** Thay đổi hình dạng **, sau đó chọn ** hình dạng ** mong muốn từ trình đơn xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_edit_shape_menu.png\" /> 4. Text Box sẽ xuất hiện dưới dạng hình dạng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The text box formatted as a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/textboxes_edit_shape_result.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_textboxes_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Insert a ** Đơn giản Text Box **.</li> <li>Trong Text Box, hãy nhập ** Nhận thêm 25% giảm giá khi bạn đề cập đến quảng cáo này!**</li> <li>Thay đổi phông chữ thành ** Gadugi, 20 pt, Center Align **.</li> <li>Thay đổi ** hình dạng ** của Text Box thành ** Sóng kép ** từ ** Sao và Biểu ngữ ** Group.</li> <li>Thay đổi kiểu ** Text Box ** bằng cách chọn bất kỳ kiểu nào trong hàng ** Hiệu ứng mãnh liệt **.</li> <li>Kéo Text Box vào khoảng trống bên dưới ** Mua 1, Tặng 1*<strong> và ** Trang phục công sở </strong>.</li> <li>Khi bạn hoàn tất, tài liệu của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Textbox Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_textbox_img.png\" /></p> <p>/en/word/aligning-ordering-and-grouping-objects/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/slateuunUhY"
            },
            {
                id: "wa_22",
                sessionId: 66,
                title: "Bài 22: Sắp xếp-sắp xếp-nhóm-đối tượng",
                description: "Nội dung chi tiết cho bài Bài 22: Sắp xếp-sắp xếp-nhóm-đối tượng.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_alignordergroup_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Đôi khi tài liệu của bạn có nhiều ** đối tượng <strong>, chẳng hạn như Pictures, Shapes và hộp văn bản. Bạn có thể sắp xếp các đối tượng theo bất kỳ cách nào bạn muốn bằng cách ** căn chỉnh </strong>, ** nhóm **, ** sắp xếp ** và ** xoay ** chúng theo nhiều cách khác nhau.</p> <p>Hãy xem video dưới đây để tìm hiểu thêm về cách sắp xếp các đối tượng trong Word.</p> <h4>Đến Align hai hoặc nhiều đối tượng:</h4> <ol> <li>Giữ phím ** Shift ** (hoặc ** Ctrl **) và nhấp vào đối tượng bạn muốn Align. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn bốn Shapes ở bên phải.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting multiple objects\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_select.png\" /> 2. Từ tab ** Định dạng <strong>, hãy nhấp vào lệnh ** Align </strong>, sau đó chọn một trong các ** tùy chọn căn chỉnh <strong><em>* s </em>*. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Align Right </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the align right command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_command.png\" /> 3. Các đối tượng sẽ được căn chỉnh dựa trên tùy chọn đã chọn. Trong ví dụ của chúng tôi, Shapes hiện đã được căn chỉnh với nhau.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the aligned objects\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_right_done.png\" /></p> <p>Lưu ý rằng tùy chọn ** Align Đối tượng được chọn ** được chọn theo mặc định, cho phép bạn Align đối tượng mà không cần di chuyển chúng sang phần khác của trang. Tuy nhiên, nếu bạn muốn di chuyển các đối tượng lên đầu hoặc cuối trang, hãy chọn ** Align sang Trang ** hoặc ** Align sang lề ** trước khi chọn tùy chọn căn chỉnh.</p> <h4>Để phân bố đều các đối tượng:</h4> <p>Nếu bạn đã sắp xếp các đối tượng của mình thành một hàng hoặc cột, bạn có thể muốn chúng ở ** khoảng cách bằng nhau ** với nhau để trông gọn gàng hơn. Bạn có thể thực hiện việc này bằng cách ** phân bổ các đối tượng ** theo chiều ngang hoặc chiều dọc.</p> <ol> <li>Giữ phím ** Shift ** (hoặc ** Ctrl **) và nhấp vào đối tượng bạn muốn phân phối.</li> <li>Trên tab ** Định dạng <strong>, hãy nhấp vào lệnh ** Align </strong>, sau đó chọn ** Phân phối theo chiều ngang ** hoặc ** Phân phối theo chiều dọc **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Distibute Vertically command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_vertically_command.png\" /> 3. Các vật thể sẽ cách đều nhau.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the objects after applying vertical distribution\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_vertically_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Nhóm các đối tượng",
                        content: "<p>Đôi khi, bạn có thể muốn ** Group ** nhiều đối tượng thành ** một đối tượng ** để chúng ở cùng nhau. Điều này thường dễ dàng hơn việc chọn chúng riêng lẻ và nó cũng cho phép bạn thay đổi kích thước và di chuyển tất cả các đối tượng cùng một lúc.</p> <h4>Đối với đối tượng Group:</h4> <ol> <li>Giữ phím ** Shift ** (hoặc ** Ctrl **) và nhấp vào đối tượng bạn muốn Group.</li> <li>Nhấp vào lệnh ** Group ** trên tab ** Định dạng <strong>, sau đó chọn ** Group </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Group command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_group_command.png\" /> 3. Các đối tượng được chọn bây giờ sẽ được nhóm lại. Sẽ có một ** hộp duy nhất có tay cầm định cỡ ** xung quanh toàn bộ Group để bạn có thể di chuyển hoặc thay đổi kích thước tất cả các đối tượng cùng một lúc.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the grouped objects\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_group_done.png\" /></p> <h4>Để rã nhóm các đối tượng:</h4> <ol> <li>Chọn đối tượng được nhóm. Từ tab ** Định dạng <strong>, hãy nhấp vào lệnh ** Group ** và chọn ** Ungroup </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the ungroup command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_ungroup_command.png\" /> 2. Các đối tượng sẽ được tách nhóm.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the ungrouped objects\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_ungroup_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Đặt hàng đối tượng",
                        content: "<p>Ngoài việc căn chỉnh các đối tượng, Word còn cung cấp cho bạn khả năng ** sắp xếp các đối tượng ** theo ** thứ tự cụ thể <strong>. Thứ tự rất quan trọng khi hai hoặc nhiều đối tượng ** chồng chéo ** vì nó xác định đối tượng nào ở ** phía trước ** hoặc ** phía sau </strong>.</p> <h4>Hiểu mức độ</h4> <p>Các đối tượng được đặt ở các ** cấp độ ** khác nhau theo ** thứ tự ** mà chúng được chèn vào tài liệu. Trong ví dụ bên dưới, nếu chúng ta di chuyển hình ảnh sóng đến đầu tài liệu, nó sẽ che mất một số hộp văn bản. Điều này là do hình ảnh hiện ở mức cao nhất—hoặc cao nhất. Tuy nhiên, chúng ta có thể ** thay đổi cấp độ của nó ** để đặt nó phía sau các đối tượng khác.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"an object covering up other objects on the page\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_order_intro.png\" /></p> <h4>Để thay đổi cấp độ của một đối tượng:</h4> <ol> <li>Chọn đối tượng bạn muốn di chuyển. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn hình ảnh của sóng.</li> <li>Từ tab ** Định dạng <strong>, hãy nhấp vào lệnh ** Đưa về phía trước ** hoặc ** Gửi lùi ** để thay đổi thứ tự của đối tượng theo ** một cấp </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Gửi ngược **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting Send Backward\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_order_sendbackward.png\" /> 3. Các đối tượng sẽ được sắp xếp lại. Trong ví dụ của chúng tôi, hình ảnh hiện nằm phía sau văn bản ở bên trái nhưng vẫn che Shapes ở bên phải.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the re-ordered object\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_order_back_one_level.png\" /> 4. Nếu bạn muốn di chuyển một đối tượng ra phía sau hoặc phía trước một số đối tượng, bạn nên sử dụng ** Đưa về phía trước ** hoặc ** Gửi lùi ** thay vì nhấp vào lệnh sắp xếp khác nhiều lần sẽ nhanh hơn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting Send to Back\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_order_sendtoback.png\" /> 5. Trong ví dụ của chúng tôi, hình ảnh đã được di chuyển ra phía sau mọi thứ khác trên trang, do đó tất cả văn bản khác và Shapes đều hiển thị.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the object moved to the back\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_order_sendbackall.png\" /></p> <p>Nếu bạn có nhiều đối tượng được đặt chồng lên nhau, có thể khó chọn được một đối tượng riêng lẻ. ** Selection Pane ** cho phép bạn dễ dàng kéo một đối tượng đến một cấp độ khác. Để View Selection Pane, hãy nhấp vào ** Selection Pane ** trên tab ** Định dạng **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"opening the Selection pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_order_selectionpane_splat.png\" /></p> <h4>Để Rotate hoặc lật một đối tượng:</h4> <p>Nếu bạn cần xoay một đối tượng để nó hướng về một hướng khác, bạn có thể ** Rotate đối tượng đó ** sang trái hoặc phải hoặc bạn có thể ** lật đối tượng ** theo chiều ngang hoặc chiều dọc.</p> <ol> <li>Với đối tượng mong muốn đã được chọn, hãy nhấp vào lệnh ** Rotate ** trên tab ** Định dạng <strong>, sau đó chọn ** tùy chọn xoay ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Lật ngang </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"flipping an object horiztonally\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_flip_command.png\" /> 2. Đối tượng sẽ được xoay. Trong ví dụ của chúng tôi, bây giờ chúng tôi có thể thấy các bong bóng ở bên trái trước đây bị ẩn sau các hộp văn bản.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the flipped object\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/align_flip_done.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_alignordergroup_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Cuộn đến ** trang 2 ** và chọn hình ảnh sóng ở đầu trang.</li> <li>Sử dụng lệnh ** Rotate ** để lật sóng theo chiều dọc.</li> <li>Sử dụng lệnh ** Gửi về phía sau ** để di chuyển các sóng phía sau Martinique Text Box.</li> <li>Di chuyển ** Martinique ** Text Box sao cho nó ở gần ** đáy ** của hình ảnh sóng.</li> <li>Đảm bảo hình ảnh sóng và Martinique Text Box không còn được chọn. Giữ phím ** Shift <strong>, sau đó chọn các hộp văn bản có chứa ** Dọn dẹp </strong>, ** Bảo trì <strong>, ** Sửa chữa ** và ** Khôi phục </strong>.</li> <li>Nhấp vào lệnh ** Align ** và đảm bảo tùy chọn ** Align Selected Objects ** được chọn. Chọn ** Align Phải ** và ** Phân phối theo chiều dọc **.</li> <li>Với các hộp văn bản vẫn được chọn, ** Group ** chúng.</li> <li>Khi bạn hoàn tất, trang của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Align Order Group Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_align_order_group_img.png\" /></li> </ol> <p>/en/word/tables/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/FjkkN9ysjps"
            },
            {
                id: "wa_24",
                sessionId: 66,
                title: "Bài 24: Charts",
                description: "Nội dung chi tiết cho bài Bài 24: Charts.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_charts_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>** biểu đồ ** là công cụ bạn có thể sử dụng để ** truyền đạt thông tin bằng đồ họa **. Việc đưa biểu đồ vào tài liệu của bạn có thể Help bạn minh họa dữ liệu số như so sánh và xu hướng để người đọc dễ hiểu hơn.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách tạo Charts.</p> <h4>Các loại Charts</h4> <p>Có một số ** loại ** Charts để bạn lựa chọn. Để sử dụng Charts một cách hiệu quả, bạn cần hiểu điều gì khiến mỗi cái trở nên độc đáo.</p> <p>Nhấp vào mũi tên trong bản trình chiếu bên dưới để tìm hiểu thêm về các loại Charts trong Word.</p> <ul> <li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_1.png\" /></li> </ul> <p>Word có rất nhiều loại biểu đồ, mỗi loại đều có ưu điểm riêng. Bấm vào mũi tên để xem một số loại Charts khác nhau có sẵn trong Word. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_2.png\" /></p> <p>Cột Charts sử dụng thanh dọc để thể hiện dữ liệu. Chúng có thể làm việc với nhiều loại dữ liệu khác nhau nhưng chúng được sử dụng thường xuyên nhất để so sánh thông tin. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_3.png\" /></p> <p>Dòng Charts là dòng lý tưởng để hiển thị xu hướng. Các điểm dữ liệu được kết nối bằng các đường, giúp dễ dàng xem liệu các giá trị đang tăng hay giảm theo thời gian. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_4.png\" /></p> <p>Pie Charts giúp bạn dễ dàng so sánh tỷ lệ. Mỗi giá trị được hiển thị dưới dạng một phần của chiếc bánh, vì vậy thật dễ dàng để biết giá trị nào chiếm phần trăm của tổng thể. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_5.png\" /></p> <p>Thanh Charts hoạt động giống như cột Charts nhưng sử dụng thanh ngang thay vì thanh dọc. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_6.png\" /></p> <p>Vùng Charts tương tự như dòng Charts, ngoại trừ các vùng dưới dòng được điền vào. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_7b.png\" /></p> <p>Bề mặt Charts cho phép bạn hiển thị dữ liệu trên toàn cảnh 3D. Chúng hoạt động tốt nhất với các tập dữ liệu lớn, cho phép bạn xem nhiều thông tin cùng một lúc. * <img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/chart_type_8.png\" /></p> <h4>Xác định các phần của biểu đồ</h4> <p>Ngoài các loại biểu đồ, bạn sẽ cần hiểu cách ** đọc biểu đồ **. Charts chứa một số phần tử—hoặc các bộ phận—có thể Help bạn diễn giải dữ liệu.</p> <p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu về các phần khác nhau của biểu đồ.</p> <p>donedonedonedonedonedoneedit điểm nóngchỉnh sửa điểm nóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Biểu đồ doanh số bán sách\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/2015-11-05_14-02-50.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Chuỗi dữ liệu",
                        content: "<p>** Chuỗi dữ liệu ** bao gồm các điểm dữ liệu có liên quan trong biểu đồ. Trong ví dụ này, như chúng ta có thể thấy trong chú giải, các cột màu vàng biểu thị doanh thu thuần trong tháng Hai.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Trục ngang",
                        content: "<p>** Trục ngang ** (còn được gọi là ** trục x **) là phần nằm ngang của biểu đồ. Ở đây, trục ngang xác định ** danh mục ** trong biểu đồ. Trong ví dụ này, mỗi thể loại được đặt trong ** Group ** riêng.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Huyền thoại",
                        content: "<p>** Chú giải ** xác định chuỗi dữ liệu mà mỗi ** màu ** trên biểu đồ đại diện. Trong ví dụ này, chú giải xác định các tháng khác nhau trong biểu đồ.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Tiêu đề biểu đồ",
                        content: "<p>** tiêu đề ** phải mô tả rõ ràng nội dung biểu đồ đang minh họa.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Trục dọc",
                        content: "<p>** trục tung ** (còn được gọi là ** trục y **) là phần thẳng đứng của biểu đồ. Ở đây, trục tung đo ** giá trị ** của các cột. Trong ví dụ này, giá trị đo được là tổng doanh thu của từng thể loại.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Đang chèn Charts",
                        content: "<p>Word sử dụng ** cửa sổ bảng tính ** riêng để nhập và chỉnh sửa dữ liệu biểu đồ, giống như bảng tính trong Excel. Quá trình nhập dữ liệu khá đơn giản nhưng nếu bạn không quen với Excel, bạn có thể muốn tham gia bài học Review <a href=\"../../../excel/cell-basics/1/index.html\">Cell Basics</a> của chúng tôi.</p> <h4>Đến Insert biểu đồ:</h4> <ol> <li>Đặt ** điểm chèn ** vào nơi bạn muốn biểu đồ xuất hiện.</li> <li>Điều hướng đến tab ** Insert **, sau đó nhấp vào lệnh ** Biểu đồ ** trong ** Minh họa ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chart command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_command.png\" /> 3. Một hộp thoại sẽ xuất hiện. Để View Options của bạn, hãy chọn ** loại biểu đồ ** từ khung bên trái, sau đó duyệt qua ** Charts ** ở bên phải. 4. Chọn ** biểu đồ ** mong muốn, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a chart style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_dialog.png\" /> 5. Một cửa sổ biểu đồ và bảng tính sẽ xuất hiện. Văn bản trong bảng tính chỉ là ** giữ chỗ ** mà bạn cần thay thế bằng dữ liệu nguồn của riêng mình. Dữ liệu nguồn là những gì Word sẽ sử dụng để tạo biểu đồ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chart and spreadsheet window\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_appear.png\" /> 6. Nhập ** dữ liệu nguồn ** của bạn vào bảng tính.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"entering chart data\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_data.png\" /> 7. Chỉ dữ liệu trong ** hộp màu xanh ** mới xuất hiện trong biểu đồ. Nếu cần, hãy nhấp và kéo ** góc dưới bên phải ** của hộp màu xanh lam để tăng hoặc giảm phạm vi dữ liệu theo cách thủ công.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"expanding the data range\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_box.png\" /> 8. Khi bạn hoàn tất, hãy nhấp vào ** X ** để Close cửa sổ bảng tính.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"closing the spreadsheet window\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_close.png\" /> 9. Biểu đồ sẽ được hoàn thành.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"complete chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_result.png\" /></p> <p>Để chỉnh sửa lại biểu đồ của bạn, chỉ cần chọn biểu đồ đó, sau đó nhấp vào lệnh ** Chỉnh sửa dữ liệu ** trên tab ** Design **. Cửa sổ bảng tính sẽ xuất hiện lại.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"editing source data\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_insert_edit.png\" /></p> <h4>Tạo Charts với dữ liệu Excel hiện có</h4> <p>Nếu bạn đã có dữ liệu trong ** hiện có ** ** Excel File ** mà bạn muốn sử dụng trong Word, bạn có thể ** sao chép và dán ** dữ liệu đó thay vì nhập bằng tay. Chỉ cần Open bảng tính trong Excel, sao chép dữ liệu rồi dán làm dữ liệu nguồn trong Word.</p> <p>Bạn cũng có thể ** nhúng ** biểu đồ Excel hiện có vào tài liệu Word của mình. Điều này hữu ích nếu bạn biết mình sẽ cập nhật Excel File sau; biểu đồ trong Word sẽ tự động cập nhật bất cứ khi nào có thay đổi.</p> <p>Đọc hướng dẫn của chúng tôi về <a href=\"../../../word2013/embedding-an-excel-chart/1/index.html\">Nhúng biểu đồ Excel</a> để biết thêm thông tin.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Sửa đổi Charts bằng công cụ biểu đồ",
                        content: "<p>Có nhiều cách để tùy chỉnh và sắp xếp biểu đồ của bạn trong Word. Ví dụ: bạn có thể nhanh chóng thay đổi ** loại biểu đồ **, ** sắp xếp lại ** dữ liệu và thậm chí thay đổi ** giao diện ** của biểu đồ.</p> <h4>Để chuyển đổi dữ liệu hàng và cột:</h4> <p>Đôi khi bạn có thể muốn thay đổi cách ** nhóm dữ liệu biểu đồ ** của mình. Ví dụ: trong biểu đồ bên dưới, dữ liệu được nhóm ** theo thể loại <strong>, với các cột cho ** mỗi tháng </strong>. Thay vào đó, nếu chúng tôi chuyển đổi hàng và cột thì dữ liệu sẽ được nhóm ** theo tháng **. Trong cả hai trường hợp, biểu đồ đều chứa cùng một dữ liệu—nó chỉ được trình bày theo một cách khác.</p> <ol> <li>Chọn ** biểu đồ ** bạn muốn sửa đổi. Tab ** Design ** sẽ xuất hiện ở bên phải của Ribbon.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_switch_select.png\" /> 2. Từ tab ** Design **, hãy nhấp vào lệnh ** Chỉnh sửa dữ liệu ** trong ** Dữ liệu ** Group.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"editing data\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_switch_edit.png\" /> 3. Nhấp lại vào ** biểu đồ ** để chọn lại, sau đó nhấp vào lệnh ** Chuyển hàng/cột **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"switching row/column\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_switch_command.png\" /> 4. Các hàng và cột sẽ được ** chuyển đổi **. Trong ví dụ của chúng tôi, dữ liệu hiện được nhóm theo tháng, với các cột cho từng thể loại.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"complete chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_switch_result.png\" /></p> <h4>Để thay đổi loại biểu đồ:</h4> <p>Nếu bạn nhận thấy ** loại biểu đồ ** đã chọn không phù hợp với dữ liệu của mình, bạn có thể thay đổi loại biểu đồ đó thành một loại biểu đồ khác. Trong ví dụ của chúng tôi, chúng tôi sẽ thay đổi loại biểu đồ từ biểu đồ ** cột ** thành biểu đồ ** đường **.</p> <ol> <li>Chọn ** biểu đồ ** bạn muốn thay đổi. Tab ** Design ** sẽ xuất hiện.</li> <li>Từ tab ** Design <strong>, hãy nhấp vào lệnh ** Thay đổi loại biểu đồ </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"changing chart type\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_type_command.png\" /> 3. Một hộp thoại sẽ xuất hiện. Chọn ** biểu đồ ** mong muốn, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_type_dialog.png\" /> 4. Loại biểu đồ New sẽ được áp dụng. Trong ví dụ của chúng tôi, biểu đồ đường giúp bạn dễ dàng xem xu hướng theo thời gian hơn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"line chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_type_result.png\" /></p> <h4>Để thay đổi biểu đồ Layout:</h4> <p>Để thay đổi cách sắp xếp biểu đồ của bạn, hãy thử chọn một ** Layout ** khác. Layout có thể ảnh hưởng đến một số thành phần, bao gồm tiêu đề biểu đồ và dữ liệu Labels.</p> <ol> <li>Chọn ** biểu đồ ** bạn muốn sửa đổi. Tab ** Design ** sẽ xuất hiện.</li> <li>Từ tab ** Design <strong>, hãy nhấp vào lệnh ** Quick Layout </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"changing the layout\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_layout_command.png\" /> 3. Chọn ** Layout ** mong muốn từ menu thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a layout\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_layout_menu.png\" /> 4. Biểu đồ sẽ cập nhật để phản ánh New Layout.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"complete chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_layout_result.png\" /></p> <p>Nếu không thấy biểu đồ Layout có chính xác những gì bạn cần, bạn có thể nhấp vào lệnh ** Thêm thành phần biểu đồ ** trên tab ** Design ** để thêm ** tiêu đề trục **, ** đường lưới ** và các thành phần biểu đồ khác.</p> <p>Để điền vào phần giữ chỗ (chẳng hạn như ** tiêu đề biểu đồ ** hoặc ** tiêu đề trục **), hãy nhấp vào phần tử đó và nhập văn bản của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"editing a chart element\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_layout_element.png\" /></p> <h4>Để thay đổi kiểu biểu đồ:</h4> <p>** biểu đồ Styles ** của Word cung cấp cho bạn một cách dễ dàng để thay đổi Design của biểu đồ, bao gồm màu sắc, kiểu dáng và một số thành phần Layout nhất định.</p> <ol> <li>Chọn ** biểu đồ ** bạn muốn sửa đổi. Tab ** Design ** sẽ xuất hiện.</li> <li>Từ tab ** Design **, hãy nhấp vào mũi tên thả xuống ** Thêm ** trong ** Biểu đồ Styles ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"more menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_style_command.png\" /> 3. Menu thả xuống Styles sẽ xuất hiện. Chọn ** kiểu ** bạn muốn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a chart style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_style_menu.png\" /> 4. Kiểu biểu đồ sẽ được áp dụng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"complete chart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_style_result.png\" /></p> <p>Để tùy chỉnh nhanh hơn nữa, hãy sử dụng các phím tắt định dạng ở bên phải biểu đồ của bạn. Những điều này cho phép bạn điều chỉnh các phần tử ** kiểu biểu đồ <strong>, ** biểu đồ ** </strong>** và thậm chí thêm ** bộ lọc ** vào dữ liệu của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chart formatting shortcuts\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/charts_style_shortcuts.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_charts_practice.docx\">tài liệu thực hành</a> của chúng tôi. Bạn cũng cần tải xuống <a href=\"../../../../media.gcflearnfree.org/content/5c09515577c050035472857e_12_06_2018/word_charts_practice_data.xlsx của chúng tôi\">sổ bài tập thực hành</a>.</li> <li>Insert biểu đồ ** Đường ** vào tài liệu Word thực hành của chúng tôi.</li> <li>Open ** sổ làm việc thực hành ** của chúng tôi trong Excel. Sao chép dữ liệu và dán vào bảng tính của biểu đồ.</li> <li>Thay đổi ** tiêu đề biểu đồ ** thành ** Doanh số hàng tháng **.</li> <li>Thay đổi ** loại biểu đồ ** thành ** Cột xếp chồng **.</li> <li>Sử dụng menu thả xuống ** Quick Layout ** để thay đổi thành ** Layout 3 **.</li> <li>Sử dụng trình đơn thả xuống ** Thêm thành phần biểu đồ ** để thêm ** Tiêu đề trục dọc chính **.</li> <li>Bấm đúp vào tiêu đề trục, sau đó đổi tên thành ** Lợi nhuận bán hàng **.</li> <li>** Chuyển đổi ** dữ liệu ** Hàng/Cột **.</li> <li> <p>Khi bạn hoàn tất, biểu đồ của bạn sẽ trông giống như thế này:</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Charts Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_charts3_img.png\" /></p> </li> </ol> <p>/en/word/kiểm tra-chính tả-và-ngữ pháp/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/kiy81vkZQww"
            },
            {
                id: "wa_26",
                sessionId: 66,
                title: "Bài 26: track-changes-and-Comments",
                description: "Nội dung chi tiết cho bài Bài 26: track-changes-and-Comments.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_trackchanges_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Giả sử ai đó yêu cầu bạn hiệu đính hoặc cộng tác trên một tài liệu. Nếu có bản in, bạn có thể dùng bút đỏ để gạch bỏ các câu, đánh dấu lỗi chính tả và thêm Comments vào lề. Word cho phép bạn thực hiện tất cả những việc này một cách điện tử bằng cách sử dụng các tính năng ** Track Changes ** và ** Comments **.</p> <p>Xem video bên dưới để tìm hiểu thêm về Track Changes và cách thêm Comments.</p> <h4>Hiểu Track Changes</h4> <p>Khi bạn bật ** Track Changes <strong>, mọi thay đổi bạn thực hiện đối với tài liệu sẽ xuất hiện dưới dạng ** đánh dấu ** có màu. Nếu bạn xóa văn bản, nó sẽ không biến mất; thay vào đó, văn bản sẽ bị ** gạch chéo ** ** ra </strong>. Nếu bạn thêm văn bản, nó sẽ được ** gạch chân **. Điều này cho phép bạn xem các chỉnh sửa trước khi thực hiện thay đổi vĩnh viễn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"tracked changes in a document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_changes_intro.png\" /></p> <p>Nếu có nhiều người đánh giá thì mỗi người sẽ được chỉ định một màu đánh dấu khác nhau.</p> <h4>Để bật Track Changes:</h4> <ol> <li>Từ tab ** Review <strong>, hãy nhấp vào lệnh ** Track Changes </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"turning on Track Changes\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_changes_command.png\" /> 2. Track Changes sẽ được bật. Từ thời điểm này trở đi, mọi thay đổi bạn thực hiện đối với tài liệu sẽ xuất hiện dưới dạng đánh dấu màu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"tracked changes in a document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_changes_on.png\" /></p> <p>Những thay đổi được theo dõi của bạn có thể trông khác với những thay đổi được thấy ở trên, tùy thuộc vào cài đặt đánh dấu trên máy tính của bạn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Xem xét các thay đổi",
                        content: "<p>Những thay đổi được theo dõi thực chất chỉ là những thay đổi được đề xuất. Để trở thành vĩnh viễn, chúng phải được ** chấp nhận **. Mặt khác, tác giả Original có thể không đồng ý với một số thay đổi được theo dõi và chọn ** từ chối ** chúng.</p> <h4>Để chấp nhận hoặc từ chối các thay đổi:</h4> <ol> <li>Chọn thay đổi bạn muốn chấp nhận hoặc từ chối.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a change to accept or reject\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_accept_select.png\" /> 2. Từ tab ** Review <strong>, hãy nhấp vào lệnh ** Chấp nhận ** hoặc ** Từ chối </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"accepting a change\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_accept_command.png\" /> 3. Đánh dấu sẽ biến mất và Word sẽ tự động chuyển sang thay đổi tiếp theo. Bạn có thể tiếp tục chấp nhận hoặc từ chối từng thay đổi cho đến khi bạn xem xét tất cả chúng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"moving on to the next tracked change\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_accept_next.png\" /> 4. Khi bạn hoàn tất, hãy nhấp vào lệnh ** Track Changes ** để ** tắt ** ** tắt ** Track Changes.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"turning off track changes\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_accept_turnoff.png\" /></p> <p>Để chấp nhận tất cả thay đổi cùng một lúc, hãy nhấp vào mũi tên thả xuống ** Chấp nhận <strong>, sau đó chọn ** Chấp nhận ** ** Tất cả </strong>. Nếu bạn không muốn theo dõi các thay đổi của mình nữa, bạn có thể chọn ** Chấp nhận tất cả và ngừng theo dõi **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"accepting all changes in a document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_accept_all_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Track Changes đang xem Options",
                        content: "<p>Nếu bạn có nhiều thay đổi được theo dõi, chúng có thể gây mất tập trung nếu bạn đang cố đọc qua tài liệu. May mắn thay, Word cung cấp một số cách để tùy chỉnh cách hiển thị các thay đổi được theo dõi:</p> <ul> <li>** Simple Markup **: Phần này hiển thị phiên bản cuối cùng không có đánh dấu nội tuyến. Điểm đánh dấu màu đỏ sẽ xuất hiện ở lề trái để cho biết nơi thay đổi đã được thực hiện.</li> <li>** All Markup **: Phần này hiển thị phiên bản cuối cùng có đánh dấu nội tuyến.</li> <li>** No Markup **:Phần này hiển thị phiên bản cuối cùng và ẩn tất cả các đánh dấu.</li> <li>** Original **: Phần này hiển thị phiên bản Original và ẩn tất cả các đánh dấu.</li> </ul> <h4>Để ẩn các thay đổi được theo dõi:</h4> <ol> <li>Từ tab ** Review **, hãy nhấp vào lệnh ** Hiển thị cho Review ** ở bên phải lệnh Track Changes.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Display for Review command\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_view_command.png\" /> 2. Chọn tùy chọn mong muốn từ menu thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** No Markup ** để xem trước phiên bản cuối cùng của tài liệu trước khi chấp nhận các thay đổi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hiding markup\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_view_nomarkup.png\" /></p> <p>Bạn cũng có thể nhấp vào điểm đánh dấu ở lề trái để chuyển đổi giữa ** Simple Markup ** và ** Tất cả ** ** Đánh dấu **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hiding tracked changes from within the document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_view_splat.png\" /></p> <p>Hãy nhớ rằng việc ẩn Track Changes không giống như ** xem xét các thay đổi **. Bạn vẫn cần phải ** chấp nhận ** hoặc ** từ chối ** các thay đổi trước khi gửi phiên bản cuối cùng của tài liệu của mình.</p> <h4>Để hiển thị các bản sửa đổi trong bong bóng:</h4> <p>Hầu hết các bản sửa đổi đều xuất hiện ** nội tuyến <strong>, nghĩa là bản thân văn bản đã được đánh dấu. Bạn cũng có thể chọn hiển thị các bản sửa đổi trong ** bong bóng </strong>, thao tác này sẽ di chuyển hầu hết các bản sửa đổi sang lề phải. Việc xóa các đánh dấu nội tuyến có thể giúp tài liệu dễ đọc hơn và bóng chú thích cũng cung cấp thông tin chi tiết hơn về một số đánh dấu.</p> <ol> <li>Từ tab ** Review <strong>, hãy nhấp vào ** Hiển thị đánh dấu ** </strong>&gt; Bóng bay ** <strong>&gt; Hiển thị các bản sửa đổi trong bóng bay </strong>.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"turning on balloon revisions\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_balloon_command.png\" /> 2. Hầu hết các bản sửa đổi sẽ xuất hiện ở lề phải, mặc dù mọi văn bản được thêm vào vẫn sẽ xuất hiện trong dòng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the track changes in balloons rather than inline with text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_balloon_done.png\" /></p> <p>Để quay lại đánh dấu ** nội tuyến <strong>, bạn có thể chọn ** Hiển thị tất cả các bản sửa đổi nội tuyến ** hoặc ** Chỉ hiển thị Comments và Định dạng trong bong bóng </strong>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Comments",
                        content: "<p>Đôi khi bạn có thể muốn thêm ** nhận xét ** để cung cấp phản hồi thay vì chỉnh sửa tài liệu. Mặc dù nó thường được sử dụng kết hợp với Track Changes nhưng bạn không nhất thiết phải bật Track Changes để thêm Comments.</p> <h4>Để thêm Comments:</h4> <ol> <li>** Đánh dấu một số văn bản ** hoặc đặt ** điểm chèn ** nơi bạn muốn bình luận xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_comment_select.png\" /> 2. Từ tab ** Review <strong>, hãy nhấp vào lệnh ** New Nhận xét </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding a comment\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_comment_command.png\" /> 3. Nhập nhận xét của bạn. Khi hoàn tất, bạn có thể Close hộp nhận xét bằng cách nhấn phím ** Esc ** hoặc bằng cách nhấp vào bất kỳ đâu bên ngoài hộp nhận xét.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the added comment\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_comment_add.png\" /></p> <h4>Để xóa Comments:</h4> <ol> <li>Chọn bình luận bạn muốn xóa.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a comment\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_comment_delete_select.png\" /> 2. Từ tab ** Review <strong>, hãy nhấp vào lệnh ** Xóa </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"deleting a comment\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_comment_delete_command.png\" /> 3. Bình luận sẽ bị xóa.</p> <p>Để xóa tất cả Comments, hãy nhấp vào mũi tên thả xuống ** Xóa ** và chọn ** Xóa tất cả Comments trong Tài liệu **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"deleting all comments at once\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_comment_delete_all_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: So sánh tài liệu",
                        content: "<p>Nếu bạn chỉnh sửa tài liệu mà không theo dõi các thay đổi, bạn vẫn có thể sử dụng các tính năng đánh giá như ** Chấp nhận ** và ** Từ chối **. Bạn có thể thực hiện việc này bằng cách ** so sánh ** hai phiên bản của tài liệu. Tất cả những gì bạn cần là tài liệu ** Original ** và tài liệu ** đã sửa đổi ** (các tài liệu này cũng phải có tên File khác nhau).</p> <h4>Để so sánh hai tài liệu:</h4> <ol> <li>Từ tab ** Review <strong>, hãy nhấp vào lệnh ** So sánh </strong>, sau đó chọn ** So sánh ** từ menu thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Compare command on the Review tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_compare_command.png\" /> 2. Một hộp thoại sẽ xuất hiện. Chọn tài liệu ** Original ** của bạn bằng cách nhấp vào mũi tên thả xuống và chọn tài liệu từ danh sách. Nếu File không có trong danh sách, hãy nhấp vào nút ** Duyệt ** để định vị nó. 3. Chọn ** Tài liệu đã sửa đổi <strong>, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing files to compare\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_compare_selectfiles.png\" /> 4. Word sẽ so sánh hai tệp để xác định những gì đã được thay đổi và sau đó tạo tài liệu New. Các thay đổi sẽ xuất hiện dưới dạng ** đánh dấu ** có màu, giống như ** Track Changes **. Sau đó, bạn có thể sử dụng các lệnh ** Chấp nhận ** và ** Từ chối ** để hoàn thiện tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"comparing two different documents in the same window\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/track_compare_combined.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_trackchanges_practice.docx\">tài liệu thực hành</a> của chúng tôi.</li> <li>Bật ** Track Changes ** và hiển thị ** All Markup **.</li> <li>Trong ** Theo dõi ** Group, chọn ** Hiển thị các bản sửa đổi trong bong bóng **.</li> <li>Trong đoạn đầu tiên, hãy chỉnh sửa câu thứ hai thành ** Rất vui được gặp bạn và tham quan cơ sở **.</li> <li>Trong đoạn thứ hai, thay đổi từ ** kỹ thuật ** thành ** chiến lược **.</li> <li>Thay đổi ** font ** của chữ cái thành ** Cambria, 12 pt **.</li> <li>Trong đoạn thứ ba, hãy chọn các từ ** Cảm ơn ** và Insert một ** nhận xét ** có nội dung ** Đặt nội dung này cùng dòng với Nội thất chất lượng.**</li> <li>Tại thời điểm này, chữ cái của bạn sẽ trông giống như thế này (<strong> Lưu ý </strong>: Màu đánh dấu có thể thay đổi):</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Track Changes Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_trackchanges_img_edited.png\" /> 9. Nhấp vào mũi tên thả xuống ** Chấp nhận ** và chọn ** Chấp nhận tất cả thay đổi và ngừng theo dõi **.</p> <p>/en/word/kiểm tra-và-bảo vệ-tài liệu/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/m7tmsWN6uH0"
            },
            {
                id: "wa_27",
                sessionId: 66,
                title: "Bài 27: kiểm tra và bảo vệ tài liệu",
                description: "Nội dung chi tiết cho bài Bài 27: kiểm tra và bảo vệ tài liệu.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_inspectprotect_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Trước khi chia sẻ tài liệu, bạn cần đảm bảo rằng tài liệu đó không bao gồm bất kỳ thông tin nào bạn muốn giữ riêng tư. Bạn cũng có thể muốn ngăn cản người khác chỉnh sửa File của mình. May mắn thay, Word bao gồm một số công cụ để Help ** kiểm tra ** và ** bảo vệ ** tài liệu của bạn.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách hoàn thiện tài liệu của bạn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Người kiểm tra tài liệu",
                        content: "<p>Bất cứ khi nào bạn tạo hoặc chỉnh sửa tài liệu, một số ** thông tin cá nhân ** nhất định có thể được tự động thêm vào File, chẳng hạn như thông tin về tác giả của tài liệu. Bạn có thể sử dụng ** Trình kiểm tra tài liệu ** để xóa loại thông tin này trước khi chia sẻ tài liệu với người khác.</p> <p>Vì một số thay đổi có thể là vĩnh viễn nên bạn nên sử dụng ** Save As ** để tạo bản sao lưu tài liệu của mình trước khi sử dụng Trình kiểm tra Tài liệu.</p> <h4>Để sử dụng Trình kiểm tra Tài liệu:</h4> <ol> <li>Nhấp vào tab ** File ** để đi tới ** Backstage view **.</li> <li>Từ ngăn ** Info <strong>, hãy nhấp vào ** Check for Issues </strong>, sau đó chọn ** Kiểm tra ** ** Tài liệu ** từ menu thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Inspect Document command from the Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_command.png\" /> 3. ** Trình kiểm tra tài liệu ** sẽ xuất hiện. Chọn hoặc bỏ chọn các hộp, tùy thuộc vào nội dung bạn muốn Review, sau đó nhấp vào ** Kiểm tra **. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn mọi thứ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inspecting the document with the inspector\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_dialog.png\" /> 4. Kết quả kiểm tra sẽ hiển thị ** dấu chấm than ** cho bất kỳ danh mục nào có khả năng tìm thấy dữ liệu nhạy cảm và cũng sẽ có nút ** Xóa tất cả ** cho từng danh mục này. Nhấp vào ** Xóa tất cả ** để xóa dữ liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"removing information with the document inspector\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_dialog_results.png\" /> 5. Khi bạn hoàn tất, hãy nhấp vào ** Close **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Bảo vệ tài liệu của bạn",
                        content: "<p>Theo mặc định, bất kỳ ai có quyền truy cập vào tài liệu của bạn đều có thể Open, sao chép và chỉnh sửa nội dung của tài liệu đó trừ khi bạn ** bảo vệ ** tài liệu đó. Có một số cách để bảo vệ tài liệu, tùy thuộc vào nhu cầu của bạn.</p> <h4>Để bảo vệ tài liệu của bạn:</h4> <ol> <li>Nhấp vào tab ** File ** để đi tới ** Backstage view **.</li> <li>Từ ngăn ** Info <strong>, hãy nhấp vào lệnh ** Protect Document </strong>.</li> <li>Trong menu thả xuống, hãy chọn tùy chọn phù hợp nhất với nhu cầu của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Đánh dấu ** ** là Cuối cùng **. Đánh dấu tài liệu của bạn là tài liệu cuối cùng là một cách hay để ngăn cản người khác chỉnh sửa File, trong khi Options khác cung cấp cho bạn nhiều quyền kiểm soát hơn nếu bạn cần.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Mark as Final command from Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_final_command.png\" /> 4. Một hộp thoại sẽ xuất hiện nhắc bạn Save. Nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking OK\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_final_dialog1.png\" /> 5. Một hộp thoại khác sẽ xuất hiện. Nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking OK to finalize your choice\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_final_dialog2.png\" /> 6. Tài liệu sẽ được ** đánh dấu là cuối cùng **. Bất cứ khi nào người khác Open File, một thanh sẽ xuất hiện ở trên cùng để ngăn cản họ chỉnh sửa tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the document with a Marked as Final notice at the top\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/inspect_final_done.png\" /></p> <p>Việc đánh dấu tài liệu là cuối cùng sẽ không thực sự ngăn người khác chỉnh sửa tài liệu đó vì họ chỉ có thể chọn ** Vẫn chỉnh sửa <strong>. Nếu bạn muốn ngăn mọi người chỉnh sửa tài liệu, thay vào đó bạn có thể sử dụng tùy chọn ** Hạn chế quyền truy cập </strong>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_inspectprotect_practice.docx\">tài liệu thực hành</a> của chúng tôi. Nếu bạn mở tài liệu thực hành của chúng tôi để theo dõi bài học, hãy nhớ tải xuống bản sao mới bằng cách nhấp lại vào liên kết.</li> <li>Sử dụng ** Trình kiểm tra tài liệu ** để kiểm tra và xóa mọi thông tin ẩn.</li> <li>Bảo vệ tài liệu bằng cách ** đánh dấu nó là bản cuối cùng **.</li> <li>Khi bạn hoàn tất, phần đầu trang của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Inspect Protect Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_inspect_protect_img.png\" /></p> <p>/en/word/SmartArt-graphics/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/SlpIpWe_kNI"
            },
            {
                id: "wa_28",
                sessionId: 66,
                title: "Bài 28: SmartArt-đồ họa",
                description: "Nội dung chi tiết cho bài Bài 28: SmartArt-đồ họa.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>SmartArt cho phép bạn truyền đạt thông tin bằng ** đồ họa ** thay vì chỉ sử dụng văn bản. Có rất nhiều Styles để bạn lựa chọn, bạn có thể sử dụng chúng để minh họa cho nhiều loại ý tưởng khác nhau.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách làm việc với SmartArt.</p> <h4>Đến Insert đồ họa SmartArt:</h4> <ol> <li>Đặt điểm chèn vào tài liệu nơi bạn muốn đồ họa SmartArt xuất hiện.</li> <li>Từ tab ** Insert **, hãy chọn lệnh ** SmartArt ** trong ** Minh họa ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the SmartArt command on the Insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_insert_command.png\" /> 3. Một hộp thoại sẽ xuất hiện. Chọn ** danh mục ** ở bên trái, chọn đồ họa SmartArt mong muốn, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a SmartArt graphic\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_insert_hierarchy.png\" /> 4. Đồ họa SmartArt sẽ xuất hiện trong tài liệu của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the inserted smartart\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_done.png\" /></p> <h4>Để thêm văn bản vào đồ họa SmartArt:</h4> <ol> <li>Chọn đồ họa SmartArt. ** khung văn bản ** sẽ xuất hiện ở phía bên trái. Nếu nó không xuất hiện, bạn có thể nhấp vào mũi tên nhỏ ở cạnh trái của đồ họa. Nếu nó không xuất hiện, hãy nhấp vào mũi tên nhỏ ở bên trái SmartArt để bật và tắt nó.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"opening the text pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_addtext_panearrow.png\" /> 2. Nhập văn bản bên cạnh mỗi dấu đầu dòng trong ngăn văn bản. Văn bản sẽ xuất hiện với hình dạng tương ứng. Nó sẽ được thay đổi kích thước tự động để vừa với bên trong hình dạng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding text to the SmartArt graphic\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_text_added.png\" /></p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding text directly in the shapes of the SmartArt instead of the text pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_text_splat.png\" /></p> <h4>Để sắp xếp lại, thêm và xóa Shapes:</h4> <p>Thật dễ dàng để thêm New Shapes, thay đổi thứ tự của chúng và thậm chí xóa Shapes khỏi đồ họa SmartArt của bạn. Bạn có thể thực hiện tất cả những điều này trong ngăn văn bản và việc này rất giống với việc tạo đường viền với ** danh sách đa cấp **. Để biết thêm thông tin về danh sách đa cấp, bạn có thể muốn xem bài học Review <a href=\"../../lists/1/index.html\">Lists</a> của chúng tôi.</p> <ul> <li>Để ** hạ cấp một hình <strong>, hãy chọn dấu đầu dòng mong muốn, sau đó nhấn phím ** Tab </strong>. Viên đạn sẽ di chuyển sang bên phải và hình dạng sẽ di chuyển xuống một cấp độ.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"demoting a shape in the text pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_organize_tab.png\" /> * Để ** thêm một hình dạng <strong>, hãy chọn dấu đầu dòng mong muốn, sau đó nhấn phím ** Backspace ** (hoặc ** Shift+Tab </strong>). Viên đạn sẽ di chuyển sang trái và hình dạng sẽ di chuyển lên một cấp.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"promoting a shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_organize_backspace.png\" /> * Để ** thêm hình dạng New <strong>, hãy đặt điểm chèn sau dấu đầu dòng mong muốn, sau đó nhấn ** Enter </strong>. Dấu đầu dòng New sẽ xuất hiện trong ngăn văn bản và hình dạng New sẽ xuất hiện trong đồ họa.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding a shape to the graphic\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_organize_add.png\" /> * Để ** xóa ** ** hình dạng **, hãy tiếp tục nhấn ** Backspace ** cho đến khi dấu đầu dòng bị xóa. Hình dạng sau đó sẽ được gỡ bỏ. Trong ví dụ của chúng tôi, chúng tôi sẽ xóa tất cả Shapes không có văn bản.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"deleting unused shapes from the SmartArt graphic\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_organize_delete.png\" /></p> <h4>Sắp xếp SmartArt từ tab Design</h4> <p>Nếu không muốn sử dụng ngăn văn bản để sắp xếp SmartArt của mình, bạn có thể sử dụng các lệnh trên tab ** Design ** trong ** Tạo đồ họa ** Group. Chỉ cần chọn hình dạng bạn muốn sửa đổi, sau đó chọn lệnh mong muốn.</p> <ul> <li>** Thăng hạng ** và ** Giảm hạng **: Sử dụng các lệnh này để di chuyển hình lên hoặc xuống giữa các cấp.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Promote and Demote commands\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_designtab_promote.png\" /> * ** Di chuyển lên ** và ** Di chuyển xuống **: Sử dụng các lệnh này để thay đổi thứ tự của Shapes ở cùng cấp độ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the move up and move down commands\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_designtab_up_down.png\" /> * ** Thêm hình dạng **: Sử dụng lệnh này để thêm hình dạng New vào đồ họa của bạn. Bạn cũng có thể nhấp vào mũi tên thả xuống để có vị trí chính xác hơn Options.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the add shape command drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_designtab_add.png\" /></p> <p>Trong ví dụ của chúng tôi, chúng tôi đã sắp xếp một đồ họa có cấu trúc phân cấp Layout. Không phải tất cả đồ họa SmartArt đều sử dụng loại Layout này, vì vậy hãy nhớ rằng các lệnh này có thể hoạt động khác nhau (hoặc hoàn toàn không hoạt động) tùy thuộc vào Layout của đồ họa của bạn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Đang tùy chỉnh SmartArt",
                        content: "<p>Sau khi chèn SmartArt, có một số điều bạn có thể muốn thay đổi về hình thức của nó. Bất cứ khi nào bạn chọn đồ họa SmartArt, các tab ** Design ** và ** Định dạng ** sẽ xuất hiện ở bên phải của Ribbon. Từ đó, thật dễ dàng để chỉnh sửa ** kiểu ** và ** Layout ** của đồ họa SmartArt.</p> <ul> <li>Có một số ** SmartArt Styles **, cho phép bạn nhanh chóng sửa đổi giao diện của SmartArt của mình. Để thay đổi kiểu, hãy chọn ** kiểu mong muốn ** từ ** SmartArt Styles ** Group.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a SmartArt style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_style_done.png\" /> * Bạn có nhiều ** cách phối màu ** khác nhau để sử dụng với SmartArt. Để thay đổi màu, hãy nhấp vào lệnh ** Thay đổi màu ** và chọn tùy chọn mong muốn từ trình đơn thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"changing the smartart colors\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_colors.png\" /></p> <ul> <li>Bạn cũng có thể tùy chỉnh từng hình dạng một cách độc lập. Chỉ cần chọn bất kỳ hình dạng nào trong đồ họa, sau đó chọn tùy chọn mong muốn từ tab ** Định dạng **.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"customizing an individual shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_shape_effects.png\" /></p> <h4>Để thay đổi SmartArt Layout:</h4> <p>Nếu không thích cách sắp xếp thông tin của mình trong đồ họa SmartArt, bạn luôn có thể thay đổi ** Layout ** của đồ họa đó để phù hợp hơn với nội dung của bạn.</p> <ol> <li>Từ tab ** Design **, hãy nhấp vào mũi tên thả xuống ** Thêm ** trong Bố cục Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the More drop-down arrow\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_layout_more.png\" /> 2. Chọn Layout mong muốn hoặc nhấp vào ** Bố cục khác ** để xem thêm Options.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a different SmartArt layout\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_layout_choose.png\" /> 3. Layout đã chọn sẽ xuất hiện.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the new SmartArt layout\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smartart_layout_done.png\" /></p> <p>Nếu New Layout quá khác với Original thì một số văn bản của bạn có thể không xuất hiện. Trước khi quyết định New Layout, hãy kiểm tra cẩn thận để đảm bảo không có thông tin quan trọng nào bị mất.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Thử thách!",
                        content: "<ol> <li>Open và ** Blank document **.</li> <li>Insert đồ họa ** Chu kỳ cơ bản SmartArt ** từ danh mục ** Chu kỳ **.</li> <li>Insert văn bản sau theo thứ tự theo chiều kim đồng hồ: ** Ngưng tụ <strong>, ** Bốc hơi </strong>, ** Xâm nhập <strong>, ** Lượng mưa </strong>, ** Bộ sưu tập **.</li> <li>** Xóa ** hình có chứa từ ** Xâm nhập **.</li> <li>Chọn hình dạng có chứa ** Bốc hơi ** và nhấp vào lệnh ** Di chuyển xuống ** ** hai lần ** để di chuyển hình dạng giữa ** Bộ sưu tập ** và ** Ngưng tụ **.</li> <li>Thay đổi ** SmartArt Layout ** thành ** Chu kỳ khối **.</li> <li>Thay đổi ** màu ** của SmartArt thành phạm vi bạn chọn.</li> <li>Thay đổi Kiểu SmartArt thành ** Hiệu ứng mãnh liệt **.</li> <li>Khi bạn hoàn tất, SmartArt của bạn sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"SmartArt Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_smartart_img.png\" /></p> <p>/en/word/áp dụng-và-sửa đổi-Styles/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/Hna1uJN1-qY"
            },
            {
                id: "wa_29",
                sessionId: 66,
                title: "Bài 29: áp dụng và sửa đổi-Styles",
                description: "Nội dung chi tiết cho bài Bài 29: áp dụng và sửa đổi-Styles.",
                tasks: [
                    {
                        name: "tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_styles_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>** kiểu ** là sự kết hợp được xác định trước giữa kiểu phông chữ, màu sắc và kích thước phông chữ có thể áp dụng cho bất kỳ văn bản nào trong tài liệu của bạn. Styles có thể Help tài liệu của bạn có giao diện chuyên nghiệp hơn. Bạn cũng có thể sử dụng Styles để thay đổi nhanh chóng một số nội dung trong tài liệu của mình cùng một lúc.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng Styles trong Word.</p> <h4>Để áp dụng một phong cách:</h4> <ol> <li>Chọn văn bản bạn muốn định dạng hoặc đặt con trỏ ở đầu dòng.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"placing the cursor at the beginning of a line of text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_apply_select.png\" /> 2. Trong ** Styles ** Group trên tab ** Home <strong>, hãy nhấp vào mũi tên thả xuống ** Thêm </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the More button in the Styles group\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_apply_more.png\" /> 3. Chọn ** kiểu mong muốn ** từ trình đơn thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"applying the Title style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_apply_choose.png\" /> 4. Văn bản sẽ xuất hiện theo kiểu đã chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the Title style applied to a line of text\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_apply_done.png\" /></p> <h4>Để áp dụng một bộ kiểu:</h4> <p>** Bộ kiểu ** bao gồm sự kết hợp giữa tiêu đề, tiêu đề và đoạn Styles. Bộ kiểu cho phép bạn ** định dạng tất cả các thành phần ** trong tài liệu của mình cùng một lúc thay vì sửa đổi từng thành phần riêng lẻ.</p> <ol> <li>Từ tab ** Design **, hãy nhấp vào mũi tên thả xuống ** Thêm ** trong ** Định dạng tài liệu ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the More button in the Document Formatting group\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_set_more.png\" /> 2. Chọn ** bộ kiểu mong muốn ** từ trình đơn thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a different style set\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_set_choose.png\" /> 3. Bộ kiểu đã chọn sẽ được áp dụng cho toàn bộ tài liệu của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the new style set applied to the entire document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_set_apply.png\" /></p> <h4>Để sửa đổi một phong cách:</h4> <ol> <li>Trong ** Styles ** Group trên tab ** Home **, nhấp chuột phải vào ** kiểu ** bạn muốn thay đổi và chọn ** Sửa đổi ** từ menu thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting Modify to adjust the Title style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_modify_select.png\" /> 2. Một hộp thoại sẽ xuất hiện. Thực hiện ** định dạng mong muốn ** ** thay đổi **, chẳng hạn như kiểu phông chữ, kích thước và màu sắc. Nếu muốn, bạn cũng có thể thay đổi ** tên ** của kiểu. Nhấp vào ** OK ** để Save những thay đổi của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"modifying the Title style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_modify_dialog.png\" /> 3. Phong cách sẽ được sửa đổi.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the modified title style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_modify_done.png\" /></p> <p>Khi bạn sửa đổi một kiểu, bạn sẽ thay đổi ** mọi phiên bản ** của kiểu đó trong tài liệu. Trong ví dụ bên dưới, chúng tôi đã sửa đổi kiểu ** Bình thường ** để sử dụng cỡ chữ lớn hơn. Vì cả hai đoạn đều sử dụng Normal style nên chúng đã được cập nhật tự động để sử dụng kích thước New.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"modifying the normal style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_modify_splat.png\" /></p> <h4>Để tạo kiểu New:</h4> <ol> <li>Nhấp vào ** mũi tên ** ở góc dưới cùng bên phải của ** Styles ** Group.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the arrow in the bottom-right corner of the Styles group\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_new_start.png\" /> 2. Ngăn tác vụ ** Styles ** sẽ xuất hiện. Chọn nút ** New Kiểu ** ở cuối ngăn tác vụ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the New Style button\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_new_select.png\" /> 3. Một hộp thoại sẽ xuất hiện. Nhập ** tên ** cho kiểu, chọn ** định dạng văn bản mong muốn <strong>, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"creating the new style\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_new_dialog.png\" /> 4. Kiểu New sẽ được áp dụng cho văn bản hiện được chọn. Nó cũng sẽ xuất hiện trong ** Styles ** Group.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the new style applied to the document\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/style_new_done.png\" /></p> <p>Bạn cũng có thể sử dụng Styles để tạo ** Table of Contents ** cho tài liệu của mình. Để tìm hiểu cách thực hiện, Review bài viết của chúng tôi về <a href=\"../../../word-tips/how-to-create-a-table-of-contents-in-word/1/index.html\" title=\"Cách tạo Table of Contents trong Word\">Cách tạo Table of Contents trong Microsoft Word</a>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_styles_practice.docx\">tài liệu thực hành</a> của chúng tôi. Nếu bạn đã tải xuống tài liệu thực hành của chúng tôi, hãy nhớ tải xuống bản sao mới bằng cách nhấp lại vào liên kết.</li> <li>Trên trang 1, chọn dòng văn bản đầu tiên ** Giải cứu động vật Shelbyfield ** và thay đổi kiểu thành ** Tiêu đề **.</li> <li>Chọn dòng thứ hai có nội dung ** Cập nhật tình nguyện tháng 8 ** và thay đổi kiểu thành ** Heading 1 **.</li> <li>Chọn dòng thứ ba có nội dung ** Thông điệp từ giám đốc của bạn ** và thay đổi kiểu thành ** Heading 2 **.</li> <li>Trong tab ** Design <strong>, hãy thay đổi bộ kiểu ** s </strong><strong>** thành ** Thông thường </strong>.</li> <li>** Sửa đổi ** kiểu ** Bình thường ** để phông chữ là ** Cambria ** và cỡ chữ là ** 14 pt **.</li> <li>Khi bạn hoàn tất, trang đầu tiên của tài liệu của bạn sẽ trông như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Applying Styles Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_applyingstyles_img.png\" /> 8. Tùy chọn: Sửa đổi kiểu ** Heading 3 ** theo bất kỳ cách nào bạn muốn. Bạn có thể thay đổi phông chữ, cỡ chữ, màu sắc, v.v. Tiêu đề này xuất hiện xuyên suốt tài liệu, vì vậy hãy thử chọn định dạng bổ sung cho nội dung văn bản.</p> <p>/en/word/mail-merge/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/w2lES-5Ynbk"
            },
            {
                id: "wa_30",
                sessionId: 66,
                title: "Bài 30: trộn thư",
                description: "Nội dung chi tiết cho bài Bài 30: trộn thư.",
                tasks: [
                    {
                        name: "Tài liệu thực hành",
                        file: "Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_mailmerge_practice.docx"
                    }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<p>Mail Merge là một công cụ hữu ích cho phép bạn tạo nhiều chữ cái, Labels, Envelopes, thẻ tên, v.v. bằng cách sử dụng thông tin được lưu trữ trong danh sách, cơ sở dữ liệu hoặc bảng tính. Khi thực hiện ** Mail Merge <strong>, bạn sẽ cần một ** tài liệu Word ** (bạn có thể bắt đầu bằng một tài liệu hiện có hoặc tạo một tài liệu New) và ** danh sách người nhận </strong>, thường là ** sổ làm việc Excel **.</p> <ul> <li><a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_mailmerge_practice.docx\">Tài liệu thực hành</a> (Tài liệu Word)</li> <li><a href=\"../../../../media.gcflearnfree.org/content/5c096a1c77c050035472858a_12_06_2018/word_mailmerge_practice.xlsx\">Danh sách người nhận</a> (Sổ làm việc Excel)</li> </ul> <p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng tính năng Mail Merge.</p> <h4>Để sử dụng Mail Merge:</h4> <ol> <li>Open một tài liệu Word ** hiện có ** hoặc tạo một tài liệu ** New **.</li> <li>Từ tab ** Mailings **, hãy nhấp vào lệnh ** Bắt đầu Mail Merge ** và chọn ** Trình hướng dẫn từng bước Mail Merge ** từ menu thả xuống.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"opening the Mail Merge Wizard\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_wizard.png\" /></p> <p>Ngăn Mail Merge sẽ xuất hiện và hướng dẫn bạn qua ** sáu bước chính ** để hoàn tất việc hợp nhất. Ví dụ sau đây minh hoạ cách tạo một lá thư biểu mẫu và hợp nhất lá thư đó với ** danh sách người nhận **.</p> <h4>Bước 1:</h4> <ul> <li>Từ ngăn tác vụ Mail Merge ở bên phải cửa sổ Word, hãy chọn ** loại ** tài liệu bạn muốn tạo. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Chữ cái **. Sau đó nhấp vào ** Tiếp theo: Bắt đầu tài liệu ** để chuyển sang Bước 2.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"completing step 1 of the mail merge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step1.png\" /></p> <h4>Bước 2:</h4> <ul> <li>Chọn ** Sử dụng tài liệu hiện tại **, sau đó nhấp vào ** Tiếp theo: Select Recipients ** để chuyển sang Bước 3.</li> </ul> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"completing step 2 of the mail merge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step2.png\" /></p> <h4>Bước 3:</h4> <p>Bây giờ bạn sẽ cần một danh sách địa chỉ để Word có thể tự động đặt từng địa chỉ vào tài liệu. Danh sách này có thể nằm trong File hiện có, chẳng hạn như ** sổ làm việc Excel ** hoặc bạn có thể ** nhập danh sách địa chỉ New ** từ trong Trình hướng dẫn Mail Merge.</p> <ol> <li>Chọn ** Sử dụng danh sách hiện có **, sau đó nhấp vào ** Duyệt ** để chọn File.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"browsing for an existing file\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step3_browse.png\" /> 2. Xác định vị trí File của bạn, sau đó nhấp vào ** Open **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"opening the source file for the recipient list\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step3_open.png\" /> 3. Nếu danh sách địa chỉ nằm trong sổ làm việc Excel, hãy chọn ** bảng tính ** có chứa danh sách, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the desired worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step3_sheet.png\" /> 4. Trong hộp thoại ** Mail Merge Người nhận <strong>, bạn có thể ** chọn ** hoặc ** bỏ chọn ** từng hộp để kiểm soát những người nhận nào được đưa vào hợp nhất. Theo mặc định, tất cả người nhận sẽ được chọn. Khi bạn hoàn tất, hãy nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting recipients\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step3_recipients.png\" /> 5. Nhấp vào ** Tiếp theo: Viết thư của bạn ** để chuyển sang Bước 4.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"completing step 3 of the mail merge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step3_done.png\" /></p> <p>Nếu bạn không có danh sách địa chỉ hiện có, bạn có thể nhấp vào nút ** Nhập danh sách New ** và nhấp vào ** Tạo **, sau đó nhập danh sách địa chỉ của bạn theo cách thủ công.</p> <h4>Bước 4:</h4> <p>Bây giờ bạn đã sẵn sàng để viết thư của mình. Khi in ra, về cơ bản mỗi bản sao của bức thư sẽ giống nhau; chỉ ** dữ liệu người nhận ** (chẳng hạn như ** tên ** và ** địa chỉ **) sẽ khác nhau. Bạn sẽ cần thêm ** phần giữ chỗ ** cho dữ liệu người nhận để Mail Merge biết chính xác vị trí cần thêm dữ liệu.</p> <h4>Tới Insert dữ liệu người nhận:</h4> <ol> <li>Đặt điểm chèn vào tài liệu nơi bạn muốn thông tin xuất hiện.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"placing the insertion point\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step4_insertion.png\" /> 2. Chọn một trong ** giữ chỗ ** Options. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Address Block **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding an address block\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step4_address.png\" /> 3. Tùy thuộc vào lựa chọn của bạn, một hộp thoại có thể xuất hiện với nhiều tùy chỉnh khác nhau Options. Chọn Options mong muốn, sau đó nhấp vào ** OK **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"customizing the placeholder\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step4_dialog.png\" /> 4. Một trình giữ chỗ sẽ xuất hiện trong tài liệu của bạn (ví dụ: <strong>`AddressBlock'</strong>).</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the added placeholder\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step4_callout.png\" /> 5. Thêm bất kỳ trình giữ chỗ nào khác mà bạn muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ thêm phần giữ chỗ ** Greeting Line ** ngay phía trên nội dung của bức thư.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inserting a greeting placeholder\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step4_greeting.png\" /> 6. Khi bạn hoàn tất, hãy nhấp vào ** Tiếp theo: Xem trước các chữ cái của bạn ** để chuyển sang Bước 5.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"completing step 4 of the mail merge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step4_done.png\" /></p> <p>Đối với một số chữ cái, bạn chỉ cần thêm ** Address Block ** và ** Greeting Line **. Tuy nhiên, bạn cũng có thể thêm nhiều phần giữ chỗ khác (chẳng hạn như tên hoặc địa chỉ của người nhận) vào phần nội dung của bức thư để cá nhân hóa nó hơn nữa.</p> <h4>Bước 5:</h4> <ol> <li>Xem trước các chữ cái để đảm bảo thông tin từ danh sách người nhận xuất hiện chính xác trong thư. Bạn có thể sử dụng mũi tên cuộn trái và phải để View từng phiên bản của tài liệu.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"previewing the letters for each recipient\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step5_preview_callout.png\" /> 2. Nếu mọi thứ đều chính xác, hãy nhấp vào ** Tiếp theo: Hoàn tất việc hợp nhất ** để chuyển sang Bước 6.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"completing step 5 of the mail merge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step5_done.png\" /></p> <h4>Bước 6:</h4> <ol> <li>Nhấp vào ** Print ** để Print các chữ cái.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Print command in the Mail Merge pane\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step6_print.png\" /> 2. Một hộp thoại sẽ xuất hiện. Quyết định xem bạn muốn Print ** Tất cả ** các chữ cái, tài liệu hiện tại (bản ghi) hay chỉ chọn Group, sau đó nhấp vào ** OK **. Trong ví dụ của chúng tôi, chúng tôi sẽ Print tất cả các chữ cái.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing which letters to print\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step6_print_all.png\" /> 3. Hộp thoại ** Print ** sẽ xuất hiện. Điều chỉnh cài đặt Print nếu cần, sau đó nhấp vào ** OK **. Các chữ cái sẽ được in.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"customizing options in the Print dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/merge_step6_print_dialog.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Thử thách!",
                        content: "<ol> <li>Open <a href=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/practice_files/word_mailmerge_practice.docx\">tài liệu thực hành</a> và [danh sách người nhận thực hành](../../../../media.gcflearnfree.org/content/5c096a1c77c050035472858a_12_06_2018/word_mailmerge_practice.xlsx của chúng tôi.</li> <li>Sử dụng Trình hướng dẫn ** Mail Merge ** để hợp nhất thư với danh sách người nhận.</li> <li>Insert và ** Address Block ** ở đầu tài liệu. Chọn định dạng thứ hai: ** Joshua Randall Jr.**</li> <li>Phía trên nội dung của bức thư, Insert a ** Greeting Line <strong>. Định dạng Greeting Line thành ** Mr. Randall,</strong></li> <li>Kiểm tra các chữ cái của bạn để đảm bảo chúng được định dạng chính xác. Bức thư thứ ba của bạn sẽ trông giống như thế này:</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Mail Merge Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/word2016_mailmerge_img.png\" /> 6. ** Hoàn thành ** việc hợp nhất.</p> <p>/en/word/what-is-office-365/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/do9ujnZLIC4"
            },
            {
                id: "wa_31",
                sessionId: 66,
                title: "Bài 31: office-365 là gì",
                description: "Nội dung chi tiết cho bài Bài 31: office-365 là gì.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Office 365 là gì?",
                        content: "<p>Office 365 là ** phiên bản dựa trên đăng ký ** của Microsoft Office Suite và bạn có một số Options khi mua Account. Một là ** Office 365 Personal <strong>, cung cấp cho một người dùng quyền truy cập đầy đủ vào mọi ứng dụng Office. Một cái khác là ** Office 365 Home </strong>, được thiết kế cho các gia đình có nhiều người sẽ sử dụng Office.</p> <p>Xem video bên dưới để biết thêm về những gì Office 365 cung cấp.</p> <h4>Tính năng độc quyền</h4> <p>Có rất nhiều điểm tương đồng giữa các chương trình Office 365 và Microsoft Office Suite truyền thống, vì vậy trải nghiệm tổng thể sẽ có cảm giác quen thuộc nếu bạn đã sử dụng Office trước đây.</p> <p>Tuy nhiên, Office 365 cung cấp một số lợi ích không có trong Microsoft Office Suite. Ví dụ: đăng ký Office 365 cấp cho bạn quyền truy cập vào ** nhiều tính năng hơn **, bao gồm Trình dịch, Trợ lý Sơ yếu lý lịch và Tra cứu thông minh. Bạn cũng có thể cộng tác với những người khác trong Excel thông qua tính năng đồng tác giả, tính năng này cho phép người khác chỉnh sửa sổ làm việc của bạn trong thời gian thực.</p> <p>** Ứng dụng Office dành cho thiết bị di động ** cũng có nhiều tính năng hơn khi bạn đăng ký. Ví dụ: bạn có thể thực hiện những việc như ngắt trang Insert, sử dụng nhiều màu hơn hoặc tạo PivotTable bằng ứng dụng Excel dành cho thiết bị di động. Tuy nhiên, phiên bản miễn phí của ứng dụng dành cho thiết bị di động chỉ cho phép bạn thực hiện các tác vụ cơ bản, như tạo File và nhập văn bản.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A confirmation screen for an Office 365 subscription.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/what_is_office365_all_set_24.png\" title=\"A confirmation screen for an Office 365 subscription.\" /></p> <p>Office 365 cũng bao gồm các lợi ích khác, như có thêm dung lượng lưu trữ File trong OneDrive và hỗ trợ kỹ thuật.</p> <h4>SharePoint và cập nhật phần mềm</h4> <p>Một lợi thế khác biệt khi sử dụng Office 365, đặc biệt đối với doanh nghiệp, là quyền truy cập vào ** SharePoint Online **. Đây là dịch vụ có trong một số phiên bản của Office 365 cho phép bạn Share và cộng tác với những người khác, cho dù họ là đồng nghiệp hay khách hàng. Vì tài liệu nằm trên đám mây nên có thể thiết lập quyền bảo mật để cho phép bất kỳ ai trong tổ chức, bất kể vị trí của họ, View tài liệu.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A SharePoint page for a group called Team Site.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/what_is_office365_sharepoint_24.png\" title=\"A SharePoint page for a group called Team Site.\" /></p> <p>Người đăng ký Office 365 cũng nhận được ** cập nhật phần mềm thường xuyên hơn ** so với những người đã mua Office mà không đăng ký. Điều này có nghĩa là người đăng ký Office 365 có quyền truy cập vào các tính năng, bản cập nhật bảo mật và sửa lỗi mới nhất.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"An Office pop-up window that reads &quot;You're up to date!&quot;\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/what_is_office365_updated_24.png\" title=\"An Office pop-up window that reads \\&quot;You're up to date!\\&quot;\" /></p> <p>/en/word/New-features-in-office-2019/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/LKLnpVmwifc"
            },
            {
                id: "wa_32",
                sessionId: 66,
                title: "Bài 32: New-feature-in-office-2019",
                description: "Nội dung chi tiết cho bài Bài 32: New-feature-in-office-2019.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: New tính năng trong Office 2019",
                        content: "<p>Office 2019 được phát hành vào tháng 9 năm 2018. Nếu bạn đã sử dụng Office 2016 hoặc các phiên bản cũ hơn, có thể bạn sẽ thấy Office 2019 quen thuộc. Giao diện tương tự và hầu hết các tính năng vẫn hoạt động như cũ. Tuy nhiên, có một số cải tiến được thiết kế để giúp Office 2019 mạnh mẽ hơn và dễ sử dụng hơn.</p> <p>Office 2019 chỉ khả dụng cho các máy tính chạy ** Windows 10 ** hoặc một trong ** ba phiên bản macOS mới nhất **.</p> <p>Xem video bên dưới để tìm hiểu thêm về các cải tiến và tính năng New của Office 2019.</p> <h4>Cập nhật trực quan</h4> <p>Office 2019 đi kèm với một số tính năng New giúp tùy chỉnh hình ảnh dự án của bạn. Có một thư viện đồ họa New có tên ** Icons ** mà bạn có thể sử dụng và tùy chỉnh theo cách bạn muốn. Bạn cũng có thể biến bản vẽ của mình thành Shapes tiêu chuẩn bằng cách sử dụng chức năng ** Ink to Shape ** và Insert ** mô hình 3D tương tác ** vào dự án của mình.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of a 3D model being using in Office 2019\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/new_3D_models.jpg\" title=\"screenshot of a 3D model being using in Office 2019\" /></p> <h4>Từ</h4> <p>Word có một tính năng New được gọi là ** Công cụ học tập **. Tính năng này có thể Help giúp văn bản dễ đọc hơn mà không cần thực hiện các thay đổi vĩnh viễn đối với tài liệu của bạn. Bạn có thể thay đổi khoảng cách văn bản, Page Color hoặc thậm chí yêu cầu Word đọc to văn bản của bạn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of Word 2019's Learning Tools function in use\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/new_learning_tools.png\" title=\"screenshot of Word 2019's Learning Tools function in use\" /></p> <h4>PowerPoint</h4> <p>PowerPoint bao gồm chuyển đổi New ** Biến đổi ** cho phép bạn tạo hiệu ứng động cho các đối tượng giữa các trang chiếu trong một khoảng thời gian ngắn. Nếu bạn muốn lưu bản trình bày của mình dưới dạng tệp video thì giờ đây PowerPoint cũng cung cấp cho bạn khả năng Export bản trình bày của bạn ở ** độ phân giải 4K **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of exporting a presentation as a 4K video\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/new_4K.png\" title=\"screenshot of exporting a presentation as a 4K video\" /></p> <h4>Excel</h4> <p>Có một số loại biểu đồ New trong Excel: ** bản đồ Charts ** và ** kênh Charts <strong>. Ngoài ra còn có một tính năng được gọi là ** lựa chọn chính xác </strong>, cho phép bạn bỏ chọn từng ô sau khi đã đánh dấu chúng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of precision selection being using in Excel 2019\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/new_precision_selection.png\" title=\"screenshot of precision selection being using in Excel 2019\" /></p> <h4>Office 2019 so với Office 365</h4> <p>Điều quan trọng cần lưu ý là Office 2019 ** không có nhiều tính năng New như Office 365 **. Nếu quan tâm đến các bản cập nhật linh hoạt hơn, bạn có thể muốn xem xét Office 365 dựa trên đăng ký.</p> <p>Nhiều thay đổi và cải tiến trong Office 2019 tuy nhỏ nhưng có thể Help để tăng năng suất và khả năng sử dụng dễ dàng của bạn trong một số trường hợp nhất định.</p> <p>/en/word/office-intelligent-services/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/ndaD7GLITmA"
            },
            {
                id: "wa_33",
                sessionId: 66,
                title: "Bài 33: Dịch vụ văn phòng thông minh",
                description: "Nội dung chi tiết cho bài Bài 33: Dịch vụ văn phòng thông minh.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Dịch vụ văn phòng thông minh",
                        content: "<p>Microsoft Office chứa nhiều tính năng hữu ích, bao gồm trình dịch ngôn ngữ và PowerPoint Designer. Tuy nhiên, khi bạn cố gắng sử dụng những tính năng này, lời nhắc có thể yêu cầu bạn kích hoạt Dịch vụ thông minh trước tiên. Mặc dù đây có vẻ là một quyết định dễ dàng nhưng bạn nên cân nhắc những gì bạn đồng ý khi quyết định bật Dịch vụ thông minh.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A prompt to activate Office Intelligent Services.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/ois_prompt_crop.png\" title=\"A prompt to activate Office Intelligent Services.\" /></p> <h4>Dịch vụ thông minh là gì?</h4> <p>** Dịch vụ thông minh ** hỗ trợ một số tính năng nâng cao trên đám mây trong toàn bộ Office. Tuy nhiên, để các tính năng này hoạt động, Microsoft phải ** thu thập và phân tích nội dung tài liệu của bạn **. Ngoài ra, nó sẽ thu thập dữ liệu về cách bạn sử dụng Office.</p> <h4>Bạn có nên sử dụng Dịch vụ thông minh?</h4> <p>Trước khi quyết định có bật Dịch vụ thông minh hay không, trước tiên bạn nên biết Microsoft sẽ làm gì với dữ liệu mà hãng thu thập. Theo <a href=\"../../../not-offline.html?url=https:/privacy.microsoft.com/en-us/privacystatement\">tuyên bố về quyền riêng tư</a>, nó sử dụng dữ liệu được thu thập cho những việc như phát triển sản phẩm, nghiên cứu và quảng cáo có mục tiêu.</p> <p>Trước khi kích hoạt Dịch vụ thông minh, hãy tự hỏi liệu bạn có thấy thoải mái khi Microsoft có quyền truy cập vào công việc của bạn không. Nếu lo ngại về việc công ty thu thập dữ liệu của bạn hoặc xem tài liệu bí mật, bạn có thể không muốn sử dụng bất kỳ tính năng dựa trên Dịch vụ thông minh nào.</p> <h4>Kích hoạt dịch vụ thông minh</h4> <p>Theo mặc định, Dịch vụ thông minh bị ** tắt ** và bạn có hai cách để kích hoạt dịch vụ này.</p> <p>Phương pháp nhanh nhất là chọn tính năng dựa trên Dịch vụ thông minh, chẳng hạn như Dịch. Một lời nhắc sẽ xuất hiện yêu cầu bạn bật Dịch vụ thông minh. Chỉ cần nhấp vào ** Bật ** để kích hoạt nó.</p> <p>Phương pháp khác bao gồm một vài bước nữa.</p> <ol> <li>Nhấp vào tab ** File ** trong Word, Excel, PowerPoint hoặc Outlook.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A cursor clicking on the File tab.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/ois_list_1.png\" title=\"A cursor clicking on the File tab.\" /> 2. Nhấp vào ** Options **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A cursor clicking on the Options tab in the Backstage View.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/ois_list_2.png\" title=\"A cursor clicking on the Options tab in the Backstage View.\" /> 3. Nhấp vào hộp kiểm có nhãn ** Bật dịch vụ <strong>, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A cursor clicking on a checkbox that enables Office Intelligent Services.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/ois_list_3.jpg\" title=\"A cursor clicking on a checkbox that enables Office Intelligent Services.\" /></p> <h4>Tính năng nổi bật</h4> <p>** PowerPoint Designer ** có thể phân tích hình ảnh, danh sách và văn bản trong bản trình bày của bạn để tạo các trang trình bày trông chuyên nghiệp và nó sử dụng Dịch vụ thông minh để cung cấp cho bạn các đề xuất được cá nhân hóa hơn.</p> <p>Để sử dụng, hãy chọn tab ** Design **, sau đó nhấp vào ** Design Ý tưởng ** ở bên phải. Khi bạn thêm các thành phần vào trang trình bày của mình, tính năng này sẽ cập nhật các ý tưởng New. Nó thậm chí còn cung cấp cho bạn các đề xuất nếu bạn có một bản trình bày hoàn toàn trống.</p> <p>Tuy nhiên, hãy nhớ rằng PowerPoint Designer ** dành riêng cho Office 365 ** người đăng ký.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Design Ideas feature showing various layout options in PowerPoint.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/design_ideas.jpg\" title=\"The Design Ideas feature showing various layout options in PowerPoint.\" /></p> <p>** Tra cứu thông minh ** cho phép bạn tiến hành tìm kiếm trực tuyến một từ hoặc cụm từ trong Word, Excel hoặc PowerPoint. Để sử dụng nó, hãy bấm chuột phải vào một thuật ngữ, sau đó chọn Tra cứu thông minh. Một cửa sổ sẽ xuất hiện ở bên phải, cung cấp cho bạn kết quả tìm kiếm và định nghĩa phù hợp nhất.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Smart Lookup feature showing search results for the word 'symposium'.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/smart_lookup.jpg\" title=\"The Smart Lookup feature showing search results for the word 'symposium'.\" /></p> <p>Để sử dụng ** Dịch **, chỉ cần nhấp chuột phải vào một từ hoặc cụm từ, sau đó chọn Dịch. Sau đó, bạn có thể dịch lựa chọn của mình sang hàng chục ngôn ngữ.</p> <p>Hãy nhớ rằng tính năng này không hoàn hảo, vì vậy đừng ngạc nhiên nếu kết quả không hoàn toàn chính xác.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Translator feature translating the German word for &quot;excuse me&quot; into English.\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/translator.jpg\" title=\"The Translator feature translating the German word for \\&quot;excuse me\\&quot; into English.\" /></p> <h4>Office 365</h4> <p>Cần lưu ý rằng một số tính năng dựa trên Dịch vụ thông minh, chẳng hạn như PowerPoint Designer, chỉ hoạt động với đăng ký Office 365. Microsoft cũng có kế hoạch bổ sung thêm nhiều tính năng dựa trên Dịch vụ thông minh hơn vào Office 365 trong tương lai. Các tính năng sắp tới bao gồm <strong>Ý tưởng trong Excel </strong>, gợi ý các cách khác nhau để hiển thị dữ liệu của bạn; và ** Trợ lý sơ yếu lý lịch LinkedIn **, sử dụng toàn bộ cơ sở dữ liệu LinkedIn để Help làm cho sơ yếu lý lịch của bạn nổi bật.</p> <p>Từ ý tưởng thuyết trình đến Tra cứu thông minh, Dịch vụ thông minh có thể cung cấp một số tính năng hữu ích nếu bạn cảm thấy thoải mái khi Microsoft thu thập dữ liệu của mình.</p> <p>/en/word/using-the-Draw-tab/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "wa_34",
                sessionId: 66,
                title: "Bài 34: Sử dụng tab-Draw-",
                description: "Nội dung chi tiết cho bài Bài 34: Sử dụng tab-Draw-.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Sử dụng Draw tab",
                        content: "<p>Cho dù bạn sử dụng bút kỹ thuật số, màn hình cảm ứng hay chuột, ** tính năng vẽ ** trong Office đều có thể Help bạn thêm ghi chú, tạo Shapes, chỉnh sửa văn bản, v.v. ** Draw tab ** có sẵn trong ** Word <strong>, ** Excel ** và ** PowerPoint </strong>.</p> <p>Hầu hết các tính năng được đề cập bên dưới đều có trong ** Office 365 ** và ** Office 2019 **, mặc dù một số tính năng trong số đó chỉ có trong Office 365.</p> <p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng Draw tab.</p> <h4>Thêm Draw tab vào Ribbon</h4> <p>Draw tab thường được tìm thấy trên Ribbon. Tuy nhiên, nếu bạn không nhìn thấy nó trên máy của mình thì đây là cách thêm nó.</p> <ol> <li>Nhấp chuột phải vào Ribbon và chọn ** Tùy chỉnh Ribbon **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking Customize the Ribbon after right-clicking on the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ribbon_customize.png\" title=\"screenshot of clicking Customize the Ribbon after right-clicking on the Ribbon\" /> 2. Chọn hộp bên cạnh ** Draw <strong>, sau đó nhấp vào ** OK </strong>.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of checking the Draw box \" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ribbon_check_cropped.jpg\" title=\"screenshot of checking the Draw box\" /> 3. Draw tab hiện sẽ có sẵn trong Ribbon.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Draw tab in the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ribbon_complete.png\" title=\"screenshot of the Draw tab in the Ribbon\" /></p> <h4>Draw tab có thể làm gì?</h4> <p>Draw tab cung cấp ba loại họa tiết vẽ: ** bút <strong>, ** bút chì ** và ** tô sáng </strong>, mỗi loại có một giao diện khác nhau. Để chọn một cái, chỉ cần nhấp vào nó và bạn đã sẵn sàng bắt đầu vẽ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of using the Draw tool\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_drawing_example.jpg\" title=\"screenshot of using the Draw tool\" /></p> <p>Nếu bạn muốn thay đổi ** màu ** hoặc ** độ dày ** của bút, hãy nhấp vào mũi tên thả xuống bên cạnh bút và chọn tùy chọn của bạn. Khi bạn hoàn tất, hãy nhấp chuột ra khỏi menu để tiếp tục vẽ.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of changing the color and thickness of a pen\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_color_thickness.png\" title=\"screenshot of changing the color and thickness of a pen\" /></p> <h4>Tính năng nâng cao</h4> <p>Khi bạn vẽ Shapes bằng tay, có thể khó Draw chúng một cách hoàn hảo. May mắn thay, công cụ ** Ink to Shape ** có thể Help với điều này. Chỉ cần nhấp vào ** Ink to Shape **, sau đó nhấp vào Draw hình dạng bạn chọn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a &quot;before&quot; screenshot of using Ink to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ink_to_shape_before.png\" title=\"a \\&quot;before\\&quot; screenshot of using Ink to Shape\" /></p> <p>Sau đó, tính năng ** Ink to Shape ** sẽ tìm ra loại hình bạn đã vẽ và sửa bất kỳ điểm không hoàn hảo nào để làm cho hình đó trông bóng bẩy hơn.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"an &quot;after&quot; screenshot of using Ink to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ink_to_shape_after.png\" title=\"an \\&quot;after\\&quot; screenshot of using Ink to Shape\" /></p> <p>Ngoài Shapes, bạn có thể viết các phương trình toán học phức tạp bằng công cụ ** Ink to Math **. Khi bạn viết một phương trình, công cụ sẽ đọc những gì bạn đang viết và dịch nó thành một phương trình được định dạng đúng.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of using the Ink to Math tool to write an equation\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ink_to_math.png\" title=\"screenshot of using the Ink to Math tool to write an equation\" /></p> <p>Word còn có một tính năng vẽ độc quyền có tên ** Ink Editor <strong>. Bạn có thể khoanh tròn văn bản để chọn, gạch bỏ văn bản để xóa văn bản đó, v.v. Tính năng này ** chỉ khả dụng với Office 365 </strong>, không có trên Office 2019.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Ink Editor tool\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/draw_ink_editor.png\" title=\"screenshot of the Ink Editor tool\" /></p> <p>Các tính năng vẽ này cung cấp cho bạn nhiều Options hơn để tùy chỉnh các dự án của bạn và giúp sử dụng Office trên máy tính bảng và màn hình cảm ứng dễ dàng hơn.</p> <p>/en/word/working-with-Icons/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/L4TPfHitbKI"
            },
            {
                id: "wa_35",
                sessionId: 66,
                title: "Bài 35: làm việc với-Icons",
                description: "Nội dung chi tiết cho bài Bài 35: làm việc với-Icons.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Làm việc với Icons",
                        content: "<p>Nếu bạn cần đồ họa cho một dự án thì có một tính năng bạn có thể sử dụng có tên là ** Icons <strong>. Icons là một thư viện ** đồ họa hiện đại, chuyên nghiệp ** đi kèm với Office 365 và 2019, đồng thời bạn có thể ** tùy chỉnh ** để phù hợp với nhu cầu của mình. Icons có sẵn trong ** Word </strong>, ** Excel <strong>, ** Outlook ** và ** PowerPoint </strong>.</p> <p>Xem video bên dưới để tìm hiểu thêm về Icons.</p> <h4>Đang chèn Icons</h4> <p>Để Insert một biểu tượng, hãy nhấp vào tab ** Insert ** rồi chọn ** Icons **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Icons button in the Insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_insert.png\" title=\"clicking the Icons button in the Insert tab\" /></p> <p>Trình đơn ** Insert Icons ** sẽ xuất hiện. Bạn có thể cuộn qua nhiều chủ đề khác nhau, bao gồm con người, công nghệ, thương mại, nghệ thuật, v.v. Khi bạn tìm thấy biểu tượng mình thích, hãy chọn biểu tượng đó rồi nhấp vào ** Insert **.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Icons menu\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_menu.jpg\" title=\"screenshot of the Icons menu\" /></p> <h4>Đang tùy chỉnh Icons</h4> <p>Sau khi chèn biểu tượng, có một số cách khác nhau để bạn có thể tùy chỉnh biểu tượng đó.</p> <p>Để thay đổi ** màu ** của một biểu tượng, hãy chọn biểu tượng bạn muốn chỉnh sửa. Tab ** Định dạng ** sẽ xuất hiện. Sau đó nhấp vào ** Graphics Fill ** và chọn màu từ menu thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of changing an icon's color\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_change_color_edit.png\" title=\"screenshot of changing an icon's color\" /></p> <p>Để thêm ** đường viền ** vào biểu tượng của bạn, hãy nhấp vào ** Hình dạng đường viền ** và chọn màu từ menu thả xuống.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of adding an outline to an icon\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_outline_edit.png\" title=\"screenshot of adding an outline to an icon\" /></p> <p>Bạn cũng có thể thay đổi ** kích thước ** của biểu tượng bằng cách giữ một trong các ** bộ điều khiển định cỡ ** và kéo biểu tượng đó. Vì chúng là <strong><a href=\"../../../beginning-graphic-Design/images/1/index.html\">đồ họa vector</a></strong> nên bạn có thể phóng to Icons theo ý muốn mà không bị tạo pixel.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of changing an icon's size\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_change_size.png\" title=\"screenshot of changing an icon's size\" /></p> <h4>Chia một biểu tượng thành nhiều phần</h4> <p>Một số Icons có thể ** được chia thành các phần riêng biệt **, cho phép bạn chỉnh sửa từng phần riêng lẻ để tùy chỉnh thêm.</p> <ol> <li>Nhấp chuột phải vào biểu tượng và chọn ** Chuyển đổi thành hình dạng **.</li> </ol> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of right-clicking an icon and selecting Convert to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_convert_to_shape.png\" title=\"screenshot of right-clicking an icon and selecting Convert to Shape\" /> 2. Nhấp vào ** Có ** trong hộp thoại.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking Yes after choosing Convert to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_convert_yes.png\" title=\"screenshot of clicking Yes after choosing Convert to Shape\" /> 3. Nếu biểu tượng của bạn có các phần riêng lẻ thì giờ đây bạn có thể tự chỉnh sửa từng phần, thay đổi kích thước, màu sắc và vị trí của phần đó.</p> <p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of an icon after using the Convert to Shape feature\" src=\"Module_1-6/TaiLieuHuongDan/Word/Advanced/images/icons_convert_complete.jpg\" title=\"screenshot of an icon after using the Convert to Shape feature\" /></p> <p>Icons cung cấp nhiều khả năng để tùy chỉnh giao diện dự án của bạn. Hãy dùng thử nếu bạn đang tìm kiếm một số hình ảnh đơn giản, bóng bẩy để nâng cao nội dung của mình.</p> <p>/en/word/word-quiz/content/</p>",
                        icon: "fa-list-ul"
                    }
                ],
                video: "https://www.youtube.com/embed/c_vNW0q-HEE"
            }
        ]
    },
    {
        id: 67,
        title: "Excel Cơ Bản",
        description: "Các bài học cơ bản về Microsoft Excel dựa trên giáo trình GCFGlobal.",
        totalLessons: 12,
        lessons: [
            {
                id: "eb_1",
                sessionId: 67,
                title: "Bài 1: Làm quen với Excel",
                description: "Nội dung chi tiết cho bài Bài 1: Làm quen với Excel.",
                video: "https://www.youtube.com/embed/lgIWIPDJuPo",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 1: Làm quen với excel</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 1: Làm quen với Excel",
                        content: "<h3>Giới thiệu</h3>\n<p>Excel là ** chương trình bảng tính ** cho phép bạn ** lưu trữ <strong>,</strong> sắp xếp ** và ** phân tích ** ** thông tin **. Mặc dù bạn có thể cho rằng Excel chỉ được một số người nhất định sử dụng để xử lý dữ liệu phức tạp nhưng bất kỳ ai cũng có thể tìm hiểu cách tận dụng các tính năng ** mạnh mẽ ** ** ** của chương trình. Cho dù bạn đang lập ngân sách, sắp xếp nhật ký đào tạo hay tạo hóa đơn, Excel đều giúp bạn dễ dàng làm việc với các loại dữ liệu khác nhau.</p>\n<p>Hãy xem video bên dưới để tìm hiểu thêm về Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Về hướng dẫn này",
                        content: "<p>Các quy trình trong hướng dẫn này sẽ áp dụng cho ** tất cả các phiên bản Microsoft Excel gần đây <strong>, bao gồm ** Excel 2019 </strong>,<strong> Excel 2016 ** và ** Office 365 </strong>. Có thể có một số khác biệt nhỏ, nhưng nhìn chung các phiên bản này đều giống nhau. Tuy nhiên, nếu đang sử dụng ** phiên bản cũ hơn **, bạn có thể tham khảo một trong các <a href=\"../../../topics/excel/index.html\">hướng dẫn Excel</a> \nkhác của chúng tôi.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Excel Start Screen",
                        content: "<p>Khi bạn mở Excel lần đầu tiên,<strong> Excel Start Screen ** sẽ xuất hiện. Từ đây, bạn sẽ có thể tạo ** sổ làm việc mới </strong>, chọn ** mẫu ** và truy cập ** gần đây ** ** đã chỉnh sửa ** ** sổ làm việc ** của mình.</p>\n<ul>\n<li>Từ ** Excel Start Screen **, tìm và chọn ** Blank workbook ** để truy cập vào giao diện Excel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Excel Start screen\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_interface_start.png\" /></li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Các phần của cửa sổ Excel",
                        content: "<p>Một số phần của cửa sổ Excel (như ** Ribbon ** và ** scroll bar <strong>) \nlà tiêu chuẩn trong hầu hết các chương trình khác của Microsoft. Tuy nhiên, có những tính năng khác dành riêng cho bảng tính, chẳng hạn như ** thanh công thức </strong>,<strong> hộp tên ** và ** worksheet tab </strong>.</p>\n<p>Nhấp vào các nút trong phần tương tác bên dưới để làm quen với các phần của giao diện Excel.</p>\n<p>donechỉnh sửa các điểm nóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_interface_interactive2.png\" /></p>\n<h2>Quick Access Toolbar</h2>\n<p>** Quick Access Toolbar ** cho phép bạn truy cập các lệnh phổ biến bất kể tab nào được chọn. Bạn có thể tùy chỉnh các lệnh tùy theo sở thích của mình.</p>\n<h2>Name Box</h2>\n<p>** Hộp Tên ** hiển thị ** vị trí ** hoặc ** tên ** của ** ô đã chọn **.</p>\n<h2>Formula Bar</h2>\n<p>Trong ** thanh công thức <strong>, bạn có thể nhập hoặc chỉnh sửa ** dữ liệu </strong>, công thức hoặc ** hàm ** sẽ xuất hiện trong một ô cụ thể.</p>\n<h2>Cột</h2>\n<p>** cột ** là một nhóm các ô chạy từ đầu trang đến cuối trang. Trong Excel, các cột được xác định bằng ** chữ cái **.</p>\n<h2>Ribbon</h2>\n<p>** Ribbon ** chứa tất cả các ** lệnh ** bạn sẽ cần để thực hiện các tác vụ phổ biến trong Excel. Nó có nhiều ** tab **, mỗi tab có một số ** nhóm ** lệnh.</p>\n<h2>Tài khoản Microsoft</h2>\n<p>Từ đây, bạn có thể truy cập thông tin ** tài khoản Microsoft ** của mình, xem ** hồ sơ ** của bạn và ** chuyển đổi ** ** tài khoản **.</p>\n<h2>Tell me</h2>\n<p>Hộp ** Tell me ** hoạt động giống như một thanh tìm kiếm giúp bạn nhanh chóng tìm thấy các công cụ hoặc lệnh bạn muốn sử dụng.</p>\n<h2>Ô</h2>\n<p>Mỗi hình chữ nhật trong sổ làm việc được gọi là ** ô **. Ô là ** giao điểm ** của một hàng và một cột. Chỉ cần nhấp để ** chọn ** một ô.</p>\n<h2>Hàng ngang</h2>\n<p>** hàng ** là một nhóm các ô chạy từ bên trái sang bên phải của trang. Trong Excel, các hàng được xác định bằng ** số **.</p>\n<h2>Bảng tính</h2>\n<p>Các tệp Excel được gọi là ** sổ làm việc <strong>. Mỗi sổ làm việc chứa một hoặc nhiều ** bảng tính </strong>. Nhấp vào các tab để chuyển đổi giữa chúng hoặc nhấp chuột phải để có thêm tùy chọn.</p>\n<h2>Kiểm soát thu phóng</h2>\n<p>Nhấp và kéo ** thanh trượt ** để sử dụng ** điều khiển thu phóng <strong>. Số ở bên phải thanh trượt phản ánh ** phần trăm thu phóng </strong>.</p>\n<h2>Tùy chọn xem bảng tính</h2>\n<p>Có ba cách để xem một bảng tính. Chỉ cần nhấp vào một lệnh để chọn chế độ xem mong muốn.</p>\n<h2>Scroll bar dọc và ngang</h2>\n<p>Các scroll bar cho phép bạn cuộn lên xuống hoặc sang bên. Để thực hiện việc này, hãy nhấp và kéo ** dọc ** hoặc ** scroll bar ngang **.</p>\n<h3>Làm việc với môi trường Excel</h3>\n<p>** Ribbon ** và ** Quick Access Toolbar ** là nơi bạn sẽ tìm thấy các lệnh để thực hiện các tác vụ phổ biến trong Excel.** Backstage view ** cung cấp cho bạn nhiều tùy chọn khác nhau để lưu, mở tệp, in và chia sẻ tài liệu của bạn.</p>\n<h3>Ribbon</h3>\n<p>Excel sử dụng ** hệ thống Ribbon theo thẻ ** thay vì các menu truyền thống.<strong> Ribbon ** chứa ** nhiều tab </strong>, mỗi tab có một số ** nhóm ** ** lệnh **. Bạn sẽ sử dụng các tab này để thực hiện ** các tác vụ phổ biến ** nhất trong Excel.</p>\n<ul>\n<li>\n<p>Mỗi tab sẽ có một hoặc nhiều nhóm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Groups on the ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_ribbon_group.png\" /></p>\n</li>\n<li>\n<p>Một số nhóm sẽ có mũi tên bạn có thể nhấp vào để có thêm tùy chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Some groups have a menu for more options\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_ribbon_more.png\" /></p>\n</li>\n<li>\n<p>Bấm vào một tab để xem thêm lệnh.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Tabs on the ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_ribbon_tabs2.png\" /></p>\n</li>\n<li>\n<p>Bạn có thể điều chỉnh cách hiển thị Ribbon bằng Ribbon Display Options.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Ribbon Display Options menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_ribbon_display.png\" /></p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để thay đổi Ribbon Display Options:",
                        content: "<p>Ribbon được thiết kế để đáp ứng tác vụ hiện tại của bạn nhưng bạn có thể chọn ** thu nhỏ ** nó nếu bạn thấy nó chiếm quá nhiều không gian màn hình. Nhấp vào mũi tên ** Ribbon Display Options ** ở góc trên bên phải của Ribbon để hiển thị menu thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Ribbon Display Options menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_ribbon_display.png\" /></p>\n<p>Có ba chế độ trong menu Ribbon Display Options:</p>\n<ul>\n<li>\n<p>** Tự động ẩn Ribbon <strong>: Tự động ẩn hiển thị sổ làm việc của bạn ở chế độ toàn màn hình và ẩn hoàn toàn Ribbon. Để ** hiển thị Ribbon </strong>, hãy nhấp vào lệnh ** Mở rộng Ribbon ** ở đầu màn hình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Auto-hiding the ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_display_hidden.png\" /></p>\n</li>\n<li>\n<p>** Show Tabs <strong>: Tùy chọn này ẩn tất cả các nhóm lệnh khi chúng không được sử dụng, nhưng ** tab ** sẽ vẫn hiển thị. Để ** hiển thị Ribbon </strong>, chỉ cần nhấp vào một tab.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Show Tabs setting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_display_only_tabs.png\" /></p>\n</li>\n<li>\n<p>** Show Tabs và Lệnh **: Tùy chọn này tối đa hóa Ribbon. Tất cả các tab và lệnh sẽ hiển thị. Tùy chọn này được ** chọn theo mặc định ** khi bạn mở Excel lần đầu tiên.</p>\n</li>\n</ul>\n<h3>Quick Access Toolbar</h3>\n<p>Nằm ngay phía trên Ribbon,<strong> Quick Access Toolbar ** cho phép bạn truy cập các lệnh phổ biến bất kể tab nào được chọn. Theo mặc định, nó bao gồm các lệnh ** Save </strong>,<strong> Undo ** và ** Repeat </strong>. Bạn có thể thêm các lệnh khác tùy theo sở thích của mình.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để thêm lệnh vào Quick Access Toolbar:",
                        content: "<ol>\n<li>Nhấp vào ** mũi tên thả xuống ** ở bên phải ** Quick Access Toolbar **.</li>\n<li>\n<p>Chọn ** lệnh ** bạn muốn thêm từ menu thả xuống. Để chọn từ các lệnh bổ sung, hãy chọn ** Lệnh khác **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Customize Quick Access Toolbar menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_quick_access_menu.png\" /></p>\n</li>\n<li>\n<p>Lệnh sẽ được ** thêm ** vào Quick Access Toolbar.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The New command on the Quick Access Toolbar\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_quick_access_added.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Cách sử dụng Hãy cho tôi biết:",
                        content: "<p>Hộp ** Tell me ** hoạt động giống như một thanh tìm kiếm giúp bạn nhanh chóng tìm thấy các công cụ hoặc lệnh bạn muốn sử dụng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Tell me box on the ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_tell_me.png\" /></p>\n<ol>\n<li>\n<p>Nhập từ ngữ của riêng bạn những gì bạn muốn làm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Typing a search phrase in the Tell me box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_tell_me_type.png\" /></p>\n</li>\n<li>\n<p>Kết quả sẽ cung cấp cho bạn một vài lựa chọn phù hợp. Để sử dụng một cái, hãy nhấp vào nó giống như bạn thực hiện một lệnh trên Ribbon.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Results from the Tell me bar\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_tell_me_menu.png\" /></p>\n</li>\n</ol>\n<h3>Chế độ xem bảng tính</h3>\n<p>Excel có nhiều tùy chọn xem giúp thay đổi cách hiển thị sổ làm việc của bạn. Những chế độ xem này có thể hữu ích cho nhiều tác vụ khác nhau, đặc biệt nếu bạn định ** in ** bảng tính. Để ** thay đổi chế độ xem trang tính <strong>, hãy tìm các lệnh ở góc dưới bên phải của cửa sổ Excel và chọn ** Chế độ xem bình thường </strong>,<strong> Chế độ xem bố cục trang ** hoặc ** Chế độ xem ngắt trang </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The worksheet view commands\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_views_buttons.png\" /></p>\n<ul>\n<li>\n<p>** Chế độ xem bình thường ** là chế độ xem mặc định cho tất cả các trang tính trong Excel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Normal view\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_views_normal.png\" /></p>\n</li>\n<li>\n<p>** Chế độ xem Bố cục Trang ** hiển thị cách trang tính của bạn sẽ xuất hiện khi được in. Bạn cũng có thể thêm đầu trang và chân trang trong chế độ xem này.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page Layout view\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_views_page_layout.png\" /></p>\n</li>\n<li>\n<p>** Chế độ xem ngắt trang ** cho phép bạn thay đổi vị trí ngắt trang, điều này đặc biệt hữu ích khi in nhiều dữ liệu từ Excel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page Break view\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_views_page_break.png\" /></p>\n</li>\n</ul>\n<h3>Xem hậu trường</h3>\n<p>** Backstage view ** cung cấp cho bạn nhiều tùy chọn khác nhau để lưu, mở tệp, in và chia sẻ sổ làm việc của bạn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để truy cập chế độ xem Hậu trường:",
                        content: "<ol>\n<li>Nhấp vào tab ** Tệp ** trên ** Ribbon <strong>.</strong> Backstage view ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click File on the Ribbon to go to the Backstage view.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_backstage_file.png\" /></li>\n</ol>\n<p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về cách sử dụng chế độ xem Hậu trường.</p>\n<p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Backstage view.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_backstage_view.png\" /></p>\n<h2>Quay lại Excel</h2>\n<p>Bạn có thể sử dụng mũi tên để ** đóng ** ** Backstage view ** và quay lại Excel.</p>\n<h2>Thông tin</h2>\n<p>Khung ** Thông tin ** sẽ xuất hiện bất cứ khi nào bạn truy cập chế độ xem Backstage. Nó chứa ** thông tin ** về sổ làm việc hiện tại.</p>\n<h2>Mới</h2>\n<p>Từ đây, bạn có thể tạo ** sổ làm việc trống mới ** hoặc chọn từ bộ sưu tập lớn ** mẫu **.</p>\n<h2>Mở</h2>\n<p>Từ đây, bạn có thể ** mở các sổ làm việc gần đây ** cũng như các sổ làm việc được lưu vào ** OneDrive ** hoặc trên ** máy tính ** của bạn.</p>\n<h2>Lưu và lưu dưới dạng</h2>\n<p>Sử dụng ** Save ** và ** Save As ** để lưu sổ làm việc của bạn vào ** máy tính ** hoặc vào ** OneDrive ** của bạn.</p>\n<h2>In</h2>\n<p>Từ ngăn ** In **, bạn có thể thay đổi ** cài đặt in ** và in sổ làm việc của mình. Bạn cũng có thể xem ** bản xem trước ** sổ làm việc của mình.</p>\n<h2>Chia sẻ</h2>\n<p>Từ đây, bạn có thể mời mọi người ** xem và cộng tác ** trên sổ làm việc của mình. Bạn cũng có thể chia sẻ sổ làm việc của mình bằng cách gửi email dưới dạng tệp đính kèm.</p>\n<h2>Xuất khẩu</h2>\n<p>Bạn có thể chọn ** xuất ** sổ làm việc của mình ở định dạng khác, chẳng hạn như ** PDF/XPS ** hoặc ** Excel 1997-2003 **.</p>\n<h2>Xuất bản</h2>\n<p>Tại đây, bạn có thể xuất bản sổ làm việc của mình lên ** Power BI **, dịch vụ chia sẻ đám mây của Microsoft dành cho sổ làm việc Excel.</p>\n<h2>Đóng</h2>\n<p>Bấm vào đây để ** đóng ** sổ làm việc hiện tại.</p>\n<h2>Tài khoản</h2>\n<p>Từ khung ** Tài khoản **, bạn có thể truy cập thông tin ** tài khoản Microsoft ** của mình, sửa đổi ** chủ đề ** và ** nền ** cũng như ** đăng xuất ** khỏi tài khoản của mình.</p>\n<h2>Tùy chọn</h2>\n<p>Tại đây, bạn có thể thay đổi nhiều tùy chọn ** tùy chọn Excel <strong>,</strong> cài đặt ** và ** ngôn ngữ **.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở ** Excel **.</li>\n<li>Nhấp vào ** Blank workbook ** để mở bảng tính mới.</li>\n<li>Thay đổi ** Ribbon Display Options ** thành ** Show Tabs **.</li>\n<li>Sử dụng ** Quick Access Toolbar tùy chỉnh <strong>, nhấp để thêm ** Mới </strong>,<strong> In nhanh ** và ** Chính tả </strong>.</li>\n<li>Trong thanh ** Tell me <strong>, nhập từ ** Màu </strong>. Di chuột qua ** Tô màu ** và chọn ** màu vàng **. Điều này sẽ lấp đầy một ô với màu vàng.</li>\n<li>Thay đổi chế độ xem trang tính thành tùy chọn ** Bố cục Trang **.</li>\n<li>\n<p>Khi bạn hoàn tất, màn hình của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Getting To Know Excel Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_to_know_challenge.png\" /></p>\n</li>\n<li>\n<p>Thay đổi ** Tùy chọn hiển thị ribbon ** trở lại ** Show Tabs và lệnh <strong>.\n9.</strong>Đóng ** Excel và ** Không lưu ** các thay đổi.</p>\n</li>\n</ol>\n<p>/en/excel/hiểu-onedrive/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_2",
                sessionId: 67,
                title: "Bài 2: Hiểu về OneDrive",
                description: "Nội dung chi tiết cho bài Bài 2: Hiểu về OneDrive.",
                video: "https://www.youtube.com/embed/EBGrJckHadw",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 2: hiểu-onedrive</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 2: Tìm hiểu OneDrive",
                        content: "<p>/en/excel/getting-started-with-excel/content/</p>\n<h3>Giới thiệu</h3>\n<p>Nhiều tính năng trong Microsoft Office hướng đến việc lưu và chia sẻ tệp trực tuyến.** OneDrive ** là dung lượng lưu trữ trực tuyến của Microsoft mà bạn có thể sử dụng để lưu, chỉnh sửa và chia sẻ tài liệu cũng như các tệp khác của mình. Bạn có thể truy cập OneDrive từ máy tính, điện thoại thông minh hoặc bất kỳ thiết bị nào bạn sử dụng.</p>\n<p>Để bắt đầu với OneDrive, tất cả những gì bạn cần làm là thiết lập một ** tài khoản Microsoft ** miễn phí nếu bạn chưa có tài khoản.</p>\n<p>Nếu chưa có tài khoản Microsoft, bạn có thể xem bài học <a href=\"../../../microsoftaccount/creating-a-microsoft-account/2/index.html\">Tạo tài khoản Microsoft</a> \ntrong phần hướng dẫn về Tài khoản Microsoft của chúng tôi.</p>\n<p>Sau khi có tài khoản Microsoft, bạn sẽ có thể đăng nhập vào Office. Chỉ cần nhấp vào **Đăng nhập ** ở góc trên bên phải của cửa sổ Excel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"signing in to Office\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-17_09-35-16.png\" title=\"signing in to Office\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Lợi ích của việc sử dụng OneDrive",
                        content: "<p>Sau khi bạn đăng nhập vào tài khoản Microsoft của mình, có một số điều bạn có thể thực hiện với OneDrive:</p>\n<ul>\n<li>\n<p>** Truy cập tệp của bạn ở mọi nơi **: Khi lưu tệp vào OneDrive, bạn sẽ có thể truy cập chúng từ bất kỳ máy tính, máy tính bảng hoặc điện thoại thông minh nào có kết nối Internet. Bạn cũng có thể tạo tài liệu mới từ OneDrive.</p>\n</li>\n<li>\n<p>** Sao lưu tệp của bạn **: Việc lưu tệp vào OneDrive sẽ mang đến cho chúng thêm một lớp bảo vệ. Ngay cả khi có điều gì đó xảy ra với máy tính của bạn, OneDrive sẽ giữ cho các tệp của bạn an toàn và có thể truy cập được.</p>\n</li>\n<li>\n<p>** Chia sẻ tệp **: Thật dễ dàng để chia sẻ tệp OneDrive của bạn với bạn bè và đồng nghiệp. Bạn có thể chọn xem họ có thể chỉnh sửa hay chỉ đọc tệp. Tùy chọn này rất phù hợp cho việc cộng tác vì nhiều người có thể chỉnh sửa tài liệu cùng một lúc (điều này còn được gọi là đồng tác giả).</p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Lưu và mở tập tin",
                        content: "<p>Khi bạn đăng nhập vào tài khoản Microsoft của mình, OneDrive sẽ xuất hiện dưới dạng tùy chọn bất cứ khi nào bạn lưu hoặc mở tệp. Bạn vẫn có tùy chọn lưu tập tin vào máy tính của mình. Tuy nhiên, việc lưu tệp vào OneDrive cho phép bạn truy cập chúng từ bất kỳ máy tính nào khác và nó cũng cho phép bạn chia sẻ tệp với bạn bè và đồng nghiệp.</p>\n<p>Ví dụ: khi bạn bấm vào ** Lưu dưới dạng **, bạn có thể chọn OneDrive hoặc PC này làm vị trí lưu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Choosing a save location\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-16_13-50-49.png\" title=\"Choosing a save location\" /></p>\n<p>/en/excel/tạo-và-mở-workbooks/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_3",
                sessionId: 67,
                title: "Bài 3: Tạo và mở Workbooks",
                description: "Nội dung chi tiết cho bài Bài 3: Tạo và mở Workbooks.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 3: Tạo và mở Workbook</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 3: Tạo và mở Workbook",
                        content: "<p>/en/excel/hiểu-onedrive/content/</p>\n<h3>Giới thiệu</h3>\n<p>Các tệp Excel được gọi là ** sổ làm việc <strong>. Bất cứ khi nào bạn bắt đầu một dự án mới trong Excel, bạn sẽ cần ** tạo ** ** sổ làm việc mới </strong>. Có một số cách để bắt đầu làm việc với sổ làm việc trong Excel. Bạn có thể chọn ** tạo sổ làm việc mới **—bằng ** sổ làm việc trống ** hoặc ** mẫu ** được thiết kế sẵn—hoặc ** mở ** ** sổ làm việc ** hiện có.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách tạo và mở sổ làm việc trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Giới thiệu về OneDrive",
                        content: "<p>Bất cứ khi nào bạn mở hoặc lưu sổ làm việc, bạn sẽ có tùy chọn sử dụng ** OneDrive **, đây là dịch vụ lưu trữ tệp trực tuyến đi kèm với tài khoản Microsoft của bạn. Để bật tùy chọn này, bạn cần ** đăng nhập ** vào Office. Để tìm hiểu thêm, hãy truy cập bài học của chúng tôi về <a href=\"../../under Hiểu-onedrive/1/index.html\">Tìm hiểu về OneDrive</a>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"OneDrive on the Open tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_onedrive.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để tạo một sổ làm việc trống mới:",
                        content: "<ol>\n<li>\n<p>Chọn tab ** Tệp <strong>.</strong> Backstage view ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the File tab to go to the Backstage view.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_backstage_file.png\" /></p>\n</li>\n<li>\n<p>Chọn ** Mới <strong>, sau đó nhấp vào ** Blank workbook </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click Blank workbook in the New tab.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_new.png\" /></p>\n</li>\n<li>\n<p>Một sổ làm việc trống mới sẽ xuất hiện.</p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để mở một sổ làm việc hiện có:",
                        content: "<p>Ngoài việc tạo sổ làm việc mới, bạn thường cần mở sổ làm việc đã được lưu trước đó. Để tìm hiểu thêm về cách lưu sổ làm việc, hãy truy cập bài học của chúng tôi về <a href=\"../../ Saving-and-sharing-workbooks/1/index.html\">Lưu và chia sẻ sổ làm việc</a>.</p>\n<ol>\n<li>\n<p>Điều hướng đến ** Backstage view <strong>, sau đó nhấp vào ** Mở </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Open in the Backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_open_open.png\" /></p>\n</li>\n<li>\n<p>Chọn ** Máy tính <strong>, sau đó nhấp vào ** Duyệt </strong>. Bạn cũng có thể chọn ** OneDrive ** để mở các tệp được lưu trữ trên ** OneDrive ** của mình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Browse\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_open_browse2.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Mở ** sẽ xuất hiện. Xác định vị trí và chọn ** sổ làm việc ** của bạn, sau đó nhấp vào ** Mở **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Open dialog\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_open_dialog.png\" /><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Open a recent workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_open_recent.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để ghim một sổ làm việc:",
                        content: "<p>Nếu bạn thường xuyên làm việc với ** cùng một sổ làm việc **, bạn có thể ** ghim nó ** vào chế độ xem Backstage để truy cập nhanh hơn.</p>\n<ol>\n<li>\n<p>Điều hướng tới ** Hậu trường ** ** xem <strong>, sau đó nhấp vào ** Mở </strong>.** sổ làm việc được chỉnh sửa gần đây ** của bạn sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Navigate to recently edited workbooks\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_pin_open.png\" /></p>\n</li>\n<li>\n<p>Di chuột qua ** sổ làm việc ** bạn muốn ghim.<strong> biểu tượng đinh ghim ** ** ** sẽ xuất hiện bên cạnh sổ làm việc. Nhấp vào ** biểu tượng đinh ghim </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Pin a recent workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_pin_pushpin.png\" /></p>\n</li>\n<li>\n<p>Sổ làm việc sẽ ở trong Sổ làm việc Gần đây. Để ** bỏ ghim ** sổ làm việc, chỉ cần nhấp lại vào biểu tượng đinh ghim.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A pinned workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_pin_unpin.png\" /></p>\n</li>\n</ol>\n<h3>Sử dụng mẫu</h3>\n<p>** mẫu ** là một ** bảng tính được thiết kế sẵn ** mà bạn có thể sử dụng để tạo sổ làm việc mới một cách nhanh chóng. Các mẫu thường bao gồm ** tùy chỉnh ** ** định dạng ** và ** được xác định trước ** ** công thức **, vì vậy chúng có thể giúp bạn tiết kiệm rất nhiều thời gian và công sức khi bắt đầu một dự án mới.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để tạo một sổ làm việc mới từ một mẫu:",
                        content: "<ol>\n<li>\n<p>Nhấp vào tab ** Tệp ** để truy cập ** Hậu trường ** ** xem **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click File to go to the Backstage View\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_backstage_file.png\" /></p>\n</li>\n<li>\n<p>Chọn ** Mới <strong>. Một số mẫu sẽ xuất hiện bên dưới tùy chọn ** Blank workbook </strong>.</p>\n</li>\n<li>Chọn một ** mẫu ** để xem lại.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a template\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_template_new.png\" /></li>\n</ol>\n<p>4.** bản xem trước ** của mẫu sẽ xuất hiện cùng với ** thông tin bổ sung ** ** ** về cách sử dụng mẫu.\n5. Nhấp vào ** Tạo ** để sử dụng mẫu đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Creating a new workbook with a template\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_template_preview.png\" /></p>\n<ol>\n<li>Một sổ làm việc mới sẽ xuất hiện cùng với ** mẫu đã chọn ** **.</li>\n</ol>\n<p>Bạn cũng có thể duyệt các mẫu theo ** danh mục ** hoặc sử dụng ** thanh tìm kiếm ** để tìm nội dung cụ thể hơn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Searching for a template\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_template_search.png\" /></p>\n<p>Điều quan trọng cần lưu ý là không phải tất cả các mẫu đều do Microsoft tạo. Nhiều mẫu được tạo bởi nhà cung cấp bên thứ ba và thậm chí cả người dùng cá nhân, vì vậy một số mẫu có thể hoạt động tốt hơn những mẫu khác.</p>\n<h3>Chế độ tương thích</h3>\n<p>Đôi khi bạn có thể cần làm việc với sổ làm việc được tạo trong các phiên bản Microsoft Excel cũ hơn, như Excel 2010 hoặc Excel 2007. Khi bạn mở các loại sổ làm việc này, chúng sẽ xuất hiện trong ** Chế độ tương thích **.</p>\n<p>Chế độ tương thích ** tắt ** một số tính năng nhất định, do đó bạn sẽ chỉ có thể truy cập các lệnh có trong chương trình được sử dụng để tạo sổ làm việc. Ví dụ: nếu bạn mở sổ làm việc được tạo bằng Excel 2003, bạn chỉ có thể sử dụng các tab và lệnh có trong Excel 2003.</p>\n<p>Trong hình ảnh bên dưới, bạn có thể thấy sổ làm việc đang ở Chế độ tương thích, được chỉ báo ở đầu cửa sổ, bên phải tên tệp. Điều này sẽ vô hiệu hóa một số tính năng của Excel, tính năng này sẽ chuyển sang màu xám trên Ribbon.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Disabled commands in Compatibility mode\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_compatibility_example.png\" /></p>\n<p>Để thoát khỏi Chế độ tương thích, bạn cần ** chuyển đổi ** sổ làm việc sang loại phiên bản hiện tại. Tuy nhiên, nếu bạn đang cộng tác với những người khác chỉ có quyền truy cập vào phiên bản Excel cũ hơn, tốt nhất bạn nên để sổ làm việc ở Chế độ tương thích để định dạng không thay đổi.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để chuyển đổi một sổ làm việc:",
                        content: "<p>Nếu bạn muốn truy cập vào các tính năng mới hơn, bạn có thể ** chuyển đổi ** bảng tính sang định dạng tệp hiện tại.</p>\n<p>Lưu ý rằng việc chuyển đổi tệp có thể gây ra một số thay đổi đối với ** bố cục ban đầu ** của sổ làm việc.</p>\n<ol>\n<li>\n<p>Nhấp vào tab ** Tệp ** để truy cập chế độ xem Hậu trường.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the File tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_backstage_file.png\" /></p>\n</li>\n<li>\n<p>Xác định vị trí và chọn lệnh ** Convert **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Converting the workbook to the newest file type\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_compatibility_convert.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn lưu sổ làm việc, nhập ** tên tệp ** cho sổ làm việc và nhấp vào ** Lưu **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Saving a new version of the workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/creating_opening_compatibility_dialog.png\" /></p>\n</li>\n<li>\n<p>Sổ làm việc sẽ được chuyển đổi sang loại tệp mới nhất.</p>\n</li>\n</ol>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_creatingopening_practice.xls\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Lưu ý rằng sổ làm việc của chúng tôi mở ở ** Chế độ tương thích <strong>.</strong> Chuyển đổi ** sổ làm việc sang định dạng tệp hiện tại. Một hộp thoại sẽ xuất hiện hỏi bạn có muốn đóng và mở lại tệp để xem các tính năng mới hay không. Chọn ** Có **.</li>\n<li>Trong chế độ xem Backstage,** ghim ** một tệp hoặc thư mục.</li>\n</ol>\n<p>/en/excel/save-and-sharing-workbooks/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_4",
                sessionId: 67,
                title: "Bài 4: Lưu và chia sẻ Workbooks",
                description: "Nội dung chi tiết cho bài Bài 4: Lưu và chia sẻ Workbooks.",
                video: "https://www.youtube.com/embed/IwSC5LUm5HE",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 4: Lưu và chia sẻ sổ làm việc</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 4: Lưu và chia sẻ Workbook",
                        content: "<p>/en/excel/tạo-và-mở-workbooks/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Bất cứ khi nào bạn tạo một sổ làm việc mới trong Excel, bạn sẽ cần biết cách ** lưu ** sổ làm việc đó để truy cập và chỉnh sửa sổ làm việc đó sau này. Giống như các phiên bản Excel trước, bạn có thể lưu tệp ** cục bộ ** vào máy tính của mình. Bạn cũng có thể lưu sổ làm việc vào ** đám mây ** bằng ** OneDrive **, cũng như ** xuất ** và ** chia sẻ ** sổ làm việc với người khác trực tiếp từ Excel.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách lưu và chia sẻ sổ làm việc trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Giới thiệu về OneDrive",
                        content: "<p>Bất cứ khi nào bạn mở hoặc lưu sổ làm việc, bạn sẽ có tùy chọn sử dụng ** OneDrive **, đây là dịch vụ lưu trữ tệp trực tuyến đi kèm với tài khoản Microsoft của bạn. Để bật tùy chọn này, bạn cần ** đăng nhập ** vào Office. Để tìm hiểu thêm, hãy truy cập bài học của chúng tôi về <a href=\"../../under Hiểu-onedrive/1/index.html\">Tìm hiểu về OneDrive</a>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Accessing OneDrive\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_onedrive.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Lưu và lưu dưới dạng",
                        content: "<p>Excel cung cấp hai cách để lưu tệp:<strong> Save ** và ** Save As </strong>. Các tùy chọn này hoạt động theo những cách tương tự nhau, với một số khác biệt quan trọng:</p>\n<ul>\n<li>\n<p>** Save **: Khi bạn tạo hoặc chỉnh sửa sổ làm việc, bạn sẽ sử dụng lệnh ** Save ** để lưu các thay đổi của mình. Bạn sẽ sử dụng lệnh này hầu hết thời gian. Khi lưu tệp, lần đầu tiên bạn chỉ cần chọn tên tệp và vị trí. Sau đó, bạn có thể chỉ cần nhấp vào lệnh Lưu để lưu nó với cùng tên và vị trí.</p>\n</li>\n<li>\n<p>** Save As **: Bạn sẽ sử dụng lệnh này để tạo ** bản sao ** của sổ làm việc trong khi vẫn giữ bản gốc. Khi sử dụng Lưu dưới dạng, bạn cần chọn tên và/hoặc vị trí khác cho phiên bản đã sao chép.</p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để lưu một sổ làm việc:",
                        content: "<p>Điều quan trọng là ** lưu sổ làm việc của bạn ** bất cứ khi nào bạn bắt đầu một dự án mới hoặc thực hiện các thay đổi đối với dự án hiện có. Lưu sớm và thường xuyên có thể giúp công việc của bạn không bị thất lạc. Bạn cũng cần chú ý đến ** nơi bạn lưu ** sổ làm việc để có thể dễ dàng tìm thấy sau này.</p>\n<ol>\n<li>\n<p>Xác định vị trí và chọn lệnh ** Save ** trên ** Quick ** ** Access Toolbar **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Save command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_save_quick_access.png\" /></p>\n</li>\n<li>\n<p>Nếu bạn lưu tệp lần đầu tiên, khung ** Save As ** sẽ xuất hiện trong ** Backstage ** ** view **.</p>\n</li>\n<li>\n<p>Sau đó, bạn cần chọn ** nơi lưu ** tệp và đặt cho nó một ** tên tệp <strong>. Để lưu sổ làm việc vào máy tính của bạn, hãy chọn ** Máy tính </strong>, sau đó nhấp vào ** Duyệt **. Bạn cũng có thể bấm vào ** OneDrive ** để lưu tệp vào OneDrive của mình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Saving a workbook locally\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_save_browse.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn lưu sổ làm việc.</p>\n</li>\n<li>\n<p>Nhập ** tên tệp ** cho sổ làm việc, sau đó nhấp vào ** Lưu **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Saving a workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_save_dialog.png\" /></p>\n</li>\n<li>\n<p>Sổ làm việc sẽ được ** lưu **. Bạn có thể bấm lại vào lệnh ** Save ** để lưu các thay đổi khi sửa đổi sổ làm việc.</p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Sử dụng Save As để tạo bản sao",
                        content: "<p>Nếu bạn muốn lưu ** phiên bản khác ** của sổ làm việc trong khi vẫn giữ bản gốc, bạn có thể tạo ** bản sao <strong>. Ví dụ: nếu bạn có tệp có tên ** Dữ liệu bán hàng </strong>, bạn có thể lưu tệp đó dưới dạng ** Dữ liệu bán hàng 2 ** để bạn có thể chỉnh sửa tệp mới và vẫn tham khảo lại phiên bản gốc.</p>\n<p>Để thực hiện việc này, hãy nhấp vào lệnh ** Save As ** trong chế độ xem Backstage. Giống như khi lưu tệp lần đầu tiên, bạn sẽ cần chọn ** nơi lưu ** tệp và đặt cho nó một ** tên tệp ** mới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Save As\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_save_as.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để thay đổi vị trí lưu mặc định:",
                        content: "<p>Nếu bạn không muốn sử dụng ** OneDrive **, bạn có thể cảm thấy thất vọng vì OneDrive được chọn làm vị trí mặc định khi lưu. Nếu bạn thấy bất tiện khi chọn ** Máy tính ** mỗi lần, bạn có thể thay đổi ** vị trí lưu mặc định ** để ** Máy tính ** được chọn theo mặc định.</p>\n<ol>\n<li>\n<p>Nhấp vào tab ** Tệp ** để truy cập ** Hậu trường ** ** xem **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the File tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/getting_started_backstage_file.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** Tùy chọn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Options\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_change_location_menu.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tùy chọn Excel ** sẽ xuất hiện. Chọn ** Lưu <strong>,</strong> chọn hộp ** bên cạnh ** Lưu vào máy tính theo mặc định <strong>, sau đó nhấp vào ** OK </strong>. Vị trí lưu mặc định sẽ được thay đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the default save location\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_change_location_options.png\" /></p>\n</li>\n</ol>\n<h3>Tự động Phục hồi</h3>\n<p>Excel tự động lưu sổ làm việc của bạn vào một thư mục tạm thời trong khi bạn đang làm việc với chúng. Nếu bạn quên lưu các thay đổi hoặc nếu Excel gặp sự cố, bạn có thể khôi phục tệp bằng ** Tự động Phục hồi **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để sử dụng Tự động Phục hồi:",
                        content: "<ol>\n<li>Mở Excel. Nếu tìm thấy ** phiên bản lưu tự động ** của một tệp, khung ** Tài liệu ** ** Phục hồi ** sẽ xuất hiện.</li>\n<li>Bấm để ** mở ** một tập tin có sẵn. Sổ làm việc sẽ được ** phục hồi **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Document Recovery pane\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_autorecover_pane.png\" /></li>\n</ol>\n<p>Theo mặc định, Excel sẽ tự động lưu cứ sau 10 phút. Nếu bạn đang chỉnh sửa sổ làm việc dưới 10 phút, Excel có thể không tạo phiên bản lưu tự động.</p>\n<p>Nếu bạn không thấy tệp mình cần, bạn có thể duyệt tất cả các tệp được lưu tự động từ ** Backstage ** ** view <strong>. Chỉ cần chọn tab ** Tệp </strong>, nhấp vào ** Quản lý sổ làm việc <strong>, sau đó chọn ** Khôi phục sổ làm việc chưa được lưu </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Accessing all auto-saved files\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_autorecover_manage.png\" /></p>\n<h3>Xuất sổ làm việc</h3>\n<p>Theo mặc định, sổ làm việc Excel được lưu ở dạng tệp <strong>.xlsx </strong>. Tuy nhiên, có thể đôi khi bạn cần sử dụng ** loại tệp khác ** như ** PDF ** hoặc ** sổ làm việc Excel 97-2003 **. Thật dễ dàng để ** xuất ** sổ làm việc của bạn từ Excel sang nhiều loại tệp khác nhau.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để xuất sổ làm việc dưới dạng tệp PDF:",
                        content: "<p>Xuất sổ làm việc của bạn dưới dạng ** tài liệu Adobe Acrobat <strong>, thường được gọi là ** tệp PDF </strong>, có thể đặc biệt hữu ích nếu bạn đang chia sẻ sổ làm việc với người không có Excel. PDF sẽ giúp người nhận có thể xem nhưng không thể chỉnh sửa nội dung sổ làm việc của bạn.</p>\n<ol>\n<li>Nhấp vào tab ** Tệp ** để truy cập ** Hậu trường ** ** xem **.</li>\n<li>\n<p>Nhấp vào ** Xuất <strong>, sau đó chọn ** Tạo PDF/XPS </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Exporting a PDF file\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_menu.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn xuất sổ làm việc, nhập ** tên tệp <strong>, sau đó nhấp vào ** Xuất bản </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Exporting a PDF file\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_publish.png\" /></p>\n</li>\n</ol>\n<p>Theo mặc định, Excel sẽ chỉ xuất ** bảng tính ** hoạt động ** <strong>. Nếu bạn có nhiều trang tính và muốn lưu tất cả chúng vào cùng một tệp PDF, hãy nhấp vào ** Tùy chọn ** trong hộp thoại ** Save As </strong>. Hộp thoại ** Tùy chọn ** sẽ xuất hiện. Chọn ** Toàn bộ sổ làm việc <strong>, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Exporting the entire workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_options.png\" /></p>\n<p>Bất cứ khi nào bạn xuất sổ làm việc dưới dạng PDF, bạn cũng cần xem xét cách dữ liệu sổ làm việc của bạn sẽ xuất hiện trên mỗi ** trang ** của tệp PDF, giống như ** in ** sổ làm việc. Hãy truy cập bài học <a href=\"../../page-layout-and-printing/1/index.html\">Bố cục và In Trang</a> \ncủa chúng tôi để tìm hiểu thêm về những điều cần cân nhắc trước khi xuất sổ làm việc dưới dạng PDF.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Để xuất sổ làm việc sang các loại tệp khác:",
                        content: "<p>Bạn cũng có thể thấy hữu ích khi xuất sổ làm việc của mình sang các loại tệp khác, chẳng hạn như ** sổ làm việc Excel 97-2003 ** nếu bạn cần chia sẻ với những người sử dụng phiên bản Excel cũ hơn hoặc **.tệp CSV ** nếu bạn cần ** phiên bản văn bản thuần ** của sổ làm việc.</p>\n<ol>\n<li>Nhấp vào tab ** Tệp ** để truy cập ** Hậu trường ** ** xem **.</li>\n<li>\n<p>Nhấp vào ** Xuất <strong>, sau đó chọn ** Thay đổi loại tệp </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Change File Type\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_types_change.png\" /></p>\n</li>\n<li>\n<p>Chọn một ** tệp ** ** loại ** chung, sau đó nhấp vào ** Lưu ** ** Dưới dạng **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Choosing another file type\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_types_file_type.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Save As ** sẽ xuất hiện. Chọn ** vị trí ** nơi bạn muốn xuất sổ làm việc, nhập ** tên tệp <strong>, sau đó nhấp vào ** Lưu </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Saving as an Excel 97-2003 workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_types_save_as.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể sử dụng trình đơn thả xuống ** Save as type:** trong hộp thoại ** Save As ** để lưu sổ làm việc ở nhiều loại tệp khác nhau.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Using the Save As type menu to choose a file type\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_export_types_type.png\" /></p>\n<h3>Chia sẻ sổ làm việc</h3>\n<p>Excel giúp việc ** chia sẻ ** ** và cộng tác ** trên sổ làm việc bằng cách sử dụng ** OneDrive ** trở nên dễ dàng. Trước đây, nếu bạn muốn chia sẻ tệp với ai đó, bạn có thể gửi tệp đó dưới dạng tệp đính kèm email. Mặc dù thuận tiện nhưng hệ thống này cũng tạo ** nhiều phiên bản ** của cùng một tệp, điều này có thể gây khó khăn cho việc sắp xếp.</p>\n<p>Khi bạn chia sẻ sổ làm việc từ Excel, thực tế là bạn đang cấp cho người khác quyền truy cập vào ** chính xác tệp **. Điều này cho phép bạn và những người bạn chia sẻ ** chỉnh sửa cùng một sổ làm việc ** mà không cần phải theo dõi nhiều phiên bản.</p>\n<p>Để chia sẻ một sổ làm việc, trước tiên sổ làm việc đó phải được ** lưu ** ** vào ** ** của bạn ** ** OneDrive **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 11: Để chia sẻ một sổ làm việc:",
                        content: "<ol>\n<li>\n<p>Nhấp vào tab ** Tệp ** để truy cập ** Hậu trường ** ** xem <strong>, sau đó nhấp vào ** Chia sẻ </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Share\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_share_menu.png\" /></p>\n</li>\n<li>\n<p>Excel sẽ trở về chế độ xem Bình thường và mở bảng ** Chia sẻ ** ở bên phải cửa sổ. Từ đây, bạn có thể mời mọi người chia sẻ tài liệu của mình, xem danh sách những người có quyền truy cập vào tài liệu và đặt xem họ có thể chỉnh sửa hay chỉ xem tài liệu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Share panel\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/saving_sharing_share_pane.png\" /></p>\n</li>\n</ol>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_savingsharing_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Sử dụng tùy chọn ** Save As <strong>, tạo một bản sao của sổ làm việc và đặt tên là ** Thử thách thực hành tiết kiệm </strong>. Bạn có thể lưu bản sao vào một thư mục trên máy tính hoặc vào ** OneDrive ** của mình.\n3.<strong> Xuất ** sổ làm việc dưới dạng tệp ** PDF </strong>.</li>\n</ol>\n<p>/en/excel/cell-basics/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_5",
                sessionId: 67,
                title: "Bài 5: Kiến thức cơ bản về ô",
                description: "Nội dung chi tiết cho bài Bài 5: Kiến thức cơ bản về ô.",
                video: "https://www.youtube.com/embed/6mSKsaquTAM",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_cellbasics_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 5: kiến ​​thức cơ bản về ô</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 5: Khái niệm cơ bản về ô",
                        content: "<p>/en/excel/save-and-sharing-workbooks/content/</p>\n<h3>Giới thiệu</h3>\n<p>Bất cứ khi nào bạn làm việc với Excel, bạn sẽ nhập thông tin—hoặc ** nội dung <strong>—vào ** ô </strong>. Các ô là các khối xây dựng cơ bản của một bảng tính. Bạn sẽ cần tìm hiểu kiến ​​thức cơ bản về ** ô ** và ** nội dung ô ** để tính toán, phân tích và sắp xếp dữ liệu trong Excel.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về những điều cơ bản khi làm việc với ô.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Hiểu ô",
                        content: "<p>Mỗi trang tính được tạo thành từ hàng nghìn hình chữ nhật, được gọi là ** ô <strong>. Ô là ** giao điểm ** của ** hàng ** và ** cột </strong>. Nói cách khác, đó là nơi hàng và cột gặp nhau.</p>\n<p>Các cột được xác định bằng ** chữ cái ** <strong>(A, B, C)</strong>, trong khi các hàng được xác định bằng ** số (1, 2, 3)<strong>. Mỗi ô có ** tên </strong>—hoặc ** địa chỉ ô <strong>—dựa trên cột và hàng riêng. Trong ví dụ bên dưới, ô được chọn giao nhau với ** cột C ** và ** hàng 5 ** nên địa chỉ ô là ** C5 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"cell C5\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_intro_cell.png\" /></p>\n<p>Lưu ý rằng địa chỉ ô cũng xuất hiện trong ** hộp Tên ** ở góc trên cùng bên trái và ** cột ** và ** tiêu đề hàng ** của ô được ** đánh dấu ** khi ô được chọn.</p>\n<p>Bạn cũng có thể chọn ** nhiều ô ** cùng một lúc. Một nhóm ô được gọi là ** phạm vi ô <strong>. Thay vì chỉ một địa chỉ ô, bạn sẽ tham chiếu đến một phạm vi ô bằng cách sử dụng địa chỉ ô của các ô ** đầu tiên ** và ** cuối ** trong phạm vi ô, được phân tách bằng ** dấu hai chấm </strong>. Ví dụ: một phạm vi ô bao gồm các ô A1, A2, A3, A4 và A5 sẽ được viết là ** A1:A5 **. Hãy xem các phạm vi ô khác nhau dưới đây:</p>\n<ul>\n<li>\n<p>Phạm vi ô ** A1:A8<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"phạm vi ô A1:A8\" src=\"image/cellb_intro_range1.png\" /></p>\n</li>\n<li>\n<p>** Phạm vi ô ** A1:F1<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"phạm vi ô A1:F1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_intro_range2.png\" /></p>\n</li>\n<li>\n<p>** Phạm vi ô ** A1:F8<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"phạm vi ô A1:F8\" src=\"image/cellb_intro_range3.png\" />** Nếu các cột trong bảng tính của bạn được gắn nhãn bằng số thay vì chữ cái, bạn sẽ cần thay đổi ** kiểu tham chiếu ** mặc định cho Excel. Xem lại phần bổ sung của chúng tôi về <a href=\"../../what-are-reference-styles/1/index.html\">Phong cách tham chiếu là gì?</a> \nđể tìm hiểu cách thực hiện.</p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để chọn một ô:",
                        content: "<p>Để nhập hoặc chỉnh sửa nội dung ô, trước tiên bạn cần ** chọn ** ô.</p>\n<ol>\n<li>Nhấp vào ** ô ** để chọn ô đó. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D9 <strong>.\n2.</strong> đường viền ** sẽ xuất hiện xung quanh ô đã chọn và ** tiêu đề cột ** và ** tiêu đề hàng ** sẽ được đánh dấu. Ô sẽ vẫn được chọn cho đến khi bạn bấm vào một ô khác trong bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell D9\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_select.png\" /></li>\n</ol>\n<p>Bạn cũng có thể chọn các ô bằng ** phím mũi tên ** trên bàn phím.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để chọn một phạm vi ô:",
                        content: "<p>Đôi khi bạn có thể muốn chọn một nhóm ô lớn hơn hoặc một ** phạm vi ô **.</p>\n<ol>\n<li>Nhấp và kéo chuột cho đến khi tất cả ** liền kề ** ** ô ** bạn muốn chọn được ** đánh dấu <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn phạm vi ô ** B5:C18 </strong>.</li>\n<li>Nhả chuột để ** chọn ** phạm vi ô mong muốn. Các ô sẽ vẫn được chọn cho đến khi bạn bấm vào một ô khác trong bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell range B5:C18\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_select_range.png\" /></li>\n</ol>\n<h3>Nội dung ô</h3>\n<p>Mọi thông tin bạn nhập vào bảng tính sẽ được lưu trữ trong một ô. Mỗi ô có thể chứa các loại ** nội dung ** khác nhau, bao gồm ** văn bản <strong>,</strong> định dạng <strong>,</strong> công thức ** và ** hàm **.</p>\n<ul>\n<li>\n<p>** Văn bản <strong>:Các ô có thể chứa ** văn bản </strong>, chẳng hạn như chữ cái, số và ngày tháng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"content entered into cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_format_none.png\" /></p>\n</li>\n<li>\n<p>** Thuộc tính định dạng **:Các ô có thể chứa ** thuộc tính định dạng ** thay đổi cách hiển thị chữ cái, số và ngày. Ví dụ: tỷ lệ phần trăm có thể xuất hiện dưới dạng 0,15 hoặc 15%. Bạn thậm chí có thể thay đổi ** văn bản ** hoặc ** màu nền ** của ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the same cell content with different formatting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_format_table.png\" /></p>\n</li>\n<li>\n<p>** Công thức và hàm <strong>: Ô có thể chứa ** công thức ** và ** hàm ** tính toán giá trị ô. Trong ví dụ của chúng tôi,</strong> SUM(B2:B8)** thêm giá trị của từng ô trong phạm vi ô B2:B8 và hiển thị tổng số trong ô B9.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a cell containing a formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_format_formula.png\" /></p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để chèn nội dung:",
                        content: "<ol>\n<li>\n<p>Nhấp vào ** ô ** để chọn ô đó. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** F9 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell F9\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_insert_select.png\" /></p>\n</li>\n<li>\n<p>Nhập nội dung nào đó vào ô đã chọn, sau đó nhấn ** Enter ** trên bàn phím của bạn. Nội dung sẽ xuất hiện trong ** ô ** và ** công thức ** ** thanh **. Bạn cũng có thể nhập và chỉnh sửa nội dung ô trong thanh công thức.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"typing in a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_insert_done.png\" title=\"typing in a cell\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để xóa (hoặc xóa)",
                        content: "<p>nội dung ô:</p>\n<ol>\n<li>\n<p>Chọn ** ô ** có nội dung bạn muốn xóa. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn phạm vi ô ** A10:H10 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cells A10:H10\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_clear_select.png\" /></p>\n</li>\n<li>\n<p>Chọn lệnh ** Xóa ** trên tab ** Trang chủ <strong>, sau đó nhấp vào ** Xóa nội dung </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Clear Contents command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_clear_command.png\" /></p>\n</li>\n<li>\n<p>Nội dung ô sẽ bị xóa.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the cleared cell range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_clear_done.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể sử dụng phím ** Xóa ** trên bàn phím để xóa nội dung khỏi ** nhiều ô ** cùng một lúc. Phím ** Backspace ** sẽ chỉ xóa nội dung khỏi một ô mỗi lần.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để xóa ô:",
                        content: "<p>Có một sự khác biệt quan trọng giữa việc xóa nội dung của một ô và ** xóa chính ô đó <strong>. Nếu bạn xóa toàn bộ ô, các ô bên dưới nó sẽ ** dịch chuyển ** ** để điền vào chỗ trống ** và ** thay thế ** ** các ô đã xóa </strong>.</p>\n<ol>\n<li>\n<p>Chọn <strong>(các) \nô ** bạn muốn xóa. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** A10:H10 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell range A10:H10\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_delete_select.png\" /></p>\n</li>\n<li>\n<p>Chọn lệnh ** Xóa ** từ tab ** Trang chủ ** trên ** Ribbon **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Delete command on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_delete_command.png\" /></p>\n</li>\n<li>\n<p>Các ô bên dưới sẽ ** dịch chuyển ** ** lên ** và ** điền vào chỗ trống **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the shifted cells after deleting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_delete_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để sao chép và dán nội dung ô:",
                        content: "<p>Excel cho phép bạn ** sao chép ** nội dung đã được nhập vào bảng tính của bạn và ** dán ** nội dung này vào các ô khác, điều này có thể giúp bạn tiết kiệm thời gian và công sức.</p>\n<ol>\n<li>\n<p>Chọn <strong>(các) \nô ** bạn muốn ** sao chép </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** F9 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell F9\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_copy_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Sao chép ** trên tab ** Trang chủ ** hoặc nhấn ** Ctrl+C ** trên bàn phím của bạn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Copy command on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_copy_command.png\" /></p>\n</li>\n<li>\n<p>Chọn <strong>(các) \nô ** nơi bạn muốn ** dán ** nội dung. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** F12:F17 </strong>. (Các) \nô được sao chép sẽ có ** hộp nét đứt ** xung quanh chúng.![selecting a destination for the copied cell(s)\n]\n(images/cellb_copy_paste_destination.png)</p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Dán ** trên tab ** Trang chủ ** hoặc nhấn ** Ctrl+V ** trên bàn phím của bạn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Paste command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_copy_paste_comonly.png\" /></p>\n</li>\n<li>\n<p>Nội dung sẽ được ** dán ** vào các ô đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the pasted content\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_copy_paste_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Để truy cập các tùy chọn dán bổ sung:",
                        content: "<p>Bạn cũng có thể truy cập ** tùy chọn dán bổ sung <strong>, đặc biệt thuận tiện khi làm việc với các ô chứa ** công thức ** hoặc ** định dạng </strong>. Chỉ cần nhấp vào ** mũi tên thả xuống ** trên lệnh ** Dán ** để xem các tùy chọn này.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Paste command drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_paste_more.png\" /></p>\n<p>Thay vì chọn lệnh từ Ribbon, bạn có thể truy cập lệnh nhanh chóng bằng cách ** nhấp chuột phải <strong>. Chỉ cần chọn ** ô ** bạn muốn ** định dạng </strong>, sau đó nhấp chuột phải.** menu thả xuống ** sẽ xuất hiện, tại đó bạn sẽ tìm thấy một số ** lệnh ** cũng nằm trên Ribbon.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"right-clicking to access cut, copy, and paste options\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_paste_rightclick.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 11: Để cắt và dán nội dung ô:",
                        content: "<p>Không giống như sao chép và dán,<strong> sao chép ** nội dung ô,</strong> cắt ** cho phép bạn ** di chuyển ** nội dung giữa các ô.</p>\n<ol>\n<li>Chọn <strong>(các) \nô ** bạn muốn ** cắt </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** G5:G6 **.</li>\n<li>\n<p>Nhấp chuột phải và chọn lệnh ** Cut **. Bạn cũng có thể sử dụng lệnh trên tab ** Trang chủ ** hoặc nhấn ** Ctrl+X ** trên bàn phím.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Cut command from the right-click menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_cut_rightclick.png\" /></p>\n</li>\n<li>\n<p>Chọn các ô mà bạn muốn ** dán ** nội dung. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** F10:F11 **. Bây giờ, các ô đã cắt sẽ có ** hộp nét đứt ** xung quanh chúng.</p>\n</li>\n<li>\n<p>Nhấp chuột phải và chọn lệnh ** Dán **. Bạn cũng có thể sử dụng lệnh trên tab ** Trang chủ ** hoặc nhấn ** Ctrl+V ** trên bàn phím.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pasting the cut cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_paste_rightclickcommand.png\" /></p>\n</li>\n<li>\n<p>Nội dung cắt sẽ được ** xóa ** khỏi các ô ban đầu và ** dán ** vào các ô đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the pasted cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_paste_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 12: Để kéo và thả ô:",
                        content: "<p>Thay vì cắt, sao chép và dán, bạn có thể ** kéo và thả ** ô để di chuyển nội dung của chúng.</p>\n<ol>\n<li>Chọn <strong>(các) \nô ** bạn muốn ** di chuyển </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** H4:H12 **.</li>\n<li>\n<p>Di chuột qua ** đường viền ** của (các) \nô đã chọn cho đến khi chuột chuyển thành ** con trỏ có bốn mũi tên **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hovering over the border of a selected cell range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_drag_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo các ô đến ** mong muốn ** ** vị trí <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chuyển chúng sang ** G4:G12 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dragging the cells to a new location\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_drag_during.png\" /></p>\n</li>\n<li>\n<p>Thả chuột. Các ô sẽ được ** thả ** ở vị trí đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the dropped cells in their new location\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_drag_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 13: Để sử dụng núm điều khiển điền:",
                        content: "<p>Nếu bạn đang sao chép nội dung ô sang các ô liền kề trong cùng một hàng hoặc cột,** điền vào ** là một lựa chọn thay thế phù hợp cho lệnh sao chép và dán.</p>\n<ol>\n<li>\n<p>Chọn ** ô (các)** chứa nội dung bạn muốn sử dụng, sau đó di chuột qua góc dưới bên phải của ô để ** bộ điều khiển điền ** xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_fill_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo ** bộ điều khiển điền ** cho đến khi tất cả các ô bạn muốn điền đều được chọn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** G13:G17 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dragging the fill handle down\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_fill_down.png\" /></p>\n</li>\n<li>\n<p>Nhả chuột để ** điền ** các ô đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the filled cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_fill_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 14: Để tiếp tục một loạt bài có núm điều khiển điền:",
                        content: "<p>Tay cầm điền cũng có thể được sử dụng để ** tiếp tục ** ** một chuỗi <strong>. Bất cứ khi nào nội dung của một hàng hoặc cột tuân theo một thứ tự tuần tự, như ** số ** </strong>(1, 2, 3)<strong> hoặc ** ngày ** </strong>(Thứ Hai, Thứ Ba, Thứ Tư)**, bộ điều khiển điền có thể đoán điều gì sẽ xảy ra tiếp theo trong chuỗi. Trong hầu hết các trường hợp, bạn sẽ cần chọn ** nhiều ô ** trước khi sử dụng núm điều khiển điền để giúp Excel xác định thứ tự chuỗi. Chúng ta hãy xem một ví dụ:</p>\n<ol>\n<li>Chọn phạm vi ô chứa chuỗi bạn muốn tiếp tục. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** E4:G4 **.</li>\n<li>\n<p>Nhấp và kéo núm điều khiển điền để tiếp tục chuỗi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"continuing a series with the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_fillseries.png\" /></p>\n</li>\n<li>\n<p>Thả chuột. Nếu Excel hiểu chuỗi này thì nó sẽ được tiếp tục trong các ô đã chọn. Trong ví dụ của chúng tôi, Excel đã thêm ** Phần 4 <strong>,</strong> Phần 5 ** và ** Phần 6 ** vào ** H4:J4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the finished series\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cellb_fillseries_done.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể ** bấm đúp ** vào ô điều khiển điền thay vì nhấp và kéo. Điều này có thể hữu ích với các bảng tính lớn hơn, nơi việc nhấp và kéo có thể gặp khó khăn.</p>\n<p>Xem video bên dưới để biết ví dụ về cách bấm đúp vào núm điều khiển điền.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_cellbasics_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Chọn ô ** D6 ** và nhập ** hlee <strong>.\n3.</strong> Xóa nội dung ** ở hàng 14.\n4.** Xóa ** cột G.</li>\n<li>Sử dụng ** cắt và dán ** hoặc ** kéo và thả **, di chuyển nội dung của hàng 18 sang hàng 14.</li>\n<li>Sử dụng ** bộ điều khiển điền ** để đặt dấu X vào các ô F9:F17.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Cell Basics Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/screen_shot_2015-11-20_at_1.17.06_pm.png\" /></li>\n</ol>\n<p>/en/excel/modifying-columns-rows-and-cells/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_6",
                sessionId: 67,
                title: "Bài 6: Sửa đổi cột, hàng và ô",
                description: "Nội dung chi tiết cho bài Bài 6: Sửa đổi cột, hàng và ô.",
                video: "https://www.youtube.com/embed/9s0OdXiuqL0",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 6: sửa-cột-hàng-ô</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 6: Sửa đổi Cột, Hàng và Ô",
                        content: "<p>/en/excel/cell-basics/content/</p>\n<h3>Giới thiệu</h3>\n<p>Theo mặc định, mọi hàng và cột của sổ làm việc mới được đặt có cùng ** chiều cao ** và ** chiều rộng <strong>. Excel cho phép bạn sửa đổi chiều rộng của cột và chiều cao của hàng theo nhiều cách khác nhau, bao gồm ** gói văn bản ** và ** hợp nhất các ô </strong>.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách sửa đổi cột, hàng và ô.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để sửa đổi độ rộng cột:",
                        content: "<p>Trong ví dụ bên dưới của chúng tôi, cột C quá hẹp để hiển thị tất cả nội dung trong các ô này. Chúng tôi có thể hiển thị tất cả nội dung này bằng cách thay đổi ** chiều rộng ** của cột C.</p>\n<ol>\n<li>\n<p>Đặt chuột lên ** dòng cột ** trong ** tiêu đề cột ** để con trỏ trở thành ** mũi tên kép **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"positioning the mouse over the column line\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_colwidth_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo chuột để ** tăng ** hoặc ** giảm ** chiều rộng cột.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"increasing the column width\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_colwidth_during.png\" /></p>\n</li>\n<li>\n<p>Thả chuột.** chiều rộng cột ** sẽ được thay đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the resized column\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_colwidth_done.png\" /></p>\n</li>\n</ol>\n<p>Với dữ liệu số, ô sẽ hiển thị ** dấu thăng **(#######) \nnếu cột quá hẹp. Chỉ cần ** tăng chiều rộng cột ** để hiển thị dữ liệu.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để Tự động khớp chiều rộng cột:",
                        content: "<p>Tính năng ** AutoFit ** sẽ cho phép bạn đặt chiều rộng của cột để vừa với nội dung của nó ** tự động **.</p>\n<ol>\n<li>\n<p>Đặt chuột lên ** dòng cột ** trong ** tiêu đề cột ** để con trỏ trở thành ** mũi tên kép **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"autofitting the column width\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_colwidth_auto_start.png\" /></p>\n</li>\n<li>\n<p>Bấm đúp chuột.** độ rộng cột ** sẽ được thay đổi tự động để phù hợp với nội dung.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the autofit column width\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_colwidth_auto_done.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể Tự động điều chỉnh chiều rộng cho nhiều cột cùng lúc. Chỉ cần chọn các cột bạn muốn Tự động khớp, sau đó chọn lệnh ** Tự động khớp chiều rộng cột ** từ trình đơn thả xuống <strong>Định dạng ** trên tab ** Trang chủ </strong>. Phương pháp này cũng có thể được sử dụng cho ** chiều cao hàng **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"autofitting column width for multiple columns\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_column_width_auto.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để sửa đổi chiều cao hàng:",
                        content: "<ol>\n<li>\n<p>Định vị ** con trỏ ** trên ** dòng hàng ** để con trỏ trở thành ** mũi tên kép **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"hovering over a row line\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_rowheight_start.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo chuột để ** tăng ** hoặc ** giảm ** chiều cao của hàng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"decreasing the row height \" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_rowheight_during.png\" /></p>\n</li>\n<li>\n<p>Thả chuột.** chiều cao ** của hàng đã chọn sẽ được thay đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the new row height\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_rowheight_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để sửa đổi tất cả các hàng hoặc cột:",
                        content: "<p>Thay vì thay đổi kích thước hàng và cột riêng lẻ, bạn có thể sửa đổi chiều cao và chiều rộng của từng hàng và cột cùng một lúc. Phương pháp này cho phép bạn đặt ** kích thước đồng đều ** cho mỗi hàng và cột trong bảng tính của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ đặt ** chiều cao hàng đồng đều **.</p>\n<ol>\n<li>\n<p>Xác định vị trí và nhấp vào nút ** Chọn tất cả ** ngay bên dưới hộp ** tên ** để chọn mọi ô trong trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting all cells in a worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_selectall.png\" /></p>\n</li>\n<li>\n<p>Đặt chuột lên ** dòng ** để con trỏ trở thành ** mũi tên kép **.</p>\n</li>\n<li>Nhấp và kéo chuột để ** tăng ** hoặc ** giảm ** chiều cao của hàng, sau đó thả chuột khi đã hài lòng. Chiều cao hàng sẽ được thay đổi cho toàn bộ bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the new, uniform row height\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_selectall_done.png\" /></li>\n</ol>\n<h3>Chèn, xóa, di chuyển và ẩn</h3>\n<p>Sau khi làm việc với sổ làm việc được một thời gian, bạn có thể thấy rằng bạn muốn ** chèn ** cột hoặc hàng mới,<strong> xóa ** các hàng hoặc cột nhất định,</strong> di chuyển ** chúng đến một vị trí khác trong trang tính hoặc thậm chí ** ẩn ** chúng.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để chèn hàng:",
                        content: "<ol>\n<li>\n<p>Chọn ** hàng ** ** tiêu đề ** bên dưới nơi bạn muốn hàng mới xuất hiện. Trong ví dụ này, chúng tôi muốn chèn một hàng giữa hàng 4 và 5, vì vậy chúng tôi sẽ chọn ** hàng 5 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting row 5\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insertrow_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Chèn ** trên tab ** Trang chủ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Insert command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insertrow_command.png\" /></p>\n</li>\n</ol>\n<p>3.** hàng mới ** sẽ xuất hiện ** phía trên ** hàng đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the newly inserted row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insertrow_done.png\" /></p>\n<p>Khi chèn hàng, cột hoặc ô mới, bạn sẽ thấy ** biểu tượng cọ vẽ ** bên cạnh các ô được chèn. Nút này cho phép bạn chọn cách Excel định dạng các ô này. Theo mặc định, Excel định dạng các hàng được chèn có định dạng giống với các ô ở hàng trên. Để truy cập các tùy chọn bổ sung, hãy di chuột qua biểu tượng, sau đó nhấp vào ** mũi tên thả xuống **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing more insert formatting options\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insert_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để chèn cột:",
                        content: "<ol>\n<li>\n<p>Chọn ** cột ** ** tiêu đề ** ở bên phải nơi bạn muốn cột mới xuất hiện. Ví dụ: nếu bạn muốn chèn một cột giữa cột D và E, hãy chọn ** cột E **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting column E\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insertcol_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Chèn ** trên tab ** Trang chủ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Insert command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insertcol_command.png\" /></p>\n</li>\n</ol>\n<p>3.** cột mới ** sẽ xuất hiện ** ở bên trái ** của cột đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the newly inserted column\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insertcol_done.png\" /></p>\n<p>Khi chèn hàng và cột, hãy đảm bảo chọn toàn bộ hàng hoặc cột bằng cách nhấp vào ** tiêu đề **. Nếu bạn chỉ chọn một ô trong hàng hoặc cột, lệnh ** Insert ** sẽ chỉ chèn một ô mới.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để xóa một hàng hoặc cột:",
                        content: "<p>Thật dễ dàng để xóa một hàng hoặc cột mà bạn không cần nữa. Trong ví dụ của chúng tôi, chúng tôi sẽ xóa một hàng, nhưng bạn có thể xóa một cột theo cách tương tự.</p>\n<ol>\n<li>\n<p>Chọn ** hàng ** bạn muốn xóa. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** hàng 9 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting row 9\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_delete_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Xóa ** trên tab ** Trang chủ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the delete command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_delete_command.png\" /></p>\n</li>\n</ol>\n<p>3.<strong> Hàng đã chọn ** sẽ bị xóa và những hàng xung quanh nó sẽ ** chuyển đổi </strong>. Trong ví dụ của chúng tôi,<strong> hàng ** ** 10 ** đã di chuyển lên nên bây giờ là ** hàng 9 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the shifted rows after deleting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_delete_done.png\" /></p>\n<p>Điều quan trọng là phải hiểu sự khác biệt giữa ** xóa ** một hàng hoặc cột và chỉ ** xóa ** ** nội dung của nó <strong>. Nếu bạn muốn xóa ** nội dung ** khỏi một hàng hoặc cột mà không khiến những nội dung khác phải dịch chuyển, hãy ** nhấp chuột phải vào một ** ** tiêu đề </strong>, sau đó chọn ** Xóa nội dung ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clearing the contents of a row instead of deleting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_delete_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Để di chuyển một hàng hoặc cột:",
                        content: "<p>Đôi khi bạn có thể muốn ** di chuyển ** một cột hoặc hàng để sắp xếp lại nội dung trang tính của mình. Trong ví dụ của chúng tôi, chúng tôi sẽ di chuyển một cột, nhưng bạn có thể di chuyển một hàng theo cách tương tự.</p>\n<ol>\n<li>\n<p>Chọn ** tiêu đề cột ** mong muốn cho cột bạn muốn di chuyển.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a column to move\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_move_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Cut ** trên tab ** Home ** hoặc nhấn ** Ctrl+X ** trên bàn phím của bạn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Cut command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_move_cut.png\" /></p>\n</li>\n<li>\n<p>Chọn ** cột ** ** tiêu đề ** ở bên phải nơi bạn muốn di chuyển cột. Ví dụ: nếu bạn muốn di chuyển một cột giữa cột E và F, hãy chọn ** cột F **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting an adjacent column to insert the cut cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_move_selectcol.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** Chèn ** trên tab ** Trang chủ **, sau đó chọn ** Chèn ô cắt ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"inserting the cut cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_insert_command.png\" /></p>\n</li>\n<li>\n<p>Cột sẽ được ** di chuyển ** đến vị trí đã chọn và các cột xung quanh nó sẽ dịch chuyển.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the moved column in its new location\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_move_done.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể truy cập các lệnh ** Cut ** và ** Insert ** bằng cách nhấp chuột phải và chọn ** mong muốn ** ** lệnh ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"accessing commands from the right-click menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_move_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 11: Để ẩn và hiện một hàng hoặc cột:",
                        content: "<p>Đôi khi, bạn có thể muốn ** so sánh ** các hàng hoặc cột nhất định mà không thay đổi cách tổ chức trang tính của mình. Để thực hiện việc này, Excel cho phép bạn ** ẩn ** hàng và cột nếu cần. Trong ví dụ của chúng tôi, chúng tôi sẽ ẩn một số cột nhưng bạn có thể ẩn các hàng theo cách tương tự.</p>\n<ol>\n<li>\n<p>Chọn ** cột ** bạn muốn ** ẩn <strong>, nhấp chuột phải, sau đó chọn </strong>Ẩn ** từ menu ** định dạng **. Trong ví dụ của chúng tôi, chúng tôi sẽ ẩn các cột C, D và E.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the hide columns command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_hide_command.png\" /></p>\n</li>\n<li>\n<p>Các cột sẽ bị ** ẩn <strong>.</strong> Dòng cột màu xanh lá cây ** cho biết vị trí của các cột bị ẩn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the hidden columns\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_hide_hidden.png\" /></p>\n</li>\n<li>\n<p>Để ** bỏ ẩn ** các cột, hãy chọn các cột ở ** cả hai ** ** cạnh ** của các cột bị ẩn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn các cột ** B ** và ** F <strong>. Sau đó nhấp chuột phải và chọn ** Bỏ ẩn ** từ trình đơn ** định dạng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the columns adjacent to the hidden columns\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_hide_unhide.png\" /></p>\n</li>\n<li>\n<p>Các cột bị ẩn sẽ xuất hiện trở lại.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the unhidden columns\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_hide_unhidden.png\" /></p>\n</li>\n</ol>\n<h3>Ngắt dòng văn bản và hợp nhất các ô</h3>\n<p>Bất cứ khi nào bạn có quá nhiều nội dung ô cần hiển thị trong một ô, bạn có thể quyết định ** ngắt văn bản ** hoặc ** hợp nhất ** ô thay vì đổi kích thước cột. Việc ngắt dòng văn bản sẽ tự động sửa đổi ** chiều cao hàng ** của ô, cho phép hiển thị nội dung ô ** trên nhiều dòng <strong>. Việc hợp nhất cho phép bạn kết hợp một ô với các ô trống liền kề để tạo ** một ô lớn </strong>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 12: Để ngắt dòng văn bản trong ô:",
                        content: "<ol>\n<li>Chọn các ô bạn muốn ngắt dòng. Trong ví dụ này, chúng tôi sẽ chọn các ô trong ** cột C **.</li>\n<li>\n<p>Nhấp vào lệnh ** Ngắt văn bản ** trên tab ** Trang chủ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Wrap text command on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_wrap_command.png\" /></p>\n</li>\n<li>\n<p>Văn bản trong các ô đã chọn sẽ được ** ngắt **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the text wrapped within column C\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_wrap_done.png\" /></p>\n</li>\n</ol>\n<p>Nhấp lại vào lệnh ** Bọc văn bản ** để ** mở gói ** văn bản.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 13: Để hợp nhất các ô bằng lệnh Hợp nhất &amp; Trung tâm:",
                        content: "<ol>\n<li>Chọn ** phạm vi ô ** bạn muốn hợp nhất. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** A1:F1 **.</li>\n<li>\n<p>Nhấp vào lệnh ** Hợp nhất &amp; Trung tâm ** trên tab ** Trang chủ <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn phạm vi ô ** A1:F1 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cells to merge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_merge_select.png\" /></p>\n</li>\n<li>\n<p>Các ô đã chọn sẽ được ** hợp nhất ** và văn bản sẽ được ** căn giữa **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the newly merged cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_merge_don.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 14: Để truy cập các tùy chọn hợp nhất bổ sung:",
                        content: "<p>Nếu bạn nhấp vào mũi tên thả xuống bên cạnh lệnh ** Hợp nhất &amp; Trung tâm ** trên tab ** Trang chủ **, trình đơn thả xuống ** Hợp nhất ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"other cell merge options\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_merge_more.png\" /></p>\n<p>Từ đây, bạn có thể chọn:</p>\n<ul>\n<li>\n<p>** Hợp nhất &amp; Căn giữa **: Thao tác này sẽ hợp nhất các ô đã chọn thành ** một ô ** và ** giữa ** văn bản.</p>\n</li>\n<li>\n<p>** Hợp nhất khắp <strong>: Thao tác này sẽ hợp nhất các ô đã chọn thành ** ô lớn hơn ** trong khi vẫn tách biệt từng ** hàng </strong>.</p>\n</li>\n<li>\n<p>** Hợp nhất Ô**: Thao tác này sẽ hợp nhất các ô đã chọn thành một ô nhưng ** không căn giữa ** văn bản.</p>\n</li>\n<li>\n<p>** Hủy hợp nhất các ô **: Thao tác này sẽ hủy hợp nhất các ô đã chọn.</p>\n</li>\n</ul>\n<p>Hãy cẩn thận khi sử dụng tính năng này. Nếu bạn hợp nhất nhiều ô chứa dữ liệu, Excel sẽ chỉ giữ lại nội dung của ô phía trên bên trái và loại bỏ mọi thứ khác.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 15: Căn giữa vùng chọn",
                        content: "<p>Việc hợp nhất có thể hữu ích cho việc tổ chức dữ liệu của bạn nhưng nó cũng có thể gây ra các vấn đề sau này. Ví dụ: có thể khó di chuyển, sao chép và dán nội dung từ các ô đã hợp nhất. Một cách thay thế tốt cho việc hợp nhất là ** Center Across Selection **, cách này tạo ra hiệu ứng tương tự mà không thực sự kết hợp các ô.</p>\n<p>Xem video bên dưới để tìm hiểu lý do tại sao bạn nên sử dụng Center Across Selection thay vì hợp nhất các ô.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 16: Để sử dụng Center Across Selection:",
                        content: "<ol>\n<li>Chọn phạm vi ô mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** A1:F1 <strong>.</strong> Lưu ý **: Nếu bạn đã hợp nhất các ô này, bạn nên ** hủy hợp nhất ** ** chúng ** trước khi tiếp tục bước 2.</li>\n<li>\n<p>Nhấp vào ** mũi tên nhỏ ** ở góc dưới bên phải của nhóm ** Căn chỉnh ** trên tab ** Trang chủ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Alignment group pop-out arrow\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_centeracross_arrow_call.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện. Xác định vị trí và chọn trình đơn thả xuống ** Ngang <strong>, chọn ** Center Across Selection </strong>, sau đó nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting Center Across Selection\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_centeracross_dialog.png\" /></p>\n</li>\n<li>\n<p>Nội dung sẽ được căn giữa trên phạm vi ô đã chọn. Như bạn có thể thấy, điều này tạo ra kết quả trực quan tương tự như việc hợp nhất và căn giữa, nhưng nó giữ nguyên từng ô trong A1:F1.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the text centered across the selection\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/mod_centeracross_done.png\" /></p>\n</li>\n</ol>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_modifyingcells_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.\n2.** Tự động điều chỉnh độ rộng cột ** cho toàn bộ sổ làm việc.</li>\n<li>Sửa đổi ** chiều cao hàng ** cho hàng 3 đến 14 thành ** 22,5 (30 pixel)<strong>.\n4.</strong> Xóa ** hàng 10.\n5.<strong> Chèn ** một cột vào bên trái cột C. Nhập ** LIÊN HỆ THỨ HAI ** vào ô ** C2 </strong>.</li>\n<li>Đảm bảo ô ** C2 ** vẫn được chọn và chọn ** Gói văn bản <strong>.\n7.</strong> Hợp nhất và căn giữa ** ô A1:F1.\n8.<strong>Ẩn ** cột </strong>Địa chỉ thanh toán ** và <strong>Điện thoại </strong>.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Modifying Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/screen_shot_2015-11-20_at_2.44.54_pm.png\" /></li>\n</ol>\n<p>/en/excel/formatting-cells/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_7",
                sessionId: 67,
                title: "Bài 7: Định dạng ô",
                description: "Nội dung chi tiết cho bài Bài 7: Định dạng ô.",
                video: "https://www.youtube.com/embed/etAMC0KRuBE",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_formattingcells_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 7: định dạng ô</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 7: Định dạng ô",
                        content: "<p>/en/excel/modifying-columns-rows-and-cells/content/</p>\n<h3>Giới thiệu</h3>\n<p>Theo mặc định, tất cả nội dung ô đều sử dụng ** định dạng ** giống nhau, điều này có thể gây khó khăn khi đọc sổ làm việc có nhiều thông tin. Định dạng cơ bản có thể tùy chỉnh ** giao diện ** sổ làm việc của bạn, cho phép bạn thu hút sự chú ý đến các phần cụ thể và làm cho nội dung của bạn dễ xem và dễ hiểu hơn.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về định dạng ô trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để thay đổi kích thước phông chữ:",
                        content: "<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font-size-select-cells.png\" /></p>\n</li>\n<li>\n<p>Trên tab ** Trang chủ <strong>, nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Cỡ chữ </strong>, sau đó chọn ** cỡ chữ ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** 24 ** để làm cho văn bản ** lớn hơn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a font size in the dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font-size-dropdown-menu.png\" /></p>\n</li>\n<li>\n<p>Văn bản sẽ thay đổi thành ** cỡ chữ đã chọn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cell is a larger font size now\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font-size-after-size-change.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể sử dụng lệnh ** Tăng phông chữ ** ** Kích thước ** và ** Giảm phông chữ ** ** Kích thước ** hoặc nhập ** cỡ phông chữ tùy chỉnh ** bằng bàn phím.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The custom font box, increase font size button, and decrease font size button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font-size-increase-and-decrease.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để thay đổi phông chữ:",
                        content: "<p>Theo mặc định, phông chữ của mỗi sổ làm việc mới được đặt thành Calibri. Tuy nhiên, Excel cung cấp nhiều phông chữ khác mà bạn có thể sử dụng để tùy chỉnh văn bản ô của mình. Trong ví dụ bên dưới, chúng tôi sẽ định dạng ** ô tiêu đề ** để giúp phân biệt nó với phần còn lại của trang tính.</p>\n<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font_type_select_cells.png\" /></p>\n</li>\n<li>\n<p>Trên tab ** Trang chủ <strong>, nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Phông chữ </strong>, sau đó chọn ** phông chữ ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Century Gothic **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a font in the dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font_type_dropdown_menu.png\" /></p>\n</li>\n<li>\n<p>Văn bản sẽ thay đổi thành ** phông chữ đã chọn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cell is a different font now\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font_type_after_change.png\" /></p>\n</li>\n</ol>\n<p>Khi tạo sổ làm việc tại nơi làm việc, bạn sẽ muốn chọn phông chữ dễ đọc. Cùng với Calibri, các phông chữ đọc tiêu chuẩn bao gồm Cambria, Times New Roman và Arial.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để thay đổi màu phông chữ:",
                        content: "<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font_color_select_cells.png\" /></p>\n</li>\n<li>\n<p>Trên tab ** Trang chủ <strong>, nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Màu phông chữ </strong>, sau đó chọn ** phông chữ ** ** màu ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Xanh **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a color in the dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font_color_dropdown_menu.png\" /></p>\n</li>\n<li>\n<p>Văn bản sẽ thay đổi thành ** màu phông chữ đã chọn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cell is a different color now\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font_color_after_change.png\" /></p>\n</li>\n</ol>\n<p>Chọn ** Màu khác ** ở cuối menu để truy cập các tùy chọn màu bổ sung. Chúng tôi đã thay đổi màu phông chữ thành màu hồng tươi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting more colors.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font-color-more-colors-standard.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để sử dụng các lệnh In đậm, Nghiêng và Gạch chân:",
                        content: "<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/biu-select-cells.png\" /></p>\n</li>\n<li>\n<p>Bấm vào lệnh In đậm (<strong> B </strong>), Nghiêng (<em>I</em>) \nhoặc Gạch chân (U) \ntrên tab ** Trang chủ <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ làm cho các ô được chọn ** đậm </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Bold button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/font-biu-buttons.png\" /></p>\n</li>\n</ol>\n<p>3.** kiểu đã chọn ** sẽ được áp dụng cho văn bản.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cell is now bold\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/biu-after-change.png\" /></p>\n<p>Bạn cũng có thể nhấn ** Ctrl+B ** trên bàn phím để tô đậm ** văn bản đã chọn,<strong> Ctrl+I ** để áp dụng ** chữ in nghiêng ** và ** Ctrl+U ** để áp dụng ** gạch chân </strong>.</p>\n<h3>Viền ô và tô màu</h3>\n<p>**Đường viền ô ** và ** tô màu ** cho phép bạn tạo ranh giới rõ ràng và xác định cho các phần khác nhau trong trang tính của mình. Dưới đây, chúng tôi sẽ thêm đường viền ô và tô màu cho ** ô tiêu đề ** để giúp phân biệt chúng với phần còn lại của trang tính.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để thêm màu tô:",
                        content: "<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/fill-color-select-cells2.png\" /></p>\n</li>\n<li>\n<p>Trên tab ** Trang chủ <strong>, nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Tô màu </strong>, sau đó chọn ** màu tô ** bạn muốn sử dụng. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn màu xám đậm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Fill Color dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/fill-color-dropdown-menu2.png\" /></p>\n</li>\n</ol>\n<p>3.** Màu tô đã chọn ** sẽ xuất hiện trong các ô đã chọn. Chúng tôi cũng đã thay đổi ** màu phông chữ ** thành ** màu trắng ** để dễ đọc hơn với màu tô tối này.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The fill color has been applied to the selected cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/fill-color-after-change3.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để thêm đường viền:",
                        content: "<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/borders-select-cells2.png\" /></p>\n</li>\n<li>\n<p>Trên tab ** Trang chủ <strong>, hãy nhấp vào ** mũi tên thả xuống ** bên cạnh lệnh ** Biên giới </strong>, sau đó chọn ** viền ** ** kiểu ** bạn muốn sử dụng. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn hiển thị ** Tất cả các đường viền **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Borders dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/borders-dropdown-menu2.png\" /></p>\n</li>\n</ol>\n<p>3.** kiểu đường viền đã chọn ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The borders have been applied to the selected cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/borders-after-change2.png\" /></p>\n<p>Bạn có thể vẽ đường viền và thay đổi ** kiểu đường ** và ** màu ** của đường viền bằng công cụ ** Vẽ Đường viền ** ở cuối trình đơn thả xuống Đường viền.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Draw Borders submenu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/format_border_splat.png\" /></p>\n<h3>Kiểu ô</h3>\n<p>Thay vì định dạng ô theo cách thủ công, bạn có thể sử dụng ** kiểu ô được thiết kế sẵn ** của Excel. Kiểu ô là cách nhanh chóng để đưa định dạng chuyên nghiệp vào các phần khác nhau trong sổ làm việc của bạn, như ** tiêu đề ** và ** tiêu đề **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để áp dụng kiểu ô:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ áp dụng kiểu ô mới cho các ô ** tiêu đề ** và ** tiêu đề ** ** ** hiện có của chúng tôi.</p>\n<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cell-style-select-cells2.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh ** kiểu ô ** trên tab ** Trang chủ **, sau đó chọn ** kiểu mong muốn ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The cell styles dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cell-style-dropdown-menu.png\" /></p>\n</li>\n</ol>\n<p>3.** kiểu ô đã chọn ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The cell style has been applied to the selected cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/cell-style-after-change.png\" /></p>\n<p>Việc áp dụng kiểu ô sẽ ** thay thế ** mọi định dạng ô hiện có ngoại trừ việc căn chỉnh văn bản. Bạn có thể không muốn sử dụng kiểu ô nếu bạn đã thêm nhiều định dạng vào sổ làm việc của mình.</p>\n<h3>Căn chỉnh văn bản</h3>\n<p>Theo mặc định, mọi văn bản được nhập vào trang tính của bạn sẽ được căn chỉnh ở phía dưới bên trái của ô, trong khi mọi số sẽ được căn chỉnh ở phía dưới bên phải. Việc thay đổi ** căn chỉnh ** nội dung ô cho phép bạn chọn cách hiển thị nội dung trong bất kỳ ô nào, điều này có thể giúp nội dung ô của bạn dễ đọc hơn.</p>\n<p>Nhấp vào mũi tên trong trình chiếu bên dưới để tìm hiểu thêm về các tùy chọn căn chỉnh văn bản khác nhau.</p>\n<ul>\n<li>\n<p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Ảnh chụp màn hình của Excel 2013\" src=\"image/format_slide1.png\" /><strong> Left Align </strong>: Căn chỉnh nội dung theo viền trái của ô</p>\n</li>\n<li>\n<p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Ảnh chụp màn hình của Excel 2013\" src=\"image/format_slide2.png\" /><strong> Căn giữa </strong>: Căn chỉnh nội dung một khoảng cách bằng nhau từ viền trái và phải của ô</p>\n</li>\n<li>\n<p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Ảnh chụp màn hình của Excel 2013\" src=\"image/format_slide3.png\" /><strong> Căn lề phải </strong>: Căn chỉnh nội dung theo viền bên phải của ô</p>\n</li>\n<li>\n<p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Ảnh chụp màn hình của Excel 2013\" src=\"image/format_slide4.png\" /><strong> Căn chỉnh trên cùng:</strong> Căn chỉnh nội dung theo đường viền trên cùng của ô</p>\n</li>\n<li>\n<p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Ảnh chụp màn hình của Excel 2013\" src=\"image/format_slide5.png\" /><strong> Căn chỉnh giữa </strong>: Căn chỉnh nội dung một khoảng cách bằng nhau từ viền trên và viền dưới của ô</p>\n</li>\n<li>\n<p><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Ảnh chụp màn hình của Excel 2013\" src=\"image/format_slide6.png\" /><strong> Căn chỉnh đáy </strong>: Căn chỉnh nội dung theo viền dưới cùng của ô</p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Để thay đổi căn chỉnh văn bản theo chiều ngang:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ sửa đổi cách căn chỉnh ô ** tiêu đề ** để tạo giao diện bóng bẩy hơn và phân biệt rõ hơn với phần còn lại của trang tính.</p>\n<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/horizontal-align-select-cells.png\" /></p>\n</li>\n<li>\n<p>Chọn một trong ba lệnh ** căn chỉnh ngang ** trên tab ** Trang chủ <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Căn giữa </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The alignment command buttons\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/horizontal-align-buttons.png\" /></p>\n</li>\n<li>\n<p>Văn bản sẽ ** sắp xếp lại **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cells are now center aligned.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/horizontal-align-after-change.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 11: Để thay đổi căn chỉnh văn bản theo chiều dọc:",
                        content: "<ol>\n<li>\n<p>Chọn **(các) \nô ** bạn muốn sửa đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/vertical-align-select-cells.png\" /></p>\n</li>\n<li>\n<p>Chọn một trong ba lệnh ** căn chỉnh dọc ** trên tab ** Trang chủ <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Căn chỉnh giữa </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The alignment command buttons\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/vertical-align-buttons.png\" /></p>\n</li>\n<li>\n<p>Văn bản sẽ ** sắp xếp lại **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cells are now middle aligned.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/vertical-align-after-change.png\" /></p>\n</li>\n</ol>\n<p>Bạn có thể áp dụng ** cả ** cài đặt căn chỉnh dọc và ngang cho bất kỳ ô nào.</p>\n<h3>Họa sĩ định dạng</h3>\n<p>Nếu bạn muốn sao chép định dạng từ ô này sang ô khác, bạn có thể sử dụng lệnh ** Format Painter ** trên tab ** Home **. Khi bạn bấm vào Format Painter, nó sẽ sao chép tất cả định dạng từ ô đã chọn. Sau đó, bạn có thể ** nhấp và kéo ** qua bất kỳ ô nào mà bạn muốn dán định dạng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Screenshot of Format Painter command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/format_painter.png\" /></p>\n<p>Xem video bên dưới để tìm hiểu hai cách khác nhau để sử dụng Format Painter.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_formattingcells_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab bảng tính ** Thử thách ** ở phía dưới bên trái của bảng tính.</li>\n<li>Thay đổi ** kiểu ô ** trong các ô ** A2:H2 ** thành ** Dấu 3 **.</li>\n<li>Thay đổi ** cỡ chữ ** của hàng 1 thành ** 36 ** và cỡ chữ cho các hàng còn lại thành ** 18 <strong>.\n5.</strong>Đậm ** và ** gạch chân ** văn bản ở hàng 2.\n6.<strong> Thay đổi phông chữ ** của hàng 1 thành phông chữ bạn chọn.\n7.</strong> Thay đổi phông chữ ** của các hàng còn lại thành phông chữ khác mà bạn chọn.</li>\n<li>Thay đổi ** màu phông chữ ** của hàng 1 thành màu bạn chọn.</li>\n<li>Chọn tất cả văn bản trong trang tính, sau đó thay đổi ** căn chỉnh ngang ** thành căn giữa và ** căn dọc ** thành căn giữa.</li>\n<li>Khi bạn hoàn tất, bảng tính của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formatting Cells Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/formatting_cells_challenge_screenshot.png\" /></li>\n</ol>\n<p>/en/excel/hiểu-số-định dạng/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_8",
                sessionId: 67,
                title: "Bài 8: Hiểu định dạng số",
                description: "Nội dung chi tiết cho bài Bài 8: Hiểu định dạng số.",
                video: "https://www.youtube.com/embed/fjyOG7Ls7BA",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 8: hiểu-định dạng số</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 8: Tìm hiểu định dạng số",
                        content: "<p>/en/excel/formatting-cells/content/</p>\n<h3>Các định dạng số là gì?</h3>\n<p>Bất cứ khi nào bạn làm việc với bảng tính, bạn nên sử dụng ** định dạng số ** thích hợp cho dữ liệu của mình. Các định dạng số cho bảng tính của bạn biết chính xác loại dữ liệu bạn đang sử dụng, như tỷ lệ phần trăm (%), tiền tệ ($), thời gian, ngày tháng, v.v.</p>\n<p>Hãy xem video bên dưới để tìm hiểu thêm về định dạng số trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Tại sao nên sử dụng định dạng số?",
                        content: "<p>Các định dạng số không chỉ giúp bảng tính của bạn dễ đọc hơn mà còn giúp sử dụng dễ dàng hơn. Khi áp dụng định dạng số, bạn sẽ cho bảng tính biết chính xác ** loại giá trị ** nào được lưu trữ trong một ô. Ví dụ: định dạng ** ngày ** cho bảng tính biết rằng bạn đang nhập ** ngày theo lịch cụ thể **. Điều này cho phép bảng tính hiểu rõ hơn dữ liệu của bạn, điều này có thể giúp đảm bảo rằng dữ liệu của bạn luôn nhất quán và các công thức của bạn được tính toán chính xác.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Áp dụng định dạng số",
                        content: "<p>Cũng giống như các loại định dạng khác, như thay đổi màu phông chữ, bạn sẽ áp dụng định dạng số bằng cách chọn ô và chọn tùy chọn định dạng mong muốn. Có hai cách chính để chọn định dạng số:</p>\n<ul>\n<li>\n<p>Đi tới tab ** Trang chủ <strong>, nhấp vào trình đơn thả xuống </strong>Định dạng số ** trong nhóm ** Số ** và chọn định dạng mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Number Format menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_formats_applying_menu_cropped.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào một trong các lệnh định dạng số nhanh bên dưới trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Number formatting quick commands\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_formats_applying_quick_cropped.png\" /></p>\n</li>\n</ul>\n<p>Bạn cũng có thể chọn các ô mong muốn và nhấn ** Ctrl+1 ** trên bàn phím để truy cập các tùy chọn định dạng số bổ sung.</p>\n<p>Trong ví dụ này, chúng tôi đã áp dụng định dạng số ** Tiền tệ **, định dạng này thêm các ký hiệu tiền tệ ($) \nvà hiển thị hai chữ số thập phân cho bất kỳ giá trị số nào.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Applying the Currency format\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_formats_applying_currency_cropped.png\" /></p>\n<p>Nếu bạn chọn bất kỳ ô nào có định dạng số, bạn có thể thấy ** giá trị thực ** của ô trong thanh công thức. Bảng tính sẽ sử dụng giá trị này cho các công thức và các phép tính khác.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The actual value in the formula bar\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_formats_applying_value.png\" /></p>\n<h3>Sử dụng đúng định dạng số</h3>\n<p>Định dạng số có nhiều thứ hơn là chọn ô và áp dụng định dạng. Bảng tính thực sự có thể áp dụng định dạng số ** tự động ** dựa trên cách bạn nhập dữ liệu. Điều này có nghĩa là bạn sẽ cần nhập dữ liệu theo cách mà chương trình có thể hiểu được, sau đó đảm bảo rằng các ô đang sử dụng định dạng số thích hợp. Ví dụ: hình ảnh bên dưới cho thấy cách sử dụng chính xác các định dạng số cho ngày, tỷ lệ phần trăm và thời gian:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chart illustration best practices for number formatting in spreadsheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_format_chart.png\" /></p>\n<p>Bây giờ bạn đã biết thêm về cách hoạt động của định dạng số, chúng ta sẽ xem xét một số định dạng số đang hoạt động.</p>\n<h3>Định dạng phần trăm</h3>\n<p>Một trong những định dạng số hữu ích nhất là định dạng ** phần trăm <strong>(%). Nó hiển thị các giá trị dưới dạng phần trăm, như ** 20%</strong> hoặc ** 55%<strong>. Điều này đặc biệt hữu ích khi tính toán những thứ như chi phí thuế bán hàng hoặc tiền boa. Khi bạn nhập dấu phần trăm (%) \nsau một số, định dạng số phần trăm sẽ được áp dụng cho ô đó ** tự động </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_percent_intro.png\" /></p>\n<p>Như bạn có thể nhớ trong lớp toán, tỷ lệ phần trăm cũng có thể được viết dưới dạng ** thập phân **. Vì vậy, 15% tương đương với 0,15, 7,5% là 0,075, 20% là 0,20, 55% là 0,55, v.v. Bạn có thể xem lại <a href=\"../../../percents/converting-percentages-decimals-and-fractions/1/index.html\">bài học này</a> \ntừ <a href=\"../../../not-offline.html?url=https:/edu.gcfglobal.org/en/topics/math\">Hướng dẫn toán học</a> \ncủa chúng tôi để tìm hiểu thêm về cách chuyển đổi tỷ lệ phần trăm thành số thập phân.</p>\n<p>Có nhiều khi định dạng phần trăm sẽ hữu ích. Ví dụ: trong các hình ảnh bên dưới, hãy để ý cách ** thuế suất bán hàng ** được định dạng khác nhau cho mỗi bảng tính (5, 5% và 0,05)\n:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"image showing correct and incorrect calculations based on percentage formatting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_percent_compare_big.png\" /></p>\n<p>Như bạn có thể thấy, phép tính trong bảng tính bên trái hoạt động không chính xác. Nếu không có định dạng số phần trăm, bảng tính của chúng tôi cho rằng chúng tôi muốn nhân 22,50 USD với 5 chứ không phải 5%. Và trong khi bảng tính bên phải vẫn hoạt động mà không cần định dạng phần trăm thì bảng tính ở giữa lại dễ đọc hơn.</p>\n<h3>Định dạng ngày</h3>\n<p>Bất cứ khi nào bạn làm việc với ** ngày <strong>, bạn sẽ muốn sử dụng định dạng ngày để cho bảng tính biết rằng bạn đang đề cập đến ** ngày theo lịch cụ thể </strong>, chẳng hạn như ngày 15 tháng 7 năm 2014. Định dạng ngày cũng cho phép bạn làm việc với một tập hợp các hàm ngày mạnh mẽ sử dụng thông tin ngày và giờ để tính toán câu trả lời.</p>\n<p>Bảng tính không hiểu thông tin giống như cách con người hiểu. Ví dụ: nếu bạn nhập ** Tháng 10 ** vào một ô, bảng tính sẽ không biết bạn đang nhập ngày nên nó sẽ xử lý ngày đó giống như bất kỳ văn bản nào khác. Thay vào đó, khi nhập ngày, bạn sẽ cần sử dụng ** định dạng cụ thể ** mà bảng tính của bạn hiểu được, như ** tháng/ngày/năm **(hoặc ** ngày/tháng/năm ** tùy thuộc vào quốc gia bạn đang ở). Trong ví dụ bên dưới, chúng tôi sẽ nhập ** 10/12/2014 ** cho ngày 12 tháng 10 năm 2014. Sau đó, bảng tính của chúng tôi sẽ tự động áp dụng định dạng số ngày cho ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_format.png\" /></p>\n<p>Bây giờ chúng ta đã định dạng ngày chính xác, chúng ta có thể thực hiện những việc khác nhau với dữ liệu này. Ví dụ: chúng ta có thể sử dụng ô điều khiển điền để tiếp tục ngày tháng trong cột, do đó, một ngày khác sẽ xuất hiện trong mỗi ô:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Screenshot of Excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_fill.png\" /><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Screenshot of Excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_fill_done.png\" /></p>\n<p>Nếu định dạng ngày không được áp dụng tự động, điều đó có nghĩa là bảng tính không hiểu dữ liệu bạn đã nhập. Trong ví dụ bên dưới, chúng tôi đã nhập ** ngày 15 tháng 3 <strong>. Bảng tính không hiểu rằng chúng tôi đang đề cập đến một ngày nên ô này vẫn đang sử dụng định dạng số ** chung </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_general.png\" /></p>\n<p>Mặt khác, nếu chúng ta gõ ** 15 tháng 3 <strong>(không có chữ \"th\"), bảng tính ** sẽ ** nhận ra đó là một ngày. Vì không bao gồm năm nên bảng tính sẽ tự động thêm năm hiện tại để ngày đó có tất cả thông tin cần thiết. Chúng ta cũng có thể nhập ngày theo một số cách khác, chẳng hạn như ** 15/3 </strong>,** 15/3/2014 ** hoặc ** 15 tháng 3 năm 2014 ** và bảng tính sẽ vẫn nhận dạng ngày đó là một ngày.</p>\n<p>Hãy thử nhập ngày bên dưới vào bảng tính và xem định dạng ngày có được áp dụng tự động không:</p>\n<ul>\n<li>\n<p>12/10</p>\n</li>\n<li>\n<p>tháng mười</p>\n</li>\n<li>\n<p>ngày 12 tháng 10</p>\n</li>\n<li>\n<p>Tháng 10 năm 2016</p>\n</li>\n<li>\n<p>12/10/2016</p>\n</li>\n<li>\n<p>Ngày 12 tháng 10 năm 2016</p>\n</li>\n<li>\n<p>2016</p>\n</li>\n<li>\n<p>ngày 12 tháng 10</p>\n</li>\n</ul>\n<p>Nếu bạn muốn thêm ngày hiện tại vào một ô, bạn có thể sử dụng phím tắt ** Ctrl+;**, như trong video bên dưới.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Các tùy chọn định dạng ngày khác",
                        content: "<p>Để truy cập các tùy chọn định dạng ngày khác, hãy chọn trình đơn thả xuống <strong>Định dạng số ** và chọn </strong>Định dạng số khác **. Đây là các tùy chọn để hiển thị ngày theo cách khác, chẳng hạn như thêm ngày trong tuần hoặc bỏ qua năm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_more.png\" /></p>\n<p>Hộp thoại **Định dạng ô ** sẽ xuất hiện. Từ đây, bạn có thể chọn tùy chọn định dạng ngày mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_dialog.png\" /></p>\n<p>Như bạn có thể thấy trong thanh công thức, định dạng ngày tùy chỉnh không chỉ thay đổi ngày thực tế trong ô của chúng ta mà còn cả cách nó được hiển thị.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_date_longdate.png\" /></p>\n<h3>Mẹo định dạng số</h3>\n<p>Dưới đây là một số mẹo để có được kết quả tốt nhất với định dạng số:</p>\n<ul>\n<li>\n<p><strong>Áp dụng định dạng số cho toàn bộ cột </strong>: Nếu bạn dự định sử dụng một cột cho một loại dữ liệu nhất định, như ngày hoặc tỷ lệ phần trăm, bạn có thể thấy dễ dàng nhất khi chọn toàn bộ cột bằng cách nhấp vào chữ cái cột và áp dụng định dạng số mong muốn. Bằng cách này, mọi dữ liệu bạn thêm vào cột này trong tương lai sẽ có định dạng số chính xác. Lưu ý rằng hàng tiêu đề thường không bị ảnh hưởng bởi định dạng số.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_tips_column.png\" /></p>\n</li>\n<li>\n<p>** Kiểm tra kỹ các giá trị của bạn sau khi áp dụng định dạng số <strong>: Nếu áp dụng định dạng số cho dữ liệu hiện có, bạn có thể nhận được kết quả không mong muốn. Ví dụ: áp dụng định dạng ** phần trăm </strong>(%) \ncho một ô có giá trị 5 sẽ mang lại cho bạn 500% chứ không phải 5%. Trong trường hợp này, bạn cần nhập lại chính xác các giá trị trong từng ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Screenshot of Excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_tip_percent_after.png\" /></p>\n</li>\n<li>\n<p>Nếu bạn tham chiếu một ô có định dạng số trong công thức, bảng tính có thể tự động áp dụng định dạng số tương tự cho ô mới. Ví dụ: nếu bạn sử dụng một giá trị có định dạng tiền tệ trong công thức thì giá trị được tính cũng sẽ sử dụng định dạng số tiền tệ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_tip_carryover.png\" /></p>\n</li>\n<li>\n<p>Nếu bạn muốn dữ liệu của mình xuất hiện ** chính xác như đã nhập,<strong> bạn sẽ cần sử dụng định dạng số ** văn bản </strong>. Định dạng này đặc biệt phù hợp với các số mà bạn không muốn thực hiện phép tính, chẳng hạn như số điện thoại, mã zip hoặc các số bắt đầu bằng 0, như ** 02415 **. Để có kết quả tốt nhất, bạn có thể muốn áp dụng định dạng số văn bản trước khi nhập dữ liệu vào các ô này.</p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Tăng số thập phân và giảm số thập phân",
                        content: "<p>Các lệnh ** Tăng số thập phân ** và ** Giảm số thập phân ** cho phép bạn kiểm soát số lượng vị trí thập phân được hiển thị trong một ô. Các lệnh này không thay đổi giá trị của ô; thay vào đó, chúng hiển thị giá trị ở một số vị trí thập phân đã đặt.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Increase and Decrease Decimal commands\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_formats_decimal_commands.png\" /></p>\n<p>Giảm số thập phân sẽ hiển thị giá trị được làm tròn đến vị trí thập phân đó nhưng giá trị thực tế trong ô vẫn sẽ hiển thị trên thanh công thức.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The number may display rounded\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/number_format_decimal_rounding.png\" /></p>\n<p>Các lệnh ** Tăng số thập phân ** và ** Giảm số thập phân ** không hoạt động với một số định dạng số, như ** Ngày ** và ** Phân số **.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_numberformats_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Trong ô ** D2 <strong>, nhập ngày hôm nay và nhấn ** Enter </strong>.</li>\n<li>Nhấp vào ô ** D2 ** và xác minh rằng ô đó đang sử dụng định dạng số ** Ngày <strong>. Hãy thử thay đổi sang định dạng ngày khác (ví dụ:</strong> Ngày dài **).</li>\n<li>Trong ô ** D2 <strong>, sử dụng hộp thoại </strong>Định dạng ô ** để chọn định dạng ngày ** 14-Mar-12 **.</li>\n<li>Thay đổi thuế suất bán hàng trong ô ** D8 ** thành định dạng ** Phần trăm **.</li>\n<li>Áp dụng định dạng ** Tiền tệ ** cho tất cả ** cột B **.</li>\n<li>Trong ô ** D8 <strong>, sử dụng lệnh ** Tăng số thập phân ** hoặc ** Giảm số thập phân ** để thay đổi số vị trí thập phân thành ** một </strong>. Bây giờ nó sẽ hiển thị ** 7,5%**.</li>\n<li>Khi bạn hoàn tất, bảng tính của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Number Formats Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/screen_shot_2015-11-24_at_3.50.56_pm.png\" /></li>\n</ol>\n<p>/en/excel/working-with-multiple-worksheets/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_9",
                sessionId: 67,
                title: "Bài 9: Làm việc với nhiều Worksheets",
                description: "Nội dung chi tiết cho bài Bài 9: Làm việc với nhiều Worksheets.",
                video: "https://www.youtube.com/embed/qRShQc-v3LI",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 9: Làm việc với nhiều bảng tính</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 9: Làm việc với nhiều bảng tính",
                        content: "<p>/en/excel/hiểu-số-định dạng/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Theo mặc định, mỗi sổ làm việc đều chứa ít nhất một ** bảng tính **. Khi làm việc với lượng lớn dữ liệu, bạn có thể tạo ** nhiều trang tính ** để giúp sắp xếp sổ làm việc của mình và giúp tìm nội dung dễ dàng hơn. Bạn cũng có thể ** nhóm ** các trang tính để nhanh chóng thêm thông tin vào nhiều trang tính cùng lúc.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng nhiều trang tính.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để chèn một bảng tính mới:",
                        content: "<ol>\n<li>\n<p>Xác định vị trí và chọn nút ** Trang tính mới ** gần góc dưới cùng bên phải của cửa sổ Excel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding a new worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_new.png\" /></p>\n</li>\n<li>\n<p>Một ** mới ** ** trang tính trống ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the new, blank worksheet added to the workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_new_done.png\" /></p>\n</li>\n</ol>\n<p>Theo mặc định, bất kỳ sổ làm việc mới nào bạn tạo trong Excel sẽ chứa một trang tính, được gọi là ** Trang tính1 <strong>. Để thay đổi ** số trang tính mặc định </strong>, hãy điều hướng đến ** Backstage view <strong>, nhấp vào ** Tùy chọn </strong>, sau đó chọn số trang tính mong muốn để đưa vào mỗi sổ làm việc mới.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để sao chép một bảng tính:",
                        content: "<p>Nếu bạn cần ** sao chép ** nội dung của trang tính này sang trang tính khác, Excel cho phép bạn ** sao chép ** một trang tính hiện có.</p>\n<ol>\n<li>\n<p>Nhấp chuột phải vào trang tính bạn muốn sao chép, sau đó chọn ** Di chuyển hoặc Sao chép ** từ trình đơn trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Move or Copy command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_copy_rightclick.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Di chuyển hoặc Sao chép ** sẽ xuất hiện. Chọn vị trí trang tính sẽ xuất hiện trong trường ** Trước trang tính:<strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn </strong>(di chuyển đến cuối)<strong> để đặt trang tính ở bên phải trang tính hiện có.\n3.</strong>Đánh dấu vào hộp ** bên cạnh ** Tạo bản sao <strong>, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing the copy worksheet options in the dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_copy_dialog.png\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ được ** sao chép <strong>. Nó sẽ có cùng tiêu đề với trang tính gốc cũng như ** phiên bản ** ** số </strong>. Trong ví dụ của chúng tôi, chúng tôi đã sao chép trang tính ** Tháng 11 <strong>, vì vậy trang tính mới của chúng tôi có tên là ** Tháng 11 ** </strong>(2)**. Tất cả nội dung từ bảng tính tháng 11 cũng đã được sao chép sang bảng tính mới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the duplicated worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_copy_done.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể sao chép một trang tính sang một ** sổ làm việc ** hoàn toàn khác. Bạn có thể chọn bất kỳ sổ làm việc nào hiện đang mở từ trình đơn thả xuống <strong>Đến sổ:</strong>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để đổi tên một bảng tính:",
                        content: "<ol>\n<li>\n<p>Nhấp chuột phải vào ** trang tính ** bạn muốn đổi tên, sau đó chọn **Đổi tên ** từ trình đơn trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Rename worksheet option\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_rename_rightclick.png\" /></p>\n</li>\n<li>\n<p>Nhập ** tên mong muốn ** cho bảng tính.</p>\n</li>\n<li>Nhấp vào bất kỳ đâu bên ngoài worksheet tab hoặc nhấn ** Enter ** trên bàn phím của bạn. Bảng tính sẽ được ** đổi tên **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the renamed worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_rename_done.png\" /></li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để di chuyển một bảng tính:",
                        content: "<ol>\n<li>\n<p>Nhấp và kéo trang tính bạn muốn di chuyển cho đến khi ** mũi tên nhỏ màu đen ** xuất hiện phía trên vị trí mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"moving a worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_move_icon.png\" /></p>\n</li>\n<li>\n<p>Thả chuột. Bảng tính sẽ được di chuyển.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the moved worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_move_done.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để thay đổi màu worksheet tab:",
                        content: "<ol>\n<li>Nhấp chuột phải vào tab bảng tính mong muốn và di chuột qua ** Màu tab **. Trình đơn ** Màu ** sẽ xuất hiện.</li>\n<li>\n<p>Chọn ** màu ** mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a worksheet color\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_color_rightclick.png\" /></p>\n</li>\n<li>\n<p>Màu tab bảng tính sẽ được ** thay đổi **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the applied worksheet color\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_color_done.png\" /></p>\n</li>\n</ol>\n<p>Màu worksheet tab ** ít được chú ý hơn ** đáng kể khi bảng tính được chọn. Chọn một bảng tính khác để xem màu sẽ xuất hiện như thế nào khi bảng tính không được chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the worksheet color more obvious when unselected\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_color_splat.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để xóa một bảng tính:",
                        content: "<ol>\n<li>\n<p>Nhấp chuột phải vào ** trang tính ** bạn muốn xóa, sau đó chọn ** Xóa ** từ trình đơn trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"deleting an empty worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_delete_rightclick.png\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ bị ** xóa ** khỏi sổ làm việc của bạn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the workbook after deleting the empty worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_delete_done.png\" /></p>\n</li>\n</ol>\n<p>Nếu bạn muốn ngăn chặn việc chỉnh sửa hoặc xóa các bảng tính cụ thể, bạn có thể ** bảo vệ ** ** chúng ** bằng cách nhấp chuột phải vào bảng tính mong muốn và chọn ** Protect Sheet ** từ trình đơn bảng tính.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Chuyển đổi giữa các bảng tính",
                        content: "<p>Nếu bạn muốn xem một bảng tính khác, bạn chỉ cần ** nhấp vào tab ** để chuyển sang bảng tính đó. Tuy nhiên, với sổ làm việc lớn hơn, việc này đôi khi có thể trở nên tẻ nhạt vì có thể bạn phải cuộn qua tất cả các tab để tìm tab bạn muốn. Thay vào đó, bạn chỉ cần ** nhấp chuột phải ** vào mũi tên cuộn ở góc dưới bên trái, như hiển thị bên dưới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"right clicking the worksheet scroll arrows\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/jump_to_sheet_right_click.png\" title=\"right clicking the worksheet scroll arrows\" /></p>\n<p>Một hộp thoại sẽ xuất hiện với danh sách tất cả các trang tính trong sổ làm việc của bạn. Sau đó, bạn có thể ** nhấp đúp ** vào trang tính mà bạn muốn chuyển tới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dialog box showing all of the sheets in the workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/jump_to_sheet_dialog_box.png\" title=\"dialog box showing all of the sheets in the workbook\" /></p>\n<p>Xem video bên dưới để thấy lối tắt này hoạt động.</p>\n<h3>Nhóm và tách nhóm các bảng tính</h3>\n<p>Bạn có thể làm việc với từng trang tính ** riêng lẻ ** hoặc bạn có thể làm việc với nhiều trang tính cùng một lúc. Một số trang tính có thể được kết hợp thành một ** nhóm **. Mọi thay đổi được thực hiện đối với một trang tính trong một nhóm sẽ được thực hiện đối với ** mọi trang tính ** trong nhóm đó.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Để nhóm các bảng tính:",
                        content: "<ol>\n<li>\n<p>Chọn ** trang tính đầu tiên ** bạn muốn đưa vào ** nhóm trang tính **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the first worksheet in a group\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_group_select.png\" /></p>\n</li>\n<li>\n<p>Nhấn và giữ phím ** Ctrl ** trên bàn phím của bạn. Chọn ** bảng tính tiếp theo ** bạn muốn có trong nhóm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding a worksheet to a group\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_group_during.png\" /></p>\n</li>\n<li>\n<p>Tiếp tục chọn các bảng tính cho đến khi tất cả các bảng tính bạn muốn nhóm được chọn, sau đó nhả phím ** Ctrl <strong>. Các bảng tính hiện được ** nhóm lại </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the grouped worksheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_group_done.png\" /></p>\n</li>\n</ol>\n<p>Trong khi các trang tính được nhóm lại, bạn có thể điều hướng đến bất kỳ trang tính nào trong nhóm. Mọi ** thay đổi ** được thực hiện đối với một trang tính sẽ xuất hiện trên ** mọi ** ** trang tính ** trong nhóm. Tuy nhiên, nếu bạn chọn một trang tính không nằm trong nhóm thì tất cả các trang tính của bạn sẽ bị ** không được nhóm **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 11: Để rã nhóm các bảng tính:",
                        content: "<ol>\n<li>\n<p>Nhấp chuột phải vào một bảng tính trong nhóm, sau đó chọn ** Ungroup ** ** Sheets ** từ menu bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"ungrouping worksheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_ungroup_rightclick.png\" /></p>\n</li>\n<li>\n<p>Các bảng tính sẽ ** được tách nhóm <strong>. Bạn cũng có thể nhấp vào bất kỳ trang tính nào không có trong nhóm để ** rã nhóm tất cả các trang tính </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the ungrouped worksheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/sheets_group_select.png\" /></p>\n</li>\n</ol>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_multiplesheets_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Chèn một bảng tính ** mới ** và ** đổi tên ** nó ** Tóm tắt Q1 **.</li>\n<li>Di chuyển bảng tính ** Tóm tắt chi phí ** sang phía bên phải, sau đó di chuyển bảng tính ** Tóm tắt Q1 ** sao cho nó nằm trong khoảng ** tháng 3 ** đến ** tháng 4 <strong>.\n4.</strong> Tạo bản sao ** của bảng tính Tóm tắt chi phí bằng cách nhấp chuột phải vào tab. Đừng chỉ sao chép và dán nội dung của bảng tính vào một bảng tính mới.</li>\n<li>Thay đổi ** màu ** của tab Tháng Giêng thành ** xanh ** và màu của tab Tháng Hai thành ** đỏ **.</li>\n<li>Nhóm các trang tính ** Tháng 9 <strong>,</strong> Tháng 10 ** và ** Tháng 11 **.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Multiple Worksheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/screen_shot_2015-11-23_at_4.20.04_pm.png\" /></li>\n</ol>\n<p>/en/excel/using-find-replace/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_10",
                sessionId: 67,
                title: "Bài 10: Sử dụng Tìm và Thay thế",
                description: "Nội dung chi tiết cho bài Bài 10: Sử dụng Tìm và Thay thế.",
                video: "https://www.youtube.com/embed/hmizmgOjNYo",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 10: sử dụng-tìm-thay thế</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 10: Sử dụng Tìm &amp; Thay thế",
                        content: "<p>/en/excel/working-with-multiple-worksheets/content/</p>\n<h3>Giới thiệu</h3>\n<p>Khi làm việc với nhiều dữ liệu trong Excel, việc xác định thông tin cụ thể có thể khó khăn và tốn thời gian. Bạn có thể dễ dàng tìm kiếm sổ làm việc của mình bằng tính năng ** Tìm <strong>, tính năng này cũng cho phép bạn sửa đổi nội dung bằng tính năng ** Thay thế </strong>.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng Tìm và Thay thế.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để tìm nội dung ô:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng lệnh Tìm để định vị một bộ phận cụ thể trong danh sách này.</p>\n<ol>\n<li>\n<p>Từ tab ** Trang chủ <strong>, hãy nhấp vào lệnh ** Tìm và chọn </strong>, sau đó chọn ** Tìm ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the Find feature\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-06_15-57-37.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tìm và Thay thế ** sẽ xuất hiện. Nhập ** nội dung ** bạn muốn tìm. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập tên của bộ phận.</p>\n</li>\n<li>\n<p>Nhấp vào ** Tìm tiếp <strong>. Nếu tìm thấy nội dung, ô chứa nội dung đó sẽ được ** chọn </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Find Next to locate content\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_09-11-08.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** Tìm tiếp ** để tìm thêm trường hợp hoặc ** Tìm tất cả ** để xem mọi trường hợp của cụm từ tìm kiếm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Find All to locate every instance of the search term\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_09-11-58.png\" /></p>\n</li>\n<li>\n<p>Khi bạn hoàn tất, hãy nhấp vào **Đóng ** để thoát khỏi hộp thoại Tìm và Thay thế.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking close to exit the dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_09-12-40.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể truy cập lệnh Tìm bằng cách nhấn ** Ctrl+F ** trên bàn phím.</p>\n<p>Nhấp vào ** Tùy chọn ** để xem tiêu chí tìm kiếm nâng cao trong hộp thoại Tìm và Thay thế.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking options to see advanced search criteria\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_09-13-11.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để thay thế nội dung ô:",
                        content: "<p>Đôi khi, bạn có thể phát hiện ra rằng mình đã liên tục mắc lỗi trong suốt sổ làm việc của mình (chẳng hạn như viết sai chính tả tên của ai đó) \nhoặc bạn cần đổi một từ hoặc cụm từ cụ thể bằng một từ hoặc cụm từ khác. Bạn có thể sử dụng tính năng ** Tìm và Thay thế ** của Excel để thực hiện các sửa đổi nhanh chóng. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng Tìm và Thay thế để sửa danh sách tên bộ phận.</p>\n<ol>\n<li>\n<p>Từ tab ** Trang chủ <strong>, nhấp vào lệnh ** Tìm &amp; Chọn </strong>, sau đó chọn ** Thay thế...** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Replace from the drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_09-57-40.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tìm và Thay thế ** sẽ xuất hiện. Nhập văn bản bạn muốn tìm vào trường ** Find what:**.</p>\n</li>\n<li>\n<p>Nhập văn bản bạn muốn thay thế vào trường ** Thay thế bằng:<strong>, sau đó nhấp vào ** Tìm tiếp </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking find next\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_10-00-11.png\" /></p>\n</li>\n<li>\n<p>Nếu tìm thấy nội dung, ô chứa nội dung này sẽ được ** chọn <strong>.\n5.</strong> Xem lại ** văn bản để đảm bảo bạn muốn thay thế nó.</p>\n</li>\n<li>\n<p>Nếu bạn muốn thay thế nó, hãy chọn một trong các tùy chọn ** thay thế **. Việc chọn ** Thay thế ** sẽ thay thế các phiên bản riêng lẻ, trong khi ** Thay thế tất cả ** sẽ thay thế mọi phiên bản của văn bản trong toàn bộ sổ làm việc. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn tùy chọn này để tiết kiệm thời gian.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking replace all\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_10-18-35.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện xác nhận số lần thay thế đã thực hiện. Nhấp vào ** OK ** để tiếp tục.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking ok\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_10-01-21.png\" /></p>\n</li>\n<li>\n<p>Nội dung ô đã chọn sẽ được ** thay thế **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected content has been replaced\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_10-24-15.png\" /></p>\n</li>\n<li>\n<p>Khi bạn hoàn tất, hãy bấm Đóng để thoát khỏi hộp thoại Tìm và Thay thế.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking close to exit the dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_10-12-13.png\" /></p>\n</li>\n</ol>\n<p>Nói chung, tốt nhất bạn nên tránh sử dụng ** Thay thế tất cả ** vì nó không cung cấp cho bạn tùy chọn bỏ qua bất cứ điều gì bạn không muốn thay đổi. Bạn chỉ nên sử dụng tùy chọn này nếu bạn hoàn toàn chắc chắn rằng nó sẽ không thay thế bất cứ thứ gì bạn không mong muốn.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_findreplace_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Crystal Lewis kết hôn và đổi họ của mình thành Taylor. Sử dụng ** Tìm và thay thế ** để thay đổi họ của Crystal từ ** Lewis ** thành ** Taylor **. Hãy cẩn thận ** chỉ ** thay đổi họ của Crystal!</li>\n<li>Tìm và thay thế ** Bio ** bằng ** Biology **. Hãy cẩn thận ** không ** thay đổi chuyên ngành Kỹ thuật Y sinh!</li>\n<li>Sử dụng ** Tìm và thay thế tất cả ** để thay thế chuyên ngành ** Vật lý ** thành ** Khoa học vật lý **.</li>\n<li>Khi bạn hoàn tất, bảng tính của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Find and Replace Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/screen_shot_2015-11-24_at_3.24.37_pm.png\" /></li>\n</ol>\n<p>/en/excel/kiểm tra chính tả/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_11",
                sessionId: 67,
                title: "Bài 11: Kiểm tra chính tả",
                description: "Nội dung chi tiết cho bài Bài 11: Kiểm tra chính tả.",
                video: "https://www.youtube.com/embed/8XcFTeCu98k",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 11: kiểm tra chính tả</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 11: Kiểm tra chính tả",
                        content: "<p>/en/excel/using-find-replace/content/</p>\n<h3>Giới thiệu</h3>\n<p>Trước khi chia sẻ sổ làm việc, bạn cần đảm bảo sổ làm việc không có bất kỳ lỗi chính tả nào. May mắn thay, Excel có công cụ ** kiểm tra chính tả ** mà bạn có thể sử dụng để đảm bảo mọi thứ trong sổ làm việc của bạn đều đúng chính tả.</p>\n<p>Nếu bạn đã sử dụng tính năng kiểm tra chính tả trong Microsoft Word, chỉ cần lưu ý rằng công cụ kiểm tra chính tả trong Excel tuy hữu ích nhưng không mạnh mẽ bằng. Ví dụ: nó sẽ không kiểm tra các vấn đề ngữ pháp hoặc kiểm tra chính tả khi bạn nhập.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để sử dụng tính năng kiểm tra chính tả:",
                        content: "<ol>\n<li>\n<p>Từ tab <strong>Đánh giá </strong>, hãy nhấp vào lệnh ** Chính tả **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the spelling command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_14-26-44.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Chính tả ** sẽ xuất hiện. Đối với mỗi lỗi chính tả trong bảng tính của bạn, nó sẽ cố gắng đưa ra ** gợi ý ** cho cách viết đúng. Chọn một gợi ý rồi nhấn ** Thay đổi ** để sửa lỗi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking change to correct a spelling error\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_14-30-40.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện sau khi xem lại tất cả các lỗi chính tả. Nhấp vào ** OK ** để đóng kiểm tra chính tả.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking ok to close spell check\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/2015-11-09_14-31-17.png\" /></p>\n</li>\n</ol>\n<p>Nếu không có gợi ý phù hợp, bạn cũng có thể nhập đúng chính tả theo cách thủ công.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Bỏ qua \"lỗi\" chính tả",
                        content: "<p>Kiểm tra chính tả ** không phải lúc nào cũng đúng **. Đôi khi nó sẽ đánh dấu một số từ nhất định là sai ngay cả khi chúng viết đúng chính tả. Điều này thường xảy ra với những cái tên có thể không có trong từ điển. Bạn có thể chọn ** không ** để thay đổi \"lỗi\" chính tả bằng một trong ba tùy chọn sau:</p>\n<ul>\n<li>\n<p>** Bỏ qua một lần **: Thao tác này sẽ bỏ qua từ mà không thay đổi từ đó.</p>\n</li>\n<li>\n<p>** Bỏ qua tất cả **: Thao tác này sẽ bỏ qua từ mà không thay đổi nó và cũng bỏ qua tất cả các trường hợp khác của từ trong trang tính của bạn.</p>\n</li>\n<li>\n<p>** Thêm **: Thao tác này sẽ thêm từ vào từ điển để nó sẽ không bao giờ xuất hiện dưới dạng lỗi nữa. Đảm bảo từ đó được viết đúng chính tả trước khi chọn tùy chọn này.</p>\n</li>\n</ul>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_checkspelling_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab bảng tính ** Thử thách ** ở phía dưới bên trái của bảng tính.</li>\n<li>Chạy ** kiểm tra chính tả ** để sửa mọi lỗi chính tả trong sổ làm việc.</li>\n<li>Sửa các từ ** coffe ** và ** medum ** bằng ** cách viết gợi ý <strong>.\n5.</strong> Bỏ qua ** gợi ý chính tả cho từ ** Amanecer **.</li>\n<li>Khi bạn hoàn tất, bảng tính của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Spell Check Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/screen_shot_2015-11-20_at_10.42.50_am.png\" /></li>\n</ol>\n<p>7.<strong> Bước thưởng!</strong> Có một lỗi chính tả không được phát hiện. Bạn có thể nhận ra nó?<strong> Gợi ý:</strong> Nó nằm trong một trong các mô tả sản phẩm.</p>\n<p>/en/excel/page-layout-and-printing/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "eb_12",
                sessionId: 67,
                title: "Bài 12: Bố cục trang và In",
                description: "Nội dung chi tiết cho bài Bài 12: Bố cục trang và In.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 12: Bố cục trang và in ấn</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 12: Bố cục trang và in ấn",
                        content: "<p>/en/excel/kiểm tra chính tả/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Có thể đôi khi bạn muốn ** in sổ làm việc ** để xem và chia sẻ dữ liệu của mình ** ngoại tuyến <strong>. Sau khi bạn đã chọn cài đặt ** bố cục trang </strong>, bạn có thể dễ dàng xem trước và in sổ làm việc từ Excel bằng cách sử dụng ngăn ** In **.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về bố cục trang và in ấn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để truy cập khung In:",
                        content: "<ol>\n<li>\n<p>Chọn tab ** Tệp <strong>.</strong> Backstage view ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The File tab on the ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_pane_file_tab.png\" /></p>\n</li>\n<li>\n<p>Chọn ** In **. Khung ** In ** sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Print on the backstage view\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_pane_backstage.png\" /></p>\n</li>\n</ol>\n<p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về cách sử dụng khung In.</p>\n<p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Khung In\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_pane_print_pane.png\" /></p>\n<h2>Chia tỷ lệ</h2>\n<p>Tại đây, bạn có thể chọn cách chia tỷ lệ bảng tính của mình để in.</p>\n<h2>Lề</h2>\n<p>Tại đây, bạn có thể điều chỉnh lề trang.</p>\n<h2>Khổ giấy</h2>\n<p>Bạn có thể chọn khổ giấy muốn sử dụng nếu máy in của bạn hỗ trợ cài đặt này.</p>\n<h2>Định hướng trang</h2>\n<p>Tại đây, bạn có thể chọn hướng dọc hoặc hướng ngang.</p>\n<h2>đối chiếu</h2>\n<p>Nếu bạn in nhiều bản sao, bạn có thể chọn xem chúng sẽ được chia bộ hay không chia bộ.</p>\n<h2>Phạm vi in</h2>\n<p>Tại đây, bạn có thể chọn in các trang tính đang hoạt động, toàn bộ sổ làm việc hoặc một vùng chọn.</p>\n<h2>Máy in</h2>\n<p>Nếu bạn có nhiều máy in, hãy chọn máy in bạn muốn sử dụng.</p>\n<h2>In</h2>\n<p>Bấm vào nút này để in sổ làm việc.</p>\n<h2>Bản sao</h2>\n<p>Tại đây, bạn có thể chọn số lượng bản sao bạn muốn in.</p>\n<h2>Lựa chọn trang</h2>\n<p>Bạn có thể nhấp vào mũi tên để xem một trang khác trong khung Xem trước.</p>\n<h2>Phóng to trang/Hiển thị lề</h2>\n<p>Nút Zoom to Page ở bên phải sẽ phóng to và thu nhỏ trong khung Preview.</p>\n<p>Nút Hiển thị lề ở bên trái sẽ hiển thị lề trong khung Xem trước.</p>\n<h2>Ngăn xem trước</h2>\n<p>Tại đây, bạn có thể xem bản xem trước trang tính của mình sẽ trông như thế nào khi được in.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để in một sổ làm việc:",
                        content: "<ol>\n<li>\n<p>Điều hướng đến khung ** In **, sau đó chọn ** máy in ** mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Select the desired printer\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_to_print_1.png\" /></p>\n</li>\n<li>\n<p>Nhập số lượng ** bản sao ** bạn muốn in.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Number of copies\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_to_print_2.png\" /></p>\n</li>\n<li>\n<p>Chọn bất kỳ ** cài đặt ** bổ sung nào nếu cần (xem phần tương tác ở trên).<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Additional print settings\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_to_print_3.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** In **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the Print button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_to_print_4.png\" /></p>\n</li>\n</ol>\n<h3>Chọn vùng in</h3>\n<p>Trước khi in sổ làm việc Excel, điều quan trọng là phải quyết định chính xác thông tin bạn muốn in. Ví dụ: nếu bạn có nhiều trang tính trong sổ làm việc, bạn sẽ cần phải quyết định xem bạn muốn in ** toàn bộ ** ** sổ làm việc ** hay chỉ ** hoạt động ** ** trang tính **. Cũng có thể đôi khi bạn chỉ muốn in một ** lựa chọn ** nội dung từ sổ làm việc của mình.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để in các trang đang hoạt động:",
                        content: "<p>Các trang tính được coi là đang hoạt động khi ** được chọn **.</p>\n<ol>\n<li>\n<p>Chọn ** bảng tính ** bạn muốn in. Để in ** nhiều ** ** trang tính **, hãy nhấp vào trang tính đầu tiên, giữ phím ** Ctrl ** trên bàn phím, sau đó nhấp vào bất kỳ trang tính nào khác mà bạn muốn chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting multiple worksheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_active_select.png\" /></p>\n</li>\n<li>\n<p>Điều hướng đến khung ** In **.</p>\n</li>\n<li>\n<p>Chọn ** In các trang hiện hoạt ** từ trình đơn thả xuống ** Phạm vi in **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Set the Print Range to Print Active Sheets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_active_settings.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào nút ** In **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the Print button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_click_print.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để in toàn bộ sổ làm việc:",
                        content: "<ol>\n<li>Điều hướng đến khung ** In **.</li>\n<li>\n<p>Chọn ** In toàn bộ sổ làm việc ** từ trình đơn thả xuống ** Phạm vi in **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing Print Entire Workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_entire_workbook.png\" title=\"choosing Print Entire Workbook\" /></p>\n</li>\n<li>\n<p>Nhấp vào nút ** In **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the Print button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_click_print.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để in một lựa chọn:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ in bản ghi của 40 nhân viên bán hàng hàng đầu trên bảng tính Central.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** bạn muốn in.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Select a portion of the worksheet to print\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_selection_select.png\" /></p>\n</li>\n<li>\n<p>Điều hướng đến khung ** In **.</p>\n</li>\n<li>Chọn ** Lựa chọn in ** từ trình đơn thả xuống ** Phạm vi in **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Set the Print Range to Print Selection\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_selection_settings.png\" /></li>\n</ol>\n<p>4.<strong> bản xem trước ** lựa chọn của bạn sẽ xuất hiện trong khung ** Xem trước </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The print preview\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_selection_preview.png\" /></p>\n<ol>\n<li>Nhấp vào nút ** In ** để in lựa chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the Print button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_click_print.png\" /></li>\n</ol>\n<p>Nếu muốn, bạn cũng có thể đặt trước ** vùng in ** để có thể hình dung được ô nào sẽ được in khi bạn làm việc trong Excel. Chỉ cần ** chọn ** các ô bạn muốn in, nhấp vào tab ** Bố cục trang <strong>, chọn lệnh ** Vùng in </strong>, sau đó chọn <strong>Đặt vùng in </strong>. Hãy nhớ rằng nếu bạn cần in toàn bộ sổ làm việc, bạn cần phải xóa vùng in.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Set Print Area\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_area.png\" /></p>\n<h3>Điều chỉnh nội dung</h3>\n<p>Đôi khi, bạn có thể cần thực hiện ** điều chỉnh nhỏ ** từ ngăn In để nội dung sổ làm việc của bạn vừa khít với trang in. Ngăn In bao gồm một số công cụ giúp điều chỉnh và chia tỷ lệ nội dung của bạn, bao gồm ** chia tỷ lệ ** và ** trang ** ** lề **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để thay đổi hướng trang:",
                        content: "<p>Excel cung cấp hai tùy chọn hướng trang:<strong> ngang ** và ** dọc </strong>.<strong> Phong cảnh ** định hướng trang ** theo chiều ngang </strong>, trong khi ** dọc ** định hướng trang ** theo chiều dọc **. Trong ví dụ của chúng tôi, chúng tôi sẽ đặt hướng trang thành ngang.</p>\n<ol>\n<li>Điều hướng đến khung ** In **.</li>\n<li>\n<p>Chọn hướng mong muốn từ trình đơn thả xuống ** Hướng trang <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn </strong>Định hướng cảnh quan **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Page Orientation menu on the Print pane\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_orientation_menu2.png\" /></p>\n</li>\n<li>\n<p>Hướng trang mới sẽ được hiển thị trong khung Xem trước.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Preview pane shows the document in Landscape orientation\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_orientation_preview.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để vừa nội dung trước khi in:",
                        content: "<p>Nếu một số nội dung của bạn bị máy in cắt bỏ, bạn có thể sử dụng ** chia tỷ lệ ** để tự động điều chỉnh sổ làm việc của mình cho phù hợp với trang.</p>\n<ol>\n<li>\n<p>Điều hướng đến khung ** In **. Trong ví dụ của chúng tôi, chúng tôi có thể thấy trong khung Xem trước rằng nội dung của chúng tôi sẽ bị cắt khi in.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Part of the content is cut off in the Preview\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_orientation_preview.png\" /></p>\n</li>\n<li>\n<p>Chọn tùy chọn mong muốn từ menu thả xuống ** Scaling <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Khớp tất cả các cột trên một trang </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Scaling drop-down menu on the Print pane\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_fit_menu.png\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ được ** cô đọng ** để vừa với một trang duy nhất.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new scaling option will be displayed in the Preview pane.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_fit_preview.png\" /></p>\n</li>\n</ol>\n<p>Hãy nhớ rằng các trang tính sẽ trở nên ** khó đọc ** hơn ** khi chúng được thu nhỏ lại, vì vậy bạn có thể không muốn sử dụng tùy chọn này khi in một trang tính có nhiều thông tin. Trong ví dụ của chúng tôi, chúng tôi sẽ thay đổi cài đặt chia tỷ lệ thành ** Không chia tỷ lệ **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Để bao gồm Tiêu đề In:",
                        content: "<p>Nếu bảng tính của bạn sử dụng ** tiêu đề ** ** tiêu đề **, điều quan trọng là phải đưa các tiêu đề này vào mỗi trang trong bảng tính được in của bạn. Sẽ rất khó để đọc một cuốn sách in nếu tiêu đề chỉ xuất hiện ở trang đầu tiên. Lệnh ** In Tiêu đề ** cho phép bạn chọn các hàng và cột cụ thể để xuất hiện trên mỗi trang.</p>\n<ol>\n<li>\n<p>Nhấp vào tab ** Bố cục trang ** trên ** Ribbon <strong>, sau đó chọn lệnh ** In tiêu đề </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Print Titles command on the Page Layout tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_titles_ribbon.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Thiết lập trang ** sẽ xuất hiện. Từ đây, bạn có thể chọn ** hàng ** hoặc ** cột ** để lặp lại trên mỗi trang. Trong ví dụ của chúng tôi, chúng tôi sẽ lặp lại một hàng trước.</p>\n</li>\n<li>\n<p>Nhấp vào nút ** Thu gọn hộp thoại ** bên cạnh trường ** Hàng lặp lại ở trên cùng:**.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the Collapse Dialog button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_titles_setup_rows_callout.png\" /></p>\n</li>\n<li>\n<p>Con trỏ sẽ trở thành một ** mũi tên lựa chọn ** nhỏ và hộp thoại ** Thiết lập trang ** sẽ được thu gọn. Chọn ** hàng ** bạn muốn lặp lại ở đầu mỗi trang được in. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn hàng 1.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting row A to repeat\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_titles_setup_rows_select.png\" /></p>\n</li>\n<li>\n<p>Hàng 1 sẽ được thêm vào trường ** Hàng lặp lại ở trên cùng:<strong>. Nhấp lại vào nút ** Thu gọn hộp thoại </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click the collapse button to return to the Page Setup dialog\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_titles_setup_rows_return.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Thiết lập trang ** sẽ mở rộng. Để lặp lại một cột, hãy sử dụng quy trình tương tự được hiển thị trong bước 4 và 5. Trong ví dụ của chúng tôi, chúng tôi đã chọn lặp lại hàng 1 và cột A.</p>\n</li>\n<li>\n<p>Khi bạn hài lòng với lựa chọn của mình, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click OK\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_titles_setup_ok.png\" /></p>\n</li>\n<li>\n<p>Trong ví dụ của chúng tôi, hàng 1 xuất hiện ở đầu mỗi trang và cột A xuất hiện ở bên trái mỗi trang.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Row 1 and column A are shown on every page in the print preview.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_print_titles_preview.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 11: Để điều chỉnh ngắt trang:",
                        content: "<ol>\n<li>\n<p>Bấm vào lệnh ** Xem trước ngắt trang ** để thay đổi sang chế độ xem Ngắt trang.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page Break Preview at the bottom right of the window\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_break_view.png\" /></p>\n</li>\n<li>\n<p>Dọc và ngang ** đường chấm màu xanh ** biểu thị ngắt trang. Nhấp và kéo một trong những dòng này để điều chỉnh ngắt trang.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Page break view\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_break_drag1.png\" /></p>\n</li>\n<li>\n<p>Trong ví dụ của chúng tôi, chúng tôi đã đặt ngắt trang theo chiều ngang giữa hàng 21 và 22.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click and drag the page break\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_break_drag2.png\" /></p>\n</li>\n<li>\n<p>Trong ví dụ của chúng tôi, tất cả các trang hiện hiển thị cùng số hàng do có sự thay đổi trong ngắt trang.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new page breaks shown in the Print Preview.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_break_preview.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 12: Để sửa đổi lề trong khung Xem trước:** lề",
                        content: "<p>** là khoảng cách giữa nội dung của bạn và cạnh của trang. Đôi khi bạn có thể cần ** điều chỉnh ** lề để làm cho dữ liệu của bạn vừa vặn hơn. Bạn có thể sửa đổi lề trang từ khung ** In **.</p>\n<ol>\n<li>Điều hướng đến khung ** In **.</li>\n<li>\n<p>Chọn kích thước lề mong muốn từ trình đơn thả xuống ** Lề trang <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Thu hẹp </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Page Margins menu on the Print pane.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_margins_menu.png\" /></p>\n</li>\n<li>\n<p>Lề trang mới sẽ được hiển thị trong khung Preview.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new margins are displayed in the Preview pane.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_margins_preview.png\" /></p>\n</li>\n</ol>\n<p>Bạn có thể điều chỉnh lề theo cách thủ công bằng cách nhấp vào nút ** Hiển thị lề ** ở góc dưới bên phải, sau đó kéo ** điểm đánh dấu lề ** trong ngăn ** Xem trước **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Show Margins view button.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/layout_margins_show.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/practice_files/excel_pagelayoutprint_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** East Coast ** ở cuối sổ làm việc.</li>\n<li>Trong tab ** Bố cục trang **, hãy sử dụng tính năng ** In tiêu đề ** để lặp lại ** hàng 1 ** ở trên cùng và ** cột A ** ở bên trái.</li>\n<li>Sử dụng lệnh ** Xem trước ngắt trang **, di chuyển dấu ngắt giữa các hàng 47 và 48 lên trên để nó nằm giữa các hàng 40 và 41.</li>\n<li>\n<p>Trong ** B **</p>\n</li>\n<li>\n<p>** chế độ xem giai đoạn đóng gói <strong>, hãy mở ** Khung in </strong>.</p>\n</li>\n<li>Trong ** Khung in <strong>, thay đổi ** hướng ** thành ** Phong cảnh </strong>.</li>\n<li>Thay đổi lề thành ** Thu hẹp **.</li>\n<li>Thay đổi tỷ lệ thành ** Vừa tất cả các cột trên một trang **.</li>\n<li>Khi bạn hoàn tất, bản xem trước bản in của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Printing Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Basic/images/printing_and_page_layout_challenge.png\" /></li>\n</ol>\n<p>/en/excel/giới thiệu công thức/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Buổi 10: Hàm trong Excel",
        description: "Làm chủ Excel từ nhập liệu sạch, xử lý chuỗi đến các hàm thống kê và tìm kiếm nâng cao.",
        totalLessons: 4,
        quiz: "TN_Buoi10.csv",
        slide: "Slide_Excel_Buoi10.pdf",
        lessons: [
            {
                id: 101,
                sessionId: 10,
                title: "Bài 1: Nhập liệu & Validation",
                description: "Kỹ thuật nhập liệu sạch, đặt tên vùng (Name Range) và chặn lỗi nhập liệu với Data Validation.",
                image: "images/Buổi_10/Bài_1/pic1.png",
                // video: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview",
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Đặt tên cho các vùng dữ liệu tương ứng với tên các trường trong bảng 
(Họ và tên: _hoten, Mã lớp: _malop, Điểm: _diem, Học phí: _hocphi)
3. Thiết lập ràng buộc cho các ô thuộc cột điểm sao cho người dùng chỉ được phép
nhập giá trị trong phạm vi từ 0 đến 10, nếu nhập sai sẽ dừng việc nhập liệu và xuất hiện thông báo
có tiêu đề "Dữ liệu không hợp lệ", nội dung thông điệp "Nhập điểm nằm trong phạm vi từ 0 đến 10"
4. Xác định tổng tiền học phí thông qua tên vùng ở câu 2`,
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Excel Nhập Môn",
                        content: "**Mục tiêu:** Sinh viên biết nhập liệu đúng chuẩn (số ra số, chữ ra chữ), biết dùng địa chỉ tuyệt đối $ (sống còn cho bài VLOOKUP), và hiểu cách Excel \"nói chuyện\" qua dấu phẩy hoặc chấm phẩy.\n\n**1. Làm quen giao diện & \"Vùng\" (5 Phút)**\n- **Mục đích:** Phục vụ trực tiếp cho Bài 1 (Đặt tên vùng).\n- **Giảng viên (GV) thực hiện:** Mở một file Excel trắng.\n- **GV giải thích:**\n  + **Ô (Cell):** Giao điểm của Cột (Chữ cái) và Dòng (Số). Ví dụ: B3.\n  + **Name Box (Hộp tên):** Chỉ vị trí góc trên bên trái (bên cạnh thanh công thức).\n- **Thực hành nhanh:** \"Các em nhìn lên góc trái, gõ C10 rồi Enter. Con trỏ chuột sẽ bay ngay đến ô C10. Đây chính là nơi sau này ta dùng để Đặt tên vùng cho bài tập 1.\"\n- **Vùng (Range):** Bôi đen từ A1 đến B5.\n- **Giải thích:** Excel đọc là A1:B5 (Dấu hai chấm : nghĩa là \"đến\").\n\n**2. Quy tắc nhập liệu \"Sống còn\" (10 Phút)**\n- **Mục đích:** Tránh lỗi hàm không tính toán được hoặc lỗi #N/A trong Bài 3, 4.\n- **GV demo lỗi sai kinh điển:**\n  + Nhập vào ô A1: 100.000 đ (Gõ tay chữ đ và dấu chấm).\n  + Nhập vào ô A2: 2.\n  + Tính tổng: =A1*A2 -> Kết quả lỗi (#VALUE!).\n- **GV chốt quy tắc (Sinh viên ghi chép):**\n  + **Dữ liệu SỐ:** Khi nhập xong nó tự nhảy sang **Phải**.\n  + **Dữ liệu CHỮ:** Khi nhập xong nó nằm bên **Trái**.\n  + **Tuyệt đối KHÔNG:** Gõ dấu chấm phân cách hàng nghìn (ví dụ: 1.000) hay chữ \"VND\" trực tiếp vào ô số.\n- **Thực hành sửa sai:**\n  + Nhập lại ô A1: 100000 (chỉ nhập số thô).\n  + Định dạng (Format): Chọn ô A1 -> Vào tab Home -> Bấm dấu phẩy (,) trên thanh công cụ (Style) để hiển thị 100,000.\n- **Liên hệ bài học:** \"Trong bài tập lát nữa, phần Học phí và Điểm các em phải nhập số thô, không được gõ thêm chữ vào.\"\n\n**3. Tư duy Địa chỉ Tuyệt đối $ (Quan trọng nhất - 15 Phút)**\n- **Mục đích:** Để làm được câu VLOOKUP (Bài 3) và tạo vùng điều kiện DSUM (Bài 4).\n- **Bài toán dẫn nhập:**\n  + Cột A: Số lượng (nhập 1, 2, 3).\n  + Ô E1: Tỷ giá USD (nhập 23000).\n  + Yêu cầu: Tính tiền VND tại Cột B = Số lượng * Tỷ giá.\n- **Demo lỗi:**\n  + Tại B1 gõ: =A1*E1. Kết quả đúng.\n  + Kéo công thức xuống B2. Kết quả = 0 (Sai).\n  + Hỏi sinh viên: Tại sao sai? -> Bấm vào ô B2 cho thấy công thức trượt thành =A2*E2 (mà E2 là ô trống).\n- **Giải pháp - Cái neo ($):**\n  + Giải thích: \"Ta cần nói với Excel là dù kéo công thức đi đâu, ô Tỷ giá (E1) phải đứng im.\"\n  + Thao tác: Quay lại công thức B1, bôi đen E1 và nhấn phím **F4** (trên laptop có thể là Fn + F4).\n  + Kết quả: =A1*$E$1.\n  + Kéo lại công thức -> Đúng.\n- **Chốt:** \"Sau này làm bài 3, 4, hễ thấy cái bảng phụ nằm riêng một chỗ (Bảng đơn giá, Bảng tên hàng) là mặc định phải bấm F4 để khóa nó lại.\"\n\n**4. Cấu trúc hàm & Dấu phân cách (5-10 Phút)**\n- **Mục đích:** Giúp sinh viên gõ đúng cú pháp hàm IF, LEFT, VLOOKUP.\n- **GV lưu ý kỹ thuật:**\n  + Nhìn vào máy tính của mình khi gõ hàm.\n  + Gõ =IF(, Excel sẽ hiện gợi ý nhỏ ở dưới (Tooltip).\n  + Quan sát kỹ: Giữa các thành phần là dấu **Phẩy (,)** hay **Chấm phẩy (;)**?\n  + Giải thích: Máy ở nhà có thể là phẩy, máy trường có thể là chấm phẩy. Phải nhìn máy để gõ, không được học vẹt.\n- **Giới thiệu nhanh các hàm sẽ dùng (Outline):**\n  + \"Lát nữa ta sẽ dùng hàm **LEFT** (lấy bên trái), **RIGHT** (lấy bên phải) để cắt Mã lớp NU18A1A lấy ra chữ NU hay số 18.\"\n  + \"Ta dùng hàm **IF** để ra lệnh: Nếu điểm < 5 thì rớt, ngược lại đậu.\"",
                        icon: "fa-book-open",
                        videoUrl: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Tạo khung sườn cho bảng tính.\n\n**Hướng dẫn:**\n- Nhập dữ liệu: Nhập chính xác nội dung như hình mẫu vào các ô từ A1 đến E8.\n- Lưu ý: Cột “Điểm” (Cột D) để trống để lát nữa nhập thử nghiệm.\n- Dữ liệu mẫu:\n  + A3: 1 | B3: Nguyễn Thục Anh | C3: NU18A1A | E3: 10000000\n  + …nhập tiếp tục đến hết dòng 8.\n- Kẻ khung:\n  + Bôi đen từ A2 đến E9.\n  + Vào thẻ Home → chọn biểu tượng Borders (hình ô vuông) → chọn All Borders.",
                        icon: "fa-keyboard",
                        slideImage: "images/Buổi_10/Bài_1/pic1.png",
                    },
                    {
                        title: "Yêu cầu 2: Đặt tên cho các vùng dữ liệu",
                        content: "**Yêu cầu:** 2. Đặt tên cho các vùng dữ liệu tương ứng với tên các trường trong bảng (Họ và tên: _hoten, Mã lớp: _malop, Điểm: _diem, Học phí: _hocphi)\n\n**Mục đích:** Thay vì nhớ địa chỉ ô phức tạp (ví dụ: E3:E8), ta đặt tên là “_hocphi” để dễ tính toán.\n\n**Thao tác mẫu cho cột Học phí:**\n1. Bôi đen vùng dữ liệu chứa tiền học phí (từ ô E3 đến E8).\n2. Click chuột phải vào vùng vừa bôi đen, chọn Define Name….\n3. Hộp thoại New Name hiện ra:\n  - Tại ô Name: Nhập chính xác chữ '_hocphi' (viết liền, không dấu).\n  - Tại ô Scope: Để nguyên là Workbook.\n  - Nhấn OK.\n\n**Thực hiện tương tự cho các cột còn lại:**\n- Bôi đen B3:B8 (Họ tên) → Đặt tên: '_hoten'.\n- Bôi đen C3:C8 (Mã lớp) → Đặt tên: '_malop'.\n- Bôi đen D3:D8 (Điểm) → Đặt tên: '_diem'.",
                        icon: "fa-tag",
                        slideImage: "images/Buổi_10/Bài_1/pic2.png",
                        videoUrl: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        title: "Yêu cầu 3: Thiết lập ràng buộc nhập liệu",
                        content: "**Yêu cầu:** 3. Thiết lập ràng buộc cho các ô thuộc cột điểm sao cho người dùng chỉ được phép nhập giá trị trong phạm vi từ 0 đến 10, nếu nhập sai sẽ dừng việc nhập liệu và xuất hiện thông báo có tiêu đề 'Dữ liệu không hợp lệ', nội dung thông điệp 'Nhập điểm nằm trong phạm vi từ 0 đến 10'\n\n**Mục đích:** Ngăn không cho nhập điểm bậy (ví dụ nhập 11 điểm hoặc nhập chữ).\n\n**Hướng dẫn:**\n1. Bôi đen vùng cần nhập điểm (từ ô D3 đến D8).\n2. Trên thanh công cụ, chọn thẻ Data → bấm vào nút Data Validation.\n3. Tại thẻ Settings (Cài đặt):\n  - Mục Allow: Chọn Whole number (Số nguyên).\n  - Mục Data: Chọn between.\n  - Min: 0 | Max: 10.\n4. Chuyển sang thẻ Error Alert (Cảnh báo lỗi):\n  - Mục Style: Chọn Stop (Dấu X đỏ).\n  - Title (Tiêu đề): 'Dữ liệu không hợp lệ'.\n  - Error message: 'Nhập điểm nằm trong phạm vi từ 0 đến 10'.\n\n👉 **Thử nghiệm:** Nhập thử số 15 vào cột điểm. Nếu báo lỗi là Thành công.",
                        icon: "fa-shield-alt",
                        slideImage: "images/Buổi_10/Bài_1/pic3.png",
                        videoUrl: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định tổng tiền học phí",
                        content: "**Yêu cầu:** 4. Xác định tổng tiền học phí thông qua tên vùng ở câu 2\n\n**Mục đích:** Tính toán nhanh bằng tên gợi nhớ.\n\n**Hướng dẫn:**\n1. Click chuột vào ô cần tính tổng (ô E9).\n2. Gõ công thức sau: =SUM(_hocphi)\n3. Nhấn Enter.\n\n**Giải thích:** Excel sẽ tự động tìm vùng có tên _hocphi (là E3:E8) để cộng lại.",
                        icon: "fa-calculator",
                        videoUrl: "https://drive.google.com/file/d/1zmd7Xs4B4Ii2vGN3Ryvs7TKvtnfxg4fy/preview"
                    },
                    {
                        title: "Mẹo nhỏ & Lỗi thường gặp",
                        content: "- Quên gõ dấu bằng (=) trước công thức.\n- Đặt tên vùng có dấu tiếng Việt hoặc khoảng trắng (Ví dụ: “Học phí” → Sai, phải là _hocphi).\n- Khi làm Data Validation xong, nhập sai nhưng không thấy lỗi → Do chưa bôi đen đúng vùng D3:D8 trước khi cài đặt.\n- **Cách kiểm tra nhanh:** Click vào ô E9, nếu thấy công thức =SUM(_hocphi) là đạt. Nếu thấy =SUM(E3:E8) là chưa đạt.",
                        icon: "fa-lightbulb"
                    },
                    {
                        title: "Hướng dẫn bổ sung: Cách đổi tên vùng (Rename)",
                        content: "**Để thay đổi tên (rename) của một khối ô (Named Range) đã đặt trước đó trong Excel, bạn không thể sửa trực tiếp trong hộp tên (Name Box - ô ở góc trên bên trái) vì việc đó sẽ chỉ tạo ra một tên mới cho vùng đó mà thôi.**\n\nThay vào đó, bạn phải sử dụng công cụ **Name Manager (Trình quản lý tên)**. Dưới đây là các bước chi tiết:\n\n**Cách 1: Sử dụng phím tắt (Nhanh nhất)**\n1. Nhấn tổ hợp phím **Ctrl + F3**.\n2. Cửa sổ **Name Manager** sẽ hiện ra.\n3. Chọn tên bạn muốn sửa trong danh sách.\n4. Nhấn nút **Edit... (Sửa...)**.\n5. Trong ô Name, gõ tên mới mà bạn muốn.\n6. Nhấn **OK**, sau đó nhấn **Close**.\n\n**Cách 2: Sử dụng thanh công cụ (Ribbon)**\n1. Trên thanh menu, chọn tab **Formulas (Công thức)**.\n2. Tìm và chọn mục **Name Manager (Trình quản lý tên)** ở nhóm \"Defined Names\".\n3. Danh sách các tên đã đặt sẽ hiện ra.\n4. Bấm chọn vào tên cũ mà bạn muốn đổi.\n5. Bấm nút **Edit... (Sửa...)** ở phía trên.\n6. Hộp thoại \"Edit Name\" hiện ra, bạn nhập tên mới vào dòng Name.\n7. Bấm **OK** để lưu lại và **Close** để thoát.\n\n**⚠️ Lưu ý quan trọng**\n- **Tự động cập nhật công thức:** Khi bạn đổi tên bằng cách này, tất cả các công thức đang sử dụng tên cũ sẽ tự động cập nhật sang tên mới. Bạn không cần phải đi sửa từng công thức.\n- **Quy tắc đặt tên:** Tên mới phải tuân thủ quy tắc của Excel:\n  + Không được có khoảng trắng (dùng dấu gạch dưới _ thay thế, ví dụ: Doanh_Thu).\n  + Không bắt đầu bằng số.\n  + Không được trùng với địa chỉ ô (ví dụ: không đặt tên là Q1 hay A10).\n  + Không chứa các ký tự đặc biệt (trừ dấu _ và .).",
                        icon: "fa-edit"
                    }
                ]
            },
            {
                id: 102,
                sessionId: 10,
                title: "Bài 2: Xử lý chuỗi & Logic",
                description: "Sử dụng hàm IF kết hợp LEFT, RIGHT, MID, VALUE đê tách thông tin từ mã số.",
                image: "images/Buổi_10/Bài_2/pic1.png",
                video: "",
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Xác định ngành học dựa vào 2 ký tự đầu của mã lớp. Biết: 
(NU: Điều dưỡng, IT: Công nghệ thông tin, EL: Ngôn ngữ Anh, LE: Luật, CE: Xây dựng, BA: Quản trị kinh doanh)
3. Xác định khóa học dựa vào 2 ký tự thứ 3 và thứ 4
4. Xác định tên sinh viên dựa vào cột họ và tên`,
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Hàm xử lý chuỗi & Hàm IF",
                        content: "**Mục tiêu:** Đây là phần \"khó nhằn\" nhất. Cần dạy sinh viên cách tách nhỏ vấn đề.\n\n**Bước 1: \"Mổ xẻ\" chuỗi văn bản (Hàm LEFT, RIGHT, MID)**\n- **Tình huống:** Cột Mã lớp có dạng NU18A1A. Ta cần lấy 2 chữ đầu (NU) để biết ngành học.\n- **GV giải thích tư duy \"Cắt bánh mì\":**\n  + Muốn lấy đầu (Trái): Dùng **LEFT**. Cú pháp: `LEFT(Chuỗi, Số_ký_tự)`.\n  + Muốn lấy đuôi (Phải): Dùng **RIGHT**.\n  + Muốn lấy khúc giữa: Dùng **MID**. Cú pháp: `MID(Chuỗi, Vị_trí_bắt_đầu, Số_lượng_lấy)`.\n- **Thực hành nhanh:**\n  + Tại một ô trống, gõ: `=LEFT(\"NU18A1A\", 2)` -> Kết quả: \"NU\".\n  + Gõ: `=MID(\"NU18A1A\", 3, 2)` -> Kết quả: \"18\" (Lấy từ ký tự thứ 3, lấy 2 ký tự).\n\n**Bước 2: Hàm IF lồng nhau (Nested IF) - Phần trọng tâm**\n- **Bài toán:** Nếu là NU thì \"Điều dưỡng\", nếu là IT thì \"CNTT\", nếu là EL thì \"Ngôn ngữ Anh\"....\n- **Phương pháp giảng dạy \"Nếu... Thì... Ngược lại\":**\n  + Đừng viết một lèo công thức dài. Hãy viết từng lớp một.\n  + **Lớp 1:** `=IF(LEFT(C3,2)=\"NU\", \"Điều Dưỡng\", \"Chưa biết\")`. (Kiểm tra xem chạy đúng chưa).\n  + **Lớp 2:** Thay chữ \"Chưa biết\" bằng hàm IF tiếp theo.\n- **Công thức mẫu (GV viết từ từ lên bảng/màn hình):**\n  ```excel\n  =IF(LEFT(C3,2)=\"NU\", \"Điều Dưỡng\",\n    IF(LEFT(C3,2)=\"IT\", \"Công nghệ thông tin\",\n      IF(LEFT(C3,2)=\"EL\", \"Ngôn ngữ Anh\",\n        \"Các ngành còn lại\")))\n  ```\n  (Dừng ở 3 ngành để sinh viên hiểu logic, sau đó yêu cầu họ tự viết tiếp cho LE, CE, BA).\n\n**Bước 3: Xử lý phần \"Tách tên\" (Nâng cao/Optional)**\n- **Lưu ý:** Công thức tách tên trong tài liệu dùng logic dò ngược từ cuối chuỗi (kết hợp MID, LEN, RIGHT) khá phức tạp với người mới.\n- **Cách giải thích đơn giản hóa:**\n  \"Công thức này hoạt động bằng cách dò từ phải sang trái, hễ gặp dấu cách (khoảng trắng) đầu tiên thì cắt toàn bộ phần chữ sau dấu cách đó ra.\"\n- **Lớp học chậm:** Có thể bỏ qua việc giải thích chi tiết logic của công thức dài dòng này mà cung cấp sẵn công thức cho sinh viên chép để trải nghiệm, dành thời gian kỹ hơn cho hàm VLOOKUP ở bài sau (vì VLOOKUP quan trọng hơn trong thực tế).",
                        icon: "fa-code"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Có dữ liệu chuẩn để hàm chạy đúng.\n\n**Hướng dẫn:**\n- Nhập dữ liệu: Nhập bảng tính từ ô A1 đến F8 theo mẫu.\n- **Lưu ý quan trọng:** Cột “Mã lớp” (Cột C) phải nhập chính xác, không thừa dấu cách.\n- Dữ liệu mẫu:\n  + C3: NU18A1A\n  + C4: IT19A1A\n  + ...\n- Định dạng: Kẻ khung (All Borders) cho bảng tính đẹp mắt.",
                        icon: "fa-keyboard",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png"
                    },
                    {
                        title: "Yêu cầu 2: Xác định ngành học",
                        content: "**Yêu cầu:** 2. Xác định ngành học dựa vào 2 ký tự đầu của mã lớp. Biết: \n(NU: Điều dưỡng, IT: Công nghệ thông tin, EL: Ngôn ngữ Anh, LE: Luật, CE: Xây dựng, BA: Quản trị kinh doanh)\n\n**Mục đích:** Dạy máy tính “Nếu thấy 2 chữ đầu là IT thì điền Công nghệ thông tin”.\n\n**Phân tích logic:**\n- Lấy 2 ký tự đầu của Mã lớp → dùng hàm LEFT.\n- So sánh với quy ước (NU, IT, EL…) → dùng hàm IF lồng nhau.\n\n**Thao tác:**\n1. Click vào ô D3.\n2. Nhập công thức:\n=IF(LEFT(C3,2)=\"NU\", \"Điều Dưỡng\", IF(LEFT(C3,2)=\"IT\", \"Công nghệ thông tin\", IF(LEFT(C3,2)=\"EL\", \"Ngôn ngữ Anh\", IF(LEFT(C3,2)=\"LE\", \"Luật\", IF(LEFT(C3,2)=\"CE\", \"Xây dựng\", \"Quản trị kinh doanh\")))))\n3. **Giải thích:**\n  - LEFT(C3,2): Cắt lấy 2 chữ cái đầu.\n  - IF(...): Nếu đúng mã này thì trả về tên ngành, sai xét tiếp.\n4. Kéo tay nắm điền (fill handle) xuống các ô còn lại.",
                        icon: "fa-code-branch",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1tGIECMBkeFWi6MqzlFl524HSeuoQWYCx/preview"
                    },
                    {
                        title: "Yêu cầu 3: Xác định khóa học",
                        content: "**Yêu cầu:** 3. Xác định khóa học dựa vào 2 ký tự thứ 3 và thứ 4\n\n**Mục đích:** Lấy con số nằm ở giữa mã lớp (Ví dụ: Lấy số 18 từ NU18A1A).\n\n**Phân tích logic:**\n- Số 18 nằm ở vị trí thứ 3 và lấy 2 ký tự → dùng hàm MID.\n- Kết quả cắt ra là văn bản, muốn tính toán phải chuyển thành số → dùng hàm VALUE.\n\n**Thao tác:**\n1. Click vào ô E3.\n2. Nhập công thức: =VALUE(MID(C3,3,2))\n3. **Giải thích:**\n  - MID(C3,3,2): Bắt đầu từ ký tự thứ 3, lấy 2 ký tự.\n  - VALUE(...): Biến kết quả thành con số.",
                        icon: "fa-cut",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1uGoWSS2CHVXRSwnB4AyX-E8Ndc-27LRO/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định tên sinh viên",
                        content: "**Yêu cầu:** 4. Xác định tên sinh viên dựa vào cột họ và tên\n\n**Mục đích:** Lấy phần tên cuối cùng trong họ tên (Ví dụ: “Nguyễn Thục Anh” → lấy “Anh”).\n\n**Phân tích logic:** Dò tìm từng ký tự từ phải sang trái, gặp dấu cách thì cắt chuỗi.\n\n**Thao tác:**\n1. Click vào ô F3.\n2. Nhập công thức:\n=IF(MID(B3,LEN(B3)-1,1)=\" \", RIGHT(B3,1), IF(MID(B3,LEN(B3)-2,1)=\" \", RIGHT(B3,2), IF(MID(B3,LEN(B3)-3,1)=\" \", RIGHT(B3,3), IF(MID(B3,LEN(B3)-4,1)=\" \", RIGHT(B3,4), RIGHT(B3,5)))))\n\n**Mẹo giải thích:** “Công thức này giống như đi dò ngược từ cuối tên lên, bao giờ gặp dấu cách thì dừng lại và cắt lấy cái tên ra.”",
                        icon: "fa-user-tag",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1rJj_LxlfAV1pF1Sl6QG687XZtdJYcC4X/preview"
                    },
                    {
                        title: "Mẹo hỗ trợ & Lỗi thường gặp",
                        content: "- **Lỗi dấu phẩy/chấm phẩy:** Máy trường có thể dùng dấu chấm phẩy (;). Nếu Enter báo lỗi, hãy đổi toàn bộ dấu (,) thành (;).\n- **Lỗi #NAME?:** Gõ sai tên hàm (VD: LEF, VALU...).\n- **Lỗi #VALUE! ở câu Khóa học:** Do cột Mã lớp gõ thiếu hoặc thừa dấu cách lạ.\n- **Lời khuyên:** Câu 4 (Tách tên) là câu phân loại. Sinh viên yếu chỉ cần làm được câu 2 và 3 là đạt yêu cầu cơ bản.",
                        icon: "fa-lightbulb"
                    }
                ]
            },
            {
                id: 103,
                sessionId: 10,
                title: "Bài 3: Tra cứu & Thống kê",
                description: "Thành thạo VLOOKUP để dò tìm giá và COUNTIF, SUMIF để báo cáo số liệu.",
                image: "images/Buổi_10/Bài_3/pic1.png",
                // video: "https://drive.google.com/file/d/1o3s8ackFaoRp3S1ThfZzsP2uWHC0oyBG/preview",
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Xác định thứ trong tuần dựa vào ngày sinh
3. Xác định cột đơn giá dựa vào mã ngành và bảng 1
4. Xác định cột thành tiền. Biết: Thành tiền bằng số tín chỉ nhân với đơn giá
5. Lập công thức điền thông tin cho bảng thống kê`,
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Hàm Tra Cứu (VLOOKUP) & Ngày Tháng",
                        content: "**Bước 1: Xử lý Ngày tháng (Hàm WEEKDAY)**\n- **Tình huống:** Cột D là ngày sinh, ta cần biết ngày đó là Thứ 2 hay Chủ nhật để điền vào cột E.\n- **GV giải thích:** \"Máy tính lưu ngày tháng là một con số, hàm WEEKDAY giúp quy đổi con số đó ra thứ tự trong tuần (Chủ nhật là số 1, Thứ 2 là số 2...)\".\n- **Thao tác:**\n  + Yêu cầu sinh viên gõ `=WEEKDAY(D3, 1)`. Kết quả trả về số (ví dụ: 2).\n  + **Kết hợp bài cũ (Hàm IF):** Bây giờ lồng hàm IF vào để máy \"nói tiếng người\":\n    `=IF(WEEKDAY(D3,1)=1, \"Chủ nhật\", IF(WEEKDAY(D3,1)=2, \"Thứ 2\", ...))`.\n  + *Mẹo:* Nhắc sinh viên copy công thức IF dài này từ tài liệu hoặc file mẫu nếu gõ quá lâu, nhưng phải hiểu logic.\n\n**Bước 2: Hàm \"Thần thánh\" VLOOKUP (Quan trọng nhất buổi học)**\n- **Bài toán:** Có Mã ngành (ví dụ \"IT\") ở bảng chính, cần lấy \"Đơn giá\" (480.000) từ Bảng phụ (Bảng 1) điền vào.\n- **GV giải thích tư duy \"Đi tìm danh bạ\":** Hàm VLOOKUP cần 4 thông tin (4 tham số):\n  1. **Tìm cái gì?** (Mã ngành IT ở dòng hiện tại - C3).\n  2. **Tìm ở đâu?** (Quét chọn Bảng 1 - Bảng phụ). **QUAN TRỌNG:** Quét xong phải nhấn **F4** ngay để khóa bảng lại.\n  3. **Lấy cột số mấy?** (Trong Bảng 1, Đơn giá nằm ở cột thứ 2, nên gõ số 2).\n  4. **Tìm chính xác không?** (Gõ số 0 để tìm chính xác tuyệt đối).\n- **Thực hành:**\n  + Công thức: `=VLOOKUP(C3, $G$13:$H$16, 2, 0)`.\n  + *Lỗi thường gặp:* Sinh viên quên nhấn F4 hoặc đếm sai thứ tự cột. Hãy yêu cầu một sinh viên làm mẫu trên máy chiếu.\n\n**Bước 3: Thống kê có điều kiện (COUNTIF, SUMIF)**\n- **Bài toán:** Đếm xem có bao nhiêu sinh viên ngành IT? Tổng tiền của ngành IT là bao nhiêu?\n- **GV hướng dẫn:**\n  + **COUNTIF (Đếm nếu...):** `=COUNTIF(Vùng_cần_đếm, Điều_kiện)`.\n    *Ví dụ:* `=COUNTIF($C$3:$C$8, \"IT\")` (hoặc trỏ vào ô chứa chữ IT).\n  + **SUMIF (Cộng nếu...):** `=SUMIF(Vùng_chứa_điều_kiện, Điều_kiện, Vùng_cần_tính_tổng)`.\n    *Ví dụ:* `=SUMIF($C$3:$C$8, \"IT\", $H$3:$H$8)`.\n  + *Lưu ý:* Vùng chứa điều kiện và Vùng tính tổng phải song song nhau (cùng kích thước).",
                        icon: "fa-search",
                        videoUrl: 'https://drive.google.com/file/d/1o3s8ackFaoRp3S1ThfZzsP2uWHC0oyBG/preview'
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Xây dựng bảng chính và bảng phụ chính xác từng ô.\n\n**Hướng dẫn:**\n- **Bảng chính (H1-H8):** Nhập tiêu đề từ A2:H2 (STT, Họ tên...) và dữ liệu mẫu.\n  + *Lưu ý:* Cột Ngày sinh (D) nhập đúng định dạng ngày/tháng/năm.\n- **Bảng 1 (Đơn giá):** Nhập tại vùng G12:H16.\n  + G13: IT - H13: 480000\n  + G14: EL - H14: 450000\n  + ... (nhập hết đến BA).\n- **Bảng Thống kê:** Nhập tại vùng B12:E16.\n  + Cột B chứa tên ngành (IT, EL, NU, BA).",
                        icon: "fa-table",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png"
                    },
                    {
                        title: "Yêu cầu 2: Xác định thứ trong tuần",
                        content: "**Yêu cầu:** 2. Xác định thứ trong tuần dựa vào ngày sinh\n\n**Mục đích:** Đổi ngày sinh sang thứ (Thứ 2... Chủ nhật).\n\n**Thao tác:**\n1. Click vào ô E3.\n2. Nhập công thức:\n=IF(WEEKDAY(D3,1)=1,\"Chủ nhật\", IF(WEEKDAY(D3,1)=2,\"Thứ 2\", IF(WEEKDAY(D3,1)=3,\"Thứ 3\", IF(WEEKDAY(D3,1)=4,\"Thứ 4\", IF(WEEKDAY(D3,1)=5,\"Thứ 5\", IF(WEEKDAY(D3,1)=6,\"Thứ 6\", \"Thứ 7\"))))))\n3. Enter và kéo công thức xuống.",
                        icon: "fa-calendar-alt",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1o3s8ackFaoRp3S1ThfZzsP2uWHC0oyBG/preview"
                    },
                    {
                        title: "Yêu cầu 3: Xác định cột đơn giá",
                        content: "**Yêu cầu:** 3. Xác định cột đơn giá dựa vào mã ngành và bảng 1\n\n**Mục đích:** Máy tự dò “Mã ngành” ở bảng chính, so sánh với “Bảng 1” để lấy giá tương ứng.\n\n**Thao tác:**\n1. Click vào ô G3, gõ: =VLOOKUP(\n2. Chọn các thành phần:\n  - **Giá trị dò:** Click ô C3. Gõ dấu phẩy (,)\n  - **Bảng dò:** Quét chọn Bảng 1 (G13:H16). **QUAN TRỌNG: Nhấn F4 ngay** -> $G$13:$H$16.\n  - **Cột lấy số liệu:** Gõ số 2. Gõ dấu phẩy (,)\n  - **Kiểu dò:** Gõ số 0 (chính xác).\n3. Công thức: =VLOOKUP(C3, $G$13:$H$16, 2, 0)\n4. Enter và kéo xuống.",
                        icon: "fa-search-dollar",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1LCh7brxb-ZjpPvXxNIyZhe3-ttkIP98K/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định cột thành tiền",
                        content: "**Yêu cầu:** 4. Xác định cột thành tiền. Biết: Thành tiền bằng số tín chỉ nhân với đơn giá\n\n**Mục đích:** Phép nhân cơ bản.\n\n**Thao tác:**\n1. Click vào ô H3.\n2. Gõ công thức: =F3*G3 (Số tín chỉ nhân Đơn giá).\n3. Enter và kéo xuống.",
                        icon: "fa-calculator",
                        slideImage: "images/Buổi_10/Bài_3/3.4.png"
                    },
                    {
                        title: "Yêu cầu 5: Lập công thức điền thông tin cho bảng thống kê",
                        content: "**Yêu cầu:** 5. Lập công thức điền thông tin cho bảng thống kê\n\n**Mục đích:** Đếm số sinh viên và tổng tiền từng ngành.\n\n**a. Đếm số sinh viên (COUNTIF):**\n- Click ô C13 (dòng IT).\n- Công thức: =COUNTIF($C$3:$C$8, B13)\n- Giải thích: $C$3:$C$8 là cột Mã ngành (Nhớ F4); B13 là điều kiện “IT”.\n\n**b. Tổng tiền (SUMIF):**\n- Click ô D13.\n- Công thức: =SUMIF($C$3:$C$8, B13, $H$3:$H$8)\n- Giải thích: $H$3:$H$8 là cột Thành tiền (Nhớ F4).",
                        icon: "fa-chart-bar",
                        slideImage: "images/Buổi_10/Bài_3/3.5.png",
                        // videoUrl: "https://drive.google.com/file/d/1RA_Ys13ts6YOkB79i-Ckhvj6UP-u7fcu/preview"
                    },
                    {
                        title: "Kiến thức nâng cao: Hàm SUMPRODUCT (Thay thế SUMIF)",
                        content: "**Đây là một cách dùng nâng cao của SUMPRODUCT (dùng để tính tổng có điều kiện thay cho SUMIF). Vì sinh viên mới học, bạn cần giảng kỹ về cơ chế \"Mảng Logic\" (True/False) thì họ mới hiểu được tại sao phép nhân lại lọc được dữ liệu.**\n\n**1. Ý tưởng cốt lõi (Giải thích trước khi gõ)**\n- **Ý nghĩa cơ bản:** SUM (Cộng) + PRODUCT (Nhân). Hàm này nhân các cặp số tương ứng rồi cộng tổng lại.\n- **Ứng dụng trong bài này:** Chúng ta dùng phép nhân để \"lọc\" dữ liệu.\n- **Trong máy tính:** TRUE (Đúng) = 1, FALSE (Sai) = 0.\n- **Quy tắc:** Bất cứ số nào nhân với 1 thì bằng chính nó (Lấy), nhân với 0 thì bằng 0 (Loại).\n\n**2. Phân tích công thức trong Bài 3**\n- **Yêu cầu:** Tính tổng tiền cho từng ngành (IT, EL, NU, BA) dùng SUMPRODUCT.\n- **Công thức mẫu:** `=$ =SUMPRODUCT((C3:C8=B13)*(H3:H8))`\n- **Diễn giải cho sinh viên:**\n  + **Vùng 1 - Điều kiện (C3:C8=B13):**\n    * Máy sẽ chạy dọc cột C (Mã ngành).\n    * Nếu gặp \"IT\" (giống ô B13) -> Trả về 1.\n    * Nếu gặp \"EL\" (khác ô B13) -> Trả về 0.\n    * Kết quả tạo ra một mảng ảo: `{1; 0; 1; 0...}`.\n  + **Vùng 2 - Vùng tính tổng (H3:H8):**\n    * Chứa số tiền thực tế: ví dụ `{5 triệu; 4 triệu; 6 triệu...}`.\n  + **Phép nhân *:**\n    * Dòng nào là IT: `1 * 5 triệu = 5 triệu` (Được giữ lại).\n    * Dòng nào không phải IT: `0 * 4 triệu = 0` (Bị loại bỏ).\n  + **Kết quả:** Hàm cộng dồn các số còn lại.\n\n**3. Các bước thực hành (Step-by-step)**\n- **Hướng dẫn sinh viên thao tác tại ô E13 (cột Tổng tiền Sumproduct):**\n  1. Gõ: `=SUMPRODUCT(`\n  2. Mở ngoặc đơn thứ nhất (để chứa điều kiện): `(` -> Quét cột Mã ngành trên bảng chính (`$C$3:$C$8`). **LƯU Ý:** Nhấn **F4** ngay lập tức.\n  3. Gõ dấu bằng và chọn ô điều kiện: `=B13` (Mã IT ở bảng thống kê - **không nhấn F4**).\n  4. Đóng ngoặc đơn điều kiện: `)`\n  5. Gõ dấu nhân: `*`\n  6. Mở ngoặc đơn thứ hai (để chứa tiền): `(` -> Quét cột Thành tiền trên bảng chính (`$H$3:$H$8`). **LƯU Ý:** Nhấn **F4**.\n  7. Đóng ngoặc đơn thứ hai và ngoặc hàm: `))`\n  8. Nhấn Enter.\n\n**4. So sánh nhanh với SUMIF**\n- **Hỏi:** \"Tại sao phải dùng công thức dài dòng này trong khi SUMIF cũng ra kết quả y hệt?\"\n- **Giải thích:**\n  + **SUMIF** là cách chuyên dụng, dễ dùng hơn cho trường hợp này.\n  + **SUMPRODUCT** là \"dao mổ trâu\", dùng nó ở đây để tập luyện tư duy mảng. Sau này khi gặp các bài toán khó hơn (ví dụ: Tính tổng tiền của ngành IT nhưng chỉ tính những người sinh sau năm 2000) thì SUMPRODUCT mới thực sự tỏa sáng vì nó xử lý được nhiều điều kiện phức tạp mà SUMIF cũ không làm được.",
                        icon: "fa-layer-group",
                        slideImage: "images/Buổi_10/Bài_3/3.5.png"
                    },
                    {
                        title: "Mẹo hỗ trợ & Lỗi thường gặp",
                        content: "- **Vấn đề phím F4:** Nếu bấm F4 mà tắt tiếng/tăng sáng màn hình -> Phải bấm tổ hợp Fn + F4. Nếu không được thì gõ tay dấu $ (Shift + 4).\n- **Lỗi #N/A:** Do Mã ngành ở bảng chính gõ thừa dấu cách (VD 'IT ' khác 'IT').\n- **Định dạng ngày:** Nếu nhập 20/03/2002 mà canh trái -> Máy hiểu sai. Mẹo: Nhập theo chuẩn máy đang hiển thị (Tháng/Ngày hay Ngày/Tháng) để đúng trước.",
                        icon: "fa-lightbulb"
                    }
                ]
            },
            {
                id: 104,
                sessionId: 10,
                title: "Bài 4: Hàm CSDL Nâng cao",
                description: "Sử dụng DSUM, DCOUNT và tạo vùng điều kiện (Criteria Range) phức tạp.",
                image: "images/Buổi_10/Bài_4/pic1.png",
                // video: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview",
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Xác định cột tên sản phẩm dựa vào mã hàng và bảng 1
3. Xác định cột nhãn hiệu dựa vào mã hàng và bảng 2
4. Xác định cột đơn giá dựa vào mã hàng và bảng 1
5. Xác định cột thành tiền bằng số lượng nhân đơn giá. Biết:
Nếu bán trước ngày 10 và hiệu Debon được giảm 10% đơn giá.
6. Hoàn thành bảng thống kê theo mặt hàng Revon
7. Hoàn thành bảng thống kê theo tháng 2
8. Hoàn thành bảng thống kê 1 và bảng thống kê 2`,
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Hàm Cơ Sở Dữ Liệu (DSUM, DCOUNT)",
                        content: "**Đây là bài khó nhất vì khái niệm Vùng điều kiện (Criteria Range) khá trừu tượng với người mới.**\n\n**Bước 1: Chuẩn bị dữ liệu & VLOOKUP nâng cao**\n- Yêu cầu sinh viên dùng VLOOKUP để điền tên sản phẩm và nhãn hiệu tương tự Bài 3.\n- *Nâng cao (Optional):* Câu tính Đơn giá trong Bài 4 kết hợp VLOOKUP và IF (Nếu nhãn hiệu là Revon thì lấy cột 3, Debon lấy cột 4...). Nếu lớp yếu, có thể bỏ qua phần lồng IF này và cho sinh viên lấy cố định cột 3 để đơn giản hóa.\n\n**Bước 2: Khái niệm \"Vùng Tiêu Chuẩn\" (Criteria Area)**\n- **GV giải thích:** \"Khác với SUMIF chỉ quy định điều kiện đơn giản trong công thức, các hàm D... (DSUM, DCOUNT) cần ta vẽ riêng một cái bảng nhỏ bên ngoài để chứa điều kiện.\"\n- **Quy tắc \"Vùng Tiêu Chuẩn\":**\n  1. Tiêu đề của vùng tiêu chuẩn phải giống y hệt tiêu đề của bảng dữ liệu gốc (Copy-Paste cho chắc ăn).\n  2. Điều kiện viết ngay bên dưới tiêu đề đó.\n- **Thực hành tạo vùng điều kiện (Theo tài liệu gợi ý):**\n  + Copy tiêu đề \"Nhãn hiệu\" ra một chỗ trống (ví dụ C48 đến D48).\n  + Gõ \"Revon\" xuống dưới ô Nhãn hiệu.\n  + Đây chính là vùng điều kiện để lọc tất cả hàng hóa là Revon.\n\n**Bước 3: Hàm DSUM (Tính tổng Database)**\n- **Cú pháp:** `=DSUM(Toàn_bộ_bảng_lớn, Tên_cột_cần_cộng, Vùng_tiêu_chuẩn_vừa_tạo)`.\n- **Thao tác:**\n  1. Chọn ô kết quả.\n  2. Gõ `=DSUM(`.\n  3. **Tham số 1 (Database):** Bôi đen toàn bộ bảng chính (bao gồm cả tiêu đề) -> Nhấn **F4**.\n  4. **Tham số 2 (Field):** Click vào ô tiêu đề cột \"Thành tiền\" (hoặc gõ tên cột trong ngoặc kép).\n  5. **Tham số 3 (Criteria):** Bôi đen Vùng tiêu chuẩn vừa tạo ở Bước 2 -> Nhấn **F4**.\n  6. Enter.\n\n**Bước 4: So sánh DSUM và SUMIF**\n- **Hỏi sinh viên:** \"Tại sao phải dùng DSUM rắc rối thế trong khi SUMIF cũng làm được?\"\n- **Giải thích:** \"DSUM mạnh hơn khi ta có nhiều điều kiện phức tạp (ví dụ: Vừa là Revon, vừa bán trong tháng 2, vừa có số lượng > 50). Lúc đó ta chỉ cần thêm cột vào Vùng tiêu chuẩn là xong, không cần sửa công thức.\"",
                        icon: "fa-database"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Xây dựng cơ sở dữ liệu bán hàng chuẩn.\n\n**Hướng dẫn:**\n- **Bảng Chính (A2:H14):** Nhập dữ liệu mã hàng, ngày bán...\n  + *Lưu ý:* Cột Ngày bán (D) đúng định dạng; Cột Mã hàng (B) không thừa dấu cách (VD 'KM1-RE').\n- **Bảng Phụ:**\n  + Bảng 1 (Đơn giá): A18:E21.\n  + Bảng 2 (Nhãn hiệu): G18:H20.\n- **Bảng Thống kê & Điều kiện:** Nhập chính xác các bảng nhỏ phía dưới.\n- **Mẹo:** Copy tiêu đề (VD 'Nhãn hiệu') từ dòng 2 dán xuống bảng điều kiện để tránh sai chính tả.",
                        icon: "fa-table",
                        // videoUrl: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview"
                    },
                    {
                        title: "Yêu cầu 2 & 3: Xác định tên sản phẩm và nhãn hiệu",
                        content: "**Yêu cầu:** 2. Xác định cột tên sản phẩm dựa vào mã hàng và bảng 1\n3. Xác định cột nhãn hiệu dựa vào mã hàng và bảng 2\n\n**Mục đích:** Luyện tập cắt chuỗi (LEFT/RIGHT) kết hợp tra cứu (VLOOKUP).\n\n**a. Tên sản phẩm (Cột E):**\n- Công thức: =VLOOKUP(LEFT(B3,1), $A$19:$E$21, 2, 0)\n- Giải thích: Cắt ký tự đầu Mã hàng, dò trong Bảng 1, lấy cột 2.\n\n**b. Nhãn hiệu (Cột F):**\n- Công thức: =VLOOKUP(RIGHT(B3,2), $G$18:$H$20, 2, 0)\n- Giải thích: Cắt 2 ký tự cuối Mã hàng, dò trong Bảng 2, lấy cột 2.",
                        icon: "fa-tag",
                        videoUrl: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định cột đơn giá",
                        content: "**Yêu cầu:** 4. Xác định cột đơn giá dựa vào mã hàng và bảng 1\n\n**Mục đích:** Tra cứu động (Cột lấy giá thay đổi tùy theo nhãn hiệu).\n\n**Phân tích:**\n- Revon lấy cột 3, Debon lấy cột 4, Maybeline lấy cột 5 -> Lồng hàm IF vào vị trí số cột.\n\n**Thao tác:**\n1. Click ô G3.\n2. Công thức:\n=VLOOKUP(LEFT(B3,1), $A$19:$E$21, IF(F3=\"Revon\", 3, IF(F3=\"Debon\", 4, 5)), 0)\n3. Giải thích: Nếu là Revon lấy cột 3, Debon lấy cột 4, còn lại cột 5.",
                        icon: "fa-search-dollar",
                        videoUrl: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview"
                    },
                    {
                        title: "Yêu cầu 5: Xác định cột thành tiền",
                        content: "**Yêu cầu:** 5. Xác định cột thành tiền bằng số lượng nhân đơn giá. Biết:\nNếu bán trước ngày 10 và hiệu Debon được giảm 10% đơn giá.\n\n**Mục đích:** Tính toán với điều kiện kép (AND).\n\n**Logic:** Nếu (Hiệu là Debon VÀ Ngày bán < 10) thì tính 90%, ngược lại 100%.\n\n**Thao tác (Ô H3):**\n=C3 * G3 * IF(AND(F3=\"Debon\", DAY(D3)<10), 90%, 1)\n- C3*G3: Số lượng x Đơn giá.\n- AND(...): Kiểm tra thỏa mãn cả 2 điều kiện.\n- 90%, 1: Mức giá áp dụng.",
                        icon: "fa-calculator",
                        videoUrl: "https://drive.google.com/file/d/1O0i8dZDTyuU5xi2bIKBP1NVvF8M5XeoQ/preview"
                    },
                    {
                        title: "Yêu cầu 6: Hoàn thành bảng thống kê theo mặt hàng Revon",
                        content: "**Mục tiêu:** Tính tổng số lượng và thành tiền của từng món (Kem, Phấn mắt, Son) nhưng chỉ lấy hãng Revon.\n\n**Bước 1: Tạo Vùng điều kiện (Quan trọng nhất)**\n- Dựa vào hình gợi ý ở cuối trang 81, bạn hướng dẫn sinh viên nhập dữ liệu vào các ô từ **A48 đến F49** như sau:\n  1. **Cặp điều kiện 1 (Cho Kem - Revon):**\n     - Ô A48: Gõ `Tên sản phẩm` | Ô B48: Gõ `Nhãn hiệu` (Tiêu đề phải giống hệt bảng chính).\n     - Ô A49: Gõ `Kem` | Ô B49: Gõ `Revon`\n  2. **Cặp điều kiện 2 (Cho Phấn mắt - Revon):**\n     - Ô C48: `Tên sản phẩm` | Ô D48: `Nhãn hiệu`\n     - Ô C49: `Phấn mắt` | Ô D49: `Revon`\n  3. **Cặp điều kiện 3 (Cho Son - Revon):**\n     - Ô E48: `Tên sản phẩm` | Ô F48: `Nhãn hiệu`\n     - Ô E49: `Son` | Ô F49: `Revon`\n\n**Bước 2: Viết hàm DSUM**\n- **Cú pháp:** `=DSUM(Bảng_dữ_liệu, Tên_cột_cần_tính, Vùng_điều_kiện)`\n- **Tại ô B25 (Số lượng Kem Revon):**\n  `=DSUM($A$2:$H$14, C2, $A$48:$B$49)`\n  + `$A$2:$H$14`: Toàn bộ bảng dữ liệu lớn (**Nhớ F4**).\n  + `C2`: Ô chứa chữ \"Số lượng\" (Để máy biết cần cộng cột nào).\n  + `$A$48:$B$49`: Vùng điều kiện vừa tạo cho Kem Revon (**Nhớ F4**).\n- **Tại ô C25 (Số lượng Phấn mắt Revon):**\n  `=DSUM($A$2:$H$14, C2, $C$48:$D$49)`\n- **Tại ô B26 (Thành tiền Kem Revon):**\n  + Tương tự như trên, chỉ thay tham số giữa thành `H2` (Ô chứa chữ \"Thành tiền\")\n  + `=DSUM($A$2:$H$14, H2, $A$48:$B$49)`\n",
                        icon: "fa-database",
                        videoUrl: "https://drive.google.com/file/d/1D6u-siD0BFBIJ7dJbYvO9HlLKMtk4Dxr/preview"
                    },
                    {
                        title: "Yêu cầu 7: Hoàn thành bảng thống kê theo tháng 2",
                        content: "**Mục tiêu:** Tính tổng cho các hãng Debon, Revon, Maybeline nhưng chỉ tính các đơn bán trong Tháng 2.\n- **Bước 1: Tạo Vùng điều kiện \"Tháng 2\" (Khó)**\n  + Đây là dạng điều kiện dùng công thức (Calculated Criteria). Dựa vào hình gợi ý dòng 51-52:\n  1. **Cặp điều kiện 1 (Cho Debon - Tháng 2):**\n     - Ô A51: Để trống (hoặc gõ chữ khác tên cột, vd: \"Tháng\").\n     - Ô B51: Gõ `Nhãn hiệu`.\n     - Ô A52: Gõ công thức `=MONTH(D3)=2` (Hàm trả về TRUE/FALSE để lọc tháng 2 từ cột Ngày bán D3).\n     - Ô B52: Gõ `Debon`\n  2. **Cặp điều kiện 2 (Cho Revon - Tháng 2):**\n     - Tương tự tại ô C51:D52, đổi B52 thành `Revon`\n  3. **Cặp điều kiện 3 (Cho Maybeline - Tháng 2):**\n     - Tương tự tại ô E51:F52, đổi F52 thành `Maybeline`\n- **Bước 2: Viết hàm DSUM**\n  + **Tại ô G25 (Số lượng Debon tháng 2):**\n    `=DSUM($A$2:$H$14, C2, $A$51:$B$52)`\n  + **Tại ô H25 (Số lượng Revon tháng 2):**\n    `=DSUM($A$2:$H$14, C2, $C$51:$D$52)`\n  + *Lưu ý:* Nếu tính \"Thành tiền\", chỉ cần đổi tham số giữa từ C2 thành H2.\n",
                        icon: "fa-database",
                        videoUrl: "https://drive.google.com/file/d/1AsM2dTAekfssf2yvY72nmlshdGQx5ucO/preview"
                    },
                    {
                        title: "Yêu cầu 8: Hoàn thành bảng thống kê 1 và bảng thống kê 2",
                        content: "**Mục tiêu:** Đếm số đơn hàng thỏa mãn điều kiện về Số lượng (lớn hơn 50 hoặc 70). Dùng hàm DCOUNT.\n- **Bước 1: Tạo Vùng điều kiện**\n  + **Điều kiện cho Son (>50):**\n    - Ô D54: Gõ `Số lượng` (Tiêu đề cột trong bảng chính).\n    - Ô D55: Gõ `>50`.\n  + **Điều kiện cho Kem (>70):**\n    - Ô E54: Gõ `Số lượng`.\n    - Ô E55: Gõ `>70`.\n  + *Lưu ý:* Cần thêm cột Tên sản phẩm đi kèm nếu đề bài yêu cầu cụ thể là \"Son > 50\" (tức là 2 điều kiện: Tên=Son VÀ SL>50). Gợi ý của đề bài chi dùng vùng >50 nên ta làm theo đề.\n- **Bước 2: Viết hàm DCOUNT**\n  + **Tại ô C30 (Đếm số đơn >50):**\n    `=DCOUNT($A$2:$H$14, \"Mã hàng\", $D$54:$D$55)`\n  + *Giải thích:* Hàm DCOUNT chỉ đếm số. Cột \"Mã hàng\" phải đảm bảo chứa số, hoặc an toàn nhất là chọn cột \"Số lượng\" (C2) để đếm. Nếu đếm cột chứa chữ (như Tên SP), phải dùng DCOUNTA.\n  + **Tại ô C31 (Đếm số đơn >70):**\n    `=DCOUNT($A$2:$H$14, \"Số lượng\", $E$54:$E$55)`\n\n**Mẹo giảng dạy cho phần này:**\n- Hãy yêu cầu sinh viên **vẽ khung** cho các vùng điều kiện này và **tô màu nền** (ví dụ màu vàng nhạt) để phân biệt chúng với bảng dữ liệu chính. Điều này giúp các em không bị chọn nhầm vùng khi viết công thức DSUM.",
                        icon: "fa-database",
                        videoUrl: "https://drive.google.com/file/d/1WFpmN0_ppnMjGRT-8KPYuUwaXAc4Ow8u/preview"
                    },
                    {
                        title: "Mẹo hỗ trợ & Lỗi thường gặp",
                        content: "- **Vùng điều kiện (Criteria):** Phải quét đủ 2 dòng (Tiêu đề + Điều kiện). Nên tô màu vàng để dễ nhìn.\n- **Lỗi Tiêu đề:** Nếu bảng chính là 'Nhãn hiệu' mà điều kiện là 'Nhãn Hiệu' (H hoa) hoặc thừa dấu cách -> DSUM trả về 0.\n- **Kiểm tra nhanh:** Nếu kết quả ra số quá lớn (bằng tổng cả bảng) -> Do quét sai vùng điều kiện (quét ô trống). Nếu ra 0 -> Sai chính tả tiêu đề.",
                        icon: "fa-lightbulb"
                    }
                ]
            },
            {
                id: 105,
                sessionId: 10,
                title: "BTVN Phần 1: Hóa đơn dịch vụ & Báo cáo",
                description: "Luyện tập VLOOKUP, SUMIF, COUNTIF thông qua bài toán thực tế về hóa đơn dịch vụ.",
                image: "images/Buổi_10/BTVN_1/2. Bảng Chính (Nhật ký sửa chữa).PNG",
                video: "",
                tasks: [],
                docs: [
                    { name: "Đề bài chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                requirements: `<div style="margin-bottom: 20px;">
    <strong>Bảng Tra Cứu (Tham khảo):</strong><br/>
    <img src="images/Buổi_10/BTVN_1/1. Bảng Tra Cứu (Bảng Giá).PNG" style="max-width: 100%; border-radius: 8px; margin-top: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>
Yêu cầu thực hiện:
• Câu 1: Điền Tên Dịch Vụ (Dùng VLOOKUP)
o Dựa vào Mã DV ở bảng chính để tìm tên trong Bảng Tra Cứu.
o Lưu ý: Khi quét bảng tra cứu (A16:C18), BẮT BUỘC PHẢI NHẤN F4 để khóa vùng (thành $A$16:$C$18).
o Công thức gợi ý: =VLOOKUP(C2, $A$16:$C$18, 2, 0)
• Câu 2: Điền Đơn Giá (Dùng VLOOKUP)
o Tương tự câu 1, nhưng lấy cột số 3 (vì cột giá nằm thứ 3 trong bảng tra cứu).
o Công thức gợi ý: =VLOOKUP(C2, $A$16:$C$18, 3, 0).
• Câu 3: Tính Thành Tiền
o Công thức: = Số Lượng * Đơn Giá.
• Câu 4: Thống kê nhanh (Dùng COUNTIF, SUMIF)
o Đếm xem có bao nhiêu xe làm dịch vụ “Bảo dưỡng phanh” (Mã BD).
o Tính tổng doanh thu của riêng dịch vụ “Đổi nhớt máy” (Mã DN).
o Gợi ý SUMIF: =SUMIF(Cột_Mã_DV, "DN", Cột_Thành_Tiền)`,
                steps: [
                    {
                        title: "Hướng dẫn thực hiện",
                        content: "**Gợi ý các bước làm bài:**\n\n1. **Chuẩn bị dữ liệu:** Nhập thông tin 'Bảng chính' và 'Bảng tra cứu' vào Excel như hình minh họa.\n2. **Tên Dịch Vụ:** Sử dụng hàm VLOOKUP dò theo Mã DV. Nhớ F4 để cố định bảng giá.\n3. **Đơn Giá:** Vẫn dùng VLOOKUP nhưng lấy cột số 3.\n4. **Thành Tiền:** Nhân số lượng với đơn giá.\n5. **Thống Kê:** Dùng COUNTIF để đếm số lần xuất hiện mã 'BD'. Dùng SUMIF để tính tổng cột 'Thành Tiền' cho mã 'DN'.",
                        icon: "fa-calculator"
                    }
                ]
            },
            {
                id: 106,
                sessionId: 10,
                title: "BTVN Phần 2: Hóa đơn & Báo cáo (Nâng cao)",
                description: "Tính toán hóa đơn dịch vụ với VLOOKUP và làm báo cáo thống kê với DSUM, DCOUNT.",
                image: "images/Buổi_10/BTVN_1/2. Bảng Chính (Nhật ký sửa chữa).PNG",
                video: "",
                tasks: [],
                docs: [
                    { name: "Đề bài chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                requirements: `<div style="margin-bottom: 20px;">
    <strong>Bảng Tra Cứu (Tham khảo):</strong><br/>
    <img src="images/Buổi_10/BTVN_1/1. Bảng Tra Cứu (Bảng Giá).PNG" style="max-width: 100%; border-radius: 8px; margin-top: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>
<strong>Mục tiêu:</strong> Tạo Vùng điều kiện và dùng hàm DSUM/DCOUNT.

1. <strong>Tạo Vùng Điều Kiện (Criteria):</strong>
   - Vùng 1: Tiêu đề 'Biển Số' + Giá trị '47A-12345'.
   - Vùng 2: Tiêu đề 'Đơn Giá' + Giá trị '>100000'.

2. <strong>Yêu cầu:</strong>
   - <strong>Tổng tiền xe biển 47:</strong> =DSUM(Bảng_Lớn, "Thành Tiền", Vùng_DK_1).
   - <strong>Đếm đơn giá > 100k:</strong> =DCOUNT(Bảng_Lớn, "Mã DV", Vùng_DK_2).`,
                steps: [
                    {
                        title: "BÀI 4: BÁO CÁO DOANH THU (Dành cho SV Khá)",
                        content: "**Mục tiêu:** Tạo Vùng điều kiện và dùng hàm DSUM/DCOUNT.\n\n**1. Tạo Vùng Điều Kiện (Criteria):**\n- Vùng 1: Tiêu đề 'Biển Số' + Giá trị '47A-12345'.\n- Vùng 2: Tiêu đề 'Đơn Giá' + Giá trị '>100000'.\n\n**2. Yêu cầu:**\n- **Tổng tiền xe biển 47:** `=DSUM(Bảng_Lớn, \"Thành Tiền\", Vùng_DK_1)`.\n- **Đếm đơn giá > 100k:** `=DCOUNT(Bảng_Lớn, \"Mã DV\", Vùng_DK_2)`.",
                        icon: "fa-chart-line"
                    },
                    {
                        title: "Góc 'Cứu Hộ' & Lỗi thường gặp",
                        content: "- **Lỗi #N/A (VLOOKUP):** Quên nhấn F4 khi chọn bảng dò.\n- **Lỗi DSUM = 0:** Tiêu đề vùng điều kiện không khớp 100% bảng chính (ví dụ thừa dấu cách).\n- **Lỗi #NAME?:** Gõ sai tên hàm (VLOOK, SUM...).",
                        icon: "fa-life-ring"
                    }
                ]
            },
        ]
    },
    {
        id: 11,
        title: "Buổi 11: Tổ chức dữ liệu trong Excel",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        quiz: "TN_Buoi11.csv",
        slide: "Slide_Excel_Buoi11.pdf",
        lessons: [
            {
                "id": 105,
                "sessionId": 11,
                "title": "Bài 5: Hàm VLOOKUP, HLOOKUP & Name Range",
                "description": "Thực hành kỹ thuật dò tìm dữ liệu bằng VLOOKUP, HLOOKUP kết hợp các hàm xử lý chuỗi (LEFT, RIGHT, MID) và đặt tên vùng.",
                "video": "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview",
                "tasks": [
                    {
                        "name": "File thực hành",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1. Nhập liệu và định dạng bảng tính.\n2. Xác định cột tên hàng dựa vào mã hàng và bảng 1.\n3. Xác định cột thành tiền. Biết: Thành tiền bằng số lượng nhân với đơn giá (Giá sỉ nếu ký tự thứ 2 là 's', ngược lại là giá lẻ).\n4. Xác định cột chuyên chở. Biết: Chuyên chở bằng thành tiền nhân với phần trăm chuyên chở (tra trong bảng 2).\n5. Xác định cột phải trả: Phải trả = Thành tiền + Chuyên chở.\n6. Thống kê tổng cộng cho các cột thông qua tên vùng (Name Range).",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Hàm VLOOKUP & HLOOKUP",
                        "content": "**Hàm VLOOKUP (Vertical Lookup):** Dò tìm giá trị trong bảng dọc (cột).\n\n**Cú pháp:** `=VLOOKUP(giá_trị_cần_tra, bảng_dò, số_thứ_tự_cột_lấy_giá_trị, [dò_tìm_gần_đúng])`\n\n- `giá_trị_cần_tra`: Giá trị bạn muốn tìm kiếm (ví dụ: Mã hàng).\n- `bảng_dò`: Vùng bảng chứa dữ liệu để dò tìm (phải bao gồm cả cột chứa giá trị cần tra và cột lấy giá trị trả về).\n- `số_thứ_tự_cột_lấy_giá_trị`: Số thứ tự của cột trong bảng dò từ đó lấy giá trị trả về (cột đầu tiên là 1).\n- `[dò_tìm_gần_đúng]`: Tùy chọn, TRUE (hoặc 1) để dò tìm gần đúng, FALSE (hoặc 0) để dò tìm chính xác.\n\n**Hàm HLOOKUP (Horizontal Lookup):** Tương tự VLOOKUP nhưng dùng cho bảng ngang (hàng).\n\n**Cú pháp:** `=HLOOKUP(giá_trị_cần_tra, bảng_dò, số_thứ_tự_hàng_lấy_giá_trị, [dò_tìm_gần_đúng])`",
                        "icon": "fa-info-circle",
                        "slideImage": "images/Buổi_11/Bài_5/5.1.png",
                        "videoUrl": "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        "title": "Chuẩn bị: Đặt tên vùng (Named Range)",
                        "content": "**Mục đích:** Giúp công thức dễ đọc và không cần nhấn F4 để cố định vùng bảng dò.\n\n**Thao tác:**\n1. Bôi đen vùng dữ liệu **Bảng 1** (từ B13 đến E15).\n2. Click chuột phải vào vùng vừa bôi đen, chọn Define Name… -> gõ tên `_bang1` và nhấn **Enter**\n3. Bôi đen vùng dữ liệu **Bảng 2** (từ H12 đến J13).\n4. Click chuột phải vào vùng vừa bôi đen, chọn Define Name… -> gõ tên `_bang2` và nhấn **Enter**.\n5. (Làm cho câu 6) Bôi đen lần lượt dữ liệu cột Thành tiền, Chuyên chở, Phải trả (dòng 3 đến dòng 8) và đặt tên lần lượt là `_thanhtien`, `_chuyencho`, `_phaitra`.",
                        "icon": "fa-tag",
                        "slideImage": "images/Buổi_11/Bài_5/5.1.png",
                        "videoUrl": "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        "title": "Yêu cầu 2: Điền Tên hàng (VLOOKUP cơ bản)",
                        "content": "**Phân tích:** Dựa vào ký tự đầu của Mã hàng để tra trong Bảng 1. Dùng hàm LEFT để lấy ký tự đầu.\n\n**Công thức tại ô C3:**\n`=VLOOKUP(LEFT(B3,1), _bang1, 2, 0)`\n\n**Giải thích:**\n- `LEFT(B3,1)`: Lấy 1 ký tự bên trái của mã hàng (Ví dụ: 'X' từ 'XL1').\n- `_bang1`: Vùng bảng dò đã đặt tên ở bước trước (hoặc dùng địa chỉ tuyệt đối `$B$13:$E$15`).\n- `2`: Lấy giá trị ở cột thứ 2 của bảng dò (Cột Tên hàng).\n- `0`: Dò tìm chính xác.",
                        "icon": "fa-search",
                        "slideImage": "images/Buổi_11/Bài_5/5.2.png",
                        "videoUrl": "https://drive.google.com/file/d/1KusbQiV_rKGdLs6lGD8xme-sDhmwnEDS/preview"
                    },
                    {
                        "title": "Yêu cầu 3: Tính Thành tiền (VLOOKUP kết hợp IF/MID)",
                        "content": "**Phân tích:**\n- Thành tiền = Số lượng * Đơn giá.\n- Đơn giá nằm trong Bảng 1 (_bang1).\n- Cột đơn giá thay đổi: Nếu ký tự thứ 2 là 's' (Giá sỉ) lấy cột 3, ngược lại (Giá lẻ) lấy cột 4.\n\n**Công thức tại ô E3:**\n`=D3 * VLOOKUP(LEFT(B3,1), _bang1, IF(MID(B3,2,1)=\"S\", 3, 4), 0)`\n\n**Giải thích:**\n- `D3`: Số lượng.\n- `MID(B3,2,1)`: Lấy 1 ký tự bắt đầu từ vị trí số 2 của Mã hàng.\n- `IF(..., 3, 4)`: Nếu ký tự đó là \"s\" thì trả về số 3 (cột Giá sỉ), ngược lại trả về số 4 (cột Giá lẻ).",
                        "icon": "fa-calculator",
                        "slideImage": "images/Buổi_11/Bài_5/5.3.png",
                        "videoUrl": "https://drive.google.com/file/d/1ojyfmvjxy5Ykee2pkewgSp9mXPNKvt1-/preview"
                    },
                    {
                        "title": "Yêu cầu 4: Tính Chuyên chở (HLOOKUP)",
                        "content": "**Phân tích:**\n- Chuyên chở = Thành tiền * % Chuyên chở.\n- % Chuyên chở tra trong Bảng 2 (bảng nằm ngang) -> Dùng HLOOKUP.\n- Mã tra cứu là ký tự cuối cùng của Mã hàng -> Dùng RIGHT. Lưu ý: Ký tự cắt ra từ chuỗi là văn bản, cần dùng VALUE để chuyển thành số mới tra được trong Bảng 2.\n\n**Công thức tại ô F3:**\n`=E3 * HLOOKUP(VALUE(RIGHT(B3,1)), _bang2, 2, 0)`\n\n**Giải thích:**\n- `VALUE(RIGHT(B3,1))`: Lấy ký tự cuối (ví dụ '1') và chuyển thành số 1.\n- `_bang2`: Vùng bảng dò ngang ($H$12:$J$13).\n- `2`: Lấy dòng số 2 của bảng dò.",
                        "icon": "fa-truck",
                        "slideImage": "images/Buổi_11/Bài_5/5.4.png",
                        "videoUrl": "https://drive.google.com/file/d/11de9ApfL1AStOC8IjVP6EQfH0d2dIrOV/preview"
                    },
                    {
                        "title": "Yêu cầu 5 & 6: Tính Tổng & Thống kê",
                        "content": "**Yêu cầu 5: Cột Phải trả**\n- Tại ô G3 gõ: `=E3 + F3` (Thành tiền + Chuyên chở).\n- Sao chép công thức xuống các dòng dưới.\n\n**Yêu cầu 6: Thống kê tổng cộng**\n- Tại dòng Tổng cộng (dòng 9), sử dụng hàm SUM với tên vùng đã đặt:\n- Tổng Thành tiền: `=SUM(_thanhtien)`\n- Tổng Chuyên chở: `=SUM(_chuyencho)`\n- Tổng Phải trả: `=SUM(_phaitra)`",
                        "icon": "fa-chart-line",
                        "slideImage": "images/Buổi_11/Bài_5/5.5.png",
                        "videoUrl": "https://drive.google.com/file/d/1RA_Ys13ts6YOkB79i-Ckhvj6UP-u7fcu/preview"
                    }
                ]
            },
            {
                "id": 106,
                "sessionId": 11,
                "title": "Bài 6: Sắp xếp (Sort) và Lọc dữ liệu (Filter)",
                "description": "Kỹ năng quản lý dữ liệu lớn: Sắp xếp đa cấp độ và trích lọc dữ liệu theo điều kiện phức tạp (AND, OR).",
                "image": "images/Buổi_11/Bài_6/6.1.png",
                "video": "",
                "tasks": [
                    {
                        "name": "File thực hành",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1. Sắp xếp bảng tính: Khu vực (A-Z), Sản phẩm (A-Z), Mùa (Spring -> Summer -> Fall).\n2. Copy bảng sang sheet 'Bài 6_Filter'.\n3. Lọc: Fruit, Spring, Doanh số > $45,000.\n4. Lọc: Vegetables, Fall, Riverside Park.\n5. Lọc: Mã 10, Summer, Doanh số >= $15,000.\n6. Lọc nâng cao: (Downtown HOẶC Westlake) VÀ Doanh số > $100,000.",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Sắp xếp & Lọc dữ liệu",
                        "content": "**1. Sắp xếp (Sort):**\nGiúp tổ chức dữ liệu để dễ dàng phân tích và tìm kiếm.\n\n- **Sắp xếp đơn giản:** Tăng dần (A-Z, 0-9) hoặc Giảm dần (Z-A, 9-0).\n- **Sắp xếp nhiều cấp (Multi-level Sort):** Khi cột đầu tiên có dữ liệu trùng nhau, Excel sẽ xét tiếp đến cột thứ 2. Ví dụ: Sắp xếp theo Tên (A-Z), nếu trùng tên thì sắp xếp theo Ngày sinh (Cũ -> Mới).\n- **Custom List:** Sắp xếp theo thứ tự tùy chỉnh không theo bảng chữ cái. Ví dụ: Thứ 2, Thứ 3... Chủ nhật; hoặc BGĐ, Trưởng phòng, Nhân viên.\n\n**2. Lọc dữ liệu (Filter):**\nTrích xuất các dòng thỏa mãn điều kiện để phân tích.\n\n- **Text Filters (Lọc văn bản):** Chứa từ (Contains), Bắt đầu bằng (Begins with), Kết thúc bằng (Ends with)...\n- **Number Filters (Lọc số):** Lớn hơn (Greater Than), Nhỏ hơn (Less Than), Top 10 giá trị cao nhất/thấp nhất, Trên trung bình (Above Average)...\n- **Logic lọc:**\n  + **VÀ (AND):** Khi lọc trên cùng 1 dòng dữ liệu (thỏa mãn tất cả điều kiện).\n  + **HOẶC (OR):** Khi chọn nhiều mục trong danh sách lọc (checkbox) hoặc dùng Advanced Filter.",
                        "icon": "fa-info-circle",
                    },
                    {
                        "title": "Yêu cầu 1: Sắp xếp dữ liệu (Custom Sort)",
                        "content": "**Lưu ý:** Mùa (Season) không sắp xếp theo A-Z mà theo trình tự thời gian (Spring, Summer, Fall), nên cần dùng Custom List.\n\n**Thao tác:**\n1. Bôi đen toàn bộ bảng dữ liệu (A2:E86).\n2. Tab **Data** -> Chọn **Sort**.\n3. Thêm các cấp độ (Add Level):\n   - **Level 1:** Sort by `Khu vực` -> A to Z.\n   - **Level 2:** Sort by `Sản phẩm` -> A to Z.\n   - **Level 3:** Sort by `Mùa` -> Tại cột **Order** -> **Custom List...**\n     - Trong bảng Custom List, gõ: `Spring, Summer, Fall` (cách nhau dấu phẩy).\n     - Nhấn Add -> OK.\n4. Nhấn OK để hoàn tất sắp xếp.",
                        "icon": "fa-sort-amount-down",
                        "slideImage": "images/Buổi_11/Bài_6/6.1.png",
                        "videoUrl": "https://drive.google.com/file/d/1MkE0ctEqHozsHXMTQhnn6FPB7Plj-Uls/preview"
                    },
                    {
                        "title": "Yêu cầu 2: Copy bảng tính sang sheet mới với tên Bài 6_Filter",
                        "content": "**Lưu ý:** Mùa (Season) không sắp xếp theo A-Z mà theo trình tự thời gian (Spring, Summer, Fall), nên cần dùng Custom List.\n\n**Thao tác:**\n1. Bôi đen toàn bộ bảng dữ liệu (A2:E86).\n2. Tab **Data** -> Chọn **Sort**.\n3. Thêm các cấp độ (Add Level):\n   - **Level 1:** Sort by `Khu vực` -> A to Z.\n   - **Level 2:** Sort by `Sản phẩm` -> A to Z.\n   - **Level 3:** Sort by `Mùa` -> Tại cột **Order** -> **Custom List...**\n     - Trong bảng Custom List, gõ: `Spring, Summer, Fall` (cách nhau dấu phẩy).\n     - Nhấn Add -> OK.\n4. Nhấn OK để hoàn tất sắp xếp.",
                        "icon": "fa-sort-amount-down",
                        "slideImage": "images/Buổi_11/Bài_6/6.1.png",
                        "videoUrl": "https://drive.google.com/file/d/1pD2n9Q3PUkWK0sC-TXImL2jr4KorLgHn/preview"
                    },
                    {
                        "title": "Yêu cầu 3: Lọc ra những sản phẩm là Fruit bán vào mùa xuân (Spring) đạt doanh số trên $45000",
                        "content": "**Chuẩn bị:** Copy dữ liệu sang sheet mới tên \"Bài 6_Filter\". Bôi đen dòng tiêu đề (Dòng 2), vào Data -> chọn **Filter** (hình cái phễu).\n\n**Thực hiện Yêu cầu 3 (Ví dụ mẫu):**\n1. Cột Sản phẩm: Bỏ chọn Select All, chỉ tích chọn **Fruit**.\n2. Cột Mùa: Chỉ tích chọn **Spring**.\n3. Cột Doanh số: Bấm nút lọc -> Chọn **Number Filters** -> Chọn **Greater Than...** -> Nhập `45000`.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-filter",
                        "slideImage": "images/Buổi_11/Bài_6/6.3.png",
                        "videoUrl": "https://drive.google.com/file/d/15lFXBUmB0Fj7evlNaUxvfiZdW8Xt76lV/preview"
                    },
                    {
                        "title": "Yêu cầu 4: Lọc ra những sản phẩm là Vegetables bán vào mùa thu (Fall) thuộc Riverside Park",
                        "content": "1. Cột Sản phẩm: Bỏ chọn Select All, chỉ tích chọn **Vegetables**.\n2. Cột Mùa: Chỉ tích chọn **Fall**.\n3. Cột Khu vực: Chọn **Riverside Park**.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-filter",
                        "slideImage": "images/Buổi_11/Bài_6/6.4.png",
                        "videoUrl": "https://drive.google.com/file/d/1xdhbFSzCOOgq47V9fTgICilp0Kx0FzEH/preview"
                    },
                    {
                        "title": "Yêu cầu 5: Lọc ra những sản phẩm có mã 10 bán vào mùa hè (Summer) đạt doanh số từ $15000 trở lên",
                        "content": "1. Cột Mã: Bỏ chọn Select All, chỉ tích chọn **10**.\n2. Cột Mùa: Chỉ tích chọn **Summer**.\n3. Cột Doanh số: Bấm nút lọc -> Chọn **Number Filters** -> Chọn **Greater Than...** -> Nhập `15000`.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-filter",
                        "slideImage": "images/Buổi_11/Bài_6/6.5.png",
                        "videoUrl": "https://drive.google.com/file/d/10ixMue7GHt14lSh04aK1Vr54pxxRPDWZ/preview"
                    },
                    {
                        "title": "Yêu cầu 6: Lọc ra những sản phẩm có mã thuộc Downtown hoặc Westlake đạt doanh số trên $100000",
                        "content": "1. Cột Khu vực: Bỏ chọn Select All, chỉ tích chọn **Downtown** và **Westlake**.\n2. Cột Doanh số: Bấm nút lọc -> Chọn **Number Filters** -> Chọn **Greater Than...** -> Nhập `100000`.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-random",
                        "slideImage": "images/Buổi_11/Bài_6/6.6.png",
                        "videoUrl": "https://drive.google.com/file/d/1M7upA48rdo9fd7KGKTDyy0isK3PWLWho/preview"
                    }
                ]
            },
            {
                "id": 107,
                "sessionId": 11,
                "title": "Bài 7: Thống kê Subtotal & PivotTable",
                "description": "Các công cụ tổng hợp dữ liệu mạnh mẽ nhất trong Excel: Subtotal cho báo cáo phân cấp và PivotTable cho báo cáo ma trận.",
                "image": "images/Buổi_11/Bài_7/thumb.png",
                "video": "",
                "tasks": [
                    {
                        "name": "File thực hành (dùng dữ liệu Bài 6)",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1-3. Thống kê doanh số theo Khu vực, Mùa, Sản phẩm dùng Subtotal.\n4. Thống kê dùng Consolidate (ít dùng).\n5-7. Tạo báo cáo PivotTable:\n   - Cột: Mã, Dòng: Sản phẩm, Giá trị: Doanh số.\n   - Cột: Mùa, Dòng: Sản phẩm, Giá trị: Doanh số.\n   - Cột: Khu vực, Dòng: Sản phẩm, Giá trị: Doanh số.",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Subtotal & PivotTable",
                        "content": "**1. Subtotal (Tổng phụ):**\nCông cụ tạo báo cáo phân nhóm và tính tổng tự động.\n- **Điều kiện bắt buộc:** Dữ liệu phải được **SẮP XẾP (SORT)** theo cột cần gom nhóm trước.\n- **Cấu trúc Subtotal:**\n  + **At each change in:** Chọn cột phân loại (Ví dụ: Khu vực).\n  + **Use function:** Chọn hàm thống kê (Sum, Count, Average...).\n  + **Add subtotal to:** Chọn cột cần tính toán (Ví dụ: Doanh số).\n- **Phân cấp (Outline):** Excel tạo ra các cấp độ 1, 2, 3 bên trái màn hình để mở rộng hoặc thu gọn dữ liệu.\n\n**2. PivotTable (Bảng tổng hợp):**\nCông cụ phân tích dữ liệu đa chiều mạnh mẽ nhất Excel.\n- **Ưu điểm:** Không làm thay đổi dữ liệu gốc, linh hoạt kéo thả, tự động cập nhật báo cáo.\n- **4 Vùng thao tác:**\n  + **Rows:** Các tiêu đề dòng (Ví dụ: Tên sản phẩm).\n  + **Columns:** Các tiêu đề cột (Ví dụ: Khu vực).\n  + **Values:** Dữ liệu số liệu cần tính toán (Ví dụ: Tổng doanh số).\n  + **Filters:** Bộ lọc tổng quát cho toàn báo cáo (Ví dụ: Năm).",
                        "icon": "fa-info-circle",
                    },
                    {
                        "title": "Yêu cầu 1, 2, 3: Hướng dẫn Subtotal, Thống kê doanh số bán hàng nông sản",
                        "content": "**Nguyên tắc vàng:** Phải SẮP XẾP (Sort) dữ liệu theo cột cần thống kê trước khi làm Subtotal.\n\n**Thao tác (Thống kê theo Khu vực):**\n1. Sắp xếp cột **Khu vực** (A-Z).\n2. Bôi đen bảng dữ liệu.\n3. Vào Data -> chọn **Subtotal**.\n4. Thiết lập:\n   - **At each change in:** Chọn `Khu vực`.\n   - **Use function:** Chọn `Sum` (Tính tổng).\n   - **Add subtotal to:** Tích chọn `Doanh số`.\n5. Nhấn OK.\n\n*(Làm tương tự cho Mùa và Sản phẩm: Nhớ phải Sort cột Mùa hoặc Sản phẩm trước)*",
                        "icon": "fa-list-ol",
                        "videoUrl": 'https://drive.google.com/file/d/1AW_sekP8szM8df4Joz8qaBhV_xiDuP9T/preview'
                    },
                    {
                        "title": "Yêu cầu 4: Thống kê doanh số bán hàng nông sản theo mùa hoặc sản phẩm hoặc mã",
                        "content": "1. Tạo một **Sheet mới** hoặc chọn một vùng trống trên sheet hiện tại để tránh ghi đè dữ liệu cũ.\n2. Click chuột chọn ô đầu tiên nơi muốn hiển thị kết quả (ví dụ ô **A1**).\n3. Vào tab **Data** -> Chọn **Consolidate**.\n4. Trong hộp thoại Consolidate:\n   **Nguyên tắc quan trọng:** Vùng dữ liệu quét (Reference) phải BẮT ĐẦU bằng cột chứa tiêu chí muốn thống kê.\n\nTrong hộp thoại Consolidate:\n- **Function:** Chọn `Sum` (để tính tổng).\n- **Reference:** Quét vùng dữ liệu theo 1 trong 3 trường hợp sau:\n  + *Nếu thống kê theo Mùa:* Quét từ cột **Mùa** đến hết cột **Doanh số** (Bỏ qua các cột Mã, Sản phẩm, Khu vực phía trước).\n  + *Nếu thống kê theo Sản phẩm:* Quét từ cột **Sản phẩm** đến hết cột **Doanh số**.\n  + *Nếu thống kê theo Mã:* Quét từ cột **Mã** đến hết cột **Doanh số**.\n\n-> Sau khi quét xong, nhấn nút **Add** để thêm vào danh sách. Tại mục **Use labels in** (Sử dụng nhãn trong), tích chọn cả 2 ô:\n- `Top row`: Để giữ lại dòng tiêu đề (ví dụ chữ \"Doanh số\").\n- `Left column`: Để Excel hiểu cột đầu tiên bên trái của vùng vừa quét chính là đối tượng cần gom nhóm (Mùa/Sản phẩm...).\n\nNhấn **OK** để hoàn tất.",
                        "icon": "fa-list-ol",
                        "videoUrl": 'https://drive.google.com/file/d/1xCNoeEFVS_xIYSAKh9sDhkIDLALTQAzP/preview'
                    },
                    {
                        "title": "Yêu cầu 5, 6, 7: Tạo báo cáo PivotTable",
                        "content": "**Ví dụ Yêu cầu 7: Khu vực (Cột) - Sản phẩm (Dòng)**\n\n1. Bôi đen bảng dữ liệu gốc (Bài 6).\n2. Vào tab **Insert** -> Chọn **PivotTable** -> Nhấn OK (để tạo ở sheet mới).\n3. Tại bảng **PivotTable Fields** (bên phải màn hình):\n   - Kéo trường `Sản phẩm` thả vào ô **Rows** (Dòng).\n   - Kéo trường `Khu vực` thả vào ô **Columns** (Cột).\n   - Kéo trường `Doanh số` thả vào ô **Values** (Giá trị).\n4. Định dạng số tiền: Click chuột phải vào vùng số liệu -> Number Format -> Chọn Accounting/Currency.\n5. Đổi tên sheet thành \"Cau_7\" theo yêu cầu.",
                        "icon": "fa-table",
                        "videoUrl": "https://drive.google.com/file/d/12uK2kcNR5ycjRSPuhK51OyU-r_MekOwi/preview"
                    }
                ]
            },
            {
                "id": 108,
                "sessionId": 11,
                "title": "Bài 8: Định dạng nâng cao & Table",
                "description": "Trực quan hóa dữ liệu với Conditional Formatting và làm sạch dữ liệu với Remove Duplicates.",
                "image": "images/Buổi_11/Bài_8/thumb.png",
                "video": "",
                "tasks": [
                    {
                        "name": "File thực hành",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1. Định dạng cột doanh số: Gradient Fill Orange Data Bar.\n2. Chuyển vùng A2:E86 thành Table.\n3. Thao tác Table: Total Row, Banded Rows.\n4. Xóa dữ liệu trùng (Remove Duplicates) theo Khu vực và Sản phẩm.",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Conditional Formatting & Table",
                        "content": "**1. Conditional Formatting (Định dạng có điều kiện):**\nTự động thay đổi màu sắc ô dựa trên giá trị của nó.\n- **Highlight Cells Rules:** Tô màu ô lớn hơn/nhỏ hơn giá trị X, chứa văn bản Y, hoặc trùng lặp (Duplicate Values).\n- **Top/Bottom Rules:** Tô màu 10 giá trị cao nhất, top 10%, hoặc giá trị trên trung bình.\n- **Data Bars:** Vẽ biểu đồ thanh ngay trong ô (thanh càng dài giá trị càng lớn).\n- **Color Scales:** Tô màu dạng bản đồ nhiệt (Xanh - Vàng - Đỏ).\n- **Icon Sets:** Hiển thị biểu tượng (Mũi tên, Cờ, Đèn giao thông) bên cạnh số liệu.\n\n**2. Table (Bảng số liệu chuẩn):**\nBiến vùng dữ liệu thường thành bảng thông minh (Ctrl + T).\n- **Tính năng đặc biệt:**\n  + **Auto-Filter:** Tự động có nút lọc ở tiêu đề.\n  + **Total Row:** Dòng tổng cộng cuối bảng với menu chọn hàm nhanh (Sum, Average...).\n  + **Auto-Expand:** Tự động mở rộng định dạng và công thức khi thêm dòng mới.\n  + **Structured Reference:** Công thức dùng tên cột (VD: `=[@Đơn giá]*[@Số lượng]`) thay vì địa chỉ ô, giúp dễ đọc và ít sai sót.",
                        "icon": "fa-info-circle",
                    },
                    {
                        "title": "Yêu cầu 1: Conditional Formatting",
                        "content": "**Mục đích:** Vẽ biểu đồ thanh ngay trong ô để so sánh doanh số trực quan.\n\n**Thao tác:**\n1. Bôi đen cột dữ liệu Doanh số (trừ tiêu đề).\n2. Vào tab **Home** -> **Conditional Formatting**.\n3. Chọn **Data Bars**.\n4. Chọn mẫu **Gradient Fill - Orange Data Bar** (Màu cam chuyển sắc).",
                        "icon": "fa-palette",
                        "videoUrl": "https://drive.google.com/file/d/15cEVpk0K8KGUCBa_1ges4pwxMsB0zecQ/preview"
                    },
                    {
                        "title": "Yêu cầu 2: Làm việc với Table",
                        "content": "**Tạo bảng:**\n1. Bôi đen vùng dữ liệu A2:E86.\n2. Nhấn tổ hợp phím **Ctrl + T** (hoặc Insert -> Table).\n3. Đảm bảo tích chọn \"My table has headers\" -> OK.",
                        "icon": "fa-table",
                        "videoUrl": "https://drive.google.com/file/d/1AOmKeZ9fhdYvP6Xn1LWC2pL2-bE2x1BL/preview"
                    },
                    {
                        "title": "Yêu cầu 3: Làm việc với Table",
                        "content": "**Tùy chỉnh bảng (Table Design):**\n- Khi chọn bảng, tab **Table Design** xuất hiện trên thanh menu.\n- Tích chọn **Total Row**: Tự động thêm dòng tổng cộng ở cuối.\n- Tích/Bỏ tích **Banded Rows**: Để làm hiện/ẩn màu xen kẽ giữa các dòng.",
                        "icon": "fa-table",
                        "videoUrl": "https://drive.google.com/file/d/1b2pRuEJkJ98cEeukG43ELF3xp8iApHIE/preview"
                    },
                    {
                        "title": "Yêu cầu 4: Xóa dữ liệu trùng (Remove Duplicates)",
                        "content": "**Cảnh báo:** Thao tác này sẽ xóa mất dữ liệu, nên cần copy sang sheet mới trước (đặt tên `remove_kq`).\n\n**Thao tác:**\n1. Tại sheet mới, bôi đen bảng (hoặc chọn bảng Table).\n2. Vào tab **Data** -> Chọn biểu tượng **Remove Duplicates**.\n3. Trong hộp thoại hiện ra:\n   - Chỉ tích chọn 2 trường: `Khu vực` và `Sản phẩm` (theo đề bài).\n   - Bỏ tích các trường khác.\n4. Nhấn OK.\n\n**Kết quả:** Excel sẽ giữ lại các dòng duy nhất của cặp (Khu vực + Sản phẩm) và xóa các dòng lặp lại.",
                        "icon": "fa-trash-alt",
                        "videoUrl": "https://drive.google.com/file/d/1ZD4Xc3n7huEMuB-Dkdd_mDWcT2qmkAfR/preview"
                    }
                ]
            }
        ]
    },
    {
        id: 68,
        title: "Excel Nâng Cao",
        description: "Các bài học nâng cao về Microsoft Excel dựa trên giáo trình GCFGlobal.",
        totalLessons: 23,
        lessons: [
            {
                id: "ea_13",
                sessionId: 68,
                title: "Bài 13: Giới thiệu về Công thức",
                description: "Nội dung chi tiết cho bài Bài 13: Giới thiệu về Công thức.",
                video: "https://www.youtube.com/embed/xc14gFFyiTw",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 13: giới thiệu công thức</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 13: Giới thiệu về Công thức",
                        content: "<p>/en/excel/page-layout-and-printing/content/</p>\n<h3>Giới thiệu</h3>\n<p>Một trong những tính năng mạnh mẽ nhất trong Excel là khả năng ** tính toán ** thông tin số bằng cách sử dụng ** công thức **. Giống như một chiếc máy tính, Excel có thể cộng, trừ, nhân và chia. Trong bài học này, chúng tôi sẽ hướng dẫn bạn cách sử dụng ** tham chiếu ô ** để tạo các công thức đơn giản.</p>\n<p>Hãy xem video bên dưới để tìm hiểu thêm về cách tạo công thức trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Toán tử toán học",
                        content: "<p>Excel sử dụng các toán tử tiêu chuẩn cho các công thức:<strong> dấu cộng ** cho phép cộng (</strong>+<strong>),</strong> dấu trừ ** cho phép trừ (<strong>-</strong>),<strong> dấu hoa thị ** cho phép nhân (</strong>\\</p>\n<ul>\n<li><strong>),</strong> dấu gạch chéo lên ** cho phép chia (<strong>/</strong>) \nvà ** dấu mũ <strong>(</strong>^**) \ncho số mũ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Mathematical operators in Excel\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/simpform_graphic_operators4.png\" /></li>\n</ul>\n<p>Tất cả các công thức trong Excel phải bắt đầu bằng ** dấu bằng <strong>(</strong>=**). Điều này là do ô chứa hoặc bằng công thức và giá trị mà nó tính toán.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Hiểu tham chiếu ô",
                        content: "<p>Mặc dù bạn có thể tạo các công thức đơn giản trong Excel bằng cách sử dụng các số (ví dụ:<strong>=2+2 ** hoặc </strong>=5*5 <strong>), nhưng hầu hết bạn sẽ sử dụng ** địa chỉ ô ** để tạo công thức. Điều này được gọi là tạo ** tham chiếu ô </strong>. Việc sử dụng tham chiếu ô sẽ đảm bảo rằng công thức của bạn luôn chính xác vì bạn có thể thay đổi giá trị của các ô được tham chiếu mà không cần phải viết lại công thức.</p>\n<p>Trong công thức bên dưới, ô A3 cộng giá trị của ô A1 và A2 bằng cách tạo tham chiếu ô:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A formula in Excel using cell references\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_understanding_1.png\" /></p>\n<p>Khi bạn nhấn Enter, công thức sẽ tính toán và hiển thị câu trả lời trong ô A3:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formula automatically calculates the result.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_understanding_2.png\" /></p>\n<p>Nếu giá trị trong các ô được tham chiếu thay đổi, công thức sẽ tự động tính toán lại:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formula automatically updates if one of the referenced cells changes.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_understanding_3.png\" /></p>\n<p>Bằng cách kết hợp toán tử với tham chiếu ô, bạn có thể tạo nhiều công thức đơn giản trong Excel. Công thức cũng có thể bao gồm sự kết hợp của tham chiếu ô và số, như trong các ví dụ bên dưới:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Illustration of simple formulas\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/simpform_graphic_formulas5.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để tạo một công thức:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ sử dụng một công thức đơn giản và tham chiếu ô để tính toán ngân sách.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa công thức. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D12 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_create_select.png\" /></p>\n</li>\n<li>\n<p>Nhập ** dấu bằng (=)<strong>. Hãy chú ý cách nó xuất hiện trong cả ** ô ** và ** công thức ** ** thanh </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Starting the formula with an equals sign\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_create_equals_sign.png\" /></p>\n</li>\n<li>\n<p>Nhập ** ô ** ** địa chỉ ** của ô bạn muốn tham chiếu đầu tiên trong công thức: ô ** D10 ** trong ví dụ của chúng tôi.** đường viền màu xanh ** sẽ xuất hiện xung quanh ô được tham chiếu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering the cell reference for D10\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_create_cell_reference.png\" /></p>\n</li>\n<li>\n<p>Nhập ** toán tử toán học ** bạn muốn sử dụng. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** dấu cộng <strong>(</strong>++**).</p>\n</li>\n<li>\n<p>Nhập ** địa chỉ ô ** của ô bạn muốn tham chiếu thứ hai trong công thức: ô ** D11 ** trong ví dụ của chúng tôi.** viền màu đỏ ** sẽ xuất hiện xung quanh ô được tham chiếu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering the addition operator and the reference for cell D11\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_create_operator.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn. Công thức sẽ được ** tính ** và ** giá trị ** sẽ được hiển thị trong ô. Nếu bạn chọn lại ô, hãy lưu ý rằng ô hiển thị kết quả, trong khi thanh công thức hiển thị công thức.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Press enter to complete the formula and display the result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_create_result.png\" /></p>\n</li>\n</ol>\n<p>Nếu kết quả của một công thức quá lớn để hiển thị trong một ô, nó có thể xuất hiện dưới dạng ** dấu thăng **(#######) \nthay vì một giá trị. Điều này có nghĩa là cột không đủ rộng để hiển thị nội dung ô. Chỉ cần ** tăng chiều rộng cột ** để hiển thị nội dung ô.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Sửa đổi giá trị bằng tham chiếu ô",
                        content: "<p>Ưu điểm thực sự của tham chiếu ô là chúng cho phép bạn ** cập nhật ** ** dữ liệu ** trong bảng tính mà không cần phải viết lại công thức. Trong ví dụ bên dưới, chúng tôi đã sửa đổi giá trị của ô D10 từ $1.200 thành $1.800. Công thức ở ô D12 sẽ tự động tính toán lại và hiển thị giá trị mới ở ô D12.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formula automatically recalculates if a referenced cell is modified.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_modifying.png\" /></p>\n<p>Excel ** không phải lúc nào cũng cho bạn biết ** nếu công thức của bạn có lỗi, vì vậy, bạn có trách nhiệm kiểm tra tất cả các công thức của mình. Để tìm hiểu cách thực hiện việc này, bạn có thể đọc bài học <a href=\"../../../excelformulas/doublecheck-your-formulas/1/index.html\">Kiểm tra kỹ công thức của bạn</a> \ntừ hướng dẫn về <a href=\"../../../excelformulas/index.html\">Công thức Excel</a> \ncủa chúng tôi.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để tạo một công thức bằng phương pháp trỏ và nhấp:",
                        content: "<p>Thay vì nhập địa chỉ ô theo cách thủ công, bạn có thể ** trỏ và nhấp ** các ô bạn muốn đưa vào công thức của mình. Phương pháp này có thể tiết kiệm rất nhiều thời gian và công sức khi tạo công thức. Trong ví dụ dưới đây, chúng tôi sẽ tạo một công thức để tính chi phí đặt hàng một số hộp đựng đồ bạc bằng nhựa.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa công thức. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_pnc_select.png\" /></p>\n</li>\n<li>\n<p>Nhập ** dấu bằng (=)**.</p>\n</li>\n<li>\n<p>Chọn ** ô ** bạn muốn tham chiếu đầu tiên trong công thức: ô ** B4 ** trong ví dụ của chúng tôi.** địa chỉ ô ** sẽ xuất hiện trong công thức.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the first cell to reference in the formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_pnc_click_1.png\" /></p>\n</li>\n<li>\n<p>Nhập ** toán tử toán học ** bạn muốn sử dụng. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** dấu nhân (*)**.</p>\n</li>\n<li>\n<p>Chọn ** ô ** bạn muốn tham chiếu thứ hai trong công thức: ô ** C4 ** trong ví dụ của chúng tôi.** địa chỉ ô ** sẽ xuất hiện trong công thức.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the second cell to reference in the formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_pnc_click_2.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn. Công thức sẽ được ** tính ** và ** giá trị ** sẽ được hiển thị trong ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Press enter to complete the formula and display the result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_pnc_result.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Sao chép công thức bằng núm điều khiển điền",
                        content: "<p>Công thức cũng có thể được ** sao chép ** sang các ô liền kề bằng ** điền ** ** tay cầm <strong>, điều này có thể tiết kiệm rất nhiều thời gian và công sức nếu bạn cần thực hiện ** cùng một phép tính ** nhiều lần trong một trang tính.</strong> Tay điều khiển điền ** là hình vuông nhỏ ở góc dưới bên phải của (các) \nô đã chọn.</p>\n<ol>\n<li>\n<p>Chọn ô chứa công thức bạn muốn sao chép. Nhấp và kéo ** bộ điều khiển điền ** qua các ô bạn muốn điền.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Drag the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_fill_select2.png\" /></p>\n</li>\n<li>\n<p>Sau khi bạn thả chuột, công thức sẽ được sao chép vào các ô đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The formula is copied into the selected cells.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_fill_result.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để chỉnh sửa một công thức:",
                        content: "<p>Đôi khi bạn có thể muốn sửa đổi một công thức hiện có. Trong ví dụ bên dưới, chúng tôi đã nhập địa chỉ ô không chính xác vào công thức của mình, vì vậy chúng tôi cần phải sửa địa chỉ đó.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** chứa công thức bạn muốn chỉnh sửa. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D12 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_edit_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** thanh công thức ** để chỉnh sửa công thức. Bạn cũng có thể ** bấm đúp ** vào ô để xem và chỉnh sửa công thức trực tiếp trong ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the formula bar to edit the formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_edit_click.png\" /></p>\n</li>\n</ol>\n<p>3.<strong> đường viền ** sẽ xuất hiện xung quanh bất kỳ ô được tham chiếu nào. Trong ví dụ của chúng tôi, chúng tôi sẽ thay đổi phần đầu tiên của công thức thành ô tham chiếu ** D10 ** thay vì ô ** D9 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Editing the formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_edit_edit.png\" /></p>\n<ol>\n<li>\n<p>Khi bạn hoàn tất, hãy nhấn ** Enter ** trên bàn phím hoặc chọn lệnh ** Enter ** trong thanh công thức.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Press enter to finish editing\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_edit_enter.png\" /></p>\n</li>\n<li>\n<p>Công thức sẽ được ** cập nhật ** và ** giá trị mới ** sẽ được hiển thị trong ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The new formula displays its result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_edit_result.png\" /></p>\n</li>\n</ol>\n<p>Nếu thay đổi ý định, bạn có thể nhấn phím ** Esc ** trên bàn phím hoặc nhấp vào lệnh ** Hủy ** trong thanh công thức để tránh vô tình thực hiện các thay đổi đối với công thức của mình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Cancel an edit to a formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formulas_edit_cancel.png\" /></p>\n<p>Để hiển thị tất cả các công thức trong bảng tính, bạn có thể giữ phím ** Ctrl ** và nhấn <strong><code>**(dấu huyền). Phím dấu huyền thường nằm ở góc trên bên trái của bàn phím. Bạn có thể nhấn ** Ctrl+</code></strong> lần nữa để chuyển về chế độ xem bình thường.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_introformulas_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Tạo công thức trong ô ** D4 ** nhân số lượng trong ** B4 ** với giá mỗi đơn vị trong ô ** C4 **.</li>\n<li>Sử dụng ** bộ điều khiển điền ** để sao chép công thức trong ô ** D4 ** sang các ô ** D5:D7 **.</li>\n<li>Thay đổi giá mỗi đơn vị của chuối chiên trong ô ** C6 ** thành $2,25. Lưu ý rằng tổng dòng cũng tự động thay đổi.</li>\n<li>Chỉnh sửa công thức tính tổng trong ô ** D8 ** để nó cũng thêm ô ** D7 **.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Intro Formulas Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-24_at_3.27.57_pm.png\" /></li>\n</ol>\n<p>/en/excel/creating-more-complex-formulas/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_14",
                sessionId: 68,
                title: "Bài 14: Tạo Công thức phức tạp hơn",
                description: "Nội dung chi tiết cho bài Bài 14: Tạo Công thức phức tạp hơn.",
                video: "https://www.youtube.com/embed/J-W3thqtDpQ",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 14: Tạo công thức phức tạp hơn</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 14: Tạo các công thức phức tạp hơn",
                        content: "<p>/en/excel/giới thiệu công thức/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Bạn có thể có kinh nghiệm làm việc với các công thức chỉ chứa một toán tử, như ** 7+9 <strong>. Các công thức phức tạp hơn có thể chứa ** một số toán tử </strong>, như ** 5+2*8 <strong>. Khi có nhiều thao tác trong một công thức,</strong> thứ tự các phép tính ** sẽ cho Excel biết thao tác nào cần tính trước. Để viết công thức cho bạn câu trả lời chính xác, bạn cần hiểu thứ tự thực hiện các phép tính.</p>\n<p>Xem video dưới đây để tìm hiểu thêm về các công thức phức tạp.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Trình tự các thao tác",
                        content: "<p>Excel tính toán các công thức dựa trên ** thứ tự thực hiện ** sau:</p>\n<ol>\n<li>Các phép toán được đặt trong ** dấu ngoặc đơn ** 2.<strong> Tính toán hàm mũ </strong>(ví dụ: 3^2)</li>\n</ol>\n<p>3.<strong> Nhân ** và ** chia </strong>, tùy theo điều kiện nào đến trước\n4.<strong> Cộng ** và ** trừ </strong>, tùy điều kiện nào đến trước</p>\n<p>Một từ ghi nhớ có thể giúp bạn ghi nhớ đơn hàng là ** PEMDAS ** hoặc ** P ** lease ** E ** xcuse ** M ** y ** D ** ear ** A ** unt ** S ** ally.</p>\n<p>Bấm vào các mũi tên trong trình chiếu bên dưới để tìm hiểu cách sử dụng thứ tự các phép tính để tính toán các công thức trong Excel.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"PEMDAS, 10+(6-3)\n/2^2*4-1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order1.png\" /></li>\n</ul>\n<p>Mặc dù công thức này có vẻ phức tạp nhưng chúng ta có thể sử dụng thứ tự thực hiện từng bước để tìm ra câu trả lời đúng.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"P dấu ngoặc đơn: 10+(6-3)\n/2^2*4-1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order2.png\" /></li>\n</ul>\n<p>Đầu tiên, chúng ta sẽ bắt đầu bằng cách tính toán mọi thứ bên trong dấu ngoặc đơn. Trong trường hợp này, chúng ta chỉ cần tính một điều: 6-3=3.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Số mũ E: 10+3/2^2*4-1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order3.png\" /></li>\n</ul>\n<p>Như bạn có thể thấy, công thức trông đơn giản hơn. Tiếp theo, chúng ta sẽ xem liệu có số mũ nào không. Có một: 2^2=4.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"MD nhân chia, tùy điều kiện nào đến trước: 10+3/4*4-1\" src=\"image/complex_order4.png\" /></li>\n</ul>\n<p>Tiếp theo, chúng ta sẽ giải bất kỳ phép nhân và chia nào, thực hiện từ trái sang phải. Vì phép chia đứng trước phép nhân nên nó được tính trước: 3/4=0,75.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Phép nhân MD, tùy điều kiện nào đến trước: 10+0,75*4-1\" src=\"image/complex_order5.png\" /></li>\n</ul>\n<p>Bây giờ, chúng ta sẽ giải phép nhân còn lại: 0,75*4=3.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Phép trừ cộng AS, tùy điều kiện nào đến trước: 10+3-1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order6.png\" /></li>\n</ul>\n<p>Tiếp theo, chúng ta sẽ tính bất kỳ phép cộng hoặc phép trừ nào, lại thực hiện từ trái sang phải. Phép cộng có trước: 10+3=13.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Phép trừ cộng AS, tùy điều kiện nào đến trước: 13-1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order7.png\" /></li>\n</ul>\n<p>Cuối cùng, chúng ta có một phép trừ còn lại: 13-1=12.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"answer: 13-1=12\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order8.png\" /></li>\n</ul>\n<p>Bây giờ chúng ta đã có câu trả lời: 12. Và đây chính xác là kết quả bạn sẽ nhận được nếu nhập công thức vào Excel.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"GCFLearnFree.org\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_order9.png\" /></li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Tạo công thức phức tạp",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ trình bày cách Excel sử dụng thứ tự các phép tính để giải một công thức phức tạp hơn. Ở đây, chúng tôi muốn tính chi phí ** thuế bán hàng ** cho hóa đơn cung cấp dịch vụ ăn uống. Để thực hiện việc này, chúng ta sẽ viết công thức dưới dạng <strong>=(D3+D4+D5)\n*0.075 ** trong ô ** D6 </strong>. Công thức này sẽ cộng giá các mặt hàng của chúng ta, sau đó nhân giá trị đó với thuế suất 7,5% (được viết là 0,075) \nđể tính ra câu trả lời.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Creating a complex formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_tax_formula.png\" /></p>\n<p>Excel tuân theo thứ tự thực hiện và trước tiên cộng các giá trị bên trong dấu ngoặc đơn:<strong>(45,80+68,70+159,60) \n= 274,10 </strong>. Sau đó, hệ thống sẽ nhân giá trị đó với thuế suất:<strong> 274,10*0,075 </strong>. Kết quả sẽ cho thấy thuế bán hàng là <strong>$20,56 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_tax_result.png\" /></p>\n<p>Điều đặc biệt quan trọng là phải tuân theo thứ tự thực hiện các thao tác khi tạo công thức. Nếu không, Excel sẽ không tính toán kết quả chính xác. Trong ví dụ của chúng tôi, nếu không bao gồm ** dấu ngoặc đơn ** thì phép nhân được tính trước và kết quả không chính xác. Dấu ngoặc đơn thường là cách tốt nhất để xác định phép tính nào sẽ được thực hiện đầu tiên trong Excel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula without parentheses\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_tax_incorrect.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để tạo một công thức phức tạp bằng cách sử dụng thứ tự thực hiện các thao tác:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ sử dụng ** tham chiếu ô ** cùng với ** giá trị số ** để tạo một công thức phức tạp giúp tính ** tổng phụ ** cho hóa đơn cung cấp dịch vụ ăn uống. Công thức sẽ tính toán chi phí của từng mục menu trước, sau đó cộng các giá trị này.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa công thức. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** C5 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_subtotal_cell.png\" /></p>\n</li>\n<li>\n<p>Nhập ** công thức ** của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập <strong>=B3*C3+B4*C4 </strong>. Công thức này sẽ tuân theo thứ tự thực hiện, đầu tiên thực hiện phép nhân:<strong> 2,79*35 ** </strong>= 97,65 ** và ** 2,29*20 = 45,80 <strong>. Sau đó, nó sẽ cộng các giá trị này để tính tổng:</strong> 97,65+45,80 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Creating a complex formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_subtotal_formula.png\" /></p>\n</li>\n<li>\n<p>Kiểm tra kỹ độ chính xác của công thức, sau đó nhấn ** Enter ** trên bàn phím. Công thức sẽ tính toán và hiển thị ** kết quả <strong>. Trong ví dụ của chúng tôi, kết quả cho thấy tổng phụ của đơn hàng là </strong>$143,45 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_subtotal_result.png\" /></p>\n</li>\n</ol>\n<p>Bạn có thể thêm ** dấu ngoặc đơn ** vào bất kỳ phương trình nào để dễ đọc hơn. Mặc dù nó không làm thay đổi kết quả của công thức trong ví dụ này nhưng chúng ta có thể đặt các phép tính nhân trong dấu ngoặc đơn để làm rõ rằng chúng sẽ được tính trước khi phép cộng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula with parentheses\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/complex_subtotal_parentheses.png\" /></p>\n<p>Excel ** không phải lúc nào cũng cho bạn biết ** nếu công thức của bạn có lỗi, vì vậy, bạn có trách nhiệm kiểm tra tất cả các công thức của mình. Để tìm hiểu cách thực hiện việc này, bạn có thể đọc bài học <a href=\"../../../excelformulas/doublecheck-your-formulas/1/index.html\">Kiểm tra kỹ công thức của bạn</a> \ntừ hướng dẫn về <a href=\"../../../excelformulas/index.html\">Công thức Excel</a> \ncủa chúng tôi.</p>\n<h3>Thử thách!</h3>\n<p>Đối với thử thách này, bạn sẽ làm việc với một hóa đơn khác giống như hóa đơn trong ví dụ của chúng tôi. Trong hóa đơn, bạn sẽ thấy số tiền thuế của đơn hàng, tổng số tiền của đơn hàng và tổng số tiền của đơn hàng nếu bạn được giảm giá 10%.</p>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_complexformulas_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab bảng tính ** Thử thách ** ở phía dưới bên trái của bảng tính.</li>\n<li>Trong ô ** D7 <strong>, tạo công thức tính thuế cho hóa đơn. Áp dụng mức thuế bán hàng ** 7,5%</strong>.</li>\n<li>Trong ô ** D8 <strong>, tạo công thức tìm tổng cho đơn hàng. Nói cách khác, công thức này sẽ thêm các ô ** D3:D7 </strong>.</li>\n<li>Trong ô ** D9 <strong>, hãy tạo công thức tính tổng sau khi giảm giá ** 10%</strong>. Nếu bạn cần trợ giúp để hiểu cách giảm phần trăm trên tổng số, hãy xem lại bài học của chúng tôi về <a href=\"../../../not-offline.html?url=https:/edu.gcfglobal.org/en/percents/percentages-in-real-life/2\">Giảm giá, Giảm giá và Bán hàng</a>.</li>\n<li>Khi bạn hoàn tất, bảng tính của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Complex Formulas Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-09_at_2.12.56_pm.png\" /></li>\n</ol>\n<p>/en/excel/tham chiếu ô tương đối và tuyệt đối/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_15",
                sessionId: 68,
                title: "Bài 15: Tham chiếu ô Tương đối và Tuyệt đối",
                description: "Nội dung chi tiết cho bài Bài 15: Tham chiếu ô Tương đối và Tuyệt đối.",
                video: "https://www.youtube.com/embed/iDg9s7BJ2m4",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 15: Tham chiếu ô tương đối và tuyệt đối</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 15: Tham chiếu ô tương đối và tuyệt đối",
                        content: "<p>/en/excel/creating-more-complex-formulas/content/</p>\n<h3>Giới thiệu</h3>\n<p>Có hai loại tham chiếu ô:<strong> tương đối ** và ** tuyệt đối </strong>. Tham chiếu tương đối và tuyệt đối hoạt động khác nhau khi được sao chép và điền vào các ô khác. Tham chiếu tương đối ** thay đổi ** khi công thức được sao chép sang ô khác. Mặt khác, các tham chiếu tuyệt đối vẫn ** không đổi ** bất kể chúng được sao chép ở đâu.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về tham chiếu ô.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Tài liệu tham khảo tương đối",
                        content: "<p>Theo mặc định, tất cả tham chiếu ô đều là ** tham chiếu tương đối <strong>. Khi sao chép qua nhiều ô, chúng sẽ thay đổi dựa trên vị trí tương đối của hàng và cột. Ví dụ: nếu bạn sao chép công thức </strong>=A1+B1 ** từ hàng 1 sang hàng 2, công thức sẽ trở thành <strong>=A2+B2 </strong>. Tham chiếu tương đối đặc biệt thuận tiện bất cứ khi nào bạn cần lặp lại cùng một phép tính trên nhiều hàng hoặc cột.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để tạo và sao chép một công thức sử dụng tham chiếu tương đối:",
                        content: "<p>Trong ví dụ sau, chúng tôi muốn tạo một công thức nhân ** giá ** của mỗi mặt hàng với ** số lượng **. Thay vì tạo công thức mới cho mỗi hàng, chúng ta có thể tạo một công thức duy nhất trong ô ** D4 ** rồi sao chép công thức đó sang các hàng khác. Chúng tôi sẽ sử dụng tham chiếu tương đối để công thức tính tổng chính xác cho từng mục.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa công thức. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_relative_cell.png\" /></p>\n</li>\n<li>\n<p>Nhập ** công thức ** để tính giá trị mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập <strong>=B4*C4 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering a formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_relative_formula.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn. Công thức sẽ được tính toán và kết quả sẽ được hiển thị trong ô.</p>\n</li>\n<li>\n<p>Xác định vị trí ** bộ điều khiển điền ** ở góc dưới bên phải của ô mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ xác định vị trí ô điều khiển điền cho ô ** D4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Locating the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_relative_handle.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo ** bộ điều khiển điền ** qua các ô bạn muốn điền. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn các ô ** D5:D13 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dragging the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_relative_fill.png\" /></p>\n</li>\n<li>\n<p>Thả chuột. Công thức sẽ được ** sao chép ** vào các ô đã chọn với ** tham chiếu tương đối **, hiển thị kết quả trong mỗi ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_relative_result.png\" /></p>\n</li>\n</ol>\n<p>Bạn có thể nhấp đúp vào ** ô đã điền ** để kiểm tra độ chính xác của công thức. Các tham chiếu ô tương đối phải khác nhau đối với mỗi ô, tùy thuộc vào hàng của chúng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Checking a formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_relative_check_v2.png\" /></p>\n<h3>Tài liệu tham khảo tuyệt đối</h3>\n<p>Có thể đôi khi bạn không muốn tham chiếu ô thay đổi khi sao chép sang các ô khác. Không giống như tham chiếu tương đối,<strong> tham chiếu tuyệt đối ** không thay đổi khi được sao chép hoặc điền. Bạn có thể sử dụng tham chiếu tuyệt đối để giữ một hàng và/hoặc cột ** không đổi </strong>.</p>\n<p>Tham chiếu tuyệt đối được chỉ định trong công thức bằng cách thêm ** ký hiệu đô la ($)**. Nó có thể đứng trước tham chiếu cột, tham chiếu hàng hoặc cả hai.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"$A$2, the column and the row do not change when copied; A$2, the row does not change; $A2, the column does not change\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_graphic.png\" /></p>\n<p>Thông thường, bạn sẽ sử dụng định dạng **$A$2 ** khi tạo công thức chứa tham chiếu tuyệt đối. Hai định dạng còn lại được sử dụng ít thường xuyên hơn.</p>\n<p>Khi viết công thức, bạn có thể nhấn phím ** F4 ** trên bàn phím để chuyển đổi giữa tham chiếu ô tương đối và tuyệt đối, như minh họa trong video bên dưới. Đây là một cách dễ dàng để nhanh chóng chèn một tham chiếu tuyệt đối.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để tạo và sao chép một công thức sử dụng tham chiếu tuyệt đối:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ sử dụng ô ** E2 <strong>(chứa thuế suất 7,5%) \nđể tính thuế bán hàng cho từng mặt hàng trong ** cột D </strong>. Để đảm bảo tham chiếu đến thuế suất không đổi—ngay cả khi công thức được sao chép và điền vào các ô khác—chúng ta cần đặt ô **$E$2 ** làm tham chiếu tuyệt đối.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa công thức. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_cell.png\" /></p>\n</li>\n<li>\n<p>Nhập ** công thức ** để tính giá trị mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập =<strong>(B4*C4)\n*$E$2 </strong>, tạo **$E$2 ** thành tham chiếu tuyệt đối.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering a formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_formula.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn. Công thức sẽ tính toán và kết quả sẽ hiển thị trong ô.</p>\n</li>\n<li>\n<p>Xác định vị trí ** bộ điều khiển điền ** ở góc dưới bên phải của ô mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ xác định vị trí ô điều khiển điền cho ô ** D4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Locating the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_handle.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo ** bộ điều khiển điền ** qua các ô bạn muốn điền (các ô ** D5:D13 ** trong ví dụ của chúng tôi).<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dragging the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_fill.png\" /></p>\n</li>\n<li>\n<p>Thả chuột. Công thức sẽ được ** sao chép ** vào các ô đã chọn với ** tuyệt đối ** ** tham chiếu ** và các giá trị sẽ được tính trong mỗi ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_result.png\" /></p>\n</li>\n</ol>\n<p>Bạn có thể nhấp đúp vào ** ô đã điền ** để kiểm tra độ chính xác của công thức. Tham chiếu tuyệt đối phải giống nhau cho mỗi ô, trong khi các tham chiếu khác liên quan đến hàng của ô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Checking the formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_check_v2.png\" /></p>\n<p>Đảm bảo bao gồm ** ký hiệu đô la ($)<strong> bất cứ khi nào bạn tạo tham chiếu tuyệt đối trên nhiều ô. Ký hiệu đô la đã bị bỏ qua trong ví dụ dưới đây. Điều này khiến Excel hiểu nó là ** tham chiếu tương đối </strong>, tạo ra kết quả không chính xác khi sao chép sang các ô khác.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Incorrectly copied formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_absolute_error.png\" /></p>\n<h3>Sử dụng tham chiếu ô với nhiều trang tính</h3>\n<p>Excel cho phép bạn tham chiếu đến bất kỳ ô nào trên bất kỳ ** trang tính ** nào, điều này có thể đặc biệt hữu ích nếu bạn muốn tham chiếu một giá trị cụ thể từ trang tính này sang trang tính khác. Để thực hiện việc này, bạn chỉ cần bắt đầu tham chiếu ô bằng ** bảng tính ** ** tên <strong>, theo sau là ** dấu chấm than ** ** điểm ** </strong>(!)<strong>. Ví dụ: nếu bạn muốn tham chiếu ô ** A1 ** trên ** Sheet1 </strong>, thì tham chiếu ô của nó sẽ là ** Sheet1!A1 **.</p>\n<p>Lưu ý rằng nếu tên trang tính chứa ** dấu cách <strong>, bạn sẽ cần bao gồm ** dấu ngoặc đơn (' ')</strong> xung quanh tên. Ví dụ: nếu bạn muốn tham chiếu ô ** A1 ** trên trang tính có tên ** Ngân sách tháng 7 <strong>, thì tham chiếu ô của ô đó sẽ là </strong>'Ngân sách tháng 7'!A1 **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để tham chiếu các ô trên bảng tính:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ đề cập đến một ô có giá trị được tính toán giữa hai trang tính. Điều này sẽ cho phép chúng ta sử dụng ** giá trị chính xác ** trên hai trang tính khác nhau mà không cần viết lại công thức hoặc sao chép dữ liệu.</p>\n<ol>\n<li>\n<p>Xác định vị trí ô bạn muốn tham chiếu và ghi lại bảng tính của ô đó. Trong ví dụ của chúng tôi, chúng tôi muốn tham chiếu ô ** E14 ** trên bảng tính ** Thứ tự menu **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Locating a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_sheet_cell.png\" /></p>\n</li>\n<li>\n<p>Điều hướng tới ** bảng tính ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn bảng tính ** Hóa đơn ăn uống **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_sheet_worksheet.png\" /></p>\n</li>\n<li>\n<p>Xác định vị trí và chọn ** ô ** nơi bạn muốn giá trị xuất hiện. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** C4 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_sheet2_cell.png\" /></p>\n</li>\n<li>\n<p>Nhập ** dấu bằng (=)<strong>,</strong> trang tính ** ** tên ** theo sau là ** dấu chấm than ** <strong>(!)</strong> và ** địa chỉ ô <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập </strong>='Menu Order'!E14 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering a formula\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_sheet2_formula.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn.** giá trị ** của ô được tham chiếu sẽ xuất hiện. Bây giờ, nếu giá trị của ô E14 thay đổi trên bảng tính Thứ tự Thực đơn, nó sẽ được cập nhật tự động trên bảng tính Hóa đơn Dịch vụ ăn uống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Formula result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_sheet2_result.png\" /></p>\n</li>\n</ol>\n<p>Nếu sau này bạn ** đổi tên ** bảng tính của mình, tham chiếu ô sẽ được cập nhật tự động để phản ánh tên bảng tính mới.</p>\n<p>Nếu bạn nhập tên bảng tính không chính xác, lỗi <strong>#REF!</strong> sẽ xuất hiện trong ô. Trong ví dụ bên dưới, chúng tôi đã gõ sai tên của trang tính. Để chỉnh sửa, bỏ qua hoặc điều tra lỗi, hãy nhấp vào nút ** Lỗi ** bên cạnh ô và chọn một tùy chọn từ ** menu **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Correcting an error\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/references_sheet_error.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_cellreferences_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Hàng giấy ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Trong ô ** D4 <strong>, nhập công thức nhân đơn giá trong ** B4 </strong>, số lượng trong ** C4 ** và thuế suất trong ** E2 **. Đảm bảo sử dụng ** tham chiếu ô tuyệt đối ** cho thuế suất vì thuế suất sẽ giống nhau ở mọi ô.</li>\n<li>Sử dụng ** điền vào ** để sao chép công thức bạn vừa tạo vào các ô ** D5:D12 **.</li>\n<li>\n<p>Thay đổi thuế suất trong ô ** E2 ** thành 6,5%. Lưu ý rằng tất cả các ô của bạn đã được cập nhật. Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Paper Goods Tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-30_at_4.22.49_pm.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào tab ** Hóa đơn ăn uống **.</p>\n</li>\n<li>Xóa giá trị trong ô ** C5 ** và thay thế bằng ** tham chiếu ** cho tổng chi phí của hàng hóa giấy.<strong> Gợi ý </strong>: Giá của hàng giấy nằm ở ô ** E13 ** trên bảng tính ** Hàng giấy **.</li>\n<li>Sử dụng các bước tương tự ở trên để tính thuế bán hàng cho từng mặt hàng trên bảng tính ** Thứ tự thực đơn <strong>. Tổng chi phí trong ô ** E14 ** sẽ cập nhật. Sau đó, trong ô ** C4 ** của bảng tính ** Hóa đơn ăn uống </strong>, hãy tạo một ** tham chiếu ô ** cho tổng số bạn vừa tính.<strong> Lưu ý </strong>: Nếu bạn sử dụng sổ làm việc thực hành của chúng tôi để theo dõi trong bài học thì có thể bạn đã hoàn thành bước này.</li>\n<li>Khi bạn hoàn tất, bảng tính ** Hóa đơn ăn uống ** sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"cell_references_challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/excel_2016_cell_ref_challenge_edited.png\" /></li>\n</ol>\n<p>/en/excel/functions/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_16",
                sessionId: 68,
                title: "Bài 16: Hàm",
                description: "Nội dung chi tiết cho bài Bài 16: Hàm.",
                video: "https://www.youtube.com/embed/-9d4m79twdA",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_functions_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài học 16: chức năng</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 16: Hàm",
                        content: "<p>/en/excel/tham chiếu ô tương đối và tuyệt đối/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>** hàm ** là ** công thức được xác định trước ** thực hiện các phép tính bằng cách sử dụng các giá trị cụ thể theo một thứ tự cụ thể. Excel bao gồm nhiều hàm phổ biến có thể dùng để nhanh chóng tìm ** tổng <strong>,</strong> trung bình <strong>,</strong> đếm <strong>,</strong> giá trị tối đa ** và ** giá trị tối thiểu ** cho một phạm vi ô. Để sử dụng hàm một cách chính xác, bạn cần hiểu ** các phần khác nhau của hàm ** và cách tạo ** đối số ** để tính toán các giá trị và tham chiếu ô.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách làm việc với các hàm.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Các bộ phận của một chức năng",
                        content: "<p>Để hoạt động chính xác, hàm phải được viết theo một cách cụ thể, được gọi là ** cú pháp <strong>. Cú pháp cơ bản của hàm là ** dấu bằng (=)</strong>,<strong> tên hàm </strong>(ví dụ: SUM) \nvà một hoặc nhiều ** đối số **. Đối số chứa thông tin bạn muốn tính toán. Hàm trong ví dụ bên dưới sẽ cộng các giá trị của phạm vi ô A1:A20.![=SUM(A1:A20)\n]\n(images/functions_syntax_graphic.png)</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Làm việc với các đối số",
                        content: "<p>Các đối số có thể tham chiếu đến cả ** ô riêng lẻ ** và ** phạm vi ô ** và phải được đặt trong ** dấu ngoặc đơn **. Bạn có thể bao gồm một đối số hoặc nhiều đối số, tùy thuộc vào cú pháp yêu cầu của hàm.</p>\n<p>Ví dụ: hàm <strong>=AVERAGE(B1:B9)</strong> sẽ tính ** trung bình ** của các giá trị trong phạm vi ô B1:B9. Hàm này chỉ chứa một đối số.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function with single argument\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_argument_single.png\" /></p>\n<p>Nhiều đối số phải được phân tách bằng ** dấu phẩy <strong>. Ví dụ: hàm </strong>=SUM(A1:A3, C1:C2, E1)** sẽ ** cộng ** giá trị của tất cả các ô trong ba đối số.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function with multiple arguments\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_argument_multiple.png\" /></p>\n<h3>Tạo một chức năng</h3>\n<p>Có rất nhiều hàm có sẵn trong Excel. Dưới đây là một số chức năng phổ biến nhất mà bạn sẽ sử dụng:</p>\n<ul>\n<li>\n<p>** SUM **: Hàm này ** cộng ** tất cả giá trị của các ô trong đối số.</p>\n</li>\n<li>\n<p>** AVERAGE **: Hàm này xác định ** trung bình ** của các giá trị có trong đối số. Nó tính tổng của các ô và sau đó chia giá trị đó cho số ô trong đối số.</p>\n</li>\n<li>\n<p>** COUNT **: Hàm này ** đếm ** số ô có dữ liệu số trong đối số. Hàm này rất hữu ích để đếm nhanh các mục trong một phạm vi ô.</p>\n</li>\n<li>\n<p>** MAX **: Hàm này xác định ** giá trị ô ** cao nhất ** ** có trong đối số.</p>\n</li>\n<li>\n<p>** MIN **: Hàm này xác định ** giá trị ô thấp nhất ** có trong đối số.</p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để tạo một hàm bằng lệnh AutoSum:",
                        content: "<p>Lệnh ** AutoSum ** cho phép bạn tự động chèn các hàm phổ biến nhất vào công thức của mình, bao gồm SUM, AVERAGE, COUNT, MAX và MIN. Trong ví dụ bên dưới, chúng ta sẽ sử dụng hàm ** SUM ** để tính ** tổng chi phí ** cho danh sách các mặt hàng được đặt hàng gần đây.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa hàm. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D13 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_autosum_cell.png\" /></p>\n</li>\n<li>\n<p>Trong nhóm ** Chỉnh sửa ** trên tab ** Trang chủ <strong>, hãy nhấp vào ** mũi tên ** bên cạnh lệnh ** Tự động tính tổng </strong>. Tiếp theo, chọn ** chức năng mong muốn ** từ menu thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Sum **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Choosing a function\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_autosum_command.png\" /></p>\n</li>\n<li>\n<p>Excel sẽ đặt ** hàm ** vào ô và tự động chọn ** phạm vi ô ** cho đối số. Trong ví dụ của chúng tôi, các ô ** D3:D12 ** được chọn tự động; giá trị của chúng sẽ được ** thêm ** để tính tổng chi phí. Nếu Excel chọn sai phạm vi ô, bạn có thể nhập thủ công các ô mong muốn vào đối số.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function argument\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_autosum_function.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn. Hàm sẽ được ** tính ** và ** kết quả ** sẽ xuất hiện trong ô. Trong ví dụ của chúng tôi, tổng của D3:D12 là <strong>$765,29 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_autosum_result.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể truy cập lệnh ** AutoSum ** từ tab ** Công thức ** trên ** Ribbon **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"AutoSum command on Formulas tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_autosum_ribbon.png\" /></p>\n<p>Bạn cũng có thể sử dụng phím tắt ** Alt+=<strong> thay vì lệnh Tự tính tổng. Để sử dụng phím tắt này, hãy giữ phím ** Alt ** rồi nhấn ** dấu bằng </strong>.</p>\n<p>Xem video bên dưới để thấy lối tắt này hoạt động.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để nhập một chức năng theo cách thủ công:",
                        content: "<p>Nếu bạn đã biết tên hàm thì bạn có thể tự gõ dễ dàng. Trong ví dụ bên dưới (kiểm đếm doanh số bán bánh quy), chúng tôi sẽ sử dụng hàm ** AVERAGE ** để tính ** số đơn vị trung bình đã bán ** của mỗi đội.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa hàm. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** C10 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_basic_cell.png\" /></p>\n</li>\n<li>\n<p>Nhập ** dấu bằng (=)<strong>, sau đó nhập ** tên hàm ** mong muốn. Bạn cũng có thể chọn hàm mong muốn từ danh sách ** gợi ý ** ** hàm ** xuất hiện bên dưới ô khi bạn nhập. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập </strong>=AVERAGE **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering the function name\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_basic_function.png\" /></p>\n</li>\n<li>\n<p>Nhập ** phạm vi ô ** cho đối số bên trong ** dấu ngoặc đơn <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập </strong>(C3:C9)**. Công thức này sẽ cộng các giá trị của ô C3:C9, sau đó chia giá trị đó cho tổng số giá trị trong phạm vi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Entering the argument\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_basic_argument.png\" /></p>\n</li>\n<li>\n<p>Nhấn ** Enter ** trên bàn phím của bạn. Hàm sẽ được tính toán và ** kết quả ** sẽ xuất hiện trong ô. Trong ví dụ của chúng tôi, số lượng đơn vị trung bình được bán bởi mỗi đội quân là ** 849 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_basic_result.png\" /></p>\n</li>\n</ol>\n<p>Excel ** không phải lúc nào cũng cho bạn biết ** nếu công thức của bạn có lỗi, vì vậy, bạn có trách nhiệm kiểm tra tất cả các công thức của mình. Để tìm hiểu cách thực hiện việc này, hãy đọc bài học <a href=\"../../../excelformulas/doublecheck-your-formulas/1/index.html\">Kiểm tra kỹ công thức của bạn</a> \ntừ hướng dẫn về <a href=\"../../../excelformulas/index.html\">Công thức Excel</a> \ncủa chúng tôi.</p>\n<h3>Thư viện hàm</h3>\n<p>Mặc dù có hàng trăm hàm trong Excel nhưng những hàm bạn sẽ sử dụng nhiều nhất sẽ phụ thuộc vào ** loại dữ liệu ** trong sổ làm việc của bạn. Không cần phải tìm hiểu từng hàm riêng lẻ nhưng việc khám phá một số ** loại ** hàm khác nhau sẽ giúp ích khi bạn tạo dự án mới. Bạn thậm chí có thể sử dụng ** Thư viện hàm ** trên tab ** Công thức ** để duyệt các hàm theo danh mục, bao gồm ** Tài chính <strong>,</strong> Logic <strong>,</strong> Văn bản ** và ** Ngày &amp; giờ **.</p>\n<p>Để truy cập ** Thư viện hàm <strong>, hãy chọn tab ** Công thức ** trên ** Ribbon </strong>. Tìm nhóm ** Thư viện hàm **.</p>\n<p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu thêm về các loại hàm khác nhau trong Excel.</p>\n<p>chỉnh sửa điểm phát sóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Tương tác thư viện chức năng\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library.png\" /></p>\n<h2>Lệnh Tự Tính Tổng</h2>\n<p>Lệnh ** AutoSum ** cho phép bạn tự động trả về kết quả cho các hàm phổ biến như ** SUM <strong>,</strong> AVERAGE ** và ** COUNT **.</p>\n<h2>Được sử dụng gần đây</h2>\n<p>Lệnh **Được sử dụng gần đây ** cho phép bạn truy cập vào các chức năng mà bạn đã làm việc gần đây.</p>\n<h2>Tài chính</h2>\n<p>Danh mục ** Tài chính ** chứa các hàm tính toán tài chính như xác định khoản thanh toán (<strong> PMT </strong>) \nhoặc lãi suất cho khoản vay (<strong> RATE </strong>).</p>\n<h2>Hợp lý</h2>\n<p>Các hàm trong danh mục ** Logic ** kiểm tra các đối số để tìm một giá trị hoặc điều kiện. Ví dụ: nếu đơn hàng lớn hơn $50, hãy thêm $4,99 phí vận chuyển; nếu nó lớn hơn $100, không tính phí vận chuyển (<strong> IF </strong>).</p>\n<h2>Chữ</h2>\n<p>Danh mục ** Văn bản ** chứa các hàm hoạt động với văn bản trong các đối số để thực hiện các tác vụ, chẳng hạn như chuyển đổi văn bản thành chữ thường (<strong> LOWER </strong>) \nhoặc thay thế văn bản (<strong> REPLACE </strong>).</p>\n<h2>Ngày &amp; Giờ</h2>\n<p>Danh mục ** Ngày &amp; Giờ ** chứa các hàm để làm việc với ngày và giờ và sẽ trả về các kết quả như ngày và giờ hiện tại (<strong> NOW </strong>) \nhoặc giây (<strong> SECOND </strong>).</p>\n<h2>Tra cứu &amp; tham khảo</h2>\n<p>Danh mục ** Tra cứu &amp; Tham khảo ** chứa các hàm sẽ trả về kết quả tìm kiếm và tham chiếu thông tin. Ví dụ: bạn có thể thêm siêu liên kết vào một ô (<strong> HYPERLINK </strong>) \nhoặc trả về giá trị của giao điểm hàng và cột cụ thể (<strong> INDEX </strong>).</p>\n<h2>Toán &amp; Lượng giác</h2>\n<p>Danh mục ** Toán học &amp; Lượng giác ** bao gồm các hàm dành cho đối số bằng số. Ví dụ: bạn có thể làm tròn các giá trị (<strong> ROUND </strong>), tìm giá trị của Pi (<strong> PI </strong>), nhân (<strong> SẢN PHẨM </strong>) \nvà tổng phụ (<strong> SUBTOTAL </strong>).</p>\n<h2>Nhiều chức năng hơn</h2>\n<p>** Chức năng khác ** chứa các hàm bổ sung trong các danh mục dành cho ** Thống kê <strong>,</strong> Kỹ thuật <strong>,</strong> Khối lập phương <strong>,</strong> Thông tin ** và ** Khả năng tương thích **.</p>\n<h2>Chèn chức năng</h2>\n<p>Nếu bạn gặp khó khăn khi tìm hàm phù hợp, lệnh ** Chèn hàm ** cho phép bạn tìm kiếm hàm bằng từ khóa.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để chèn một hàm từ Thư viện hàm:",
                        content: "<p>Trong ví dụ bên dưới, chúng ta sẽ sử dụng hàm COUNTA để đếm tổng số mục trong cột ** Mục <strong>. Không giống như COUNT,</strong> COUNTA ** có thể được sử dụng để kiểm đếm các ô có chứa bất kỳ loại dữ liệu nào, không chỉ dữ liệu số.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa hàm. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** B17 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_insert_cell.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào tab ** Công thức ** trên ** Ribbon ** để truy cập ** Thư viện hàm **.</p>\n</li>\n<li>\n<p>Từ nhóm ** Thư viện hàm <strong>, chọn ** danh mục hàm ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Chức năng khác </strong>, sau đó di chuột qua ** Thống kê **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the More Functions / Statistical command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library_command2.png\" /></p>\n</li>\n<li>\n<p>Chọn ** chức năng mong muốn ** từ menu thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn hàm ** COUNTA ** để đếm số ô trong cột ** Items ** không trống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Choosing the COUNTA function\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library_menu2.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại <strong>Đối số hàm ** sẽ xuất hiện. Chọn trường ** Value1 </strong>, sau đó nhập hoặc chọn các ô mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập phạm vi ô ** A3:A12 <strong>. Bạn có thể tiếp tục thêm đối số trong trường ** Value2 </strong>, nhưng trong trường hợp này, chúng tôi chỉ muốn đếm số ô trong phạm vi ô ** A3:A12 **.</p>\n</li>\n<li>\n<p>Khi bạn hài lòng, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function argument\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_insert_ok.png\" /></p>\n</li>\n<li>\n<p>Hàm sẽ được ** tính ** và ** kết quả ** sẽ xuất hiện trong ô. Trong ví dụ của chúng tôi, kết quả cho thấy ** 10 mặt hàng ** đã được đặt hàng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_insert_result.png\" /></p>\n</li>\n</ol>\n<h3>Lệnh Chèn hàm</h3>\n<p>Mặc dù Thư viện hàm là nơi tuyệt vời để duyệt tìm các hàm nhưng đôi khi bạn có thể thích ** tìm kiếm ** một hàm hơn. Bạn có thể làm như vậy bằng cách sử dụng lệnh ** Insert Function **. Có thể mất một số lần thử và sai sót tùy thuộc vào loại hàm bạn đang tìm kiếm, nhưng nếu thực hành, lệnh Chèn Hàm có thể là một cách hiệu quả để tìm hàm một cách nhanh chóng.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để sử dụng lệnh Chèn hàm:",
                        content: "<p>Trong ví dụ bên dưới, chúng ta muốn tìm một hàm sẽ tính ** số ngày làm việc ** để nhận được các mặt hàng sau khi chúng được đặt hàng. Chúng tôi sẽ sử dụng ngày trong cột ** E ** và ** F ** để tính thời gian giao hàng trong cột ** G **.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** sẽ chứa hàm. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** G3 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library_cell.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào tab ** Công thức ** trên ** Ribbon <strong>, sau đó nhấp vào lệnh ** Chèn hàm </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Insert Function command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_insert_command2.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Chèn chức năng ** sẽ xuất hiện.</p>\n</li>\n<li>\n<p>Nhập một vài ** từ khóa ** mô tả phép tính mà bạn muốn hàm thực hiện, sau đó nhấp vào <strong>Đi </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** đếm ngày ** nhưng bạn cũng có thể tìm kiếm bằng cách chọn ** danh mục ** từ danh sách thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Searching for a function\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_insert_search2.png\" /></p>\n</li>\n<li>\n<p>Xem lại ** kết quả ** để tìm hàm mong muốn, sau đó nhấp vào ** OK <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** NETWORKDAYS </strong>, sẽ tính số ngày làm việc giữa ngày đặt hàng và ngày nhận được.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a function\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_insert_networkdays.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại <strong>Đối số hàm ** sẽ xuất hiện. Từ đây, bạn sẽ có thể nhập hoặc chọn các ô sẽ tạo nên các đối số trong hàm. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** E3 ** vào trường ** Bắt đầu_ngày ** và ** F3 ** vào trường ** Kết thúc_ngày </strong>.</p>\n</li>\n<li>\n<p>Khi bạn hài lòng, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function argument\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library_ok.png\" /></p>\n</li>\n<li>\n<p>Hàm sẽ được ** tính ** và ** kết quả ** sẽ xuất hiện trong ô. Trong ví dụ của chúng tôi, kết quả cho thấy phải mất ** bốn ngày làm việc ** để nhận được đơn đặt hàng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Function result\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library_result.png\" /></p>\n</li>\n</ol>\n<p>Giống như công thức, các hàm có thể được sao chép sang các ô liền kề. Chỉ cần chọn ** ô ** chứa hàm, sau đó nhấp và kéo ** bộ điều khiển điền ** qua các ô bạn muốn điền. Hàm sẽ được sao chép và giá trị của các ô đó sẽ được tính tương ứng với các hàng hoặc cột của chúng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Using the fill handle\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/functions_library_fill.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để tìm hiểu thêm:",
                        content: "<p>Nếu bạn cảm thấy thoải mái với các chức năng cơ bản, bạn có thể muốn thử một chức năng nâng cao hơn như ** VLOOKUP **. Hãy xem lại bài học của chúng tôi về <a href=\"../../../excel-tips/how-to-use-excels-vlookup-function/1/index.html\" title=\"Cách sử dụng hàm VLOOKUP của Excel\">Cách sử dụng hàm VLOOKUP của Excel</a> \nđể biết thêm thông tin.</p>\n<p>Để tìm hiểu thêm về cách làm việc với các hàm, hãy truy cập hướng dẫn <a href=\"../../../excelformulas/index.html\">Công thức Excel</a> \ncủa chúng tôi.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_functions_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Trong ô ** F3 <strong>, hãy chèn một hàm để tính ** trung bình ** của bốn điểm trong các ô ** B3:E3 </strong>.</li>\n<li>Sử dụng ** bộ điều khiển điền ** để sao chép hàm của bạn trong ô ** F3 ** sang các ô ** F4:F17 **.</li>\n<li>Trong ô ** B18 <strong>, hãy sử dụng lệnh ** Tự tính tổng ** để chèn ** hàm ** tính toán điểm ** thấp nhất ** trong các ô ** B3:B17 </strong>.</li>\n<li>Trong ô ** B19 <strong>, hãy sử dụng ** Thư viện hàm ** để chèn hàm tính ** trung vị ** của điểm số trong các ô ** B3:B17 </strong>.<strong> Gợi ý </strong>: Bạn có thể tìm hàm trung vị bằng cách đi tới ** Hàm khác &gt; Thống kê **.</li>\n<li>Trong ô ** B20 <strong>, hãy tạo một ** hàm ** để tính điểm ** cao nhất ** trong các ô ** B3:B17 </strong>.</li>\n<li>Chọn các ô ** B18:B20 <strong>, sau đó sử dụng ** bộ điều khiển điền ** để sao chép tất cả ba hàm bạn vừa tạo vào các ô ** C18:F20 </strong>.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Functions Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-24_at_3.36.08_pm.png\" /></li>\n</ol>\n<p>/en/excel/basic-tips-for-working-with-data/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_17",
                sessionId: 68,
                title: "Bài 17: Mẹo cơ bản khi làm việc với dữ liệu",
                description: "Nội dung chi tiết cho bài Bài 17: Mẹo cơ bản khi làm việc với dữ liệu.",
                video: "https://www.youtube.com/embed/zuhsUNBeNHw",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 17: mẹo cơ bản khi làm việc với dữ liệu</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 17: Mẹo cơ bản khi làm việc với dữ liệu",
                        content: "<p>/en/excel/functions/content/</p>\n<h3>Giới thiệu</h3>\n<p>Sổ làm việc Excel được thiết kế để lưu trữ rất nhiều thông tin. Cho dù bạn đang làm việc với 20 ô hay 20.000 ô, Excel đều có một số tính năng giúp bạn ** sắp xếp dữ liệu ** và ** tìm thấy những gì bạn cần **. Bạn có thể thấy một số tính năng hữu ích nhất bên dưới. Và hãy nhớ xem lại các bài học khác trong hướng dẫn này để biết hướng dẫn từng bước cho từng tính năng này.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Cố định hàng và cột",
                        content: "<p>Bạn có thể luôn muốn xem một số hàng hoặc cột nhất định trong trang tính của mình, đặc biệt là ** ô tiêu đề **. Bằng cách đặt <a href=\"../../freezing-panes-and-view-options/1/index.html\">đóng băng hàng hoặc cột</a>, bạn sẽ có thể cuộn qua nội dung của mình trong khi tiếp tục xem các ô được cố định. Trong ví dụ này, chúng tôi đã cố định hai hàng trên cùng, điều này cho phép chúng tôi xem ngày bất kể chúng tôi cuộn ở đâu trong bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"freezing rows\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-rows-after-change.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Sắp xếp dữ liệu",
                        content: "<p>Bạn có thể nhanh chóng ** sắp xếp lại ** trang tính bằng cách <a href=\"../../sorting-data/1/index.html\">sắp xếp dữ liệu của bạn</a>. Nội dung có thể được sắp xếp theo thứ tự bảng chữ cái, số và theo nhiều cách khác. Ví dụ: bạn có thể sắp xếp danh sách thông tin liên hệ theo họ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"sorting a worksheet alphabetically \" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_types_sheet.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Lọc dữ liệu",
                        content: "<p><a href=\"../../filtering-data/1/index.html\">Filters</a> \ncó thể được sử dụng để ** thu hẹp ** dữ liệu trong trang tính của bạn, cho phép bạn chỉ xem thông tin bạn cần. Trong ví dụ này, chúng tôi đang lọc trang tính để chỉ hiển thị các hàng có chứa các từ ** Laptop ** hoặc ** Projector ** trong cột B.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"applying a filter\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_howto_dropdown_menu_select.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Tóm tắt dữ liệu",
                        content: "<p><a href=\"../../groups-and-subtotals/1/index.html\">Lệnh tổng phụ</a> \ncho phép bạn tóm tắt nhanh chóng dữ liệu. Trong ví dụ của chúng tôi, chúng tôi đã tạo tổng phụ cho ** mỗi kích cỡ áo phông **, giúp dễ dàng biết chúng tôi sẽ cần bao nhiêu ở mỗi kích cỡ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"subtotals and groups\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_result.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Định dạng dữ liệu dưới dạng bảng",
                        content: "<p>Cũng giống như định dạng thông thường, <a href=\"../../tables/1/index.html\">tables</a> \ncó thể cải thiện ** giao diện ** sổ làm việc của bạn, nhưng chúng cũng sẽ giúp ** sắp xếp ** nội dung của bạn và giúp dữ liệu của bạn dễ sử dụng hơn. Ví dụ: các bảng có các tùy chọn sắp xếp và lọc tích hợp. Excel cũng bao gồm một số ** kiểu bảng được xác định trước **, cho phép bạn tạo bảng nhanh chóng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"data formatted as a table in Excel\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_format_complete.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Trực quan hóa dữ liệu bằng biểu đồ",
                        content: "<p>Có thể khó diễn giải các sổ làm việc Excel chứa nhiều dữ liệu.<strong><a href=\"../../charts/1/index.html\">Biểu đồ</a></strong> cho phép bạn minh họa dữ liệu sổ làm việc của mình ** bằng đồ họa <strong>, giúp bạn dễ dàng hình dung ** so sánh ** và ** xu hướng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a chart inserted into a worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-44-32.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Thêm định dạng có điều kiện",
                        content: "<p>Giả sử bạn có một bảng tính có hàng nghìn hàng dữ liệu. Sẽ cực kỳ khó để nhìn thấy các mô hình và xu hướng chỉ từ việc kiểm tra thông tin thô. <a href=\"../../conditional-formatting/1/index.html\">Định dạng có điều kiện</a> \ncho phép bạn tự động áp dụng định dạng ô—bao gồm ** màu sắc <strong>,</strong> biểu tượng ** và ** thanh dữ liệu <strong>—cho một hoặc nhiều ô dựa trên ** ô ** ** giá trị </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"conditional formatting applied to a cell range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_preset_result.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 10: Sử dụng Tìm và Thay thế",
                        content: "<p>Khi làm việc với nhiều dữ liệu, việc xác định thông tin cụ thể có thể khó khăn và tốn thời gian. Bạn có thể dễ dàng tìm kiếm sổ làm việc của mình bằng <a href=\"../../using-find-replace/1/index.html\">Tính năng tìm</a>, tính năng này cũng cho phép bạn sửa đổi nội dung bằng tính năng ** Thay thế **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the find and replace feature\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-09_10-18-35.png\" /></p>\n<p>/en/excel/freezing-panes-and-view-options/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_18",
                sessionId: 68,
                title: "Bài 18: Đóng băng ngăn và tùy chọn View",
                description: "Nội dung chi tiết cho bài Bài 18: Đóng băng ngăn và tùy chọn View.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 18: Tùy chọn đóng băng và xem</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 18: Freezing Panes và View Options",
                        content: "<p>/en/excel/basic-tips-for-working-with-data/content/</p>\n<h3>Giới thiệu</h3>\n<p>Bất cứ khi nào bạn làm việc với nhiều dữ liệu, có thể khó ** so sánh ** thông tin trong sổ làm việc của bạn. May mắn thay, Excel bao gồm một số công cụ giúp bạn xem nội dung từ các phần khác nhau trong sổ làm việc của bạn cùng một lúc dễ dàng hơn, bao gồm khả năng ** đóng băng ** ** các ngăn ** và ** tách ** trang tính của bạn.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách cố định khung trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để cố định hàng:",
                        content: "<p>Bạn có thể luôn muốn xem một số hàng hoặc cột nhất định trong trang tính của mình, đặc biệt là ** ô tiêu đề **. Bằng cách ** đóng băng ** hàng hoặc cột tại chỗ, bạn sẽ có thể cuộn qua nội dung của mình trong khi tiếp tục xem các ô được cố định.</p>\n<ol>\n<li>\n<p>Chọn ** hàng ** bên dưới (các) \nhàng bạn muốn ** đóng băng <strong>. Trong ví dụ của chúng tôi, chúng tôi muốn cố định các hàng ** 1 ** và ** 2 </strong>, vì vậy chúng tôi sẽ chọn hàng ** 3 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-rows-select-cells.png\" /></p>\n</li>\n<li>\n<p>Trên tab ** Xem <strong>, chọn lệnh ** Freeze Panes </strong>, sau đó chọn ** Freeze Panes ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Freeze Rows dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-rows-dropdown-menu.png\" /></p>\n</li>\n<li>\n<p>Các hàng sẽ được ** đóng băng ** tại chỗ, như được biểu thị bằng ** dòng ** màu xám ** <strong>. Bạn có thể ** cuộn xuống ** bảng tính trong khi tiếp tục xem các hàng cố định ở trên cùng. Trong ví dụ của chúng tôi, chúng tôi đã cuộn xuống hàng ** 18 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The top two rows are now frozen data\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-rows-after-change.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để cố định cột:",
                        content: "<ol>\n<li>\n<p>Chọn ** cột ** ở bên phải (các) \ncột bạn muốn ** đóng băng <strong>. Trong ví dụ của chúng tôi, chúng tôi muốn cố định ** cột A </strong>, vì vậy chúng tôi sẽ chọn cột ** B **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting column B\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-columns-select-cells.png\" title=\"selecting column B\" /></p>\n</li>\n<li>\n<p>Trên tab ** Xem <strong>, chọn lệnh ** Freeze Panes </strong>, sau đó chọn ** Freeze Panes ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"/content/561fbc87287fc10e146dbf44_10_15_2015/freeze-rows-dropdown-menu.png\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-rows-dropdown-menu.png\" /></p>\n</li>\n<li>\n<p>Cột sẽ được ** đóng băng ** tại chỗ, như được biểu thị bằng ** dòng ** màu xám ** <strong>. Bạn có thể ** cuộn qua ** bảng tính trong khi tiếp tục xem cột cố định ở bên trái. Trong ví dụ của chúng tôi, chúng tôi đã cuộn qua cột ** E </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The first column is now frozen\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-columns-after-change.png\" /></p>\n</li>\n</ol>\n<p>Nếu bạn chỉ cần cố định ** hàng trên cùng <strong>(hàng 1) \nhoặc ** cột đầu tiên </strong>(cột A) \ntrong bảng tính, bạn chỉ cần chọn ** Cố định hàng trên ** hoặc ** Cố định cột đầu tiên ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Freeze Top Row command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/freeze-top-row.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để giải phóng các ngăn:",
                        content: "<p>Nếu bạn muốn chọn một tùy chọn chế độ xem khác, trước tiên bạn có thể cần phải đặt lại bảng tính bằng cách giải phóng các ngăn. Để ** hủy cố định ** hàng hoặc cột, hãy nhấp vào lệnh ** Freeze Panes **, sau đó chọn ** Unfreeze Panes ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Unfreeze Panes command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/unfreeze-panes.png\" /></p>\n<h3>Tùy chọn xem khác</h3>\n<p>Nếu sổ làm việc của bạn chứa nhiều nội dung, đôi khi có thể khó so sánh các phần khác nhau. Excel bao gồm các tùy chọn bổ sung để làm cho sổ làm việc của bạn dễ xem và so sánh hơn. Ví dụ: bạn có thể chọn ** mở một ** ** cửa sổ mới ** cho sổ làm việc của mình hoặc ** tách ** ** trang tính ** thành các ngăn riêng biệt.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để mở một cửa sổ mới cho sổ làm việc hiện tại:",
                        content: "<p>Excel cho phép bạn mở ** nhiều cửa sổ ** cho một sổ làm việc cùng lúc. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng tính năng này để so sánh hai ** bảng tính ** khác nhau từ cùng một sổ làm việc.</p>\n<ol>\n<li>Nhấp vào tab ** Xem ** trên ** Ribbon <strong>, sau đó chọn lệnh ** Mới ** ** Cửa sổ </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The New Window button on the View tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new-window-click-button.png\" /></li>\n</ol>\n<p>2.** Cửa sổ mới ** dành cho sổ làm việc sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Two windows for the same workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new-window-two-windows.png\" /></p>\n<ol>\n<li>Bây giờ bạn có thể so sánh các trang tính khác nhau từ cùng một sổ làm việc trên các cửa sổ. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn bảng tính ** Chế độ xem chi tiết doanh số bán hàng năm 2013 ** để so sánh doanh số bán hàng ** 2012 ** và ** 2013 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"You can compare different parts of the same workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new-window-different-worksheets.png\" /></li>\n</ol>\n<p>Nếu bạn mở nhiều cửa sổ cùng lúc, bạn có thể sử dụng lệnh ** Sắp xếp tất cả ** để sắp xếp lại chúng một cách nhanh chóng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Arrange All button on the View tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new-window-arrange-all.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để chia một bảng tính:",
                        content: "<p>Đôi khi bạn có thể muốn so sánh các phần khác nhau của cùng một sổ làm việc mà không cần tạo cửa sổ mới. Lệnh ** Split ** cho phép bạn ** chia ** bảng tính thành nhiều ngăn cuộn riêng biệt.</p>\n<ol>\n<li>\n<p>Chọn ** ô ** nơi bạn muốn chia trang tính. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D6 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/split-select-cell.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào tab ** Xem ** trên ** Ribbon <strong>, sau đó chọn lệnh ** Split </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Split command on the View tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/split-command.png\" /></p>\n</li>\n<li>\n<p>Sổ làm việc sẽ được ** chia ** thành các ** khung ** khác nhau. Bạn có thể cuộn qua từng ngăn riêng biệt bằng ** scroll bar **, cho phép bạn so sánh các phần khác nhau của sổ làm việc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Scrolling through split panes\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/split-after-change.png\" /></p>\n</li>\n<li>\n<p>Sau khi tạo phần chia, bạn có thể nhấp và kéo các vạch chia dọc và ngang để thay đổi kích thước của từng phần.</p>\n</li>\n</ol>\n<p>Để xóa phần tách, hãy nhấp lại vào lệnh ** Split **.</p>\n<h3>Thử thách!</h3>\n<p>Trong tệp ví dụ của chúng tôi, có RẤT NHIỀU dữ liệu bán hàng. Đối với thử thách này, chúng tôi muốn có thể so sánh dữ liệu của các năm khác nhau cạnh nhau. Để làm điều này:</p>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_freezepanes_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Mở ** cửa sổ mới ** cho sổ làm việc của bạn.\n3.<strong> Dừng cột đầu tiên ** và sử dụng scroll bar ngang để xem doanh số bán hàng từ năm 2015.\n4.</strong> Giải phóng ** cột đầu tiên.</li>\n<li>Chọn ô ** G17 ** và nhấp vào ** Tách ** để chia trang tính thành nhiều ngăn.<strong> Gợi ý </strong>: Thao tác này sẽ chia trang tính thành các hàng 16 và 17 cũng như cột F và G.</li>\n<li>Sử dụng scroll bar ngang ở dưới cùng bên phải của cửa sổ để di chuyển trang tính sao cho ** Cột N <strong>, chứa dữ liệu cho tháng 1 năm 2015, nằm cạnh ** Cột ** ** F </strong>.</li>\n<li>Mở ** cửa sổ mới ** cho sổ làm việc của bạn và chọn tab ** Doanh số 2012-2013 **.</li>\n<li>Di chuyển các cửa sổ của bạn để chúng ở cạnh nhau. Bây giờ bạn có thể so sánh dữ liệu của các tháng tương tự từ nhiều năm khác nhau. Màn hình của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Freezing Panes Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-06_at_2.36.43_pm.png\" /></li>\n</ol>\n<p>/en/excel/sắp xếp-dữ liệu/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_19",
                sessionId: 68,
                title: "Bài 19: Sắp xếp dữ liệu",
                description: "Nội dung chi tiết cho bài Bài 19: Sắp xếp dữ liệu.",
                video: "https://www.youtube.com/embed/Ep5q1cUhQas",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 19: sắp xếp dữ liệu</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 19: Sắp xếp dữ liệu",
                        content: "<p>/en/excel/freezing-panes-and-view-options/content/</p>\n<h3>Giới thiệu</h3>\n<p>Khi bạn thêm nhiều nội dung vào trang tính, việc sắp xếp thông tin này trở nên đặc biệt quan trọng. Bạn có thể nhanh chóng ** sắp xếp lại ** trang tính bằng cách ** sắp xếp ** dữ liệu của mình. Ví dụ: bạn có thể sắp xếp danh sách thông tin liên hệ theo họ. Nội dung có thể được sắp xếp theo thứ tự bảng chữ cái, số và theo nhiều cách khác.</p>\n<p>Hãy xem video bên dưới để tìm hiểu thêm về cách sắp xếp dữ liệu trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Các kiểu sắp xếp",
                        content: "<p>Khi sắp xếp dữ liệu, điều quan trọng trước tiên là phải quyết định xem bạn muốn áp dụng sắp xếp cho ** toàn bộ trang tính ** hay chỉ một ** phạm vi ô **.</p>\n<ul>\n<li>\n<p>** Sắp xếp trang tính ** sắp xếp tất cả dữ liệu trong trang tính của bạn theo một cột. Thông tin liên quan trên mỗi hàng được lưu giữ cùng nhau khi áp dụng sắp xếp. Trong ví dụ bên dưới, cột ** Tên liên hệ <strong>(cột ** A </strong>) \nđã được sắp xếp để hiển thị tên theo thứ tự bảng chữ cái.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A sorted worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_types_sheet.png\" /></p>\n</li>\n<li>\n<p>** Sắp xếp phạm vi ** sắp xếp dữ liệu trong một phạm vi ô, điều này có thể hữu ích khi làm việc với một trang tính có chứa nhiều bảng. Sắp xếp một phạm vi sẽ không ảnh hưởng đến nội dung khác trong bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Sorting a range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_types_range_2013.png\" /></p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để sắp xếp một trang tính:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ sắp xếp mẫu đơn đặt hàng áo phông theo thứ tự bảng chữ cái theo ** Họ <strong>(cột ** C </strong>).</p>\n<ol>\n<li>\n<p>Chọn một ** ô ** trong cột bạn muốn sắp xếp. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** C2 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell C2\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_whole_sheet_select_cell.png\" title=\"selecting cell C2\" /></p>\n</li>\n<li>\n<p>Chọn tab ** Dữ liệu ** trên ** Ribbon **, sau đó nhấp vào ** Lệnh A-Z ** để sắp xếp từ A đến Z hoặc ** Lệnh Z-A ** để sắp xếp Z đến A. Trong ví dụ của chúng tôi, chúng tôi sẽ sắp xếp từ A đến Z.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"sorting A to Z\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_whole_sheet_ascending_sort_button.png\" title=\"sorting A to Z\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ được ** sắp xếp ** theo cột đã chọn. Trong ví dụ của chúng tôi, trang tính hiện được sắp xếp theo ** họ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a spreadsheet sorted by last name\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_whole_sheet_after_changes.png\" title=\"a spreadsheet sorted by last name\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để sắp xếp một phạm vi:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ chọn một ** bảng riêng ** trong biểu mẫu đặt hàng áo phông để sắp xếp số lượng áo sơ mi được đặt hàng trong mỗi hạng.</p>\n<ol>\n<li>\n<p>Chọn ** phạm vi ô ** bạn muốn sắp xếp. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn phạm vi ô ** G2:H6 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_select_cells.png\" /></p>\n</li>\n<li>\n<p>Chọn tab ** Dữ liệu ** trên ** Ribbon <strong>, sau đó nhấp vào lệnh ** Sắp xếp </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_sort_button.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Sắp xếp ** sẽ xuất hiện. Chọn ** cột ** bạn muốn sắp xếp. Trong ví dụ của chúng tôi, chúng tôi muốn sắp xếp dữ liệu theo số lượng đơn đặt hàng áo phông, vì vậy chúng tôi sẽ chọn <strong>Đơn hàng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_select_options.png\" /></p>\n</li>\n<li>\n<p>Quyết định ** thứ tự sắp xếp <strong>(tăng dần hoặc giảm dần). Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng ** Lớn nhất đến Nhỏ nhất </strong>.</p>\n</li>\n<li>\n<p>Khi bạn đã hài lòng với lựa chọn của mình, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_click_ok.png\" /></p>\n</li>\n<li>\n<p>Phạm vi ô sẽ được ** sắp xếp ** theo cột đã chọn. Trong ví dụ của chúng tôi, cột Đơn hàng sẽ được sắp xếp từ ** cao nhất đến thấp nhất **. Lưu ý rằng nội dung khác trong trang tính không bị ảnh hưởng bởi việc sắp xếp.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The range has been sorted\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_after_changes.png\" /></p>\n</li>\n</ol>\n<p>Nếu dữ liệu của bạn không được sắp xếp đúng cách, hãy kiểm tra kỹ các giá trị ô của bạn để đảm bảo chúng được nhập chính xác vào trang tính. Ngay cả một lỗi đánh máy nhỏ cũng có thể gây ra vấn đề khi sắp xếp một bảng tính lớn. Trong ví dụ bên dưới, chúng tôi đã quên thêm dấu gạch nối vào ô A18, khiến cho việc sắp xếp của chúng tôi hơi không chính xác.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A typo can ruin a sort\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_typo.png\" /></p>\n<h3>Sắp xếp tùy chỉnh</h3>\n<p>Đôi khi bạn có thể thấy rằng các tùy chọn sắp xếp mặc định không thể sắp xếp dữ liệu theo thứ tự bạn cần. May mắn thay, Excel cho phép bạn tạo ** danh sách tùy chỉnh ** để xác định thứ tự sắp xếp của riêng bạn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để tạo một sắp xếp tùy chỉnh:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi muốn sắp xếp trang tính theo ** T-Shirt Size <strong>(cột ** D </strong>). Việc sắp xếp thông thường sẽ sắp xếp các kích thước theo thứ tự bảng chữ cái, điều này sẽ không chính xác. Thay vào đó, chúng tôi sẽ tạo một danh sách tùy chỉnh để sắp xếp từ nhỏ nhất đến lớn nhất.</p>\n<ol>\n<li>\n<p>Chọn một ** ô ** trong cột bạn muốn sắp xếp. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D2 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_custom_select_cells.png\" /></p>\n</li>\n<li>\n<p>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Sắp xếp </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_sort_button.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Sắp xếp ** sẽ xuất hiện. Chọn ** cột ** bạn muốn sắp xếp, sau đó chọn ** Danh sách tùy chỉnh...<strong> từ trường </strong>Đơn hàng <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn sắp xếp theo ** Kích thước áo phông </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_custom_sort_dialog.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Danh sách tùy chỉnh ** sẽ xuất hiện. Chọn ** DANH SÁCH MỚI ** từ hộp ** Danh sách tùy chỉnh:**.</p>\n</li>\n<li>\n<p>Nhập các mục theo thứ tự tùy chỉnh mong muốn vào hộp ** Danh sách mục:<strong>. Trong ví dụ của chúng tôi, chúng tôi muốn sắp xếp dữ liệu theo kích thước áo phông từ ** nhỏ nhất ** đến ** lớn nhất </strong>, vì vậy, chúng tôi sẽ nhập ** Nhỏ <strong>,</strong> Trung bình <strong>,</strong> Lớn ** và ** X-Large **, nhấn ** Enter ** trên bàn phím sau mỗi mục.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Custom Lists dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_custom_custom_lists_dialog.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** Thêm ** để lưu thứ tự sắp xếp mới. Danh sách mới sẽ được thêm vào hộp ** Danh sách tùy chỉnh:<strong>. Đảm bảo danh sách mới được ** chọn </strong>, sau đó nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking OK\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_custom_click_ok.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Danh sách tùy chỉnh ** sẽ đóng lại. Nhấp vào ** OK ** trong hộp thoại ** Sắp xếp ** để thực hiện sắp xếp tùy chỉnh.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking OK\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_custom_click_ok_again.png\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ được ** sắp xếp ** theo thứ tự tùy chỉnh. Trong ví dụ của chúng tôi, bảng tính hiện được sắp xếp theo kích cỡ áo phông từ nhỏ nhất đến lớn nhất.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The sheet has now been sorted with our custom criteria.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_custom_after_changes.png\" /></p>\n</li>\n</ol>\n<h3>Sắp xếp cấp độ</h3>\n<p>Nếu cần kiểm soát nhiều hơn cách sắp xếp dữ liệu, bạn có thể thêm nhiều ** cấp ** vào bất kỳ cách sắp xếp nào. Điều này cho phép bạn sắp xếp dữ liệu của mình theo ** nhiều hơn một ** ** cột **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để thêm một cấp độ:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ sắp xếp trang tính theo ** Cỡ áo phông <strong>(Cột ** D </strong>), sau đó theo ** Phòng chủ nhiệm #<strong>(cột ** A </strong>).</p>\n<ol>\n<li>\n<p>Chọn một ** ô ** trong cột bạn muốn sắp xếp. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** A2 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Select cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_levels_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào tab ** Dữ liệu <strong>, sau đó chọn lệnh ** Sắp xếp </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_range_sort_button.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Sắp xếp ** sẽ xuất hiện. Chọn cột đầu tiên bạn muốn sắp xếp. Trong ví dụ này, chúng tôi sẽ sắp xếp theo ** Kích thước áo phông <strong>(cột ** D </strong>) \nvới danh sách tùy chỉnh mà chúng tôi đã tạo trước đó cho trường Đơn hàng.</p>\n</li>\n<li>\n<p>Nhấp vào ** Thêm cấp độ ** để thêm cột khác để sắp xếp.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_levels_sort_dialog_1.png\" /></p>\n</li>\n<li>\n<p>Chọn cột tiếp theo bạn muốn sắp xếp, sau đó nhấp vào ** OK <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ sắp xếp theo ** Phòng chủ nhiệm #</strong>(cột ** A **).<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Sort dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_levels_sort_dialog_2.png\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ được ** sắp xếp ** theo thứ tự đã chọn. Trong ví dụ của chúng tôi, các đơn hàng được sắp xếp theo kích cỡ áo phông. Trong mỗi nhóm kích cỡ áo phông, học sinh được sắp xếp theo số phòng chủ nhiệm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The multi-level sort is applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_levels_result.png\" /></p>\n</li>\n</ol>\n<p>Nếu bạn cần thay đổi thứ tự sắp xếp theo nhiều cấp độ, bạn có thể dễ dàng kiểm soát cột nào được sắp xếp trước. Chỉ cần chọn ** cột ** mong muốn, sau đó nhấp vào mũi tên ** Di chuyển lên ** hoặc ** Di chuyển xuống ** để điều chỉnh mức độ ưu tiên của cột đó.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Move levels up or down\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/sorting_levels_change_order.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_sorting_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Đối với bảng chính, hãy tạo ** sắp xếp tùy chỉnh ** sắp xếp theo ** Cấp ** từ ** Nhỏ nhất đến Lớn nhất ** và sau đó theo ** Tên người cắm trại ** từ ** A đến Z **.</li>\n<li>Tạo một sắp xếp cho phần ** Thông tin bổ sung <strong>. Sắp xếp theo ** Người cố vấn (Cột H)</strong> từ ** A đến Z **.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Sorting Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-24_at_3.45.45_pm.png\" /></li>\n</ol>\n<p>/en/excel/filtering-data/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_20",
                sessionId: 68,
                title: "Bài 20: Lọc dữ liệu",
                description: "Nội dung chi tiết cho bài Bài 20: Lọc dữ liệu.",
                video: "https://www.youtube.com/embed/_OdsZR_rL1U",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 20: lọc dữ liệu</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 20: Lọc dữ liệu",
                        content: "<p>/en/excel/sắp xếp-dữ liệu/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Nếu bảng tính của bạn chứa nhiều nội dung thì việc tìm kiếm thông tin một cách nhanh chóng có thể khó khăn.** Bộ lọc ** có thể được sử dụng để ** thu hẹp ** dữ liệu trong bảng tính của bạn, cho phép bạn chỉ xem thông tin bạn cần.</p>\n<p>Hãy xem video bên dưới để tìm hiểu thêm về cách lọc dữ liệu trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để lọc dữ liệu:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ áp dụng bộ lọc cho bảng tính nhật ký thiết bị để chỉ hiển thị máy tính xách tay và máy chiếu có sẵn để thanh toán.</p>\n<ol>\n<li>\n<p>Để quá trình lọc hoạt động chính xác, bảng tính của bạn phải bao gồm ** hàng tiêu đề <strong>, được sử dụng để xác định tên của từng cột. Trong ví dụ của chúng tôi, trang tính của chúng tôi được sắp xếp thành các cột khác nhau được xác định bởi các ô tiêu đề ở hàng 1:</strong> ID#<strong>,</strong> Loại <strong>,</strong> Thiết bị ** ** Chi tiết **, v.v.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The header row in a spreadsheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_howto_header_row.png\" /></p>\n</li>\n<li>\n<p>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Filter </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Filter button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_filter_button.png\" /></p>\n</li>\n</ol>\n<p>3.** Mũi tên thả xuống ** sẽ xuất hiện trong ô tiêu đề của mỗi cột.\n4. Nhấp vào ** mũi tên thả xuống ** cho cột bạn muốn lọc. Trong ví dụ của chúng tôi, chúng tôi sẽ lọc cột ** B ** để chỉ xem một số loại thiết bị nhất định.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dropdown arrows in the header row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_howto_dropdown_arrow.png\" /></p>\n<p>5.<strong> Trình đơn ** Bộ lọc ** ** ** sẽ xuất hiện.\n6.</strong> Bỏ chọn ** hộp bên cạnh ** Chọn tất cả ** để nhanh chóng bỏ chọn tất cả dữ liệu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The dropdown menu for sorting and filtering\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_howto_dropdown_menu.png\" /></p>\n<p>7.<strong>Đánh dấu ** các hộp bên cạnh dữ liệu bạn muốn lọc, sau đó nhấp vào ** OK </strong>. Trong ví dụ này, chúng tôi sẽ chọn ** Máy tính xách tay ** và ** Máy chiếu ** để chỉ xem các loại thiết bị này.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting filter categories\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_howto_dropdown_menu_select.png\" /></p>\n<ol>\n<li>Dữ liệu sẽ được ** lọc **, tạm thời ẩn bất kỳ nội dung nào không phù hợp với tiêu chí. Trong ví dụ của chúng tôi, chỉ có máy tính xách tay và máy chiếu mới hiển thị.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The worksheet is now filtered\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_howto_after_changes.png\" /></li>\n</ol>\n<p>Bạn cũng có thể truy cập các tùy chọn lọc từ lệnh ** Sắp xếp &amp; Lọc ** trên tab ** Trang chủ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Filter menu on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_filter_on_home_tab.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để áp dụng nhiều bộ lọc:",
                        content: "<p>Các bộ lọc là ** tích lũy **, nghĩa là bạn có thể áp dụng ** nhiều ** ** bộ lọc ** để giúp thu hẹp kết quả của mình. Trong ví dụ này, chúng tôi đã lọc bảng tính của mình để hiển thị máy tính xách tay và máy chiếu và chúng tôi muốn thu hẹp phạm vi hơn nữa để chỉ hiển thị máy tính xách tay và máy chiếu đã được kiểm tra trong tháng 8.</p>\n<ol>\n<li>Nhấp vào ** mũi tên thả xuống ** cho cột bạn muốn lọc. Trong ví dụ này, chúng tôi sẽ thêm bộ lọc vào cột ** D ** để xem thông tin theo ngày.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dropdown arrows in the header row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_multiple_dropdown_arrow.png\" /></li>\n</ol>\n<p>2.<strong> Trình đơn Bộ lọc ** sẽ xuất hiện.\n3.</strong> Chọn ** hoặc ** bỏ chọn ** các hộp tùy thuộc vào dữ liệu bạn muốn lọc, sau đó nhấp vào ** OK <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ bỏ chọn mọi thứ ngoại trừ ** tháng 8 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The dropdown menu for sorting and filtering\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_multiple_dropdown_menu.png\" /></p>\n<ol>\n<li>Bộ lọc mới sẽ được áp dụng. Trong ví dụ của chúng tôi, trang tính hiện được lọc để chỉ hiển thị máy tính xách tay và máy chiếu đã được kiểm tra trong tháng 8.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The worksheet now has two filters\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_multiple_after_changes.png\" /></li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để xóa bộ lọc:",
                        content: "<p>Sau khi áp dụng bộ lọc, bạn có thể muốn xóa—hoặc ** xóa **—bộ lọc đó khỏi trang tính của mình để bạn có thể lọc nội dung theo nhiều cách khác nhau.</p>\n<ol>\n<li>Nhấp vào ** mũi tên thả xuống ** cho bộ lọc bạn muốn xóa. Trong ví dụ của chúng tôi, chúng tôi sẽ xóa bộ lọc trong cột ** D **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The dropdown button for the filter applied in this column\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_clear_dropdown_button.png\" /></li>\n</ol>\n<p>2.<strong> Trình đơn Bộ lọc ** sẽ xuất hiện.\n3. Chọn ** Xóa bộ lọc khỏi [TÊN CỘT]</strong> từ menu Bộ lọc. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Xóa bộ lọc từ \"Đã kiểm tra **\".<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Clear Filter menu option\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_clear_dropdown_menu.png\" /></p>\n<ol>\n<li>Bộ lọc sẽ bị xóa khỏi cột. Dữ liệu bị ẩn trước đó sẽ được hiển thị.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The filter has been cleared\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_multiple_dropdown_arrow.png\" /></li>\n</ol>\n<p>Để xóa tất cả bộ lọc khỏi bảng tính của bạn, hãy nhấp vào lệnh ** Filter ** trên tab ** Data **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Filter button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_filter_button.png\" /></p>\n<h3>Lọc nâng cao</h3>\n<p>Nếu bạn cần một bộ lọc cho nội dung nào đó cụ thể thì tính năng lọc cơ bản có thể không cung cấp cho bạn đủ tùy chọn. May mắn thay, Excel bao gồm một số công cụ ** nâng cao ** ** lọc ** <strong>, bao gồm ** tìm kiếm </strong>,<strong> văn bản </strong>,<strong> ngày ** và ** số ** ** lọc </strong>, có thể thu hẹp kết quả của bạn để giúp tìm thấy chính xác những gì bạn cần.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để lọc bằng tìm kiếm:",
                        content: "<p>Excel cho phép bạn ** tìm kiếm ** dữ liệu có chứa cụm từ, số, ngày tháng chính xác, v.v. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng tính năng này để chỉ hiển thị các sản phẩm có thương hiệu ** Saris ** trong nhật ký thiết bị của chúng tôi.</p>\n<ol>\n<li>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Filter </strong>.<strong> Mũi tên thả xuống ** sẽ xuất hiện trong ô tiêu đề của mỗi cột.</strong> Lưu ý **: Nếu bạn đã thêm bộ lọc vào trang tính của mình, bạn có thể bỏ qua bước này.</li>\n<li>Nhấp vào ** mũi tên thả xuống ** cho cột bạn muốn lọc. Trong ví dụ của chúng tôi, chúng tôi sẽ lọc cột ** C **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dropdown arrows in the header row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_search_dropdown_button.png\" /></li>\n</ol>\n<p>3.<strong> Trình đơn Bộ lọc ** sẽ xuất hiện. Nhập ** cụm từ tìm kiếm ** vào ** hộp tìm kiếm </strong>. Kết quả tìm kiếm sẽ tự động xuất hiện bên dưới trường ** Văn bản ** ** Bộ lọc ** khi bạn nhập. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** saris ** để tìm tất cả thiết bị mang nhãn hiệu Saris. Khi bạn hoàn tất, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Applying a search filter\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_search_dropdown_menu_callout.png\" /></p>\n<ol>\n<li>Bảng tính sẽ được ** lọc ** theo cụm từ tìm kiếm của bạn. Trong ví dụ của chúng tôi, bảng tính hiện được lọc để chỉ hiển thị thiết bị của thương hiệu Saris.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The search filter has been applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_search_after_changes.png\" /></li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để sử dụng bộ lọc văn bản nâng cao:** Bộ lọc văn bản nâng cao",
                        content: "<p>** có thể được sử dụng để hiển thị thông tin cụ thể hơn, chẳng hạn như các ô chứa một số ký tự nhất định hoặc dữ liệu loại trừ một từ hoặc số cụ thể. Trong ví dụ của chúng tôi, chúng tôi muốn loại trừ bất kỳ mục nào có chứa từ ** máy tính xách tay **.</p>\n<ol>\n<li>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Filter </strong>.<strong> Mũi tên thả xuống ** sẽ xuất hiện trong ô tiêu đề của mỗi cột.</strong> Lưu ý **: Nếu bạn đã thêm bộ lọc vào trang tính của mình, bạn có thể bỏ qua bước này.</li>\n<li>Nhấp vào ** mũi tên thả xuống ** cho cột bạn muốn lọc. Trong ví dụ của chúng tôi, chúng tôi sẽ lọc cột ** C **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dropdown arrows in the header row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_search_dropdown_button.png\" /></li>\n</ol>\n<p>3.<strong> Trình đơn Bộ lọc ** sẽ xuất hiện. Di chuột qua ** Bộ lọc văn bản </strong>, sau đó chọn bộ lọc văn bản mong muốn từ trình đơn thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Không chứa...** để xem dữ liệu không chứa văn bản cụ thể.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adding a custom filter in the dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_advanced_dropdown_menu.png\" /></p>\n<ol>\n<li>\n<p>Hộp thoại ** Tự động lọc tùy chỉnh ** sẽ xuất hiện. Nhập ** văn bản mong muốn ** vào bên phải bộ lọc, sau đó nhấp vào ** OK **. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** laptop ** để loại trừ bất kỳ mục nào có chứa từ này.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The custom filter dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_advanced_custom_filter.png\" /></p>\n</li>\n<li>\n<p>Dữ liệu sẽ được lọc theo bộ lọc văn bản đã chọn. Trong ví dụ của chúng tôi, bảng tính của chúng tôi hiện hiển thị các mục không chứa từ ** máy tính xách tay **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The custom filter has been applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_advanced_after_changes.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Để sử dụng bộ lọc số nâng cao:** Bộ lọc số nâng cao",
                        content: "<p>** cho phép bạn thao tác dữ liệu được đánh số theo nhiều cách khác nhau. Trong ví dụ này, chúng tôi sẽ chỉ hiển thị một số loại thiết bị nhất định dựa trên phạm vi số ID.</p>\n<ol>\n<li>Chọn tab ** Dữ liệu ** trên Ribbon, sau đó nhấp vào lệnh ** Filter <strong>.</strong> Mũi tên thả xuống ** sẽ xuất hiện trong ô tiêu đề của mỗi cột.<strong> Lưu ý </strong>: Nếu bạn đã thêm bộ lọc vào trang tính của mình, bạn có thể bỏ qua bước này.</li>\n<li>Nhấp vào ** mũi tên thả xuống ** cho cột bạn muốn lọc. Trong ví dụ của chúng tôi, chúng tôi sẽ lọc cột ** A ** để chỉ xem một phạm vi số ID nhất định.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dropdown arrows in the header row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_number_dropdown_button.png\" /></li>\n</ol>\n<p>3.<strong> Trình đơn Bộ lọc ** sẽ xuất hiện. Di chuột qua ** Bộ lọc số </strong>, sau đó chọn bộ lọc số mong muốn từ menu thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Giữa ** để xem số ID giữa một phạm vi số cụ thể.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adding a number filter in the dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_number_dropdown_menu.png\" /></p>\n<ol>\n<li>\n<p>Hộp thoại ** Tự động lọc tùy chỉnh ** sẽ xuất hiện. Nhập ** số ** mong muốn vào bên phải mỗi bộ lọc, sau đó nhấp vào ** OK <strong>. Trong ví dụ của chúng tôi, chúng tôi muốn lọc các số ID lớn hơn hoặc bằng ** 3000 ** nhưng nhỏ hơn hoặc bằng ** 6000 </strong>, số này sẽ hiển thị số ID trong phạm vi 3000-6000.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The number filter dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_number_dialog_box.png\" /></p>\n</li>\n<li>\n<p>Dữ liệu sẽ được lọc theo bộ lọc số đã chọn. Trong ví dụ của chúng tôi, chỉ các mục có số ID từ ** 3000 ** đến ** 6000 ** mới hiển thị.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The number filter has been applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_number_after_changes.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 9: Để sử dụng bộ lọc ngày nâng cao:** Bộ lọc ngày nâng cao",
                        content: "<p>** có thể được sử dụng để xem thông tin trong một khoảng thời gian nhất định, chẳng hạn như năm ngoái, quý tiếp theo hoặc giữa hai ngày. Trong ví dụ này, chúng tôi sẽ sử dụng bộ lọc ngày nâng cao để chỉ xem thiết bị đã được kiểm tra trong khoảng thời gian từ ngày 15 tháng 7 đến ngày 15 tháng 8.</p>\n<ol>\n<li>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Filter </strong>.<strong> Mũi tên thả xuống ** sẽ xuất hiện trong ô tiêu đề của mỗi cột.</strong> Lưu ý **: Nếu bạn đã thêm bộ lọc vào trang tính của mình, bạn có thể bỏ qua bước này.</li>\n<li>Nhấp vào ** mũi tên thả xuống ** cho cột bạn muốn lọc. Trong ví dụ của chúng tôi, chúng tôi sẽ lọc cột ** D ** để chỉ xem một phạm vi ngày nhất định.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Dropdown arrows in the header row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_date_dropdown_button.png\" /></li>\n</ol>\n<p>3.<strong> Trình đơn Bộ lọc ** sẽ xuất hiện. Di chuột qua ** Bộ lọc ngày </strong>, sau đó chọn bộ lọc ngày mong muốn từ menu thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Giữa...** để xem thiết bị đã được kiểm tra trong khoảng thời gian từ ngày 15 tháng 7 đến ngày 15 tháng 8.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adding a date filter in the dropdown menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_date_dropdown_menu.png\" /></p>\n<ol>\n<li>\n<p>Hộp thoại ** Tự động lọc tùy chỉnh ** sẽ xuất hiện. Nhập ** ngày ** mong muốn vào bên phải mỗi bộ lọc, sau đó nhấp vào ** OK <strong>. Trong ví dụ của chúng tôi, chúng tôi muốn lọc các ngày sau hoặc bằng ** ngày 15 tháng 7 năm 2015 ** và trước hoặc bằng ** ngày 15 tháng 8 năm 2015 </strong>, sẽ hiển thị một phạm vi giữa các ngày này.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The date filter dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_date_dialog_box.png\" /></p>\n</li>\n<li>\n<p>Bảng tính sẽ được lọc theo bộ lọc ngày đã chọn. Trong ví dụ của chúng tôi, giờ đây chúng tôi có thể xem những mặt hàng nào đã được thanh toán ** từ ngày 15 tháng 7 đến ngày 15 tháng 8 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The date filter has been applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/filtering_date_after_changes.png\" /></p>\n</li>\n</ol>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_filtering_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.\n3.<strong>Áp dụng bộ lọc ** để chỉ hiển thị </strong>Điện tử ** và ** Dụng cụ **.</li>\n<li>Sử dụng tính năng ** Tìm kiếm ** để lọc mô tả mục có chứa từ ** Sansei <strong>. Sau khi thực hiện việc này, bạn sẽ thấy ** sáu ** mục nhập.\n5.</strong> Xóa ** bộ lọc Mô tả Mục.</li>\n<li>Sử dụng ** bộ lọc số <strong>, hiển thị số tiền vay ** lớn hơn hoặc bằng </strong>$100.</li>\n<li>Lọc để chỉ hiển thị các mục có thời hạn vào năm 2016.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Filtering Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-25_at_10.20.05_am.png\" /></li>\n</ol>\n<p>/en/excel/groups-and-subtotals/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_21",
                sessionId: 68,
                title: "Bài 21: Nhóm và Subtotals",
                description: "Nội dung chi tiết cho bài Bài 21: Nhóm và Subtotals.",
                video: "https://www.youtube.com/embed/7JJOBFSHbZk",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 21: nhóm và tổng phụ</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 21: Nhóm và tổng phụ",
                        content: "<p>/en/excel/filtering-data/content/</p>\n<h3>Giới thiệu</h3>\n<p>Các bảng tính có nhiều nội dung đôi khi có thể khiến bạn cảm thấy choáng ngợp và thậm chí có thể trở nên khó đọc. May mắn thay, Excel có thể sắp xếp dữ liệu thành ** nhóm **, cho phép bạn dễ dàng ** hiển thị ** và ** ẩn ** các phần khác nhau trong trang tính của mình. Bạn cũng có thể tóm tắt các nhóm khác nhau bằng cách sử dụng lệnh ** Tổng phụ ** và tạo ** phác thảo ** cho trang tính của mình.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về nhóm và tổng phụ trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để nhóm các hàng hoặc cột:",
                        content: "<ol>\n<li>\n<p>Chọn ** hàng ** hoặc ** cột ** bạn muốn nhóm. Trong ví dụ này, chúng tôi sẽ chọn các cột ** B <strong>,</strong> C ** và ** D **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_group_select_cells.png\" /></p>\n</li>\n<li>\n<p>Chọn tab ** Dữ liệu ** trên ** Ribbon <strong>, sau đó nhấp vào lệnh ** Group </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Group button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_group_button.png\" /></p>\n</li>\n<li>\n<p>Các hàng hoặc cột đã chọn sẽ được ** nhóm lại <strong>. Trong ví dụ của chúng tôi, các cột ** B </strong>,** C ** và ** D ** được nhóm lại.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The selected cells are now grouped\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_group_results.png\" /></p>\n</li>\n</ol>\n<p>Để ** ungroup ** dữ liệu, hãy chọn các hàng hoặc cột được nhóm, sau đó nhấp vào lệnh ** Ungroup **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Ungroup button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_group_ungroup.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để ẩn và hiển thị các nhóm:",
                        content: "<ol>\n<li>\n<p>Để ẩn một nhóm, hãy nhấp vào dấu trừ, còn được gọi là nút <strong>Ẩn chi tiết </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Hide Detail button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_group_hide.png\" /></p>\n</li>\n<li>\n<p>Nhóm sẽ ** ẩn <strong>. Để hiển thị một nhóm ẩn, hãy nhấp vào dấu cộng, còn được gọi là nút ** Hiển thị chi tiết </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Show Detail button\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_group_show.png\" /></p>\n</li>\n</ol>\n<h3>Tạo tổng phụ</h3>\n<p>Lệnh ** Tổng phụ ** cho phép bạn tự động ** tạo nhóm ** và sử dụng các hàm phổ biến như SUM, COUNT và AVERAGE để giúp ** tóm tắt ** dữ liệu của bạn. Ví dụ: lệnh ** Tổng phụ ** có thể giúp tính toán chi phí vật tư văn phòng theo loại từ một đơn hàng tồn kho lớn. Nó sẽ tạo ra một hệ thống phân cấp các nhóm, được gọi là ** phác thảo **, để giúp sắp xếp trang tính của bạn.</p>\n<p>Dữ liệu của bạn phải được ** sắp xếp ** chính xác trước khi sử dụng lệnh Tổng phụ, vì vậy, bạn có thể muốn xem lại bài học của chúng tôi về <a href=\"../../sorting-data/1/index.html\">Sắp xếp dữ liệu</a> \nđể tìm hiểu thêm.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để tạo tổng phụ:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng lệnh Tổng phụ với biểu mẫu đặt hàng áo phông để xác định số lượng áo phông được đặt hàng ở mỗi kích cỡ (Nhỏ, Trung bình, Lớn và X-Lớn). Điều này sẽ tạo một ** phác thảo ** cho bảng tính của chúng ta với một ** nhóm ** cho mỗi kích cỡ áo phông và sau đó ** đếm ** tổng số áo sơ mi trong mỗi nhóm.</p>\n<ol>\n<li>\n<p>Đầu tiên,** sắp xếp ** bảng tính của bạn theo dữ liệu bạn muốn tính tổng phụ. Trong ví dụ này, chúng tôi sẽ tạo tổng phụ cho từng kích cỡ áo phông, vì vậy bảng tính của chúng tôi đã được sắp xếp theo kích cỡ áo phông từ nhỏ nhất đến lớn nhất.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_select.png\" /></p>\n</li>\n<li>\n<p>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Tổng phụ </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Subtotal button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_button.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tổng phụ ** sẽ xuất hiện. Nhấp vào mũi tên thả xuống cho trường ** Tại mỗi thay đổi trong:<strong> để chọn ** cột ** bạn muốn tính tổng phụ. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Cỡ áo phông </strong>.</p>\n</li>\n<li>\n<p>Nhấp vào mũi tên thả xuống cho trường ** Sử dụng hàm:** để chọn ** hàm ** bạn muốn sử dụng. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** COUNT ** để đếm số lượng áo sơ mi được đặt theo từng kích cỡ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting the Count option\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_dialog1.png\" title=\"selecting the Count option\" /></p>\n</li>\n<li>\n<p>Trong trường ** Thêm tổng phụ vào:<strong>, hãy chọn ** cột ** nơi bạn muốn ** tổng phụ được tính ** xuất hiện. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Cỡ áo phông </strong>. Khi bạn hài lòng với lựa chọn của mình, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding subtotals to T-shirt Size\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_dialog2.png\" title=\"adding subtotals to T-shirt Size\" /></p>\n</li>\n<li>\n<p>Trang tính sẽ ** được trình bày ** thành ** nhóm ** và ** tổng phụ ** sẽ được liệt kê bên dưới mỗi nhóm. Trong ví dụ của chúng tôi, dữ liệu hiện được nhóm theo kích cỡ áo phông và số lượng áo sơ mi được đặt hàng theo kích thước đó sẽ xuất hiện bên dưới mỗi nhóm.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Subtotal rows and groups have been applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_result.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để xem nhóm theo cấp độ:",
                        content: "<p>Khi bạn tạo tổng phụ, bảng tính của bạn sẽ được chia thành các ** mức ** khác nhau. Bạn có thể chuyển đổi giữa các cấp độ này để kiểm soát nhanh lượng thông tin được hiển thị trong trang tính bằng cách nhấp vào nút ** Cấp ** ở bên trái trang tính. Trong ví dụ của chúng tôi, chúng tôi sẽ chuyển đổi giữa cả ba cấp độ trong dàn bài của mình. Mặc dù ví dụ này chỉ chứa ba cấp độ nhưng Excel có thể chứa tới tám cấp độ.</p>\n<ol>\n<li>\n<p>Nhấp vào ** mức thấp nhất ** để hiển thị ít chi tiết nhất. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** cấp 1 **, chỉ chứa ** Grand ** ** Count ** hoặc tổng số áo phông được đặt hàng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Setting the group detail to level 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_level_1.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** cấp độ tiếp theo ** để mở rộng chi tiết. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** cấp 2 **, chứa mỗi hàng tổng phụ nhưng ẩn tất cả dữ liệu khác khỏi trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Setting the group detail to level 2\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_level_2.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** mức cao nhất ** để xem và mở rộng tất cả dữ liệu trang tính của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** cấp 3 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Setting the group detail to level 3\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_level_3.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể sử dụng các nút ** Hiển thị chi tiết ** và **Ẩn ** ** Chi tiết ** để hiển thị và ẩn các nhóm trong đường viền.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Using the Show and Hide Detail buttons in a subtotal\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_level_groups.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để loại bỏ tổng phụ:",
                        content: "<p>Đôi khi bạn có thể không muốn giữ tổng phụ trong trang tính của mình, đặc biệt nếu bạn muốn sắp xếp lại dữ liệu theo những cách khác nhau. Nếu bạn không muốn sử dụng tính tổng phụ nữa, bạn sẽ cần ** xóa ** ** nó ** khỏi bảng tính của mình.</p>\n<ol>\n<li>\n<p>Chọn tab ** Dữ liệu <strong>, sau đó nhấp vào lệnh ** Tổng phụ </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Subtotal button on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_create_button.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tổng phụ ** sẽ xuất hiện. Nhấp vào ** Xóa ** ** Tất cả **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing subtotals in the Subtotal dialog\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_remove_dialog.png\" /></p>\n</li>\n<li>\n<p>Tất cả dữ liệu trang tính sẽ được ** hủy nhóm ** và các tổng phụ sẽ bị ** xóa **.</p>\n</li>\n</ol>\n<p>Để xóa tất cả các nhóm mà không xóa tổng phụ, hãy nhấp vào mũi tên thả xuống của lệnh ** Ungroup <strong>, sau đó chọn ** Xóa dàn bài </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clear Outline in the Ungroup menu on the Data tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/subtotals_remove_clear.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_subtotals_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.\n3.** Sắp xếp ** sổ làm việc theo ** Cấp ** từ nhỏ nhất đến lớn nhất.</li>\n<li>Sử dụng lệnh ** Tổng phụ ** để nhóm tại mỗi thay đổi trong ** Lớp <strong>. Sử dụng hàm ** SUM ** và thêm tổng phụ vào ** Số tiền đã huy động </strong>.</li>\n<li>Chọn ** cấp 2 ** để bạn chỉ nhìn thấy tổng phụ và tổng cuối.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Grouping and Subtotals Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-25_at_11.48.52_am.png\" /></li>\n</ol>\n<p>/en/excel/tables/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_22",
                sessionId: 68,
                title: "Bài 22: Bảng",
                description: "Nội dung chi tiết cho bài Bài 22: Bảng.",
                video: "https://www.youtube.com/embed/iroIA8_3soo",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_intropivottables_practice.xlsx" },
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_morepivottables_practice.xlsx" },
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_tables_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài học 22: bảng</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 22: Bàn",
                        content: "<p>/en/excel/groups-and-subtotals/content/</p>\n<h3>Giới thiệu</h3>\n<p>Sau khi nhập thông tin vào bảng tính, bạn có thể muốn định dạng dữ liệu của mình dưới dạng ** bảng <strong>. Cũng giống như định dạng thông thường, bảng có thể cải thiện ** giao diện ** sổ làm việc của bạn và chúng cũng sẽ giúp ** sắp xếp ** nội dung của bạn và giúp dữ liệu của bạn dễ sử dụng hơn. Excel bao gồm một số ** công cụ ** và ** kiểu bảng được xác định trước </strong>, cho phép bạn tạo bảng nhanh chóng và dễ dàng.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách làm việc với bảng.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để định dạng dữ liệu dưới dạng bảng:",
                        content: "<ol>\n<li>\n<p>Chọn ** ô ** bạn muốn định dạng dưới dạng bảng. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn phạm vi ô ** A2:D9 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_format_cells.png\" /></p>\n</li>\n<li>\n<p>Từ tab ** Trang chủ <strong>, nhấp vào lệnh </strong>Định dạng dưới dạng Bảng ** trong nhóm ** Styles **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"format as table command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_format_command.png\" /></p>\n</li>\n<li>\n<p>Chọn ** kiểu bảng ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a table style\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_format_style.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện, xác nhận ** phạm vi ô ** đã chọn cho bảng.</p>\n</li>\n<li>\n<p>Nếu bảng của bạn có ** tiêu đề <strong>, hãy chọn hộp bên cạnh ** Bảng của tôi có tiêu đề </strong>, sau đó nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"confirmating cell range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_format_dialog.png\" /></p>\n</li>\n<li>\n<p>Phạm vi ô sẽ được định dạng theo ** kiểu bảng ** đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"table\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_format_complete.png\" /></p>\n</li>\n</ol>\n<p>Các bảng bao gồm ** lọc ** theo mặc định. Bạn có thể lọc dữ liệu của mình bất kỳ lúc nào bằng cách sử dụng ** mũi tên thả xuống ** trong các ô tiêu đề. Để tìm hiểu thêm, hãy xem lại bài học của chúng tôi về <a href=\"../../filtering-data/1/index.html\">Lọc dữ liệu</a>.</p>\n<h3>Sửa đổi bảng</h3>\n<p>Thật dễ dàng để sửa đổi giao diện của bất kỳ bảng nào sau khi thêm nó vào trang tính. Excel bao gồm một số tùy chọn để tùy chỉnh bảng, bao gồm ** thêm hàng hoặc cột ** và thay đổi ** kiểu bảng **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để thêm hàng hoặc cột vào bảng:",
                        content: "<p>Nếu bạn cần đưa nhiều nội dung hơn vào bảng của mình, bạn có thể sửa đổi ** kích thước bảng ** bằng cách bao gồm các hàng và cột bổ sung. Có hai cách đơn giản để thay đổi kích thước bảng:</p>\n<ul>\n<li>\n<p>Nhập ** mới ** ** nội dung ** vào bất kỳ hàng hoặc cột liền kề nào. Hàng hoặc cột sẽ được tự động đưa vào bảng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding a row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_add_manual.png\" /></p>\n</li>\n<li>\n<p>Nhấp và kéo ** góc dưới cùng bên phải ** của bảng để tạo thêm hàng hoặc cột.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding several rows\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_add_handle.png\" /></p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để thay đổi kiểu bảng:",
                        content: "<ol>\n<li>\n<p>Chọn ** bất kỳ ô nào ** trong bảng của bạn, sau đó nhấp vào tab ** Thiết kế **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"navigating to the design tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_style_tab.png\" /></p>\n</li>\n<li>\n<p>Xác định vị trí nhóm ** kiểu bảng **, sau đó nhấp vào mũi tên thả xuống ** Thêm ** để xem tất cả các kiểu bảng có sẵn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"more tables styles\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_style_more.png\" /></p>\n</li>\n<li>\n<p>Chọn ** kiểu bảng ** mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"choosing a table style\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_style_selection.png\" /></p>\n</li>\n</ol>\n<p>4.** kiểu bảng ** sẽ được áp dụng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"table\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_style_complete.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để sửa đổi các tùy chọn kiểu bảng:",
                        content: "<p>Bạn có thể bật nhiều tùy chọn khác nhau ** bật ** hoặc ** tắt ** để thay đổi giao diện của bất kỳ bảng nào. Có một số tùy chọn:<strong> Hàng tiêu đề </strong>,<strong> Hàng tổng </strong>,<strong> Hàng có ribbon </strong>,<strong> Cột đầu tiên </strong>,<strong> Cột cuối cùng </strong>,<strong> Cột có ribbon ** và ** Nút bộ lọc </strong>.</p>\n<ol>\n<li>\n<p>Chọn ** bất kỳ ô nào ** trong bảng của bạn, sau đó nhấp vào tab ** Thiết kế <strong>.\n2.</strong> C **</p>\n</li>\n<li>\n<p>** chết tiệt ** hoặc ** bỏ chọn ** các tùy chọn mong muốn trong nhóm ** Tùy chọn kiểu bảng **. Trong ví dụ của chúng tôi, chúng tôi sẽ kiểm tra ** Tổng hàng ** để tự động bao gồm ** tổng ** cho bảng của chúng tôi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"table style options\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_modify_options.png\" /></p>\n</li>\n<li>\n<p>Kiểu bảng sẽ được sửa đổi. Trong ví dụ của chúng tôi, một ** mới ** ** hàng ** đã được thêm vào bảng với ** công thức ** tự động tính tổng giá trị của các ô trong cột D.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"total row\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_modify_complete.png\" /></p>\n</li>\n</ol>\n<p>Tùy thuộc vào loại ** nội dung ** bạn có—và ** kiểu bảng ** bạn đã chọn—các tùy chọn này có thể ảnh hưởng đến giao diện bảng của bạn theo nhiều cách khác nhau. Bạn có thể cần thử nghiệm một vài lựa chọn để tìm ra phong cách chính xác mà bạn muốn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để xóa một bảng:",
                        content: "<p>Bạn có thể xóa bảng khỏi sổ làm việc mà không làm mất bất kỳ dữ liệu nào. Tuy nhiên, điều này có thể gây ra sự cố với một số loại ** định dạng ** nhất định, bao gồm màu sắc, phông chữ và các hàng có dải phân cách. Trước khi sử dụng tùy chọn này, hãy chuẩn bị định dạng lại các ô của bạn nếu cần.</p>\n<ol>\n<li>Chọn ** bất kỳ ô nào ** trong bảng của bạn, sau đó nhấp vào tab ** Thiết kế **.</li>\n<li>\n<p>Nhấp vào lệnh ** Convert to Range ** trong nhóm ** Tools **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"convert to range command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_remove_command.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện. Nhấp vào ** Có **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"convert to range confirmation\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_remove_dialog.png\" /></p>\n</li>\n<li>\n<p>Phạm vi sẽ không còn là bảng nữa nhưng các ô sẽ giữ lại dữ liệu và định dạng của chúng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"converted table\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_remove_complete.png\" /></p>\n</li>\n</ol>\n<p>Để khởi động lại định dạng của bạn từ đầu, hãy nhấp vào lệnh ** Xóa ** trên tab ** Trang chủ **. Tiếp theo, chọn ** Xóa định dạng ** từ menu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clear command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_remove_clear.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_tables_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Chọn các ô ** A2:D9 ** và ** định dạng dưới dạng bảng <strong>. Chọn một trong các ** kiểu nhẹ nhàng </strong>.\n4.<strong> Chèn một hàng ** giữa hàng 4 và 5. Trong hàng bạn vừa tạo, nhập ** Empanadas: Banana and Nutella </strong>, với đơn giá <strong>$3,25 ** và số lượng ** 12 </strong>.</li>\n<li>Thay đổi ** kiểu bảng ** thành ** kiểu bảng Medium 10 **.</li>\n<li>Trong ** Tùy chọn kiểu bảng <strong>, bỏ chọn ** hàng có ribbon ** và chọn ** cột có ribbon </strong>.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Tables Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/tables_challenge.png\" /></li>\n</ol>\n<p>/en/excel/biểu đồ/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_23",
                sessionId: 68,
                title: "Bài 23: Biểu đồ",
                description: "Nội dung chi tiết cho bài Bài 23: Biểu đồ.",
                video: "https://www.youtube.com/embed/_Wu7jYTr1Pk",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_charts_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 23: biểu đồ</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 23: Biểu đồ",
                        content: "<p>/en/excel/tables/content/</p>\n<h3>Giới thiệu</h3>\n<p>Có thể khó diễn giải các sổ làm việc Excel chứa nhiều dữ liệu.<strong> Biểu đồ ** cho phép bạn minh họa dữ liệu sổ làm việc của mình ** bằng đồ họa </strong>, giúp bạn dễ dàng hình dung ** so sánh ** và ** xu hướng **.</p>\n<p>Xem video dưới đây để tìm hiểu thêm về biểu đồ.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Hiểu biểu đồ",
                        content: "<p>Excel có một số ** loại biểu đồ **, cho phép bạn chọn loại biểu đồ phù hợp nhất với dữ liệu của mình. Để sử dụng biểu đồ một cách hiệu quả, bạn cần hiểu cách sử dụng các biểu đồ khác nhau.</p>\n<p>Bấm vào mũi tên trong trình chiếu bên dưới để tìm hiểu thêm về các loại biểu đồ trong Excel.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_1.png\" /></li>\n</ul>\n<p>Excel có rất nhiều loại biểu đồ, mỗi loại đều có ưu điểm riêng. Bấm vào mũi tên để xem một số loại biểu đồ khác nhau có sẵn trong Excel.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_2.png\" /></li>\n</ul>\n<p>Biểu đồ cột sử dụng các thanh dọc để thể hiện dữ liệu. Chúng có thể làm việc với nhiều loại dữ liệu khác nhau nhưng chúng được sử dụng thường xuyên nhất để so sánh thông tin.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_3.png\" /></li>\n</ul>\n<p>Biểu đồ đường là lý tưởng để hiển thị xu hướng. Các điểm dữ liệu được kết nối bằng các đường, giúp dễ dàng xem liệu các giá trị đang tăng hay giảm theo thời gian.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_4.png\" /></li>\n</ul>\n<p>Biểu đồ tròn giúp dễ dàng so sánh tỷ lệ. Mỗi giá trị được hiển thị dưới dạng một phần của chiếc bánh, vì vậy thật dễ dàng để biết giá trị nào chiếm phần trăm của tổng thể.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_5.png\" /></li>\n</ul>\n<p>Biểu đồ thanh hoạt động giống như biểu đồ cột nhưng chúng sử dụng thanh ngang thay vì thanh dọc.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_6.png\" /></li>\n</ul>\n<p>Biểu đồ vùng tương tự như biểu đồ đường, ngoại trừ các vùng bên dưới đường được điền vào.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_7b.png\" /></li>\n</ul>\n<p>Biểu đồ bề mặt cho phép bạn hiển thị dữ liệu trên toàn cảnh 3D. Chúng hoạt động tốt nhất với các tập dữ liệu lớn, cho phép bạn xem nhiều thông tin cùng một lúc.</p>\n<ul>\n<li><img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Trang trình bày 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_type_8.png\" /></li>\n</ul>\n<p>Ngoài các loại biểu đồ, bạn sẽ cần hiểu cách ** đọc biểu đồ **. Biểu đồ chứa một số thành phần hoặc phần có thể giúp bạn diễn giải dữ liệu.</p>\n<p>Nhấp vào các nút trong phần tương tác bên dưới để tìm hiểu về các phần khác nhau của biểu đồ.</p>\n<p>chỉnh sửa các điểm nóng<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Biểu đồ doanh số bán sách\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-02-50.png\" /></p>\n<h2>Chuỗi dữ liệu</h2>\n<p>** Chuỗi dữ liệu ** bao gồm các điểm dữ liệu có liên quan trong biểu đồ. Trong ví dụ này, như chúng ta có thể thấy trong chú giải, các cột màu vàng biểu thị doanh thu thuần trong tháng Hai.</p>\n<h2>Trục ngang</h2>\n<p>** Trục ngang <strong>(còn được gọi là ** trục x </strong>) \nlà phần nằm ngang của biểu đồ.</p>\n<p>Ở đây, trục ngang xác định ** danh mục ** trong biểu đồ. Trong ví dụ này, mỗi thể loại được đặt trong ** nhóm ** riêng.</p>\n<h2>Huyền thoại</h2>\n<p>** Chú giải ** xác định chuỗi dữ liệu mà mỗi ** màu ** trên biểu đồ đại diện.</p>\n<p>Trong ví dụ này, chú giải xác định các tháng khác nhau trong biểu đồ.</p>\n<h2>Tiêu đề biểu đồ</h2>\n<p>Tiêu đề phải mô tả rõ ràng biểu đồ đang minh họa điều gì.</p>\n<h2>Trục dọc</h2>\n<p>** trục tung <strong>(còn được gọi là ** trục y </strong>) \nlà phần thẳng đứng của biểu đồ.</p>\n<p>Ở đây, trục tung đo ** giá trị ** của các cột. Trong ví dụ này, giá trị đo được là tổng doanh thu của từng thể loại.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để chèn biểu đồ:",
                        content: "<ol>\n<li>\n<p>Chọn ** ô ** bạn muốn lập biểu đồ, bao gồm ** tiêu đề cột ** và ** nhãn hàng **. Các ô này sẽ là dữ liệu nguồn cho biểu đồ. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn các ô A1:F6.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-20-09.png\" /></p>\n</li>\n<li>\n<p>Từ tab ** Chèn <strong>, nhấp vào lệnh ** Biểu đồ ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Cột </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Column charts from the Insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-33-40.png\" /></p>\n</li>\n<li>\n<p>Chọn ** loại biểu đồ ** mong muốn từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a chart type\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-41-07.png\" /></p>\n</li>\n<li>\n<p>Biểu đồ đã chọn sẽ được chèn vào bảng tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Chart inserted into worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-44-32.png\" /></p>\n</li>\n</ol>\n<p>Nếu bạn không chắc chắn nên sử dụng loại biểu đồ nào, lệnh ** Biểu đồ được đề xuất ** sẽ đề xuất một số biểu đồ dựa trên dữ liệu nguồn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting recommended charts command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_14-59-37.png\" /></p>\n<h3>Phong cách biểu đồ và bố cục</h3>\n<p>Sau khi chèn biểu đồ, có một số điều bạn có thể muốn thay đổi về cách hiển thị dữ liệu của mình. Thật dễ dàng để chỉnh sửa ** bố cục ** và ** kiểu ** của biểu đồ từ tab ** Thiết kế **.</p>\n<ul>\n<li>\n<p>Excel cho phép bạn thêm ** thành phần biểu đồ <strong>—bao gồm ** tiêu đề biểu đồ </strong>,<strong> chú giải ** và ** nhãn dữ liệu </strong>—để giúp biểu đồ của bạn dễ đọc hơn. Để thêm thành phần biểu đồ, hãy nhấp vào lệnh ** Thêm thành phần biểu đồ ** trên tab ** Thiết kế **, sau đó chọn ** thành phần mong muốn ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Add Chart Element command from the Design tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_15-31-51.png\" /></p>\n</li>\n<li>\n<p>Để ** chỉnh sửa ** thành phần biểu đồ, chẳng hạn như ** tiêu đề biểu đồ **, chỉ cần nhấp đúp vào ** giữ chỗ ** và bắt đầu nhập.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Editing the chart title\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_15-39-48.png\" /></p>\n</li>\n<li>\n<p>Nếu không muốn thêm các thành phần biểu đồ riêng lẻ, bạn có thể sử dụng một trong các bố cục được xác định trước của Excel. Chỉ cần nhấp vào lệnh ** Bố cục nhanh **, sau đó chọn ** bố cục mong muốn ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the quick layout command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_15-43-47.png\" /></p>\n</li>\n<li>\n<p>Excel cũng bao gồm một số ** kiểu biểu đồ <strong>, cho phép bạn nhanh chóng sửa đổi giao diện của biểu đồ. Để thay đổi kiểu biểu đồ, hãy chọn ** kiểu mong muốn ** từ nhóm ** kiểu biểu đồ </strong>. Bạn cũng có thể nhấp vào mũi tên thả xuống ở bên phải để xem thêm kiểu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a chart style\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/charts_callout1.jpg\" /></p>\n</li>\n</ul>\n<p>Bạn cũng có thể sử dụng các nút phím tắt định dạng biểu đồ để nhanh chóng ** thêm các thành phần biểu đồ **, thay đổi ** kiểu biểu đồ ** và ** lọc ** dữ liệu biểu đồ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Chart formatting shortcut buttons\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chartformatting_callout.jpg\" /></p>\n<p>chỉnh sửa điểm nóng</p>\n<h3>Tùy chọn biểu đồ khác</h3>\n<p>Có nhiều cách khác để tùy chỉnh và sắp xếp biểu đồ của bạn. Ví dụ: Excel cho phép bạn ** sắp xếp lại ** dữ liệu của biểu đồ, thay đổi ** loại biểu đồ ** và thậm chí ** di chuyển ** biểu đồ đến một vị trí khác trong sổ làm việc.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để chuyển đổi dữ liệu hàng và cột:",
                        content: "<p>Đôi khi bạn có thể muốn thay đổi cách biểu đồ ** nhóm ** dữ liệu của mình. Ví dụ: trong biểu đồ bên dưới, dữ liệu Doanh số bán sách được nhóm ** theo thể loại <strong>, với các cột cho ** mỗi tháng </strong>. Tuy nhiên, chúng ta có thể chuyển đổi hàng và cột để biểu đồ sẽ nhóm dữ liệu ** theo tháng <strong>, với các cột cho ** mỗi thể loại </strong>. Trong cả hai trường hợp, biểu đồ đều chứa cùng một dữ liệu—chỉ là nó được sắp xếp khác nhau.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chart of book sales grouped by genre\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-07-49.png\" title=\"chart of book sales grouped by genre\" /></p>\n<ol>\n<li>Chọn ** biểu đồ ** bạn muốn sửa đổi.</li>\n<li>\n<p>Từ tab ** Thiết kế <strong>, chọn lệnh ** Chuyển hàng/Cột </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the Switch Column Row command \" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-04-43.png\" /></p>\n</li>\n<li>\n<p>Các hàng và cột sẽ được ** chuyển đổi **. Trong ví dụ của chúng tôi, dữ liệu hiện được nhóm theo tháng, với các cột cho từng thể loại.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"book sales grouped by month\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-01-18.png\" title=\"book sales grouped by month\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để thay đổi loại biểu đồ:",
                        content: "<p>Nếu bạn nhận thấy dữ liệu của mình không hoạt động tốt trong một biểu đồ nhất định, bạn có thể dễ dàng chuyển sang loại biểu đồ mới. Trong ví dụ của chúng tôi, chúng tôi sẽ thay đổi biểu đồ của mình từ biểu đồ cột thành biểu đồ đường.</p>\n<ol>\n<li>\n<p>Từ tab ** Thiết kế <strong>, hãy nhấp vào lệnh ** Thay đổi loại biểu đồ </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the Change Chart type command from the Design tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-11-49.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Thay đổi loại biểu đồ ** sẽ xuất hiện. Chọn biểu đồ mới ** loại ** và ** bố cục <strong>, sau đó nhấp vào ** OK </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn biểu đồ ** Line **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a line chart\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-14-19.png\" /></p>\n</li>\n<li>\n<p>Loại biểu đồ đã chọn sẽ xuất hiện. Trong ví dụ của chúng tôi, biểu đồ đường giúp dễ dàng xem xu hướng dữ liệu bán hàng theo thời gian.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Line chart\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-17-52.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để di chuyển biểu đồ:",
                        content: "<p>Bất cứ khi nào bạn chèn một biểu đồ mới, nó sẽ xuất hiện dưới dạng một đối tượng trên cùng một trang tính chứa dữ liệu nguồn của nó. Bạn có thể dễ dàng ** di chuyển ** biểu đồ sang ** trang tính mới ** để giúp sắp xếp dữ liệu của mình.</p>\n<ol>\n<li>Chọn ** biểu đồ ** bạn muốn di chuyển.</li>\n<li>\n<p>Nhấp vào tab ** Thiết kế <strong>, sau đó chọn lệnh ** Di chuyển biểu đồ </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting the move chart command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-20-29.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Di chuyển biểu đồ ** sẽ xuất hiện. Chọn ** vị trí mong muốn ** cho biểu đồ. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn di chuyển nó sang ** Trang tính mới **, trang tính này sẽ tạo một trang tính mới.</p>\n</li>\n<li>\n<p>Nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting OK button to close dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-25-06.png\" /></p>\n</li>\n<li>\n<p>Biểu đồ sẽ xuất hiện ở vị trí đã chọn. Trong ví dụ của chúng tôi, biểu đồ hiện xuất hiện trên một trang tính mới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a chart in a new worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/2015-11-05_16-29-05.png\" title=\"a chart in a new worksheet\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 8: Luôn cập nhật biểu đồ",
                        content: "<p>Theo mặc định, khi bạn thêm nhiều dữ liệu hơn vào bảng tính, biểu đồ có thể không bao gồm dữ liệu mới. Để khắc phục điều này, bạn có thể điều chỉnh ** phạm vi dữ liệu **. Chỉ cần nhấp vào biểu đồ và nó sẽ làm nổi bật phạm vi dữ liệu trong bảng tính của bạn. Sau đó, bạn có thể nhấp và kéo ** tay cầm ** ở góc dưới bên phải để thay đổi phạm vi dữ liệu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Screenshot of adjusting a data range\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/chart_range_update.png\" /></p>\n<p>Nếu bạn thường xuyên thêm nhiều dữ liệu hơn vào bảng tính của mình thì việc cập nhật phạm vi dữ liệu có thể trở nên tẻ nhạt. May mắn thay, có một cách dễ dàng hơn. Chỉ cần định dạng dữ liệu nguồn của bạn dưới dạng ** bảng <strong>, sau đó tạo ** biểu đồ dựa trên bảng đó </strong>. Khi bạn thêm nhiều dữ liệu bên dưới bảng, dữ liệu đó sẽ tự động được đưa vào cả bảng và biểu đồ, giúp mọi thứ nhất quán và cập nhật.</p>\n<p>Xem video bên dưới để tìm hiểu cách sử dụng bảng để cập nhật biểu đồ.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_charts_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Chọn các ô ** A1:E6 ** và chèn biểu đồ ** Cột cụm 2D **.</li>\n<li>Thay đổi ** tiêu đề biểu đồ ** thành ** Doanh số tháng 9 đến tháng 12 **.</li>\n<li>Sử dụng lệnh ** Chuyển hàng/cột <strong>. Bây giờ, các cột sẽ được nhóm theo tháng với màu khác nhau cho mỗi nhân viên bán hàng.\n6.</strong> Di chuyển ** biểu đồ sang ** trang tính mới **.</li>\n<li>Thay đổi ** loại biểu đồ ** thành ** dòng có điểm đánh dấu **.</li>\n<li>Sử dụng lệnh ** Bố cục nhanh ** để thay đổi bố cục của biểu đồ.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Charts Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-30_at_2.20.01_pm.png\" /></li>\n</ol>\n<p>/en/excel/định dạng có điều kiện/nội dung/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_24",
                sessionId: 68,
                title: "Bài 24: Định dạng có điều kiện",
                description: "Nội dung chi tiết cho bài Bài 24: Định dạng có điều kiện.",
                video: "https://www.youtube.com/embed/zfQ8uOBoIj8",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_conditionalformatting_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 24: Định dạng có điều kiện</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 24: Định dạng có điều kiện",
                        content: "<p>/en/excel/biểu đồ/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Giả sử bạn có một bảng tính có hàng nghìn hàng dữ liệu. Sẽ cực kỳ khó để nhìn thấy các mô hình và xu hướng chỉ từ việc kiểm tra thông tin thô. Tương tự như biểu đồ và biểu đồ thu nhỏ,** định dạng có điều kiện ** cung cấp cách trực quan hóa dữ liệu và làm cho bảng tính dễ hiểu hơn.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về định dạng có điều kiện trong Excel.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Hiểu định dạng có điều kiện",
                        content: "<p>Định dạng có điều kiện cho phép bạn tự động áp dụng định dạng—chẳng hạn như ** màu sắc <strong>,</strong> biểu tượng ** và ** thanh dữ liệu <strong>—cho một hoặc nhiều ô dựa trên ** ô ** ** giá trị </strong>. Để thực hiện việc này, bạn cần tạo một ** định dạng có điều kiện ** ** quy tắc <strong>. Ví dụ: quy tắc định dạng có điều kiện có thể là:</strong> Nếu giá trị nhỏ hơn $2000, hãy tô màu đỏ cho ô **. Bằng cách áp dụng quy tắc này, bạn có thể nhanh chóng xem ô nào chứa giá trị nhỏ hơn $2000.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Conditional Formatting in Excel\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_understanding.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để tạo quy tắc định dạng có điều kiện:",
                        content: "<p>Trong ví dụ của chúng tôi, chúng tôi có một bảng tính chứa dữ liệu bán hàng và chúng tôi muốn xem nhân viên bán hàng nào đang đáp ứng mục tiêu bán hàng hàng tháng của họ. Mục tiêu bán hàng là $4000 mỗi tháng, vì vậy chúng tôi sẽ tạo quy tắc định dạng có điều kiện cho bất kỳ ô nào chứa giá trị cao hơn 4000.</p>\n<ol>\n<li>\n<p>Chọn ** ô mong muốn ** cho quy tắc định dạng có điều kiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_create_select.png\" /></p>\n</li>\n<li>\n<p>Từ tab ** Trang chủ <strong>, hãy nhấp vào lệnh </strong>Định dạng có điều kiện **. Một menu thả xuống sẽ xuất hiện.</p>\n</li>\n<li>\n<p>Di chuột qua ** loại định dạng có điều kiện ** mong muốn, sau đó chọn ** quy tắc mong muốn ** từ trình đơn xuất hiện. Trong ví dụ của chúng tôi, chúng tôi muốn ** đánh dấu các ô ** có giá trị ** lớn hơn **$4000.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Conditional Formatting menu on the Home tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_create_menu.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện. Nhập **(các) \ngiá trị mong muốn ** vào trường trống. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập 4000 làm giá trị của mình.</p>\n</li>\n<li>\n<p>Chọn ** định dạng ** ** kiểu ** từ trình đơn thả xuống. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Tô màu xanh lục với văn bản màu xanh đậm <strong>, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Greater Than dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_create_dialog.png\" /></p>\n</li>\n<li>\n<p>Định dạng có điều kiện sẽ được áp dụng cho các ô đã chọn. Trong ví dụ của chúng tôi, thật dễ dàng để biết nhân viên bán hàng nào đã đạt được mục tiêu doanh số 4000 USD mỗi tháng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A conditional formatting rule is now applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_create_result.png\" /></p>\n</li>\n</ol>\n<p>Bạn có thể áp dụng nhiều quy tắc định dạng có điều kiện cho một phạm vi ô hoặc bảng tính, cho phép bạn trực quan hóa các xu hướng và mẫu khác nhau trong dữ liệu của mình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Multiple conditional formatting rules on the same area of a worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_create_multiple.png\" /></p>\n<h3>Cài đặt trước định dạng có điều kiện</h3>\n<p>Excel có một số kiểu được xác định trước—hoặc ** đặt trước **—bạn có thể sử dụng để nhanh chóng áp dụng định dạng có điều kiện cho dữ liệu của mình. Chúng được nhóm thành ba loại:</p>\n<ul>\n<li>\n<p>** Thanh dữ liệu ** là các thanh ngang được thêm vào mỗi ô, giống như ** biểu đồ thanh **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Data bars\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_data_bars.png\" /></p>\n</li>\n<li>\n<p>** Thang màu ** thay đổi màu của từng ô dựa trên giá trị của nó. Mỗi thang màu sử dụng ** chuyển màu hai hoặc ba màu <strong>. Ví dụ: trong thang màu ** Xanh-Vàng-Đỏ </strong>, giá trị ** cao nhất ** là màu xanh lá cây, giá trị ** trung bình ** là màu vàng và giá trị ** thấp nhất ** là màu đỏ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Color scales\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_color_scales.png\" /></p>\n</li>\n<li>\n<p>** Bộ biểu tượng ** thêm biểu tượng cụ thể vào từng ô dựa trên giá trị của nó.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Icon sets\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_icon_sets.png\" /></p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để sử dụng định dạng có điều kiện đặt trước:",
                        content: "<ol>\n<li>\n<p>Chọn ** ô mong muốn ** cho quy tắc định dạng có điều kiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Select cells\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_preset_select.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào lệnh <strong>Định dạng có điều kiện </strong>. Một menu thả xuống sẽ xuất hiện.</p>\n</li>\n<li>\n<p>Di chuột qua ** giá trị đặt trước mong muốn **, sau đó chọn ** kiểu đặt trước ** từ trình đơn xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The presets on the Conditional Formatting menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_preset_menu.png\" /></p>\n</li>\n<li>\n<p>Định dạng có điều kiện sẽ được áp dụng cho các ô đã chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The preset has been applied to the worksheet\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_preset_result.png\" /></p>\n</li>\n</ol>\n<h3>Loại bỏ định dạng có điều kiện</h3>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để loại bỏ định dạng có điều kiện:",
                        content: "<ol>\n<li>Nhấp vào lệnh <strong>Định dạng có điều kiện </strong>. Một menu thả xuống sẽ xuất hiện.</li>\n<li>\n<p>Di chuột qua ** Xóa quy tắc **, sau đó chọn quy tắc bạn muốn xóa. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Xóa quy tắc khỏi toàn bộ trang tính ** để xóa tất cả định dạng có điều kiện khỏi trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clear Rules on the Conditional Formatting menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_remove_menu.png\" /></p>\n</li>\n<li>\n<p>Định dạng có điều kiện sẽ bị loại bỏ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The conditional formatting has been removed\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_remove_result.png\" /></p>\n</li>\n</ol>\n<p>Nhấp vào ** Quản lý quy tắc ** để chỉnh sửa hoặc xóa các quy tắc ** riêng lẻ **. Điều này đặc biệt hữu ích nếu bạn đã áp dụng ** nhiều quy tắc ** cho một trang tính.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Conditional Formatting Rules Manager\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_remove_manager.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_conditionalformatting_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab bảng tính ** Thử thách ** ở phía dưới bên trái của bảng tính.</li>\n<li>Chọn ô ** B3:J17 **.</li>\n<li>Giả sử bạn là giáo viên và muốn dễ dàng xem tất cả các điểm dưới mức đạt. Áp dụng <strong>Định dạng có điều kiện ** sao cho nó </strong>Đánh dấu các ô ** chứa các giá trị ** Nhỏ hơn 70 ** với ** màu đỏ nhạt **.</li>\n<li>Bây giờ bạn muốn xem các điểm so sánh với nhau như thế nào. Trong tab <strong>Định dạng có điều kiện </strong>, chọn ** Bộ biểu tượng ** có tên là ** 3 Biểu tượng (Khoanh tròn)<strong>.</strong> Gợi ý **: Tên của các bộ biểu tượng sẽ xuất hiện khi bạn di chuột qua chúng.</li>\n<li>\n<p>Bảng tính của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"spreadsheet after completing Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/conditional_formatting_challenge.png\" title=\"spreadsheet after completing Challenge\" /></p>\n</li>\n<li>\n<p>Sử dụng tính năng Quản lý quy tắc, xóa ** màu đỏ nhạt ** nhưng vẫn giữ ** bộ biểu tượng **.</p>\n</li>\n</ol>\n<p>/en/excel/comments-and-coauthoring/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_25",
                sessionId: 68,
                title: "Bài 25: Comments và Đồng tác giả",
                description: "Nội dung chi tiết cho bài Bài 25: Comments và Đồng tác giả.",
                video: "https://www.youtube.com/embed/eK23Fzttlyo",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 25: bình luận và đồng tác giả</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 25: Bình luận và đồng tác giả",
                        content: "<p>/en/excel/định dạng có điều kiện/nội dung/</p>\n<h3>Giới thiệu</h3>\n<p>Có thể đôi khi bạn đang làm việc trên sổ làm việc và thấy rằng mình cần sự giúp đỡ của người khác. Excel cung cấp hai tính năng mạnh mẽ cho phép bạn làm việc với những người khác trên cùng một bảng tính:<strong> nhận xét ** và ** đồng tác giả </strong>.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về nhận xét và đồng tác giả.</p>\n<p>Tính năng ** Theo dõi các thay đổi ** cũng có thể hữu ích để xem lại các thay đổi trước khi biến chúng thành vĩnh viễn. Nó vẫn có sẵn trong Office 365 nhưng hiện tại ** bị ẩn theo mặc định **. Bạn có thể tìm hiểu thêm về Theo dõi các thay đổi trong bài học Excel 2016 của chúng tôi <a href=\"../../../excel2016/track-changes-and-comments/1/index.html\">tại đây</a>.</p>\n<h3>Chia sẻ sổ làm việc với người khác</h3>\n<p>Để những người khác cộng tác trên sổ làm việc, trước tiên bạn cần ** chia sẻ ** sổ làm việc đó với họ.</p>\n<ol>\n<li>\n<p>Nhấp vào nút ** Chia sẻ ** ở góc trên bên phải.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Share button in Microsoft Excel\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_share_button.png\" title=\"screenshot of the Share button in Microsoft Excel\" /></p>\n</li>\n<li>\n<p>Bấm vào tùy chọn ** OneDrive ** được liên kết với tài khoản của bạn để tải sổ làm việc lên.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of selecting the OneDrive option in the Share menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_share_onedrive.png\" title=\"screenshot of selecting the OneDrive option in the Share menu\" /></p>\n</li>\n<li>\n<p>Khung ** Chia sẻ ** sẽ xuất hiện ở bên phải màn hình. Nhập ** địa chỉ email ** của người mà bạn muốn chia sẻ sổ làm việc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of entering an email address in the Share pane \" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_share_email.png\" title=\"screenshot of entering an email address in the Share pane\" /></p>\n</li>\n<li>\n<p>Chọn ** Có thể chỉnh sửa ** từ menu thả xuống để cho phép người này chỉnh sửa sổ làm việc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of selecting &quot;Can edit&quot; from the drop-down menu in the Share menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_share_can_edit.png\" title=\"screenshot of selecting \\&quot;Can edit\\&quot; from the drop-down menu in the Share menu\" /></p>\n</li>\n<li>\n<p>Nhập tin nhắn nếu bạn muốn bao gồm một tin nhắn, sau đó nhấp vào ** Chia sẻ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking the Share button after typing a message\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_share_share.png\" title=\"screenshot of clicking the Share button after typing a message\" /></p>\n</li>\n<li>\n<p>Giờ đây, cộng tác viên của bạn sẽ có thể truy cập vào sổ làm việc.</p>\n</li>\n</ol>\n<h3>Bình luận</h3>\n<p>Một cách để cộng tác trên sổ làm việc là thông qua ** nhận xét <strong>. Đôi khi bạn có thể muốn cung cấp phản hồi hoặc đặt câu hỏi mà không cần chỉnh sửa nội dung của ô. Bạn có thể thực hiện việc này bằng cách ** thêm nhận xét </strong>.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để thêm nhận xét:",
                        content: "<ol>\n<li>\n<p>Chọn ** ô ** nơi bạn muốn bình luận xuất hiện. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** D17 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cell E8\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_comment_select.png\" /></p>\n</li>\n<li>\n<p>Từ tab <strong>Đánh giá </strong>, hãy nhấp vào lệnh ** Nhận xét mới **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the New Comment command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_comment_new.png\" /></p>\n</li>\n</ol>\n<p>3.** hộp bình luận ** sẽ xuất hiện. Nhập nhận xét của bạn, sau đó nhấp vào bất kỳ đâu bên ngoài hộp để đóng nhận xét.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Adding a comment\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_comment_type.png\" /></p>\n<ol>\n<li>\n<p>Nhận xét sẽ được thêm vào ô, được biểu thị bằng ** hình tam giác màu đỏ ** ở góc trên bên phải.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Comment indicator\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_comment_indicator_close.png\" /></p>\n</li>\n<li>\n<p>Chọn lại ô để xem nhận xét.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting a cell to view a comment\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_comment_view.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để chỉnh sửa một bình luận:",
                        content: "<ol>\n<li>Chọn ** ô ** chứa nhận xét bạn muốn chỉnh sửa.</li>\n<li>Từ tab <strong>Đánh giá </strong>, hãy nhấp vào lệnh ** Chỉnh sửa nhận xét **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Edit Comment command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_edit_click.png\" /></li>\n</ol>\n<p>3.** hộp bình luận ** sẽ xuất hiện. Chỉnh sửa nhận xét theo ý muốn, sau đó nhấp vào bất kỳ đâu bên ngoài hộp để đóng nhận xét.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Editing a comment\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_edit_type.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để hiển thị hoặc ẩn nhận xét:",
                        content: "<ol>\n<li>\n<p>Từ tab <strong>Đánh giá </strong>, hãy nhấp vào lệnh ** Hiển thị tất cả nhận xét ** để xem mọi nhận xét trong bảng tính của bạn cùng một lúc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Show All Comments command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_show_click.png\" /></p>\n</li>\n<li>\n<p>Tất cả các ý kiến ​​​​trong bảng tính sẽ xuất hiện. Nhấp lại vào lệnh ** Hiển thị tất cả nhận xét ** để ẩn chúng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Viewing all comments at the same time\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_show_comments.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể chọn hiển thị và ẩn từng nhận xét bằng cách chọn ô mong muốn và nhấp vào lệnh ** Hiển thị/Ẩn Nhận xét **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Showing and hiding individual comments\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_show_one.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để xóa một bình luận:",
                        content: "<ol>\n<li>\n<p>Chọn ** ô ** chứa nhận xét bạn muốn xóa. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** E13 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting cell E8\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_delete_select.png\" /></p>\n</li>\n<li>\n<p>Từ tab <strong>Đánh giá </strong>, hãy nhấp vào lệnh ** Xóa ** trong nhóm ** Nhận xét **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking the Delete command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_delete_click.png\" /></p>\n</li>\n<li>\n<p>Bình luận sẽ bị xóa.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"After deleting the comment\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/track_delete_deleted.png\" /></p>\n</li>\n</ol>\n<h3>Đồng tác giả</h3>\n<p>Một công cụ cộng tác khác là ** đồng tác giả **, cho phép người khác xem và chỉnh sửa sổ làm việc của bạn trong thời gian thực. Điều này giúp việc cộng tác trên sổ làm việc với nhóm của bạn trở nên dễ dàng và nhanh chóng hơn. Sau khi chia sẻ sổ làm việc với người khác, họ sẽ có thể đồng tác giả.</p>\n<p>Đồng tác giả theo thời gian thực yêu cầu ** đăng ký Office 365 **.</p>\n<p>Khi đồng tác giả một sổ làm việc, bạn có thể nhìn thấy những người khác đang làm việc vì mỗi người sẽ có ** màu sắc riêng **. Nếu bạn muốn biết ai hiện đang chỉnh sửa sổ làm việc, bạn có thể ** di chuột qua hoạt động ** để xem tên của họ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of hovering over a colored selection to see who is currently co-authoring a workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_coauthor_hover.png\" title=\"screenshot of hovering over a colored selection to see who is currently co-authoring a workbook\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Khôi phục phiên bản trước",
                        content: "<p>Khi bạn hoặc bất kỳ ai khác thực hiện các thay đổi đối với sổ làm việc, các thay đổi đó sẽ ** được lưu tự động <strong>. Tuy nhiên, nếu bạn không hài lòng với những thay đổi này, bạn luôn có thể ** khôi phục phiên bản trước </strong>.</p>\n<ol>\n<li>\n<p>Nhấp vào biểu tượng ** đồng hồ ** bên cạnh nút ** Chia sẻ **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking the clock icon to access the Version History menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_restore_clock.png\" title=\"screenshot of clicking the clock icon to access the Version History menu\" /></p>\n</li>\n<li>\n<p>Ngăn ** Lịch sử phiên bản ** sẽ xuất hiện ở bên phải màn hình. Nhấp đúp vào phiên bản bạn muốn khôi phục.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of selecting a previous version to restore\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_restore_version.png\" title=\"screenshot of selecting a previous version to restore\" /></p>\n</li>\n<li>\n<p>Khi bạn đã quyết định đây là phiên bản mình muốn, hãy nhấp vào ** Khôi phục **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking the Restore button to restore a previous version\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_restore_restore.png\" title=\"screenshot of clicking the Restore button to restore a previous version\" /></p>\n</li>\n<li>\n<p>Phiên bản trước đó sẽ được khôi phục.</p>\n</li>\n</ol>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_trackchangescomments_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Thêm ** bốn nhận xét ** vào bảng tính.\n3.** Xóa ** một trong các bình luận.</li>\n<li>Hiển thị tất cả nhận xét bằng cách sử dụng ** Hiển thị tất cả nhận xét **.</li>\n<li>\n<p>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of a worksheet with some comments added\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/comments_challenge.png\" title=\"screenshot of a worksheet with some comments added\" /></p>\n</li>\n<li>\n<p>Tùy chọn:** Chia sẻ ** tài liệu với người bạn biết và thử nghiệm một số ** tính năng đồng tác giả ** khác nhau.</p>\n</li>\n</ol>\n<p>/en/excel/inspecting-and-protecting-workbooks/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_26",
                sessionId: 68,
                title: "Bài 26: Kiểm tra và Bảo vệ Workbooks",
                description: "Nội dung chi tiết cho bài Bài 26: Kiểm tra và Bảo vệ Workbooks.",
                video: "https://www.youtube.com/embed/fsXS_VSuBvs",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 26: sổ làm việc kiểm tra và bảo vệ</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 26: Kiểm tra và bảo vệ Workbook",
                        content: "<p>/en/excel/comments-and-coauthoring/content/</p>\n<h3>Giới thiệu</h3>\n<p>Trước khi chia sẻ sổ làm việc, bạn cần đảm bảo rằng sổ làm việc đó không có bất kỳ lỗi chính tả hoặc thông tin nào bạn muốn giữ riêng tư. May mắn thay, Excel có một số công cụ giúp ** hoàn thiện ** và ** bảo vệ ** sổ làm việc của bạn, bao gồm tính năng ** Tài liệu ** ** Thanh tra ** và ** Bảo vệ sổ làm việc **.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách kiểm tra và bảo vệ sổ làm việc.</p>\n<h3>Người kiểm tra tài liệu</h3>\n<p>Bất cứ khi nào bạn tạo hoặc chỉnh sửa sổ làm việc, một số ** thông tin cá nhân ** nhất định có thể được tự động thêm vào tệp. Bạn có thể sử dụng Trình kiểm tra Tài liệu để xóa thông tin này trước khi chia sẻ sổ làm việc với người khác.</p>\n<p>Vì một số thay đổi có thể là vĩnh viễn nên bạn nên lưu bản sao bổ sung của sổ làm việc trước khi sử dụng Trình kiểm tra Tài liệu để xóa thông tin.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để sử dụng Trình kiểm tra Tài liệu:",
                        content: "<ol>\n<li>Nhấp vào tab ** Tệp ** để truy cập ** Backstage view **.</li>\n<li>\n<p>Từ ngăn ** Thông tin <strong>, hãy nhấp vào ** Kiểm tra sự cố </strong>, sau đó chọn ** Kiểm tra ** ** Tài liệu ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking Inspect Document\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_inspector_info.png\" /></p>\n</li>\n<li>\n<p>Bạn có thể được nhắc lưu tệp của mình trước khi chạy ** Trình kiểm tra tài liệu **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Document Inspector warning\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_inspector_warning.png\" title=\"Document Inspector warning\" /></p>\n</li>\n</ol>\n<p>4.<strong> Trình kiểm tra tài liệu ** sẽ xuất hiện. Chọn hoặc bỏ chọn các hộp, tùy thuộc vào nội dung bạn muốn xem lại, sau đó nhấp vào ** Kiểm tra </strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn mọi thứ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Inspecting the workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_inspector_inspect.png\" /></p>\n<p>5.** kết quả ** ** kiểm tra ** sẽ xuất hiện. Trong ví dụ của chúng tôi, chúng tôi có thể thấy rằng sổ làm việc của chúng tôi chứa các nhận xét và một số thông tin cá nhân, vì vậy chúng tôi sẽ nhấp vào ** Xóa Tất cả ** trên cả hai mục để xóa thông tin này khỏi sổ làm việc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Removing personal information from the workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_inspector_results.png\" /></p>\n<ol>\n<li>Khi bạn hoàn tất, hãy nhấp vào <strong>Đóng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Closing the Document Inspector\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_inspector_close2.png\" /></li>\n</ol>\n<h3>Bảo vệ sổ làm việc của bạn</h3>\n<p>Theo mặc định, bất kỳ ai có quyền truy cập vào sổ làm việc của bạn đều có thể mở, sao chép và chỉnh sửa nội dung của nó trừ khi bạn ** bảo vệ ** nó. Có một số cách để bảo vệ sổ làm việc, tùy thuộc vào nhu cầu của bạn.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để bảo vệ sổ làm việc của bạn:",
                        content: "<ol>\n<li>Nhấp vào tab ** Tệp ** để truy cập ** Backstage view **.</li>\n<li>Từ ngăn ** Thông tin <strong>, hãy nhấp vào lệnh ** Bảo vệ sổ làm việc </strong>.</li>\n<li>\n<p>Trong menu thả xuống, hãy chọn tùy chọn phù hợp nhất với nhu cầu của bạn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn <strong>Đánh dấu ** ** là Cuối cùng </strong>. Đánh dấu sổ làm việc của bạn là cuối cùng là một cách hay để ngăn cản người khác chỉnh sửa sổ làm việc, trong khi các tùy chọn khác thậm chí còn cung cấp cho bạn nhiều quyền kiểm soát hơn nếu cần.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Selecting Mark as Final\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_protect_info.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện, nhắc bạn lưu. Nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking OK to save the workbook\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_protect_save_dialog.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại khác sẽ xuất hiện. Nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Clicking OK\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_protect_message_dialog.png\" /></p>\n</li>\n<li>\n<p>Sổ làm việc sẽ được đánh dấu là cuối cùng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A workbook marked as final\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/inspecting_protect_final.png\" /></p>\n</li>\n</ol>\n<p>Việc đánh dấu sổ làm việc là cuối cùng sẽ không ngăn cản người khác chỉnh sửa sổ làm việc đó. Nếu bạn muốn ngăn mọi người chỉnh sửa nó, thay vào đó bạn có thể sử dụng tùy chọn ** Hạn chế truy cập **.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_inspectprotect_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Sử dụng ** Trình kiểm tra tài liệu ** để kiểm tra sổ làm việc và ** xóa ** mọi thứ nó tìm thấy.\n3.<strong> Bảo vệ ** sổ làm việc bằng cách </strong>Đánh dấu là cuối cùng **.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Inspecting and Protecting\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-30_at_1.09.16_pm.png\" /></li>\n</ol>\n<p>/en/excel/intro-to-pivottables/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_27",
                sessionId: 68,
                title: "Bài 27: Giới thiệu PivotTables",
                description: "Nội dung chi tiết cho bài Bài 27: Giới thiệu PivotTables.",
                video: "https://www.youtube.com/embed/N4K3xjM76kI",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 27: giới thiệu về bảng xoay vòng</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 27: Giới thiệu về PivotTable",
                        content: "<p>/en/excel/inspecting-and-protecting-workbooks/content/</p>\n<h3>Giới thiệu</h3>\n<p>Khi bạn có nhiều dữ liệu, đôi khi có thể khó phân tích tất cả thông tin trong bảng tính của bạn.** PivotTables ** có thể giúp làm cho bảng tính của bạn dễ quản lý hơn bằng cách ** tóm tắt ** dữ liệu và cho phép bạn ** thao tác ** dữ liệu theo nhiều cách khác nhau.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về PivotTable.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Sử dụng PivotTable để trả lời câu hỏi",
                        content: "<p>Hãy xem xét ví dụ dưới đây. Giả sử chúng ta muốn trả lời câu hỏi ** Số lượng bán được của mỗi nhân viên bán hàng là bao nhiêu?** Việc trả lời câu hỏi này có thể tốn thời gian và khó khăn; mỗi nhân viên bán hàng xuất hiện trên nhiều hàng và chúng tôi sẽ cần tính tổng tất cả các đơn hàng khác nhau của họ một cách riêng lẻ. Chúng ta có thể sử dụng lệnh ** Subtotal ** để giúp tìm tổng số cho mỗi nhân viên bán hàng, nhưng chúng ta vẫn sẽ có nhiều dữ liệu để làm việc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"worksheet of sales data\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_question_sheet.png\" /></p>\n<p>May mắn thay, PivotTable có thể ngay lập tức ** tính toán ** và ** tóm tắt ** dữ liệu theo cách giúp dữ liệu dễ đọc hơn nhiều. Khi chúng ta hoàn tất, PivotTable sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"sales total by salesperson\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_question_salesperson.png\" /></p>\n<p>Sau khi tạo PivotTable, bạn có thể sử dụng nó để trả lời các câu hỏi khác nhau bằng cách sắp xếp lại—hoặc ** xoay vòng <strong>—dữ liệu. Ví dụ: giả sử chúng tôi muốn trả lời ** Tổng số tiền bán được trong mỗi tháng là bao nhiêu?</strong> Chúng tôi có thể sửa đổi PivotTable của mình để trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"sales total by month\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_question_month.png\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để tạo PivotTable:",
                        content: "<ol>\n<li>\n<p>Chọn ** bảng ** hoặc ** ô **(bao gồm tiêu đề cột) \nmà bạn muốn đưa vào PivotTable của mình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting a table\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_cells.png\" /></p>\n</li>\n<li>\n<p>Từ tab ** Chèn <strong>, hãy nhấp vào lệnh ** PivotTable </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pivottable command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_command.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tạo PivotTable ** sẽ xuất hiện. Chọn cài đặt của bạn, sau đó nhấp vào ** OK <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng ** Bảng1 ** làm dữ liệu nguồn và đặt PivotTable vào ** trang tính mới </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pivottable dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_dialog.png\" /></p>\n</li>\n</ol>\n<p>4.** PivotTable ** và ** Danh sách trường ** trống sẽ xuất hiện trong trang tính mới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"blank pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_blank2.png\" /></p>\n<ol>\n<li>\n<p>Sau khi tạo PivotTable, bạn sẽ cần quyết định ** trường ** nào cần thêm. Mỗi trường chỉ đơn giản là một ** tiêu đề cột ** từ dữ liệu nguồn. Trong danh sách ** PivotTable ** ** Trường <strong>, hãy chọn hộp cho từng trường bạn muốn thêm. Trong ví dụ của chúng tôi, chúng tôi muốn biết tổng số ** số tiền ** được bán bởi mỗi ** nhân viên bán hàng </strong>, vì vậy chúng tôi sẽ kiểm tra các trường ** Salesperson ** và ** Order ** ** Amount **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting fields\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_fields.png\" /></p>\n</li>\n<li>\n<p>Các trường đã chọn sẽ được thêm vào một trong bốn khu vực bên dưới. Trong ví dụ của chúng tôi, trường ** Nhân viên bán hàng ** đã được thêm vào khu vực ** Hàng <strong>, trong khi ** Số tiền đặt hàng ** đã được thêm vào ** Giá trị </strong>. Bạn cũng có thể ** kéo ** ** và thả ** các trường trực tiếp vào khu vực mong muốn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"fields added to areas\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_drag.png\" /></p>\n</li>\n<li>\n<p>PivotTable sẽ tính toán và tóm tắt các trường đã chọn. Trong ví dụ của chúng tôi, PivotTable hiển thị ** số tiền mà mỗi nhân viên bán hàng ** đã bán.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"finished pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_table.png\" /></p>\n</li>\n</ol>\n<p>Cũng giống như bảng tính thông thường, bạn có thể sắp xếp dữ liệu trong PivotTable bằng lệnh ** Sắp xếp &amp; Lọc ** trên tab Trang chủ. Bạn cũng có thể áp dụng bất kỳ loại ** định dạng số ** nào bạn muốn. Ví dụ: bạn có thể muốn thay đổi định dạng số thành ** Tiền tệ **. Tuy nhiên, hãy lưu ý rằng một số loại định dạng có thể biến mất khi bạn sửa đổi PivotTable.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"sorted and formatted\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_create_formatting.png\" /></p>\n<p>Nếu bạn thay đổi bất kỳ dữ liệu nào trong trang tính nguồn của mình, PivotTable ** sẽ không tự động cập nhật <strong>. Để cập nhật thủ công, hãy chọn PivotTable rồi đi tới ** Phân tích &gt; Làm mới </strong>.</p>\n<h3>Xoay dữ liệu</h3>\n<p>Một trong những điều tuyệt vời nhất về PivotTable là chúng có thể nhanh chóng ** xoay vòng **—hoặc sắp xếp lại—dữ liệu của bạn, cho phép bạn kiểm tra trang tính của mình theo nhiều cách. Xoay dữ liệu có thể giúp bạn trả lời ** các câu hỏi khác nhau ** và thậm chí ** thử nghiệm ** dữ liệu của bạn để khám phá các xu hướng và mẫu mới.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để thêm cột:",
                        content: "<p>Cho đến nay, PivotTable của chúng tôi chỉ hiển thị ** một cột ** dữ liệu tại một thời điểm. Để hiển thị ** nhiều cột <strong>, bạn cần thêm một trường vào khu vực ** Cột </strong>.</p>\n<ol>\n<li>\n<p>Kéo một trường từ ** Danh sách trường ** vào khu vực ** Cột <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ sử dụng trường ** Tháng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adding a column\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_column_add2.png\" /></p>\n</li>\n<li>\n<p>PivotTable sẽ bao gồm nhiều cột. Trong ví dụ của chúng tôi, hiện có một cột cho ** doanh số hàng tháng ** của mỗi người, ngoài ** tổng cộng **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"finished pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_column_table.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để thay đổi một hàng hoặc cột:** Thay đổi",
                        content: "<p>** một hàng hoặc cột có thể mang lại cho bạn cái nhìn hoàn toàn khác về dữ liệu của mình. Tất cả những gì bạn phải làm là ** xóa ** trường được đề cập, sau đó ** thay thế ** trường đó bằng trường khác.</p>\n<ol>\n<li>\n<p>Kéo trường bạn muốn xóa ra khỏi ** khu vực hiện tại ** của nó. Bạn cũng có thể ** bỏ chọn ** hộp thích hợp trong ** Danh sách trường <strong>. Trong ví dụ này, chúng tôi đã xóa các trường ** Tháng ** và ** Nhân viên bán hàng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"removing fields\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_row_remove.png\" /></p>\n</li>\n<li>\n<p>Kéo ** trường mới ** vào ** vùng mong muốn <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ đặt trường ** Vùng ** bên dưới ** Hàng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dragging a field\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_row_add.png\" /></p>\n</li>\n<li>\n<p>PivotTable sẽ điều chỉnh—hoặc xoay—để hiển thị dữ liệu mới. Trong ví dụ của chúng tôi, nó hiện hiển thị ** số lượng bán theo từng khu vực **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"finished pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivot_row_table.png\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Để tìm hiểu thêm:",
                        content: "<p>Sau khi bạn cảm thấy thoải mái với PivotTable, hãy xem lại bài học <a href=\"../../doing-more-with-pivottables/1/index.html\">Làm nhiều hơn với PivotTable</a> \ncủa chúng tôi để biết thêm các cách tùy chỉnh và thao tác với dữ liệu.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_intropivottables_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Tạo ** PivotTable ** trong một trang tính riêng biệt.</li>\n<li>\n<p>Chúng tôi muốn trả lời câu hỏi ** Tổng số tiền bán được ở mỗi khu vực là bao nhiêu?<strong>Để thực hiện việc này, hãy chọn ** Khu vực ** và ** Số tiền đặt hàng </strong>. Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"PivotTable 1\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-27_at_9.54.09_am.png\" /></p>\n</li>\n<li>\n<p>Trong khu vực ** Hàng <strong>, hãy xóa ** Vùng ** và thay thế bằng ** Nhân viên bán hàng </strong>.</p>\n</li>\n<li>Thêm ** Tháng ** vào khu vực ** Cột **.</li>\n<li>Thay đổi định dạng số của các ô ** B5:E13 ** thành ** Tiền tệ <strong>.</strong> Lưu ý **: Bạn có thể phải mở rộng cột C và D để xem các giá trị.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Intro to PivotTables\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-12-01_at_9.09.34_am.png\" /></li>\n</ol>\n<p>/en/excel/doing-more-with-pivottables/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_28",
                sessionId: 68,
                title: "Bài 28: Nâng cao PivotTables",
                description: "Nội dung chi tiết cho bài Bài 28: Nâng cao PivotTables.",
                video: "https://www.youtube.com/embed/FVzX4I88DBs",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài học 28: làm được nhiều việc hơn với bảng xoay</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 28: Làm được nhiều việc hơn với PivotTable",
                        content: "<p>/en/excel/intro-to-pivottables/content/</p>\n<h3>Giới thiệu</h3>\n<p>Như bạn đã học trong <a href=\"../../intro-to-pivottables/1/index.html\">bài học trước</a> \ncủa chúng tôi, PivotTable có thể được sử dụng để tóm tắt và phân tích hầu hết mọi loại dữ liệu. Để thao tác với PivotTable—và hiểu rõ hơn nữa về dữ liệu của bạn—Excel cung cấp ba công cụ bổ sung:<strong> bộ lọc </strong>,<strong> s ** ** licers ** và ** PivotCharts </strong>.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách nâng cao PivotTable.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Bộ lọc",
                        content: "<p>Đôi khi bạn có thể muốn tập trung vào một phần dữ liệu nhất định của mình.** Bộ lọc ** có thể được sử dụng để ** thu hẹp ** dữ liệu trong PivotTable để bạn chỉ có thể xem thông tin mình cần.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để thêm bộ lọc:",
                        content: "<p>Trong ví dụ bên dưới, chúng tôi sẽ lọc ra ** nhân viên bán hàng ** nhất định để xác định doanh số bán hàng riêng lẻ của họ tác động như thế nào đến từng khu vực.</p>\n<ol>\n<li>Kéo một trường từ ** Danh sách trường ** vào khu vực ** Bộ lọc <strong>. Trong ví dụ này, chúng tôi sẽ sử dụng trường ** Nhân viên bán hàng </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"dragging a field\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_filters_field.png\" /></li>\n</ol>\n<p>2.<strong> bộ lọc ** sẽ xuất hiện phía trên PivotTable. Nhấp vào ** mũi tên thả xuống </strong>, sau đó chọn hộp bên cạnh ** Chọn nhiều mục **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"enabling select multiple items\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_filters_menu.png\" /></p>\n<p>3.<strong> Bỏ chọn ** hộp bên cạnh bất kỳ mục nào bạn không muốn đưa vào PivotTable. Trong ví dụ của chúng tôi, chúng tôi sẽ bỏ chọn các hộp dành cho một số nhân viên bán hàng, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"unchecking/deselecting items\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_filters_uncheck.png\" /></p>\n<ol>\n<li>PivotTable sẽ ** điều chỉnh ** để phản ánh những thay đổi.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"filtered pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_filters_table.png\" /></li>\n</ol>\n<h3>Máy thái</h3>\n<p>** Bộ cắt ** giúp việc lọc dữ liệu trong PivotTable trở nên dễ dàng hơn nữa. Bộ cắt về cơ bản chỉ là ** bộ lọc ** nhưng sử dụng dễ dàng hơn và nhanh hơn, cho phép bạn xoay vòng dữ liệu của mình ngay lập tức. Nếu bạn thường xuyên lọc PivotTable của mình, bạn có thể cân nhắc sử dụng bộ cắt thay vì bộ lọc.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Để thêm một slicer:",
                        content: "<ol>\n<li>Chọn ** bất kỳ ô nào ** trong PivotTable.</li>\n<li>\n<p>Từ tab ** Analyze <strong>, hãy nhấp vào lệnh ** Insert Slicer </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"insert slicer command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_slicers_command.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện. Đánh dấu vào ô bên cạnh ** trường ** mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ** Nhân viên bán hàng <strong>, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"field dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_slicers_field.png\" /></p>\n</li>\n<li>\n<p>Bộ cắt sẽ xuất hiện bên cạnh PivotTable. Mỗi mục đã chọn sẽ được đánh dấu bằng ** màu xanh **. Trong ví dụ bên dưới, bộ cắt chứa tất cả tám nhân viên bán hàng, nhưng hiện chỉ ** năm ** trong số họ được chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"slicer and pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_slicers_table.png\" /></p>\n</li>\n<li>\n<p>Cũng giống như các bộ lọc, chỉ các mục ** đã chọn ** mới được sử dụng trong PivotTable. Khi bạn ** chọn ** hoặc ** bỏ chọn ** một mục, PivotTable sẽ ngay lập tức phản ánh sự thay đổi. Hãy thử chọn các mục khác nhau để xem chúng ảnh hưởng như thế nào đến PivotTable. Nhấn và giữ phím ** Ctrl ** trên bàn phím để chọn ** nhiều ** mục cùng một lúc.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adjusting the pivottable\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_slicers_multi.png\" /></p>\n</li>\n</ol>\n<p>Bạn cũng có thể nhấp vào ** biểu tượng Bộ lọc ** ở góc trên bên phải của bộ cắt để chọn ** tất cả ** mục cùng một lúc.</p>\n<h3>Biểu đồ Pivot</h3>\n<p>** PivotCharts ** giống như các biểu đồ thông thường, ngoại trừ việc chúng hiển thị dữ liệu từ ** PivotTable <strong>. Giống như các biểu đồ thông thường, bạn sẽ có thể chọn ** loại biểu đồ </strong>,** bố cục ** và ** kiểu ** sẽ thể hiện dữ liệu tốt nhất.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Để tạo PivotChart:",
                        content: "<p>Trong ví dụ bên dưới, PivotTable của chúng tôi hiển thị một phần ** số liệu bán hàng ** của từng khu vực. Chúng tôi sẽ sử dụng PivotChart để có thể xem thông tin rõ ràng hơn.</p>\n<ol>\n<li>Chọn ** bất kỳ ô nào ** trong PivotTable của bạn.</li>\n<li>\n<p>Từ tab ** Chèn <strong>, hãy nhấp vào lệnh ** PivotChart </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pivotchart command\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_charts_command.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Chèn biểu đồ ** sẽ xuất hiện. Chọn ** loại biểu đồ ** và ** bố cục ** mong muốn, sau đó nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"chart dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_charts_dialog.png\" /></p>\n</li>\n<li>\n<p>PivotChart sẽ xuất hiện.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"pivottable, slicer, and pivotchart\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_charts_table.png\" /></p>\n</li>\n</ol>\n<p>Hãy thử sử dụng ** bộ lọc ** hoặc ** bộ cắt ** để thu hẹp dữ liệu trong PivotChart của bạn. Để xem các tập hợp thông tin con khác nhau, hãy thay đổi ** cột ** hoặc ** hàng ** trong PivotTable của bạn. Trong ví dụ bên dưới, chúng tôi đã thay đổi PivotTable để xem ** doanh số hàng tháng ** của mỗi nhân viên bán hàng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"adjusted pivotchart\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/pivotmore_charts_adjusted.png\" /></p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_morepivottables_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Trong khu vực ** Hàng <strong>, hãy xóa ** Vùng ** và thay thế bằng ** Nhân viên bán hàng </strong>.</li>\n<li>Chèn ** PivotChart ** và chọn loại ** Dòng có điểm đánh dấu **.</li>\n<li>Chèn ** slicer ** cho ** Vùng **.</li>\n<li>Sử dụng ** slicer ** để chỉ hiển thị các vùng ** Nam ** và <strong>Đông </strong>.</li>\n<li>Thay đổi loại ** PivotChart ** thành ** Cột xếp chồng **.</li>\n<li>Trong khung ** Trường PivotChart ** ở bên phải, hãy thêm ** Tháng ** vào khu vực ** Chú giải (Chuỗi)<strong>.</strong> Lưu ý **: Bạn cũng có thể bấm vào PivotTable và thêm ** Tháng ** vào khu vực ** Cột ** để có kết quả tương tự.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông giống như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"More PivotTables\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-12-01_at_9.16.10_am.png\" /></li>\n</ol>\n<p>/en/excel/whatif-analysis/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_29",
                sessionId: 68,
                title: "Bài 29: Phân tích What-If",
                description: "Nội dung chi tiết cho bài Bài 29: Phân tích What-If.",
                video: "https://www.youtube.com/embed/STTYxT6iFio",
                tasks: [
                    { name: "tài liệu thực hành", file: "Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_whatifanalysis_practice.xlsx" }
                ],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 29: phân tích whatif</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài học 29: Phân tích giả định",
                        content: "<p>/en/excel/doing-more-with-pivottables/content/</p>\n<h3>Giới thiệu</h3>\n<p>Excel bao gồm các công cụ mạnh mẽ để thực hiện các phép tính toán học phức tạp, bao gồm ** phân tích giả định <strong>. Tính năng này có thể giúp bạn ** thử nghiệm ** và ** trả lời câu hỏi ** với dữ liệu của bạn, ngay cả khi dữ liệu chưa đầy đủ. Trong bài học này, bạn sẽ học cách sử dụng công cụ phân tích giả định có tên ** Tìm kiếm mục tiêu </strong>.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về phân tích giả định và Tìm kiếm mục tiêu.</p>\n<h3>Tìm kiếm mục tiêu</h3>\n<p>Bất cứ khi nào bạn tạo một công thức hoặc hàm trong Excel, bạn sẽ ghép nhiều phần khác nhau lại với nhau để tính ** kết quả <strong>.</strong> Tìm kiếm mục tiêu ** hoạt động theo cách ngược lại: Nó cho phép bạn bắt đầu với ** kết quả mong muốn ** và tính toán ** giá trị đầu vào ** sẽ mang lại cho bạn kết quả đó. Chúng tôi sẽ sử dụng một số ví dụ để chỉ ra cách sử dụng Goal Seek.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để sử dụng Tìm kiếm mục tiêu (ví dụ 1)",
                        content: "<p>:</p>\n<p>Giả sử bạn đã đăng ký vào một lớp học. Bạn hiện có số điểm là 65 và bạn cần ít nhất 70 điểm để vượt qua lớp học. May mắn thay, bạn có một bài tập cuối cùng có thể giúp nâng cao điểm trung bình của bạn. Bạn có thể sử dụng Goal Seek để tìm hiểu ** bạn cần đạt điểm bao nhiêu trong bài tập cuối cùng ** để vượt qua lớp học.</p>\n<p>Trong hình ảnh bên dưới, bạn có thể thấy điểm của bốn bài tập đầu tiên là ** 58 <strong>,</strong> 70 <strong>,</strong> 72 ** và ** 60 <strong>. Mặc dù chúng ta không biết lớp năm sẽ như thế nào, nhưng chúng ta có thể viết một công thức—hoặc hàm—để tính điểm cuối cùng. Trong trường hợp này, mỗi bài tập đều có trọng số như nhau, vì vậy tất cả những gì chúng ta phải làm là tính trung bình cộng của cả năm điểm bằng cách nhập </strong>=AVERAGE(B2:B6)**. Khi chúng tôi sử dụng Tìm kiếm mục tiêu, ô ** B6 ** sẽ hiển thị cho chúng tôi điểm tối thiểu mà chúng tôi cần đạt được cho bài tập đó.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the average function being used to average the other class grades\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_grade_formula.png\" /></p>\n<ol>\n<li>\n<p>Chọn ô có giá trị bạn muốn thay đổi. Bất cứ khi nào bạn sử dụng Goal Seek, bạn sẽ cần chọn một ô đã chứa ** công thức ** hoặc ** hàm <strong>. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** B7 ** vì nó chứa công thức </strong>=AVERAGE(B2:B6)**.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell B7\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_grade_start.png\" /></p>\n</li>\n<li>\n<p>Từ tab ** Dữ liệu <strong>, hãy nhấp vào lệnh ** What-If ** ** Analysis </strong>, sau đó chọn ** Tìm kiếm mục tiêu ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Goal Seek option from the What-if Analysis command drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_grade_command.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện với ba trường. Trường đầu tiên,<strong>Đặt ô:</strong>, sẽ chứa kết quả mong muốn. Trong ví dụ của chúng tôi, ô ** B7 ** đã được chọn.</p>\n</li>\n</ol>\n<p>Trường thứ hai,<strong> To value:</strong>, là kết quả mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** 70 ** vì chúng tôi cần kiếm được ít nhất số tiền đó để vượt qua lớp học.</p>\n<p>Trường thứ ba,** B **</p>\n<ul>\n<li>** y ô thay đổi:**, là ô nơi Goal Seek sẽ đặt câu trả lời. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** B6 ** vì chúng tôi muốn xác định điểm chúng tôi cần đạt được trong bài tập cuối cùng.</li>\n<li>\n<p>Khi bạn hoàn tất, hãy nhấp vào ** OK.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"đặt tham số trong hộp thoại tìm kiếm mục tiêu\" src=\"image/whatif_grade_dialog.png\" /><strong> 5. Hộp thoại sẽ cho bạn biết liệu Goal Seek có thể tìm ra giải pháp hay không. Nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a successful result in the goal seek dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_grade_solution.png\" /></p>\n</li>\n<li>\n<p>Kết quả sẽ xuất hiện trong ô được chỉ định. Trong ví dụ của chúng tôi, Goal Seek đã tính toán rằng chúng tôi sẽ cần đạt ít nhất 90 điểm trong bài tập cuối cùng để đạt điểm đậu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the value in cell B6 (90) \ndetermined by goal \" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_grade_done.png\" /></p>\n</li>\n</ul>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Để sử dụng Goal Seek (ví dụ 2)",
                        content: "<p>:</p>\n<p>Giả sử bạn đang lên kế hoạch cho một sự kiện và muốn mời càng nhiều người càng tốt mà không vượt quá ngân sách 500 USD. Chúng ta có thể sử dụng Goal Seek để tìm ra số lượng người cần mời. Trong ví dụ bên dưới của chúng tôi, ô ** B5 ** chứa công thức **=B2+B3*B4 ** để tính tổng chi phí đặt phòng, cộng với chi phí cho mỗi người.</p>\n<ol>\n<li>\n<p>Chọn ô có giá trị bạn muốn thay đổi. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** B5 **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"selecting cell B5\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_budget_start.png\" /></p>\n</li>\n<li>\n<p>Từ tab ** Dữ liệu <strong>, hãy nhấp vào lệnh ** What-If ** ** Analysis </strong>, sau đó chọn ** Tìm kiếm mục tiêu ** từ trình đơn thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Goal Seek option from the What-if Analysis command drop-down menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_grade_command.png\" /></p>\n</li>\n<li>\n<p>Một hộp thoại sẽ xuất hiện với ba trường. Trường đầu tiên,<strong>Đặt ô:</strong>, sẽ chứa kết quả mong muốn. Trong ví dụ của chúng tôi, ô ** B5 ** đã được chọn. Trường thứ hai,<strong>Để giá trị:</strong>, là kết quả mong muốn. Trong ví dụ của chúng tôi, chúng tôi sẽ nhập ** 500 ** vì chúng tôi chỉ muốn chi 500 đô la.</p>\n</li>\n</ol>\n<p>Trường thứ ba,<strong> Bằng cách thay đổi ô:</strong>, là ô nơi Goal Seek sẽ đặt câu trả lời. Trong ví dụ của chúng tôi, chúng tôi sẽ chọn ô ** B4 ** vì chúng tôi muốn biết mình có thể mời bao nhiêu khách mà không phải chi quá 500 USD.\n4. Khi bạn hoàn tất, hãy nhấp vào ** OK **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"setting parameters in the goal seek dialog box\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_budget_dialog.png\" /></p>\n<ol>\n<li>Hộp thoại sẽ cho bạn biết liệu Goal Seek có thể tìm ra giải pháp hay không. Nhấp vào ** OK **.</li>\n<li>Kết quả sẽ xuất hiện trong ô được chỉ định. Trong ví dụ của chúng tôi, Goal Seek đã tính toán câu trả lời là khoảng 18,62. Trong trường hợp này, câu trả lời cuối cùng của chúng ta cần phải là một số nguyên, vì vậy chúng ta sẽ cần làm tròn câu trả lời lên hoặc xuống. Vì việc làm tròn số sẽ khiến chúng tôi vượt quá ngân sách nên chúng tôi sẽ ** làm tròn ** thành 18 khách.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"the value in cell B4 (18) \ndetermined by Goal Seek\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_budget_done.png\" /></li>\n</ol>\n<p>Như bạn có thể thấy trong ví dụ trên, một số tình huống sẽ yêu cầu đáp án là số nguyên. Nếu Goal Seek cung cấp cho bạn số thập phân, bạn sẽ cần ** làm tròn lên hoặc xuống **, tùy thuộc vào tình huống.</p>\n<h3>Các loại phân tích what-if khác</h3>\n<p>Đối với các dự án nâng cao hơn, bạn có thể muốn xem xét các loại phân tích giả định khác:<strong> kịch bản ** và ** bảng dữ liệu </strong>. Thay vì bắt đầu từ kết quả mong muốn và làm việc ngược lại, như với Goal Seek, các tùy chọn này cho phép bạn kiểm tra nhiều giá trị và xem kết quả thay đổi như thế nào.</p>\n<ul>\n<li>** Kịch bản ** cho phép bạn thay thế các giá trị cho ** nhiều ô **(tối đa 32) \ncùng một lúc. Bạn có thể tạo bao nhiêu kịch bản tùy thích rồi so sánh chúng mà không cần thay đổi giá trị theo cách thủ công. Trong ví dụ bên dưới, chúng tôi đang sử dụng các tình huống để so sánh các địa điểm khác nhau cho sự kiện sắp tới.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using the Scenarios Manager\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_scenario.png\" /></li>\n</ul>\n<p>Để biết thêm thông tin về các kịch bản, hãy đọc <a href=\"../../../not-offline.html?url=https:/support.microsoft.com/en-us/office/switch-between-various-sets-of-values-by-USE-scenarios-20 68afb1-ecdf-4956-9822-19ec479f55a2?ocmsassetid=hp010072669&amp;ctt=1&amp;correlationid=5c034d22-eb63-470d-9feb-b40a0c7c2f0e&amp;ui=en-us&amp;rs=en-us&amp;ad=us\">this bài viết</a> \ntừ Microsoft.</p>\n<ul>\n<li>** Bảng dữ liệu ** cho phép bạn lấy một hoặc hai biến trong công thức và thay thế chúng bằng ** bao nhiêu giá trị khác nhau tùy thích **, sau đó xem kết quả trong bảng. Tùy chọn này đặc biệt mạnh mẽ vì nó hiển thị ** nhiều kết quả ** cùng một lúc, không giống như các tình huống hoặc Tìm kiếm mục tiêu. Trong ví dụ dưới đây, chúng ta có thể xem 24 kết quả có thể xảy ra đối với khoản vay mua ô tô.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"using a data table\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/whatif_datatable.png\" /></li>\n</ul>\n<p>Để biết thêm thông tin về bảng dữ liệu, hãy đọc <a href=\"../../../not-offline.html?url=https:/support.microsoft.com/en-us/office/calcate-multiple-results-by-USE-a-data-table-e95e24 87-6ca6-4413-ad12-77542a5ea50b?ocmsassetid=hp010342214&amp;ctt=1&amp;correlationid=6fb69dd1-4b01-4468-aae3-44e4669379d4&amp;ui=en-us&amp;rs=en-us&amp;ad=us\">this bài viết</a> \ntừ Microsoft.</p>\n<h3>Thử thách!</h3>\n<ol>\n<li>Mở <a href=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/practice_files/excel_whatifanalysis_practice.xlsx\">sổ làm việc thực hành</a> \ncủa chúng tôi.</li>\n<li>Nhấp vào tab ** Thử thách ** ở phía dưới bên trái của sổ làm việc.</li>\n<li>Trong ô ** B8 <strong>, hãy tạo một ** hàm ** tính ** trung bình ** của doanh số bán hàng trong ** B2:B7 </strong>.</li>\n<li>Sổ làm việc cho thấy số tiền bán hàng hàng tháng của Dave trong nửa đầu năm. Nếu anh ta đạt mức trung bình 200.000 USD vào giữa năm, anh ta sẽ nhận được 5% tiền thưởng. Sử dụng ** Tìm kiếm mục tiêu ** để biết anh ấy cần bán bao nhiêu trong tháng 6 để kiếm được mức trung bình 200.000 USD.</li>\n<li>Khi bạn hoàn tất, sổ làm việc của bạn sẽ trông như thế này:<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Goal Seek Challenge\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/screen_shot_2015-11-25_at_10.36.18_am.png\" /></li>\n</ol>\n<p>/en/excel/what-is-office-365/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_30",
                sessionId: 68,
                title: "Bài 30: Office 365 là gì?",
                description: "Nội dung chi tiết cho bài Bài 30: Office 365 là gì?.",
                video: "https://www.youtube.com/embed/LKLnpVmwifc",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 30: office-365 là gì</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 30: Office 365 là gì?",
                        content: "<p>/en/excel/whatif-analysis/content/</p>\n<h3>Văn phòng 365 là gì?</h3>\n<p>Office 365 là ** phiên bản dựa trên đăng ký ** của Microsoft Office Suite và bạn có một số tùy chọn khi mua tài khoản. Một là ** Office 365 Personal <strong>, cung cấp cho một người dùng quyền truy cập đầy đủ vào mọi ứng dụng Office. Một cái khác là ** Office 365 Home </strong>, được thiết kế cho các gia đình có nhiều người sẽ sử dụng Office.</p>\n<p>Xem video bên dưới để biết thêm về những gì Office 365 cung cấp.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Tính năng độc quyền",
                        content: "<p>Có rất nhiều điểm tương đồng giữa các chương trình Office 365 và Microsoft Office Suite truyền thống, vì vậy trải nghiệm tổng thể sẽ có cảm giác quen thuộc nếu bạn đã sử dụng Office trước đây.</p>\n<p>Tuy nhiên, Office 365 cung cấp một số lợi ích mà Microsoft Office Suite không có. Ví dụ: đăng ký Office 365 cấp cho bạn quyền truy cập vào ** nhiều tính năng hơn <strong>, bao gồm Trình dịch, Trợ lý Sơ yếu lý lịch và Tra cứu Thông minh. Bạn cũng có thể cộng tác với những người khác trong Excel thông qua tính năng đồng tác giả, tính năng này cho phép người khác chỉnh sửa sổ làm việc của bạn trong thời gian thực.</strong>Ứng dụng Office dành cho thiết bị di động ** cũng có nhiều tính năng hơn khi bạn đăng ký. Ví dụ: bạn có thể thực hiện những việc như chèn dấu ngắt trang, sử dụng nhiều màu hơn hoặc tạo PivotTable bằng ứng dụng Excel dành cho thiết bị di động. Tuy nhiên, phiên bản miễn phí của ứng dụng dành cho thiết bị di động chỉ cho phép bạn thực hiện các tác vụ cơ bản, như tạo tệp và nhập văn bản.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A confirmation screen for an Office 365 subscription.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/what_is_office365_all_set_24.png\" title=\"A confirmation screen for an Office 365 subscription.\" /></p>\n<p>Office 365 cũng bao gồm các lợi ích khác, chẳng hạn như có thêm dung lượng lưu trữ tệp trong OneDrive và hỗ trợ kỹ thuật.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: SharePoint và cập nhật phần mềm",
                        content: "<p>Một lợi thế khác biệt khi sử dụng Office 365, đặc biệt dành cho doanh nghiệp, là quyền truy cập vào ** SharePoint Online **. Đây là dịch vụ có trong một số phiên bản Office 365, cho phép bạn chia sẻ và cộng tác với người khác, cho dù họ là đồng nghiệp hay khách hàng. Vì tài liệu nằm trên đám mây nên quyền bảo mật có thể được thiết lập để cho phép bất kỳ ai trong tổ chức, bất kể vị trí của họ, đều có thể xem tài liệu.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A SharePoint page for a group called Team Site.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/what_is_office365_sharepoint_24.png\" title=\"A SharePoint page for a group called Team Site.\" /></p>\n<p>Người đăng ký Office 365 cũng nhận được ** cập nhật phần mềm thường xuyên hơn ** so với những người đã mua Office mà không đăng ký. Điều này có nghĩa là người đăng ký Office 365 có quyền truy cập vào các tính năng, bản cập nhật bảo mật và bản sửa lỗi mới nhất.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"An Office pop-up window that reads &quot;You're up to date!&quot;\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/what_is_office365_updated_24.png\" title=\"An Office pop-up window that reads \\&quot;You're up to date!\\&quot;\" /></p>\n<p>/en/excel/new-features-in-office-2019/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_31",
                sessionId: 68,
                title: "Bài 31: Tính năng mới trong Office 2019",
                description: "Nội dung chi tiết cho bài Bài 31: Tính năng mới trong Office 2019.",
                video: "https://www.youtube.com/embed/ndaD7GLITmA",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 31: tính năng mới trong văn phòng-2019</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 31: Tính năng mới trong Office 2019",
                        content: "<p>/en/excel/what-is-office-365/content/</p>\n<h3>Các tính năng mới trong Office 2019</h3>\n<p>Office 2019 được phát hành vào tháng 9 năm 2018. Nếu bạn đã sử dụng Office 2016 hoặc các phiên bản cũ hơn, có thể bạn sẽ thấy Office 2019 quen thuộc. Giao diện tương tự và hầu hết các tính năng vẫn hoạt động như cũ. Tuy nhiên, có một số cải tiến được thiết kế để giúp Office 2019 mạnh mẽ hơn và dễ sử dụng hơn.</p>\n<p>Office 2019 chỉ khả dụng cho các máy tính chạy ** Windows 10 ** hoặc một trong ** ba phiên bản macOS mới nhất **.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về những cải tiến và tính năng mới của Office 2019.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Cập nhật trực quan",
                        content: "<p>Office 2019 đi kèm với một số tính năng mới giúp tùy chỉnh hình ảnh cho dự án của bạn. Có một thư viện đồ họa mới có tên ** Biểu tượng ** mà bạn có thể sử dụng và tùy chỉnh theo cách bạn muốn. Bạn cũng có thể biến bản vẽ của mình thành các hình dạng tiêu chuẩn bằng cách sử dụng chức năng ** Ink to Shape ** và chèn ** mô hình 3D tương tác ** vào dự án của mình.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of a 3D model being using in Office 2019\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new_3D_models.jpg\" title=\"screenshot of a 3D model being using in Office 2019\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Từ",
                        content: "<p>Word có một tính năng mới tên là ** Công cụ Học tập ** có thể giúp văn bản dễ đọc hơn mà không cần thực hiện các thay đổi vĩnh viễn đối với tài liệu của bạn. Bạn có thể thay đổi khoảng cách văn bản, màu trang hoặc thậm chí để Word đọc to văn bản của bạn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of Word 2019's Learning Tools function in use\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new_learning_tools.png\" title=\"screenshot of Word 2019's Learning Tools function in use\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: PowerPoint",
                        content: "<p>PowerPoint bao gồm chuyển tiếp ** Biến đổi ** mới cho phép bạn tạo hiệu ứng động cho các đối tượng giữa các trang chiếu trong một khoảng thời gian ngắn. Nếu bạn muốn lưu bản trình bày của mình dưới dạng tệp video thì giờ đây PowerPoint cũng cung cấp cho bạn khả năng xuất bản trình bày của mình ở ** độ phân giải 4K **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of exporting a presentation as a 4K video\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new_4K.png\" title=\"screenshot of exporting a presentation as a 4K video\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Excel",
                        content: "<p>Có một số loại biểu đồ mới trong Excel:<strong> biểu đồ bản đồ ** và ** biểu đồ kênh </strong>. Ngoài ra còn có một tính năng được gọi là ** lựa chọn chính xác **, cho phép bạn bỏ chọn từng ô sau khi đã đánh dấu chúng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of precision selection being using in Excel 2019\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/new_precision_selection.png\" title=\"screenshot of precision selection being using in Excel 2019\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Office 2019 so với Office 365",
                        content: "<p>Điều quan trọng cần lưu ý là Office 2019 ** không có nhiều tính năng mới như Office 365 **. Nếu quan tâm đến các bản cập nhật năng động hơn, bạn có thể muốn xem xét Office 365 dựa trên đăng ký thay thế.</p>\n<p>Nhiều thay đổi và cải tiến trong Office 2019 tuy nhỏ nhưng có thể giúp tăng năng suất và khả năng sử dụng dễ dàng trong một số trường hợp nhất định.</p>\n<p>/en/excel/what-are-reference-styles/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_32",
                sessionId: 68,
                title: "Bài 32: Reference Styles là gì?",
                description: "Nội dung chi tiết cho bài Bài 32: Reference Styles là gì?.",
                video: "https://www.youtube.com/embed/L4TPfHitbKI",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 32: kiểu tham chiếu là gì</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 32: Kiểu tham chiếu là gì?",
                        content: "<p>/en/excel/new-features-in-office-2019/content/</p>\n<h3>Phong cách tham khảo là gì?</h3>\n<p>Mỗi bảng tính Excel đều chứa ** hàng ** và ** cột <strong>. Thông thường, các cột được xác định bằng ** chữ cái ** </strong>(A, B, C)<strong> và các hàng được xác định bằng ** số (1, 2, 3)</strong>. Trong Excel, đây được gọi là kiểu ** A1 ** ** tham chiếu ** <strong>. Tuy nhiên, một số người thích sử dụng một phương pháp khác trong đó các cột cũng được xác định bằng số. Đây được gọi là ** kiểu tham chiếu R1C1 ** </strong>.</p>\n<p>Trong ví dụ bên dưới, hình ảnh bên trái có ** số ** trên mỗi cột, nghĩa là nó đang sử dụng kiểu tham chiếu ** R1C1 <strong>. Hình ảnh bên phải đang sử dụng kiểu tham chiếu ** A1 </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"R1C1 vs A1 reference style comparison\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/r1c1_compare2016.png\" title=\"R1C1 vs A1 reference style comparison\" /></p>\n<p>Mặc dù kiểu tham chiếu R1C1 hữu ích trong một số trường hợp nhất định nhưng có thể bạn sẽ muốn sử dụng kiểu tham chiếu A1 trong hầu hết thời gian. Hướng dẫn này sẽ sử dụng kiểu tham chiếu A1. Nếu hiện đang sử dụng kiểu tham chiếu R1C1, bạn cần ** tắt nó **.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Để tắt kiểu tham chiếu R1C1:",
                        content: "<ol>\n<li>\n<p>Nhấp vào tab ** Tệp ** để truy cập ** Backstage view **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Click File on the Ribbon to go to the Backstage view.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/getting_started_backstage_file.png\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** Tùy chọn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"Screenshot of Excel 2013\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/save_default_options.png\" /></p>\n</li>\n<li>\n<p>Hộp thoại ** Tùy chọn Excel ** sẽ xuất hiện. Nhấp vào ** Công thức ** ở bên trái hộp thoại.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"navigating to Formulas settings\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/formula_options.png\" title=\"navigating to Formulas settings\" /></p>\n</li>\n<li>\n<p>Bỏ chọn hộp bên cạnh ** kiểu tham chiếu R1C1 <strong>, sau đó nhấp vào ** OK </strong>. Excel bây giờ sẽ sử dụng kiểu tham chiếu A1.</p>\n</li>\n</ol>\n<p>/en/excel/office-intelligent-services/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_33",
                sessionId: 68,
                title: "Bài 33: Dịch vụ thông minh Office",
                description: "Nội dung chi tiết cho bài Bài 33: Dịch vụ thông minh Office.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 33: Dịch vụ văn phòng thông minh</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 33: Dịch vụ thông minh văn phòng",
                        content: "<p>/en/excel/what-are-reference-styles/content/</p>\n<h3>Dịch vụ văn phòng thông minh</h3>\n<p>Microsoft Office chứa nhiều tính năng hữu ích, bao gồm trình dịch ngôn ngữ và PowerPoint Designer. Tuy nhiên, khi bạn cố gắng sử dụng những tính năng này, lời nhắc có thể yêu cầu bạn kích hoạt Dịch vụ thông minh trước tiên. Mặc dù đây có vẻ là một quyết định dễ dàng nhưng bạn nên cân nhắc những gì bạn đồng ý khi quyết định bật Dịch vụ thông minh.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A prompt to activate Office Intelligent Services.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/ois_prompt_crop.png\" title=\"A prompt to activate Office Intelligent Services.\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Dịch vụ thông minh là gì?** Dịch vụ thông minh",
                        content: "<p>** hỗ trợ một số tính năng nâng cao trên đám mây trong toàn bộ Office. Tuy nhiên, để các tính năng này hoạt động, Microsoft phải ** thu thập và phân tích nội dung tài liệu của bạn **. Ngoài ra, nó sẽ thu thập dữ liệu về cách bạn sử dụng Office.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Bạn có nên sử dụng Dịch vụ thông minh?",
                        content: "<p>Trước khi quyết định có bật Dịch vụ thông minh hay không, trước tiên bạn nên biết Microsoft sẽ làm gì với dữ liệu mà hãng thu thập. Theo <a href=\"../../../not-offline.html?url=https:/privacy.microsoft.com/en-us/privacystatement\">tuyên bố về quyền riêng tư</a>, nó sử dụng dữ liệu được thu thập cho những việc như phát triển sản phẩm, nghiên cứu và quảng cáo có mục tiêu.</p>\n<p>Trước khi kích hoạt Dịch vụ thông minh, hãy tự hỏi liệu bạn có thấy thoải mái khi Microsoft có quyền truy cập vào công việc của bạn không. Nếu lo ngại về việc công ty thu thập dữ liệu của bạn hoặc xem tài liệu bí mật, bạn có thể không muốn sử dụng bất kỳ tính năng dựa trên Dịch vụ thông minh nào.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Kích hoạt dịch vụ thông minh",
                        content: "<p>Theo mặc định, Dịch vụ thông minh ** tắt ** và bạn có hai cách để kích hoạt dịch vụ này.</p>\n<p>Phương pháp nhanh nhất là chọn tính năng dựa trên Dịch vụ thông minh, chẳng hạn như Dịch. Một lời nhắc sẽ xuất hiện yêu cầu bạn bật Dịch vụ thông minh. Chỉ cần nhấp vào ** Bật ** để kích hoạt nó.</p>\n<p>Phương pháp khác bao gồm một vài bước nữa.</p>\n<ol>\n<li>\n<p>Nhấp vào tab ** Tệp ** trong Word, Excel, PowerPoint hoặc Outlook.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A cursor clicking on the File tab.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/ois_list_1.png\" title=\"A cursor clicking on the File tab.\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** Tùy chọn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A cursor clicking on the Options tab in the Backstage View.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/ois_list_2.png\" title=\"A cursor clicking on the Options tab in the Backstage View.\" /></p>\n</li>\n<li>\n<p>Nhấp vào hộp kiểm có nhãn ** Bật dịch vụ <strong>, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"A cursor clicking on a checkbox that enables Office Intelligent Services.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/ois_list_3.jpg\" title=\"A cursor clicking on a checkbox that enables Office Intelligent Services.\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 6: Tính năng nổi bật",
                        content: "<p>** PowerPoint Designer ** có thể phân tích hình ảnh, danh sách và văn bản trong bản trình bày của bạn để tạo các trang trình bày trông chuyên nghiệp và nó sử dụng Dịch vụ thông minh để cung cấp cho bạn các đề xuất được cá nhân hóa hơn.</p>\n<p>Để sử dụng tính năng này, hãy chọn tab ** Thiết kế <strong>, sau đó nhấp vào </strong>Ý tưởng thiết kế ** ở bên phải. Khi bạn thêm các thành phần vào slide của mình, tính năng này sẽ cập nhật những ý tưởng mới. Nó thậm chí còn cung cấp cho bạn các đề xuất nếu bạn có một bản trình bày hoàn toàn trống.</p>\n<p>Tuy nhiên, hãy nhớ rằng PowerPoint Designer ** dành riêng cho những người đăng ký Office 365 <strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Design Ideas feature showing various layout options in PowerPoint.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/design_ideas.jpg\" title=\"The Design Ideas feature showing various layout options in PowerPoint.\" /></strong> Tra cứu thông minh ** cho phép bạn tiến hành tìm kiếm trực tuyến một từ hoặc cụm từ trong Word, Excel hoặc PowerPoint. Để sử dụng nó, hãy bấm chuột phải vào một thuật ngữ, sau đó chọn Tra cứu thông minh. Một cửa sổ sẽ xuất hiện ở bên phải, cung cấp cho bạn kết quả tìm kiếm và định nghĩa phù hợp nhất.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Smart Lookup feature showing search results for the word 'symposium'.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/smart_lookup.jpg\" title=\"The Smart Lookup feature showing search results for the word 'symposium'.\" /></p>\n<p>Để sử dụng ** Dịch **, chỉ cần nhấp chuột phải vào một từ hoặc cụm từ, sau đó chọn Dịch. Sau đó, bạn có thể dịch lựa chọn của mình sang hàng chục ngôn ngữ.</p>\n<p>Hãy nhớ rằng tính năng này không hoàn hảo, vì vậy đừng ngạc nhiên nếu kết quả không hoàn toàn chính xác.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"The Translator feature translating the German word for &quot;excuse me&quot; into English.\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/translator.jpg\" title=\"The Translator feature translating the German word for \\&quot;excuse me\\&quot; into English.\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 7: Văn phòng 365",
                        content: "<p>Cần lưu ý rằng một số tính năng dựa trên Dịch vụ thông minh, như PowerPoint Designer, chỉ hoạt động với đăng ký Office 365.\nMicrosoft cũng có kế hoạch bổ sung thêm nhiều tính năng dựa trên Dịch vụ Thông minh cho Office 365 trong tương lai. Các tính năng sắp tới bao gồm <strong>Ý tưởng trong Excel </strong>, gợi ý các cách khác nhau để hiển thị dữ liệu của bạn; và ** Trợ lý sơ yếu lý lịch LinkedIn **, sử dụng toàn bộ cơ sở dữ liệu LinkedIn để giúp sơ yếu lý lịch của bạn nổi bật.</p>\n<p>Từ ý tưởng thuyết trình đến Tra cứu thông minh, Dịch vụ thông minh có thể cung cấp một số tính năng hữu ích nếu bạn cảm thấy thoải mái khi Microsoft thu thập dữ liệu của mình.</p>\n<p>/en/excel/using-the-draw-tab/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_34",
                sessionId: 68,
                title: "Bài 34: Sử dụng tab Draw",
                description: "Nội dung chi tiết cho bài Bài 34: Sử dụng tab Draw.",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 34: Sử dụng tab vẽ</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 34: Sử dụng tab Draw",
                        content: "<p>/en/excel/office-intelligent-services/content/</p>\n<h3>Sử dụng tab Vẽ</h3>\n<p>Cho dù bạn sử dụng bút kỹ thuật số, màn hình cảm ứng hay chuột,<strong> tính năng vẽ ** trong Office đều có thể giúp bạn thêm ghi chú, tạo hình, chỉnh sửa văn bản, v.v.</strong> Tab Vẽ ** có sẵn trong ** Word <strong>,</strong> Excel ** và ** PowerPoint **.</p>\n<p>Hầu hết các tính năng được đề cập bên dưới đều có sẵn trong ** Office 365 ** và ** Office 2019 **, mặc dù một số tính năng trong số đó chỉ có sẵn trong Office 365.</p>\n<p>Xem video bên dưới để tìm hiểu thêm về cách sử dụng tab Vẽ.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Thêm tab Vẽ vào Ribbon",
                        content: "<p>Tab Draw thường được tìm thấy trên Ribbon. Tuy nhiên, nếu bạn không nhìn thấy nó trên máy của mình thì đây là cách thêm nó.</p>\n<ol>\n<li>\n<p>Nhấp chuột phải vào Ribbon và chọn ** Tùy chỉnh Ribbon **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking Customize the Ribbon after right-clicking on the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ribbon_customize.png\" title=\"screenshot of clicking Customize the Ribbon after right-clicking on the Ribbon\" /></p>\n</li>\n<li>\n<p>Chọn hộp bên cạnh ** Vẽ <strong>, sau đó nhấp vào ** OK </strong>.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of checking the Draw box \" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ribbon_check_cropped.jpg\" title=\"screenshot of checking the Draw box\" /></p>\n</li>\n<li>\n<p>Tab Draw bây giờ sẽ có sẵn trong Ribbon.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Draw tab in the Ribbon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ribbon_complete.png\" title=\"screenshot of the Draw tab in the Ribbon\" /></p>\n</li>\n</ol>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Tab Draw có thể làm gì?",
                        content: "<p>Tab Draw cung cấp ba loại họa tiết vẽ:<strong> bút </strong>,<strong> bút chì ** và ** tô sáng </strong>, mỗi loại có một giao diện khác nhau. Để chọn một cái, chỉ cần nhấp vào nó và bạn đã sẵn sàng bắt đầu vẽ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of using the Draw tool\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_drawing_example.jpg\" title=\"screenshot of using the Draw tool\" /></p>\n<p>Nếu bạn muốn thay đổi ** màu ** hoặc ** độ dày ** của bút, hãy nhấp vào mũi tên thả xuống bên cạnh bút và chọn tùy chọn của bạn. Khi bạn hoàn tất, hãy nhấp chuột ra khỏi menu để tiếp tục vẽ.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of changing the color and thickness of a pen\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_color_thickness.png\" title=\"screenshot of changing the color and thickness of a pen\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Tính năng nâng cao",
                        content: "<p>Khi bạn vẽ hình bằng tay, có thể khó vẽ chúng một cách hoàn hảo. May mắn thay, công cụ ** Ink to Shape ** có thể giúp ích cho việc này. Chỉ cần nhấp vào ** Ink to Shape **, sau đó vẽ hình dạng bạn chọn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"a &quot;before&quot; screenshot of using Ink to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ink_to_shape_before.png\" title=\"a \\&quot;before\\&quot; screenshot of using Ink to Shape\" /></p>\n<p>Sau đó, tính năng ** Ink to Shape ** sẽ tìm ra loại hình bạn đã vẽ và sửa bất kỳ điểm không hoàn hảo nào để làm cho nó trông bóng bẩy hơn.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"an &quot;after&quot; screenshot of using Ink to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ink_to_shape_after.png\" title=\"an \\&quot;after\\&quot; screenshot of using Ink to Shape\" /></p>\n<p>Ngoài các hình dạng, bạn có thể viết các phương trình toán học phức tạp bằng công cụ ** Ink to Math **. Khi bạn viết một phương trình, công cụ sẽ đọc những gì bạn đang viết và dịch nó thành một phương trình được định dạng đúng.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of using the Ink to Math tool to write an equation\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ink_to_math.png\" title=\"screenshot of using the Ink to Math tool to write an equation\" /></p>\n<p>Word còn có một tính năng vẽ độc quyền có tên ** Ink Editor <strong>. Bạn có thể khoanh tròn văn bản để chọn, gạch bỏ văn bản để xóa văn bản đó, v.v. Tính năng này ** chỉ khả dụng với Office 365 </strong>, không phải Office 2019.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Ink Editor tool\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/draw_ink_editor.png\" title=\"screenshot of the Ink Editor tool\" /></p>\n<p>Các tính năng vẽ này cung cấp cho bạn nhiều tùy chọn hơn để tùy chỉnh dự án của bạn và giúp sử dụng Office trên máy tính bảng và màn hình cảm ứng dễ dàng hơn.</p>\n<p>/en/excel/working-with-icons/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            },
            {
                id: "ea_35",
                sessionId: 68,
                title: "Bài 35: Làm việc với Icons",
                description: "Nội dung chi tiết cho bài Bài 35: Làm việc với Icons.",
                video: "https://www.youtube.com/embed/c_vNW0q-HEE",
                tasks: [],
                steps: [
                    {
                        title: "Phần 1: Giới thiệu",
                        content: "<h1>Bài 35: làm việc với icon</h1>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 2: Bài 35: Làm việc với Icon",
                        content: "<p>/en/excel/using-the-draw-tab/content/</p>\n<h3>Làm việc với các biểu tượng</h3>\n<p>Nếu bạn cần đồ họa cho một dự án, bạn có thể sử dụng một tính năng có tên là ** biểu tượng <strong>. Biểu tượng là một thư viện ** đồ họa hiện đại, chuyên nghiệp ** đi kèm với Office 365 và 2019 và chúng có thể được ** tùy chỉnh ** để phù hợp với nhu cầu của bạn. Các biểu tượng có sẵn trong ** Word </strong>,<strong> Excel </strong>,<strong> Outlook ** và ** PowerPoint </strong>.</p>\n<p>Xem video dưới đây để tìm hiểu thêm về các biểu tượng.</p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 3: Chèn biểu tượng",
                        content: "<p>Để chèn một biểu tượng, hãy nhấp vào tab ** Chèn ** rồi chọn ** Biểu tượng **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"clicking the Icons button in the Insert tab\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_insert.png\" title=\"clicking the Icons button in the Insert tab\" /></p>\n<p>Trình đơn ** Chèn biểu tượng ** sẽ xuất hiện. Bạn có thể cuộn qua nhiều chủ đề khác nhau, bao gồm con người, công nghệ, thương mại, nghệ thuật, v.v. Khi bạn tìm thấy biểu tượng mình thích, hãy chọn biểu tượng đó rồi nhấp vào ** Chèn **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of the Icons menu\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_menu.jpg\" title=\"screenshot of the Icons menu\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 4: Tùy chỉnh biểu tượng",
                        content: "<p>Sau khi chèn biểu tượng, có một số cách khác nhau để bạn có thể tùy chỉnh biểu tượng đó.</p>\n<p>Để thay đổi ** màu ** của một biểu tượng, hãy chọn biểu tượng bạn muốn chỉnh sửa. Tab **Định dạng ** sẽ xuất hiện. Sau đó nhấp vào ** Graphics Fill ** và chọn màu từ menu thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of changing an icon's color\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_change_color_edit.png\" title=\"screenshot of changing an icon's color\" /></p>\n<p>Để thêm ** đường viền ** vào biểu tượng của bạn, hãy nhấp vào ** Hình dạng đường viền ** và chọn màu từ menu thả xuống.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of adding an outline to an icon\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_outline_edit.png\" title=\"screenshot of adding an outline to an icon\" /></p>\n<p>Bạn cũng có thể thay đổi ** kích thước ** của biểu tượng bằng cách giữ một trong các ** bộ điều khiển định cỡ ** và kéo biểu tượng đó. Vì chúng là <strong><a href=\"../../../beginning-graphic-design/images/1/index.html\">đồ họa vector</a></strong> nên bạn có thể tạo biểu tượng lớn như bạn muốn mà không trông như bị pixel.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of changing an icon's size\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_change_size.png\" title=\"screenshot of changing an icon's size\" /></p>",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Phần 5: Chia một biểu tượng thành nhiều phần",
                        content: "<p>Một số biểu tượng có thể được ** chia thành các phần riêng biệt **, cho phép bạn chỉnh sửa từng phần riêng lẻ để tùy chỉnh thêm.</p>\n<ol>\n<li>\n<p>Nhấp chuột phải vào biểu tượng và chọn ** Chuyển đổi thành hình dạng **.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of right-clicking an icon and selecting Convert to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_convert_to_shape.png\" title=\"screenshot of right-clicking an icon and selecting Convert to Shape\" /></p>\n</li>\n<li>\n<p>Nhấp vào ** Có ** trong hộp thoại.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of clicking Yes after choosing Convert to Shape\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_convert_yes.png\" title=\"screenshot of clicking Yes after choosing Convert to Shape\" /></p>\n</li>\n<li>\n<p>Nếu biểu tượng của bạn có các phần riêng lẻ thì giờ đây bạn có thể tự chỉnh sửa từng phần, thay đổi kích thước, màu sắc và vị trí của phần đó.<img style=\"max-width: 100%; height: auto; border-radius: 8px; margin: 10px 0;\" alt=\"screenshot of an icon after using the Convert to Shape feature\" src=\"Module_1-6/TaiLieuHuongDan/Excel/Advanced/images/icons_convert_complete.jpg\" title=\"screenshot of an icon after using the Convert to Shape feature\" /></p>\n</li>\n</ol>\n<p>Các biểu tượng cung cấp rất nhiều khả năng để tùy chỉnh giao diện dự án của bạn. Hãy dùng thử nếu bạn đang tìm kiếm một số hình ảnh đơn giản, bóng bẩy để nâng cao nội dung của mình.</p>\n<p>/en/excel/excel-quiz/content/</p>",
                        icon: "fa-list-ul"
                    }
                ]
            }
        ]
    },
    {
        id: 12,
        title: "Buổi 12: AI for Office (AI cho Văn phòng)",
        description: "Ứng dụng Gemini để tối ưu hóa công việc văn phòng: Soạn thảo văn bản (Word), Xử lý bảng tính (Excel) và Thiết kế slide (PowerPoint).",
        totalLessons: 3,
        lessons: [
            {
                id: 121,
                sessionId: 12,
                title: "Bài 1: Ôn tập & Sáng tạo với NotebookLM & Gemini",
                description: "Tăng tốc ôn tập và sáng tạo nội dung: Từ tổng hợp kiến thức với NotebookLM đến soạn thảo 'Bí kíp ôn thi' với phần mở rộng Gemini trong Word/Docs.",
                tasks: [
                    { name: "Bài tập thực hành (PDF)", file: "../DeBaiThucHanh/Bài tập_AI for Word.pdf" },
                    { name: "Bài tập thực hành (DOCX)", file: "../DeBaiThucHanh/Bài tập_AI for Word.docx" }
                ],
                docs: [
                    { name: "Slide bài giảng (Full)", file: "Gemini for Word_full.pdf" },
                    { name: "Hướng dẫn thực hành (TXT)", file: "../DeBaiThucHanh/Bài tập_AI for Word.txt" },
                    { name: "Tài liệu 6 Module (PDF)", file: "https://drive.google.com/file/d/1edPV-QAhEDF4giIcHpPgMQylI1nD6ih7/view?usp=sharing" }
                ],
                steps: [
                    {
                        title: "1. Khởi động: Tư duy mới về AI",
                        content: "**Chuyển dịch tư duy:**\n- Từ “người thực hiện” -> “người ra lệnh và biên tập”.\n\n**Công thức Prompt PTCF:**\n- **P (Persona):** Vai trò (Bạn là giảng viên, chuyên gia...)\n- **T (Task):** Nhiệm vụ (Viết đề cương, tóm tắt...)\n- **C (Context):** Bối cảnh (Dựa trên tài liệu module 4...)\n- **F (Format):** Định dạng (Bảng, danh sách...)",
                        icon: "fa-brain"
                    },
                    {
                        title: "2. Demo NotebookLM: 'Trợ lý nghiên cứu'",
                        content: "**Thao tác:**\n1. Upload file **'Tài liệu AI Ứng dụng 6 module đầu.pdf'** (trong mục Tài liệu) lên NotebookLM.\n2. **Source Guide:** Xem tóm tắt và câu hỏi gợi ý.\n\n**Bài tập thực hành Chat:**\n- \"Dựa trên file 6 module vừa upload, hãy liệt kê các kỹ năng quan trọng nhất cần có của một công dân số.\"\n- *Lưu ý:* Kiểm tra trích dẫn (citations) để đảm bảo độ chính xác.",
                        icon: "fa-database"
                    },
                    {
                        title: "3. Demo Gemini & Prompting: 'Trợ lý viết lách'",
                        content: "**Kịch bản:** Từ ý chính rút ra ở NotebookLM, dùng Gemini để viết đề cương.\n\n**Áp dụng PTCF:**\n- `[P]`: Bạn là giảng viên môn Kỹ năng số.\n- `[T]`: Hãy viết đề cương ôn tập.\n- `[C]`: Dựa trên các ý chính về an toàn dữ liệu.\n- `[F]`: Trình bày dạng bảng so sánh ưu nhược điểm.\n\n**Tình huống không có Gemini Pro:** Dùng bản web (gemini.google.com), copy prompt vào, sau đó copy kết quả dán về Google Docs.",
                        icon: "fa-pen-nib"
                    },
                    {
                        title: "4. Thực hành tổng hợp kiến thức",
                        content: "**Bài tập 1: Xây dựng 'Kho tri thức ôn thi'**\n- Tạo Notebook \"Ôn thi Giữa kỳ\" -> Upload 6 module -> Xem Source Guide.\n\n**Bài tập 2: Truy vấn & Tạo Flashcards**\n- Prompt: \"Tìm trong tài liệu các định nghĩa về [Khái niệm khó]. Giải thích cho sinh viên năm nhất.\"\n- Yêu cầu tạo Flashcards/Quiz để tự kiểm tra.",
                        icon: "fa-tasks"
                    },
                    {
                        title: "5. Thực hành Sáng tạo & Tinh chỉnh",
                        content: "**Bài tập 3: Soạn thảo 'Bí kíp ôn thi'**\n- Dùng Gemini viết tài liệu tóm tắt 1-2 trang.\n- Áp dụng PTCF đầy đủ 4 yếu tố.\n\n**Bài tập 4: Kỹ thuật Tinh chỉnh**\n- Dùng lệnh **Shorten** (Rút gọn) để làm 'phao thi'.\n- Dùng lệnh **Change Tone** (Đổi giọng) sang hài hước.",
                        icon: "fa-magic"
                    }
                ]
            },
            {
                id: 122,
                sessionId: 12,
                title: "Bài 2: AI cho Excel (Xử lý bảng tính)",
                description: "Sử dụng Gemini để viết công thức phức tạp, giải thích hàm và phân tích dữ liệu tự động.",
                tasks: [],
                docs: [
                    { name: "Hướng dẫn Google Sheet/Excel", file: "Hướng dẫn dùng Gemini for GoogleSheet.docx" },
                    { name: "Slide bài giảng (Full)", file: "Gemini for Excel_full.pdf" }
                ],
                steps: [
                    {
                        title: "1. AI - Trợ lý công thức Excel",
                        content: "**Không cần nhớ công thức phức tạp:**\nThay vì phải nhớ cú pháp `VLOOKUP`, `INDEX-MATCH`, hay `IF` lồng nhau, bạn hãy mô tả yêu cầu cho AI.\n\n**Ví dụ Prompt:**\n\"Tôi có cột A là Mã sản phẩm, cột B là Đơn giá. Viết cho tôi công thức Excel để tìm đơn giá của mã sản phẩm 'SP01' nằm trong sheet 'Gia'.\"\n\n-> AI sẽ trả về công thức chính xác để bạn Copy-Paste.",
                        icon: "fa-table",
                        slideImage: "images/Gemini for Excel/Viết prompt trong Gemini for GoogleSheet.png"
                    },
                    {
                        title: "2. Giải thích công thức có sẵn",
                        content: "Gặp một file Excel của người khác với công thức dài ngoằng không hiểu? Hãy copy công thức đó và hỏi AI:\n\"Giải thích cho tôi công thức này đang tính cái gì: [Dán công thức vào]\"",
                        icon: "fa-question-circle",
                        slideImage: "images/Gemini for Excel/Gemini hỗ trợ.png"
                    },
                    {
                        title: "3. Phân tích dữ liệu và Xu hướng",
                        content: "Copy một vùng dữ liệu (bảng số liệu) và dán vào Gemini, sau đó yêu cầu:\n- \"Hãy nhận xét xu hướng tăng trưởng của doanh thu qua các tháng.\"\n- \"Tìm ra 3 mặt hàng bán chạy nhất và lý do.\"\nAI hoạt động như một chuyên viên phân tích dữ liệu sơ cấp.",
                        icon: "fa-chart-line",
                        slideImage: "images/Gemini for Excel/Chèn công thức kết quả vào.png"
                    },
                    {
                        title: "4. Thực hành",
                        content: "Đọc tài liệu **'Hướng dẫn dùng Gemini for GoogleSheet.docx'** để nắm chi tiết các bước thao tác và áp dụng vào bài tập dữ liệu thực tế.",
                        icon: "fa-file-excel"
                    }
                ]
            },
            {
                id: 123,
                sessionId: 12,
                title: "Bài 3: AI cho PowerPoint (Thiết kế Slide)",
                description: "Tự động hóa quy trình làm slide: Từ lên ý tưởng, dàn ý đến nội dung chi tiết.",
                tasks: [],
                docs: [
                    { name: "Slide bài giảng (Full)", file: "Gemini for PowerPoint_full.pdf" }
                ],
                steps: [
                    {
                        title: "1. Quy trình tạo Slide với AI",
                        content: "Quy trình 3 bước:\n1. **Brainstorm:** Dùng AI tìm ý tưởng chủ đề, tên đề tài hấp dẫn.\n2. **Outline (Dàn ý):** Yêu cầu AI lập cấu trúc bài thuyết trình (Bao nhiêu slide? Mỗi slide nói gì?).\n3. **Content (Nội dung):** Yêu cầu AI viết chi tiết nội dung cho từng slide theo dàn ý đã duyệt.",
                        icon: "fa-project-diagram"
                    },
                    {
                        title: "2. Prompt mẫu lập dàn ý",
                        content: "\"Tôi cần làm một bài thuyết trình 10 slide về chủ đề 'Ứng dụng AI trong giáo dục'. Đối tượng người nghe là sinh viên đại học. Hãy đề xuất cho tôi một dàn ý chi tiết, bao gồm tiêu đề và ý chính cho từng slide.\"",
                        icon: "fa-list-ol"
                    },
                    {
                        title: "3. Tối ưu hóa nội dung Slide",
                        content: "**Nguyên tắc 1-6-6:** Mỗi slide chỉ nên có 1 ý chính, tối đa 6 dòng, mỗi dòng 6 từ.\n\nSử dụng AI để rút gọn văn bản: \"Hãy tóm tắt đoạn văn sau thành 3 gạch đầu dòng ngắn gọn để đưa lên slide.\"",
                        icon: "fa-compress-arrows-alt"
                    },
                    {
                        title: "4. Gợi ý hình ảnh minh họa",
                        content: "AI có thể gợi ý ý tưởng hình ảnh: \"Với slide nói về 'Tương lai của AI', hãy gợi ý cho tôi nên dùng hình ảnh minh họa gì cho ấn tượng?\"",
                        icon: "fa-image"
                    }
                ]
            }
        ]
    },
    {
        id: 13,
        title: "Buổi 13: Soạn thảo slide trình chiếu",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 6,
        quiz: "TN_Buoi13.csv",
        slide: "Slide_PPT_Buoi13.pdf",
        lessons: [
            {
                id: 131,
                sessionId: 13,
                title: "Bài 1: Thiết kế Slide Master",
                description: "Thiết kế Slide Master giúp định dạng mẫu chung cho toàn bộ bài thuyết trình (Logo, Font chữ, Màu sắc).",
                video: "https://drive.google.com/file/d/1q2-ddBGQ2_1eFA79XneF7afwuLEW_1WT/preview",
                requirements: "Yêu cầu: Thiết kế Slide Master với 2 mẫu chính (Title Slide và Content Slide) có Logo, màu nền và font chữ chuẩn.",
                tasks: [
                    { name: "Logo trường (Copy về máy)", file: "images/Buổi%2013/logo_small.png" }
                ],
                steps: [
                    {
                        title: "1. Khởi động và chuẩn bị",
                        content: "- Mở PowerPoint.\n- Vào menu **View** -> chọn **Slide Master**.\n- Thanh công cụ Slide Master sẽ hiện ra.",
                        icon: "fa-folder-open",
                        slideImage: "images/Buổi%2013/Slide%20Master%20Bước%201.png",
                        videoUrl: "https://drive.google.com/file/d/1q2-ddBGQ2_1eFA79XneF7afwuLEW_1WT/preview"
                    },
                    {
                        title: "2. Vẽ khung trang trí (Bước 2)",
                        content: "- Chọn Slide Master chính (Slide to nhất ở trên cùng bên trái).\n- Vào menu **Insert** -> **Shapes** -> Chọn **Rectangle**.\n- Vẽ một hình chữ nhật dài ở cạnh trái hoặc chân trang tùy mẫu.",
                        icon: "fa-vector-square",
                        slideImage: "images/Buổi%2013/Slide%20Master%20Bước%202.png"
                    },
                    {
                        title: "3. Tô màu cho khung (Bước 3)",
                        content: "- Chọn hình chữ nhật vừa vẽ.\n- Vào tab **Format** (Drawing Tools).\n- Chọn **Shape Fill** -> Chọn màu xanh đậm (hoặc màu theo mẫu).\n- Chọn **Shape Outline** -> **No Outline** (Bỏ viền).",
                        icon: "fa-fill-drip",
                        slideImage: "images/Buổi%2013/Slide%20Master%20Bước%203.png"
                    },
                    {
                        title: "4. Chèn Logo (Bước 4)",
                        content: "- Vào **Insert** -> **Pictures** -> Chọn file Logo (tải ở mục Tài nguyên).\n- Đặt Logo vào vị trí góc trên hoặc góc dưới slide.\n- **Lưu ý:** Chèn ở Slide Master chính thì tất cả slide con đều sẽ có logo này.",
                        icon: "fa-image",
                        slideImage: "images/Buổi%2013/Slide%20Master%20Bước%204.png"
                    },
                    {
                        title: "5. Định dạng Slide Tiêu đề (Bước 5)",
                        content: "- Chọn kiểu slide **Title Slide Layout** (thường là slide con thứ nhất).\n- Chỉnh Font chữ Tiêu đề: **Times New Roman**, **32pt**, **Đậm**, Màu **Đỏ/Đen**.\n- Vẽ thêm các họa tiết trang trí riêng cho trang bìa nếu cần.",
                        icon: "fa-font",
                        slideImage: "images/Buổi%2013/Slide%20Master%20Bước%205.png"
                    },
                    {
                        title: "6. Định dạng Slide Nội dung (Bước 6)",
                        content: "- Chọn kiểu slide **Title and Content Layout** (thường là slide con thứ hai).\n- Chỉnh Tiêu đề trang: **Arial**, **24pt**, Màu **Xanh dương**.\n- Chỉnh Nội dung bên dưới: **Calibri**, **18pt**.\n- Chèn số trang: **Insert** -> **Header & Footer** -> Tích vào **Slide number**.",
                        icon: "fa-list-alt",
                        slideImage: "images/Buổi%2013/Slide%20Master%20Bước%206.png"
                    },
                    {
                        title: "7. Hoàn tất",
                        content: "- Sau khi thiết kế xong, vào tab **Slide Master** -> chọn **Close Master View**.\n- Ra ngoài màn hình soạn thảo, thêm slide mới (**New Slide**) kiểm tra xem các mẫu vừa tạo đã được áp dụng chưa.",
                        icon: "fa-check-double",
                        videoUrl: "https://drive.google.com/file/d/1v9M21zWLDxggNPlWV9nFjED3KUIFya9p/preview"
                    }
                ]
            },
            {
                id: 132,
                sessionId: 13,
                title: "Bài 2: Liên kết (Hyperlink)",
                description: "Tạo các liên kết nội bộ giữa các slide và nút điều hướng.",
                video: "https://drive.google.com/file/d/1LsFdspyVq37AJvKrINb469EwyZ1JH3-B/preview",
                tasks: [
                    { name: "Dữ liệu mẫu (Copy/Paste)", file: "TaiLieuHuongDan/Buổi 13/Bài 2_Slide content.txt" }
                ],
                steps: [
                    {
                        title: "Yêu cầu bài toán",
                        content: "- Tại slide 'Nội dung trình bày', khi click vào mục '1. Lý do chọn đề tài' -> Chuyển đến slide 'Lý do chọn đề tài'.\n- Tại slide con, vẽ một nút (mũi tên), khi click vào nút đó -> Quay lại slide 'Nội dung trình bày'.",
                        icon: "fa-bullseye",
                        slideImage: "images/Buổi%2013/Bai%202_Liên%20kết.png"
                    },
                    {
                        title: "Bước 1: Tạo liên kết đi",
                        content: "1. Bôi đen dòng chữ '1. Lý do chọn đề tài'.\n2. Vào **Insert** -> **Link** (hoặc Hyperlink).\n3. Chọn **Place in This Document**.\n4. Chọn tên slide đích ('Lý do chọn đề tài') -> Nhấn **OK**.",
                        icon: "fa-link",
                        slideImage: "images/Buổi 13/Bài 2_Bước 1.png"
                    },
                    {
                        title: "Bước 2: Tạo liên kết về (Nút Quay lại)",
                        content: "1. Tại slide 'Lý do chọn đề tài', vẽ hình mũi tên (**Insert** -> **Shapes**).\n2. Chuột phải vào hình mũi tên -> chọn **Link**.\n3. Chọn **Place in This Document** -> Chọn slide 'Nội dung trình bày' -> Nhấn **OK**.",
                        icon: "fa-undo",
                        slideImage: "images/Buổi 13/Bài 2_Bước 2.png"
                    },
                    {
                        title: "Bước 3: Copy cho các mục khác",
                        content: "Làm tương tự cho các mục 'Phát biểu bài toán' và 'Phân tích thiết kế hệ thống'.\n\n*Mẹo:* Bạn có thể Copy nút mũi tên đã làm ở Bước 2 và dán sang các slide khác, liên kết sẽ được giữ nguyên, không cần làm lại.",
                        icon: "fa-copy"
                    }
                ]
            },
            {
                id: 133,
                sessionId: 13,
                title: "Bài 3: Tạo hiệu ứng (Animations)",
                description: "Thêm hiệu ứng hoạt hình cho đối tượng (Animation) và hiệu ứng chuyển cảnh (Transition).",
                video: "https://drive.google.com/file/d/12zoZ8FPDKIf9kX9TVQzI6yySL4lOi_9e/preview",
                tasks: [],
                steps: [
                    {
                        title: "1. Hiệu ứng cho đối tượng (Animations)",
                        content: "**Yêu cầu:** Chữ '1. Lý do chọn đề tài' bay từ trái sang.\n\n**Thực hiện:**\n1. Chọn đối tượng chữ.\n2. Vào tab **Animations** -> Chọn hiệu ứng **Fly In**.\n3. Chọn **Effect Options** -> **From Left** (Từ trái sang).",
                        icon: "fa-running",
                        slideImage: "images/Buổi 13/Bài 3_Hiệu ứng_Câu 4_Hình_1.png"
                    },
                    {
                        title: "2. Hiệu ứng chuyển slide (Transitions)",
                        content: "**Yêu cầu:** Các slide chuyển cảnh mượt mà (Fade, Push...).\n\n**Thực hiện:**\n1. Chọn tab **Transitions**.\n2. Chọn một hiệu ứng (ví dụ: **Fade**).\n3. Bấm **Apply To All** nếu muốn áp dụng cho toàn bộ bài thuyết trình.",
                        icon: "fa-file-video",
                        slideImage: "images/Buổi 13/Bài 3_Hiệu ứng_Câu 4_Hình_2.png"
                    },
                    {
                        title: "Lưu ý về Animation Pane",
                        content: "Để quản lý thứ tự xuất hiện, hãy bật **Animation Pane** (trong tab Animations).\n- Sắp xếp ai ra trước, ai ra sau.\n- Chỉnh thời gian (Duration).\n- Chỉnh cách kích hoạt (On Click - Kích chuột, With Previous - Cùng lúc, After Previous - Sau cái trước).",
                        icon: "fa-list-ol"
                    }
                ]
            },
            {
                id: 134,
                sessionId: 13,
                title: "Bài 4: Trình chiếu (Slide Show)",
                description: "Các kỹ thuật trình chiếu chuyên nghiệp và thiết lập chế độ Loop.",
                video: "https://drive.google.com/file/d/1NUNMhTkD9gGalqw-N_yrKXXuI8_wErSP/preview",
                tasks: [],
                steps: [
                    {
                        title: "Các phím tắt trình chiếu",
                        content: "- **F5**: Trình chiếu từ slide đầu tiên.\n- **Shift + F5**: Trình chiếu từ slide hiện tại đang sửa.\n- **ESC**: Thoát trình chiếu.",
                        icon: "fa-keyboard"
                    },
                    {
                        title: "Thiết lập vòng lặp (Loop)",
                        content: "**Yêu cầu:** Slide chạy liên tục, hết slide cuối tự quay lại slide đầu, chỉ dừng khi nhấn ESC.\n\n**Thực hiện:**\n1. Vào tab **Slide Show** -> **Set Up Slide Show**.\n2. Tích chọn **Loop continuously until 'Esc'**.\n3. Nhấn OK.",
                        icon: "fa-sync",
                        slideImage: "images/Buổi 13/Bài 4_1_Setup slide show.png"
                    },
                    {
                        title: "Trình chiếu không hiệu ứng (Show without animation)",
                        content: "Nếu máy chiếu yếu hoặc muốn báo cáo nhanh, bạn có thể tắt toàn bộ hiệu ứng động mà không cần xóa chúng.\n\n**Thực hiện:**\n1. Tại hộp thoại **Set Up Slide Show**.\n2. Tích chọn **Show without animation**.",
                        icon: "fa-ban",
                        slideImage: "images/Buổi 13/Bài 4_3_show without animation.png"
                    }
                ]
            },
            {
                id: 135,
                sessionId: 13,
                title: "Bài 5: Tạo Trigger (Trắc nghiệm)",
                description: "Tạo trò chơi trắc nghiệm: Chọn đúng kêu ting ting, chọn sai kêu tèng tèng.",
                video: "https://drive.google.com/file/d/1ToC_xnO24c4JzwRkkdVYqWczicEePmCn/preview",
                tasks: [],
                steps: [
                    {
                        title: "Bước 1: Chuẩn bị Slide câu hỏi",
                        content: "**Yêu cầu:** Tạo 4 slide, mỗi slide chứa 1 câu hỏi và 4 đáp án (A, B, C, D).\n\n**Thực hiện:**\n1. Nhập nội dung câu hỏi.\n2. Tạo 4 hộp văn bản (Text Box) hoặc hình khối (Shape) cho 4 đáp án A, B, C, D.",
                        icon: "fa-layer-group"
                    },
                    {
                        title: "Bước 2: Tạo Trigger cho đáp án ĐÚNG",
                        content: "**Mục tiêu:** Khi click vào đáp án đúng (ví dụ A), nó sẽ hiện hiệu ứng và âm thanh vỗ tay.\n\n**Thực hiện:**\n1. Chọn đối tượng đáp án đúng (A).\n2. Vào tab **Animations** -> Chọn hiệu ứng (ví dụ: **Fly In**).\n3. Mở **Animation Pane**.\n4. Chuột phải vào hiệu ứng vừa tạo -> **Timing** -> **Triggers**.\n5. Chọn **Start effect on click of** -> Chọn tên đối tượng (Đáp án A).\n6. Chuyển sang tab **Effect** -> Mục **Sound** chọn âm thanh 'Applause' -> OK.",
                        icon: "fa-check-circle"
                    },
                    {
                        title: "Bước 3: Tạo Trigger cho đáp án SAI",
                        content: "**Mục tiêu:** Khi click vào đáp án sai (ví dụ B), nó sẽ hiện hiệu ứng và âm thanh báo lỗi.\n\n**Thực hiện:**\n1. Chọn đối tượng đáp án sai (B).\n2. Vào tab **Animations** -> Chọn hiệu ứng (ví dụ: **Wipe** hoặc **Disappear**).\n3. Mở **Animation Pane** -> Chuột phải vào hiệu ứng -> **Timing** -> **Triggers**.\n4. Chọn **Start effect on click of** -> Chọn tên đối tượng (Đáp án B).\n5. Chuyển sang tab **Effect** -> Mục **Sound** chọn âm thanh 'Bomb' hoặc 'Hammer' -> OK.\n6. Lặp lại cho các đáp án sai còn lại (C, D).",
                        icon: "fa-times-circle"
                    },
                    {
                        title: "Bước 4: Kiểm tra và hoàn thiện",
                        content: "1. Nhấn **F5** để trình chiếu.\n2. Click thử vào đáp án Đúng -> Nghe tiếng vỗ tay.\n3. Click thử vào đáp án Sai -> Nghe tiếng bom nổ.\n\n**Lưu ý:** Trigger giúp tạo trò chơi tương tác, bạn có thể áp dụng để làm game 'Ai là triệu phú'.",
                        icon: "fa-gamepad"
                    }
                ]
            },
            {
                id: 136,
                sessionId: 13,
                title: "Bài 6: Xây dựng slide theo chủ đề",
                description: "Quy trình trọn gói xây dựng một bài thuyết trình hoàn chỉnh từ A-Z.",
                video: "https://drive.google.com/file/d/1UbTXfoR-0Cc99FpCDxKQDWswEcK8wIXn/preview",
                tasks: [],
                steps: [
                    {
                        title: "Quy trình chuẩn 6 bước",
                        content: "1. **Chọn chủ đề & Nội dung:** Lên dàn ý (Outline) trước khi đụng vào PowerPoint.\n2. **Slide Master:** Thiết kế khung xương chung (Logo, Font, Màu sắc).\n3. **Nhập nội dung:** Đưa text vào từng slide (Quy tắc 6x6: Không quá 6 dòng, mỗi dòng 6 chữ).\n4. **Hình ảnh:** Chèn ảnh minh họa phù hợp.\n5. **Hiệu ứng:** Thêm Animation và Transition vừa phải, không lòe loẹt.\n6. **Liên kết:** Tạo Menu để nhảy đến các phần (nếu bài dài).",
                        icon: "fa-clipboard-list"
                    }
                ]
            }
        ]
    },
    {
        id: 14,
        title: "Buổi 14: AI cho PowerPoint",
        description: "Ứng dụng trí tuệ nhân tạo để tối ưu hóa quy trình thiết kế slide, từ lên ý tưởng đến tạo nội dung chi tiết.",
        totalLessons: 1,
        lessons: [
            {
                id: 141,
                sessionId: 14,
                title: "Bài 1: Ứng dụng AI trong thiết kế Slide",
                description: "Sử dụng các công cụ AI để tạo dàn ý, viết nội dung và gợi ý thiết kế cho bài thuyết trình.",
                docs: [
                    { name: "Slide bài giảng (PDF)", file: "TaiLieuHuongDan/Buổi 14/slide AI_Workflow_Data_to_Deck.pdf" },
                    { name: "Hướng dẫn sử dụng AI (PDF)", file: "TaiLieuHuongDan/Buổi 14/Hướng dẫn sử dụng AI thiết kế slide.pdf" },
                    { name: "Tài liệu tổng hợp (Zip)", file: "TaiLieuHuongDan/Buổi 14/Hướng dẫn Word_Excel_PowerPoint.zip" }
                ],
                tasks: [],
                steps: [
                    {
                        title: "1. Khởi tạo & Nạp dữ liệu (NotebookLM)",
                        content: "**Mục tiêu:** Xây dựng 'bộ não' kiến thức cho bài thuyết trình.\n\n**1. Tạo Sổ tay (Notebook):**\n- Truy cập notebooklm.google.com -> Tạo sổ tay mới -> Đặt tên theo chủ đề.\n\n**2. Tải tài liệu nguồn (Sources):**\n- **File học liệu:** Upload PDF, Word, Text, Markdown.\n- **Link:** Dán link Website hoặc Video YouTube (có phụ đề).\n- **Audio:** Upload file ghi âm bài giảng (MP3).\n*Lưu ý: NotebookLM hỗ trợ tối đa 50 nguồn/sổ tay.*",
                        icon: "fa-upload"
                    },
                    {
                        title: "2. Xử lý & Brainstorm ý tưởng",
                        content: "**1. Thấu hiểu dữ liệu:**\n- Dùng **Audio Overview** để nghe tóm tắt dạng Podcast (giúp cảm nhận dòng chảy nội dung).\n- Xem **Key Topics** để nắm các từ khóa cốt lõi.\n\n**2. Tìm kiếm nguyên liệu phong phú:**\n- **Case Study:** 'Dựa trên tài liệu, tìm 3 ví dụ thực tế/Case study minh họa cho vấn đề [X].'\n- **Mini-game:** 'Đề xuất 2 ý tưởng Quiz vui để ôn lại kiến thức [Y].'\n- **Tranh luận:** 'Đưa ra một chủ đề gây tranh luận để thảo luận nhóm.'",
                        icon: "fa-brain"
                    },
                    {
                        title: "3. Xây dựng Kịch bản Slide (Chia để trị)",
                        content: "**Chiến lược:** Chia bài thuyết trình thành các Module nhỏ (tối đa 15 slide/lần tạo).\n\n**1. Phân chia cấu trúc:**\n- Prompt: 'Chia nội dung thành 3 phần chính (Lý thuyết, Ứng dụng, Tổng kết). Lập dàn ý chi tiết cho từng phần.'\n\n**2. Viết kịch bản chi tiết:**\n- Prompt: 'Viết nội dung cho Phần 1 (10 slide). Mỗi slide gồm: Tiêu đề, Nội dung chính (bullet points), Hình ảnh minh họa, Ghi chú diễn giả (Speaker notes).'\n\n**3. Kiểm tra:** Click vào số trích dẫn (VD: [1]) để xác thực thông tin từ nguồn gốc.",
                        icon: "fa-list-ol"
                    },
                    {
                        title: "4. Tạo Slide (Cách 1: Từ NotebookLM)",
                        content: "**Dành cho bài làm nhanh, tập trung cấu trúc:**\n\n1. **Tạo nội dung:**\n- Prompt: 'Viết kịch bản chi tiết cho 10 slide...'\n2. **Xuất kết quả:**\n- Chọn nội dung -> Ghim vào Ghi chú (Pin to Note).\n- Copy toàn bộ.\n3. **Tạo Slide:**\n- Paste vào PowerPoint hoặc Google Slides.\n- Hoặc dùng tính năng 'Help me visualize' của Google Slides (nếu có) để AI tự vẽ slide từ text.",
                        icon: "fa-bolt"
                    },
                    {
                        title: "5. Tạo Slide (Cách 2: Với Gemini Canvas)",
                        content: "**Tối ưu hóa quy trình thiết kế:**\n\n1. **Chuẩn bị:** Copy nội dung tổng hợp từ NotebookLM.\n2. **Tại Gemini (gemini.google.com):**\n- Chọn chế độ **Canvas** (hoặc dán vào khung chat).\n- Paste nội dung vào.\n- Prompt: 'Đóng vai trò chuyên gia, hãy cấu trúc nội dung này thành file trình chiếu 10-12 slide. Viết rõ Tiêu đề, Nội dung chính và Gợi ý hình ảnh.'\n3. **Xuất:** Chọn nút **Share & Export** -> **Export to Google Slides**.",
                        icon: "fa-project-diagram"
                    },
                    {
                        title: "6. Chỉnh sửa & Làm đẹp (Phân nhánh)",
                        content: "**Nhánh A: Tài khoản Education/Advanced (Có AI trong Slides)**\n- Dùng **Ask Gemini** (ngôi sao) để: 'Create image' (Tạo ảnh minh họa), 'Rewrite' (Viết lại văn phong), 'Summarize' (Tóm tắt).\n\n**Nhánh B: Tài khoản Miễn phí**\n- **Tại Canvas:** Bôi đen đoạn văn -> Chọn 'Shorten' (Rút gọn) hoặc 'Rewrite'. Chat để sửa bố cục ('Tách slide 3 thành 2 slide').\n- **Tại Google Slides:** Dùng tính năng **Explore** (Khám phá) để dàn trang đẹp mắt.",
                        icon: "fa-magic"
                    },
                    {
                        title: "7. Luyện tập & Hoàn thiện",
                        content: "**1. Ôn tập:**\n- Quay lại NotebookLM, dùng tính năng **Suggested Questions** để ôn luyện.\n- Yêu cầu tạo Flashcards/Quiz tự kiểm tra.\n\n**2. Rà soát:**\n- Kiểm tra lại nguồn trích dẫn và tính xác thực của số liệu.",
                        icon: "fa-check-double"
                    }
                ]
            }
        ]
    },
    {
        id: 15,
        title: "Buổi 15: Ôn tập",
        description: "Tổng hợp kiến thức, giải đề thi thử và ôn tập chuẩn bị cho kỳ thi kết thúc học phần.",
        totalLessons: 13,
        lessons: [
            {
                id: 1500,
                sessionId: 15,
                title: "Bài 0: Chiến lược & Cẩm nang ôn tập",
                description: "Chiến lược làm bài thi hiệu quả trong 90 phút và tổng hợp kiến thức trọng tâm Word, Excel, PowerPoint.",
                docs: [
                    { name: "Cẩm nang ôn tập (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Chiến lược làm bài và nội dung ôn tập.docx" }
                ],
                sections: [
                    {
                        title: "1. Chiến lược chung (90 phút)",
                        steps: [
                            {
                                title: "Chiến lược làm bài",
                                content: "**Giai đoạn 1: Khởi động (5p)**\n- Tạo và lưu file ngay lập tức (IDSV_Ten_Lop_Made).\n- Nguyên tắc: Làm xong 1 câu nhấn Ctrl + S.\n\n**Giai đoạn 2: PowerPoint (15-20p) - 'Ăn chắc'**\n- Làm trước vì dễ, ít lỗi logic.\n- Mục tiêu: 2.5 điểm trọn vẹn.\n- Đừng tốn thời gian chọn màu đẹp, chỉ cần đủ nội dung, hiệu ứng, liên kết, loop.\n\n**Giai đoạn 3: Word (25-30p)**\n- Nhập thô -> Bảng biểu -> Định dạng (Font, Tab) -> Chia cột/Drop Cap -> Mục lục -> Header/Footer.\n\n**Giai đoạn 4: Excel (35-40p)**\n- Nhập liệu & Khung (0.5đ).\n- Sort & Filter (dữ liệu thô).\n- Hàm thống kê (MAX, MIN, COUNTIF).\n- Cuối cùng: VLOOKUP, IF lồng nhau.\n\n**Giai đoạn 5: Rà soát (5p)**\n- Update mục lục Word, kiểm tra Loop PPT, tên file.",
                                icon: "fa-chess-queen"
                            }
                        ]
                    },
                    {
                        title: "2. Tổng hợp kiến thức Word (3.5 điểm)",
                        steps: [
                            {
                                title: "Tổng quan: Kỹ năng trọng tâm (3.5đ)",
                                content: "**Các phần 'ăn điểm' cần nhớ:**\n\n1.  **Thiết lập (Page Setup):** Luôn kiểm tra A4, Lề (2-2-3-2), Font Times New Roman 13.\n2.  **Tab & Numbering:** Dùng Right Tab + Leader (...) cho các dòng điền thông tin.\n3.  **Chia cột & Drop Cap:** Quy tắc vàng \"Gõ thô -> Chia cột -> Drop Cap\". Làm ngược là mất điểm.\n4.  **Bảng biểu:** Kỹ năng \"Convert Table to Text\" là câu cho điểm dế nhất.\n5.  **Mục lục & Header:** Phân biệt Header (Đầu) vs Footer (Chân).",
                                icon: "fa-star"
                            },
                            {
                                title: "Thiết lập & Lưu file (Bước 1)",
                                content: "**Quy trình chuẩn (0.25đ):**\n\n1.  **Lưu file ngay lập tức:**\n    -   Nhấn `F12` (hoặc File > Save As).\n    -   Đặt tên cấu trúc: `IDSV_Hovaten_Lop_Made.docx`.\n2.  **Thiết lập trang (Page Setup):**\n    -   Tab **Layout** > **Size** > `A4`.\n    -   **Margins** > Custom Margins: Top: `2cm`, Bottom: `2cm`, Left: `3cm` (hoặc 2.5), Right: `2cm`.\n3.  **Font chuẩn:**\n    -   `Ctrl + A` > Tab **Home** > **Times New Roman**, size `13`.\n    -   Paragraph Settings: Line spacing `Single`, Before `0pt`, Spacing After `6pt`.",
                                icon: "fa-save"
                            },
                            {
                                title: "Bảng biểu & Convert (Bước 2)",
                                content: "**Quy trình 'ăn điểm' dễ nhất (0.5đ):**\n\n1.  **Tạo bảng gốc:**\n    -   **Insert** > **Table** > Nhập nội dung thô.\n2.  **Sao chép & Chuyển đổi:**\n    -   Bôi đen bảng > `Ctrl + C` > Đặt con trỏ xuống dưới > `Ctrl + V`.\n    -   **Thao tác quan trọng:** Chọn bảng mới > Tab **Layout** (Table Tools) > **Convert to Text** > Tích chọn **Tabs** > OK.\n\n> **Mẹo:** Nên làm bước này ngay sau khi thiết lập file để lấy điểm trọn vẹn phần này trước.",
                                icon: "fa-table"
                            },
                            {
                                title: "Soạn thảo nâng cao (Bước 3)",
                                content: "**Tab, Chia cột & Drop Cap (1.25đ):**\n\n1.  **Kỹ thuật Tab (Điền thông tin):**\n    -   Đặt **Left Tab** đầu dòng, **Right Tab** cuối dòng.\n    -   Kích đúp dấu Tab trên thước > Chọn **Leader (2.....)** > Set.\n2.  **Chia cột (Columns):**\n    -   Gõ hết văn bản thô -> Bôi đen (tránh dòng trắng cuối) -> **Layout** > **Columns** > **Two**.\n    -   Tích **Line between** để có đường kẻ giữa.\n3.  **Drop Cap (Chữ cái lớn):**\n    -   **Chỉ làm sau khi đã chia cột.**\n    -   Insert > Drop Cap > Dropped.\n    -   **Lưu ý:** Đề 1-6 chỉnh `Lines to drop = 2`. Riêng **Đề 7, 8** chỉnh `Lines to drop = 4`.",
                                icon: "fa-paragraph"
                            },
                            {
                                title: "Mục lục tự động (Bước 4)",
                                content: "**Quy trình 2 bước (0.5đ):**\n\n1.  **Gán cấp độ (Level):**\n    -   Bôi đen tiêu đề lớn (CÂU 1...) > **References** > **Add Text** > **Level 1**.\n    -   Bôi đen tiêu đề nhỏ (1.1...) > **Level 2**.\n2.  **Chèn danh mục:**\n    -   Đặt con trỏ tại trang đích.\n    -   **References** > **Table of Contents** > **Custom Table of Contents**.\n\n> **Mẹo:** Nếu không làm được tự động, hãy gõ thủ công dùng Right Tab chấm (...) để vớt vát điểm trình bày.",
                                icon: "fa-list-ol"
                            },
                            {
                                title: "Header & Footer (Bước 5)",
                                content: "**Lưu ý vị trí (0.25đ):**\n\n1.  **Xác định yêu cầu:**\n    -   **Footer (Chân trang):** Đa số các đề (1, 2, 3, 4, 5, 6).\n    -   **Header (Đầu trang):** Đề 7, 8 (Rất hay sai!).\n2.  **Thực hiện:**\n    -   **Insert** > Header/Footer.\n    -   Gõ Họ tên bên trái.\n    -   Nhấn `Tab` 2 lần sang phải (hoặc 1 lần ra giữa).\n    -   **Page Number** > **Current Position** > Chọn số.",
                                icon: "fa-border-style"
                            }
                        ]
                    },
                    {
                        title: "3. Tổng hợp kiến thức Excel (4.0 điểm)",
                        steps: [
                            {
                                title: "Tổng quan: Tư duy Logic & Hàm (4.0đ)",
                                content: "**Tránh lỗi #N/A và mất điểm oan:**\n\n1.  **Xử lý chuỗi:** Hầu hết phải dùng `VALUE()` khi tách số từ chuỗi kí tự.\n2.  **Hàm dò tìm:** Xác định đúng `VLOOKUP` (cột dọc) hay `HLOOKUP` (hàng ngang).\n3.  **Hàm IF:** Nguyên tắc \"bóc vỏ hành\", xử lý từ điều kiện cao nhất đến thấp nhất.\n4.  **Thống kê:** `SUMIF` và `COUNTIF` thường dễ lấy điểm hơn IF lồng nhau.\n5.  **Công cụ:** Nhớ copy ra sheet mới trước khi `Sort` (Sắp xếp) và `Filter` (Lọc).",
                                icon: "fa-star"
                            },
                            {
                                title: "Nhập liệu & Định dạng (Bước 1)",
                                content: "**Khởi động (0.5đ):**\n\n1.  **Lưu file:** `IDSV_Hovaten_Lop_Made.xlsx`.\n2.  **Nhập liệu:**\n    -   Nhập chính xác các Mã (VD: `DD18A1`).\n    -   **Tuyệt đối không** nhập dư khoảng trắng (dấu cách) ở cuối mã -> gây lỗi hàm dò tìm.\n3.  **Định dạng:**\n    -   Kẻ khung bảng tính (All Borders).\n    -   Định dạng số tiền (Commas) nếu cần.",
                                icon: "fa-keyboard"
                            },
                            {
                                title: "Xử lý Chuỗi (Bước 2 - Core)",
                                content: "**Kỹ năng sống còn - Sai bước này là sai hết:**\n\n1.  **Hàm cắt chuỗi:** `LEFT`, `RIGHT`, `MID`.\n2.  **Hàm VALUE (Quan trọng nhất):**\n    -   Khi lấy **SỐ** ra khỏi chuỗi văn bản (VD: lấy '18' từ 'DD18A1').\n    -   BẮT BUỘC dùng `VALUE` bọc bên ngoài thì mới tra cứu được trong bảng số.\n    -   VD: `=VALUE(MID(A3, 3, 2))`.",
                                icon: "fa-cut"
                            },
                            {
                                title: "Hàm dò tìm (Bước 3)",
                                content: "**Ăn điểm tuyệt đối (1.0đ):**\n\n1.  **Chọn hàm:**\n    -   Bảng phụ nằm **Dọc** -> `VLOOKUP`.\n    -   Bảng phụ nằm **Ngang** -> `HLOOKUP`.\n2.  **Công thức:**\n    -   `=HLOOKUP(Trị_dò, Bảng_dò, Dòng_lấy_KQ, 0)`\n    -   **Trị dò:** Thường là kết quả Bước 2.\n    -   **Bảng dò:** Nhớ nhấn `F4` để cố định ($).",
                                icon: "fa-search"
                            },
                            {
                                title: "Hàm điều kiện (Bước 4)",
                                content: "**IF lồng nhau (0.75 - 1.0đ):**\n\n1.  **Nguyên tắc 'Bóc vỏ hành':**\n    -   Xử lý từ điều kiện cao nhất xuống thấp nhất.\n    -   Nếu có N trường hợp -> Dùng N-1 hàm IF.\n2.  **Ví dụ Xếp loại:**\n    -   `=IF(ĐTB>=9, \"Xuất sắc\", IF(ĐTB>=8, \"Giỏi\", ...))`\n    -   Mở bao nhiêu ngoặc thì đóng bấy nhiêu ở cuối.",
                                icon: "fa-code-branch"
                            },
                            {
                                title: "Hàm thống kê (Bước 5)",
                                content: "**SUMIF & COUNTIF (0.75đ):**\n\n1.  **Tính tổng có điều kiện (SUMIF):**\n    -   Tổng tiền theo Tên hàng: `=SUMIF(Cột_Tên, \"Xăng\", Cột_Tiền)`.\n2.  **Đếm có điều kiện (COUNTIF):**\n    -   Đếm >= 5: `=COUNTIF(Cột_Điểm, \">=5\")`.\n    -   Đếm họ Lê: `=COUNTIF(Cột_Tên, \"Lê*\")` (* là ký tự đại diện).",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Sắp xếp & Lọc (Bước 6)",
                                content: "**Dễ nhưng hay quên (1.0đ):**\n\n1.  **Sao chép:** Copy bảng dữ liệu sang sheet mới tên `KQL` trước khi lọc.\n2.  **Sắp xếp (Sort):** Data > Sort > Chọn cột & Tăng/Giảm.\n3.  **Lọc (Filter):**\n    -   **Số:** Number Filters > Between / Greater Than.\n    -   **Chữ:** Text Filters > Begins With.\n    -   **Điều kiện OR (Đề 6):** Custom Filter > Chọn OR.",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "4. Tổng hợp kiến thức PowerPoint (2.5 điểm)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu cốt lõi (2.5đ)",
                                content: "**Dễ nhưng không được chủ quan:**\n\n1.  **Cấu trúc:** Bắt buộc đủ 6 slide (Slide 3 là mục lục).\n2.  **SmartArt:** Phải chuyển danh sách ở Slide 3 (hoặc 2) thành SmartArt.\n3.  **Hyperlink:** Liên kết từ Mục lục đến các slide chi tiết.\n4.  **Setting:** Đừng quên chế độ \"Loop continuously\" (Lặp lại liên tục).\n5.  **Thao tác:** Đừng mất thời gian trang trí đẹp, đủ nội dung và hiệu ứng là có điểm.",
                                icon: "fa-star"
                            },
                            {
                                title: "PPT: Khởi tạo & Nhập liệu (Bước 1)",
                                content: "**Quy trình chuẩn (1.0đ):**\n\n1.  **Tạo 6 Slide:**\n    -   Home > New Slide.\n2.  **Nhập nội dung thô:**\n    -   **Slide 1:** Tiêu đề, Họ tên, Ngày thi.\n    -   **Slide 2:** Thông tin thí sinh (Lớp, Ngành, Sở thích - dùng Bullets).\n    -   **Slide 3:** NỘI DUNG (Word, Excel, PowerPoint).\n    -   **Slide 4, 5, 6:** Chi tiết từng phần (Copy từ đề).",
                                icon: "fa-plus-square"
                            },
                            {
                                title: "PPT: SmartArt & Diagram (Bước 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Vị trí:** Thường ở Slide 2 hoặc Slide 3 (Mục lục).\n2.  **Thao tác:**\n    -   **Insert** > **SmartArt** > Chọn dạng List hoặc Process.\n    -   Nhập nội dung vào các ô.\n\n> **Lưu ý:** Nếu không vẽ SmartArt mà chỉ gõ text thường sẽ bị trừ điểm phần trang trí.",
                                icon: "fa-project-diagram"
                            },
                            {
                                title: "PPT: Liên kết Hyperlink (Bước 3)",
                                content: "**Điều hướng thông minh (0.5đ):**\n\n1.  **Tại Slide 3 (Mục lục):**\n    -   Chọn chữ \"Phần Word\" -> **Insert** > **Link** -> Chọn **Slide 4**.\n    -   Chọn chữ \"Phần Excel\" -> **Insert** > **Link** -> Chọn **Slide 5**.\n    -   Chọn chữ \"Phần PowerPoint\" -> **Insert** > **Link** -> Chọn **Slide 6**.",
                                icon: "fa-link"
                            },
                            {
                                title: "PPT: Hiệu ứng (Bước 4)",
                                content: "**Không cần làm quá nhiều (0.5đ):**\n\n1.  **Transitions (Chuyển trang):**\n    -   Chọn 1 hiệu ứng (Fade/Push) -> Nhấn **Apply to All**.\n2.  **Animations (Đối tượng):**\n    -   Chọn văn bản/hình ảnh -> Chọn hiệu ứng màu xanh (Fly In).\n    -   **Mẹo:** Chỉ cần làm tượng trưng cho Slide 1 và 2 là đủ điểm, không cần làm hết 6 slide để tiết kiệm thời gian.",
                                icon: "fa-magic"
                            },
                            {
                                title: "PPT: Setting & Loop (Bước 5)",
                                content: "**Lỗi hay quên nhất (0.5đ):**\n\n1.  **Header & Footer:**\n    -   **Insert** > Header/Footer > Tích **Slide number** & **Footer** (Họ tên).\n    -   Nhấn **Apply to All**.\n2.  **Loop (Lặp lại):**\n    -   Tab **Slide Show** > **Set Up Slide Show**.\n    -   Tích ô **Loop continuously until 'Esc'** > OK.",
                                icon: "fa-sync-alt"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1501,
                sessionId: 15,
                title: "Đề số 01: Chuẩn đầu ra Tin học",
                description: "Luyện tập Đề số 01: Định dạng Word, Bảng biểu, Hàm HLOOKUP/IF, và PowerPoint cơ bản.",
                docs: [
                    { name: "Đề số 01 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 1.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_1.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 01 (3.5đ)",
                                content: "**Checklist nhanh:**\n\n1.  **Khổ giấy:** A4, Lề 2-2-3-2.\n2.  **Định dạng:** Font Times 13, Line Spacing Single.\n3.  **Kỹ thuật:** Convert Table, Tabs (Leader...), Columns, Drop Cap (2 dòng).\n4.  **Mục lục:** Tự động (Level 1, Level 2).\n5.  **Footer:** Họ tên (Trái) - Số trang (Phải).",
                                icon: "fa-clipboard-check"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_01.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Layout > Size > **A4**.\n    -   Margins: Top **2cm**, Bottom **2cm**, Left **3cm** (hoặc 2.5), Right **2cm**.\n3.  **Font chữ:**\n    -   Times New Roman, cỡ **13**.\n    -   Line Spacing: **Single**.",
                                icon: "fa-save"
                            },
                            {
                                title: "Bảng biểu & Chuyển đổi (Câu 3)",
                                content: "**Convert Table to Text:**\n\n1.  **Tạo bảng:** Insert > Table (3 cột, 4 dòng).\n2.  **Sao chép:** Copy bảng xuống dưới.\n3.  **Chuyển đổi:**\n    -   Chọn bảng mới > **Layout** (Table Tools) > **Convert to Text**.\n    -   Chọn **Tabs** hoặc **Commas** > OK.",
                                icon: "fa-table"
                            },
                            {
                                title: "Soạn thảo nâng cao (Câu 4)",
                                content: "**Kỹ thuật Tab, Drop Cap & Chia cột:**\n\n1.  **Numbering:** Đánh số tự động (1., 2., 3.) cho các dòng tiêu đề.\n2.  **Right Tab:**\n    -   Đặt Tab phải ở cuối dòng.\n    -   Chọn Leader dấu chấm (...) để làm dòng kẻ ngang.\n3.  **Chia cột & Drop Cap:**\n    -   Chia 2 cột (Line between).\n    -   Drop Cap chữ đầu tiên (Lines to drop: 2).",
                                icon: "fa-paragraph"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện văn bản:**\n\n1.  **Mục lục tự động:**\n    -   Gán **Level 1** cho tiêu đề lớn, **Level 2** cho tiêu đề nhỏ.\n    -   Insert > Table of Contents.\n2.  **Header & Footer:**\n    -   **Footer (Chân trang):** Họ tên bên trái, Số trang bên phải.\n    -   Dùng phím **Tab** để căn chỉnh vị trí.",
                                icon: "fa-list-alt"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 01 (4.0đ)",
                                content: "**Điểm mấu chốt:**\n\n1.  **HLOOKUP:** Dò tìm theo dòng (do Bảng phụ nằm ngang).\n2.  **VALUE+MID:** Lấy số 18 từ chuỗi \"DD18A1\" để dò tìm.\n3.  **COUNTIF:** Đếm có điều kiện (>=5).\n4.  **Filter:** Lọc 2 điều kiện (Điểm & Niên khóa).",
                                icon: "fa-clipboard-check"
                            },
                            {
                                title: "Hàm Niên khóa (Câu 3)",
                                content: "**Kết hợp HLOOKUP, MID, VALUE:**\n\n`=HLOOKUP(VALUE(MID(D4, 3, 2)), $B$14:$E$15, 2, 0)`\n\n-   **MID(D4, 3, 2):** Lấy chuỗi \"18\" từ \"DD18A1\".\n-   **VALUE(...):** Chuyển \"18\" thành số 18 để dò tìm.\n-   **HLOOKUP:** Dò tìm trong dòng 1, lấy kết quả dòng 2.",
                                icon: "fa-key"
                            },
                            {
                                title: "Hàm Xếp loại (Câu 4)",
                                content: "**IF lồng nhau (5 cấp):**\n\n`=IF(H4>=9, \"Xuất sắc\", IF(H4>=8, \"Giỏi\", IF(H4>=7, \"Khá\", IF(H4>=5, \"Trung bình\", \"Yếu\"))))`\n\n> **Lưu ý:** Mở bao nhiêu ngoặc thì phải đóng bấy nhiêu ngoặc ở cuối.",
                                icon: "fa-code-branch"
                            },
                            {
                                title: "Thống kê & Sắp xếp (Câu 5 & 6)",
                                content: "**Các hàm cơ bản:**\n\n1.  **Thống kê:**\n    -   Cao nhất: `=MAX(...)`\n    -   Thấp nhất: `=MIN(...)`\n    -   Đếm điểm >= 5: `=COUNTIF(G4:G10, \">=5\")`\n2.  **Sắp xếp:**\n    -   Tăng dần (Smallest to Largest) theo **Điểm TB**.",
                                icon: "fa-chart-bar"
                            },
                            {
                                title: "Lọc dữ liệu (Câu 7)",
                                content: "**Filter (Bộ lọc):**\n\n1.  **Chuẩn bị:** Copy bảng sang sheet `KQL`.\n2.  **Thực hiện:**\n    -   **Điểm TB:** >= 5.\n    -   **Niên khóa:** Chọn 2019-2023 và 2020-2024 (Khóa 19 trở về sau).",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 01 (2.5đ)",
                                content: "**Không được quên:**\n\n1.  **SmartArt:** Sơ đồ mục lục ở Slide 3.\n2.  **Hyperlink:** Link từ mục lục đến các slide chi tiết.\n3.  **Loop:** Lặp lại liên tục.\n4.  **Footer:** Số trang & Tên.",
                                icon: "fa-clipboard-check"
                            },
                            {
                                title: "Thiết kế & SmartArt (Câu 1 & 2)",
                                content: "**Cấu trúc Slide:**\n\n1.  **Số lượng:** 6 Slide.\n2.  **Slide 1:** Tiêu đề, Họ tên.\n3.  **Slide 2:** Thông tin cá nhân (Bullets).\n4.  **Slide 3:** Mục lục (Dùng **SmartArt** dạng List) -> **Bắt buộc!**.",
                                icon: "fa-layer-group"
                            },
                            {
                                title: "Liên kết & Hiệu ứng (Câu 3)",
                                content: "**Yêu cầu kỹ thuật:**\n\n1.  **Hyperlink:** Từ SmartArt (Slide 3) link đến Slide 4, 5, 6.\n2.  **Transition:** Hiệu ứng chuyển slide (Apply to All).\n3.  **Animation:** Hiệu ứng bay vào cho đôi tượng slide 1, 2.",
                                icon: "fa-magic"
                            },
                            {
                                title: "Cài đặt nâng cao (Câu 3)",
                                content: "**Đừng quên:**\n\n1.  **Loop:** Slide Show > Set Up > Loop continuously until 'Esc'.\n2.  **Header/Footer:** Giống Word, chèn Số trang và Tên vào Footer (Apply to All).",
                                icon: "fa-cog"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1502,
                sessionId: 15,
                title: "Đề số 02: Văn hóa tổ chức",
                description: "Luyện tập Đề số 02: Word Cột báo, Excel HLOOKUP & Lọc điều kiện ký tự.",
                docs: [
                    { name: "Đề số 02 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 2.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_2.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 02",
                                content: "**Khác biệt so với Đề 01:**\n\n1.  **Header (Đầu trang):** Chú ý vị trí ở trên cùng (Top).\n2.  **Numbering:** Kiểu A., B., C.\n3.  **Chia cột:** Có đường kẻ giữa (Line between).\n4.  **Mục lục:** Yêu cầu hiện thị cả phần Word, Excel, PowerPoint.",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_02.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Layout > Size > **A4**.\n    -   Margins: Top 2cm, Bottom 2cm, Left 3cm, Right 2cm.\n3.  **Font chữ:** Times New Roman, cỡ 13.",
                                icon: "fa-save"
                            },
                            {
                                title: "Soạn thảo & Định dạng (Câu 4)",
                                content: "**Chi tiết kỹ thuật:**\n\n1.  **Numbering (A, B, C):** Chọn các tiêu đề lớn > Home > Numbering > Chọn kiểu A., B., C.\n2.  **Chia cột:** Bôi đen đoạn văn > Layout > Columns > Two > **Line between**.\n3.  **Drop Cap:** Insert > Drop Cap > Dropped (Lines to drop: 2).",
                                icon: "fa-file-word"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện văn bản:**\n\n1.  **Header (Đầu trang):** Insert > Header > Edit Header.\n    -   Gõ Họ tên bên trái.\n    -   Tab 2 lần sang phải > Chèn Page Number.\n2.  **Mục lục:** References > Table of Contents.",
                                icon: "fa-list-alt"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 02",
                                content: "**Điểm nhấn:**\n\n1.  **HLOOKUP:** Tra Khóa (lấy 2 ký tự giữa).\n2.  **IF lồng nhau:** Điểm quy đổi (A, B, C, D, F).\n3.  **Sắp xếp:** Giảm dần (Largest to Smallest).\n4.  **Lọc:** Điều kiện Khóa >= 19.",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Hàm HLOOKUP - Khóa (Câu 3)",
                                content: "**Công thức:**\n`=HLOOKUP(VALUE(MID(F4, 3, 2)), $B$15:$E$16, 2, 0)`\n\n-   **MID(F4, 3, 2):** Lấy \"18\" từ \"DD18A1\".\n-   **VALUE:** Chuyển \"18\" thành số 18.",
                                icon: "fa-key"
                            },
                            {
                                title: "Hàm IF - Quy đổi (Câu 4)",
                                content: "**Xếp loại A, B, C, D, F:**\n`=IF(J4>=8.5, \"A\", IF(J4>=7, \"B\", IF(J4>=5.5, \"C\", IF(J4>=4, \"D\", \"F\"))))`\n\n> **Lưu ý:** Chú ý đóng đủ 4 ngoặc đơn ở cuối.",
                                icon: "fa-code-branch"
                            },
                            {
                                title: "Thống kê & Sắp xếp (Câu 5 & 6)",
                                content: "-   **Đếm tên H:** `=COUNTIF(Cot_Ten, \"H*\")` (Dùng dấu * đại diện).\n-   **Sắp xếp:** Data > Sort > Chọn Điểm TB > Order: **Largest to Smallest** (Giảm dần).",
                                icon: "fa-sort-amount-down"
                            },
                            {
                                title: "Lọc dữ liệu (Câu 7)",
                                content: "**Filter:**\n1.  **Điểm quy đổi:** Chọn \"A\".\n2.  **Khóa:** Chọn 19, 20... (Bỏ chọn 18) tương ứng \"Từ khóa 19 trở về sau\".",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 02",
                                content: "**Chuẩn 6 Slide:**\n-   **Slide 1:** Tiêu đề, Ngày thi.\n-   **Slide 2:** Thông tin (Bullets).\n-   **Slide 3:** Sơ đồ SmartArt (Bắt buộc) -> Link tới Slide 4, 5, 6.",
                                icon: "fa-layer-group"
                            },
                            {
                                title: "Cài đặt trình chiếu",
                                content: "-   **Loop:** Slide Show > Set Up > Loop continuously.\n-   **Footer:** Insert > Header/Footer > Slide Number + Họ Tên.",
                                icon: "fa-cog"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1503,
                sessionId: 15,
                title: "Đề số 03: Kinh doanh điện máy",
                description: "Luyện tập Đề số 03: Excel đếm theo họ và Word số trang ở giữa.",
                docs: [
                    { name: "Đề số 03 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 3.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_3.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 03",
                                content: "**Khác biệt cần nhớ:**\n\n1.  **Số trang:** Ở giữa (Center) chân trang.\n2.  **Drop Cap:** 2 dòng.\n3.  **Mục lục:** Cấp độ 1 (Câu lớn), Cấp độ 2 (Mục nhỏ).",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_03.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Size: **A4**.\n    -   Margins: Top 2cm, Bottom 2cm, Left 3cm, Right 2cm.\n3.  **Font:** Times New Roman, 13, Single spacing.",
                                icon: "fa-save"
                            },
                            {
                                title: "Bảng biểu & Soạn thảo (Câu 3 & 4)",
                                content: "**Kỹ thuật chi tiết:**\n\n1.  **Convert Table:** Nhập bảng -> Layout -> Convert to Text -> Tabs.\n2.  **Drop Cap:** Insert > Drop Cap > Dropped (Lines: 2).\n3.  **Chia cột:** Layout > Columns > Two > **Line between**.",
                                icon: "fa-table"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện:**\n\n1.  **Footer (Chân trang):** Họ tên bên trái.\n    -   **Số trang:** Bấm Tab 1 lần để ra GIỮA -> Insert Page Number > Current Position.\n2.  **Mục lục:** References > Table of Contents.",
                                icon: "fa-list-alt"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 03",
                                content: "**Điểm nhấn:**\n\n1.  **Ngành học:** IF lồng nhau nhiều cấp (`\"IT\"`, `\"DD\"`...).\n2.  **COUNTIF:** Đếm họ Lê (`\"Lê*\"`).\n3.  **Sắp xếp:** Tăng dần theo Mã (A-Z).\n4.  **Lọc:** Khóa 22 trở về sau.",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Hàm HLOOKUP - Khóa (Câu 3)",
                                content: "**Công thức:**\n`=HLOOKUP(VALUE(MID(E4, 3, 2)), $Vung_Bang_2, 2, 0)`\n\n-   **MID(E4, 3, 2):** Lấy số \"21\".\n-   **$Vung_Bang_2:** Quét bảng K19, K20... (Nhớ F4).",
                                icon: "fa-key"
                            },
                            {
                                title: "Hàm IF - Ngành học (Câu 4)",
                                content: "**Xử lý 5 trường hợp:**\n`=IF(F4=\"IT\", \"CNTT\", IF(F4=\"DD\", \"Điều dưỡng\", IF(F4=\"KT\", \"Kế toán\", IF(F4=\"LE\", \"Luật\", \"Ô tô\"))))`\n\n> **Mẹo:** Các mã chữ cái (IT, DD...) phải để trong ngoặc kép.",
                                icon: "fa-code-branch"
                            },
                            {
                                title: "Thống kê & Sắp xếp (Câu 5 & 6)",
                                content: "-   **Đếm Họ Lê:** `=COUNTIF(Cot_Ho_Lot, \"Lê*\")`.\n-   **Sắp xếp:** Data > Sort > Chọn cột Mã > Order: **A to Z** (Tăng dần).",
                                icon: "fa-sort-alpha-down"
                            },
                            {
                                title: "Lọc dữ liệu (Câu 7)",
                                content: "**Filter:**\n1.  **Điểm TB:** >= 5.\n2.  **Khóa:** Chọn K22, K23... (Bỏ K21) -> \"Khóa 22 trở về sau\".",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan & Thực hiện",
                                content: "**Chuẩn 6 Slide:**\n-   **Slide 1:** Tiêu đề.\n-   **Slide 3 (Mục lục):** Bắt buộc dùng **SmartArt** -> Link tới 4, 5, 6.\n-   **Setting:** Loop continuously.\n-   **Footer:** Date/Time + Slide Number + Tên.",
                                icon: "fa-tv"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1504,
                sessionId: 15,
                title: "Đề số 04: Xăng Dầu Nhớt (VLOOKUP)",
                description: "Luyện tập Đề số 04: VLOOKUP tra tên hàng và Lọc nâng cao (Custom Filter).",
                docs: [
                    { name: "Đề số 04 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 4.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_4.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 04",
                                content: "**Khác biệt cần nhớ:**\n\n1.  **Numbering:** Dạng `(1).`, `(2).`\n2.  **Right Tab:** Có Leader chấm (.......).\n3.  **Drop Cap:** Chữ N xuống 2 dòng.\n4.  **Mục lục:** 3 Cấp độ (Level 1, 2, 3).",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_04.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Size: **A4**.\n    -   Margins: Top 2cm, Bottom 2cm, Left 3cm (hoặc 2.5), Right 2cm.\n3.  **Font:** Times New Roman, 13, Single spacing.",
                                icon: "fa-save"
                            },
                            {
                                title: "Soạn thảo & Tabs (Câu 3 & 4)",
                                content: "**Chi tiết kỹ thuật:**\n\n1.  **Numbering:** Gõ `(1).` rồi cách ra để tự động nhận dạng hoặc dùng menu Numbering.\n2.  **Right Tab:** Đặt tab phải cuối dòng -> Chọn Leader số 2 (...) -> Set -> OK.\n3.  **Drop Cap:** Insert > Drop Cap > Dropped (2 dòng).",
                                icon: "fa-indent"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện:**\n\n1.  **Footer (Chân trang):** Họ tên (Trái) - Số trang (Phải).\n2.  **Mục lục:** Gán Level 1, 2, 3 -> References > Table of Contents.",
                                icon: "fa-list-alt"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 04",
                                content: "**Điểm nhấn:**\n\n1.  **VLOOKUP:** Do Bảng 2 xếp CỘT DỌC (khác các đề trước là HLOOKUP).\n2.  **IF Thuế:** Lồng ghép tính %.\n3.  **SUMIF:** Tính tổng thuế cho \"Xăng\".\n4.  **Filter:** N và SL 3000-5000.",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Hàm VLOOKUP - Tên hàng (Câu 3)",
                                content: "**Công thức:**\n`=VLOOKUP(LEFT(C4,1), $Bang_2, 2, 0)`\n\n-   **LEFT(C4,1):** Lấy ký tự đầu.\n-   **VLOOKUP:** Tra bảng dọc (Vertical).",
                                icon: "fa-key"
                            },
                            {
                                title: "Hàm IF - Thuế (Câu 4)",
                                content: "**Tính toán kết hợp:**\n`=DonGia * SL * IF(LEFT(C4,1)=\"X\", 4%, IF(LEFT(C4,1)=\"D\", 3%, 2%))`\n\n-   Tự động nhân đơn giá và số lượng rồi nhân với % thuế.",
                                icon: "fa-file-invoice-dollar"
                            },
                            {
                                title: "Thống kê & Lọc (Câu 5, 6, 7)",
                                content: "-   **Tổng thuế Xăng:** `=SUMIF(Cot_Ten, \"Xăng\", Cot_Thue)`\n-   **Sắp xếp:** Tăng dần theo Số lượng.\n-   **Lọc (Khó):** Begins with \"N\" **AND** Between 3000 and 5000.",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan & Thực hiện",
                                content: "**Chuẩn 6 Slide:**\n-   **Slide 3:** SmartArt liệt kê nội dung -> Hyperlink.\n-   **Footer:** Số trang, Họ tên.\n-   **Setting:** Loop continuously.",
                                icon: "fa-tv"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1505,
                sessionId: 15,
                title: "Đề số 05: Hội thảo & Xăng dầu (HLOOKUP)",
                description: "Luyện tập Đề số 05: HLOOKUP tra tên hàng và Định dạng Numbering (01).",
                docs: [
                    { name: "Đề số 05 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 5.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_5.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 05",
                                content: "**Khác biệt (Khó):**\n\n1.  **Format (01):** Phải Define New Number Format -> Gõ `(0)` trước số 1.\n2.  **Tab:** Căn chỉnh thời gian dùng Tab Trái + Phải.\n3.  **Drop Cap:** 2 dòng.\n4.  **Mục lục:** Cấp độ 1, 2, 3.",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_05.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Size: **A4**.\n    -   Margins: Top 2, Bottom 2, Left 3 (hoặc 2.5), Right 2cm.\n3.  **Font:** Times New Roman, 13, Single spacing.",
                                icon: "fa-save"
                            },
                            {
                                title: "Soạn thảo & Numbering (Câu 3 & 4)",
                                content: "**Kỹ thuật chi tiết:**\n\n1.  **Tạo số (01), (02):** Numbering > Define New Number Format > Number style: 1, 2, 3... > Khung Number format: Gõ thêm `(0` để thành `(01)`.\n2.  **Tab:** Đặt Tab Trái cho giờ, Tab Phải cho người phụ trách.\n3.  **Drop Cap:** Lines to drop: 2.",
                                icon: "fa-list-ol"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện:**\n\n1.  **Footer (Chân trang):** Họ tên (Trái) - Số trang (Phải).\n2.  **Mục lục:** Gán Level 1 (Phần A), Level 2 (A.1), Level 3 (A.1.1) -> Xuất mục lục.",
                                icon: "fa-list-alt"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 05",
                                content: "**Điểm nhấn:**\n\n1.  **HLOOKUP:** Lấy ký tự thứ 2 (`MID(...,2,1)`) để tra.\n2.  **IF:** Ký tự đầu là \"1\" hoặc \"2\".\n3.  **Lọc:** Mã bắt đầu bằng 2 VÀ Số lượng 3000-5000.",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Hàm HLOOKUP - Tên hàng (Câu 3)",
                                content: "**Công thức:**\n`=HLOOKUP(MID(C4, 2, 1), $Bang_2, 2, 0)`\n\n-   **MID(C4, 2, 1):** Lấy 1 ký tự từ vị trí số 2 (Ví dụ `A1B` lấy `1`).\n-   Tra bảng ngang (Horizontal).",
                                icon: "fa-key"
                            },
                            {
                                title: "Hàm IF - Thuế (Câu 4)",
                                content: "**Xử lý ký tự Text:**\n`=DonGia * SL * IF(LEFT(C4,1)=\"1\", 4%, IF(LEFT(C4,1)=\"2\", 3%, 2%))`\n\n> **Lưu ý:** \"1\" và \"2\" phải để trong ngoặc kép vì hàm LEFT trả về chuỗi văn bản.",
                                icon: "fa-file-invoice-dollar"
                            },
                            {
                                title: "Thống kê & Lọc (Câu 5, 6, 7)",
                                content: "-   **Tổng SL Xăng:** `=SUMIF(Cot_Ten, \"Xăng\", Cot_SL)`\n-   **Sắp xếp:** Tăng dần theo Số lượng.\n-   **Lọc:** Begins with \"2\" **AND** Between 3000 and 5000.",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan & Thực hiện",
                                content: "**Chuẩn 6 Slide:**\n-   **Slide 3:** SmartArt sơ đồ tư duy.\n-   **Hyperlink:** Kết nối các slide.\n-   **Setting:** Loop continuously, Footer đầy đủ.",
                                icon: "fa-tv"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1506,
                sessionId: 15,
                title: "Đề số 06: Lọc điều kiện HOẶC (OR)",
                description: "Luyện tập Đề số 06: Tab Giữa trong Word và Filter điều kiện N hoặc X.",
                docs: [
                    { name: "Đề số 06 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 6.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_6.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 06",
                                content: "**Khác biệt cần nhớ:**\n\n1.  **Tab:** Sử dụng Tab Giữa (Center Tab) cho Họ tên.\n2.  **Drop Cap:** 2 dòng.\n3.  **Mục lục:** Cấp độ 1, 2, 3.",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_06.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Size: **A4**.\n    -   Margins: Top 2, Bottom 2, Left 3 (hoặc 2.5), Right 2cm.\n3.  **Font:** Times New Roman, 13, Single spacing.",
                                icon: "fa-save"
                            },
                            {
                                title: "Soạn thảo & Tab Giữa (Câu 3 & 4)",
                                content: "**Kỹ thuật chi tiết:**\n\n1.  **Tab Giữa (Center Tab):** Đặt Tab Trái (ID) -> Đặt **Tab Giữa** (Cho Họ Tên) -> Đặt Tab Trái/Phải (Điện thoại).\n2.  **Drop Cap:** Insert > Drop Cap > Dropped (2 dòng).\n3.  **Chia cột:** Layout > Columns > Two > **Line between**.",
                                icon: "fa-indent"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện:**\n\n1.  **Footer (Chân trang):** Họ tên (Trái) - Số trang (Phải).\n2.  **Mục lục:** Gán Level 1, 2, 3 -> References > Table of Contents.",
                                icon: "fa-list-alt"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 06",
                                content: "**Điểm nhấn:**\n\n1.  **IF lồng nhau:** 3 trường hợp (N -> Nhớt, X -> Xăng, Dầu).\n2.  **HLOOKUP:** Lấy 2 ký tự GIỮA (`MID(..., 2, 2)`).\n3.  **Lọc (Khó):** Điều kiện **HOẶC (OR)**.",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Hàm IF - Tên hàng (Câu 3)",
                                content: "**Xử lý 3 trường hợp:**\n`=IF(LEFT(C4,1)=\"N\", \"Nhớt\", IF(LEFT(C4,1)=\"X\", \"Xăng\", \"Dầu\"))`\n\n-   Lưu ý thứ tự ưu tiên trong hàm IF.",
                                icon: "fa-code-branch"
                            },
                            {
                                title: "Hàm HLOOKUP - Thuế (Câu 4)",
                                content: "**Tra cứu ký tự giữa:**\n`=DonGia * SL * HLOOKUP(MID(C4, 2, 2), $Vung_Bang_2, 2, 0)`\n\n-   **MID(C4, 2, 2):** Lấy 2 ký tự từ vị trí số 2 (Ví dụ `D01TN` lấy `01`).",
                                icon: "fa-search-dollar"
                            },
                            {
                                title: "Thống kê & Lọc OR (Câu 5, 6, 7)",
                                content: "-   **Tổng Thuế:** `=SUMIF(Cot_Ten_Hang, \"Xăng\", Cot_Thue)`\n-   **Lọc OR (Quan trọng):**\n    1.  Cột Mã hàng > Text Filters > **Custom Filter**.\n    2.  Dòng 1: Begins with \"N\" -> Chọn **OR** -> Dòng 2: Begins with \"X\".\n    3.  Sau đó Lọc tiếp Số lượng >= 2000.",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan & Thực hiện",
                                content: "**Chuẩn 6 Slide:**\n-   **Slide 3:** Vẽ sơ đồ SmartArt liệt kê nội dung.\n-   **Hyperlink:** Link tới các phần chi tiết.\n-   **Setting:** Loop continuously.",
                                icon: "fa-tv"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1507,
                sessionId: 15,
                title: "Đề số 07: Linh kiện máy tính & Header đầu trang",
                description: "Luyện tập Đề số 07: Header đầu trang và đếm ký tự đại diện.",
                docs: [
                    { name: "Đề số 07 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 7.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_7.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word: Thiết lập & Định dạng (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 07",
                                content: "**Khác biệt cần nhớ:**\n\n1.  **Header (Đầu trang):** Đặt ở Top (không phải Footer).\n2.  **Drop Cap:** Xuống **4 dòng** (các đề khác thường là 2).\n3.  **Tab Chấm:** Tạo dòng kẻ chấm `......` cho Phiếu dự thi.",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thiết lập & Lưu file (Câu 1 & 2)",
                                content: "**Yêu cầu bắt buộc:**\n\n1.  **Lưu file:** `IDSV_HoVaTen_Lop_07.docx`.\n2.  **Khổ giấy & Lề:**\n    -   Size: **A4**.\n    -   Margins: Top 2, Bottom 2, Left 3 (hoặc 2.5), Right 2cm.\n3.  **Font:** Times New Roman, 13, Single spacing.",
                                icon: "fa-save"
                            },
                            {
                                title: "Soạn thảo & Tab Chấm (Câu 3 & 4)",
                                content: "**Kỹ thuật chi tiết:**\n\n1.  **Tab Chấm:** Đặt Tab Trái cuối dòng -> Chọn Leader số 2 `...` -> Set -> OK (Dùng để làm dòng kẻ điền thông tin).\n2.  **Drop Cap:** Options -> Lines to drop: **4**.\n3.  **Convert Table:** Bảng -> Text.",
                                icon: "fa-indent"
                            },
                            {
                                title: "Mục lục & Header (Câu 5 & 6)",
                                content: "**Hoàn thiện:**\n\n1.  **Header (Đầu trang):** Insert > Header (Không phải Footer).\n    -   Trái: Họ tên. Phải: Số trang.\n2.  **Mục lục:** Cấp độ 1, 2.",
                                icon: "fa-heading"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel: Hàm & Thống kê (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 07",
                                content: "**Điểm nhấn:**\n\n1.  **HLOOKUP:** Lấy 2 ký tự TRÁI (`LEFT(..., 2)`).\n2.  **Sắp xếp:** GIẢM DẦN (Largest to Smallest) -> Ngược với các đề trước.\n3.  **Đếm:** Tên bắt đầu bằng M (`\"M*\"`).",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Hàm HLOOKUP - Chuyên ngành (Câu 3)",
                                content: "**Tra cứu ký tự đầu:**\n`=HLOOKUP(LEFT(C4, 2), $Bang_2, 2, 0)`\n\n-   **LEFT(C4, 2):** Lấy 2 ký tự từ vị trí đầu (Ví dụ `ST23` lấy `ST`).",
                                icon: "fa-search"
                            },
                            {
                                title: "Hàm IF - Quy đổi (Câu 4)",
                                content: "**Xếp loại điểm:**\n`=IF(H4>=8.5, \"A\", IF(H4>=7, \"B\", IF(H4>=5.5, \"C\", IF(H4>=4, \"D\", \"F\"))))`\n\n-   Lồng ghép 4 hàm IF.",
                                icon: "fa-code-branch"
                            },
                            {
                                title: "Thống kê & Sắp xếp (Câu 5 & 6)",
                                content: "-   **Đếm tên M:** `=COUNTIF(Cot_Ten, \"M*\")`\n-   **Sắp xếp (Chú ý):** Data > Sort > Điểm TB > Order: **Largest to Smallest** (Giảm dần).",
                                icon: "fa-sort-numeric-down-alt"
                            },
                            {
                                title: "Lọc dữ liệu (Câu 7)",
                                content: "**Filter:**\n1.  **Điểm quy đổi:** Chọn \"A\".\n2.  **Chuyên ngành:** Chọn \"Công nghệ phần mềm\".",
                                icon: "fa-filter"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan & Thực hiện",
                                content: "**Chuẩn 6 Slide:**\n-   **Slide 3:** SmartArt sơ đồ tư duy.\n-   **Hyperlink:** Link tới 4, 5, 6.\n-   **Setting:** Loop continuously.",
                                icon: "fa-tv"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1508,
                sessionId: 15,
                title: "Đề số 08: Chip/RAM (Drop Cap 4 dòng)",
                description: "Luyện tập Đề số 08: Drop Cap lớn và Tra cứu HLOOKUP ký tự giữa.",
                docs: [
                    { name: "Đề số 08 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 8.pdf" },
                    { name: "Dữ liệu thực hành (Word)", file: "../TaiLieuHuongDan/Buổi 15/Text_Đề_8.docx" }
                ],
                sections: [
                    {
                        title: "1. Phần Word (3.5đ)",
                        steps: [
                            {
                                title: "Tổng quan: Yêu cầu đề 08",
                                content: "**Tương tự đề 07:**\n\n1.  **Drop Cap:** Xuống **4 dòng**.\n2.  **Giấy giới thiệu:** Căn giữa tiêu đề, dùng Tab Leader chấm.\n3.  **Bảng:** Convert to Text.",
                                icon: "fa-exclamation-circle"
                            },
                            {
                                title: "Thực hiện chi tiết",
                                content: "- **Drop Cap:** Lines to drop = 4.\n- **Mục lục:** Level 1 (Phần 1, 2), Level 2 (1.1, 1.2...).",
                                icon: "fa-file-word"
                            }
                        ]
                    },
                    {
                        title: "2. Phần Excel (4.0đ)",
                        steps: [
                            {
                                title: "Tổng quan: Logic đề 08",
                                content: "**Điểm nhấn:**\n\n1.  **HLOOKUP:** Tra ký tự giữa `MID(...,2,2)`.\n2.  **IF Thuế:** 1->4%, 2->3%, còn lại 2%.\n3.  **Lọc:** Mã 5 VÀ SL 90-200.",
                                icon: "fa-calculator"
                            },
                            {
                                title: "Các hàm cụ thể",
                                content: "- **Tên hàng:** `=HLOOKUP(MID(C4, 2, 2), $Bang_2, 2, 0)`\n- **Thuế:** `=Gia * SL * IF(LEFT(C4,1)=\"1\", 4%...)`\n- **Tổng Chip:** `=SUMIF(Cot_Ten, \"Chip\", Cot_SL)`",
                                icon: "fa-code"
                            }
                        ]
                    },
                    {
                        title: "3. Phần PowerPoint (2.5đ)",
                        steps: [
                            {
                                title: "Tổng quan & Thực hiện",
                                content: "**Chuẩn 6 Slide:**\n- Slide 3 dùng SmartArt.\n- Footer (Ngày, Tên), Loop, Hyperlink.",
                                icon: "fa-tv"
                            }
                        ]
                    }
                ]
            },
            {
                id: 1509,
                sessionId: 15,
                title: "Đề số 09: Cách mạng CN & Băng đĩa",
                description: "Luyện tập Đề số 09: Tính ngày thuê băng đĩa và Slide về IoT.",
                docs: [
                    { name: "Đề số 09 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 9.pdf" }
                ],
                steps: [
                    {
                        title: "1. Phần Excel: Thuê băng đĩa",
                        content: "**Công thức:**\n- **Số ngày thuê:** `=IF(NgayTra=NgayThue, 1, NgayTra-NgayThue)`\n- **Tiền thuê:** `=SoNgay * DonGia * SoLuong`\n- **Số lượng:** Dùng `VALUE(MID(...))` để lấy số từ mã.",
                        icon: "fa-file-excel"
                    }
                ]
            },
            {
                id: 1510,
                sessionId: 15,
                title: "Đề số 10: Quản lý công việc & Sách GK",
                description: "Luyện tập Đề số 10: Xử lý sách giáo khoa và Slide CMCN 4.0.",
                docs: [
                    { name: "Đề số 10 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 10.pdf" }
                ],
                steps: [
                    {
                        title: "1. Phần Excel",
                        content: "**Công thức:**\n- **Thành tiền:** Giảm giá 5% nếu Số lượng > 35.\n  `=SoLuong * DonGia * IF(SoLuong>35, 95%, 1)`\n- **Đơn giá:** Tra T1/T2 dựa vào 2 ký tự cuối.",
                        icon: "fa-file-excel"
                    }
                ]
            },
            {
                id: 1511,
                sessionId: 15,
                title: "Đề số 11: Ôn tập tổng hợp 1",
                description: "Đề luyện tập tổng hợp kỹ năng Word, Excel, PowerPoint.",
                docs: [
                    { name: "Đề số 11 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 11.pdf" }
                ],
                steps: [
                    {
                        title: "Tự luyện tập",
                        content: "Sinh viên mở file PDF đề bài và tự thực hiện trong 90 phút để kiểm tra kiến thức.",
                        icon: "fa-clock"
                    }
                ]
            },
            {
                id: 1512,
                sessionId: 15,
                title: "Đề số 12: Ôn tập tổng hợp 2",
                description: "Đề luyện tập tổng hợp kỹ năng Word, Excel, PowerPoint.",
                docs: [
                    { name: "Đề số 12 (PDF)", file: "../TaiLieuHuongDan/Buổi 15/Đề 12.pdf" }
                ],
                steps: [
                    {
                        title: "Tự luyện tập",
                        content: "Sinh viên mở file PDF đề bài và tự thực hiện trong 90 phút để kiểm tra kiến thức.",
                        icon: "fa-clock"
                    }
                ]
            }
        ]
    }
];
