import { useState } from "react";

const initialTasks = [
  { id: 1, title: "Ôn lại React state", done: true },
  { id: 2, title: "Thiết kế giao diện Todo List", done: false },
  { id: 3, title: "Push 7 commits lên GitHub", done: false },
];

function App() {
  const [tasks, setTasks] = useState(initialTasks);
  const [text, setText] = useState("");

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

  return (
    <main className="page-shell">
      <section className="app" aria-labelledby="app-title">
        <header className="app-header">
          <span className="eyebrow">React Todo</span>
          <h1 id="app-title">Todo List React</h1>
          <p>Gom việc nhỏ, chọn việc cần làm, rồi xử lý từng bước.</p>
        </header>

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

        <ul className="task-list">
          {tasks.map((task) => (
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
      </section>
    </main>
  );
}

export default App;
