# -*- coding: utf-8 -*-
"""
Script to generate:
1. exam_bank.json (60 multiple-choice questions for Word & Excel: 30 Word + 30 Excel)
2. Word_Excel_Midterm.csv (compatible with Quiz CSV format)
3. 3 Practical exam sets (De 01, De 02, De 03) and detailed rubric
4. docs/kiem_tra_giua_ky.md (modeled after Machine Learning midterm exam)
5. quizzes/MidtermExam/index.html (standalone exam app)
"""

import os
import json
import csv

# -------------------------------------------------------------
# 1. DEFINE 60 QUESTIONS (30 WORD + 30 EXCEL)
# -------------------------------------------------------------

QUESTIONS = [
    # ==================== PHẦN 1: MICROSOFT WORD (30 CÂU) ====================
    # Bài 1: Định dạng văn bản & Thể thức (Câu 1 - 5)
    {
        "id": "W01",
        "chapter": 1,
        "chapterName": "Word - Bài 1: Định dạng văn bản & Thể thức",
        "difficulty": "Dễ",
        "question": "Theo tài liệu hướng dẫn và quy chuẩn thể thức văn bản hành chính hiện hành (Nghị định 30/2020/NĐ-CP), khoảng cách canh lề chuẩn cho trang giấy A4 (hướng đứng) là bao nhiêu?",
        "options": [
            {"id": "A", "text": "Top: 1.5 cm, Bottom: 1.5 cm, Left: 2.0 cm, Right: 1.5 cm"},
            {"id": "B", "text": "Top: 2.0 cm, Bottom: 2.0 cm, Left: 3.0 cm (hoặc 2.5 cm), Right: 2.0 cm"},
            {"id": "C", "text": "Top: 3.0 cm, Bottom: 3.0 cm, Left: 3.0 cm, Right: 3.0 cm"},
            {"id": "D", "text": "Top: 2.5 cm, Bottom: 2.5 cm, Left: 2.0 cm, Right: 2.5 cm"}
        ],
        "answer": "B",
        "explanation": "Quy chuẩn thể thức văn bản hành chính quy định lề trang A4: lề trên (Top) 2cm, lề dưới (Bottom) 2cm, lề trái (Left) 2.5 - 3cm (để đóng gáy tài liệu), lề phải (Right) 2cm."
    },
    {
        "id": "W02",
        "chapter": 1,
        "chapterName": "Word - Bài 1: Định dạng văn bản & Thể thức",
        "difficulty": "Dễ",
        "question": "Để chuyển đổi đơn vị đo kích thước trong Microsoft Word từ Inches sang Centimeters, người dùng thực hiện thao tác nào sau đây?",
        "options": [
            {"id": "A", "text": "Vào File > Options > Proofing > chọn Centimeters"},
            {"id": "B", "text": "Vào View > Show > Units > chọn Centimeters"},
            {"id": "C", "text": "Vào File > Options > Advanced > tại mục Display (Show measurements in units of: Centimeters)"},
            {"id": "D", "text": "Vào Page Layout > Margins > Custom Units > Centimeters"}
        ],
        "answer": "C",
        "explanation": "Thao tác chuẩn trong Word: Vào menu File > chọn Options > chọn mục Advanced > cuộn xuống nhóm Display > tại mục 'Show measurements in units of' chọn Centimeters."
    },
    {
        "id": "W03",
        "chapter": 1,
        "chapterName": "Word - Bài 1: Định dạng văn bản & Thể thức",
        "difficulty": "Dễ",
        "question": "Để hiển thị thanh thước đo (Ruler) hỗ trợ căn chỉnh lề và đặt Tabstop trong Word, thao tác đúng là gì?",
        "options": [
            {"id": "A", "text": "Vào thẻ Home > nhóm Paragraph > chọn Ruler"},
            {"id": "B", "text": "Vào thẻ View > nhóm Show > đánh dấu chọn ô Ruler"},
            {"id": "C", "text": "Vào thẻ Page Layout > nhóm Page Setup > chọn Ruler"},
            {"id": "D", "text": "Vào thẻ Insert > nhóm Text > chọn Ruler"}
        ],
        "answer": "B",
        "explanation": "Để bật/tắt thước đo: Chọn thẻ View > tại nhóm Show > tích chọn vào hộp kiểm Ruler."
    },
    {
        "id": "W04",
        "chapter": 1,
        "chapterName": "Word - Bài 1: Định dạng văn bản & Thể thức",
        "difficulty": "Trung bình",
        "question": "Để định dạng phông chữ, cỡ chữ, khoảng cách đoạn và dòng một cách đồng bộ và chuyên nghiệp cho toàn bộ văn bản chuẩn, người dùng nên thực hiện tùy biến (Modify) kiểu nào sau đây?",
        "options": [
            {"id": "A", "text": "Thẻ Home > nhấp chuột phải vào Style Normal > chọn Modify"},
            {"id": "B", "text": "Thẻ Home > nhấp chuột phải vào Style Title > chọn Modify"},
            {"id": "C", "text": "Thẻ Insert > chọn Quick Parts > Modify Default"},
            {"id": "D", "text": "Thẻ Design > chọn Document Formatting > Reset"}
        ],
        "answer": "A",
        "explanation": "Style Normal là kiểu định dạng gốc của toàn bộ văn bản thường. Khi chỉnh sửa Modify Normal (Font Times New Roman 13pt, Before/After 6pt, Line spacing 1.5 lines), mọi đoạn văn bản mặc định sẽ tự động cập nhật đồng bộ."
    },
    {
        "id": "W05",
        "chapter": 1,
        "chapterName": "Word - Bài 1: Định dạng văn bản & Thể thức",
        "difficulty": "Dễ",
        "question": "Tổ hợp phím tắt nào được sử dụng để thiết lập khoảng cách giãn dòng (Line Spacing) là 1.5 lines cho đoạn văn bản đang chọn?",
        "options": [
            {"id": "A", "text": "Ctrl + 1"},
            {"id": "B", "text": "Ctrl + 2"},
            {"id": "C", "text": "Ctrl + 5"},
            {"id": "D", "text": "Ctrl + Shift + L"}
        ],
        "answer": "C",
        "explanation": "Trong Word: Ctrl + 1 là giãn dòng đơn (Single), Ctrl + 2 là giãn dòng đôi (Double), và Ctrl + 5 là giãn dòng 1.5 lines."
    },

    # Bài 2: Table (Bảng biểu) (Câu 6 - 8)
    {
        "id": "W06",
        "chapter": 2,
        "chapterName": "Word - Bài 2: Table (Bảng biểu)",
        "difficulty": "Dễ",
        "question": "Trong Microsoft Word, để gộp nhiều ô liền kề trong bảng thành một ô duy nhất, người dùng bôi đen các ô đó và chọn thao tác nào?",
        "options": [
            {"id": "A", "text": "Table Tools Layout > nhóm Merge > Merge Cells"},
            {"id": "B", "text": "Table Tools Layout > nhóm Merge > Split Cells"},
            {"id": "C", "text": "Table Tools Design > Table Styles > Combine"},
            {"id": "D", "text": "Home > Alignment > Merge & Center"}
        ],
        "answer": "A",
        "explanation": "Chọn các ô cần gộp trong bảng > vào thẻ ngữ cảnh Layout (dưới Table Tools) > tại nhóm Merge chọn nút Merge Cells."
    },
    {
        "id": "W07",
        "chapter": 2,
        "chapterName": "Word - Bài 2: Table (Bảng biểu)",
        "difficulty": "Trung bình",
        "question": "Khi bảng biểu có nhiều dòng kéo dài sang các trang tiếp theo, làm thế nào để dòng tiêu đề (Header row) tự động lặp lại ở đầu mỗi trang?",
        "options": [
            {"id": "A", "text": "Sao chép dòng tiêu đề và dán thủ công vào đầu mỗi trang mới"},
            {"id": "B", "text": "Chọn dòng tiêu đề > Table Tools Layout > nhóm Data > chọn Repeat Header Rows"},
            {"id": "C", "text": "Vào Page Setup > Sheet > chọn Rows to repeat at top"},
            {"id": "D", "text": "Chọn bảng > chuột phải chọn Table Properties > Row > bỏ chọn Allow row to break across pages"}
        ],
        "answer": "B",
        "explanation": "Chọn dòng tiêu đề đầu tiên của bảng > vào thẻ Table Tools Layout > tại nhóm Data > nhấp chọn tính năng 'Repeat Header Rows'."
    },
    {
        "id": "W08",
        "chapter": 2,
        "chapterName": "Word - Bài 2: Table (Bảng biểu)",
        "difficulty": "Trung bình",
        "question": "Để chuyển đổi toàn bộ bảng biểu thành các đoạn văn bản phân cách nhau bằng dấu Tab hoặc dấu phẩy (Commas), người dùng sử dụng tính năng nào?",
        "options": [
            {"id": "A", "text": "Table Tools Layout > nhóm Data > Convert to Text"},
            {"id": "B", "text": "Table Tools Design > Export > Plain Text"},
            {"id": "C", "text": "Thẻ Home > Clear All Formatting"},
            {"id": "D", "text": "Thẻ Insert > Text Box > Convert Table"}
        ],
        "answer": "A",
        "explanation": "Chọn toàn bộ bảng > Table Tools Layout > nhóm Data > chọn 'Convert to Text' > chọn ký tự phân cách (Tabs, Commas, hoặc ký tự khác) > OK."
    },

    # Bài 3: Tabstop (Câu 9 - 11)
    {
        "id": "W09",
        "chapter": 3,
        "chapterName": "Word - Bài 3: Tabstop",
        "difficulty": "Dễ",
        "question": "Khi đang soạn thảo văn bản bên trong một ô của Bảng (Table), tổ hợp phím nào dùng để di chuyển con trỏ đến vị trí điểm dừng Tab kế tiếp?",
        "options": [
            {"id": "A", "text": "Nhấn phím Tab"},
            {"id": "B", "text": "Nhấn tổ hợp phím Shift + Tab"},
            {"id": "C", "text": "Nhấn tổ hợp phím Ctrl + Tab"},
            {"id": "D", "text": "Nhấn tổ hợp phím Alt + Tab"}
        ],
        "answer": "C",
        "explanation": "Trong bảng của Word, nhấn phím Tab thông thường sẽ nhảy sang ô tiếp theo. Muốn tạo bước nhảy Tabstop bên trong ô bảng, bắt buộc phải dùng Ctrl + Tab."
    },
    {
        "id": "W10",
        "chapter": 3,
        "chapterName": "Word - Bài 3: Tabstop",
        "difficulty": "Trung bình",
        "question": "Điểm dừng Tab thập phân (Decimal Tab) trên thanh thước của Word có công dụng chính là gì?",
        "options": [
            {"id": "A", "text": "Căn lề trái cho các chuỗi ký tự số"},
            {"id": "B", "text": "Căn lề giữa cho các đoạn văn bản có chứa số"},
            {"id": "C", "text": "Căn thẳng hàng các chữ số dựa theo vị trí dấu chấm hoặc dấu phẩy thập phân"},
            {"id": "D", "text": "Tự động làm tròn số thập phân về số nguyên gần nhất"}
        ],
        "answer": "C",
        "explanation": "Decimal Tab được thiết kế chuyên biệt để căn chỉnh các con số có phần thập phân thẳng hàng nhau theo dấu phân cách thập phân (dấu chấm hoặc dấu phẩy)."
    },
    {
        "id": "W11",
        "chapter": 3,
        "chapterName": "Word - Bài 3: Tabstop",
        "difficulty": "Dễ",
        "question": "Để thiết lập đường chấm chấm tự động (...........) khi nhấn phím Tab tạo các biểu mẫu giấy tờ, người dùng mở hộp thoại Tabs và chọn mục nào?",
        "options": [
            {"id": "A", "text": "Alignment: Right"},
            {"id": "B", "text": "Leader: kiểu số 2 (.......)"},
            {"id": "C", "text": "Default tab stops: 2 cm"},
            {"id": "D", "text": "Tab stop position: Clear All"}
        ],
        "answer": "B",
        "explanation": "Trong hộp thoại Tabs: chọn vị trí Tab cần đặt > tại mục Leader chọn kiểu 2 (.......), 3 (-------) hoặc 4 (_______) rồi bấm nút Set."
    },

    # Bài 4: Tạo ngắt - Page Break & Section Break (Câu 12 - 14)
    {
        "id": "W12",
        "chapter": 4,
        "chapterName": "Word - Bài 4: Tạo ngắt (Page Break & Section Break)",
        "difficulty": "Dễ",
        "question": "Tổ hợp phím tắt thông dụng nhất để thực hiện ngắt trang cưỡng bức (Page Break) trong Microsoft Word là gì?",
        "options": [
            {"id": "A", "text": "Shift + Enter"},
            {"id": "B", "text": "Ctrl + Enter"},
            {"id": "C", "text": "Alt + Enter"},
            {"id": "D", "text": "Ctrl + Shift + Enter"}
        ],
        "answer": "B",
        "explanation": "Ctrl + Enter dùng để chèn dấu ngắt trang (Page Break), trong khi Shift + Enter là ngắt dòng cùng đoạn (Line Break)."
    },
    {
        "id": "W13",
        "chapter": 4,
        "chapterName": "Word - Bài 4: Tạo ngắt (Page Break & Section Break)",
        "difficulty": "Trung bình",
        "question": "Sự khác biệt căn bản giữa Ngắt trang (Page Break) và Ngắt phân đoạn (Section Break - Next Page) là gì?",
        "options": [
            {"id": "A", "text": "Page Break có thể xoay hướng giấy độc lập, còn Section Break thì không"},
            {"id": "B", "text": "Page Break chỉ chuyển văn bản sang trang mới nhưng vẫn chung định dạng lề, hướng giấy và Header/Footer; Section Break cho phép thiết lập định dạng trang, hướng giấy và Header/Footer hoàn toàn độc lập"},
            {"id": "C", "text": "Section Break chỉ dùng khi văn bản có bảng biểu"},
            {"id": "D", "text": "Không có điểm khác biệt, cả hai lệnh cho kết quả hoàn toàn giống nhau"}
        ],
        "answer": "B",
        "explanation": "Section Break chia văn bản thành các phân đoạn (sections) độc lập, cho phép mỗi section có hướng giấy riêng (ngang/dọc), lề trang riêng, cột riêng và tiêu đề đầu/chân trang khác nhau."
    },
    {
        "id": "W14",
        "chapter": 4,
        "chapterName": "Word - Bài 4: Tạo ngắt (Page Break & Section Break)",
        "difficulty": "Khá",
        "question": "Trong một tài liệu gồm nhiều trang dọc (Portrait), người dùng muốn chèn một trang phụ lục có bảng số liệu lớn đặt theo hướng ngang (Landscape), sau đó các trang sau lại trở về hướng dọc. Thao tác đúng là gì?",
        "options": [
            {"id": "A", "text": "Chèn Page Break ở đầu và cuối trang phụ lục rồi đổi Orientation"},
            {"id": "B", "text": "Chèn Section Break (Next Page) ở trước trang phụ lục và ở cuối trang phụ lục, sau đó tại trang phụ lục chọn Orientation: Landscape"},
            {"id": "C", "text": "Chèn Section Break (Continuous) rồi thu nhỏ bảng dữ liệu"},
            {"id": "D", "text": "Chụp ảnh bảng số liệu rồi xoay ảnh 90 độ"}
        ],
        "answer": "B",
        "explanation": "Để cô lập trang nằm ngang giữa các trang dọc, cần tạo Section Break (Next Page) trước và sau trang đó. Khi đó thay đổi Orientation sang Landscape chỉ tác động duy nhất lên Section chứa trang phụ lục."
    },

    # Bài 5 & 6: Multilevel List & Styles (Câu 15 - 18)
    {
        "id": "W15",
        "chapter": 5,
        "chapterName": "Word - Bài 5: Multilevel List & Styles",
        "difficulty": "Dễ",
        "question": "Tính năng Multilevel List trong Word thường được ứng dụng hiệu quả nhất cho mục đích nào sau đây?",
        "options": [
            {"id": "A", "text": "Tạo danh mục các hình ảnh minh họa"},
            {"id": "B", "text": "Tạo cấu trúc danh sách đánh số nhiều cấp (như Chương 1 -> 1.1 -> 1.1.1)"},
            {"id": "C", "text": "Tạo hiệu ứng chữ nghệ thuật nhiều màu"},
            {"id": "D", "text": "Tự động dịch văn bản sang nhiều ngôn ngữ"}
        ],
        "answer": "B",
        "explanation": "Multilevel List dùng để tạo danh sách phân cấp nhiều tầng (Level 1, Level 2, Level 3...) có tính logic và thứ tự tự động cho đề mục tài liệu."
    },
    {
        "id": "W16",
        "chapter": 5,
        "chapterName": "Word - Bài 5: Multilevel List & Styles",
        "difficulty": "Khá",
        "question": "Để danh sách đa cấp Multilevel List liên kết chặt chẽ với các tiêu đề mục lục tự động, tại cửa sổ 'Define new Multilevel list', người dùng bắt buộc phải thiết lập mục nào?",
        "options": [
            {"id": "A", "text": "Nhấn nút 'More >>' và tại mục 'Link level to style' chọn Heading 1, Heading 2... tương ứng với từng cấp độ"},
            {"id": "B", "text": "Tại mục 'Number style for this level' chọn kiểu bullet hình tròn"},
            {"id": "C", "text": "Tích chọn ô 'Legal style numbering'"},
            {"id": "D", "text": "Chọn mục 'Follow number with: Nothing'"}
        ],
        "answer": "A",
        "explanation": "Trong hộp thoại Define new Multilevel list, nhấn nút 'More >>' và gắn từng Level với Heading Style tương ứng (Level 1 link to Heading 1, Level 2 link to Heading 2...). Đây là chìa khóa để tạo mục lục tự động chuẩn."
    },
    {
        "id": "W17",
        "chapter": 5,
        "chapterName": "Word - Bài 5: Multilevel List & Styles",
        "difficulty": "Dễ",
        "question": "Khi đang soạn thảo một danh sách Multilevel List, để hạ một mục từ cấp 1 xuống cấp 2 (thụt vào trong), người dùng thực hiện thao tác nào?",
        "options": [
            {"id": "A", "text": "Nhấn phím Tab (hoặc nhấp nút Increase Indent)"},
            {"id": "B", "text": "Nhấn tổ hợp phím Shift + Tab"},
            {"id": "C", "text": "Nhấn phím Backspace"},
            {"id": "D", "text": "Nhấn phím Enter hai lần"}
        ],
        "answer": "A",
        "explanation": "Nhấn phím Tab (hoặc nút Increase Indent trên Ribbon) sẽ hạ cấp dòng mục xuống một bậc. Ngược lại, nhấn Shift + Tab (Decrease Indent) sẽ nâng cấp mục lên một bậc."
    },
    {
        "id": "W18",
        "chapter": 6,
        "chapterName": "Word - Bài 6: Quản lý Styles & Heading",
        "difficulty": "Trung bình",
        "question": "Lợi ích lớn nhất của việc sử dụng các Heading Styles (Heading 1, Heading 2, Heading 3) có sẵn của Microsoft Word là gì?",
        "options": [
            {"id": "A", "text": "Giúp văn bản có dung lượng file nhẹ hơn"},
            {"id": "B", "text": "Tự động hóa việc tạo mục lục nội dung và điều hướng nhanh tài liệu qua Navigation Pane"},
            {"id": "C", "text": "Bảo vệ file không bị nhiễm virus"},
            {"id": "D", "text": "Bắt buộc người xem phải có mật khẩu mới đọc được"}
        ],
        "answer": "B",
        "explanation": "Heading Styles cung cấp cấu trúc ngữ nghĩa cho tài liệu, giúp Word tự động tạo bảng mục lục (Table of Contents), sơ đồ tài liệu trong Navigation Pane và tạo liên kết chéo dễ dàng."
    },

    # Bài 7: Caption & Mục lục tự động (Câu 19 - 22)
    {
        "id": "W19",
        "chapter": 7,
        "chapterName": "Word - Bài 7: Caption & Mục lục tự động",
        "difficulty": "Dễ",
        "question": "Để gắn nhãn chú thích cho một hình ảnh hoặc bảng biểu (ví dụ: 'Hình 1.1: Sơ đồ kiến trúc'), người dùng chọn đối tượng và sử dụng tính năng nào?",
        "options": [
            {"id": "A", "text": "Thẻ Insert > nhóm Text > Text Box"},
            {"id": "B", "text": "Thẻ References > nhóm Captions > Insert Caption"},
            {"id": "C", "text": "Thẻ Review > nhóm Comments > New Comment"},
            {"id": "D", "text": "Thẻ Home > nhóm Font > Subscript"}
        ],
        "answer": "B",
        "explanation": "Vào thẻ References > tại nhóm Captions chọn 'Insert Caption'. Tại đây có thể tạo nhãn mới (New Label) như 'Hình' hoặc 'Bảng'."
    },
    {
        "id": "W20",
        "chapter": 7,
        "chapterName": "Word - Bài 7: Caption & Mục lục tự động",
        "difficulty": "Dễ",
        "question": "Để chèn bảng Mục lục nội dung tự động dựa trên các tiêu đề đã gắn Heading trong tài liệu, thao tác đúng là gì?",
        "options": [
            {"id": "A", "text": "Thẻ References > nhóm Table of Contents > Table of Contents > chọn mẫu mục lục"},
            {"id": "B", "text": "Thẻ Insert > nhóm Links > Bookmark"},
            {"id": "C", "text": "Thẻ Page Layout > Page Setup > Index"},
            {"id": "D", "text": "Thẻ View > Views > Outline"}
        ],
        "answer": "A",
        "explanation": "Đặt con trỏ tại vị trí cần đặt mục lục > Thẻ References > Table of Contents > chọn một mẫu Automatic Table có sẵn hoặc chọn Custom Table of Contents."
    },
    {
        "id": "W21",
        "chapter": 7,
        "chapterName": "Word - Bài 7: Caption & Mục lục tự động",
        "difficulty": "Trung bình",
        "question": "Sau khi thêm nội dung mới hoặc chỉnh sửa tiêu đề trong văn bản, phím tắt nhanh nào dùng để cập nhật lại toàn bộ bảng Mục lục tự động?",
        "options": [
            {"id": "A", "text": "F5"},
            {"id": "B", "text": "F9"},
            {"id": "C", "text": "Ctrl + F9"},
            {"id": "D", "text": "Shift + F3"}
        ],
        "answer": "B",
        "explanation": "Nhấp chuột vào bảng mục lục và nhấn phím F9 (hoặc nhấp chuột phải chọn Update Field > Update entire table) để cập nhật lại số trang và tiêu đề mới."
    },
    {
        "id": "W22",
        "chapter": 7,
        "chapterName": "Word - Bài 7: Caption & Mục lục tự động",
        "difficulty": "Trung bình",
        "question": "Để xuất ra danh mục các hình ảnh (Danh mục hình) hoặc danh mục bảng biểu tự động từ các Caption đã đánh, người dùng sử dụng nút lệnh nào?",
        "options": [
            {"id": "A", "text": "Thẻ References > nhóm Captions > Insert Table of Figures"},
            {"id": "B", "text": "Thẻ References > nhóm Table of Contents > Insert TOC"},
            {"id": "C", "text": "Thẻ Insert > nhóm Tables > Quick Tables"},
            {"id": "D", "text": "Thẻ View > Show > Thumbnails"}
        ],
        "answer": "A",
        "explanation": "Vào thẻ References > tại nhóm Captions > nhấp chọn 'Insert Table of Figures' và chọn Caption label tương ứng (Hình hoặc Bảng)."
    },

    # Bài 8: Header, Footer & Đánh số trang (Câu 23 - 25)
    {
        "id": "W23",
        "chapter": 8,
        "chapterName": "Word - Bài 8: Header, Footer & Số trang",
        "difficulty": "Trung bình",
        "question": "Trong tài liệu đã chia thành nhiều Section, để tạo tiêu đề đầu trang (Header) của Section 2 hoàn toàn khác biệt và không phụ thuộc vào Section 1, thao tác then chốt là gì?",
        "options": [
            {"id": "A", "text": "Xóa toàn bộ nội dung của Header ở Section 1"},
            {"id": "B", "text": "Đặt con trỏ tại Header của Section 2 và nhấp tắt nút 'Link to Previous' trong thẻ Header & Footer Tools"},
            {"id": "C", "text": "Chọn lệnh Close Header and Footer"},
            {"id": "D", "text": "Chuyển đơn vị đo sang Centimeters"}
        ],
        "answer": "B",
        "explanation": "Mặc định các section kế tiếp đều duy trì liên kết với section trước ('Same as Previous'). Nhấp tắt nút 'Link to Previous' trên Ribbon sẽ ngắt liên kết này, cho phép nhập tiêu đề độc lập."
    },
    {
        "id": "W24",
        "chapter": 8,
        "chapterName": "Word - Bài 8: Header, Footer & Số trang",
        "difficulty": "Dễ",
        "question": "Tùy chọn 'Different First Page' trong thiết lập Header & Footer có ý nghĩa gì?",
        "options": [
            {"id": "A", "text": "Mỗi trang trong tài liệu đều có một Header khác nhau"},
            {"id": "B", "text": "Trang đầu tiên của phân đoạn/tài liệu sẽ có tiêu đề đầu và chân trang riêng biệt (thường dùng để ẩn Header/Footer ở trang bìa)"},
            {"id": "C", "text": "Tự động chèn mục lục vào trang đầu tiên"},
            {"id": "D", "text": "Khóa không cho người khác chỉnh sửa trang đầu tiên"}
        ],
        "answer": "B",
        "explanation": "Tùy chọn 'Different First Page' (Trang đầu tiên khác biệt) giúp trang bìa hoặc trang mở đầu không hiển thị tiêu đề và số trang, trong khi các trang sau vẫn hiển thị bình thường."
    },
    {
        "id": "W25",
        "chapter": 8,
        "chapterName": "Word - Bài 8: Header, Footer & Số trang",
        "difficulty": "Khá",
        "question": "Để đánh số trang theo định dạng chữ số La Mã (i, ii, iii...) ở phần Lời nói đầu và bắt đầu đánh số Ả Rập (1, 2, 3...) lại từ số 1 cho phần Nội dung chính, quy trình thực hiện gồm những bước nào?",
        "options": [
            {"id": "A", "text": "Chỉ cần chọn Page Number > Format Page Numbers > chọn số La Mã"},
            {"id": "B", "text": "Chèn Section Break (Next Page) phân tách 2 phần > ngắt Link to Previous > vào Format Page Numbers tại phần Nội dung chính chọn Number format: 1, 2, 3 và đặt Start at: 1"},
            {"id": "C", "text": "Gõ số trang bằng tay trực tiếp vào chân trang của từng trang"},
            {"id": "D", "text": "Lưu thành 2 file Word riêng biệt rồi in nối tiếp nhau"}
        ],
        "answer": "B",
        "explanation": "Cần ngắt Section Break (Next Page) giữa 2 phần > ngắt liên kết Link to Previous ở phần 2 > vào Insert > Page Number > Format Page Numbers để đổi Number Format sang 1,2,3 và chọn Start at: 1."
    },

    # Bài 9 & 10: Footnote, Endnote & Comment (Câu 26 - 28)
    {
        "id": "W26",
        "chapter": 9,
        "chapterName": "Word - Bài 9 & 10: Chú thích & Ghi chú (Footnote, Comment)",
        "difficulty": "Dễ",
        "question": "Điểm khác biệt cơ bản về vị trí xuất hiện giữa Chú thích chân trang (Footnote) và Chú thích cuối tài liệu (Endnote) là gì?",
        "options": [
            {"id": "A", "text": "Footnote xuất hiện ở cuối trang chứa từ cần chú thích; Endnote xuất hiện ở cuối cùng của toàn bộ tài liệu hoặc cuối Section"},
            {"id": "B", "text": "Footnote xuất hiện ở đầu trang; Endnote xuất hiện ở chân trang"},
            {"id": "C", "text": "Footnote chỉ dùng cho hình ảnh; Endnote chỉ dùng cho bảng biểu"},
            {"id": "D", "text": "Cả hai đều xuất hiện ở giữa trang"}
        ],
        "answer": "A",
        "explanation": "Footnote (Chú thích chân trang) nằm ở mép dưới cùng của chính trang đó; Endnote (Chú thích cuối) được dồn về trang cuối cùng của tài liệu hoặc cuối phân đoạn."
    },
    {
        "id": "W27",
        "chapter": 9,
        "chapterName": "Word - Bài 9 & 10: Chú thích & Ghi chú (Footnote, Comment)",
        "difficulty": "Trung bình",
        "question": "Tổ hợp phím tắt để chèn nhanh một chú thích chân trang (Footnote) tại vị trí con trỏ chuột là gì?",
        "options": [
            {"id": "A", "text": "Ctrl + Alt + F"},
            {"id": "B", "text": "Ctrl + Shift + F"},
            {"id": "C", "text": "Alt + Shift + F"},
            {"id": "D", "text": "Ctrl + F"}
        ],
        "answer": "A",
        "explanation": "Trong Word: Alt + Ctrl + F (hoặc Ctrl + Alt + F) dùng để chèn nhanh Footnote, và Alt + Ctrl + D dùng để chèn Endnote."
    },
    {
        "id": "W28",
        "chapter": 10,
        "chapterName": "Word - Bài 9 & 10: Chú thích & Ghi chú (Footnote, Comment)",
        "difficulty": "Dễ",
        "question": "Để chèn một nhận xét hoặc lời nhắc góp ý (Comment) cho một đoạn văn bản mà không làm thay đổi nội dung gốc, thao tác đúng là gì?",
        "options": [
            {"id": "A", "text": "Bôi đen đoạn văn bản > Thẻ Review > nhóm Comments > chọn New Comment"},
            {"id": "B", "text": "Bôi đen đoạn văn bản > Thẻ Insert > nhóm Text > chọn WordArt"},
            {"id": "C", "text": "Bôi đen đoạn văn bản > Thẻ Home > chọn Strikethrough"},
            {"id": "D", "text": "Thẻ View > chọn Show Comments"}
        ],
        "answer": "A",
        "explanation": "Bôi đen phần văn bản cần nhận xét > chọn thẻ Review > tại nhóm Comments bấm nút New Comment."
    },

    # Bài 11: Trộn thư - Mail Merge (Câu 29 - 30)
    {
        "id": "W29",
        "chapter": 11,
        "chapterName": "Word - Bài 11: Trộn thư (Mail Merge)",
        "difficulty": "Dễ",
        "question": "Để thực hiện một quy trình Trộn thư (Mail Merge) hoàn chỉnh trong Microsoft Word, người dùng bắt buộc phải chuẩn bị hai thành phần cơ bản nào?",
        "options": [
            {"id": "A", "text": "Tài liệu mẫu chính (Main Document) và Tệp nguồn dữ liệu chứa danh sách (Data Source như file Excel)"},
            {"id": "B", "text": "Tệp hình ảnh logo và Tệp âm thanh thuyết minh"},
            {"id": "C", "text": "Tài liệu Word bản sao và Tệp lưu trữ dạng PDF"},
            {"id": "D", "text": "Một mẫu chữ ký số và Một tài khoản Gmail"}
        ],
        "answer": "A",
        "explanation": "Mail Merge yêu cầu: (1) Main Document (mẫu giấy mời, thông báo, chứng chỉ) và (2) Data Source (bảng dữ liệu chứa danh sách thông tin người nhận, thường là bảng Excel hoặc bảng Word)."
    },
    {
        "id": "W30",
        "chapter": 11,
        "chapterName": "Word - Bài 11: Trộn thư (Mail Merge)",
        "difficulty": "Trung bình",
        "question": "Trong thẻ Mailings, sau khi đã kết nối thành công với nguồn dữ liệu (Select Recipients), người dùng sử dụng nút lệnh nào để chèn các trường thông tin (Họ tên, Lớp, Điểm...) vào văn bản mẫu?",
        "options": [
            {"id": "A", "text": "Start Mail Merge"},
            {"id": "B", "text": "Insert Merge Field"},
            {"id": "C", "text": "Check for Errors"},
            {"id": "D", "text": "Finish & Merge"}
        ],
        "answer": "B",
        "explanation": "Vào thẻ Mailings > tại nhóm Write & Insert Fields > bấm nút 'Insert Merge Field' rồi chọn tên trường tương ứng để chèn vào vị trí mong muốn."
    },

    # ==================== PHẦN 2: MICROSOFT EXCEL (30 CÂU) ====================
    # Khái niệm cơ bản, địa chỉ ô & Lỗi thường gặp (Câu 31 - 35)
    {
        "id": "E01",
        "chapter": 12,
        "chapterName": "Excel - Khái niệm, Địa chỉ ô & Lỗi thường gặp",
        "difficulty": "Dễ",
        "question": "Trong công thức Microsoft Excel, địa chỉ ô dạng $C$10 thuộc loại địa chỉ nào và có đặc điểm gì?",
        "options": [
            {"id": "A", "text": "Địa chỉ tương đối; tự động thay đổi cả dòng và cột khi sao chép công thức"},
            {"id": "B", "text": "Địa chỉ tuyệt đối; cố định cả cột C và dòng 10, không bị thay đổi khi sao chép công thức"},
            {"id": "C", "text": "Địa chỉ hỗn hợp cố định dòng"},
            {"id": "D", "text": "Địa chỉ hỗn hợp cố định cột"}
        ],
        "answer": "B",
        "explanation": "Dấu $ đặt trước cả chữ cái cột và chữ số dòng ($C$10) là địa chỉ tuyệt đối, giữ nguyên tọa độ ô khi sao chép công thức sang vị trí khác."
    },
    {
        "id": "E02",
        "chapter": 12,
        "chapterName": "Excel - Khái niệm, Địa chỉ ô & Lỗi thường gặp",
        "difficulty": "Dễ",
        "question": "Phím tắt nào trên bàn phím dùng để chuyển đổi nhanh qua lại giữa các kiểu địa chỉ ô (tương đối, tuyệt đối, hỗn hợp) khi đang viết công thức?",
        "options": [
            {"id": "A", "text": "F2"},
            {"id": "B", "text": "F4"},
            {"id": "C", "text": "F9"},
            {"id": "D", "text": "Ctrl + F4"}
        ],
        "answer": "B",
        "explanation": "Phím F4 giúp chuyển đổi tuần hoàn: A1 -> $A$1 -> A$1 -> $A1 -> A1."
    },
    {
        "id": "E03",
        "chapter": 12,
        "chapterName": "Excel - Khái niệm, Địa chỉ ô & Lỗi thường gặp",
        "difficulty": "Dễ",
        "question": "Thông báo lỗi `#DIV/0!` trong Microsoft Excel xuất hiện khi nào?",
        "options": [
            {"id": "A", "text": "Khi công thức thực hiện phép chia cho giá trị 0 hoặc chia cho một ô trống rỗng"},
            {"id": "B", "text": "Khi nhập sai tên hàm trong công thức"},
            {"id": "C", "text": "Khi độ rộng của cột không đủ để hiển thị số liệu"},
            {"id": "D", "text": "Khi ô tham chiếu trong công thức bị xóa mất"}
        ],
        "answer": "A",
        "explanation": "#DIV/0! (Division by zero) báo lỗi khi có phép toán chia cho 0 hoặc chia cho ô không có dữ liệu."
    },
    {
        "id": "E04",
        "chapter": 12,
        "chapterName": "Excel - Khái niệm, Địa chỉ ô & Lỗi thường gặp",
        "difficulty": "Dễ",
        "question": "Lỗi `#NAME?` trong Excel cảnh báo nguyên nhân nào sau đây?",
        "options": [
            {"id": "A", "text": "Công thức chứa tên hàm viết sai chính tả hoặc tên vùng chưa được đặt định nghĩa"},
            {"id": "B", "text": "Dữ liệu tính toán không cùng kiểu dữ liệu"},
            {"id": "C", "text": "Không tìm thấy giá trị cần dò tìm"},
            {"id": "D", "text": "Tham chiếu vòng luẩn quẩn (Circular Reference)"}
        ],
        "answer": "A",
        "explanation": "#NAME? xuất hiện khi Excel không nhận diện được văn bản trong công thức (ví dụ: gõ nhầm =VLOOKUPP() hoặc gọi tên vùng sai)."
    },
    {
        "id": "E05",
        "chapter": 12,
        "chapterName": "Excel - Khái niệm, Địa chỉ ô & Lỗi thường gặp",
        "difficulty": "Dễ",
        "question": "Khi thực hiện dò tìm dữ liệu bằng hàm VLOOKUP, kết quả trả về mã lỗi `#N/A` có ý nghĩa là gì?",
        "options": [
            {"id": "A", "text": "Công thức chia cho số 0"},
            {"id": "B", "text": "Giá trị cần tìm kiếm không tồn tại trong cột đầu tiên của bảng tham chiếu"},
            {"id": "C", "text": "Bảng dữ liệu có dung lượng quá lớn"},
            {"id": "D", "text": "Kiểu số học bị tràn bộ nhớ"}
        ],
        "answer": "B",
        "explanation": "#N/A (Not Available) báo hiệu hàm tìm kiếm không tìm thấy giá trị phù hợp với điều kiện đưa ra."
    },

    # Bài 1: Đặt tên vùng & Ràng buộc dữ liệu (Data Validation) (Câu 36 - 38)
    {
        "id": "E06",
        "chapter": 13,
        "chapterName": "Excel - Bài 1: Đặt tên vùng & Data Validation",
        "difficulty": "Dễ",
        "question": "Để đặt tên vùng nhanh cho khối ô từ A2 đến D20 là `BangDiem`, cách làm thuận tiện và trực tiếp nhất là gì?",
        "options": [
            {"id": "A", "text": "Quét chọn vùng A2:D20 > gõ chữ `BangDiem` vào hộp Name Box ở bên trái thanh công thức > nhấn Enter"},
            {"id": "B", "text": "Nhấp chuột phải vào vùng chọn > chọn Format Cells > Name"},
            {"id": "C", "text": "Vào File > Save As > BangDiem"},
            {"id": "D", "text": "Vào Home > Find & Select > Name"}
        ],
        "answer": "A",
        "explanation": "Name Box (hộp tên ô góc trên bên trái) là nơi đặt tên vùng nhanh nhất. Sau khi nhập tên, bắt buộc phải nhấn Enter để xác nhận."
    },
    {
        "id": "E07",
        "chapter": 13,
        "chapterName": "Excel - Bài 1: Đặt tên vùng & Data Validation",
        "difficulty": "Trung bình",
        "question": "Để mở hộp thoại Name Manager nhằm quản lý, chỉnh sửa phạm vi hoặc xóa các tên vùng đã đặt trong bảng tính, phím tắt nào được sử dụng?",
        "options": [
            {"id": "A", "text": "Ctrl + F3"},
            {"id": "B", "text": "Ctrl + F5"},
            {"id": "C", "text": "Alt + F8"},
            {"id": "D", "text": "Shift + F3"}
        ],
        "answer": "A",
        "explanation": "Ctrl + F3 mở hộp thoại Name Manager trong Excel (hoặc vào thẻ Formulas > Name Manager)."
    },
    {
        "id": "E08",
        "chapter": 13,
        "chapterName": "Excel - Bài 1: Đặt tên vùng & Data Validation",
        "difficulty": "Trung bình",
        "question": "Để tạo danh sách lựa chọn thả xuống (Dropdown List) tại một cột chỉ cho phép chọn các giá trị như: 'Loại 1', 'Loại 2', 'Loại 3', người dùng dùng tính năng Data Validation với tùy chọn Allow nào?",
        "options": [
            {"id": "A", "text": "Whole number"},
            {"id": "B", "text": "List"},
            {"id": "C", "text": "Custom"},
            {"id": "D", "text": "Text length"}
        ],
        "answer": "B",
        "explanation": "Chọn vùng ô > thẻ Data > Data Validation > tại mục Allow chọn 'List' > tại mục Source nhập danh sách phân cách bằng dấu phẩy hoặc quét vùng tham chiếu."
    },

    # Bài 2: Các hàm chuỗi và logic cơ bản (Câu 39 - 41)
    {
        "id": "E09",
        "chapter": 14,
        "chapterName": "Excel - Bài 2: Hàm chuỗi & Hàm logic",
        "difficulty": "Dễ",
        "question": "Cho chuỗi văn bản tại ô A1 là 'DHDA2026VN'. Công thức `=MID(A1, 5, 4)` sẽ trả về chuỗi kết quả nào?",
        "options": [
            {"id": "A", "text": "'DHDA'"},
            {"id": "B", "text": "'2026'"},
            {"id": "C", "text": "'26VN'"},
            {"id": "D", "text": "'A202'"}
        ],
        "answer": "B",
        "explanation": "Hàm MID(text, start_num, num_chars) bắt đầu trích xuất từ ký tự thứ 5 (là ký tự '2') và lấy 4 ký tự tiếp theo, cho kết quả là '2026'."
    },
    {
        "id": "E10",
        "chapter": 14,
        "chapterName": "Excel - Bài 2: Hàm chuỗi & Hàm logic",
        "difficulty": "Trung bình",
        "question": "Khi trích xuất 2 ký tự số cuối từ mã hàng 'SP-08' bằng công thức `=RIGHT(A1, 2)`, kết quả nhận được là chuỗi văn bản '08'. Để chuyển chuỗi này thành giá trị số nguyên 8 phục vụ tính toán số học, người dùng áp dụng hàm nào?",
        "options": [
            {"id": "A", "text": "=TEXT(RIGHT(A1, 2), \"00\")"},
            {"id": "B", "text": "=VALUE(RIGHT(A1, 2)) (hoặc nhân với 1)"},
            {"id": "C", "text": "=STRING(RIGHT(A1, 2))"},
            {"id": "D", "text": "=LEN(RIGHT(A1, 2))"}
        ],
        "answer": "B",
        "explanation": "Hàm VALUE(text) chuyển đổi chuỗi số thành dạng số thực tế để tính toán (hoặc dùng mẹo thực hiện phép tính số học trung hòa như nhân với 1: RIGHT(A1,2)*1)."
    },
    {
        "id": "E11",
        "chapter": 14,
        "chapterName": "Excel - Bài 2: Hàm chuỗi & Hàm logic",
        "difficulty": "Trung bình",
        "question": "Cho công thức: `=IF(AND(A2>=8, B2>=7), \"Khen thưởng\", \"Không\")`. Nếu ô A2 = 9 và ô B2 = 6, kết quả trả về của công thức là gì?",
        "options": [
            {"id": "A", "text": "\"Khen thưởng\""},
            {"id": "B", "text": "\"Không\""},
            {"id": "C", "text": "TRUE"},
            {"id": "D", "text": "#VALUE!"}
        ],
        "answer": "B",
        "explanation": "Hàm AND yêu cầu tất cả các mệnh đề điều kiện phải đồng thời đúng. Ở đây B2>=7 cho kết quả FALSE (vì 6 < 7), do đó hàm AND trả về FALSE, khiến hàm IF trả về mệnh đề phủ định là 'Không'."
    },

    # Bài 3: Hàm dò tìm VLOOKUP, HLOOKUP, INDEX & MATCH (Câu 42 - 45)
    {
        "id": "E12",
        "chapter": 15,
        "chapterName": "Excel - Bài 3: Hàm dò tìm VLOOKUP, HLOOKUP, INDEX & MATCH",
        "difficulty": "Dễ",
        "question": "Trong cú pháp hàm `=VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup])`, tham số `range_lookup` nhận giá trị 0 (hoặc FALSE) có ý nghĩa gì?",
        "options": [
            {"id": "A", "text": "Dò tìm tương đối/xấp xỉ (bảng dò phải sắp xếp tăng dần)"},
            {"id": "B", "text": "Dò tìm chính xác tuyệt đối"},
            {"id": "C", "text": "Bỏ qua các giá trị trùng lặp"},
            {"id": "D", "text": "Chỉ lấy dòng đầu tiên"}
        ],
        "answer": "B",
        "explanation": "range_lookup = 0 hoặc FALSE biểu thị phép dò tìm chính xác tuyệt đối; nếu không tìm thấy giá trị khớp hoàn toàn sẽ trả về lỗi #N/A."
    },
    {
        "id": "E13",
        "chapter": 15,
        "chapterName": "Excel - Bài 3: Hàm dò tìm VLOOKUP, HLOOKUP, INDEX & MATCH",
        "difficulty": "Trung bình",
        "question": "Một bảng giá tham chiếu có các Mã sản phẩm được bố trí nằm ngang trên dòng 1, và Đơn giá nằm ở dòng 2. Để dò tìm đơn giá dựa trên mã sản phẩm, hàm dò tìm phù hợp nhất là gì?",
        "options": [
            {"id": "A", "text": "Hàm VLOOKUP"},
            {"id": "B", "text": "Hàm HLOOKUP"},
            {"id": "C", "text": "Hàm COUNTIF"},
            {"id": "D", "text": "Hàm SUMIF"}
        ],
        "answer": "B",
        "explanation": "Khi dữ liệu khóa dò tìm được tổ chức theo chiều ngang (theo dòng), hàm HLOOKUP (Horizontal Lookup) là lựa chọn chuẩn."
    },
    {
        "id": "E14",
        "chapter": 15,
        "chapterName": "Excel - Bài 3: Hàm dò tìm VLOOKUP, HLOOKUP, INDEX & MATCH",
        "difficulty": "Khá",
        "question": "Hạn chế cơ bản nhất của hàm VLOOKUP truyền thống trong Excel là gì?",
        "options": [
            {"id": "A", "text": "Không thể dò tìm trên các bảng có số lượng dòng lớn hơn 100"},
            {"id": "B", "text": "Cột chứa giá trị dò tìm (lookup_value) bắt buộc phải nằm ở vị trí đầu tiên bên trái của bảng dữ liệu, không thể lấy dữ liệu ở các cột nằm bên trái nó"},
            {"id": "C", "text": "Không làm việc được với dữ liệu dạng chuỗi"},
            {"id": "D", "text": "Không thể kết hợp với các hàm logic"}
        ],
        "answer": "B",
        "explanation": "VLOOKUP chỉ có thể tìm kiếm từ trái sang phải. Nếu cột khóa tra cứu nằm ở giữa hoặc bên phải, VLOOKUP không thể lấy dữ liệu của các cột nằm bên trái nó."
    },
    {
        "id": "E15",
        "chapter": 15,
        "chapterName": "Excel - Bài 3: Hàm dò tìm VLOOKUP, HLOOKUP, INDEX & MATCH",
        "difficulty": "Khá",
        "question": "Bộ đôi hàm nào thường được sử dụng kết hợp để thay thế hoàn hảo và khắc phục nhược điểm dò tìm từ phải sang trái của hàm VLOOKUP?",
        "options": [
            {"id": "A", "text": "INDEX và MATCH"},
            {"id": "B", "text": "SUMIF và COUNTIF"},
            {"id": "C", "text": "LEFT và RIGHT"},
            {"id": "D", "text": "IF và AND"}
        ],
        "answer": "A",
        "explanation": "Cặp hàm INDEX(vùng_kết_quả, MATCH(giá_trị_dò, vùng_dò, 0)) cho phép dò tìm đa chiều cực kỳ linh hoạt (dò từ phải sang trái, dò 2 chiều dòng và cột) mà không phụ thuộc vào vị trí cột."
    },

    # Bài 4: Hàm thống kê điều kiện SUMIF, COUNTIF, SUMPRODUCT (Câu 46 - 48)
    {
        "id": "E16",
        "chapter": 16,
        "chapterName": "Excel - Bài 4: Hàm thống kê điều kiện",
        "difficulty": "Dễ",
        "question": "Cú pháp chuẩn của hàm tính tổng có điều kiện `SUMIF` trong Microsoft Excel là gì?",
        "options": [
            {"id": "A", "text": "=SUMIF(sum_range, range, criteria)"},
            {"id": "B", "text": "=SUMIF(range, criteria, [sum_range])"},
            {"id": "C", "text": "=SUMIF(criteria, range, sum_range)"},
            {"id": "D", "text": "=SUMIF(table, field, condition)"}
        ],
        "answer": "B",
        "explanation": "Cú pháp: =SUMIF(range, criteria, [sum_range]) trong đó range là vùng kiểm tra điều kiện, criteria là điều kiện, sum_range là vùng cần tính tổng."
    },
    {
        "id": "E17",
        "chapter": 16,
        "chapterName": "Excel - Bài 4: Hàm thống kê điều kiện",
        "difficulty": "Trung bình",
        "question": "Để đếm số lượng mặt hàng có số lượng tồn kho lớn hơn 50 trong cột Số lượng (vùng E2:E30), công thức nào sau đây được viết đúng cú pháp?",
        "options": [
            {"id": "A", "text": "=COUNTIF(E2:E30, >50)"},
            {"id": "B", "text": "=COUNTIF(E2:E30, \">50\")"},
            {"id": "C", "text": "=COUNTIF(\">50\", E2:E30)"},
            {"id": "D", "text": "=SUMIF(E2:E30, \">50\")"}
        ],
        "answer": "B",
        "explanation": "Trong hàm COUNTIF và SUMIF, các biểu thức điều kiện chứa toán tử so sánh bắt buộc phải được đặt trong cặp dấu nháy kép (ví dụ: \">50\")."
    },
    {
        "id": "E18",
        "chapter": 16,
        "chapterName": "Excel - Bài 4: Hàm thống kê điều kiện",
        "difficulty": "Khá",
        "question": "Hàm nào trong Excel có khả năng nhân các phần tử tương ứng của hai hay nhiều mảng dữ liệu với nhau rồi tính tổng của các tích đó mà không cần tạo cột phụ?",
        "options": [
            {"id": "A", "text": "Hàm PRODUCT"},
            {"id": "B", "text": "Hàm SUMPRODUCT"},
            {"id": "C", "text": "Hàm MULTIPLY"},
            {"id": "D", "text": "Hàm DSUM"}
        ],
        "answer": "B",
        "explanation": "Hàm SUMPRODUCT(array1, array2, ...) nhân các phần tử tương ứng của các mảng và trả về tổng các tích, rất hữu ích khi tính tổng doanh thu = Đơn giá * Số lượng mà không cần cột Thành tiền trung gian."
    },

    # Bài 5 & 6: Hàm Database & Công thức mảng (Câu 49 - 52)
    {
        "id": "E19",
        "chapter": 17,
        "chapterName": "Excel - Bài 5 & 6: Hàm Database & Công thức mảng",
        "difficulty": "Trung bình",
        "question": "Trong các hàm cơ sở dữ liệu như `DSUM(database, field, criteria)`, yêu cầu bắt buộc đối với tham số `database` là gì?",
        "options": [
            {"id": "A", "text": "Phải là một bảng dữ liệu có dòng đầu tiên chứa đầy đủ tiêu đề của các cột (tên trường)"},
            {"id": "B", "text": "Tất cả các ô trong bảng đều phải là dữ liệu kiểu số"},
            {"id": "C", "text": "Bảng dữ liệu phải được lưu trên một phần mềm quản trị CSDL chuyên biệt như SQL Server"},
            {"id": "D", "text": "Không được chứa nhiều hơn 50 dòng"}
        ],
        "answer": "A",
        "explanation": "Hàm cơ sở dữ liệu của Excel (DSUM, DCOUNT...) yêu cầu vùng database phải có dòng đầu tiên là dòng tiêu đề cột để liên kết với vùng tiêu chuẩn criteria."
    },
    {
        "id": "E20",
        "chapter": 17,
        "chapterName": "Excel - Bài 5 & 6: Hàm Database & Công thức mảng",
        "difficulty": "Khá",
        "question": "Trong vùng tiêu chuẩn (Criteria) của các hàm cơ sở dữ liệu (DSUM, DCOUNT), nếu hai điều kiện được viết trên CÙNG MỘT DÒNG thì quan hệ logic giữa chúng là gì?",
        "options": [
            {"id": "A", "text": "Phép toán logic HOẶC (OR)"},
            {"id": "B", "text": "Phép toán logic VÀ (AND)"},
            {"id": "C", "text": "Phép toán loại trừ (NOT)"},
            {"id": "D", "text": "Không có ý nghĩa logic"}
        ],
        "answer": "B",
        "explanation": "Quy tắc thiết lập vùng tiêu chuẩn trong Excel: Các điều kiện nằm trên cùng một hàng là điều kiện VÀ (AND); các điều kiện nằm ở các hàng khác nhau là điều kiện HOẶC (OR)."
    },
    {
        "id": "E21",
        "chapter": 17,
        "chapterName": "Excel - Bài 5 & 6: Hàm Database & Công thức mảng",
        "difficulty": "Dễ",
        "question": "Trong phiên bản Excel truyền thống (trước thời kỳ Dynamic Arrays), sau khi nhập xong một công thức mảng (Array Formula), người dùng bắt buộc phải nhấn tổ hợp phím nào để xác nhận?",
        "options": [
            {"id": "A", "text": "Chỉ nhấn Enter"},
            {"id": "B", "text": "Ctrl + Shift + Enter"},
            {"id": "C", "text": "Alt + Shift + Enter"},
            {"id": "D", "text": "Ctrl + Enter"}
        ],
        "answer": "B",
        "explanation": "Trong Excel truyền thống, công thức mảng (CSE formula) yêu cầu nhấn Ctrl + Shift + Enter để kích hoạt tính toán mảng."
    },
    {
        "id": "E22",
        "chapter": 17,
        "chapterName": "Excel - Bài 5 & 6: Hàm Database & Công thức mảng",
        "difficulty": "Trung bình",
        "question": "Dấu hiệu nhận biết đặc trưng của một công thức mảng hiển thị trên thanh công thức (Formula Bar) của Excel truyền thống là gì?",
        "options": [
            {"id": "A", "text": "Được bao bọc trong cặp ngoặc nhọn `{ =... }` do Excel tự động thêm vào"},
            {"id": "B", "text": "Chữ cái công thức được in đậm tự động"},
            {"id": "C", "text": "Công thức bắt đầu bằng dấu chấm than `!`"},
            {"id": "D", "text": "Công thức kết thúc bằng từ khóa `ARRAY`"}
        ],
        "answer": "A",
        "explanation": "Khi nhấn Ctrl + Shift + Enter thành công, Excel sẽ tự động bao bọc công thức bằng cặp dấu ngoặc nhọn { }. Người dùng không được tự gõ cặp ngoặc này bằng tay."
    },

    # Bài 7 & 8: Tối ưu Solver, Sort & Filter (Câu 53 - 56)
    {
        "id": "E23",
        "chapter": 18,
        "chapterName": "Excel - Bài 7 & 8: Solver, Sắp xếp & Lọc dữ liệu",
        "difficulty": "Trung bình",
        "question": "Công cụ Solver (nằm trong thẻ Data) của Excel được sử dụng chủ yếu cho mục đích nào?",
        "options": [
            {"id": "A", "text": "Kiểm tra lỗi chính tả trong bảng tính"},
            {"id": "B", "text": "Giải quyết các bài toán tối ưu hóa (tìm giá trị cực đại Max, cực tiểu Min hoặc giá trị mục tiêu với các ràng buộc Constraints)"},
            {"id": "C", "text": "Khôi phục lại mật khẩu file Excel bị quên"},
            {"id": "D", "text": "Tự động gửi email báo cáo hàng tuần"}
        ],
        "answer": "B",
        "explanation": "Solver là công cụ phân tích What-If chuyên sâu dùng để mô hình hóa và giải bài toán quy hoạch tuyến tính/phi tuyến tính (tìm phương án tối ưu thỏa mãn các ràng buộc)."
    },
    {
        "id": "E24",
        "chapter": 18,
        "chapterName": "Excel - Bài 7 & 8: Solver, Sắp xếp & Lọc dữ liệu",
        "difficulty": "Dễ",
        "question": "Khi muốn sắp xếp danh sách nhân viên ưu tiên theo 'Phòng ban' tăng dần, nếu trùng phòng ban thì tiếp tục sắp xếp theo 'Mức lương' giảm dần, người dùng thao tác trong hộp thoại Sort như thế nào?",
        "options": [
            {"id": "A", "text": "Chỉ chọn cột Lương rồi bấm Sort"},
            {"id": "B", "text": "Tại 'Sort by' chọn Phòng ban (A to Z), sau đó nhấp nút 'Add Level' và tại 'Then by' chọn Mức lương (Largest to Smallest)"},
            {"id": "C", "text": "Sắp xếp cột Lương trước rồi xóa đi làm lại"},
            {"id": "D", "text": "Dùng tính năng Data Validation"}
        ],
        "answer": "B",
        "explanation": "Trong hộp thoại Data > Sort, dùng nút 'Add Level' để thêm các cấp độ sắp xếp phụ (Sort by cấp 1, Then by cấp 2...)."
    },
    {
        "id": "E25",
        "chapter": 18,
        "chapterName": "Excel - Bài 7 & 8: Solver, Sắp xếp & Lọc dữ liệu",
        "difficulty": "Trung bình",
        "question": "Để lọc dữ liệu nâng cao (Advanced Filter) và trích xuất kết quả sang một vị trí mới trên sheet khác mà không làm mất bảng dữ liệu gốc, người dùng chọn tùy chọn nào trong hộp thoại Advanced Filter?",
        "options": [
            {"id": "A", "text": "Filter the list, in-place"},
            {"id": "B", "text": "Copy to another location"},
            {"id": "C", "text": "Unique records only"},
            {"id": "D", "text": "Clear Filter"}
        ],
        "answer": "B",
        "explanation": "Tùy chọn 'Copy to another location' cho phép trích xuất các dòng dữ liệu thỏa mãn điều kiện sang một bảng mới độc lập tại ô chỉ định ở mục 'Copy to'."
    },
    {
        "id": "E26",
        "chapter": 18,
        "chapterName": "Excel - Bài 7 & 8: Solver, Sắp xếp & Lọc dữ liệu",
        "difficulty": "Khá",
        "question": "Điều kiện tiên quyết BẮT BUỘC phải thực hiện trước khi sử dụng tính năng tính tổng phân nhóm tự động `Subtotal` (thẻ Data > Subtotal) là gì?",
        "options": [
            {"id": "A", "text": "Phải xóa hết các định dạng màu sắc"},
            {"id": "B", "text": "Bảng dữ liệu phải được sắp xếp (Sort) theo cột mà ta dự định phân nhóm (At each change in)"},
            {"id": "C", "text": "Bảng dữ liệu phải chuyển thành định dạng Table (Ctrl + T)"},
            {"id": "D", "text": "Phải khóa công thức tính toán"}
        ],
        "answer": "B",
        "explanation": "Subtotal quét dữ liệu từ trên xuống và tạo dòng tổng cộng mỗi khi giá trị cột phân nhóm thay đổi ('At each change in'). Nếu chưa Sort, các dòng cùng nhóm nằm rải rác sẽ tạo ra hàng loạt subtotal vụn vặt sai lệch."
    },

    # Bài 9 - 12: PivotTable, Conditional Formatting, Biểu đồ & In ấn (Câu 57 - 60)
    {
        "id": "E27",
        "chapter": 19,
        "chapterName": "Excel - Bài 9 - 12: PivotTable, Formatting, Đồ thị & In ấn",
        "difficulty": "Dễ",
        "question": "Để loại bỏ hoàn toàn các dòng dữ liệu bị trùng lặp trong một bảng tính Excel, người dùng sử dụng tính năng nào?",
        "options": [
            {"id": "A", "text": "Thẻ Data > nhóm Data Tools > Remove Duplicates"},
            {"id": "B", "text": "Thẻ Home > nhóm Editing > Clear All"},
            {"id": "C", "text": "Thẻ Review > Track Changes"},
            {"id": "D", "text": "Thẻ View > Freeze Panes"}
        ],
        "answer": "A",
        "explanation": "Tính năng Data > Remove Duplicates cho phép chọn một hoặc nhiều cột để quét và xóa bỏ tất cả các bản ghi trùng lặp một cách tự động."
    },
    {
        "id": "E28",
        "chapter": 19,
        "chapterName": "Excel - Bài 9 - 12: PivotTable, Formatting, Đồ thị & In ấn",
        "difficulty": "Trung bình",
        "question": "Tính năng Định dạng có điều kiện (Conditional Formatting) trong Excel được dùng để làm gì?",
        "options": [
            {"id": "A", "text": "Tự động đổi màu chữ, màu nền hoặc gắn icon cho các ô thỏa mãn một quy tắc/điều kiện định sẵn"},
            {"id": "B", "text": "Tự động sửa lỗi chính tả theo điều kiện"},
            {"id": "C", "text": "Ngăn chặn người dùng nhập dữ liệu số âm"},
            {"id": "D", "text": "Tự động tính tổng khi có điều kiện"}
        ],
        "answer": "A",
        "explanation": "Conditional Formatting giúp trực quan hóa dữ liệu bằng cách tự động áp dụng định dạng (màu nền, màu chữ, thanh Data Bars, Icon Sets) khi giá trị ô thỏa mãn điều kiện quy định."
    },
    {
        "id": "E29",
        "chapter": 19,
        "chapterName": "Excel - Bài 9 - 12: PivotTable, Formatting, Đồ thị & In ấn",
        "difficulty": "Trung bình",
        "question": "Trong công cụ tạo báo cáo tổng hợp PivotTable, bốn khu vực kéo thả trường dữ liệu cốt lõi là gì?",
        "options": [
            {"id": "A", "text": "Filters, Columns, Rows, Values"},
            {"id": "B", "text": "Header, Footer, Left, Right"},
            {"id": "C", "text": "Input, Process, Output, Storage"},
            {"id": "D", "text": "Sort, Filter, Group, Calculate"}
        ],
        "answer": "A",
        "explanation": "Giao diện PivotTable Fields gồm 4 vùng: Filters (bộ lọc báo cáo), Columns (tiêu đề cột), Rows (tiêu đề dòng), và Values (giá trị tính toán tổng hợp như Sum, Count, Average...)."
    },
    {
        "id": "E30",
        "chapter": 19,
        "chapterName": "Excel - Bài 9 - 12: PivotTable, Formatting, Đồ thị & In ấn",
        "difficulty": "Trung bình",
        "question": "Khi in một bảng tính Excel dài nhiều trang, để dòng tiêu đề cột của bảng tự động lặp lại ở đầu mỗi trang in, người dùng thiết lập ở mục nào?",
        "options": [
            {"id": "A", "text": "Thẻ Page Layout > Print Titles > tại thẻ Sheet mục 'Rows to repeat at top' chọn dòng tiêu đề"},
            {"id": "B", "text": "Thẻ View > Freeze Top Row"},
            {"id": "C", "text": "Thẻ Home > Format > AutoFit Row Height"},
            {"id": "D", "text": "Thẻ Insert > Header & Footer > chèn tiêu đề"}
        ],
        "answer": "A",
        "explanation": "Vào Page Setup (hoặc Page Layout > Print Titles) > chọn thẻ Sheet > tại ô 'Rows to repeat at top' nhấp chọn dòng tiêu đề cần lặp lại (ví dụ: $1:$1). Lưu ý Freeze Panes chỉ có tác dụng cuộn xem trên màn hình, không có tác dụng khi in ấn."
    }
]

