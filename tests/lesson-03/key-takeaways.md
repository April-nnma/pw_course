# GIT VÀ JAVASCRIPT

# 1. Git Status

Dùng để kiểm tra trạng thái hiện tại của các file.

```git status```

Có thể kiểm tra file đang:
- ở Working Directory
- đã vào Staging Area
- có thay đổi chưa được commit

---

# 2. Staging Area -> Working Directory

Sau khi dùng:

```git add <file_name>```

File sẽ được đưa từ: Working Directory -> Staging Area

Nếu muốn đưa file từ Staging Area quay lại Working Directory:

```git restore --staged <file_name>```

Nếu muốn đưa tất cả file đang staging quay lại:

```git restore --staged .```

**Lưu ý:** Nội dung đã sửa trong file vẫn còn nguyên.
Chỉ bỏ file ra khỏi Staging Area.

---

# 3. Repository -> Working Directory

Lúc này thay đổi đã được commit.

Nếu muốn bỏ commit gần nhất và đưa thay đổi trở lại Working Directory:

```git reset HEAD~<số commit>```

---

# 4. Branch

Branch là nhánh dùng để làm code riêng mà chưa ảnh hưởng trực tiếp đến nhánh chính.
## Xem danh sách branch

```git branch```

Dấu * cho biết mình đang đứng ở branch nào.
```text
*main
branch
```
## Tạo branch

```git branch <branch_name>```

## Chuyển sang branch

```git switch <branch_name>```

## Tạo branch và chuyển sang luôn

```git switch -c <branch_name```

## Xóa branch

Không được đứng ngay branch mình muốn xóa.
Sau đó:

```git branch -D <branch_name muốn xóa>```

**Lưu ý:**  LUÔN LUÔN pull code trước khi tạo branch mới.

# 6. .gitignore

.gitignore dùng để khai báo những file hoặc folder mà Git không cần theo dõi.
