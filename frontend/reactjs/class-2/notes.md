# Working with Functions in React.js

## Introduction

In React.js, functions play a very important role. React applications are mainly built using function components Functions are used to create components, handle events, manage data, and control application behavior.


## 1. Function Components in React

A function component is a JavaScript function that returns JSX (HTML-like code).

### Definition:

A function component is a simple function that returns UI elements.

### Example:

```jsx
function Welcome() {
  return <h1>Welcome to React</h1>;
}

export default Welcome;
```

### Explanation:

* `Welcome` is a function.
* It returns JSX.
* React uses this function as a component.

## 2. Arrow Function Components

React components can also be written using arrow functions.

### Example:

```jsx
const Hello = () => {
  return <h2>Hello World</h2>;
};

export default Hello;
```

### Advantage:

* Shorter syntax
* Commonly used in modern React applications


## 3. Using Props in Functions

Props are used to pass data from one component to another.

### Example:

```jsx
function Student(props) {
  return <p>Student Name: {props.name}</p>;
}
```

### Using the Component:

```jsx
<Student name="Bharat" />
```

### Explanation:

* `props` is an object.
* Data is accessed using `props.propertyName`.



## 4. Destructuring Props in Functions

Props can be destructured to make code cleaner.

### Example:

```jsx
function Student({ name, age }) {
  return (
    <p>
      Name: {name}, Age: {age}
    </p>
  );
}
```

## 5. Functions for Event Handling

Functions are used to handle events like clicks, input, and form submission.

### Example:

```jsx
function ClickButton() {
  function handleClick() {
    alert("Button clicked!");
  }

  return <button onClick={handleClick}>Click Me</button>;
}
```

### Explanation:

* `handleClick` is a function.
* It runs when the button is clicked.

## 6. Inline Functions in React

Functions can also be written directly inside JSX.

### Example:

```jsx
<button onClick={() => alert("Hello React!")}>
  Click Here
</button>
```

## 7. Functions with State (useState)

React provides Hooks to use state in function components.

### Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </>
  );
}
```

## 8. Passing Functions as Props

Functions can be passed from parent to child components.

### Example:

```jsx
function Parent() {
  function showMessage() {
    alert("Message from Parent");
  }

  return <Child sendMessage={showMessage} />;
}

function Child({ sendMessage }) {
  return <button onClick={sendMessage}>Show Message</button>;
}
```

## 9. Return Rules of Functions in React

* A function component must return one parent element
* Use `<>...</>` (Fragment) if needed

### Example:

```jsx
return (
  <>
    <h1>Hello</h1>
    <p>React is easy</p>
  </>
);
```

## 10. Important Points to Remember

* React components are JavaScript functions
* Function names must start with a capital letter
* Functions return JSX
* Hooks can only be used inside function components





Below are **React.js notes written in clear, book-style English**, explaining **Hooks**.
These notes are suitable for **students, beginners, exams, and revision**.

> ⚠️ **Note:** There is no hook called `useMeme` in React.
> The correct hook name is **`useMemo`**.
> I will explain **`useMemo`** instead.

---

# Understanding Hooks in React.js

## Introduction to Hooks

Hooks are special functions introduced in React 16.8.
They allow developers to use state and other React features in function components.

Before hooks, these features were only available in class components.
Hooks make React code simpler, cleaner, and easier to reuse.


## 1. `useState` Hook

### Definition:

`useState` is used to store and update data (state) in a function component.

### Syntax:

```jsx
const [state, setState] = useState(initialValue);
```

### Example:

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </>
  );
}
```

### Explanation:

* `count` holds the state value
* `setCount` updates the state
* When state changes, the component re-renders



## 2. `useReducer` Hook

### Definition:

`useReducer` is used for complex state management.
It works like a reducer function in JavaScript.

### When to use:

* Multiple state values
* Complex logic
* Better control than `useState`

### Syntax:

```jsx
const [state, dispatch] = useReducer(reducer, initialState);
```

### Example:

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "increase") {
    return { count: state.count + 1 };
  }
  return state;
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increase" })}>
        Increase
      </button>
    </>
  );
}
```

## 3. `useRef` Hook

### Definition:

`useRef` is used to **create a reference to a DOM element or to store a value without re-rendering.

### Example (DOM Access):

```jsx
import { useRef } from "react";

function InputFocus() {
  const inputRef = useRef(null);

  return (
    <>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </>
  );
}
```

### Key Point:

* Changing `useRef` value does not re-render the component

## 4. `useEffect` Hook

### Definition:

`useEffect` is used to perform side effects in a component.

### Side Effects Include:

* API calls
* Timers
* DOM updates
* Event listeners

### Syntax:

```jsx
useEffect(() => {
  // effect code
}, [dependencies]);
```

### Example:

```jsx
import { useEffect } from "react";

