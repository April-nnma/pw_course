# Tổng hợp kiến thức đã học Lesson2
## 1. Git cơ bản
* **1.1 Có 3 vùng làm việc:**
    * **Working Directory:** Thư mục làm việc thực tế chứa mã nguồn (`git init`).
    * **Staging Area:** Nơi lưu tạm các thay đổi để chuẩn bị commit (`git add`).
    * **Local Repository:** Kho lưu trữ cục bộ lưu lại các commit (`git commit`)
* **1.2 Git Identity:**
    * `git config user.name "Your name"`: Tên hiển thị khi commit trong repo hiện tại.
    * `git config user.email "email@example.com"`: Email để làm việc với commit trong repo hiện tại.
* **1.3 Các câu lệnh cơ bản:**
    * `git init`: Khởi tạo kho Git mới trong thư mục hiện tại.
    * `git add <file_name>`: Đưa một file cụ thể vào Staging Area.
    * `git add .`: Đưa tất cả các file vào Staging Area.
    * `git commit -m "<message>"`: Lưu toàn bộ thay đổi vào Local Repo kèm thông điệp mô tả.
    * `git remote add origin <url_repo>`: Liên kết Local Repo với Remote Repo trên GitHub.
    * `git push -u origin main`: Đẩy code từ Local Repo lên nhánh `main` của Remote Repo lần đầu.
    * `git push`: Đẩy các commit mới lên Remote Repo (cho những lần sau).
    * `git pull`: Kéo code mới nhất từ Remote Repo về máy.
    * `git log`: Xem toàn bộ lịch sử các commit.
* **1.4 Git Convention:** Cấu trúc chuẩn: `<type>: <short_description>`
    * **`type` (Loại commit):**
        * `chore`: Sửa lỗi nhỏ, chính tả, xóa file không dùng tới.
        * `feat`: Thêm tính năng mới, test case mới.
        * `fix`: Sửa lỗi cho một test hoặc chức năng trước đó.
    * **`short_description` (Mô tả):**
        * Ngắn gọn, xúc tích (dưới 50 ký tự).
        * Viết bằng tiếng Anh hoặc tiếng Việt không dấu.

