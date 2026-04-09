**Slide 1: Dữ liệu là gì?**
*   **Định nghĩa:** Dữ liệu là các thông tin hoặc giá trị được thu thập, lưu trữ, xử lý nhằm mục đích phục vụ cho phân tích, truyền thông tin, ra quyết định hoặc vận hành hệ thống.
*   **Các định dạng dữ liệu phổ biến:** Số học, văn bản, hình ảnh, âm thanh, video, và dữ liệu nhị phân.
*   **Giá trị của dữ liệu:** Mọi hoạt động trên môi trường mạng (tìm kiếm, giao dịch, tương tác mạng xã hội) đều tạo ra dữ liệu. Khi được phân tích, chúng mang lại giá trị to lớn về kinh tế, khoa học và quản trị.

**Slide 2: Khái niệm Dữ liệu cá nhân**
*   **Định nghĩa:** Là loại dữ liệu đặc biệt, liên quan trực tiếp hoặc gián tiếp đến một cá nhân đã được xác định hoặc có thể được xác định (ví dụ thông qua CMND, tên, địa chỉ),.
*   **Các loại dữ liệu cá nhân phổ biến:**
    *   Thông tin định danh và liên lạc: Họ tên, ngày sinh, email, số điện thoại.
    *   Dữ liệu sinh trắc học và định vị: Vân tay, khuôn mặt, võng mạc, vị trí GPS, địa chỉ IP,.
    *   Dữ liệu nhạy cảm khác: Dữ liệu tài chính, hồ sơ y tế, lịch sử hành vi tiêu dùng/tìm kiếm.

**Slide 3: Tầm quan trọng của Dữ liệu cá nhân**
*   **Là tài sản vô hình có giá trị:** Dữ liệu cá nhân là "nguyên liệu" để các công ty công nghệ xây dựng hồ sơ hành vi, cá nhân hóa dịch vụ và tối ưu quảng cáo.
*   **Khó thay thế nếu bị rò rỉ:** Không giống mật khẩu có thể đổi, các thông tin như CMND hay dữ liệu sinh trắc học một khi bị rò rỉ thì cá nhân sẽ mất kiểm soát hoàn toàn.
*   **Là mục tiêu chính của tội phạm mạng:**
    *   Sử dụng để đánh cắp danh tính (mạo danh để vay tiền, mở tài khoản) và lừa đảo tài chính.
    *   Nhằm mục đích tống tiền, đe dọa, theo dõi hoặc làm mất uy tín cá nhân/tổ chức.

**Slide 4: Các loại hình tấn công dữ liệu (1) - Mật khẩu & Đánh cắp dữ liệu**
*   **Tấn công mật khẩu:** Khai thác điểm yếu khi người dùng sử dụng mật khẩu ngắn, dễ đoán (ví dụ: "123456", "password") hoặc dùng chung một mật khẩu cho nhiều tài khoản,,.
*   **Phương pháp tấn công:** Phổ biến nhất là bẻ khóa ngoại tuyến (offline cracking) và tấn công từ điển (dictionary attack) bằng cách dùng máy tính mạnh để so khớp mã hóa mật khẩu,.
*   **Đánh cắp dữ liệu:** Dữ liệu bị đánh cắp thông qua phần mềm gián điệp, lừa đảo, hoặc do sự bất cẩn từ người nội bộ trong tổ chức,. Hậu quả có thể dẫn đến việc kẻ tấn công sử dụng dữ liệu để bán kiếm lời hoặc tống tiền (ransomware).

**Slide 5: Các loại hình tấn công dữ liệu (2) - Lừa đảo xã hội (Social Engineering)**
*   **Khái niệm:** Kỹ thuật thao túng tâm lý con người để thuyết phục nạn nhân tự nguyện cung cấp thông tin bí mật hoặc thực hiện hành động rủi ro, thay vì tấn công trực tiếp vào công nghệ.
*   **Phishing (Lừa đảo trực tuyến):** Gửi email hoặc tin nhắn giả mạo các doanh nghiệp hợp pháp để lừa người dùng nhập mật khẩu, số thẻ tín dụng.
*   **Các biến thể của Phishing:** Spear phishing (nhắm vào cá nhân cụ thể), Whaling (nhắm vào nhân sự cấp cao), Vishing (gọi điện thoại giả mạo),,.
*   **Các thủ đoạn khác:** Typosquatting (đăng ký tên miền sai chính tả), Pretexting (tạo kịch bản giả mạo để lấy thông tin), Nhìn trộm (Shoulder surfing),,,.