function Example() {
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  return <h1>Hello React</h1>;
}
```

### Explanation:

* Runs after component renders
* Empty dependency array (`[]`) means it runs only once



## 5. `useContext` Hook

### Definition:

`useContext` is used to share data globally without passing props manually.

### Example:

```jsx
import { createContext, useContext } from "react";

const ThemeContext = createContext();

function Child() {
  const theme = useContext(ThemeContext);
  return <p>Theme: {theme}</p>;
}

function Parent() {
  return (
    <ThemeContext.Provider value="dark">
      <Child />
    </ThemeContext.Provider>
  );
}
```

### Advantage:

* Avoids prop drilling
* Cleaner and more readable code

## 6. `useCallback` Hook

### Definition:

`useCallback` is used to memoize functions.
It prevents functions from being recreated on every render.

### Syntax:

```jsx
const memoizedFunction = useCallback(() => {
  // function logic
}, [dependencies]);
```

### Example:

```jsx
import { useCallback, useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button clicked");
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={handleClick}>Click</button>
    </>
  );
}
```

## 7. `useMemo` Hook (Correct name, not `useMeme`)

### Definition:

`useMemo` is used to memoize expensive calculations.
It improves performance by avoiding unnecessary recalculations.

### Syntax:

```jsx
const memoizedValue = useMemo(() => calculation, [dependencies]);
```

### Example:

```jsx
import { useMemo } from "react";

function Example({ number }) {
  const square = useMemo(() => {
    return number * number;
  }, [number]);

  return <p>Square: {square}</p>;
}
```

### Difference from `useCallback`:

* `useMemo` → memoizes values
* `useCallback` → memoizes functions

## Important Rules of Hooks

1. Hooks must be used inside function components
2. Hooks must be called at the top level
3. Hooks cannot be used inside loops or conditions


Sure! Below are **advanced state management notes for React.js**, written clearly in the style of **English technical book notes** — structured, crisp, and easy to study.

---

# Advanced State Management in React.js

## 1. Why Advanced State Management ?

As React apps grow:

* State becomes shared across many components.
* Passing state via props becomes tedious and error-prone.
* We need scalable, predictable, and performant state solutions.

Advanced state management helps:
✔ Share state globally
✔ Avoid prop drilling
✔ Handle async updates
✔ Scale for large apps

## 2. Local vs Global State

| Type         | Managed By               | Scope                  |
| ------------ | ------------------------ | ---------------------- |
| Local State  | `useState`, `useReducer` | Single component       |
| Shared State | Context, Redux, Zustand  | Across many components |

---

## 3. `useReducer` — Predictable Local Logic

###  When to Use

* Complex state transitions
* Multiple state values
* Logic tied to actions

###  Concept

* Instead of mutating state directly, you dispatch actions
* Reducer returns new state

- Basic Pattern

```js
const [state, dispatch] = useReducer(reducer, initialState);

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    default:
      return state;
  }
}
```

###  Benefits

✔ Easy to test
✔ Predictable updates
✔ Centralized logic

---

## 4. React Context — Global State Provider

###  Idea

* Create a context
* Provide state at top level
* Components consume without prop drilling

```js
const ThemeContext = createContext();

<ThemeContext.Provider value={theme}>
  <App />
</ThemeContext.Provider>
```

Use:

```js
const theme = useContext(ThemeContext);
```

###  Drawbacks

⚠ Rerenders many components if value updates often
⚠ Not optimized for high-frequency state

## 5. Combining `useReducer` + Context

This is a lightweight Redux substitute.

```js
const StoreContext = createContext();

function AppProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
}
```

Use in components:

```js
const { state, dispatch } = useContext(StoreContext);
```

## 6. Redux — Mature State Management*

Redux is a standalone library that works with React.

### Core Concepts

 Store — holds app state
 Actions — describe “what happened”
 Reducers — determine how state changes

### Basic Action

```js
{ type: 'ADD_TODO', payload: { text: 'Learn Redux' } }
```

### Why Redux?

✔ Centralized state
✔ Predictable updates
✔ Great DevTools
✔ Middleware for async

### Middleware → Async Logic

Common ones:

* redux-thunk
* redux-saga
* redux-observable

## 7. React Query / TanStack Query — Async State

For server data:

* Fetching
* Caching
* Background sync
* Race conditions

### Basic Example

```js
const { data, isLoading, error } = useQuery('todos', fetchTodos);
```

### Advantages

✔ Auto caching
✔ Query invalidation
✔ Avoids global store for server state

## 8. Zustand — Simple, Fast Store

Zustand is an alternative to Redux — minimal and reactive.

### Create Store

```js
import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
}));
```

Use in component:

```js
const count = useStore(state => state.count);
```

### Benefits

✔ Tiny API
✔ No boilerplate
✔ Selectors avoid rerendering

---

## 9. Recoil — Facebook’s State Library

Recoil introduces:

* Atoms — state units
* Selectors — derived/computed state

Example:

```js
const textState = atom({ key: 'text', default: '' });
const charCount = selector({
  key: 'charCount',
  get: ({ get }) => get(textState).length,
});
```

## 10. State Normalization

For large datasets:

* Avoid nested objects
* Normalize like databases

Example (before):

```js
{
  user: { posts: [...] }
}
```

Normalized (preferred):

```js
{
  usersById: {},
  postsById: {}
}
```

## 11. Performance Tips

### ✔ Memoization

* `React.memo`
* `useMemo`
* `useCallback`

### ✔ Selective Updates

Only rerender when necessary:

```js
useStore(state => state.specificField);
```

### ✔ Immutable Updates

Never mutate state directly.


# Form Handling in React

## 1. Introduction

Forms are used in web applications to collect user input such as names, emails, passwords, and other data.
In React, form handling is different from traditional HTML because React manages the form data using state.

## 2. Controlled Components

In React, most forms are created using controlled components.

### Definition

A controlled component is an input element whose value is controlled by React state.

### Key Points

* The form data is stored in the component’s state.
* React becomes the “single source of truth.”
* Every change in input updates the state.

## 3. Using State for Form Data

React uses the `useState` hook to store and update form values.

### Example

```jsx
import { useState } from "react";

function Form() {
  const [name, setName] = useState("");

  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
}
```

### Explanation

* `value` binds the input to the state.
* `onChange` updates the state whenever the user types.

## 4. Handling Multiple Inputs

When a form has multiple fields, an object is usually used to store the data.

### Example

```jsx
const [formData, setFormData] = useState({
  username: "",
  email: "",
  password: ""
});
```

### Updating State

```jsx
const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
};
```

## 5. Form Submission

To handle form submission, React uses the `onSubmit` event.

### Example

```jsx
const handleSubmit = (e) => {
  e.preventDefault(); // prevents page reload
  console.log(formData);
};
```

```jsx
<form onSubmit={handleSubmit}>
  <input name="username" onChange={handleChange} />
  <button type="submit">Submit</button>
</form>
```

## 6. Preventing Default Behavior

By default, HTML forms reload the page after submission.
React applications prevent this using:

```js
e.preventDefault();
```

This allows the app to handle data without refreshing the page.

## 7. Uncontrolled Components

An uncontrolled component stores form data directly in the DOM instead of React state.

### Using `useRef`

```jsx
import { useRef } from "react";

function Form() {
  const inputRef = useRef();

  const handleSubmit = () => {
    console.log(inputRef.current.value);
  };

  return <input ref={inputRef} />;
}
```

### Note

Controlled components are preferred in most React applications.

## 8. Validation in Forms

Validation ensures that the user enters correct data.

### Common Validations

* Required fields
* Email format
* Minimum password length

### Example

```jsx
if (!formData.email) {
  alert("Email is required");
}
```

## 9. Advantages of Form Handling in React

* Better control over user input
* Easy validation
* Predictable data flow
* Improved user experience


# Two-Way Data Binding in React

## 1. Meaning of Two-Way Data Binding

Two-Way Data Binding is a technique in which data flows in two directions:

1. From the state to the UI
2. From the UI back to the state

This means:

* When the state changes, the UI updates automatically
* When the user changes the UI input, the state updates automatically

## 2. Two-Way Data Binding in React

React does not provide automatic two-way data binding like Angular.
Instead, React implements it manually using:

* `useState` hook
* Controlled components
* `onChange` event

This approach gives better control and predictability.

## 3. Controlled Components

A controlled component is a form element whose value is controlled by React state.

Example:

* Input value comes from `state`
* Input change updates the same `state`

## 4. Basic Example of Two-Way Data Binding

```jsx
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Your name is: {name}</p>
    </div>
  );
}

export default App;
```

## 5. How Two-Way Binding Works (Step by Step)

1. `useState("")` creates a state variable `name`
2. `value={name}` binds state to the input field
3. `onChange` listens for user input
4. `setName()` updates the state
5. Updated state re-renders the UI

Thus, data flows both ways.

---

## 6. Flow Diagram

```
State  →  Input Field
Input Field  →  State
```

---

## 7. Two-Way Binding with Multiple Inputs

```jsx
import { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  return (
    <form>
      <input
        type="email"
        value={formData.email}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />

      <input
        type="password"
        value={formData.password}
        onChange={(e) =>
          setFormData({ ...formData, password: e.target.value })
        }
      />
    </form>
  );
}

