# -*- coding: utf-8 -*-
"""
Generate 3 practical exam markdown files and 1 grading rubric file:
1. docs/exams/DE_THI_THUC_HANH_SO_01.md
2. docs/exams/DE_THI_THUC_HANH_SO_02.md
3. docs/exams/DE_THI_THUC_HANH_SO_03.md
4. docs/exams/DAP_AN_VA_BIEU_DIEM_3_DE.md
"""

import os

EXAMS_DIR = r"I:\MY_CODE\AIUD_March2026\docs\exams"
os.makedirs(EXAMS_DIR, exist_ok=True)

# -------------------------------------------------------------
# ĐỀ 01
# -------------------------------------------------------------
DE_01_CONTENT = """# 📋 ĐỀ THI THỰC HÀNH GIỮA KỲ - ĐỀ SỐ 01

> **Học phần:** Tin học văn phòng nâng cao (2 Tín chỉ)  
> **Đơn vị:** Khoa Công nghệ Thông tin — Đại học Đông Á  
> **Thời gian làm bài:** 90 phút (2 tiết học) — Thang điểm: 10.0  
> **Đối tượng:** Sinh viên trình độ Trung bình – Khá  
> **Chủ đề bài thi:** Quản lý Tuyển dụng Đào tạo & Bán lẻ Thiết bị Công nghệ

---

### 📌 HƯỚNG DẪN QUY CÁCH NỘP BÀI THI:
1. Sinh viên tạo một thư mục bài làm trên máy tính với tên: `[MSSV]_[HoVaTen]_De01` (Ví dụ: `1042301_NguyenVanAn_De01`).
2. Mọi tệp tin kết quả phải lưu vào thư mục này theo đúng định dạng:
   - File Word: `[MSSV]_[HoVaTen]_Word_De01.docx`
   - File Excel: `[MSSV]_[HoVaTen]_Excel_De01.xlsx`
3. Khi hết giờ, nén thư mục thành file `.zip` hoặc `.rar` và nộp lên hệ thống Canvas LMS / Cổng Khảo thí theo hướng dẫn của Giảng viên.

---

## PHẦN A. MICROSOFT WORD (4.5 ĐIỂM) — Thời gian khuyến nghị: 40 phút

### Câu 1: Soạn thảo & Định dạng Thể thức Hành chính (Mức độ Dễ — 2.0 điểm)
1. **Thiết lập trang văn bản (Page Setup):**
   - Khổ giấy: A4, Hướng giấy đứng (Portrait).
   - Canh lề chuẩn: Top: 2.0 cm, Bottom: 2.0 cm, Left: 3.0 cm, Right: 2.0 cm.
   - Định dạng Style Normal: Font chữ **Times New Roman**, cỡ chữ **13 pt**, màu tự động (Automatic).
   - Đoạn văn bản (Paragraph): Giãn đoạn Before: **6 pt**, After: **6 pt**, Giãn dòng (Line spacing): **1.5 lines**, Căn đều hai biên (Justify). *(0.5 điểm)*
2. **Soạn thảo thể thức văn bản hành chính:**
   - Soạn thảo đúng bố cục văn bản thông báo:
     * Dòng 1: Đơn vị chủ quản bên trái: `BỘ GIÁO DỤC VÀ ĐÀO TẠO` / `TRƯỜNG ĐẠI HỌC ĐÔNG Á` (cỡ 12pt, in hoa).
     * Dòng 1: Quốc hiệu - Tiêu ngữ bên phải: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM` / `Độc lập - Tự do - Hạnh phúc` (cỡ 12-13pt, gạch chân nét liền dưới tiêu ngữ).
     * Tiêu đề: `THÔNG BÁO TUYỂN DỤNG NHÂN SỰ CÔNG NGHỆ THÔNG TIN NĂM 2026` (in hoa, đậm, cỡ 14pt, căn giữa). *(0.5 điểm)*
3. **Soạn thảo và định dạng Bảng biểu (Table):**
   - Tạo bảng chỉ tiêu tuyển dụng gồm 5 cột và 5 dòng như sau:

| STT | Vị trí tuyển dụng | Số lượng | Yêu cầu kỹ năng chuyên môn | Mức lương khởi điểm (VNĐ) |
| :---: | :--- | :---: | :--- | :---: |
| 01 | Kỹ sư Lập trình AI | 03 | Python, PyTorch, Phân tích dữ liệu | 22.000.000 |
| 02 | Chuyên viên Quản trị Mạng | 02 | Cisco CCNA, An toàn mạng, Linux | 16.500.000 |
| 03 | Lập trình viên Fullstack | 04 | ReactJS, NodeJS, Cơ sở dữ liệu SQL | 18.000.000 |
| 04 | Trợ giảng Tin học Văn phòng | 05 | Word, Excel, PowerPoint nâng cao | 12.000.000 |

   - Định dạng bảng: Dòng tiêu đề in đậm, tô màu nền xám nhạt (`Shading`), căn giữa theo chiều dọc và ngang ô. Các cột STT và Số lượng căn giữa, cột Vị trí và Kỹ năng căn trái, cột Mức lương căn phải. *(0.5 điểm)*
4. **Sao chép và chuyển đổi bảng:**
   - Sao chép bảng trên thành một bảng mới đặt ngay bên dưới.
   - Chuyển đổi bảng sao chép thành đoạn văn bản thông thường phân cách bằng dấu Tab (`Layout > Convert to Text > Tabs`). *(0.5 điểm)*

### Câu 2: Thiết lập Mẫu Phiếu Khảo sát bằng Tabstop & Drop Cap (Mức độ Trung bình — 1.5 điểm)
1. **Thiết lập chữ nghệ thuật đầu đoạn (Drop Cap):**
   - Soạn thảo đoạn văn giới thiệu: *"Khoa Công nghệ Thông tin Đại học Đông Á là một trong những đơn vị đào tạo hàng đầu miền Trung, luôn chú trọng kết nối thực tiễn với doanh nghiệp và ứng dụng công nghệ hiện đại..."*
   - Tạo chữ hoa thụt đầu đoạn (Drop Cap): Chiều cao thụt xuống **3 dòng** (`Lines to drop: 3`), khoảng cách từ chữ đến văn bản `Distance from text: 0.1 cm`. *(0.5 điểm)*
2. **Thiết lập Tabstop có ký tự dẫn (Leader):**
   - Đặt các điểm dừng Tab để tạo Mẫu Phiếu Đăng Ký Ứng Viên chuyên nghiệp:
     * Họ và tên ứng viên: `...................................................` Ngày sinh: `...................` Giới tính: `...........`
     * Số CCCD / CMND: `..................................................` Ngày cấp: `....................` Nơi cấp: `..............`
     * Địa chỉ liên hệ: `........................................................................................................................`
     * Trình độ chuyên môn & Chứng chỉ ngoại ngữ: `........................................................................`
     * Kinh nghiệm công tác: `................................................................................................................`
   - Yêu cầu: Bắt buộc sử dụng công cụ **Tabs** với ký tự dẫn Leader kiểu số 2 (`.......`), căn chỉnh thẳng hàng dọc đều đặn. Không dùng phím chấm thủ công trên bàn phím. *(1.0 điểm)*

### Câu 3: Section Break Xoay Ngang Trang & Header/Footer (Mức độ Khá — 1.0 điểm)
1. **Tạo ngắt phân đoạn (Section Break - Next Page):**
   - Chèn một dấu ngắt Section Break (Next Page) để tạo Trang số 2.
   - Xoay hướng giấy của Trang 2 thành hướng ngang (**Landscape**) để trình bày Bảng Kế hoạch Phỏng vấn, trong khi Trang 1 vẫn giữ nguyên hướng dọc (**Portrait**). *(0.5 điểm)*
2. **Thiết lập Tiêu đề Chân trang (Footer):**
   - Tại Trang 2, ngắt liên kết với trang trước bằng cách bấm tắt nút **Link to Previous**.
   - Thiết lập Footer Trang 2:
     * Lề bên trái: Chèn thông tin `Họ và tên thí sinh — Lớp sinh hoạt — Đề 01`.
     * Lề bên phải: Chèn số trang tự động (`Page Number > Current Position`). *(0.5 điểm)*

---

## PHẦN B. MICROSOFT EXCEL (5.5 ĐIỂM) — Thời gian khuyến nghị: 50 phút

### Dữ liệu ban đầu:
Sinh viên nhập bảng dữ liệu sau vào `Sheet1` của tệp Excel và đổi tên sheet thành `QuanLyBanHang`:

#### BẢNG KÊ BÁN HÀNG CÔNG NGHỆ THÁNG 11/2026 (Bảng chính):
| STT | Mã HĐ | Ngày bán | Tên sản phẩm | Hãng SX | Số lượng | Đơn giá | Thuế VAT | Thành tiền | Ghi chú |
| :---: | :---: | :---: | :--- | :--- | :---: | :---: | :---: | :---: | :---: |
| 1 | LT-DL-1 | 02/11/2026 | | | 6 | | | | |
| 2 | IP-AP-2 | 05/11/2026 | | | 3 | | | | |
| 3 | SP-SS-1 | 08/11/2026 | | | 8 | | | | |
| 4 | LT-AS-1 | 12/11/2026 | | | 4 | | | | |
| 5 | IP-AP-1 | 15/11/2026 | | | 10 | | | | |
| 6 | SP-SS-2 | 19/11/2026 | | | 2 | | | | |
| 7 | LT-DL-2 | 22/11/2026 | | | 5 | | | | |
| 8 | SP-AP-1 | 25/11/2026 | | | 7 | | | | |

#### BẢNG TRA THÔNG TIN SẢN PHẨM & ĐƠN GIÁ (Bảng phụ 1):
| Mã SP | Tên sản phẩm | Đơn giá Loại 1 | Đơn giá Loại 2 |
| :---: | :--- | :---: | :---: |
| LT | Laptop Gaming & Office | 21.000.000 | 18.500.000 |
| IP | iPad / Máy tính bảng | 15.000.000 | 12.800.000 |
| SP | Smartphone Thông minh | 17.500.000 | 14.000.000 |

*Quy ước Mã Hóa đơn (`Mã HĐ`):*
- 2 ký tự đầu: Mã loại sản phẩm (`LT`, `IP`, `SP`).
- 2 ký tự giữa (vị trí 4-5): Mã Hãng sản xuất (`DL`: Dell, `AP`: Apple, `SS`: Samsung, `AS`: Asus).
- 1 ký tự cuối cùng: Loại chất lượng máy (`1` hoặc `2`).

---

### YÊU CẦU THỰC HIỆN CÔNG THỨC & THAO TÁC:

#### Câu 1: Định dạng bảng, Đặt tên vùng & Data Validation (Mức độ Dễ — 1.5 điểm)
1. Kẻ khung lưới đầy đủ cho các bảng, định dạng dòng tiêu đề in đậm, tô màu nền trang nhã, căn lề ô hợp lý. Định dạng các cột tiền tệ có dấu phân cách hàng nghìn (ví dụ: `21,000,000`). *(0.5 điểm)*
2. Đặt tên vùng (Define Name) cho khối dữ liệu của Bảng phụ 1 là `BangGia`. *(0.5 điểm)*
3. Dùng tính năng **Data Validation** (kiểu **List**) để ràng buộc nhập liệu cho cột `Hãng SX` trong bảng chính, người dùng chỉ được chọn 1 trong các hãng: `Dell, Apple, Samsung, Asus`. Điền đúng tên hãng cho các dòng theo mã ký tự giữa. *(0.5 điểm)*

#### Câu 2: Thiết lập Công thức Dò tìm & Tính toán (Mức độ Trung bình — 2.0 điểm)
1. **Cột Tên sản phẩm (0.5 điểm):** Dựa vào 2 ký tự đầu của `Mã HĐ`, sử dụng hàm `VLOOKUP` kết hợp với hàm `LEFT` để tra cứu trong `BangGia`.
2. **Cột Đơn giá (0.75 điểm):** Dựa vào 2 ký tự đầu và ký tự cuối của `Mã HĐ`. Sử dụng hàm `VLOOKUP` kết hợp với hàm `IF` và `RIGHT`:
   - Nếu ký tự cuối là `"1"` thì lấy Đơn giá Loại 1 (cột số 3 trong `BangGia`).
   - Ngược lại lấy Đơn giá Loại 2 (cột số 4 trong `BangGia`).
3. **Cột Thuế VAT (0.5 điểm):** Sử dụng hàm `IF`:
   - Nếu `Số lượng` >= 5 thì Thuế VAT = 8% * (Số lượng * Đơn giá).
   - Ngược lại, Thuế VAT = 10% * (Số lượng * Đơn giá).
4. **Cột Thành tiền (0.25 điểm):** `Thành tiền = (Số lượng * Đơn giá) + Thuế VAT`.

#### Câu 3: Thống kê Số liệu bằng Hàm Điều Kiện (Mức độ Khá — 1.0 điểm)
Lập **BẢNG THỐNG KÊ DOANH THU THEO HÃNG** gồm 3 cột: `Hãng SX`, `Số lượt hóa đơn`, `Tổng thành tiền (VNĐ)`:
- Sử dụng hàm `COUNTIF` để đếm số lượt hóa đơn phát sinh của từng Hãng SX. *(0.5 điểm)*
- Sử dụng hàm `SUMIF` để tính tổng Thành tiền đã bán ra cho từng Hãng SX. *(0.5 điểm)*

#### Câu 4: Trích Lọc Nâng Cao & Trực Quan Hóa Đồ Thị (Mức độ Khá/Giỏi — 1.0 điểm)
1. **Lọc nâng cao (Advanced Filter) (0.5 điểm):**
   - Thiết lập vùng tiêu chuẩn để lọc ra các hóa đơn thỏa mãn đồng thời: `Hãng SX` là `"Apple"` VÀ `Số lượng` >= 5.
   - Trích xuất toàn bộ kết quả lọc sang một Sheet mới và đặt tên sheet là `KetQuaLoc`.
2. **Vẽ đồ thị (0.5 điểm):**
   - Từ Bảng thống kê doanh thu theo hãng ở Câu 3, hãy vẽ biểu đồ hình cột (Clustered Column Chart) thể hiện tổng doanh thu của 4 hãng.
   - Thêm Tiêu đề biểu đồ (`Chart Title`): **DOANH THU THIẾT BỊ THEO HÃNG THÁNG 11/2026** và bật hiển thị nhãn số liệu trên đầu mỗi cột (`Data Labels`).
"""