print(f"Tổng số câu hỏi đã khởi tạo: {len(QUESTIONS)} câu (30 Word + 30 Excel).")

# -------------------------------------------------------------
# 2. SAVE EXAM_BANK.JSON & CSV
# -------------------------------------------------------------

# Organization by chapters matching Machine Learning structure
exam_bank_dict = {}
for q in QUESTIONS:
    ch = str(q["chapter"])
    if ch not in exam_bank_dict:
        exam_bank_dict[ch] = []
    exam_bank_dict[ch].append(q)

# Paths
OUTPUT_DIR_QUIZ = r"I:\MY_CODE\AIUD_March2026\quizzes\MidtermExam"
OUTPUT_DIR_DATA_QUIZ = r"I:\MY_CODE\AIUD_March2026\data\quiz"
OUTPUT_DIR_MODULE_DB = r"I:\MY_CODE\AIUD_March2026\Module_1-6\DB"
OUTPUT_DIR_DOCS = r"I:\MY_CODE\AIUD_March2026\docs"
OUTPUT_DIR_EXAMS = r"I:\MY_CODE\AIUD_March2026\docs\exams"

for d in [OUTPUT_DIR_QUIZ, OUTPUT_DIR_DATA_QUIZ, OUTPUT_DIR_MODULE_DB, OUTPUT_DIR_DOCS, OUTPUT_DIR_EXAMS]:
    os.makedirs(d, exist_ok=True)

