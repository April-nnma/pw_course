# Playwright TypeScript practice

Repository thực hành Playwright phục vụ lộ trình từ Manual QA sang Automation QA.

## Smoke tests

CI chỉ chạy hai tests trong `tests/example.spec.ts` bằng Chromium:

- `has title`: kiểm tra tiêu đề trang tài liệu học automation.
- `get started link`: mở trang đăng ký và kiểm tra heading `User Registration`.

Các bài thực hành khác chưa nằm trong phạm vi CI. Chỉ mở rộng suite sau khi
xác minh assertion và độ ổn định của từng bài.

## Chạy trên máy cá nhân

Dùng Node.js 24 và thực thi tại thư mục gốc repository:

```bash
npm ci
npx playwright install --with-deps chromium
npm run test:smoke -- --list
npm run test:smoke
npx playwright show-report
```

Lệnh `--list` phải liệt kê đúng hai tests, đều thuộc project `chromium`.
Cần kết nối mạng tới npm, máy chủ tải browser và `https://material.playwrightvn.com/`.

## GitHub Actions

Workflow `.github/workflows/playwright-smoke.yml` chạy khi push hoặc tạo/cập nhật
pull request. Có thể chạy thủ công bằng **Run workflow** sau khi workflow có trên
nhánh mặc định.

Workflow dùng `npm ci`, cài Chromium cùng system dependencies và chạy
`npm run test:smoke -- --reporter=line,html`. Cấu hình Playwright hiện có được giữ
nguyên: CI dùng một worker, retry tối đa hai lần và thu trace ở lần retry đầu tiên.

Trong **Actions → chọn workflow run → Artifacts**, tải `playwright-smoke-chromium`.
Artifact lưu 14 ngày, gồm `playwright-report/` và `test-results/` nếu được tạo.
Bước upload vẫn chạy khi test thất bại. Nếu cài đặt thất bại trước khi Playwright
chạy, chưa có báo cáo kiểm thử; xem log của bước bị lỗi. Sau khi giải nén artifact:

```bash
npx playwright show-report path/to/playwright-report
```

Chỉ ghi nhận CI PASS khi workflow run đã hoàn tất thành công. Nếu run thất bại,
xem bước lỗi, HTML report và trace để phân biệt lỗi môi trường/cài đặt, lỗi test
(locator hoặc assertion không còn đúng) và lỗi ứng dụng. Một assertion thất bại
chưa đủ để kết luận ứng dụng có lỗi. Test chỉ pass sau retry cần được theo dõi
như một dấu hiệu flaky.
