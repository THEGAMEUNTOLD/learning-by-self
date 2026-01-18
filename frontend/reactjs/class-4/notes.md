# React Router DOM

## 1. Introduction

React Router DOM is a standard routing library used in React applications to enable client-side navigation. It allows a React application to behave like a multi-page website, while technically remaining a Single Page Application (SPA).

Instead of loading a new HTML page from the server on every navigation, React Router DOM dynamically renders components based on the URL path.



## 2. Why React Router DOM is Required

In traditional websites:

* Every URL change causes a full page reload.
* The browser requests a new HTML file from the server.

In React applications:

* The entire application loads once.
* Only specific components change when the URL changes.
* This results in faster performance and better user experience.

React Router DOM solves the problem of:

* Page navigation
* URL management
* Component rendering based on routes

## 3. Installation

React Router DOM is installed using the Node Package Manager (npm):

```bash
npm install react-router-dom
```

This package provides all the necessary components required for routing in web-based React applications.

## 4. BrowserRouter

### Definition

`BrowserRouter` is a router provider component that uses the HTML5 History API to keep the UI synchronized with the browser URL.

### Purpose

* It wraps the entire React application.
* It enables routing functionality across all components.

### Example (Reference from your code)

```jsx
import { BrowserRouter } from "react-router-dom";

<BrowserRouter>
  <App />
</BrowserRouter>
```

Without `BrowserRouter`, routing components such as `Routes`, `Route`, and `Link` will not function.

## 5. Routes Component

### Definition

The `Routes` component is a container that holds multiple `Route` components.

### Purpose

* It ensures that only one matching route is rendered at a time.
* It replaces the older `Switch` component (used in previous versions).

### Example

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## 6. Route Component

### Definition

The `Route` component defines the relationship between a URL path and a React component.

### Syntax

```jsx
<Route path="/path" element={<Component />} />
```

### Example (From your practice)

```jsx
<Route path="/contact" element={<Contact />} />
```

This means:

* When the browser URL is `/contact`
* The `Contact` component will be rendered


## 7. Link Component

### Definition

The `Link` component is used to navigate between routes without reloading the page.

### Purpose

* Works like the HTML `<a>` tag
* Prevents full page reloads
* Maintains SPA behavior

### Example

```jsx
<Link to="/about">About</Link>
```

## 8. NavLink Component

### Definition

`NavLink` is an enhanced version of `Link` that provides information about the active route.

### Advantage

* Automatically applies styles when a link is active
* Useful for navigation menus

### Example (From enhanced navbar)

```jsx
<NavLink to="/home">
  Home
</NavLink>
```

When the route is active, `NavLink` allows styling based on the active state.

## 9. Navbar as a Common Layout Component

### Concept

The Navbar is placed outside the Routes component so that it:

* Remains visible on all pages
* Does not re-render unnecessarily

### Example

```jsx
<Navbar />
<Routes>
  ...
</Routes>
```

This ensures consistent navigation across the application.

## 10. Pages as Separate Components

Each page in the application is represented as an independent React component, such as:

* Home
* About
* Contact
* Product

### Benefit

* Improves code readability
* Encourages component reusability
* Follows modular design principles

## 11. 404 – Not Found Route

### Definition

A 404 route is used to handle invalid or undefined URLs.

### Syntax

```jsx
<Route path="*" element={<NotFound />} />
```

### Purpose

* Prevents blank screens
* Improves user experience
* Makes the application more robust

## 12. Single Page Application (SPA) Behavior

Although the application appears to have multiple pages:

* Only one HTML file is loaded
* Navigation happens by rendering components
* The URL changes without page reload

This is the defining feature of a Single Page Application.

## 13. Advantages of React Router DOM

* Fast navigation
* No full page reloads
* Clean and readable URLs
* Component-based routing
* Easy to manage large applications


# Advanced Routing in React Router

Routing is the mechanism by which a web application displays different views or pages based on the URL.
In React, routing is handled by the React Router library, which enables single-page applications to simulate multi-page behavior without reloading the browser.

This chapter explains the following advanced routing concepts:

1. Nested Routes
2. Dynamic Routing
3. Programmatic Navigation using `useNavigate()`
4. Handling Unknown Routes (404 Page)

##  Nested Routes

### Definition

Nested routing is a technique where a route is placed inside another route, allowing the child route’s content to be rendered within the parent route’s layout.

In other words, nested routes help us display sub-pages inside a main page.

### Why Nested Routes Are Needed

Consider the following URL structure:

```
/product
/product/men
/product/women
/product/kids
```

All these pages belong to the Product section.
Instead of repeating the layout for each page, we create:

* A parent route (`/product`)
* Multiple child routes (`men`, `women`, `kids`)

### Reference from Your Code

#### Parent Route (`AppRoutes.jsx`)

```jsx
<Route path="/product" element={<Product />}>
  <Route path="men" element={<Men />} />
  <Route path="women" element={<Women />} />
  <Route path="kids" element={<Kids />} />
</Route>
```

