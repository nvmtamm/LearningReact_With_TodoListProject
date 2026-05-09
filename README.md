# React Todo List — Learning Project

## Overview

This project is a beginner-friendly Todo List application built with React.

The main goal of the project is not only to create a working Todo application, but also to deeply understand the core concepts of React such as:

- Components
- JSX
- State Management with `useState`
- Rendering Lists with `.map()`
- Event Handling
- Controlled Inputs
- Immutable State Updates
- Conditional UI Updates

The project was intentionally rebuilt step-by-step from scratch in order to understand how React works internally instead of relying on AI-generated code without comprehension.

---

# Technologies Used

- React
- JavaScript (ES6+)
- JSX
- CSS (coming later)

---

# Project Structure

```bash
src/
│
├── App.js
├── index.js
└── ...
```

Currently, all application logic is implemented inside `App.js` for learning purposes.

---

# Learning Progress

## Step 1 — Create the Main Component

Started with a minimal React component:

```jsx
function App() {
  return (
    <main>
      <h1>Todo List React</h1>
    </main>
  );
}
```

### Concepts Learned

- Functional Components
- JSX syntax
- `return()` in React
- HTML inside JSX

---

# Step 2 — Create State with `useState`

Added application state for storing tasks.

```jsx
const [tasks, setTasks] = useState([]);
```

### Concepts Learned

- React state
- `useState`
- State initialization
- Difference between variable and state

---

# Step 3 — Store Task Objects

Added sample todo data.

```jsx
[
  {
    id: 1,
    title: "Learn React",
    done: false,
  },
];
```

### Concepts Learned

- Arrays
- Objects
- Data modeling
- Boolean values

---

# Step 4 — Render Lists with `.map()`

Rendered tasks dynamically:

```jsx
tasks.map((task) => <li key={task.id}>{task.title}</li>);
```

### Concepts Learned

- Array `.map()`
- Dynamic rendering
- React keys
- Embedding JavaScript inside JSX

---

# Step 5 — Add Checkbox Support

Added checkbox UI:

```jsx
<input type="checkbox" checked={task.done} />
```

### Concepts Learned

- Controlled checkbox
- React props
- Binding UI to state

---

# Step 6 — Toggle Task Completion

Implemented task toggling:

```jsx
const toggleTask = (id) => {
  setTasks(
    tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task,
    ),
  );
};
```

### Concepts Learned

- Event handling
- Immutable updates
- Spread operator
- Ternary operator
- State updates
- React re-render cycle

---

# Step 7 — Controlled Input

Added input field:

```jsx
const [text, setText] = useState("");
```

```jsx
<input value={text} onChange={(event) => setText(event.target.value)} />
```

### Concepts Learned

- Controlled components
- Input event handling
- `event.target.value`
- Two-way UI synchronization

---

# Core React Concepts Learned

## 1. State

React state stores dynamic data that affects the UI.

```jsx
const [tasks, setTasks] = useState([]);
```

---

## 2. Re-rendering

Whenever state changes:

```jsx
setTasks(...)
```

React automatically re-renders the component UI.

---

## 3. Immutable Updates

React state should never be mutated directly.

❌ Incorrect:

```jsx
tasks.push(newTask);
```

✅ Correct:

```jsx
setTasks([...tasks, newTask]);
```

---

## 4. Spread Operator

Used for copying arrays and objects.

```jsx
...tasks
```

```jsx
...task
```

---

## 5. Event Object

React automatically receives browser events:

```jsx
(event) => {};
```

Example:

```jsx
event.preventDefault();
```

Used to stop default browser behavior such as page reload on form submit.

---

# Current Features

- Render todo list
- Checkbox toggle
- Controlled input
- State management
- Dynamic rendering

---

# Planned Features

- Add new task
- Delete task
- Filter tasks
- Task counter
- Progress bar
- Local storage persistence
- CSS styling
- Component splitting

---

# Educational Goal

This project is intentionally built step-by-step to fully understand:

- How React renders UI
- How state updates work
- How events flow through React
- How JSX is transformed internally
- Why immutable updates are important

The focus is on learning React fundamentals correctly before moving into advanced concepts or external libraries.

---

# Author Notes

This repository represents a learning-first approach to React development.

Instead of copying complete AI-generated applications, the project is reconstructed manually to build a strong mental model of:

- React rendering
- State flow
- Event systems
- Component architecture

The objective is long-term understanding rather than short-term completion.
