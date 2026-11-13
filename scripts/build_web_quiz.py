# -*- coding: utf-8 -*-
"""
Build quizzes/MidtermExam/index.html with full anti-cheat, 45-min timer, 60 questions (Word & Excel),
matrix palette, auto grading, review view, and GOOGLE SHEET SYNC to:
https://docs.google.com/spreadsheets/d/1jE5pqvoSDxC_NG6VmGULdFj6_Kj5miL1mInSCx4VrQc/edit?gid=0#gid=0
via Apps Script Webhook:
https://script.google.com/macros/s/AKfycby2cPdyEuXF8Hyda1yiqgF5zFo3Ya5qhMjua2YUkyzcFZ-GdhFRGT19WgjhEgqmi-ziAA/exec
"""

import json
import os

JSON_PATH = r"I:\MY_CODE\AIUD_March2026\quizzes\MidtermExam\exam_bank.json"
OUTPUT_HTML_PATH = r"I:\MY_CODE\AIUD_March2026\quizzes\MidtermExam\index.html"

with open(JSON_PATH, "r", encoding="utf-8") as f:
    bank_data = json.load(f)

# Flatten all 60 questions in list
all_questions = []
for ch, q_list in bank_data.items():
    all_questions.extend(q_list)

bank_json_str = json.dumps(all_questions, ensure_ascii=False)

