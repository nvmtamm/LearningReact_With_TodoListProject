# React Todo List Learning Project

## Overview

This repository contains a small Todo List application built with React as a hands-on learning project.

The app focuses on practicing React fundamentals through a simple but useful interface for managing tasks. Instead of pulling in extra libraries or splitting the code too early, the current version keeps the logic easy to follow inside a small codebase.

## Current Features

- Render a starter list of todo items
- Add a new task from the input field
- Toggle task completion with a checkbox
- Keep the input controlled with React state
- Update the UI immediately when state changes
- Apply simple custom styling with CSS

## Tech Stack

- React
- JavaScript (ES6+)
- JSX
- CSS
- Create React App tooling

## Project Structure

```text
src/
  App.js        Main Todo List component and application logic
  index.js      React entry point
  index.css     Global and component-level styling
public/
  ...           Static assets from Create React App
README.md
package.json
```

## How It Works

The application currently lives mainly inside `src/App.js`.

- `task` state stores an array of todo objects
- `text` state stores the current input value
- `addTask()` creates a new todo item and appends it to state
- `toggleComplete()` flips the `completed` value for the selected task

Each task object follows this shape:

```js
{
  id: Number,
  title: String,
  completed: Boolean
}
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm start
```

The app will run locally at `http://localhost:3000`.

## Available Scripts

```bash
npm start
```

Runs the app in development mode.

```bash
npm test
```

Launches the test runner.

```bash
npm run build
```

Builds the app for production.

## Learning Goals

This project is meant to reinforce core React concepts such as:

- Functional components
- JSX
- `useState`
- Controlled inputs
- Event handling
- Rendering lists with `.map()`
- Immutable state updates
- Conditional UI behavior

## Current Limitations

- All main logic is still inside a single component
- Tasks are not persisted after refresh
- There is no delete or filter feature yet
- Styling is intentionally simple

## Possible Next Steps

- Split the UI into smaller reusable components
- Add delete and edit actions
- Persist tasks with local storage
- Add filters such as All, Active, and Completed
- Improve responsive styling
- Add basic automated tests for interactions

## Purpose

The main purpose of this repository is learning by building. It is a straightforward project for understanding how React state and UI updates work in practice before moving to larger application patterns.
