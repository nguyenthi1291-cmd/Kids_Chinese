# Kids Chinese Learning App (Song Ngữ Trung - Việt) 🐼

Ứng dụng web học tiếng Trung sinh động, tương tác cao dành cho trẻ em với giao diện hoạt hình Pastel, phát âm chuẩn Web Speech API, mini-game trắc nghiệm và kết nối đồng bộ cơ sở dữ liệu **Google Sheets** (thông qua **Google Apps Script Web App API**).

---

## 🌟 1. Tính Năng Nổi Bật

1. **Song Ngữ Trung - Việt**:
   - Hiển thị Chữ Hán to, đẹp mắt với phông chữ thiếu nhi (`ZCOOL KuaiLe`, `Noto Sans SC`).
   - Phiên âm Bính Âm (Pinyin) có dấu thanh điệu sắc nét.
   - Nghĩa tiếng Việt dễ hiểu kèm hình ảnh Emoji hoạt họa ngộ nghĩnh.
   - Mẫu câu ứng dụng vui tươi trong đời sống thường ngày cho bé.

2. **Hệ Thống Âm Thanh Đa Dạng**:
   - Tích hợp **Web Speech API** phát âm chuẩn giọng phổ thông (`zh-CN`).
   - Nút **"Đọc Chậm 🐢"** hỗ trợ bé nhại theo và phát âm chuẩn từng thanh điệu.
   - Bộ giả lập hiệu ứng âm thanh **Web Audio API**: tiếng ting-ting khen ngợi, tiếng tò-te nhẹ nhàng khi cần thử lại, tiếng kèn vinh danh khi hoàn thành bài.

3. **Lộ Trình Học Đa Dạng (Curriculum)**:
   - Bài 1: **Số đếm cơ bản (数字 - Shùzì)** (1 đến 10)
   - Bài 2: **Thế giới Động vật (动物 - Dòngwù)** (Mèo, Chó, Gấu trúc, Thỏ, Chim, Cá)
   - Bài 3: **Màu sắc diệu kỳ (颜色 - Yánsè)** (Đỏ, Vàng, Xanh lam, Xanh lá, Trắng, Đen)
   - Bài 4: **Gia đình yêu thương (家庭 - Jiātíng)** (Bố, Mẹ, Anh trai, Chị gái, Ông, Bà)
   - Bài 5: **Hoa quả tươi ngon (水果 - Shuǐguǒ)** (Táo, Chuối, Dưa hấu, Dâu tây, Nho, Cam)
   - Bài 6: **Chào hỏi & Giao tiếp (问候 - Wènhòu)** (Xin chào, Tạm biệt, Cảm ơn, Đừng khách sáo, Xin lỗi...)

4. **Mini-Game Ôn Tập Tương Tác**:
   - Dạng 1: Nghe phát âm & Chọn hình/nghĩa đúng.
   - Dạng 2: Nhìn Chữ Hán & Chọn nghĩa tiếng Việt.
   - Dạng 3: Nhìn nghĩa tiếng Việt & Chọn Chữ Hán tương ứng.

5. **Màn Hình Vinh Danh & Thưởng Sao ⭐**:
   - Hiệu ứng pháo hoa Confetti rực rỡ ăn mừng.
   - Thưởng sao vàng (tối đa 3 sao mỗi bài) tích lũy vào tài khoản bé.
   - Lời khen ngợi song ngữ: *太棒了! (Tài bàng le! - Bé thật giỏi!)*

6. **Góc Ôn Tập Bài Cũ (Review Mode)**:
   - Cho phép bé chọn lại bất kỳ bài đã học để luyện tập bất cứ lúc nào mà không bị khóa.

7. **Cơ Sở Dữ Liệu Google Sheets (Google Apps Script API)**:
   - Tự động đồng bộ tiến độ học, điểm số, bài đã xong và số sao tích lũy lên Google Sheets.
   - Cơ chế Fallback Offline thông minh: Nếu chưa gắn link Google Sheet, ứng dụng tự động lưu vào LocalStorage giúp bé luôn có thể học mượt mà mọi lúc mọi nơi!

---

## 🚀 2. Cách Khởi Động Nhanh Trên Máy

- **Cách 1 (1 Click):** Nhấp đúp chuột vào file `start_app.bat` trong thư mục dự án.
- **Cách 2 (Bằng dòng lệnh):**
  ```powershell
  # Chạy dev server
  npm run dev
  ```
  Trình duyệt sẽ tự động mở tại: `http://localhost:5173`

---

## 📊 3. Kết Nối Google Sheets

Toàn bộ mã nguồn backend Google Apps Script và hướng dẫn chi tiết nằm trong thư mục:
- Mã nguồn: [`google_apps_script/Code.gs`](./google_apps_script/Code.gs)
- Hướng dẫn cài đặt 3 bước: [`google_apps_script/HUONG_DAN_GOOGLE_SHEETS.md`](./google_apps_script/HUONG_DAN_GOOGLE_SHEETS.md)

Bảng tính gồm 3 sheet:
1. `Users`: Quản lý tài khoản bé (`user_id`, `child_name`, `last_login`, `total_stars`, `avatar`).
2. `Lessons`: Nội dung bài học (`lesson_id`, `topic_vn`, `topic_cn`, `level`, `content_json`).
3. `User_Progress`: Lưu tiến độ (`user_id`, `lesson_id`, `status`, `score`, `updated_at`).

Sau khi Deploy Web App từ Google Sheets, chỉ cần bấm biểu tượng **Cài đặt ⚙️** trên góc màn hình ứng dụng và dán link vào là xong!