# Save JSON
json_path = os.path.join(OUTPUT_DIR_QUIZ, "exam_bank.json")
with open(json_path, "w", encoding="utf-8") as f:
    json.dump(exam_bank_dict, f, ensure_ascii=False, indent=2)
print(f"Đã lưu thành công: {json_path}")

# Save CSV (format compatible with Module_1-6 midterm quiz engine)
csv_rows = []
for idx, q in enumerate(QUESTIONS, start=1):
    opt_map = {opt["id"]: opt["text"] for opt in q["options"]}
    ans_key = q["answer"]
    res_text = opt_map.get(ans_key, "")
    csv_rows.append({
        "ID": idx,
        "CourseContentId": q["chapterName"],
        "IdContent": q["chapter"],
        "QuestionType": 1,
        "QuestionContent": q["question"],
        "AAnsver": opt_map.get("A", ""),
        "BAnswer": opt_map.get("B", ""),
        "CAnswer": opt_map.get("C", ""),
        "DAnswer": opt_map.get("D", ""),
        "Answer": ans_key,
        "ResultAnswer": res_text
    })

fieldnames = ["ID", "CourseContentId", "IdContent", "QuestionType", "QuestionContent", "AAnsver", "BAnswer", "CAnswer", "DAnswer", "Answer", "ResultAnswer"]

for target_dir in [OUTPUT_DIR_DATA_QUIZ, OUTPUT_DIR_MODULE_DB]:
    csv_file = os.path.join(target_dir, "Word_Excel_Midterm.csv")
    with open(csv_file, "w", encoding="utf-8-sig", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(csv_rows)
    print(f"Đã lưu thành công CSV: {csv_file}")

