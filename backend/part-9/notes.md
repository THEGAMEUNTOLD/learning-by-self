# Authentication & Authorization using JWT, MongoDB, and Express

## Chapter 1: Introduction

Modern web applications require a secure system to identify users and control access to protected resources.
This process is achieved using Authentication and Authorization.

In this project, we implement:

* User Registration
* User Login
* Password Hashing
* JWT-based Authentication
* Cookie-based Session Handling
* Protected Dashboard Access

## Chapter 2: Key Concepts

### 2.1 Authentication

Authentication is the process of verifying the identity of a user

Example:

> Checking whether a user exists and whether the password is correct.

### 2.2 Authorization

Authorization is the process of deciding what an authenticated user is allowed to do.

Example:

> Allowing only logged-in users to access the dashboard.


### 2.3 JWT (JSON Web Token)

A JWT is a secure token that stores user information in encrypted form.

* Generated after login
* Stored in cookies
* Sent automatically with every request
* Used to identify the user without storing sessions on the server


## Chapter 3: Project Setup

### 3.1 Installed Packages

```bash
npm init -y
npm i express mongoose bcrypt jsonwebtoken cookie-parser ejs
```

#### Purpose of Each Package

| Package       | Purpose                       |
| ------------- | ----------------------------- |
| express       | Server framework              |
| mongoose      | MongoDB ODM                   |
| bcrypt        | Password hashing              |
| jsonwebtoken  | Token creation & verification |
| cookie-parser | Read cookies                  |
| ejs           | Server-side templates         |


## Chapter 4: Folder Structure (Correct Organization)

```
project-root/
│
├── models/
│   └── user.js
│
├── public/
│   ├── images/
│   ├── javascripts/
│   └── stylesheets/
│       └── style.css
│
├── views/
│   ├── index.ejs        (Register)
│   ├── login.ejs        (Login)
│   ├── dashboard.ejs   (Protected)
│   └── edit.ejs
│
├── app.js
└── package.json
```

This structure follows MVC architecture principles.

## Chapter 5: Database & User Model

### 5.1 MongoDB Connection & Schema

**models/user.js**

```js
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/authtestapp');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    password: String,
    age: Number
});

module.exports = mongoose.model("user", userSchema);
```

### Explanation

* `Schema` defines **how user data is stored**
* `Model` provides methods like:

  * `create()`
  * `findOne()`
  * `findById()`

## Chapter 6: User Registration Flow

### 6.1 Registration Page (`index.ejs`)

Purpose:

* Collect user details
* Send data to `/create`

### 6.2 Registration Logic (Concept)

**Steps:**

1. User submits form
2. Password is hashed using `bcrypt`
3. User is saved in MongoDB
4. JWT token is generated
5. Token is stored in a cookie

### Flow Diagram

```
Form → Server → Hash Password → Save User → Generate JWT → Cookie
```

## Chapter 7: Password Hashing

### Why Hash Passwords?

* Plain text passwords are unsafe
* Hashing ensures **data security**

### bcrypt Concept

```js
bcrypt.hash(password, saltRounds)
```

* Same password ≠ same hash
* Cannot be reversed

## Chapter 8: Login System

### 8.1 Login Page (`login.ejs`)

Collects:

* Email
* Password

### 8.2 Login Logic (Concept)

Steps:

1. Find user by email
2. Compare password using `bcrypt.compare`
3. If valid:

   * Generate JWT
   * Store JWT in cookie
4. Redirect to dashboard

### Flow Diagram

```
Login → Email Check → Password Compare → JWT → Cookie → Dashboard
```

## Chapter 9: JWT Token & Cookies

### 9.1 Token Creation

JWT contains:

* User ID
* Email

Signed using a secret key.

### 9.2 Cookie Storage

Why Cookies?

* Automatically sent with requests
* No need to store sessions on server
* Stateless authentication

## Chapter 10: Protected Routes

### Dashboard Page (`dashboard.ejs`)

This page is accessible only if JWT is valid.

Displayed Data:

* User ID
* Username
* Email

### Authorization Logic

```
Request → Cookie → Verify JWT → Fetch User → Allow Access
```

If token is invalid → redirect to login.

## Chapter 11: Logout System

### Logout Logic

* Clear JWT cookie
* Redirect to login page

Result:

> User is logged out securely


# How to Run the Project
```
npm install
node app.js
```


Open browser:

http://localhost:3000