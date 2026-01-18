# Authentication & Authorization (Using Cookies, Bcrypt, and JWT)

## 1. What is Authentication?

- Authentication means verifying who the user is.

> Before giving access to a profile, the server must check:
> “Who is this user ?”

Example:

* User enters email + password
* Server checks if this user really exists
* If yes → user is authenticated

## 2. What is Authorization?

Authorization means checking what the user is allowed to do.

> Even after login, not every user can do everything.

Example:

* Normal user → view profile
* Admin user → delete users, manage data

So:

* Authentication = Who are you?
* Authorization = What are you allowed to do?

## 3. Why Server Needs Cookies / Tokens?

HTTP is stateless.

That means:

> The server forgets you after every request.

So every time you make a request, the server asks:

> “Who are you again?”

To solve this problem, we store identity information in:

* Cookies
* Sessions
* JWT tokens

## 4. Step 1: Understanding Cookies

### What is a Cookie?

A cookie is a small piece of data stored in the browser.

* Sent by server
* Automatically sent back with every request

### Setting and Reading Cookies in Express

#### Install required package

```bash
npm install cookie-parser
```

---

### app.js (Cookies example)

```js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', function (req, res) {
    res.cookie("user", "bharat");
    res.send("Cookie set");
});

app.get('/read', function (req, res) {
    console.log(req.cookies.user);
    res.send("Cookie read");
});

app.listen(3000);
```

- Explanation

* `/` → sets a cookie
* `/read` → reads the cookie
* Browser automatically sends cookie to server

## 5. Step 2: Password Encryption using Bcrypt

### Why Bcrypt?

-> x  Never store passwords in plain text
-> ✔ Always store hashed passwords

Bcrypt:

* Hashes passwords
* Adds salt (extra security)
* One-way encryption (cannot be reversed)

### Install bcrypt

```bash
npm install bcrypt
```

### Hashing a Password

```js
const bcrypt = require('bcrypt');

bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash("bharat", salt, function (err, hash) {
        console.log(hash);
    });
});
```

-> This hash is stored in the database, not the password.

### Comparing Password (Login)

```js
bcrypt.compare(
    "bharat",
    "$2b$10$hRzWuZJdwCWJy/hNTHBaSe0vZJl0pBnh7M7Noz8G0dpO7Nl6q3foO",
    function (err, result) {
        console.log(result); // true or false
    }
);
```

-> If result is `true` → password is correct

## 6. Step 3: What is JWT?

### JWT = JSON Web Token

JWT is a digital identity card.

* Created after login
* Sent to browser
* Browser sends it back with every request

### Why JWT?

* Server does not store user session
* Server only verifies the token
* Fast and scalable


## 7. Creating and Verifying JWT

### Install JWT

```bash
npm install jsonwebtoken
```

### Creating a Token

```js
const jwt = require('jsonwebtoken');

let token = jwt.sign(
    { email: "harsh@example.com" },
    "secret"
);
```

-> Payload = user data
-> Secret = private key (never expose)



### Verifying a Token

```js
let data = jwt.verify(token, "secret");
console.log(data);
```

-> If token is valid → user is authenticated



-> MINI PROJECT 1 - How to Set and Read Cookies in Express.js

Steps 
Step 1: Initialize Project
npm init -y
npm install express cookie-parser

```app.js
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser()); // ← MUST call function

app.get('/set', function (req, res) {
    res.cookie("username", "bharat");
    res.send("Cookie set");
});

app.get('/read', function (req, res) {
    console.log(req.cookies.username); // ← will NOT be undefined
    res.send("Cookie read");
});

app.listen(3000);
```

-> MINI PROJECT 2 - Password Encryption and Verification using Bcrypt

Steps
Step 1: Install Bcrypt
npm init -y
npm install express 
npm install bcrypt 

```app.js
const express = require('express');
const app = express();
const bcrypt = require('bcrypt');

// Encrypt password
app.get('/hash', function (req, res) {
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("bharat", salt, function (err, hash) {
            console.log("Hashed Password:", hash);
            res.send("Password encrypted");
        });
    });
});

// Verify password
app.get('/compare', function (req, res) {
    const storedHash = "$2b$10$hRzWuZJdwCWJy/hNTHBaSe0vZJl0pBnh7M7Noz8G0dpO7Nl6q3foO";

    bcrypt.compare("bharat", storedHash, function (err, result) {
        console.log(result);
        res.send(result ? "Password matched" : "Password not matched");
    });
});

app.listen(3000);
```

-> MINI PROJECT 3 -JWT Authentication: Create and Verify Token

Steps
Step 1: Install JWT
npm init -y
npm install jsonwebtoken express cookie-parser

``` app.js
const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

app.use(cookieParser());

// Generate token
app.get('/', function (req, res) {
    const token = jwt.sign(
        { email: "harsh@example.com" },
        "secret"
    );

    res.cookie("token", token);
    res.send("JWT generated and stored in cookie");
});

// Verify token
app.get('/read', function (req, res) {
    const data = jwt.verify(req.cookies.token, "secret");
    console.log(data);
    res.send("JWT verified successfully");
});

app.listen(3000);
```