html_content = f"""<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kiểm Tra Giữa Kỳ - Tin Học Văn Phòng Nâng Cao (Word & Excel)</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <style>
        :root {{
            --primary: #1a73e8;
            --primary-hover: #1557b0;
            --primary-light: #e8f0fe;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #0f172a;
            --text-muted: #64748b;
            --border: #e2e8f0;
            --success: #16a34a;
            --error: #dc2626;
            --warning: #f59e0b;
            --radius: 12px;
        }}

        * {{ box-sizing: border-box; margin: 0; padding: 0; }}

        /* KHÓA SAO CHÉP & CHỌN VĂN BẢN TRÊN TOÀN GIAO DIỆN BÀI THI */
        *, *::before, *::after {{
            -webkit-user-select: none !important;
            -moz-user-select: none !important;
            -ms-user-select: none !important;
            user-select: none !important;
            -webkit-touch-callout: none !important;
        }}

        input, select, textarea {{
            -webkit-user-select: text !important;
            -moz-user-select: text !important;
            -ms-user-select: text !important;
            user-select: text !important;
        }}

        @media print {{
            html, body {{
                display: none !important;
                visibility: hidden !important;
            }}
        }}

        #security-toast {{
            display: none;
            position: fixed;
            top: 24px;
            left: 50%;
            transform: translateX(-50%);
            z-index: 99999999;
            background: #b91c1c;
            color: #ffffff;
            padding: 12px 24px;
            border-radius: 10px;
            font-weight: 700;
            font-size: 0.95rem;
            box-shadow: 0 10px 25px -5px rgba(185, 28, 28, 0.4);
            border: 1px solid #ef4444;
            align-items: center;
            gap: 10px;
            pointer-events: none;
            animation: slideDownFade 0.25s ease-out;
        }}

        @keyframes slideDownFade {{
            from {{ opacity: 0; transform: translate(-50%, -15px); }}
            to {{ opacity: 1; transform: translate(-50%, 0); }}
        }}

        body {{
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background-color: var(--bg);
            color: var(--text-main);
            min-height: 100vh;
            line-height: 1.5;
        }}

        .container {{
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }}

        /* Topbar */
        .topbar {{
            position: sticky;
            top: 0;
            z-index: 100;
            background: #ffffff;
            box-shadow: 0 4px 16px rgba(0,0,0,0.06);
            border-bottom: 1px solid var(--border);
            padding: 12px 0;
        }}

        .topbar-content {{
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 12px;
        }}

        .timer-badge {{
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 8px;
            background: #eff6ff;
            color: var(--primary);
            border: 1px solid #bfdbfe;
            font-weight: 800;
            font-size: 1.25rem;
            letter-spacing: 0.5px;
        }}

        .timer-badge.urgent {{
            background: #fee2e2;
            color: var(--error);
            border-color: #fca5a5;
            animation: pulse 1s infinite;
        }}

        @keyframes pulse {{
            0%, 100% {{ opacity: 1; }}
            50% {{ opacity: 0.6; }}
        }}

        .btn {{
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 0.95rem;
            font-weight: 600;
            cursor: pointer;
            border: none;
            transition: all 0.2s;
            display: inline-flex;
            align-items: center;
            gap: 6px;
            text-decoration: none;
        }}

        .btn-primary {{ background: var(--primary); color: #fff; }}
        .btn-primary:hover {{ background: var(--primary-hover); transform: translateY(-1px); }}
        .btn-secondary {{ background: #f1f5f9; color: var(--text-main); border: 1px solid var(--border); }}
        .btn-secondary:hover {{ background: #e2e8f0; }}
        .btn-danger {{ background: var(--error); color: #fff; }}
        .btn-danger:hover {{ background: #b91c1c; }}
        .btn-success {{ background: #16a34a; color: #fff; }}
        .btn-success:hover {{ background: #15803d; }}

        .btn-flag {{
            background: transparent;
            border: 1px solid transparent;
            color: #94a3b8;
            font-size: 0.85rem;
            font-weight: 600;
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            padding: 6px 12px;
            border-radius: 6px;
            transition: all 0.15s;
        }}
        .btn-flag:hover {{ background: #f1f5f9; color: var(--text-main); }}
        .btn-flag.active {{ background: #fee2e2; color: #dc2626; border-color: #fca5a5; font-weight: 700; }}

        .card {{
            background: #ffffff;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            box-shadow: 0 4px 16px rgba(0,0,0,0.04);
            padding: 24px;
            margin-bottom: 20px;
        }}

        /* Option Item */
        .option-item {{
            display: flex;
            align-items: flex-start;
            padding: 14px 16px;
            border-radius: 8px;
            border: 1px solid var(--border);
            margin-bottom: 10px;
            cursor: pointer;
            transition: all 0.15s ease;
            background: #ffffff;
        }}

        .option-item:hover {{
            border-color: var(--primary);
            background: #f8fafc;
        }}

        .option-item.selected {{
            border-color: var(--primary);
            background: rgba(26, 115, 232, 0.08);
            box-shadow: 0 0 0 1px var(--primary);
        }}

        .option-letter {{
            width: 28px;
            height: 28px;
            border-radius: 6px;
            background: #f1f5f9;
            color: var(--text-main);
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 0.9rem;
            margin-right: 12px;
            flex-shrink: 0;
            transition: all 0.15s;
        }}

        .option-item.selected .option-letter {{
            background: var(--primary);
            color: #fff;
        }}

        /* Matrix Palette */
        .palette-grid {{
            display: grid;
            grid-template-columns: repeat(6, 1fr);
            gap: 6px;
            max-height: 460px;
            overflow-y: auto;
            padding-right: 4px;
        }}

        .palette-cell {{
            height: 36px;
            border-radius: 6px;
            border: 1px solid var(--border);
            background: #f8fafc;
            color: #334155;
            font-weight: 700;
            font-size: 0.82rem;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.15s;
            position: relative;
        }}

        .palette-cell:hover {{
            border-color: var(--primary);
            background: var(--primary-light);
        }}

        .palette-cell.current {{
            border: 2px solid var(--primary);
            font-weight: 800;
            box-shadow: 0 0 0 2px rgba(26, 115, 232, 0.2);
        }}

        .palette-cell.answered {{
            background: #10b981;
            color: #ffffff;
            border-color: #059669;
        }}

        .palette-cell.flagged::after {{
            content: "🚩";
            position: absolute;
            top: -4px;
            right: -2px;
            font-size: 9px;
        }}

        /* Layout */
        .exam-layout {{
            display: grid;
            grid-template-columns: 1fr 340px;
            gap: 24px;
            margin-top: 24px;
            align-items: start;
        }}

        @media (max-width: 900px) {{
            .exam-layout {{
                grid-template-columns: 1fr;
            }}
        }}

        /* Badges */
        .badge {{
            display: inline-flex;
            align-items: center;
            padding: 4px 10px;
            border-radius: 6px;
            font-size: 0.8rem;
            font-weight: 700;
        }}
        .badge-easy {{ background: #dcfce7; color: #15803d; }}
        .badge-medium {{ background: #e0f2fe; color: #0369a1; }}
        .badge-hard {{ background: #f3e8ff; color: #7e22ce; }}

        /* Modal */
        .modal-overlay {{
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(15, 23, 42, 0.6);
            backdrop-filter: blur(4px);
            z-index: 1000;
            display: none;
            align-items: center;
            justify-content: center;
            padding: 20px;
        }}

        .modal-card {{
            background: #ffffff;
            border-radius: 16px;
            max-width: 520px;
            width: 100%;
            padding: 28px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.2);
            text-align: center;
        }}
    </style>
</head>
<body>

<div id="security-toast">
    <span>⚠️ CẢNH BÁO BẢO MẬT:</span>
    <span id="security-msg">Bạn vừa chuyển tab hoặc rời màn hình làm bài! Hệ thống đã ghi nhận vi phạm.</span>
</div>

<div id="app-wrapper">
    <!-- VIEW 1: REGISTRATION & INTRO -->
    <div id="view-intro" class="container" style="padding-top: 40px; padding-bottom: 50px;">
        <div style="max-width: 680px; margin: 0 auto;">
            <div style="text-align: center; margin-bottom: 24px;">
                <div style="font-size: 2.8rem; margin-bottom: 8px;">🎓</div>
                <h1 style="font-size: 1.75rem; font-weight: 800; color: #1e293b; margin-bottom: 6px;">BÀI THI TRẮC NGHIỆM GIỮA KỲ</h1>
                <h2 style="font-size: 1.1rem; font-weight: 600; color: var(--primary);">Học phần: Tin học văn phòng nâng cao (Word & Excel)</h2>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-top: 4px;">Khoa Công nghệ Thông tin — Đại học Đông Á</div>
            </div>

            <div class="card">
                <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid var(--border); padding-bottom: 8px; margin-bottom: 16px;">
                    <h3 style="font-size: 1.15rem; font-weight: 700; color: #0f172a; margin: 0;">
                        📋 THÔNG TIN THÍ SINH DỰ THI
                    </h3>
                    <button type="button" class="btn btn-secondary" onclick="app.openSettingsModal()" style="padding: 6px 12px; font-size: 0.82rem;">
                        ⚙️ Cấu hình Sheet
                    </button>
                </div>

                <div style="margin-bottom: 16px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.9rem;">Họ và tên thí sinh <span style="color:red;">*</span></label>
                    <input type="text" id="reg-name" placeholder="Ví dụ: Nguyễn Văn An" style="width: 100%; padding: 12px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 1rem; outline: none;">
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.9rem;">Mã số sinh viên (MSSV) <span style="color:red;">*</span></label>
                        <input type="text" id="reg-mssv" placeholder="Ví dụ: 1042301" style="width: 100%; padding: 12px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 1rem; outline: none;">
                    </div>
                    <div>
                        <label style="display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.9rem;">Lớp sinh hoạt <span style="color:red;">*</span></label>
                        <input type="text" id="reg-class" placeholder="Ví dụ: IT24M" style="width: 100%; padding: 12px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 1rem; outline: none;">
                    </div>
                </div>

                <div style="margin-bottom: 18px;">
                    <label style="display: block; font-weight: 600; margin-bottom: 6px; font-size: 0.9rem;">Chế độ làm bài</label>
                    <select id="reg-mode" style="width: 100%; padding: 12px 14px; border: 1.5px solid var(--border); border-radius: 8px; font-size: 1rem; outline: none; background: #fff;">
                        <option value="official">🏆 Thi Chính Thức Giữa Kỳ (Tự động ghi điểm lên Google Sheet)</option>
                        <option value="practice">📝 Thi Thử / Luyện Tập Trước Giờ Thi</option>
                    </select>
                </div>

                <div style="background: #f8fafc; border: 1px dashed #cbd5e1; border-radius: 8px; padding: 14px; margin-bottom: 20px; font-size: 0.88rem; color: #475569; line-height: 1.6;">
                    <strong>Quy chế khảo thí & Tự động lưu điểm:</strong>
                    <ul style="padding-left: 20px; margin-top: 6px;">
                        <li>Cấu trúc: <strong>60 câu</strong> (30 câu Word + 30 câu Excel) trong <strong>45 phút</strong>.</li>
                        <li>Kết quả nộp bài được tự động lưu vào <strong>Google Trang tính (Điểm Giữa kỳ AI Kế toán)</strong>.</li>
                        <li>Hệ thống giám sát vi phạm: khóa chuột phải, chống sao chép, tự động đếm số lần chuyển tab.</li>
                    </ul>
                </div>

                <div id="reg-error" style="display: none; color: var(--error); font-weight: 700; margin-bottom: 14px; font-size: 0.9rem;">
                    ❌ Vui lòng điền đầy đủ Họ tên, MSSV và Lớp sinh hoạt!
                </div>

                <button type="button" class="btn btn-primary" onclick="app.startExam()" style="width: 100%; justify-content: center; padding: 14px; font-size: 1.05rem;">
                    🚀 BẮT ĐẦU LÀM BÀI THI NGAY
                </button>
            </div>
        </div>
    </div>

    <!-- VIEW 2: QUIZ MAIN -->
    <div id="view-quiz" style="display: none;">
        <header class="topbar">
            <div class="container topbar-content">
                <div>
                    <div style="font-weight: 800; font-size: 1.1rem; color: #1e293b;">BÀI THI GIỮA KỲ — TIN HỌC VĂN PHÒNG NÂNG CAO</div>
                    <div style="font-size: 0.82rem; color: var(--text-muted);">
                        Thí sinh: <strong id="bar-student-name">...</strong> | MSSV: <strong id="bar-student-id">...</strong> | Lớp: <strong id="bar-student-class">...</strong>
                    </div>
                </div>

                <div style="display: flex; align-items: center; gap: 14px;">
                    <div id="timer-badge" class="timer-badge">
                        ⏱️ <span id="timer-display">45:00</span>
                    </div>
                    <button type="button" class="btn btn-danger" onclick="app.confirmSubmit()">
                        📤 Nộp Bài
                    </button>
                </div>
            </div>
        </header>

        <main class="container">
            <div class="exam-layout">
                <!-- Left: Question Content -->
                <div>
                    <div class="card" id="question-card">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; flex-wrap: wrap; gap: 8px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">Câu <span id="q-num">1</span> / 60</span>
                                <span id="q-difficulty" class="badge badge-easy">Dễ</span>
                            </div>
                            <div>
                                <button type="button" id="btn-flag" class="btn-flag" onclick="app.toggleFlag()">
                                    <span>🚩</span> <span id="flag-text">Đánh dấu xem lại</span>
                                </button>
                            </div>
                        </div>

                        <div id="q-chapter" style="font-size: 0.82rem; font-weight: 700; color: #64748b; margin-bottom: 10px; text-transform: uppercase;">
                            CHƯƠNG
                        </div>

                        <div id="q-text" style="font-size: 1.1rem; font-weight: 600; color: #0f172a; line-height: 1.6; margin-bottom: 22px;">
                            Nội dung câu hỏi đang nạp...
                        </div>

                        <div id="options-container">
                            <!-- Options injected here -->
                        </div>

                        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 24px; padding-top: 16px; border-top: 1px solid var(--border);">
                            <button type="button" class="btn btn-secondary" onclick="app.prevQuestion()" id="btn-prev">
                                ⬅️ Câu trước
                            </button>
                            <span style="font-size: 0.88rem; color: var(--text-muted);">
                                Đã làm: <strong id="stat-answered" style="color: #10b981;">0</strong> / 60 câu
                            </span>
                            <button type="button" class="btn btn-primary" onclick="app.nextQuestion()" id="btn-next">
                                Câu kế tiếp ➡️
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Right: Palette & Navigator -->
                <div>
                    <div class="card" style="position: sticky; top: 80px;">
                        <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 12px; color: #1e293b; display: flex; justify-content: space-between;">
                            <span>MỤC LỤC CÂU HỎI</span>
                            <span id="answered-badge" style="font-size: 0.8rem; color: var(--primary); font-weight: 800;">0/60</span>
                        </h4>

                        <div class="palette-grid" id="palette-grid">
                            <!-- 60 cells -->
                        </div>

                        <div style="margin-top: 16px; padding-top: 12px; border-top: 1px solid var(--border); font-size: 0.78rem; color: #64748b; display: flex; flex-direction: column; gap: 6px;">
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="width: 14px; height: 14px; border-radius: 3px; background: #10b981; display: inline-block;"></span>
                                <span>Đã trả lời</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span style="width: 14px; height: 14px; border-radius: 3px; background: #f8fafc; border: 1px solid #cbd5e1; display: inline-block;"></span>
                                <span>Chưa làm</span>
                            </div>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span>🚩</span>
                                <span>Đánh dấu xem lại</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- VIEW 3: RESULT REVIEW -->
    <div id="view-result" class="container" style="display: none; padding-top: 40px; padding-bottom: 60px;">
        <div style="max-width: 860px; margin: 0 auto;">
            <div class="card" style="text-align: center; padding: 36px 24px; margin-bottom: 28px;">
                <div style="font-size: 3.5rem; margin-bottom: 10px;">🎉</div>
                <h2 style="font-size: 1.8rem; font-weight: 800; color: #1e293b; margin-bottom: 6px;">KẾT QUẢ BÀI THI GIỮA KỲ</h2>
                <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 18px;">Học phần: Tin học văn phòng nâng cao (Word & Excel)</p>

                <!-- REAL-TIME SYNC STATUS BADGE -->
                <div id="res-sync-badge" style="margin: 0 auto 24px; padding: 12px 20px; border-radius: 10px; font-weight: 700; font-size: 0.95rem; max-width: 600px; display: flex; align-items: center; justify-content: center; gap: 8px; background: #eff6ff; color: #1d4ed8; border: 1px solid #bfdbfe;">
                    ⏳ Đang đồng bộ kết quả lên Google Trang Tính...
                </div>

                <div style="display: flex; justify-content: center; gap: 24px; flex-wrap: wrap; margin-bottom: 24px;">
                    <div style="background: #eff6ff; border: 1px solid #bfdbfe; border-radius: 12px; padding: 18px 28px; min-width: 160px;">
                        <div style="font-size: 0.85rem; color: #1e40af; font-weight: 600; text-transform: uppercase;">ĐIỂM SỐ</div>
                        <div id="res-score" style="font-size: 2.6rem; font-weight: 900; color: var(--primary);">0.0</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Thang điểm 10.0</div>
                    </div>

                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 18px 28px; min-width: 160px;">
                        <div style="font-size: 0.85rem; color: #15803d; font-weight: 600; text-transform: uppercase;">SỐ CÂU ĐÚNG</div>
                        <div id="res-correct" style="font-size: 2.6rem; font-weight: 900; color: #16a34a;">0 / 60</div>
                        <div style="font-size: 0.8rem; color: #64748b;" id="res-percent">0% chính xác</div>
                    </div>

                    <div style="background: #fef2f2; border: 1px solid #fecaca; border-radius: 12px; padding: 18px 28px; min-width: 160px;">
                        <div style="font-size: 0.85rem; color: #991b1b; font-weight: 600; text-transform: uppercase;">VI PHẠM TAB</div>
                        <div id="res-cheat" style="font-size: 2.6rem; font-weight: 900; color: var(--error);">0</div>
                        <div style="font-size: 0.8rem; color: #64748b;">Số lần rời tab</div>
                    </div>
                </div>

                <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
                    <a href="https://docs.google.com/spreadsheets/d/1jE5pqvoSDxC_NG6VmGULdFj6_Kj5miL1mInSCx4VrQc/edit?gid=0#gid=0" target="_blank" class="btn btn-success" style="font-weight: 700;">
                        📊 Mở Bảng Điểm Google Trang Tính
                    </a>
                    <button type="button" class="btn btn-primary" onclick="app.showReviewDetail()">
                        🔍 Xem Lời Giải & Giải Thích Chi Tiết
                    </button>
                    <a href="../../index.html" class="btn btn-secondary">
                        🏠 Về Trang Chủ Khóa Học
                    </a>
                </div>
            </div>

            <!-- Review Detail List -->
            <div id="review-container" style="display: none;">
                <h3 style="font-size: 1.25rem; font-weight: 800; margin-bottom: 16px; color: #1e293b;">
                    📝 CHI TIẾT TỪNG CÂU HỎI & GIẢI THÍCH ĐÁP ÁN:
                </h3>
                <div id="review-list">
                    <!-- Injected via JS -->
                </div>
            </div>
        </div>
    </div>
</div>

<!-- SUBMIT CONFIRM MODAL -->
<div id="submit-modal" class="modal-overlay">
    <div class="modal-card">
        <div style="font-size: 3rem; margin-bottom: 10px;">📤</div>
        <h3 style="font-size: 1.3rem; font-weight: 800; color: #0f172a; margin-bottom: 10px;">XÁC NHẬN NỘP BÀI THI</h3>
        <p style="color: #64748b; font-size: 0.95rem; margin-bottom: 16px;">
            Bạn có chắc chắn muốn nộp bài thi ngay bây giờ không? Điểm số sẽ được tự động ghi nhận vào Bảng điểm của Giảng viên.
        </p>

        <div style="background: #f8fafc; border-radius: 8px; padding: 12px; margin-bottom: 20px; font-size: 0.9rem; text-align: left;">
            <div>• Đã hoàn thành: <strong id="modal-answered" style="color: #10b981;">0</strong> / 60 câu</div>
            <div>• Còn bỏ trống: <strong id="modal-unanswered" style="color: #ef4444;">60</strong> câu</div>
            <div>• Đánh dấu xem lại: <strong id="modal-flagged" style="color: #f59e0b;">0</strong> câu</div>
        </div>

        <div style="display: flex; gap: 10px; justify-content: center;">
            <button type="button" class="btn btn-secondary" onclick="app.closeModal()" style="flex: 1;">
                Quay lại làm tiếp
            </button>
            <button type="button" class="btn btn-danger" onclick="app.submitExamNow()" style="flex: 1;">
                Nộp bài ngay
            </button>
        </div>
    </div>
</div>

<!-- SETTINGS MODAL -->
<div id="settings-modal" class="modal-overlay">
    <div class="modal-card" style="text-align: left;">
        <h3 style="font-size: 1.2rem; font-weight: 800; color: #0f172a; margin-bottom: 12px;">⚙️ CẤU HÌNH GOOGLE SHEET WEBHOOK</h3>
        <p style="color: #64748b; font-size: 0.88rem; margin-bottom: 14px;">
            Hệ thống đang liên kết với bảng tính: <br>
            <a href="https://docs.google.com/spreadsheets/d/1jE5pqvoSDxC_NG6VmGULdFj6_Kj5miL1mInSCx4VrQc/edit?gid=0#gid=0" target="_blank" style="color: var(--primary); font-weight: 600;">
                Điểm Giữa kỳ AI Kế toán_15.10.2026 (Google Sheets)
            </a>
        </p>

        <div style="margin-bottom: 16px;">
            <label style="display: block; font-weight: 600; font-size: 0.85rem; margin-bottom: 6px;">URL Apps Script Webhook</label>
            <input type="text" id="cfg-sheet-url" style="width: 100%; padding: 10px; border: 1.5px solid var(--border); border-radius: 6px; font-size: 0.85rem;">
        </div>

        <div style="display: flex; gap: 8px; justify-content: flex-end;">
            <button type="button" class="btn btn-secondary" onclick="app.resetDefaultSheet()">Khôi phục mặc định</button>
            <button type="button" class="btn btn-primary" onclick="app.saveSheetUrl()">Lưu cấu hình</button>
            <button type="button" class="btn btn-secondary" onclick="app.closeSettingsModal()">Đóng</button>
        </div>
    </div>
</div>

<script>
// Embedded Question Bank Fallback
const EMBEDDED_BANK = {bank_json_str};

const DEFAULT_SHEET_URL = "https://script.google.com/macros/s/AKfycby2cPdyEuXF8Hyda1yiqgF5zFo3Ya5qhMjua2YUkyzcFZ-GdhFRGT19WgjhEgqmi-ziAA/exec";

const app = {{
    questions: [],
    student: {{ name: "", mssv: "", className: "", mode: "official" }},
    currentIndex: 0,
    answers: {{}},       // qIndex -> 'A' | 'B' | 'C' | 'D'
    flags: {{}},         // qIndex -> true
    timerSeconds: 45 * 60,
    timerInterval: null,
    cheatCount: 0,
    isSubmitted: false,
    startTime: null,

    init: async function() {{
        this.setupAntiCheat();
        // Load bank
        try {{
            const res = await fetch('exam_bank.json');
            if (res.ok) {{
                const data = await res.json();
                let list = [];
                for (let k in data) {{ list.push(...data[k]); }}
                this.questions = (list.length >= 60) ? list : EMBEDDED_BANK;
            }} else {{
                this.questions = EMBEDDED_BANK;
            }}
        }} catch(e) {{
            this.questions = EMBEDDED_BANK;
        }}
    }},

    getSheetUrl: function() {{
        return localStorage.getItem('exam_sheet_url_office') || DEFAULT_SHEET_URL;
    }},

    openSettingsModal: function() {{
        document.getElementById('cfg-sheet-url').value = this.getSheetUrl();
        document.getElementById('settings-modal').style.display = 'flex';
    }},

    closeSettingsModal: function() {{
        document.getElementById('settings-modal').style.display = 'none';
    }},

    saveSheetUrl: function() {{
        const url = document.getElementById('cfg-sheet-url').value.trim();
        if (url) {{
            localStorage.setItem('exam_sheet_url_office', url);
            alert("Đã lưu URL Google Sheet thành công!");
            this.closeSettingsModal();
        }}
    }},

    resetDefaultSheet: function() {{
        localStorage.removeItem('exam_sheet_url_office');
        document.getElementById('cfg-sheet-url').value = DEFAULT_SHEET_URL;
        alert("Đã khôi phục URL Google Sheet về mặc định!");
    }},

    setupAntiCheat: function() {{
        document.addEventListener('contextmenu', e => {{
            e.preventDefault();
            this.showSecurityToast("Chuột phải đã bị vô hiệu hóa trong bài thi!");
        }});

        document.addEventListener('keydown', e => {{
            if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || (e.ctrlKey && e.key === 'u')) {{
                e.preventDefault();
                this.showSecurityToast("Thao tác phím tắt bị chặn theo quy chế khảo thí!");
            }}
        }});

        window.addEventListener('blur', () => {{
            if (!this.isSubmitted && document.getElementById('view-quiz').style.display !== 'none') {{
                this.cheatCount++;
                this.showSecurityToast(`CẢNH BÁO: Rời tab thi lần thứ ${{this.cheatCount}}! Hệ thống đã ghi nhận.`);
            }}
        }});
    }},

    showSecurityToast: function(msg) {{
        const toast = document.getElementById('security-toast');
        const msgEl = document.getElementById('security-msg');
        if (toast && msgEl) {{
            msgEl.textContent = msg;
            toast.style.display = 'flex';
            setTimeout(() => {{ toast.style.display = 'none'; }}, 3500);
        }}
    }},

    startExam: function() {{
        const name = document.getElementById('reg-name').value.trim();
        const mssv = document.getElementById('reg-mssv').value.trim();
        const cls = document.getElementById('reg-class').value.trim();
        const mode = document.getElementById('reg-mode').value;
        const err = document.getElementById('reg-error');

        if (!name || !mssv || !cls) {{
            err.style.display = 'block';
            return;
        }}
        err.style.display = 'none';

        this.student = {{ name, mssv, className: cls, mode }};
        this.startTime = new Date();

        document.getElementById('bar-student-name').textContent = name;
        document.getElementById('bar-student-id').textContent = mssv;
        document.getElementById('bar-student-class').textContent = cls;

        document.getElementById('view-intro').style.display = 'none';
        document.getElementById('view-quiz').style.display = 'block';

        this.renderPalette();
        this.renderCurrentQuestion();
        this.startTimer();
    }},

    renderPalette: function() {{
        const grid = document.getElementById('palette-grid');
        grid.innerHTML = '';
        for (let i = 0; i < this.questions.length; i++) {{
            const cell = document.createElement('div');
            cell.className = 'palette-cell' + (i === this.currentIndex ? ' current' : '');
            cell.textContent = i + 1;
            cell.id = `palette-cell-${{i}}`;
            cell.onclick = () => this.goToQuestion(i);
            grid.appendChild(cell);
        }}
    }},

    updatePaletteStatus: function(idx) {{
        const cell = document.getElementById(`palette-cell-${{idx}}`);
        if (!cell) return;

        cell.className = 'palette-cell';
        if (idx === this.currentIndex) cell.classList.add('current');
        if (this.answers[idx]) cell.classList.add('answered');
        if (this.flags[idx]) cell.classList.add('flagged');

        const totalAns = Object.keys(this.answers).length;
        document.getElementById('stat-answered').textContent = totalAns;
        document.getElementById('answered-badge').textContent = `${{totalAns}}/${{this.questions.length}}`;
    }},

    renderCurrentQuestion: function() {{
        const q = this.questions[this.currentIndex];
        if (!q) return;

        document.getElementById('q-num').textContent = this.currentIndex + 1;
        document.getElementById('q-chapter').textContent = q.chapterName || `Chương ${{q.chapter}}`;
        document.getElementById('q-text').textContent = q.question;

        const diffEl = document.getElementById('q-difficulty');
        diffEl.textContent = q.difficulty || "Trung bình";
        diffEl.className = 'badge ' + (q.difficulty === 'Dễ' ? 'badge-easy' : (q.difficulty === 'Khá' ? 'badge-hard' : 'badge-medium'));

        const flagBtn = document.getElementById('btn-flag');
        const flagText = document.getElementById('flag-text');
        if (this.flags[this.currentIndex]) {{
            flagBtn.classList.add('active');
            flagText.textContent = "Đã đánh dấu xem lại";
        }} else {{
            flagBtn.classList.remove('active');
            flagText.textContent = "Đánh dấu xem lại";
        }}

        const container = document.getElementById('options-container');
        container.innerHTML = '';
        const userSelected = this.answers[this.currentIndex];

        q.options.forEach(opt => {{
            const optDiv = document.createElement('div');
            optDiv.className = 'option-item' + (userSelected === opt.id ? ' selected' : '');
            optDiv.onclick = () => this.selectOption(opt.id);

            optDiv.innerHTML = `
                <div class="option-letter">${{opt.id}}</div>
                <div style="font-size: 1rem; color: #1e293b; line-height: 1.5; flex: 1;">${{opt.text}}</div>
            `;
            container.appendChild(optDiv);
        }});

        document.getElementById('btn-prev').disabled = (this.currentIndex === 0);
        document.getElementById('btn-next').textContent = (this.currentIndex === this.questions.length - 1) ? "Câu cuối 🏁" : "Câu kế tiếp ➡️";

        for (let i = 0; i < this.questions.length; i++) {{
            this.updatePaletteStatus(i);
        }}
    }},

    selectOption: function(optId) {{
        this.answers[this.currentIndex] = optId;
        this.renderCurrentQuestion();
    }},

    toggleFlag: function() {{
        this.flags[this.currentIndex] = !this.flags[this.currentIndex];
        this.renderCurrentQuestion();
    }},

    nextQuestion: function() {{
        if (this.currentIndex < this.questions.length - 1) {{
            this.currentIndex++;
            this.renderCurrentQuestion();
        }}
    }},

    prevQuestion: function() {{
        if (this.currentIndex > 0) {{
            this.currentIndex--;
            this.renderCurrentQuestion();
        }}
    }},

    goToQuestion: function(idx) {{
        this.currentIndex = idx;
        this.renderCurrentQuestion();
    }},

    startTimer: function() {{
        const display = document.getElementById('timer-display');
        const badge = document.getElementById('timer-badge');

        this.timerInterval = setInterval(() => {{
            if (this.timerSeconds <= 0) {{
                clearInterval(this.timerInterval);
                alert("⏰ Đã hết thời gian làm bài 45 phút! Hệ thống đang tự động nộp bài.");
                this.submitExamNow();
                return;
            }}

            this.timerSeconds--;
            const mins = Math.floor(this.timerSeconds / 60);
            const secs = this.timerSeconds % 60;
            display.textContent = `${{mins.toString().padStart(2, '0')}}:${{secs.toString().padStart(2, '0')}}`;

            if (this.timerSeconds <= 300) {{
                badge.classList.add('urgent');
            }}
        }}, 1000);
    }},

    confirmSubmit: function() {{
        const total = this.questions.length;
        const ans = Object.keys(this.answers).length;
        const unans = total - ans;
        const flagged = Object.values(this.flags).filter(Boolean).length;

        document.getElementById('modal-answered').textContent = ans;
        document.getElementById('modal-unanswered').textContent = unans;
        document.getElementById('modal-flagged').textContent = flagged;

        document.getElementById('submit-modal').style.display = 'flex';
    }},

    closeModal: function() {{
        document.getElementById('submit-modal').style.display = 'none';
    }},

    submitExamNow: function() {{
        this.closeModal();
        clearInterval(this.timerInterval);
        this.isSubmitted = true;
        const endTime = new Date();

        // Calculate score
        let correctCount = 0;
        this.questions.forEach((q, idx) => {{
            if (this.answers[idx] === q.answer) {{
                correctCount++;
            }}
        }});

        const totalQ = this.questions.length;
        const score = ((correctCount / totalQ) * 10).toFixed(2);
        const percent = Math.round((correctCount / totalQ) * 100);

        // Time spent calculation
        const timeSpentSec = (45 * 60) - this.timerSeconds;
        const spentMin = Math.floor(timeSpentSec / 60);
        const spentSec = timeSpentSec % 60;
        const timeSpentText = `${{spentMin}} phút ${{spentSec}} giây`;

        // Update UI results
        document.getElementById('res-score').textContent = score;
        document.getElementById('res-correct').textContent = `${{correctCount}} / ${{totalQ}}`;
        document.getElementById('res-percent').textContent = `${{percent}}% chính xác`;
        document.getElementById('res-cheat').textContent = this.cheatCount;

        document.getElementById('view-quiz').style.display = 'none';
        document.getElementById('view-result').style.display = 'block';

        // ---------------------------------------------------------
        // ĐỒNG BỘ KẾT QUẢ LÊN GOOGLE TRANG TÍNH (APPS SCRIPT WEBHOOK)
        // ---------------------------------------------------------
        const syncBadge = document.getElementById('res-sync-badge');
        syncBadge.style.background = '#eff6ff';
        syncBadge.style.color = '#1d4ed8';
        syncBadge.style.border = '1px solid #bfdbfe';
        syncBadge.innerHTML = '<span style=\"font-size:1.2rem;\">⏳</span> Đang đồng bộ điểm số lên Google Trang Tính (Điểm Giữa kỳ AI Kế toán)...';

        const payload = {{
            submitTime: endTime.toLocaleString('vi-VN'),
            fullName: this.student.name,
            studentId: this.student.mssv,
            className: this.student.className,
            attemptNumber: 1,
            score10: Number(score),
            correctCount: correctCount,
            totalQuestions: totalQ,
            timeSpent: timeSpentText,
            tabSwitches: this.cheatCount,
            summaryText: `${{correctCount}}/${{totalQ}} câu (${{percent}}%)`
        }};

        const targetUrl = this.getSheetUrl();
        fetch(targetUrl, {{
            method: 'POST',
            mode: 'no-cors',
            headers: {{ 'Content-Type': 'text/plain;charset=utf-8' }},
            body: JSON.stringify(payload)
        }}).then(() => {{
            syncBadge.style.background = '#f0fdf4';
            syncBadge.style.color = '#15803d';
            syncBadge.style.border = '1px solid #bbf7d0';
            syncBadge.innerHTML = '<span style=\"font-size:1.2rem;\">✅</span> <strong>Đã ghi nhận điểm số vào Google Trang tính thành công!</strong> (Bảng điểm đã được cập nhật)';
        }}).catch((err) => {{
            syncBadge.style.background = '#fef2f2';
            syncBadge.style.color = '#b91c1c';
            syncBadge.style.border = '1px solid #fecaca';
            syncBadge.innerHTML = '⚠️ Không thể gửi lên Google Sheet trực tiếp. Kết quả đã được lưu an toàn tại máy.';
        }});
    }},

    showReviewDetail: function() {{
        const container = document.getElementById('review-container');
        const list = document.getElementById('review-list');
        list.innerHTML = '';

        this.questions.forEach((q, idx) => {{
            const userAns = this.answers[idx] || "Chưa trả lời";
            const isCorrect = (userAns === q.answer);

            const card = document.createElement('div');
            card.className = 'card';
            card.style.borderLeft = isCorrect ? '5px solid #10b981' : '5px solid #ef4444';
            card.style.marginBottom = '14px';

            let optionsHtml = '';
            q.options.forEach(opt => {{
                let style = 'padding: 8px 12px; margin-bottom: 6px; border-radius: 6px; font-size: 0.92rem; border: 1px solid var(--border);';
                if (opt.id === q.answer) {{
                    style += ' background: #dcfce7; border-color: #10b981; font-weight: bold; color: #15803d;';
                }} else if (opt.id === userAns && !isCorrect) {{
                    style += ' background: #fee2e2; border-color: #ef4444; color: #b91c1c; font-weight: bold;';
                }} else {{
                    style += ' background: #f8fafc; color: #475569;';
                }}

                optionsHtml += `<div style="${{style}}"><strong>${{opt.id}}.</strong> ${{opt.text}}</div>`;
            }});

            card.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <span style="font-weight: 800; color: #0f172a;">Câu ${{idx + 1}}:</span>
                    <span class="badge ${{isCorrect ? 'badge-easy' : 'badge-hard'}}" style="background: ${{isCorrect ? '#dcfce7' : '#fee2e2'}}; color: ${{isCorrect ? '#15803d' : '#b91c1c'}};">
                        ${{isCorrect ? '✅ ĐÚNG' : '❌ SAI'}}
                    </span>
                </div>
                <div style="font-size: 0.98rem; font-weight: 600; margin-bottom: 12px; color: #1e293b;">${{q.question}}</div>
                <div style="margin-bottom: 12px;">${{optionsHtml}}</div>
                <div style="background: #f1f5f9; padding: 10px 14px; border-radius: 6px; font-size: 0.85rem; color: #334155; line-height: 1.5;">
                    💡 <strong>Giải thích:</strong> ${{q.explanation}}
                </div>
            `;
            list.appendChild(card);
        }});

        container.style.display = 'block';
        container.scrollIntoView({{ behavior: 'smooth' }});
    }}
}};

window.addEventListener('DOMContentLoaded', () => {{
    app.init();
}});
</script>
</body>
</html>
"""

with open(OUTPUT_HTML_PATH, "w", encoding="utf-8") as f:
    f.write(html_content)

print(f"Đã tạo thành công Web thi trắc nghiệm kết nối Google Sheet: {OUTPUT_HTML_PATH}")
