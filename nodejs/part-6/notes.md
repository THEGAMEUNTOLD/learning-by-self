
# Mastering EJS, Dynamic Routing & Project Setup (Express.js)

## 1. Initializing a Project with NPM

Before starting any backend project, we must initialize Node Package Manager (NPM).
This creates a `package.json` file, which stores project information and dependencies.

### Terminal Command

```bash
npm init
```

This command:

* Creates `package.json`
* Manages project dependencies
* Stores scripts and metadata

## 2. Installing Express.js

Express.js is a fast and minimal Node.js web framework used to build server-side applications.

### Terminal Command

```bash
npm i express
```

After installation:

* A `node_modules` folder is created
* Express is added as a dependency

## 3. Project Starter Code (Basic Setup)

```js
const express = require('express');
const app = express();
const path = require('path');
```

### Explanation

* `express` → imports the Express framework
* `app` → creates an Express application
* `path` → helps in handling file paths safely

## 4. Setting Up Parsers for Form Data

When data is sent from the frontend (HTML forms), it does not automatically reach the backend in readable format.
Therefore, parsers are required.

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
```

### Explanation 

* `express.json()`
  Parses incoming JSON data (used in APIs).
* `express.urlencoded()`
  Parses form data sent via `<form>` elements.
* `extended: true` allows nested objects.

Without these parsers, `req.body` will be undefined.

## 5. Setting Up EJS (Embedded JavaScript)

### 5.1 Installing EJS

```bash
npm i ejs
```

EJS is a templating engine that allows JavaScript logic inside HTML.

### 5.2 Setting EJS as View Engine

```js
app.set('view engine', 'ejs');
```

### Explanation

* Tells Express that all views will use EJS
* Looks for `.ejs` files inside the `views` folder

## 6. Setting Up Public Static Files

Static files include:

* CSS
* Images
* JavaScript (frontend)

```js
app.use(express.static(path.join(__dirname, 'public')));
```

### Explanation

* `public` folder becomes accessible to browser
* No route is required to access static files

Example:

```html
<link rel="stylesheet" href="/style.css">
```

## 7. Rendering an EJS Page

```js
app.get("/", function(req, res){
    res.render("index");
});
```

### Explanation

* `res.render("index")` renders `views/index.ejs`
* No need to write `.ejs` explicitly

## 8. Dynamic Routing 

### What is Dynamic Routing?

Sometimes, only one part of the URL changes, while the rest remains same.

Example:

```
/author/harsh
/author/harshita
/author/harshikka
```

Here, only the name is changing.

### How Dynamic Routing Works

In Express, dynamic values are represented using `:` (colon).

```js
app.get("/profile/:username", function(req, res){
    res.send(req.params.username);
});
```

### Explanation

* `:username` is a dynamic parameter
* It captures values from the URL
* Data is stored in `req.params`

### Multiple Dynamic Parameters

```js
app.get("/profile/:username/:age", function(req, res){
    res.send(`welcome ${req.params.username} your age is ${req.params.age}`);
});
```

### Example URL

```
/profile/bharat/21
```

### Output

```
welcome bharat your age is 21
```

## 9. How Data Comes from Frontend to Backend (Book Language)

When a user submits data from the frontend (form, URL, or API):

### There are three main ways:

1. URL Parameters

   * Accessed using `req.params`
   * Example: `/profile/:username`

2. Form Data

   * Sent via `<form method="POST">`
   * Accessed using `req.body`
   * Requires `express.urlencoded()` middleware

3. JSON Data

   * Sent via APIs (POST, PUT)
   * Accessed using `req.body`
   * Requires `express.json()`

Thus, middleware acts as a bridge between frontend and backend.

## 10. Starting the Server

```js
app.listen(3000, function(){
    console.log("it is running");
});
```

### Explanation

* Server runs on port `3000`
* Application becomes accessible at:

  ```
  http://localhost:3000
  ```

## 11. Running the Server with Nodemon

```bash
npx nodeman style.js
```

### Explanation

* Automatically restarts server on file changes
* No need to stop and start manually


## 12. EJS Expression Tag

```ejs
<%= 2 + 2 %>
```

### Explanation

* `<%=` outputs evaluated JavaScript
* Result will be displayed in browser

### Output

```
4
```

EJS allows:

* JavaScript logic
* Variables
* Dynamic HTML rendering

