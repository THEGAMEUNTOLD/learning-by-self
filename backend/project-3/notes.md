# MiniSocial — A JWT-Based Mini Social Media 

## 1. Project Starting

MiniSocial is a minimal social media web application built using Node.js, Express.js, MongoDB, EJS, and JSON Web Tokens (JWT).
The application allows users to:

* Register and log in securely
* Maintain an authenticated session using JWT stored in cookies
* Create text posts
* Like posts created by other users
* Delete their own posts

This project demonstrates full-stack authentication, authorization, database relationships, and server-side rendering in a structured and professional manner.

## 2. Technologies and Tools Used

* Node.js – JavaScript runtime for server-side execution
* Express.js – Web application framework for routing and middleware
* MongoDB – NoSQL database for persistent data storage
* Mongoose – ODM (Object Data Modeling) library for MongoDB
* EJS (Embedded JavaScript) – Template engine for dynamic HTML
* bcrypt – Library for hashing passwords securely
* jsonwebtoken (JWT) – For authentication and session management
* cookie-parser – To read cookies from HTTP requests
* Tailwind CSS – Utility-first CSS framework for UI styling
* Terminal (CLI) – For project initialization and execution

---

## 3. Project Initialization (Terminal Level)

### 3.1 Create Project Directory

```bash
mkdir minisocial
cd minisocial
```

### 3.2 Initialize Node.js Project

```bash
npm init -y
```

This creates a `package.json` file, which manages dependencies and scripts.

### 3.3 Install Required Dependencies

```bash
npm install express mongoose bcrypt jsonwebtoken cookie-parser ejs
```

These libraries collectively enable server creation, database interaction, authentication, and view rendering.


## 4. Project Folder Structure

```
MiniSocial/
│
├── app.js
├── models/
│   ├── user.js
│   └── post.js
│
├── middleware/
│   └── auth.js
│
├── views/
│   ├── login.ejs
│   ├── register.ejs
│   └── home.ejs
│
└── package.json
```

This structure follows separation of concerns, making the project scalable and maintainable.

## 5. Database Design (Mongoose Models)

### 5.1 User Model (`models/user.js`)

The User schema defines how user data is stored in MongoDB.

* `name` → User’s display name
* `email` → Unique identifier for login
* `password` → Hashed password

Purpose:
To securely store user credentials and identity.

### 5.2 Post Model (`models/post.js`)

The **Post** schema represents user-generated content.

* `content` → Text of the post
* `user` → Reference to the user who created the post
* `likes` → Array of users who liked the post
* `timestamps` → Automatically stores creation time

Purpose:
To establish a relationship between users and their posts.

## 6. Authentication Middleware (`middleware/auth.js`)

This file acts as a gatekeeper for protected routes.

### Responsibilities

1. Read JWT from cookies
2. Verify the token using a secret key
3. Fetch the user from the database
4. Attach user data to `req.user`
5. Redirect unauthenticated users to `/login`

Purpose:
To ensure that only logged-in users can access protected resources.

## 7. Server Configuration (`app.js`)

### 7.1 Express and Database Setup

* Express initializes the server
* MongoDB connects using Mongoose
* Middleware is configured for:

  * JSON parsing
  * Form data handling
  * Cookie parsing

## 8. Authentication Flow

### 8.1 Registration

Sequence:

1. User visits `/register`
2. Form data is submitted
3. Password is hashed using `bcrypt`
4. User is stored in MongoDB
5. User is redirected to `/login`

Security Principle:
Passwords are never stored in plain text.

### 8.2 Login

Sequence:

1. User submits email and password
2. Server verifies email existence
3. Password is compared using bcrypt
4. JWT is generated with user ID
5. Token is stored in an HTTP-only cookie
6. User is redirected to `/home`

JWT Advantage:
Stateless authentication with no server-side sessions.

### 8.3 Logout

* JWT cookie is cleared
* User is redirected to `/login`

## 9. Authorization and Protected Routes

Routes such as `/home`, `/post`, `/like/:id`, and `/delete/:id` are protected using the `auth` middleware.

Only authenticated users can:

* View posts
* Create posts
* Like posts
* Delete their own posts

## 10. Home Page Functionality (`home.ejs

### 10.1 Create Post

* User submits text
* Post is stored with user reference

### 10.2 Display Posts

* Posts are fetched from MongoDB
* User details are populated using `.populate("user")`
* Latest posts appear first

### 10.3 Like System

* Each user can like a post only once
* Likes are stored as user IDs

### 10.4 Delete Post

* Only the owner of a post can delete it
* Authorization is checked server-side

## 11. View Layer 

* EJS dynamically injects server data into HTML
* Tailwind CSS provides a modern, responsive UI
* Layouts are minimal and clean, focusing on usability

## 12. Application Execution

### Run the Server

```bash
node app.js
```

### Access in Browser

```
http://localhost:3000/login
```

##  This project demonstrates:

* Secure authentication using JWT and cookies
* Role-based authorization logic
* MongoDB relationships using Mongoose
* Clean MVC-style architecture
* Server-side rendering with EJS
* Practical usage of middleware in Express

MiniSocial serves as an excellent foundational project for understanding real-world authentication systems and full-stack JavaScript development.
