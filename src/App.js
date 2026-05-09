import { useState } from "react";

// import "./App.css";
function App() {
  // note: - task is the state variable,
  //       - setTask is the function to update the state variable, and useState([]) initializes the state variable with an empty array.
  const [task, setTask] = useState([
    { id: 1, title: "Learn React", completed: false },

    { id: 2, title: "Build a Todo App", completed: true },

    { id: 3, title: "Master React Hooks", completed: false },
  ]);

  return (
    <main className="app">
      <div className="app">
        <header className="app-header">
          <h1>Todo List React</h1>
        </header>
      </div>
    </main>
  );
}
export default App;
