import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
    { id: 3, title: "Master React Hooks", completed: false },
  ]);
  const [text, setText] = useState("");

  const toggleComplete = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const addTask = (event) => {
    event.preventDefault();

    const taskTitle = text.trim();

    if (taskTitle === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setText("");
  };

  return (
    <main>
      <div className="app">
        <header className="app-header">
          <h1>Todo List React</h1>
        </header>

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

        <p>You are typing: {text}</p>

        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
              />

              <span>{task.title}</span>
              <button
                className="delete-button"
                type="button"
                onClick={() => deleteTask(task.id)}
                aria-label={`Delete ${task.title}`}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default App;
