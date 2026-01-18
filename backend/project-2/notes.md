
# User Management System (Express + MongoDB + EJS)

## 1. Project Overview

This project is a User Management System built using Node.js, Express.js, MongoDB, Mongoose, and EJS.
It allows a user to create, read, update, and delete (CRUD) user records.
Each user consists of a name, email, and an optional image URL.

The application follows the MVC-inspired structure, where:

* Model → MongoDB schema using Mongoose
* View → EJS templates styled with Tailwind CSS
* Controller / Routes → Express route handlers

## 2. Project Initialization (Terminal Level)

### Step 1: Initialize Node.js Project

```bash
npm init -y
```

This command creates a `package.json` file, which acts as the identity card of the project and stores metadata and dependencies.

### Step 2: Install Required Dependencies

```bash
npm install express mongoose ejs
```

Purpose of each package:

| Package    | Role                                          |
| ---------- | --------------------------------------------- |
| `express`  | Web framework for routing and server creation |
| `mongoose` | ODM (Object Data Modeling) for MongoDB        |
| `ejs`      | Template engine to render dynamic HTML        |

## 3. Folder Structure (Conceptual)

```
project/
│
├── models/
│   └── User.js
│
├── views/
│   ├── index.ejs
│   ├── read.ejs
│   └── edit.ejs
│
├── public/
│   └── (static assets if any)
│
├── app.js
├── package.json
```

This structure promotes separation of concerns and improves maintainability.



## 4. Database Layer (Model)

### File: `models/User.js`

```js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    image: { type: String }
});

module.exports = mongoose.model('User', userSchema);
```

### Explanation:

* A schema defines the shape of documents stored in MongoDB.
* `required: true` ensures data integrity.
* The model `User` becomes the interface through which the application interacts with the database.

## 5. Server Setup & Configuration

### File: `app.js`

#### 5.1 Importing Core Modules

```js
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const User = require('./models/User');
```

Each import serves a specific architectural purpose:

* `express` → HTTP server and routing
* `mongoose` → Database connectivity
* `path` → File system path handling

#### 5.2 MongoDB Connection

```js
mongoose.connect('mongodb://127.0.0.1:27017/userdb')
```

* Establishes a connection with a local MongoDB database
* `userdb` is the database name
* Connection is asynchronous and returns a promise

#### 5.3 View Engine Configuration

```js
app.set('view engine', 'ejs');
```

This allows Express to render `.ejs` files as HTML responses.


#### 5.4 Middlewares

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
```

Purpose:

* Parse incoming form data
* Enable JSON handling
* Serve static files (CSS, images, etc.)

## 6. Routing & Application Flow

### 6.1 Home Route (`/`)

```js
app.get('/', (req, res) => {
    res.render('index');
});
```

Displays the user creation form.

### 6.2 Create User (POST)

```js
app.post('/create', async (req, res) => {
    await User.create(req.body);
    res.redirect('/read');
});
```

Flow:

1. Form submits data
2. Data is stored in MongoDB
3. User is redirected to the listing page

### 6.3 Read Users (GET)

```js
app.get('/read', async (req, res) => {
    const users = await User.find();
    res.render('read', { users });
});
```

Fetches all users and sends them to `read.ejs`.

### 6.4 Delete User

```js
app.get('/delete/:id', async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.redirect('/read');
});
```

Deletes a user based on MongoDB `_id`.

### 6.5 Edit User

```js
app.get('/edit/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('edit', { user });
});
```

Loads user data into an editable form.

### 6.6 Update User

```js
app.post('/update/:id', async (req, res) => {
    await User.findByIdAndUpdate(req.params.id, req.body);
    res.redirect('/read');
});
```

Updates existing user information.

## 7. View Layer (EJS Templates)

### 7.1 `index.ejs`

* Displays a form to create a new user
* Uses Tailwind CSS for modern UI
* Sends data to `/create`


### 7.2 `read.ejs`

* Displays all users in a grid layout
* Shows image (if available)
* Provides Edit and Delete actions

### 7.3 `edit.ejs`

* Pre-fills form fields using `<%= user.field %>`
* Allows updating user details
* Submits data to `/update/:id`

## 8. Styling Layer

* Tailwind CSS is used via CDN
* Utility-first approach ensures:

  * Clean layout
  * Responsive design
  * Minimal custom CSS
  
## 9. Execution (Terminal)

### Start MongoDB

```bash
mongod
```

### Run Application

```bash
node app.js
```

Server starts on:

```
http://localhost:3000
```

---

## 10. Complete Flow Summary

1. User opens home page
2. Submits user details
3. Data stored in MongoDB
4. User list displayed
5. User can edit or delete entries
6. All operations reflect instantly

---

## 11. Key Concepts Reinforced

* MVC architecture
* RESTful routing
* CRUD operations
* Server-side rendering with EJS
* MongoDB document modeling
* Express middleware usage