# -------------------------------------------------------------
# ĐỀ 02
# -------------------------------------------------------------
DE_02_CONTENT = """# 📋 ĐỀ THI THỰC HÀNH GIỮA KỲ - ĐỀ SỐ 02

> **Học phần:** Tin học văn phòng nâng cao (2 Tín chỉ)  
> **Đơn vị:** Khoa Công nghệ Thông tin — Đại học Đông Á  
> **Thời gian làm bài:** 90 phút (2 tiết học) — Thang điểm: 10.0  
> **Đối tượng:** Sinh viên trình độ Trung bình – Khá  
> **Chủ đề bài thi:** Quản lý Nhân sự & Bảng Lương Thưởng Doanh nghiệp

---

### 📌 HƯỚNG DẪN QUY CÁCH NỘP BÀI THI:
1. Sinh viên tạo thư mục bài làm trên máy tính với tên: `[MSSV]_[HoVaTen]_De02` (Ví dụ: `1042302_TranThiBinh_De02`).
2. Mọi tệp tin kết quả phải lưu vào thư mục này:
   - File Word: `[MSSV]_[HoVaTen]_Word_De02.docx`
   - File Excel: `[MSSV]_[HoVaTen]_Excel_De02.xlsx`
3. Nén thư mục thành file `.zip` và nộp lên hệ thống Canvas LMS / Cổng Khảo thí theo quy định.

---

## PHẦN A. MICROSOFT WORD (4.5 ĐIỂM) — Thời gian khuyến nghị: 40 phút

### Câu 1: Soạn thảo Quyết định Khen thưởng & Bảng biểu (Mức độ Dễ — 2.0 điểm)
1. **Thiết lập thể thức văn bản:**
   - Khổ giấy: A4, Margins: Top: 2.0 cm, Bottom: 2.0 cm, Left: 3.0 cm, Right: 2.0 cm.
   - Font Times New Roman, cỡ 13pt, dòng giãn 1.5 lines, đoạn giãn Before: 6pt, After: 6pt. *(0.5 điểm)*
2. **Soạn thảo thể thức Quyết định khen thưởng:**
   - Đơn vị ban hành: `TẬP ĐOÀN CÔNG NGHỆ VÀ TRUYỀN THÔNG ĐÔNG Á`.
   - Số hiệu: `Số: 86/QĐ-KT-2026`.
   - Tiêu đề: `QUYẾT ĐỊNH / V/v Khen thưởng Cán bộ - Nhân viên đạt thành tích xuất sắc Quý IV/2026` (in hoa, đậm, căn giữa).
   - Phần căn cứ pháp lý in nghiêng, thụt lề đầu dòng 1.0 cm. *(0.5 điểm)*
3. **Soạn thảo Bảng danh sách khen thưởng (Table):**
   - Tạo bảng danh sách 6 cột, 5 dòng:

| STT | Mã NV | Họ và tên | Phòng ban | Danh hiệu khen thưởng | Mức thưởng (VNĐ) |
| :---: | :---: | :--- | :--- | :--- | :---: |
| 01 | NV01 | Lê Hoàng Nam | Kỹ thuật phần mềm | Nhân viên xuất sắc năm | 15.000.000 |
| 02 | NV02 | Trần Mai Lan | Kinh doanh & Marketing | Chiến sĩ thi đua cấp cơ sở | 12.000.000 |
| 03 | NV03 | Phạm Quốc Huy | Kế toán & Tài chính | Hoàn thành xuất sắc nhiệm vụ | 10.000.000 |
| 04 | NV04 | Nguyễn Thị Thảo | Quản trị Nhân sự | Lao động tiên tiến | 8.000.000 |

   - Định dạng ô, viền bảng và lặp lại dòng tiêu đề bảng bằng lệnh `Repeat Header Rows`. *(0.5 điểm)*
4. **Chuyển đổi bảng thành văn bản:**
   - Sao chép bảng và sử dụng lệnh `Convert to Text` với dấu phân cách là dấu phẩy (`Commas`). *(0.5 điểm)*

### Câu 2: Tabstop Phiếu Đề Xuất Khen Thưởng & SmartArt (Mức độ Trung bình — 1.5 điểm)
1. **Thiết lập Tabstop có ký tự dẫn (Leader):**
   - Sử dụng hộp thoại Tabs để định dạng Mẫu Phiếu Xác Nhận Đề Xuất:
     * Cán bộ được đề xuất: `............................................` Mã nhân viên: `...................` Chức vụ: `...........`
     * Bộ phận công tác: `...................................................` Thời gian công tác: `...................................`
     * Thành tích tiêu biểu trong quý: `................................................................................................`
     * Đánh giá của Trưởng phòng: `....................................................................................................`
     * Xác nhận của Ban Giám đốc: `...................................................................................................`
   - Bắt buộc dùng Tabstop căn lề chuẩn và Leader dấu chấm bi số 2. *(1.0 điểm)*
2. **Chèn sơ đồ SmartArt quy trình:**
   - Chèn một sơ đồ quy trình dạng mũi tên (`Process SmartArt`) gồm 3 bước: `1. Đề xuất cấp phòng -> 2. Hội đồng xét duyệt -> 3. Ban hành quyết định`. Áp dụng kiểu thiết kế trực quan. *(0.5 điểm)*

### Câu 3: Multilevel List Liên Kết Heading & Mục Lục Tự Động (Mức độ Khá — 1.0 điểm)
1. **Tạo Multilevel List 2 cấp độ:**
   - Cấp 1 (`1., 2., 3.`): Gắn liên kết với `Heading 1` (Ví dụ: `1. QUY ĐỊNH CHUNG`, `2. TIÊU CHUẨN XÉT KHEN THƯỞNG`).
   - Cấp 2 (`1.1., 1.2., 2.1.`): Gắn liên kết với `Heading 2` (Ví dụ: `1.1. Phạm vi điều chỉnh`, `1.2. Đối tượng áp dụng`). *(0.5 điểm)*
2. **Xuất Mục lục tự động (Table of Contents):**
   - Tạo trang Mục lục ở đầu tài liệu, chèn bảng Mục lục tự động từ thẻ `References > Table of Contents`. *(0.5 điểm)*

---

## PHẦN B. MICROSOFT EXCEL (5.5 ĐIỂM) — Thời gian khuyến nghị: 50 phút

### Dữ liệu ban đầu:
Sinh viên nhập bảng tính sau vào `Sheet1` và đổi tên thành `BangLuong`:

#### BẢNG TÍNH LƯƠNG NHÂN VIÊN THÁNG 11/2026:
| STT | Mã NV | Họ và tên | Phòng ban | Chức vụ | Ngày công | Lương ngày | Lương CB | Phụ cấp | Thưởng KPI | Thực lĩnh |
| :---: | :---: | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | GD-KT-A | Nguyễn Minh Tuấn | | | 26 | | | | | |
| 2 | TP-KD-B | Hoàng Thu Trang | | | 24 | | | | | |
| 3 | NV-NS-A | Đỗ Thanh Bình | | | 25 | | | | | |
| 4 | NV-KT-C | Vũ Đức Cường | | | 21 | | | | | |
| 5 | TP-TC-A | Mai Bích Ngọc | | | 26 | | | | | |
| 6 | NV-KD-B | Trịnh Văn Đạt | | | 22 | | | | | |
| 7 | NV-TC-A | Phan Thu Hằng | | | 24 | | | | | |
| 8 | NV-KT-B | Bùi Anh Khoa | | | 25 | | | | | |

#### BẢNG PHỤ CẤP VÀ LƯƠNG THEO CHỨC VỤ (Bảng phụ 1):
| Mã CV | Tên chức vụ | Lương ngày (VNĐ) | Phụ cấp chức vụ (VNĐ) |
| :---: | :--- | :---: | :---: |
| GD | Giám đốc điều hành | 1.200.000 | 5.000.000 |
| TP | Trưởng phòng bộ phận | 800.000 | 3.000.000 |
| NV | Nhân viên nghiệp vụ | 500.000 | 1.000.000 |

*Quy ước Mã Nhân viên (`Mã NV`):*
- 2 ký tự đầu: Mã chức vụ (`GD`, `TP`, `NV`).
- 2 ký tự giữa: Mã phòng ban (`KT`: Kỹ thuật, `KD`: Kinh doanh, `NS`: Nhân sự, `TC`: Tài chính).
- 1 ký tự cuối: Xếp loại thi đua KPI tháng (`A`, `B`, hoặc `C`).

---

### YÊU CẦU THỰC HIỆN:

#### Câu 1: Định dạng, Đặt tên vùng & Data Validation (Mức độ Dễ — 1.5 điểm)
1. Định dạng bảng tính chuyên nghiệp, kẻ viền ô, căn giữa các mã và số ngày, căn phải các cột số tiền. *(0.5 điểm)*
2. Đặt tên vùng cho bảng phụ 1 là `BangChucVu`. *(0.5 điểm)*
3. Dùng **Data Validation** kiểu **List** gán danh sách tên Phòng ban cho cột `Phòng ban` gồm 4 phòng: `Kỹ thuật, Kinh doanh, Nhân sự, Tài chính`. Điền đúng phòng ban tương ứng mã ký tự giữa. *(0.5 điểm)*

#### Câu 2: Công thức Tính Lương & Thưởng (Mức độ Trung bình — 2.0 điểm)
1. **Cột Chức vụ (0.5 điểm):** Dựa vào 2 ký tự đầu của `Mã NV`, dùng hàm `VLOOKUP` lấy Tên chức vụ từ `BangChucVu`.
2. **Cột Lương ngày & Phụ cấp (0.5 điểm):** Dùng `VLOOKUP` lấy `Lương ngày` (cột 3) và `Phụ cấp` (cột 4) từ `BangChucVu`.
3. **Cột Lương CB (0.5 điểm):** `Lương CB = Ngày công * Lương ngày`. Nếu `Ngày công` > 24 thì những ngày công vượt từ 25 trở đi được nhân hệ số 1.5 (Gợi ý dùng hàm `IF`).
4. **Cột Thưởng KPI (0.25 điểm):** Dựa vào ký tự cuối cùng của `Mã NV`:
   - Nếu là `"A"` thì Thưởng = 2.000.000 VNĐ.
   - Nếu là `"B"` thì Thưởng = 1.000.000 VNĐ.
   - Nếu là `"C"` thì Thưởng = 0 VNĐ.
5. **Cột Thực lĩnh (0.25 điểm):** `Thực lĩnh = Lương CB + Phụ cấp + Thưởng KPI`.

#### Câu 3: Thống kê Quỹ Lương theo Phòng Ban (Mức độ Khá — 1.0 điểm)
Lập **BẢNG THỐNG KÊ QUỸ LƯƠNG PHÒNG BAN**:
- Dùng hàm `SUMIF` tính Tổng thực lĩnh đã chi trả cho từng phòng ban. *(0.5 điểm)*
- Dùng hàm `AVERAGEIF` tính Mức thực lĩnh bình quân của nhân viên từng phòng ban. *(0.5 điểm)*

#### Câu 4: Định dạng Điều kiện, Trích Lọc & Đồ Thị (Mức độ Khá/Giỏi — 1.0 điểm)
1. **Định dạng có điều kiện (Conditional Formatting) (0.5 điểm):**
   - Tô nền màu xanh nhạt (Light Green) cho các ô tại cột `Thực lĩnh` có số tiền >= 20.000.000 VNĐ.
   - Dùng **Advanced Filter** lọc ra các nhân viên thuộc phòng `"Kỹ thuật"` có xếp loại KPI là `"A"`, xuất kết quả sang Sheet `LocNhanSu`.
2. **Vẽ đồ thị (0.5 điểm):**
   - Từ Bảng thống kê quỹ lương ở Câu 3, vẽ biểu đồ hình tròn (Pie Chart 2D hoặc 3D) thể hiện tỷ lệ phần trăm phân bổ quỹ lương giữa các phòng ban.
   - Thêm tiêu đề biểu đồ và hiển thị tỷ lệ % (`Data Labels > Percentage`).
"""

