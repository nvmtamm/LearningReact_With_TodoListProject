import { useState } from "react";

// import "./App.css";
function App() {
  // note: - task is the state variable,
  //       - setTask is the function to update the state variable, and useState([]) initializes the state variable with an empty array.
  const [task, setTask] = useState([]);

  return (
    <div className="app">
      <header className="app-header">
        <h1>Todo List React</h1>
      </header>
    </div>
  );
}
export default App;
