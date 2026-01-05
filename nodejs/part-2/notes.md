## node.js basic : 
## Introduction to Node.js

- JavaScript was originally designed to run only inside web browsers. It was mainly used to add interactivity to web pages, such as form validation, animations, and dynamic content. Because of this limitation, JavaScript did not have access to system-level features like the file system, networking, or process management, which are required to build backend applications.

- Ryan Dahl observed this limitation and thought that JavaScript should also be capable of running on the server side. Around the same time, Google released the Chrome browser’s V8 JavaScript engine as open source. The V8 engine, written in C++, is responsible for executing JavaScript code very fast.

- Ryan Dahl used the V8 engine and built a wrapper layer around it using C++. This wrapper provided JavaScript with access to low-level system functionalities such as creating servers, handling file operations, and managing network requests. As a result, JavaScript could now be executed outside the browser.

- This platform was named Node.js.

### what is of Node.js
- Node.js is a JavaScript runtime environment that allows JavaScript code to run outside the browser, especially on the server side.

##### How Node.js Works
1. javaScript code is written by the developer.
2. Node.js passes this code to the V8 engine.
3. The V8 engine executes the JavaScript code.
4. Node.js provides built-in modules (like HTTP, File System, and Events) that allow JavaScript to interact with the operating system.
5. Using these features, developers can create servers and backend applications.

###### Key Features of Node.js
- Built on Google Chrome’s V8 engine
- Allows JavaScript to be used for backend development
- Uses an event-driven, non-blocking I/O model
- Efficient and suitable for scalable network applications


## installing node.js and npm 
### Download Node.js
1. Open your browser
2. Go to ->  https://nodejs.org
3. You will see two versions:
 - LTS (Recommended)  → Stable & best for beginners
 - Current → For latest features
4. Click on LTS to download

### Install Node.js
1. Open the downloaded .msi file
2. Click Next
3. Accept the License Agreement
4. Click Next (keep default settings)
5. Make sure these options are checked 
 - Node.js runtime
 - npm package manager
 - Add to PATH
6. Click Install
7. Click Finish

### Verify Installation
1. Open Command Prompt or Terminal
2. Run these commands:
 - node -v
 - npm -v
If version numbers appear, Node.js is installed successfully.



## 1. What is `npm init`?

`npm init` is a command used in Node.js to initialize a new project.
When this command is executed in a folder, it creates a file named `package.json`.

### What is `package.json`?

`package.json` is a configuration file that contains important information about a Node.js project.
It acts as the identity card of the project and helps Node.js and npm understand how the project works.

### Important Contents of `package.json`

* name – The name of the project
* version – The current version of the project
* description – A short explanation of the project
* main – The entry file of the application (e.g., `index.js`)
* scripts – Commands to run tasks like start, test, etc.
* dependencies – External packages required for the project
* author – Name of the project creator
* license – Legal permission for usage

### Importance of `package.json`

* Manages project dependencies
* Helps in sharing and deploying projects
* Maintains consistency across different systems

---

## 2. Working with Modules in Node.js

### What is a Module?

A module is a reusable block of code that performs a specific task.
Node.js follows a modular architecture, meaning each file is treated as a separate module.

### Types of Modules in Node.js

1. Core Modules – Built-in modules provided by Node.js

   * Examples: `fs`, `http`, `path`, `os`
2. Local Modules – Modules created by the developer
3. Third-Party Modules – Modules installed using npm

### Exporting and Importing Modules

* Code is shared using `module.exports`
* Code is accessed using `require()`

### Advantages of Modules

* Improves code organization
* Enhances reusability
* Makes applications easier to maintain

---

## 3. File System Operations (FS Module)

### What is the File System Module?

The File System (fs) module allows Node.js to interact with files and directories on the computer.

### Common File System Operations

* Creating files
* Reading files
* Writing data to files
* Updating files
* Deleting files
* Creating and removing folders

### Nature of FS Operations

File system operations can be:

* Synchronous – Blocking execution until completion
* Asynchronous – Non-blocking and more efficient

### Importance of FS Module

* Used for logging
* Storing user data
* Reading configuration files
* Handling uploads and downloads

## 4. Understanding the HTTP Module

### What is the HTTP Module?

The HTTP module allows Node.js to create a web server and handle HTTP requests and responses.

### Role of HTTP Module

* Listens for client requests
* Sends responses back to the browser
* Enables backend communication

### Request and Response

* Request – Sent by the client (browser)
* Response – Sent by the server (Node.js)

### Common Uses

* Building web servers
* Creating APIs
* Handling routes and endpoints

### Advantages of HTTP Module

* Lightweight and fast
* No external dependency required
* Forms the foundation of backend development