Here:

* `/product` is the parent route
* `men`, `women`, and `kids` are nested child routes

---

### The Role of `<Outlet />`

The `<Outlet />` component defines where child routes will be rendered inside the parent component.

#### `Product.jsx`

```jsx
import { Link, Outlet } from "react-router-dom"

const Product = () => {
  return (
    <div>
      <div className="flex justify-center gap-8">
        <Link to="men">MEN</Link>
        <Link to="women">WOMEN</Link>
        <Link to="kids">KIDS</Link>
      </div>

      <Outlet />
    </div>
  )
}
```
- Explanation

* When the URL is `/product/men`, `<Men />` appears at `<Outlet />`
* When the URL is `/product/women`, `<Women />` appears at `<Outlet />`

Thus, the parent layout remains constant while the content changes dynamically.

## 2. Dynamic Routing

### Definition

Dynamic routing allows a route to accept variable parameters in the URL.

For example:

```
/courses/react
/courses/node
/courses/mongodb
```

Here, `react`, `node`, and `mongodb` are not fixed routes but dynamic values.


### Dynamic Route Declaration (`AppRoutes.jsx`)

```jsx
<Route path="/courses/:courseId" element={<CourseDetail />} />
```

* `:courseId` is a **dynamic route parameter**
* The value changes based on the URL

---

### Accessing Dynamic Parameters

React Router provides the `useParams()` hook to read dynamic values from the URL.

#### `CourseDetail.jsx`

```jsx
import { useParams } from "react-router-dom"

const CourseDetail = () => {
  const { courseId } = useParams()

  return <h1>{courseId} Course</h1>
}
```

- Explanation

* If the URL is `/courses/react`
* `courseId` becomes `"react"`
* The page automatically adjusts its content

Dynamic routing is essential for:

* Course pages
* Product details
* User profiles

---

## 3. Programmatic Navigation (`useNavigate`)

### Definition

Programmatic navigation means changing the route using JavaScript logic, instead of clicking a `<Link>`.

This is useful when navigation depends on:

* Button clicks
* Form submissions
* Authentication logic



###  from Code

#### `Navbar2.jsx`

```jsx
import { useNavigate } from "react-router-dom"

const Navbar2 = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <button onClick={() => navigate(1)}>Next</button>
    </>
  )
}
```

---

### Explanation

| Code            | Meaning                        |
| --------------- | ------------------------------ |
| `navigate("/")` | Go to Home page                |
| `navigate(-1)`  | Go back one step in history    |
| `navigate(1)`   | Go forward one step in history |

 Unlike `<Link>`, `useNavigate()` works inside functions and logic.


## 4. 404 Page (Handling Unknown Routes)

### Definition

A 404 page is shown when the user tries to access a route that does not exist.

In React Router, this is handled using the wildcard route (`*`).


### Reference from Your Code

#### `AppRoutes.jsx`

```jsx
<Route path="*" element={<NotFound />} />
```

* `*` matches any undefined route
* Must always be placed at the bottom

### `NotFound.jsx`

```jsx
const NotFound = () => {
  return (
    <h1 className="text-red-600 text-3xl">
      404 | Page Not Found
    </h1>
  )
}
```

- If the user enters:

```
/random-page
```

The application displays the 404 page instead of crashing.


# Bonus Concepts in React

## 1. Props (Properties)

### Definition

Props (short for properties) are read-only data passed from one React component to another. They allow components to receive input and display dynamic content.

Props make components configurable and reusable.

### Key Points

* Props are passed from parent to child
* Props are immutable (cannot be changed by the child)
* Props help make components dynamic

### Example

```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

<Welcome name="Bharat" />
```

### Explanation

Here, `name` is a prop sent by the parent component to the `Welcome` component.

## 2. Parent to Child Data Passing

### Definition

In React, data flows in one direction, known as unidirectional data flow. This means data is passed from parent components to child components using props.

### Why It Is Needed

* To share data between components
* To keep the application predictable and easy to debug

### Example

```jsx
function Parent() {
  return <Child message="Hello from Parent" />;
}

function Child(props) {
  return <p>{props.message}</p>;
}
```

### Explanation

The `Parent` component sends data to `Child` using props.
The child can use the data but cannot modify it.

## 3. Child to Parent Communication (via Callback Function)

### Definition

React does not allow direct data flow from child to parent.
However, child components can communicate with parents using callback functions.

### Concept

* Parent defines a function
* Parent passes the function to child as a prop
* Child calls the function to send data back

### Example

```jsx
function Parent() {
  const receiveData = (data) => {
    console.log(data);
  };

  return <Child sendData={receiveData} />;
}

function Child(props) {
  return (
    <button onClick={() => props.sendData("Hello Parent")}>
      Send Data
    </button>
  );
}
```

### Explanation

