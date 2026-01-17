# Using LocalStorage in React.js

### 1. Introduction to LocalStorage

LocalStorage is a web storage mechanism provided by modern browsers that allows developers to store data in the form of key–value pairs The data stored in LocalStorage persists even after the browser is refreshed or closed, making it suitable for saving user preferences, application state, or temporary data.

LocalStorage is part of the Web Storage API and differs from cookies in the following ways:

* It has a larger storage capacity (approximately 5–10 MB).
* It does not expire automatically.
* It is not sent to the server with every HTTP request.

### 2. Why Use LocalStorage in React.js?

React applications are component-based and state-driven. However, React state is temporary and is lost when the page reloads.

LocalStorage helps to:

* Preserve application data across page refreshes
* Store user preferences (theme, language, login status)
* Improve user experience by maintaining continuity

Thus, LocalStorage acts as a persistent layer outside React’s in-memory state.

### 3. Nature of Data in LocalStorage

LocalStorage can store only strings. Therefore, when storing complex data such as objects or arrays, they must be converted into a string format using `JSON.stringify()`. Similarly, while retrieving data, it must be converted back using `JSON.parse()`.

### 4. Accessing LocalStorage in JavaScript

LocalStorage provides the following important methods:

1. setItem(key, value)
   Stores data in LocalStorage.

2. getItem(key)
   Retrieves data from LocalStorage.

3. removeItem(key)
   Removes a specific item.

4. clear()
   Removes all stored data.

### 5. Using LocalStorage in React.js

In React, LocalStorage is commonly used together with useState and useEffect hooks.

#### a) Storing Data in LocalStorage

When a state value changes, it can be saved in LocalStorage to ensure persistence.

Example concept:

* React state holds the data during runtime.
* LocalStorage saves the data permanently.

#### b) Retrieving Data from LocalStorage

When a component mounts, data is retrieved from LocalStorage and used to initialize the state. This ensures that previously stored data is restored when the application reloads.

### 6. Synchronization Between State and LocalStorage

React state and LocalStorage must remain synchronized:

* State → LocalStorage:
  Whenever state updates, the new value is stored in LocalStorage.

* LocalStorage → State:
  When the component loads, LocalStorage data is read and used to initialize the state.

This synchronization is typically handled using the `useEffect` hook.

### 7. Example Scenario

Consider a notes application:

* Notes are stored in React state for rendering.
* Notes are saved to LocalStorage whenever a new note is added.
* On page refresh, notes are retrieved from LocalStorage and displayed again.

This approach ensures that user data is not lost.

### 8. Advantages of Using LocalStorage

* Data persistence across sessions
* Simple API
* No server dependency
* Improves user experience

### 9. Limitations of LocalStorage

* Stores only string data
* Synchronous API (may affect performance for large data)
* Not suitable for sensitive information (no encryption)
* Limited storage capacity



# API Calls in React 

In modern web applications, React is often required to communicate with external servers in order to fetch or send data. This communication is achieved through API calls An API (Application Programming Interface acts as a bridge between the React application (client) and a backend server.

## 1. What is an API Call?

An API call is a request sent from the React application to a server to:

* Retrieve data (GET request)
* Send data (POST request)
* Update data (PUT or PATCH request)
* Delete data (DELETE request)

The server processes the request and returns a response, usually in JSON format, which the React application then uses to update the user interface.

## 2. Why API Calls are Needed in React

React itself only handles the user interface. It does not store large amounts of data permanently. Therefore, API calls are required to:

* Load data from a database
* Display dynamic content
* Submit forms
* Synchronize frontend and backend data

## 3. Common Ways to Make API Calls in React

### a) Using the `fetch()` API

`fetch()` is a built-in JavaScript function used to make HTTP requests.

Example:

```javascript
fetch("https://api.example.com/users")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```


### b) Using Axios

Axios is a popular third-party library that simplifies API calls and provides better error handling.

Example:

```javascript
import axios from "axios";

axios.get("https://api.example.com/users")
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
```

## 4. API Calls with `useEffect` in React

In React, API calls are usually made when a component loads (mounts). This is done using the `useEffect` hook.

Example:

```javascript
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
```

Explanation:

* `useEffect` runs when the component is rendered.
* The empty dependency array `[]` ensures the API call is made only once.
* The received data is stored in `state` using `useState`.
* Updating the state automatically re-renders the UI.


## 5. Handling Loading and Errors

A good React application always handles loading states and errors.

- Example:

```javascript
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  fetch("https://api.example.com/users")
    .then((res) => res.json())
    .then((data) => {
      setUsers(data);
      setLoading(false);
    })
    .catch((err) => {
      setError("Failed to load data");
      setLoading(false);
    });
}, []);
```



# ### `useEffect` Hook in React.js

- The `useEffect` hook is a fundamental feature in React that allows a functional component to perform side effects. Side effects are operations that interact with the outside world or occur after rendering, such as fetching data from an API, manipulating the DOM, setting up subscriptions, or using timers.

- In class-based components, these behaviors were handled by lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. The `useEffect` hook combines the responsibilities of all these lifecycle methods into a single, unified API.

### Definition

> `useEffect` is a React Hook that executes a piece of code after the component has been rendered to the screen.

React ensures that the UI is updated first, and only then does the effect run.

### Syntax

```javascript
useEffect(() => {
  // side effect code
}, [dependencies]);
```

### Structure Explained

1. Effect Function
   The first argument is a function that contains the side-effect logic.
   This function runs after the component renders.

2. Dependency Array
   The second argument is an optional array of values that determines when the effect should run.

### Types of `useEffect` Usage

#### 1. `useEffect` without Dependency Array

```javascript
useEffect(() => {
  console.log("Component rendered");
});
```

* Runs after every render
* Executes on initial render and on every update
* Rarely used, as it may cause performance issues

#### 2. `useEffect` with Empty Dependency Array

```javascript
useEffect(() => {
  console.log("Component mounted");
}, []);
```

* Runs only once
* Executes after the first render
* Equivalent to `componentDidMount`
* Commonly used for:

  * API calls
  * Initial setup
  * Event listeners


#### 3. `useEffect` with Dependencies

```javascript
useEffect(() => {
  console.log("Title changed");
}, [title]);
```

* Runs on initial render
* Re-runs only when the specified dependency changes
* Equivalent to `componentDidUpdate`

### Cleanup Function

The effect function may return a cleanup function, which React executes before the component unmounts or before re-running the effect.

```javascript
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

* Prevents memory leaks
* Equivalent to `componentWillUnmount`
* Used for:

  * Removing event listeners
  * Clearing timers
  * Cancelling subscriptions


### Execution Order

1. Component renders
2. Browser updates the UI
3. `useEffect` runs
4. Cleanup runs (if applicable) before the next effect or unmount


### Important Characteristics

* `useEffect` runs asynchronously after rendering
* It does not block UI rendering*
* Multiple `useEffect` hooks can be used in a single component
* Each `useEffect` should handle one logical side effect

### Common Use Cases

* Fetching data from a server
* Updating the document title
* Subscribing to events or sockets
* Managing timers and intervals
* Synchronizing state with external systems



# Gallery Project
