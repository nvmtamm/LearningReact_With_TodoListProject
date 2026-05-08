import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("adds a new task from the form", async () => {
  render(<App />);

  const input = screen.getByLabelText(/Tên công việc/i);
  await userEvent.type(input, "Đọc lại CSS");
  await userEvent.click(screen.getByRole("button", { name: /Thêm/i }));

  expect(screen.getByText("Đọc lại CSS")).toBeInTheDocument();
  expect(input).toHaveValue("");
});

test("filters and clears completed tasks", async () => {
  render(<App />);

  await userEvent.click(screen.getByRole("button", { name: /Hoàn thành/i }));

  expect(screen.getByText("Ôn lại React state")).toBeInTheDocument();
  expect(
    screen.queryByText("Thiết kế giao diện Todo List")
  ).not.toBeInTheDocument();

  await userEvent.click(screen.getByRole("button", { name: /Dọn xong/i }));

  expect(screen.queryByText("Ôn lại React state")).not.toBeInTheDocument();
  expect(screen.getByText(/Không có việc nào/i)).toBeInTheDocument();
});
