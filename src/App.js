import { useState } from "react";

// import "./App.css";
function App() {
  // note: - task is the state variable,
  //       - setTask is the function to update the state variable: add(), remove(), toggleComplete()...
  //       - useState([]) initializes the state variable with an empty array.
  const [task, setTask] = useState([
    { id: 1, title: "Learn React", completed: false },

    { id: 2, title: "Build a Todo App", completed: true },

    { id: 3, title: "Master React Hooks", completed: false },
  ]);

  //
  const [text, setText] = useState("");

  const toggleComplete = (id) => {
    setTask((prevTask) =>
      prevTask.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };
  // 1. method addTask() sẽ tạo một task mới với id tự động tăng, title lấy từ input và completed mặc định là false.
  const addTask = () => {
  // 1. Kiểm tra input rỗng
  if (text.trim() === "") return;


  // 2. Tạo task mới
  const newTask = {
    id: Date.now(),
    title: text,
    completed: false,
  };

  return (
    <main>
      <div className="app">
        <header className="app-header">
          <h1>Todo List React</h1>
        </header>

        <input
          className="input-box"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
        />

        <p>You are typing: {text}</p>

        <ul>
          {task.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />

              <span>{task.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
export default App;
