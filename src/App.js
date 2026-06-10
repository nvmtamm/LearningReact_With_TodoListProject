import { useEffect, useState } from "react";

function App() {
  const defaultTasks = [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo App", completed: true },
    { id: 3, title: "Master React Hooks", completed: false },
  ];

  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("todo-tasks");

    if (!savedTasks) return defaultTasks;

    try {
      const parsedTasks = JSON.parse(savedTasks);

      return Array.isArray(parsedTasks) ? parsedTasks : defaultTasks;
    } catch {
      return defaultTasks;
    }
  });

  const [text, setText] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [searchText, setSearchText] = useState("");

  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const filterOptions = [
    { value: "all", label: "All" },
    { value: "active", label: "Active" },
    { value: "completed", label: "Completed" },
  ];

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const activeCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.length - activeCount;
  const allCompleted = tasks.length > 0 && activeCount === 0;

  const visibleTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchText.trim().toLowerCase());

    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;

    return matchesSearch;
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

  const clearCompleted = () => {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  };

  const toggleAllTasks = () => {
    setTasks((prevTasks) => {
      const shouldMarkComplete = prevTasks.some((task) => !task.completed);

      return prevTasks.map((task) => ({
        ...task,
        completed: shouldMarkComplete,
      }));
    });
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditingText(task.title);
  };

  const saveEdit = () => {
    const nextTitle = editingText.trim();

    if (nextTitle === "") return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === editingId ? { ...task, title: nextTitle } : task,
      ),
    );

    setEditingId(null);
    setEditingText("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingText("");
  };

  const addTask = (event) => {
    event.preventDefault();

    const taskTitle = text.trim();

    if (taskTitle === "") return;

    const newTask = {
      id: Date.now(),
      title: taskTitle,
      dueDate,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);

    setText("");
    setDueDate("");
  };

  return (
    <main>
      <div className="app">
        <header className="app-header">
          <span className="app-kicker">Focus board</span>
          <h1>Todo List React</h1>
          <p className="app-subtitle">
            Keep the list short, clear, and easy to scan.
          </p>
        </header>

        <form className="todo-form" onSubmit={addTask}>
          <input
            className="input-box"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Add a new task..."
          />
          <input
            className="date-box"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
            aria-label="Due date"
          />
          <button className="add-button" type="submit">
            Add Task
          </button>
        </form>

        <input
          className="search-box"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search tasks..."
          aria-label="Search tasks"
        />

        <div className="todo-summary" aria-live="polite">
          <span>{tasks.length} total</span>
          <span>{activeCount} active</span>
          <span>{completedCount} completed</span>
        </div>

        <div className="action-row">
          <button
            className="toggle-all-button"
            type="button"
            onClick={toggleAllTasks}
            disabled={tasks.length === 0}
          >
            {allCompleted ? "Mark all active" : "Mark all completed"}
          </button>

          <button
            className="clear-button"
            type="button"
            onClick={clearCompleted}
            disabled={completedCount === 0}
          >
            Clear completed
          </button>
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

                {editingId === task.id ? (
                  <>
                    <input
                      className="edit-input"
                      value={editingText}
                      onChange={(event) => setEditingText(event.target.value)}
                      autoFocus
                      aria-label={`Edit ${task.title}`}
                    />
                    <button
                      className="save-button"
                      type="button"
                      onClick={saveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="cancel-button"
                      type="button"
                      onClick={cancelEdit}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <div className="task-content">
                      <span
                        className={`task-title ${
                          task.completed ? "completed" : ""
                        }`}
                      >
                        {task.title}
                      </span>
                      {task.dueDate ? (
                        <span className="task-due-date">Due: {task.dueDate}</span>
                      ) : null}
                    </div>
                    <button
                      className="edit-button"
                      type="button"
                      onClick={() => startEdit(task)}
                    >
                      Edit
                    </button>
                    <button
                      className="delete-button"
                      type="button"
                      onClick={() => deleteTask(task.id)}
                      aria-label={`Delete ${task.title}`}
                    >
                      Delete
                    </button>
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </main>
  );
}

export default App;