# -------------------------------------------------------------
# ĐỀ 03
# -------------------------------------------------------------
DE_03_CONTENT = """# 📋 ĐỀ THI THỰC HÀNH GIỮA KỲ - ĐỀ SỐ 03

> **Học phần:** Tin học văn phòng nâng cao (2 Tín chỉ)  
> **Đơn vị:** Khoa Công nghệ Thông tin — Đại học Đông Á  
> **Thời gian làm bài:** 90 phút (2 tiết học) — Thang điểm: 10.0  
> **Đối tượng:** Sinh viên trình độ Trung bình – Khá  
> **Chủ đề bài thi:** Quản trị Dịch vụ Khách sạn & Du lịch Nghỉ dưỡng

---

### 📌 HƯỚNG DẪN QUY CÁCH NỘP BÀI THI:
1. Sinh viên tạo thư mục bài làm: `[MSSV]_[HoVaTen]_De03` (Ví dụ: `1042303_LeVanCuong_De03`).
2. Mọi tệp tin kết quả phải lưu vào thư mục này:
   - File Word: `[MSSV]_[HoVaTen]_Word_De03.docx`
   - File Excel: `[MSSV]_[HoVaTen]_Excel_De03.xlsx`
3. Nén thư mục thành file `.zip` và nộp lên hệ thống Canvas LMS / Cổng Khảo thí theo quy định.

---

## PHẦN A. MICROSOFT WORD (4.5 ĐIỂM) — Thời gian khuyến nghị: 40 phút

### Câu 1: Soạn thảo Hợp đồng Dịch vụ & Bảng Biểu (Mức độ Dễ — 2.0 điểm)
1. **Định dạng trang:** Khổ A4 đứng, lề Top: 2cm, Bottom: 2cm, Left: 3cm, Right: 2cm, Font Times New Roman 13pt, giãn dòng 1.5 lines, Before 6pt, After 6pt. *(0.5 điểm)*
2. **Soạn thảo thể thức Hợp đồng:**
   - Tiêu đề: `CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM` / `Độc lập - Tự do - Hạnh phúc`.
   - Tên hợp đồng: `HỢP ĐỒNG DỊCH VỤ LƯU TRÚ VÀ TỔ CHỨC HỘI NGHỊ / Số: 102/HĐ-KSĐA-2026`.
   - Thông tin Bên A (Khách sạn Đông Á Grand Resort) và Bên B (Đoàn đối tác hội thảo). *(0.5 điểm)*
3. **Soạn thảo Bảng danh mục phòng đặt trước (Table):**

| STT | Mã phòng | Hạng phòng | Số lượng phòng | Số đêm lưu trú | Đơn giá phòng/đêm (VNĐ) | Thành tiền (VNĐ) |
| :---: | :---: | :--- | :---: | :---: | :---: | :---: |
| 01 | STD | Standard City View | 05 | 03 | 1.200.000 | 18.000.000 |
| 02 | SUP | Superior Ocean View | 08 | 03 | 1.800.000 | 43.200.000 |
| 03 | DLX | Deluxe Suite Luxury | 04 | 03 | 2.600.000 | 31.200.000 |
| 04 | SUT | Presidential Suite VIP | 01 | 03 | 6.500.000 | 19.500.000 |

   - Định dạng bảng: Gộp ô, căn giữa tiêu đề, kẻ đường viền đôi bao quanh ngoài bảng (`Border Style: Double`), viền trong nét đơn. *(0.5 điểm)*
4. **Chuyển đổi bảng sang text:** Sao chép bảng và chuyển đổi thành văn bản phân cách bởi dấu gạch ngang `-` (`Layout > Convert to Text > Other: -`). *(0.5 điểm)*

### Câu 2: Chia Cột Báo Chí & Tabstop Phiếu Đặt Cọc (Mức độ Trung bình — 1.5 điểm)
1. **Chia cột báo chí (Columns) & Drop Cap:**
   - Soạn thảo đoạn văn bản: *"ĐIỀU KHOẢN VẬN HÀNH & CHÍNH SÁCH BẢO LƯU: Quý khách vui lòng xuất trình giấy tờ tùy thân hợp lệ khi nhận phòng... Thời gian trả phòng tiêu chuẩn là trước 12h00 trưa cùng ngày..."*
   - Chia đoạn văn trên thành **2 cột bằng nhau** có đường kẻ phân cách ở giữa (`Line between`), tạo chữ Drop Cap thụt 3 dòng ở đầu đoạn. *(0.5 điểm)*
2. **Thiết lập Tabstop Phiếu Biên Nhận Tiền Đặt Cọc:**
   - Tạo mẫu phiếu với Leader gạch dưới (`_______`) hoặc chấm bi (`.......`):
     * Khách hàng nộp tiền: `........................................................` Đại diện đoàn: `.....................................`
     * Tổng giá trị hợp đồng: `.....................................................` Số tiền đặt cọc (50%): `...........................`
     * Số tiền còn lại phải thanh toán: `.........................................` Hạn chót thanh toán: `..............................`
     * Phương thức thanh toán: `[  ] Tiền mặt             [  ] Chuyển khoản ngân hàng             [  ] Thẻ tín dụng` *(1.0 điểm)*

### Câu 3: Chú Thích Footnote & Trộn Thư Mail Merge (Mức độ Khá — 1.0 điểm)
1. **Chèn Footnote chú thích (0.5 điểm):**
   - Đặt con trỏ sau cụm từ *"Thời gian trả phòng tiêu chuẩn"* và chèn một chú thích chân trang Footnote: *"Các trường hợp trả phòng muộn sau 18h00 sẽ tính 100% giá trị phòng của một đêm tiếp theo."*
2. **Trộn thư Mail Merge Thư cảm ơn khách hàng VIP (0.5 điểm):**
   - Thiết lập tài liệu mẫu thư cảm ơn và liên kết trường dữ liệu (Họ tên khách, Hạng phòng, Số tiền thanh toán) sẵn sàng xuất danh sách thư trộn.

---

## PHẦN B. MICROSOFT EXCEL (5.5 ĐIỂM) — Thời gian khuyến nghị: 50 phút

### Dữ liệu ban đầu:
Sinh viên nhập bảng tính sau vào `Sheet1` và đổi tên thành `QuanLyKhachSan`:

#### BẢNG THEO DÕI ĐẶT PHÒNG THÁNG 11/2026:
| STT | Mã ĐP | Tên khách hàng | Ngày đến | Ngày đi | Số ngày ở | Hạng phòng | Đơn giá/ngày | Giảm giá | Phải thanh toán |
| :---: | :---: | :--- | :---: | :---: | :---: | :--- | :---: | :---: | :---: |
| 1 | ST-01-V | Johnathan Miller | 02/11/2026 | 08/11/2026 | | | | | |
| 2 | SU-02-T | Trần Bảo Yến | 05/11/2026 | 07/11/2026 | | | | | |
| 3 | DL-03-V | Michael Chang | 10/11/2026 | 18/11/2026 | | | | | |
| 4 | ST-04-T | Nguyễn Gia Huy | 12/11/2026 | 14/11/2026 | | | | | |
| 5 | VI-05-V | David Robert | 15/11/2026 | 20/11/2026 | | | | | |
| 6 | DL-06-T | Lê Phương Mai | 18/11/2026 | 21/11/2026 | | | | | |
| 7 | SU-07-V | Vũ Khánh Huyền | 22/11/2026 | 29/11/2026 | | | | | |
| 8 | VI-08-V | Takahashi Kenji | 25/11/2026 | 28/11/2026 | | | | | |

#### BẢNG THAM CHIẾU GIÁ PHÒNG THEO HẠNG (Bố trí nằm ngang - Bảng phụ 1):
| Mã HP | ST | SU | DL | VI |
| :---: | :---: | :---: | :---: | :---: |
| Tên hạng phòng | Standard | Superior | Deluxe | Presidential VIP |
| Đơn giá ngày (VNĐ) | 1.200.000 | 1.800.000 | 2.600.000 | 6.500.000 |

*Quy ước Mã Đặt Phòng (`Mã ĐP`):*
- 2 ký tự đầu: Mã hạng phòng (`ST`, `SU`, `DL`, `VI`).
- 2 ký tự số ở giữa: Số thứ tự đoàn.
- 1 ký tự cuối: Loại khách hàng (`V`: Khách VIP, `T`: Khách thường).

---

### YÊU CẦU THỰC HIỆN:

#### Câu 1: Định dạng, Đặt tên vùng & Data Validation (Mức độ Dễ — 1.5 điểm)
1. Định dạng bảng biểu chuẩn, cột Ngày tháng hiển thị định dạng `dd/mm/yyyy`, cột số tiền phân cách hàng nghìn. *(0.5 điểm)*
2. Đặt tên vùng cho bảng tham chiếu phụ nằm ngang là `BangGiaPhong`. *(0.5 điểm)*
3. Dùng **Data Validation** kiểu **Date** cho cột `Ngày đi`, ràng buộc ngày đi phải lớn hơn hoặc bằng `Ngày đến`. *(0.5 điểm)*

#### Câu 2: Công thức Dò tìm & Tính toán Tiền Phòng (Mức độ Trung bình — 2.0 điểm)
1. **Cột Số ngày ở (0.5 điểm):** `Số ngày ở = Ngày đi - Ngày đến`. Nếu ngày đi trùng với ngày đến thì tính là `1` ngày (dùng hàm `IF`).
2. **Cột Hạng phòng & Đơn giá/ngày (0.75 điểm):** Sử dụng hàm **HLOOKUP** kết hợp hàm `LEFT` tra cứu theo 2 ký tự đầu của `Mã ĐP` trong `BangGiaPhong` (dòng 2 là Tên hạng, dòng 3 là Đơn giá).
3. **Cột Giảm giá (0.5 điểm):** Sử dụng hàm `IF` kết hợp hàm `OR`:
   - Nếu `Số ngày ở` >= 7 HOẶC khách hàng có ký tự cuối là `"V"` (Khách VIP) thì được giảm 10% của Tiền phòng thô (`Số ngày ở * Đơn giá/ngày`).
   - Các trường hợp khác Giảm giá = 0.
4. **Cột Phải thanh toán (0.25 điểm):** `Phải thanh toán = (Số ngày ở * Đơn giá/ngày) - Giảm giá`.

#### Câu 3: Thống kê Doanh thu Dịch vụ (Mức độ Khá — 1.0 điểm)
Lập **BẢNG THỐNG KÊ DOANH THU THEO HẠNG PHÒNG**:
- Dùng hàm `SUMIF` tính tổng số tiền phải thanh toán theo từng Hạng phòng. *(0.5 điểm)*
- Dùng hàm `COUNTIF` tính số lượt đặt phòng theo từng Hạng phòng. *(0.5 điểm)*

#### Câu 4: Sắp xếp, Báo cáo PivotTable & Đồ Thị (Mức độ Khá/Giỏi — 1.0 điểm)
1. **Sắp xếp & PivotTable (0.5 điểm):**
   - Sắp xếp bảng tính chính theo cột `Hạng phòng` tăng dần, nếu trùng hạng phòng thì sắp xếp theo `Phải thanh toán` giảm dần.
   - Tạo một bảng tổng hợp **PivotTable** trên Sheet mới `BaoCaoPivot` thống kê tổng doanh thu theo Hạng phòng và loại khách (VIP / Thường).
2. **Vẽ đồ thị (0.5 điểm):**
   - Vẽ biểu đồ cột 3D hoặc 2D thể hiện Doanh thu theo từng Hạng phòng, thêm đầy đủ tiêu đề và nhãn số liệu.
"""

