import { useMemo, useState } from "react";

const initialTasks = [
  { id: 1, title: "Ôn lại React state", done: true },
  { id: 2, title: "Thiết kế giao diện Todo List", done: false },
  { id: 3, title: "Push 7 commits lên GitHub", done: false },
];

const filters = [
  { id: "all", label: "Tất cả" },
  { id: "active", label: "Đang làm" },
  { id: "done", label: "Hoàn thành" },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const completedTasks = tasks.filter((task) => task.done).length;
  const remainingTasks = tasks.length - completedTasks;
  const progress = tasks.length
    ? Math.round((completedTasks / tasks.length) * 100)
    : 0;
  const visibleTasks = useMemo(() => {
    if (filter === "active") return tasks.filter((task) => !task.done);
    if (filter === "done") return tasks.filter((task) => task.done);
    return tasks;
  }, [filter, tasks]);

  const addTask = (event) => {
    event.preventDefault();

    const title = text.trim();
    if (!title) return;

    setTasks([
      {
        id: Date.now(),
        title,
        done: false,
      },
      ...tasks,
    ]);
    setText("");
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.done));
  };

  return (
    <main className="page-shell">
      <section className="app" aria-labelledby="app-title">
        <header className="app-header">
          <div>
            <span className="eyebrow">React Todo</span>
            <h1 id="app-title">Todo List React</h1>
            <p>Gom việc nhỏ, chọn việc cần làm, rồi xử lý từng bước.</p>
          </div>
          <div className="progress-summary" aria-label="Tiến độ công việc">
            <strong>{progress}%</strong>
            <span>hoàn thành</span>
          </div>
        </header>

        <div
          className="progress-track"
          aria-label={`${completedTasks} trên ${tasks.length} việc đã hoàn thành`}
          role="progressbar"
          aria-valuemax="100"
          aria-valuemin="0"
          aria-valuenow={progress}
        >
          <span style={{ width: `${progress}%` }} />
        </div>

        <form className="input-box" onSubmit={addTask}>
          <label className="sr-only" htmlFor="task-input">
            Tên công việc
          </label>
          <input
            id="task-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Nhập công việc mới..."
          />
          <button type="submit">Thêm</button>
        </form>

        <nav className="filter-bar" aria-label="Bộ lọc công việc">
          {filters.map((item) => (
            <button
              className={filter === item.id ? "filter-button is-active" : "filter-button"}
              key={item.id}
              onClick={() => setFilter(item.id)}
              type="button"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <section className="list-panel" aria-label="Danh sách công việc">
          <div className="list-heading">
            <div>
              <strong>{remainingTasks} việc đang làm</strong>
              <span>{completedTasks} việc đã xong</span>
            </div>
            <button
              className="clear-button"
              disabled={completedTasks === 0}
              onClick={clearCompleted}
              type="button"
            >
              Dọn xong
            </button>
          </div>

          {visibleTasks.length > 0 ? (
            <ul className="task-list">
              {visibleTasks.map((task) => (
                <li className={task.done ? "is-done" : ""} key={task.id}>
                  <label className="task-check">
                    <input
                      checked={task.done}
                      onChange={() => toggleTask(task.id)}
                      type="checkbox"
                    />
                    <span>{task.title}</span>
                  </label>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(task.id)}
                    type="button"
                  >
                    Xóa
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="empty-state">
              <strong>Không có việc nào ở mục này</strong>
              <span>Thêm việc mới hoặc đổi bộ lọc để xem danh sách khác.</span>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

export default App;
