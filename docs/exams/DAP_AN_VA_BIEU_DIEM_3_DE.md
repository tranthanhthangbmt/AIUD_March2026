# 📝 HƯỚNG DẪN CHẤM & ĐÁP ÁN CHI TIẾT — BỘ 3 ĐỀ THI GIỮA KỲ

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