export default Form;
```

## 8. Advantages of Two-Way Data Binding in React

* Better control over form data
* Easier validation
* Predictable state management
* Debugging becomes simpler

## 9. Disadvantages

* Requires more code
* Not automatic like some frameworks

## 10. Comparison with One-Way Data Binding

| Feature        | One-Way Binding | Two-Way Binding |
| -------------- | --------------- | --------------- |
| Data Flow      | State → UI      | State ↔ UI      |
| Control        | High            | Medium          |
| Usage in React | Default         | Manual          |

## 11. Important Points to Remember

* React uses one-way data flow by default
* Two-way binding is achieved using state + events
* Always use controlled components for forms
* Never directly modify the state


# project-2 -> Notes App Project

##  CHAPTER 1: What Are We Building?

We are building a Notes App using:

* React → to build the UI
* Tailwind CSS → to style the UI
* useState → to store notes in memory

### App Features

1. Add a note (title + details)
2. Show all notes
3. Delete a note

##  CHAPTER 2: Create the React Project

### Step 1: Create project using Vite (recommended)

Open terminal and run:

```bash
npm create vite@latest notes-app
```

Choose:

* Framework → React
* Variant → JavaScript

Then:

```bash
cd notes-app
npm install
npm run dev
```

-> Now React is running in the browser.

##  CHAPTER 3: Install Tailwind CSS

### Step 2: Install Tailwind

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

This creates:

* `tailwind.config.js`
* `postcss.config.js`

---

### Step 3: Configure Tailwind

Open tailwind.config.js

```js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- Explanation
This tells Tailwind:

> “Scan these files and generate only the CSS classes used here.”

---

### Step 4: Add Tailwind to CSS

Open src/index.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Explanation

* `base` → browser reset
* `components` → reusable styles
* `utilities` → classes like `bg-black`, `p-5`, etc.

##  CHAPTER 4: Clean the Project

Delete:

* `App.css`
* `assets/react.svg`

Edit main.jsx

```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
```

- Explanation

* React loads `<App />` inside `#root`
* `StrictMode` helps catch mistakes


##  CHAPTER 5: Understanding App.jsx (Heart of App)

Open src/App.jsx

```jsx
import { useState } from 'react'
```

- Explanation

* `useState` is a React Hook
* It lets us store and update data


### Step 5.1: Create Component

```jsx
const App = () => {
```

- Explanation

* `App` is a function component
* React shows whatever this function returns


### Step 5.2: Create State Variables

```jsx
const [title, setTitle] = useState('')
const [details, setDetails] = useState('')
const [tasks, setTasks] = useState([])
```

- Explanation

| State   | Meaning                     |
| ------- | --------------------------- |
| title   | Text entered in title input |
| details | Text entered in textarea    |
| tasks   | Array that stores all notes |

Example:

```js
tasks = [
  { title: "Study", details: "React hooks" }
]
```

---

##  CHAPTER 6: Add Note Logic

```jsx
const submitHandler = (e) => {
  e.preventDefault()
```

- Explanation

* Prevents page reload on form submit

---

```jsx
const newTask = { title, details }
```

- Explanation

* Create a new note object

---

```jsx
setTasks([...tasks, newTask])
```

Explanation

* `...tasks` copies old notes
* Adds new note at the end
* React state must never be modified directly

---

```jsx
setTitle('')
setDetails('')
```

- Explanation

* Clears input fields after submission

##  CHAPTER 7: Delete Note Logic

```jsx
const deleteNote = (index) => {
  const copy = [...tasks]
  copy.splice(index, 1)
  setTasks(copy)
}
```

- Explanation

* Make a copy of array
* Remove note using index
* Update state with new array

##  CHAPTER 8: JSX Layout (UI)

```jsx
return (
  <div className="min-h-screen bg-black text-white flex">
```
- Explanation

* `min-h-screen` → full height
* `bg-black` → background color
* `flex` → horizontal layout

---

### Form Section

```jsx
<form onSubmit={submitHandler}>
```

- Explanation

* Calls `submitHandler` when form submits

---

### Input (Controlled Component)

```jsx
<input
  value={title}
  onChange={(e) => setTitle(e.target.value)}
/>
```

- Explanation

* React controls input value
* Every key press updates state

---

### Textarea

```jsx
<textarea
  value={details}
  onChange={(e) => setDetails(e.target.value)}
/>
```

 Same logic as input

##  CHAPTER 9: Display Notes

```jsx
{tasks.map((task, index) => (
```

- Explanation

* Loops through notes array
* Creates UI for each note

---

```jsx
<button onClick={() => deleteNote(index)}>
```

- Explanation

* Deletes that specific note
