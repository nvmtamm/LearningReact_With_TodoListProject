import { useState } from "react";

function App() {
  // Codex note: Doi ten state tu `task` sang `tasks` vi day la mot mang nhieu todo item.
  // Cach dat ten so nhieu giup doc code de hieu hon khi dung `.map()`, `.filter()`.
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
    { id: 3, title: "Master React Hooks", completed: false },
  ]);

  // Codex note: `text` la controlled input state.
  // Moi lan nguoi dung go, React cap nhat state nay qua `onChange`.
  const [text, setText] = useState("");

  // Codex note: Them state `filter` de biet nguoi dung dang xem All, Active, hay Completed.
  const [filter, setFilter] = useState("all");

  // Codex note: Gom danh sach filter vao mot mang de render button bang `.map()`.
  // Lam vay giup sau nay muon them filter moi thi chi can them object vao mang.
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  // Codex note: Day la derived state, tuc la tinh ra tu `tasks` thay vi tao state rieng.
  // Cach nay tranh viec count bi sai neu minh quen cap nhat o mot cho nao do.
  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;

  // Codex note: `visibleTasks` la danh sach se hien thi sau khi ap dung filter.
  // Data goc van nam trong `tasks`, con UI chi doc danh sach da loc nay.
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;

    return true;
  });

  // Codex note: Cap nhat completed bang immutable update.
  // `.map()` tao mang moi, va chi doi item co `id` trung voi task duoc click.
  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  // Codex note: Them tinh nang xoa task.
  // `.filter()` tao mang moi chi giu lai cac task co id khac task can xoa.
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Codex note: Doi viec them task sang submit form.
  // Nho vay nguoi dung co the bam nut Add Task hoac nhan Enter trong input.
  const addTask = (event) => {
    // Codex note: Ngan browser reload trang khi form submit.
    event.preventDefault();

    // Codex note: `trim()` bo khoang trang dau/cuoi de tranh them task rong.
    const taskTitle = text.trim();

    if (taskTitle === "") return;

    // Codex note: Dung Date.now() lam id don gian cho project hoc tap quy mo nho.
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    // Codex note: Them task moi bang cach tao mang moi, khong sua truc tiep mang cu.
    setTasks((prevTasks) => [...prevTasks, newTask]);

    // Codex note: Xoa noi dung input sau khi them thanh cong.
    setText("");
  };

  return (
    <main>
      <div className="app">
        <header className="app-header">
          <h1>Todo List React</h1>
        </header>

        {/* Codex note: Boc input va button trong form de ho tro submit bang phim Enter. */}
        <form className="todo-form" onSubmit={addTask}>
          <input
            className="input-box"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add a new task..."
          />
          <button className="add-button" type="submit">
            Add Task
          </button>
        </form>

        {/* Codex note: Khu vuc thong ke duoc tinh tu `tasks`, khong luu thanh state rieng. */}
        <div className="todo-summary" aria-live="polite">
          <span>{tasks.length} total</span>
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>

        {/* Codex note: Render cac nut filter tu `filterOptions` de tranh lap code button. */}
        <div className="filter-group" aria-label="Task filters">
          {filterOptions.map((option) => (
            <button
              className={`filter-button ${
                filter === option.value ? "active" : ""
              }`}
              key={option.value}
              type="button"
              onClick={() => setFilter(option.value)}
              aria-pressed={filter === option.value}
            >
              {option.label}
            </button>
          ))}
        </div>

        <ul className="task-list">
          {/* Codex note: Neu filter hien tai khong co task nao, hien empty state thay vi danh sach rong. */}
          {visibleTasks.length === 0 ? (
            <li className="empty-state">No tasks in this view.</li>
          ) : (
            // Codex note: UI chi render `visibleTasks`, nen filter khong lam mat data goc trong `tasks`.
            visibleTasks.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />

                {/* Codex note: Them class `completed` co dieu kien de CSS gach ngang task da xong. */}
                <span
                  className={`task-title ${task.completed ? "completed" : ""}`}
                >
                  {task.title}
                </span>

                {/* Codex note: Nut xoa goi `deleteTask` voi id cua task hien tai. */}
                <button
                  className="delete-button"
                  type="button"
                  onClick={() => deleteTask(task.id)}
                  aria-label={`Delete ${task.title}`}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