**Slide 6: Biện pháp bảo vệ quyền riêng tư (1) - Quản lý mật khẩu & 2FA**
*   **Sử dụng Trình quản lý mật khẩu:** Dùng các công cụ (như Bitwarden, LastPass, 1Password) để tạo, lưu trữ an toàn và tự động điền các mật khẩu mạnh, duy nhất cho từng tài khoản.
*   **Xác thực đa yếu tố (2FA):** Là lớp bảo vệ tăng cường bắt buộc, yêu cầu hai yếu tố độc lập để xác minh danh tính, giúp ngăn chặn truy cập trái phép ngay cả khi lộ mật khẩu,.
*   **Các hình thức 2FA phổ biến:** 
    *   Mã xác minh qua SMS/Email.
    *   Ứng dụng xác thực (Google/Microsoft Authenticator).
    *   Sinh trắc học (vân tay, khuôn mặt) và khóa bảo mật phần cứng (YubiKey).

**Slide 7: Biện pháp bảo vệ quyền riêng tư (2) - Mã hóa & Công cụ**
*   **Mã hóa dữ liệu (Cryptography):** Biến đổi dữ liệu thành dạng không thể đọc được (ciphertext) để bảo vệ tính bảo mật và toàn vẹn cả khi lưu trữ lẫn truyền tải,.
*   **Công cụ mã hóa thiết yếu:** Sử dụng BitLocker (Windows), VeraCrypt (mã hóa ổ đĩa/tệp tin) hoặc tính năng mã hóa của nền tảng đám mây (Google Workspace),.
*   **Bảo vệ kết nối:** Sử dụng Mạng riêng ảo (VPN) để mã hóa lưu lượng truy cập, đặc biệt khi dùng Wi-Fi công cộng,.
*   **Kiểm toán quyền riêng tư (Privacy Audit):** Định kỳ kiểm tra cài đặt riêng tư trên mạng xã hội và thu hồi quyền truy cập (micro, máy ảnh, vị trí) của các ứng dụng không cần thiết,.

**Slide 8: Sức khỏe số (Digital Health) và các nguy cơ**
*   **Khái niệm Sức khỏe số:** Trạng thái an toàn và khỏe mạnh về mặt thể chất, tâm lý và xã hội khi tương tác với các thiết bị công nghệ và môi trường mạng,.
*   **Tác động thể chất:** Việc sử dụng thiết bị liên tục dễ dẫn đến hội chứng thị giác máy tính (mỏi mắt), sai tư thế (đau lưng, cổ) và rối loạn giấc ngủ.
*   **Tác động tâm lý:** Đối mặt với tình trạng quá tải thông tin, căng thẳng kỹ thuật số (digital stress), hội chứng sợ bị bỏ lỡ (FOMO) và nguy cơ nghiện Internet.

**Slide 9: Kỹ năng và biện pháp bảo vệ Sức khỏe số**
*   **Quản lý thời gian sử dụng thiết bị (Screen time):** Sử dụng các công cụ theo dõi để thiết lập giới hạn thời gian hợp lý cho các ứng dụng giải trí, mạng xã hội.
*   **Nghỉ ngơi khoa học:** Áp dụng các quy tắc bảo vệ mắt (như 20-20-20), thường xuyên vận động và giãn cơ sau những khoảng thời gian ngồi trước màn hình.
*   **Thực hành "Cai nghiện số" (Digital Detox):** 
    *   Xóa các ứng dụng mạng xã hội gây xao nhãng khỏi màn hình chính.
    *   Tắt các thông báo đẩy (push notifications) không quan trọng.
    *   Chuyển màn hình sang chế độ xám để giảm sự hấp dẫn thị giác.

**Slide 10: Khái niệm và duy trì An sinh số (Digital Wellbeing)**
*   **Khái niệm An sinh số:** Là việc sử dụng công nghệ một cách an toàn, tự tin, có chủ đích nhằm nâng cao chất lượng cuộc sống mà không để lại tác động tiêu cực.
*   **Cân bằng cuộc sống số:** Quản lý tốt thời gian trực tuyến, nhận thức được tác động của Internet, kiểm soát cảm xúc trên không gian mạng và duy trì các tương tác, mối quan hệ lành mạnh ngoài đời thực.
*   **Xây dựng "Khẩu phần thông tin" lành mạnh:** Chủ động theo dõi các nguồn thông tin uy tín, phát triển tư duy phản biện (áp dụng phương pháp SIFT) để tránh xa tin giả và các nội dung độc hại,.