The child does not send data directly.
Instead, it invokes the parent’s function, passing data as an argument.

## 4. Component Reusability

### Definition

Component reusability means creating components that can be used multiple times with different data.

This is one of the core principles of React.

### Benefits

* Reduces code duplication
* Improves maintainability
* Makes applications scalable

### Example

```jsx
function Card({ title, description }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
```

```jsx
<Card title="React" description="Frontend Library" />
<Card title="Node.js" description="Backend Runtime" />
```

### Explanation

The same `Card` component is reused with different props.

## 5. React StrictMode

### Definition

StrictMode is a development tool in React that helps identify potential problems in an application.

It does not affect production builds.

### Purpose

* Detect unsafe lifecycle methods
* Highlight side effects
* Warn about deprecated APIs
* Help prepare apps for future React versions

### Usage

```jsx
import React from "react";

<React.StrictMode>
  <App />
</React.StrictMode>
```

### Important Behavior

In development mode, StrictMode:

* Renders components **twice**
* Calls certain functions twice

This helps React detect unexpected side effects.

### Note

This behavior occurs only in development, not in production.







# Context API – Introduction

In modern React applications, data often needs to be shared among multiple components. Traditionally, this data is passed from parent components to child components using props. However, when an application grows in size, passing data through many intermediate components becomes inefficient and difficult to manage. This problem is commonly known as props drilling.

To overcome this limitation, React provides a powerful feature called the Context API. The Context API allows developers to create a global data store that can be accessed by any component in the component tree, without explicitly passing data through props at every level.

In simple terms, the Context API enables centralized state management within a React application.

## Purpose of Context API

The primary objectives of the Context API are:

* To avoid unnecessary prop drilling
* To share global data such as themes, authentication details, language preferences, etc.
* To improve code readability and maintainability
* To simplify state management in medium-scale React applications


## Core Elements of Context API

The Context API consists of three fundamental components:

1. createContext()
2. Context Provider
3. useContext() Hook

Each of these elements plays a specific role in managing and distributing shared data.


## 1. createContext()

The `createContext()` function is used to create a new context object. This object acts as a container that stores shared data and makes it accessible to consuming components.

### Example from the Code

```js
export const ThemeDataContext = createContext();
```

Here, a context named `ThemeDataContext` is created to store theme-related data such as the current theme and a function to update it.

## 2. Context Provider

The Provider is a special component that supplies data to all its child components. Any component wrapped inside the Provider can access the shared data.

In the given code, the Provider is implemented inside the `ThemeContext` component.

### Explanation

```js
const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeDataContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeDataContext.Provider>
  );
};
```

* The `theme` state holds the current theme value.
* The `toggleTheme` function updates the theme.
* The `value` prop defines the data that will be shared globally.
* `children` ensures that all nested components can consume the context.

Thus, the Provider acts as the source of truth for the theme data.

## 3. useContext() Hook

The `useContext()` hook allows any component to access the data provided by the Context Provider.

### Example

```js
const { theme } = useContext(ThemeDataContext);
```

Using this hook, the component directly receives the global data without using props.

## Context API in Action 

The given project demonstrates a theme management system implemented using the Context API.

## Theme Management Flow

1. The application initializes with a default theme (`light`).
2. The `ThemeContext` component wraps the entire application.
3. The theme state and toggle function are shared using Context.
4. Multiple components consume the same theme data.
5. Updating the theme in one component updates it across the entire application.

## Navbar Component

The `Navbar` component consumes the theme value from the context and dynamically applies CSS classes.

```js
const { theme } = useContext(ThemeDataContext);
```

Based on the theme value:

* A light background is applied for the light theme.
* A dark background is applied for the dark theme.

This demonstrates dynamic UI rendering using shared state.

## Nav2 Component

The `Nav2` component also consumes the same theme value.

```js
const { theme } = useContext(ThemeDataContext);
```

This confirms that multiple components at different levels of the component tree can access the same context data without prop passing.

## Button Component

The `Button` component consumes the `toggleTheme` function from the context.

```js
const { toggleTheme } = useContext(ThemeDataContext);
```

When the button is clicked:

* The theme state is updated inside the Context Provider.
* All subscribed components re-render automatically.
* The UI updates consistently throughout the application.

This illustrates centralized state mutation.

## Advantages of Using Context API

* Eliminates prop drilling
* Ensures consistent state across components
* Improves scalability and maintainability
* Simplifies state sharing
* Reduces code redundancy

## Limitations of Context API

* Not suitable for highly complex state logic
* Frequent updates may cause unnecessary re-renders
* For large-scale applications, libraries like Redux or Zustand may be preferred


## Final 

The Context API provides an efficient and structured approach to managing global state in React applications. In the given project, it is effectively used to implement a theme-switching mechanism that allows multiple components to access and update shared data seamlessly. This demonstrates how Context API improves code organization, eliminates prop drilling, and enhances the overall maintainability of a React application.
