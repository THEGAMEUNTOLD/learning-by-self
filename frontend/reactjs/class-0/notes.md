# JavaScript Essentials for React.js

### 1. Basics of JavaScript

#### Subtopics:

* Variables (`let`, `const`)
* Data types (String, Number, Boolean, Undefined, Null)
* Operators (Arithmetic, Comparison, Logical)
* Conditional statements (`if`, `else`, `switch`)
* Loops (`for`, `while`)
* Basic DOM understanding

### 2. Functions

#### Subtopics:

* Function declaration
* Function expression
* Arrow functions (`()=>{}`)
* Parameters and arguments
* Return statement
* Callback functions

> React mainly uses arrow functions and callbacks

### 3. Arrays

#### Subtopics:

* Array creation
* Accessing elements
* Array methods:

  * `map()`
  * `filter()`
  * `reduce()`
  * `forEach()`
* Spread operator with arrays (`...array`)

> `map()` is heavily used in React for rendering lists

### 4. Objects

#### Subtopics:

* Object creation
* Key–value pairs
* Accessing properties (`.` and `[]`)
* Object methods
* Destructuring objects
* Spread operator with objects

> Props and state in React are objects

### 5. ES6 Features (Very Important for React)

#### Subtopics:

* `let` and `const`
* Arrow functions
* Template literals
* Destructuring
* Spread and Rest operators
* Default parameters
* Modules (`import`, `export`)
* Enhanced object literals

### 6. Asynchronous JavaScript

#### Subtopics:

* Synchronous vs Asynchronous
* `setTimeout` and `setInterval`
* Callbacks
* Promises
* `async` and `await`
* Fetch API (basic understanding)

> Used in React for API calls and data fetching

---

### 7. Import & Export in JavaScript

#### Subtopics:

* Named export
* Default export
* Importing modules
* Multiple imports
* File-based modular structure

> Every React component uses import & export





### 8. real DOM & virtual DOM ?

Real DOM (Document Object Model) 
 - Real DOM is the actual structure of a webpage created by the browser.
 - It contains all the real HTML elements (like <div>, <p>, <h1>).
When something changes on the page, the browser updates the Real DOM directly.

Characteristics
 - Slow to update when many elements change
 - Directly interacts with the browser
 - Entire structure may re-render even for a small change
 - Memory-heavy

Virtual DOM —
- Virtual DOM is a lightweight, virtual copy of the Real DOM created by libraries like React.
It exists in memory and is not directly shown on the screen.

- Whenever something changes, React updates the Virtual DOM first, compares it with the previous version (diffing), and then updates only the necessary parts of the Real DOM.

Characteristics
 - Faster updates
 - Efficient: updates only changed elements
 - Helps apps run smoothly
 - Exists only in memory (not directly in the browser)

# Chapter 1: Introduction to ReactJS

## 1.1 What is React?

React is an open-source JavaScript library developed and maintained by Facebook (now Meta). It is primarily used for building interactive and dynamic user interfaces, especially for Single Page Applications (SPAs).

React works on a component-based architecture, where the user interface is divided into small, reusable components. Each component manages its own structure and logic, which makes application development more efficient and maintainable.

React mainly focuses on the view layer of an application, following the Model-View-Controller (MVC) architectural pattern, where React acts as the View.

## 1.2 Need and Importance of React

React has become popular in modern web development due to the following reasons:

1. High Performance
   React uses a **Virtual DOM**, which improves application performance by minimizing direct manipulation of the real DOM.

2. Reusable Components
   Components can be reused across the application, reducing code duplication and improving maintainability.

3. Efficient UI Management
   React efficiently handles complex user interfaces with frequent updates.

4. Strong Community Support
   React has a large developer community, extensive documentation, and third-party libraries.

5. Industry Adoption -> React is widely used by leading companies such as **Facebook, Instagram, Netflix, and Airbnb**, making it a reliable technology.

---

## 1.3 React vs JavaScript Frameworks

React differs from traditional JavaScript frameworks in the following ways:

| Feature     | React                       | JavaScript Frameworks    |
| ----------- | --------------------------- | ------------------------ |
| Type        | Library                     | Framework                |
| Scope       | Handles UI only             | Handles full application |
| Flexibility | High                        | Less flexible            |
| Routing     | External libraries required | Built-in                 |

React focuses only on building the user interface, while other frameworks provide complete solutions including routing, state management, and data handling.

# Chapter 2: Installation of React.js

## 2.1 System Requirements

Before installing React.js, the following software must be installed on the system:

* Node.js (LTS version)
* npm (comes with Node.js)
* A code editor (VS Code recommended)
* A web browser (Chrome recommended)

## 2.2 Installing Node.js for React.js

### Step 1: Download Node.js

1. Open a web browser
2. Visit the official Node.js website
3. Download the LTS (Long Term Support) version
4. Run the installer and complete the installation

### Step 2: Verify Installation

Open the terminal or command prompt and run:

```bash
node -v
npm -v
```

Result: If version numbers are displayed, Node.js and npm are installed successfully.

## 2.3 Creating a React Application Using Vite

### Step 1: Open Terminal

Open the terminal in the folder where you want to create your React project.

### Step 2: Create React App Using Vite

Run the following command:

```bash
npm create vite
```

### Explanation:

* This command starts the Vite project creation process

- It will ask for:

  1. Project name
  2. Framework → Select React
  3. Variant → Select JavaScript

A new project folder will be created.

### Step 3: Move into Project Folder

After project creation, go inside the project folder:

```bash
cd project-name
```

(Replace `project-name` with your actual folder name)

---

## 2.4 Installing Dependencies

### Step 4: Install Required Packages

Run the following command:

```bash
npm i
```

### Explanation:

* Reads the `package.json` file
* Installs all required dependencies
* Creates the `node_modules` folder
* Prepares the project to run

---

## 2.5 Running the React Application

### Step 5: Start Development Server

Run the command:

```bash
npm run dev
```

### Explanation:

* Starts the Vite development server
* Shows a local URL in the terminal
* Enables live reload when code changes

Example output:

```
Local: http://localhost:5173/
```

Open this link in the browser to see the React app running.


# Chapter 3: Setting Up the React Environment

## 3.1 Node.js and NPM

React requires Node.js, a JavaScript runtime environment that allows JavaScript to run outside the browser.
Node.js includes NPM (Node Package Manager), which is used to install and manage project dependencies.

---

## 3.2 Creating a React Application

A React application can be created using **Vite**, which is a modern and fast build tool.

### Advantages of Vite

* Faster development server
* Lightweight and optimized build process
* Better performance compared to Create React App (CRA)

### Basic Project Structure

* `index.html` – Entry HTML file
* `main.jsx` – Application entry point
* `App.jsx` – Root component
* `package.json` – Project configuration and dependencies

---

# Chapter 4: JS and JSX 

## 4.1 JS (JavaScript) in React

- React is built on JavaScript, so you need solid JS fundamentals before using React.

- You use JS for:

  * Variables, functions, arrays, objects
  * Loops, conditions
  * ES6 features: `let/const`, arrow functions, template literals, destructuring
  * Event handling: `onClick`, `onChange`
  * State and props logic in React

Example:

```js
const name = "Bharat";
function greet() {
  return `Hello, ${name}!`;
}
console.log(greet());
```

---

## 4.2 JSX (JavaScript XML)

* Definition: JSX is a syntax extension of JavaScript that lets you write HTML-like code inside JS.
* React uses JSX to describe what the UI should look like.
* Under the hood, JSX is transpiled to `React.createElement()` calls.

Example of JSX

```jsx
const element = <h1>Hello, Bharat!</h1>;
const container = ReactDOM.createRoot(document.getElementById("root"));
container.render(element);
```

* Here, `<h1>Hello, Bharat!</h1>` looks like HTML, but it’s actually JS.
* You can use JS expressions inside JSX with `{}`:

```jsx
const name = "Bharat";
const element = <h1>Hello, {name}!</h1>;
```