# -------------------------------------------------------------
# ĐÁP ÁN VÀ BIỂU ĐIỂM CHI TIẾT
# -------------------------------------------------------------
RUBRIC_CONTENT = """# 📝 HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT — BỘ 3 ĐỀ THI GIỮA KỲ

> **Học phần:** Tin học văn phòng nâng cao (2 Tín chỉ) — Đại học Đông Á  
> **Thời gian làm bài:** 90 phút (2 tiết) — Thang điểm: 10.0 (Word 4.5đ, Excel 5.5đ)

---

## I. HƯỚNG DẪN CHẤM ĐỀ THI SỐ 01

### PHẦN A. MICROSOFT WORD (4.5 ĐIỂM)
- **Câu 1 (2.0 điểm):**
  * Khổ giấy A4, đúng lề (Top 2, Bottom 2, Left 3, Right 2 cm), Font Times New Roman 13pt, giãn dòng 1.5 lines, Before/After 6pt: `0.5 điểm`.
  * Đúng thể thức Quốc hiệu - Tiêu ngữ, Tên cơ quan, Tiêu đề thông báo in đậm căn giữa: `0.5 điểm`.
  * Bảng biểu 5 cột 5 dòng: gộp ô, căn giữa tiêu đề, căn lề đúng cột STT/Số lượng/Mức lương, tô Shading: `0.5 điểm`.
  * Sao chép bảng và Convert to Text bằng dấu Tab chính xác: `0.5 điểm`.
- **Câu 2 (1.5 điểm):**
  * Drop Cap 3 dòng cho đoạn văn bản đúng quy chuẩn: `0.5 điểm`.
  * Đặt Tabstop Leader chấm bi (kiểu 2) thẳng hàng cho 5 dòng phiếu ứng viên: `1.0 điểm` (nếu gõ tay dấu chấm không cho điểm phần tabstop).
- **Câu 3 (1.0 điểm):**
  * Section Break (Next Page) xoay ngang trang 2 (Landscape), trang 1 giữ nguyên dọc (Portrait): `0.5 điểm`.
  * Header/Footer trang 2 ngắt Link to Previous, chèn Họ tên thí sinh bên trái, số trang bên phải: `0.5 điểm`.

### PHẦN B. MICROSOFT EXCEL (5.5 ĐIỂM)
- **Câu 1 (1.5 điểm):**
  * Định dạng bảng đầy đủ, viền khung, căn lề, format số phân cách hàng nghìn: `0.5 điểm`.
  * Đặt tên vùng `BangGia` chính xác: `0.5 điểm`.
  * Data Validation danh sách Dropdown List 4 hãng: `0.5 điểm`.
- **Câu 2 (2.0 điểm):**
  * Cột Tên sản phẩm: `=VLOOKUP(LEFT(B2, 2), BangGia, 2, 0)`: `0.5 điểm`.
  * Cột Đơn giá: `=VLOOKUP(LEFT(B2, 2), BangGia, IF(RIGHT(B2, 1)="1", 3, 4), 0)`: `0.75 điểm`.
  * Cột Thuế VAT: `=IF(F2>=5, 8% * (F2 * G2), 10% * (F2 * G2))`: `0.5 điểm`.
  * Cột Thành tiền: `=(F2 * G2) + H2`: `0.25 điểm`.
- **Câu 3 (1.0 điểm):**
  * Số lượt HĐ: `=COUNTIF($E$2:$E$9, "Dell")`: `0.5 điểm`.
  * Tổng thành tiền: `=SUMIF($E$2:$E$9, "Dell", $I$2:$I$9)`: `0.5 điểm`.
- **Câu 4 (1.0 điểm):**
  * Thiết lập vùng điều kiện và Advanced Filter sang Sheet `KetQuaLoc`: `0.5 điểm`.
  * Vẽ biểu đồ Clustered Column có Chart Title và Data Labels: `0.5 điểm`.

---

## II. HƯỚNG DẪN CHẤM ĐỀ THI SỐ 02

### PHẦN A. MICROSOFT WORD (4.5 ĐIỂM)
- **Câu 1 (2.0 điểm):**
  * Định dạng Page Setup chuẩn thể thức A4, giãn đoạn, giãn dòng: `0.5 điểm`.
  * Soạn thảo đúng thể thức Quyết định khen thưởng, số hiệu, căn cứ: `0.5 điểm`.
  * Bảng danh sách 6 cột, tô màu tiêu đề, bật Repeat Header Rows: `0.5 điểm`.
  * Sao chép và Convert to Text phân cách bằng dấu phẩy: `0.5 điểm`.
- **Câu 2 (1.5 điểm):**
  * Tabstop Leader chấm bi cho mẫu phiếu đề xuất thẳng hàng: `1.0 điểm`.
  * Chèn SmartArt quy trình 3 bước trực quan: `0.5 điểm`.
- **Câu 3 (1.0 điểm):**
  * Thiết lập Multilevel List 2 cấp độ liên kết Heading 1 và 2: `0.5 điểm`.
  * Chèn Mục lục tự động (Table of Contents) ở đầu tài liệu: `0.5 điểm`.

### PHẦN B. MICROSOFT EXCEL (5.5 ĐIỂM)
- **Câu 1 (1.5 điểm):**
  * Kẻ viền bảng, căn lề ô, format tiền tệ có dấu phân cách hàng nghìn: `0.5 điểm`.
  * Đặt tên vùng `BangChucVu`: `0.5 điểm`.
  * Data Validation chọn Phòng ban: `0.5 điểm`.
- **Câu 2 (2.0 điểm):**
  * Cột Chức vụ: `=VLOOKUP(LEFT(B2, 2), BangChucVu, 2, 0)`: `0.5 điểm`.
  * Cột Lương ngày: `=VLOOKUP(LEFT(B2, 2), BangChucVu, 3, 0)` và Phụ cấp: `=VLOOKUP(LEFT(B2, 2), BangChucVu, 4, 0)`: `0.5 điểm`.
  * Cột Lương CB: `=IF(F2>24, (24*G2) + (F2-24)*G2*1.5, F2*G2)`: `0.5 điểm`.
  * Cột Thưởng KPI: `=IF(RIGHT(B2, 1)="A", 2000000, IF(RIGHT(B2, 1)="B", 1000000, 0))`: `0.25 điểm`.
  * Cột Thực lĩnh: `=H2 + I2 + J2`: `0.25 điểm`.
- **Câu 3 (1.0 điểm):**
  * Tổng thực lĩnh phòng: `=SUMIF($D$2:$D$9, "Kỹ thuật", $K$2:$K$9)`: `0.5 điểm`.
  * Thực lĩnh bình quân: `=AVERAGEIF($D$2:$D$9, "Kỹ thuật", $K$2:$K$9)`: `0.5 điểm`.
- **Câu 4 (1.0 điểm):**
  * Conditional Formatting tô màu xanh ô Thực lĩnh >= 20.000.000 & Advanced Filter: `0.5 điểm`.
  * Biểu đồ tròn Pie Chart hiển thị tỷ lệ % quỹ lương: `0.5 điểm`.

---

## III. HƯỚNG DẪN CHẤM ĐỀ THI SỐ 03

### PHẦN A. MICROSOFT WORD (4.5 ĐIỂM)
- **Câu 1 (2.0 điểm):**
  * Định dạng A4, lề chuẩn, Font Times New Roman 13pt, Before/After 6pt: `0.5 điểm`.
  * Thể thức hợp đồng kinh tế Bên A, Bên B rõ ràng: `0.5 điểm`.
  * Bảng phòng biểu diễn viền ngoài nét đôi, viền trong nét đơn: `0.5 điểm`.
  * Convert to Text phân cách bằng dấu `-`: `0.5 điểm`.
- **Câu 2 (1.5 điểm):**
  * Chia 2 cột báo chí có vạch kẻ Line between & Drop Cap 3 dòng: `0.5 điểm`.
  * Tabstop Phiếu biên nhận tiền đặt cọc có Leader thẳng hàng: `1.0 điểm`.
- **Câu 3 (1.0 điểm):**
  * Chèn Footnote đúng vị trí chân trang giải thích giờ trả phòng: `0.5 điểm`.
  * Thiết lập mẫu thư Mail Merge gắn các trường thông tin: `0.5 điểm`.

### PHẦN B. MICROSOFT EXCEL (5.5 ĐIỂM)
- **Câu 1 (1.5 điểm):**
  * Định dạng bảng ngày tháng `dd/mm/yyyy` và tiền tệ: `0.5 điểm`.
  * Đặt tên vùng bảng nằm ngang `BangGiaPhong`: `0.5 điểm`.
  * Data Validation ngày đi >= ngày đến: `0.5 điểm`.
- **Câu 2 (2.0 điểm):**
  * Cột Số ngày ở: `=IF(E2=D2, 1, E2 - D2)`: `0.5 điểm`.
  * Cột Hạng phòng: `=HLOOKUP(LEFT(B2, 2), BangGiaPhong, 2, 0)` và Đơn giá: `=HLOOKUP(LEFT(B2, 2), BangGiaPhong, 3, 0)`: `0.75 điểm`.
  * Cột Giảm giá: `=IF(OR(F2>=7, RIGHT(B2, 1)="V"), 10% * (F2 * H2), 0)`: `0.5 điểm`.
  * Cột Phải thanh toán: `=(F2 * H2) - I2`: `0.25 điểm`.
- **Câu 3 (1.0 điểm):**
  * Doanh thu theo hạng: `=SUMIF($G$2:$G$9, "Standard", $J$2:$J$9)`: `0.5 điểm`.
  * Số lượt đặt phòng: `=COUNTIF($G$2:$G$9, "Standard")`: `0.5 điểm`.
- **Câu 4 (1.0 điểm):**
  * Sort bảng tính 2 cấp độ và tạo PivotTable trên sheet `BaoCaoPivot`: `0.5 điểm`.
  * Vẽ biểu đồ cột doanh thu hạng phòng có nhãn số liệu: `0.5 điểm`.
"""

files_to_write = [
    ("DE_THI_THUC_HANH_SO_01.md", DE_01_CONTENT),
    ("DE_THI_THUC_HANH_SO_02.md", DE_02_CONTENT),
    ("DE_THI_THUC_HANH_SO_03.md", DE_03_CONTENT),
    ("DAP_AN_VA_BIEU_DIEM_3_DE.md", RUBRIC_CONTENT)
]

for fname, content in files_to_write:
    fpath = os.path.join(EXAMS_DIR, fname)
    with open(fpath, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Đã tạo file: {fpath}")

# Nén trọn bộ 3 đề thi thành file zip
import zipfile
zip_path = os.path.join(EXAMS_DIR, "Bo_3_De_Thi_Giua_Ky_TinHocVanPhong.zip")
with zipfile.ZipFile(zip_path, "w", zipfile.ZIP_DEFLATED) as zipf:
    for fname, _ in files_to_write:
        fpath = os.path.join(EXAMS_DIR, fname)
        zipf.write(fpath, arcname=fname)
print(f"Đã đóng gói file zip: {zip_path}")

