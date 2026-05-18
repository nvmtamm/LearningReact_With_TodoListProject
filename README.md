# React Todo List Learning Project

## Giới thiệu

Đây là một project Todo List nhỏ được xây dựng bằng React để thực hành các khái niệm nền tảng của frontend hiện đại. Mục tiêu của project là tạo một ứng dụng đơn giản nhưng đủ đầy để luyện cách quản lý state, xử lý sự kiện, render danh sách và cập nhật giao diện theo dữ liệu.

Hiện tại toàn bộ logic chính vẫn nằm trong một component duy nhất là `src/App.js`, nên code dễ theo dõi và phù hợp cho việc học tập, thử nghiệm và mở rộng về sau.

## Những gì đã làm

Project hiện đã có các chức năng sau:

- Hiển thị danh sách task khởi tạo sẵn khi mở ứng dụng
- Thêm task mới từ ô nhập liệu
- Đánh dấu task đã hoàn thành bằng checkbox
- Xóa task khỏi danh sách
- Lọc task theo 3 trạng thái: All, Active, Completed
- Hiển thị thống kê số lượng task tổng, task đang làm và task đã xong
- Dùng controlled input để quản lý giá trị ô nhập bằng React state
- Cập nhật giao diện ngay lập tức khi state thay đổi
- Tạo giao diện riêng bằng CSS với phong cách glassmorphism và responsive

## Cách hoạt động

Luồng chính của ứng dụng nằm trong `src/App.js`.

- `tasks` lưu toàn bộ danh sách task dạng mảng
- `text` lưu giá trị đang nhập ở ô input
- `filter` lưu trạng thái lọc hiện tại
- `addTask()` tạo task mới và thêm vào cuối danh sách
- `toggleComplete()` đổi trạng thái hoàn thành của một task
- `deleteTask()` xóa task theo `id`
- `visibleTasks` là danh sách được tính ra từ `tasks` dựa trên filter đang chọn

Mỗi task có cấu trúc như sau:

```js
{
  id: Number,
  title: String,
  completed: Boolean
}
```

Điểm đáng chú ý là phần thống kê và danh sách hiển thị đều được suy ra từ state hiện có, thay vì lưu thêm dữ liệu trùng lặp. Cách này giúp code đơn giản hơn và giảm nguy cơ đồng bộ sai dữ liệu.

## Cấu trúc project

```text
src/
  App.js        Component chính chứa logic Todo List
  index.js      Điểm khởi chạy React
  index.css     Style toàn cục và style giao diện
public/
  ...           Tài nguyên tĩnh do Create React App tạo sẵn
README.md
package.json
```

## Công nghệ sử dụng

- React
- JavaScript (ES6+)
- JSX
- CSS
- Create React App

## Cách chạy project

### 1. Cài dependencies

```bash
npm install
```

### 2. Chạy môi trường dev

```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`.

## Scripts có sẵn

```bash
npm start
```

Chạy ứng dụng ở chế độ development.

```bash
npm test
```

Mở test runner.

```bash
npm run build
```

Build ứng dụng cho production.

## Mục tiêu học tập

Project này được dùng để luyện các khái niệm React cơ bản như:

- Functional components
- JSX
- `useState`
- Controlled inputs
- Event handling
- Render list bằng `.map()`
- Cập nhật state theo kiểu immutable
- Conditional rendering
- Derived state từ dữ liệu có sẵn
- Tổ chức thay đổi theo từng bước nhỏ

## Hạn chế hiện tại

- Tất cả logic vẫn nằm trong một component
- Dữ liệu task chưa được lưu lại sau khi refresh
- Chưa có tính năng sửa task
- Chưa có test tự động cho luồng tương tác người dùng

## Hướng phát triển tiếp theo

- Tách UI thành các component nhỏ hơn
- Thêm chức năng sửa task
- Lưu dữ liệu bằng localStorage
- Thêm test cho các thao tác chính
- Cải thiện accessibility bằng keyboard navigation tốt hơn

## Kết luận

Tóm lại, project hiện tại là một bài tập React hoàn chỉnh ở mức cơ bản: có form nhập liệu, state management, thao tác trên danh sách, filter, thống kê và giao diện tùy biến. Đây là nền tảng tốt để tiếp tục nâng cấp thành một ứng dụng Todo List có cấu trúc rõ ràng hơn trong các bước tiếp theo.