### 4.2.1 Rules of JSX

1. JSX must return a **single parent element**.
2. HTML attributes are written using **camelCase** (e.g., `className` instead of `class`).
3. JavaScript expressions are written inside **curly braces `{}`**.
4. JSX elements must be properly closed.

---

## 4.2.2 Advantages of JSX

* Improves code readability
* Combines UI structure and logic in one place
* Protects applications from Cross-Site Scripting (XSS) attacks
* Helps in writing maintainable and structured code

# Chapter 5: Components in React

## 5.1 Meaning of Components

A component is a small, independent, and reusable part of the user interface.
A React application is composed of multiple components that work together to form a complete UI.

## 5.2 Types of Components

### 5.2.1 Functional Components

Functional components are simple JavaScript functions that return JSX.

- Characteristics:

* Easy to write and understand
* Widely used in modern React
* Support Hooks for state and lifecycle management
* Recommended approach in current React development

### 5.2.2 Class Components (Traditional)

Class components are written using ES6 classes.

- Characteristics:

* Use lifecycle methods
* More complex syntax
* Mostly replaced by functional components with Hooks
* Rarely used in modern applications


# Chapter 6: Understanding Props 

## 6.1 Introduction

In React.js, props are used to pass data from one component to another.
The word props stands for properties.
Props make React components reusable, dynamic, and flexible.

Props are passed from parent component to child component.

## 6.2 What are Props?

* Props are read-only data
* They are passed as attributes to components
* A component cannot change its own props
* Props help components communicate with each other

- Important: Props flow in one direction only (parent → child).

## 6.3 Why are Props Needed?

Props are needed to:

* Reuse components with different data
* Display dynamic content
* Maintain clean and modular code
* Avoid repetition of components

## 6.4 Passing Props to a Component

### Step 1: Parent Component

```jsx
function App() {
  return (
    <div>
      <Student name="Rahul" age="20" />
      <Student name="Anjali" age="22" />
    </div>
  );
}

export default App;
```

### Explanation:

* `Student` is a child component
* `name` and `age` are props
* Different values are passed to the same component

### Step 2: Child Component

```jsx
function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
    </div>
  );
}

export default Student;
```

### Explanation:

* `props` is an object
* Props are accessed using `props.propertyName`
* Values are displayed dynamically

## 6.5 Props Using Destructuring

Destructuring makes the code shorter and cleaner.

```jsx
function Student({ name, age }) {
  return (
    <div>
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
}
```

### Advantages:

* Clean syntax
* Easy to read
* No need to write `props.` repeatedly

## 6.6 Props are Read-Only

Props cannot be modified inside the child component.

- Wrong Example:

```jsx
props.name = "Amit";
```

- Correct Concept:

* Props are immutable
* Only parent components can change data

## 6.7 Passing Different Types of Props

### String Props

```jsx
<User name="Bharat" />
```

### Number Props

```jsx
<User age={21} />
```

### Boolean Props

```jsx
<User isStudent={true} />
```

### Array Props

```jsx
<User skills={["HTML", "CSS", "React"]} />
```

### Object Props

```jsx
<User info={{ city: "Jaipur", course: "CSE" }} />
```

## 6.8 Props with Functions

Functions can also be passed as props.

### Parent Component

```jsx
function App() {
  function greet() {
    alert("Hello Student");
  }

  return <Button clickHandler={greet} />;
}
```

### Child Component

```jsx
function Button({ clickHandler }) {
  return <button onClick={clickHandler}>Click Me</button>;
}
```

## 6.9 Default Props

Default props are used when no value is passed.

```jsx
function Profile({ name = "Guest" }) {
  return <h1>Welcome, {name}</h1>;
}
```

## 6.10 Props vs State (Basic Difference)

| Props                 | State                    |
| --------------------- | ------------------------ |
| Passed from parent    | Managed inside component |
| Read-only             | Can be changed           |
| Used for data sharing | Used for component data  |

## 6.11 Advantages of Props

* Makes components reusable
* Improves code readability
* Enables component communication
* Helps build dynamic UI