**Slide 11: Trách nhiệm Sinh viên (1) - Hành xử có văn hóa (Netiquette)**
*   **Netiquette là gì?** Là bộ quy tắc ứng xử trên mạng, với nguyên tắc vàng: "Remember the Human" (Hãy nhớ phía sau màn hình là một con người thật).
*   **Tôn trọng sự khác biệt:** Chấp nhận bất đồng quan điểm, phản biện vào lập luận chứ không công kích cá nhân.
*   **Think Before You Post/Share:** Suy nghĩ kỹ trước khi đăng tải hoặc chia sẻ; cân nhắc xem nội dung có chính xác và có làm tổn thương ai không.
*   **Quản lý danh tiếng số:** Chủ động xây dựng "thương hiệu cá nhân" và dấu chân số tích cực thông qua việc chia sẻ bài viết học thuật, dự án chuyên ngành,.

**Slide 12: Trách nhiệm Sinh viên (2) - Lan tỏa tích cực & "Đồng minh số"**
*   **Lan tỏa giá trị tích cực:** Chủ động tương tác và chia sẻ kiến thức hữu ích, dự án cộng đồng để chống lại sự tiêu cực và tin giả,.
*   **Thực hành "Đồng minh số" (Digital Allyship):** Sử dụng tiếng nói cá nhân để ủng hộ và bảo vệ các nhóm yếu thế trên không gian mạng.
*   **Hành động cụ thể:** Lắng nghe, khuếch đại tiếng nói của họ và can thiệp một cách an toàn khi chứng kiến người khác bị công kích,.
*   **Hành động vì cộng đồng:** Ký tên kiến nghị, tham gia chiến dịch yêu cầu các nền tảng công nghệ bảo vệ người dùng,.

**Slide 13: Hỗ trợ tâm lý bạn bè trên không gian mạng**
*   **Nhận diện dấu hiệu bất ổn:** Bạn bè đăng tải nhiều nội dung cô đơn, tuyệt vọng, đột ngột biến mất khỏi mạng xã hội hoặc hoạt động một cách ám ảnh,.
*   **Cách tiếp cận:** Nhắn tin hỏi thăm một cách riêng tư, tế nhị; tuyệt đối không bình luận công khai trên bài đăng của họ.
*   **Lắng nghe không phán xét:** Xác nhận cảm xúc của bạn bè thay vì đưa ra những lời khuyên sáo rỗng,.
*   **Kết nối chuyên gia:** Chủ động lưu thông tin và kết nối bạn bè với Phòng Tư vấn Tâm lý của trường hoặc các dịch vụ khẩn cấp; không tự ý đóng vai trò bác sĩ tâm lý,.

**Slide 14: BÀI TẬP TÌNH HUỐNG**
*   **Tình huống:** Bạn lướt mạng xã hội và thấy một người bạn cùng lớp (bình thường rất ít nói) đăng một dòng trạng thái (status) thể hiện sự bế tắc, tuyệt vọng. Bên dưới phần bình luận, có một nhóm tài khoản lạ đang liên tục buông lời miệt thị, công kích cá nhân và chế giễu ngoại hình của bạn ấy.
*   **Yêu cầu:** Dựa trên các nguyên tắc về An sinh số và Trách nhiệm của sinh viên, bạn **NÊN LÀM GÌ** và **KHÔNG NÊN LÀM GÌ** trong tình huống này?

**Slide 15: ĐÁP ÁN BÀI TẬP TÌNH HUỐNG**
*   **NHỮNG VIỆC NÊN LÀM:**
    *   **Hỗ trợ cá nhân:** Lập tức nhắn tin riêng (inbox) để hỏi thăm, thể hiện sự quan tâm và lắng nghe không phán xét.
    *   **Bảo vệ (Đồng minh số):** Báo cáo (Report) các bình luận công kích, bắt nạt trực tuyến cho nền tảng mạng xã hội.
    *   **Hỗ trợ chuyên sâu:** Gợi ý bạn mình tạm thời ngắt kết nối (Digital detox) và hỗ trợ liên hệ với phòng công tác sinh viên/chuyên gia tâm lý nếu tình trạng nghiêm trọng,.
*   **NHỮNG VIỆC KHÔNG NÊN LÀM:**
    *   **Không bình luận công khai:** Tránh cãi vã với nhóm bắt nạt ngay trên bài đăng, điều này có thể làm sự việc leo thang.
    *   **Không chia sẻ (Share):** Tuyệt đối không lan truyền bài viết tiêu cực đó ra các hội nhóm khác.
    *   **Không tự chẩn đoán:** Tránh đưa ra các lời khuyên sáo rỗng hoặc tự chẩn đoán bệnh tâm lý cho bạn mình.