import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
    { id: 3, title: "Master React Hooks", completed: false },
  ]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;
  const visibleTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;

    return true;
  });

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

        <div className="todo-summary" aria-live="polite">
          <span>{tasks.length} total</span>
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>

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
          {visibleTasks.length === 0 ? (
            <li className="empty-state">No tasks in this view.</li>
          ) : (
            visibleTasks.map((task) => (
              <li key={task.id}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleComplete(task.id)}
                />

                <span
                  className={`task-title ${task.completed ? "completed" : ""}`}
                >
                  {task.title}
                </span>
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
