# Hướng dẫn kết nối Google Sheets & Google Apps Script Web App

Ứng dụng **Kids Chinese Learning App** hỗ trợ lưu trữ và đồng bộ hóa tiến độ học tập của bé trực tiếp vào Google Sheets thông qua Google Apps Script Web App API.

---

## 3 Bước Cực Kỳ Đơn Giản:

### Bước 1: Tạo Google Sheet mới
1. Truy cập [Google Sheets](https://sheets.new) để tạo 1 bảng tính mới.
2. Đặt tên bảng tính tùy ý, ví dụ: `Kids_Chinese_Database`.

### Bước 2: Dán mã Google Apps Script
1. Trên thanh menu Google Sheets, chọn **Tiện ích mở rộng (Extensions)** ➔ **Apps Script**.
2. Xóa toàn bộ nội dung mặc định trong trình chỉnh sửa.
3. Mở file [google_apps_script/Code.gs](./Code.gs), sao chép toàn bộ mã nguồn và dán vào Apps Script.
4. Nhấn biểu tượng 💾 **Lưu (Save)**.
5. Tại thanh công cụ phía trên, chọn hàm `setupDatabase` trong danh sách hàm và nhấn nút **▶ Chạy (Run)** một lần.
   - Google sẽ yêu cầu bạn cấp quyền (Review permissions), hãy chọn tài khoản của bạn, nhấn **Advanced (Nâng cao)** ➔ **Go to Untitled project (unsafe)** ➔ **Allow (Cho phép)**.
   - *Ngay lập tức, 3 sheet `Users`, `Lessons`, và `User_Progress` sẽ được tự động tạo với giao diện màu sắc và dữ liệu các bài học mẫu!*

### Bước 3: Triển khai thành Web App (Deploy Web App)
1. Ở góc trên bên phải, nhấn nút xanh **Triển khai (Deploy)** ➔ chọn **Quản lý bản triển khai mới (New deployment)**.
2. Nhấn vào biểu tượng bánh răng ⚙️ bên cạnh "Chọn loại" (Select type) ➔ Chọn **Ứng dụng web (Web App)**.
3. Cấu hình như sau:
   - **Mô tả (Description):** `Kids Chinese API v1`
   - **Thực thi dưới dạng (Execute as):** `Tôi (Me)`
   - **Ai có quyền truy cập (Who has access):** Chọn **Bất kỳ ai (Anyone)** *(Quan trọng: phải chọn Anyone để app kết nối được mà không bị chặn xác thực)*.
4. Nhấn **Triển khai (Deploy)**.
5. Sao chép dòng **URL ứng dụng web (Web App URL)** có dạng:
   `https://script.google.com/macros/s/AKfycbx.../exec`

### Bước 4: Dán vào ứng dụng Kids Chinese
1. Mở ứng dụng web **Kids Chinese Learning App**.
2. Nhấn vào biểu tượng bánh răng **Cài đặt Google Sheets** (góc trên bên phải hoặc màn hình đăng nhập).
3. Dán đường link Web App URL vào và bấm **Lưu & Kiểm tra kết nối**.
4. Ứng dụng sẽ tự động đồng bộ hóa mọi tiến độ, bài học và số sao của bé!
