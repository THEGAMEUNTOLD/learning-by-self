# User Authentication & Dashboard System

We will build a user registration, login, dashboard, edit profile, and logout system.

Tech stack:

* Node.js + Express → Backend server
* MongoDB → Database
* EJS → Templating engine (HTML + JS)
* TailwindCSS → Styling
* JWT + Cookies → Authentication
* bcrypt → Password hashing

## Step 1: Setup Project

1. Open Terminal in your desired folder.
2. Create a project folder:

   ```bash
   mkdir part-9
   cd part-9
   ```
3. Initialize a Node.js project:

   ```bash
   npm init -y
   ```

   * This creates `package.json`, which tracks dependencies and scripts.

---

## Step 2: Install Dependencies

We need these packages:

* express → backend framework
* ejs → template engine
* mongoose → MongoDB ORM
* bcrypt → password hashing
* jsonwebtoken → JWT for authentication
* cookie-parser → parse cookies in requests

Run:

```bash
npm i express ejs mongoose bcrypt jsonwebtoken cookie-parser
```

Optional: for dev purposes:

```bash
npm i nodemon --save-dev
```

* nodemon restarts server automatically when you change code.

---

## Step 3: Create Folder Structure

Inside your project folder:

```
auth-app/
│
├── app.js          --> Main server file
├── package.json
├── models/
│   └── user.js     --> MongoDB user schema
├── views/
│   ├── index.ejs   --> Registration page
│   ├── login.ejs   --> Login page
│   ├── dashboard.ejs --> Dashboard
│   └── edit.ejs    --> Edit profile
└── public/         --> For static files (optional, css/js/images)
```

> Always keep models for database schemas and views for EJS templates.

## Step 4: MongoDB Setup

1. Make sure MongoDB is installed on your PC. If not:

   * [Download MongoDB](https://www.mongodb.com/try/download/community)
   * Or use MongoDB Atlas (cloud DB)

2. Connect MongoDB in `models/user.js`:

```js
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/authtestapp")
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: String,
    email: { type: String, unique: true },
    password: String,
    age: Number
});

module.exports = mongoose.model("User", userSchema);
```

* `unique: true` ensures no duplicate emails.
* We export the model to use in `app.js`.



## Step 5: Create `app.js` (Main Server)

Terminal:

```bash
touch app.js
```

the following code 



### 1. Import dependencies and setup server

```js
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");
const User = require("./models/user"); // Import user model

const app = express();
const PORT = 3000;
const JWT_SECRET = "mysecretkey"; // Secret key for JWT
```


### 2. Middleware

Middleware lets Express parse requests and cookies:

```js
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Parse form data
app.use(cookieParser()); // Parse cookies
app.use(express.static(path.join(__dirname, "public"))); // Serve static files

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
```


### 3. Auth Middleware

This checks if the user is logged in:

```js
function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data; // Save user info in request
        next();
    } catch {
        res.redirect("/login");
    }
}
```


### 4. Routes

a. Registration Page

```js
app.get("/", (req, res) => {
    res.render("index");
});
```

b. Login Page

```js
app.get("/login", (req, res) => {
    res.render("login");
});
```

c. Dashboard

```js
app.get("/dashboard", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.render("dashboard", { user });
});
```

d. Edit Profile

```js
app.get("/edit", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.render("edit", { user });
});
```

### 5. Registration POST Route

```js
app.post("/create", async (req, res) => {
    const { username, email, password, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash password

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
        age
    });

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
});
```

### 6. Login POST Route

```js
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.send("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.send("Wrong password");

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
    res.cookie("token", token, { httpOnly: true });
    res.redirect("/dashboard");
});
```

### 7. Update Profile

```js
app.post("/edit/:id", isLoggedIn, async (req, res) => {
    if (req.params.id !== req.user.id) {
        return res.status(403).send("Unauthorized");
    }

    const { username, email, age } = req.body;
    await User.findByIdAndUpdate(req.user.id, { username, email, age });

    res.redirect("/dashboard");
});
```

### 8. Logout Route

```js
app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
});
```

### 9. Start Server

```js
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

## Step 6: EJS Templates

1.  `index.ejs` (Register Page)

```html
<form action="/create" method="post" class="card w-full max-w-md p-8 space-y-6">
    <input name="username" placeholder="Username" required>
    <input name="email" type="email" placeholder="Email" required>
    <input name="password" type="password" placeholder="Password" required>
    <input name="age" type="number" placeholder="Age" required>
    <button>Create Account</button>
    <a href="/login">Login</a>
</form>
```

2. `login.ejs`

```html
<form action="/login" method="post" class="card w-full max-w-md p-8 space-y-6">
    <input name="email" type="email" placeholder="Email" required>
    <input name="password" type="password" placeholder="Password" required>
    <button>Login</button>
    <a href="/">Register</a>
</form>
```

3.  `dashboard.ejs`

```html
<h1>Welcome, <%= user.username %></h1>
<p>Email: <%= user.email %></p>
<p>Age: <%= user.age %></p>
<a href="/edit">Edit Profile</a>
<form action="/logout" method="post"><button>Logout</button></form>
```

4. `edit.ejs`

```html
<form action="/edit/<%= user._id %>" method="post">
    <input name="username" value="<%= user.username %>">
    <input name="email" value="<%= user.email %>">
    <input name="age" value="<%= user.age %>">
    <button>Save Changes</button>
</form>
<a href="/dashboard">Back to Dashboard</a>
```

> You can style all forms with TailwindCSS as in your original code.

## Step 7: Run the Project

1. Start MongoDB server (if local):

```bash
mongod
```

2. Start Node.js server:

```bash
node app.js
```

or, if using nodemon:

```bash
npx nodemon app.js
```

3. Open browser: [http://localhost:3000](http://localhost:3000)

* You can register a new user → login → see dashboard → edit profile → logout.
