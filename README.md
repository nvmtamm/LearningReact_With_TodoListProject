# React Todo List Learning Project

Ứng dụng Todo List này được xây dựng bằng React để luyện các khái niệm nền tảng của frontend hiện đại. Project tập trung vào quản lý state, xử lý sự kiện, render danh sách, derived state và cập nhật giao diện theo dữ liệu người dùng nhập vào.

Hiện toàn bộ logic chính vẫn được gom trong một component duy nhất ở `src/App.js`. Cách tiếp cận này giúp project gọn, dễ đọc và phù hợp cho mục tiêu học tập, demo nhanh hoặc mở rộng dần thành cấu trúc nhiều component hơn.

## Tính Năng Đã Có

- Hiển thị danh sách task khởi tạo sẵn khi mở ứng dụng
- Thêm task mới thông qua form nhập liệu
- Đánh dấu task đã hoàn thành bằng checkbox
- Xóa task khỏi danh sách
- Lọc task theo 3 trạng thái: All, Active, Completed
- Hiển thị thống kê tổng số task, task đang làm và task đã hoàn thành
- Sử dụng controlled input để quản lý giá trị ô nhập bằng React state
- Cập nhật giao diện ngay khi state thay đổi
- Giao diện tùy chỉnh bằng CSS với phong cách glassmorphism và responsive

## Cách Hoạt Động

Luồng chính của ứng dụng nằm trong `src/App.js`.

- `tasks` lưu toàn bộ danh sách task dưới dạng mảng
- `text` lưu giá trị hiện tại của ô input
- `filter` lưu trạng thái lọc đang được chọn
- `addTask()` tạo task mới và thêm vào danh sách
- `toggleComplete()` đổi trạng thái hoàn thành của một task
- `deleteTask()` xóa task theo `id`
- `visibleTasks` là danh sách được tính ra từ `tasks` dựa trên filter hiện tại

Mỗi task có cấu trúc như sau:

```js
{
  id: Number,
  title: String,
  completed: Boolean
}
```

Điểm đáng chú ý là phần thống kê và danh sách hiển thị đều được suy ra từ state hiện có, thay vì lưu thêm dữ liệu trùng lặp. Cách này giúp code đơn giản hơn và giảm nguy cơ đồng bộ sai dữ liệu.

## Công Nghệ Sử Dụng

- React
- JavaScript (ES6+)
- JSX
- CSS
- Create React App

## Cấu Trúc Project

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

## Cài Đặt Và Chạy Project

### 1. Cài dependencies

```bash
npm install
```

### 2. Chạy môi trường development

```bash
npm start
```

Ứng dụng sẽ chạy tại `http://localhost:3000`.

## Scripts Có Sẵn

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

## Mục Tiêu Học Tập

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

## Hạn Chế Hiện Tại

- Tất cả logic vẫn nằm trong một component
- Dữ liệu task chưa được lưu lại sau khi refresh
- Chưa có tính năng sửa task
- Chưa có test tự động cho các luồng tương tác chính

## Hướng Phát Triển Tiếp Theo

- Tách UI thành các component nhỏ hơn
- Thêm chức năng sửa task
- Lưu dữ liệu bằng localStorage
- Thêm test cho các thao tác chính
- Cải thiện accessibility bằng keyboard navigation tốt hơn

## Kết Luận

Đây là một Todo List project gọn, rõ ràng và đủ hoàn chỉnh cho mục tiêu học React cơ bản: có form nhập liệu, state management, thao tác trên danh sách, filter, thống kê và giao diện tùy biến. Từ nền tảng này, project có thể tiếp tục phát triển thành một ứng dụng Todo List có cấu trúc và tính năng đầy đủ hơn.
