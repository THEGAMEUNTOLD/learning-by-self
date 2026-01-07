
# Form Handling, Sessions & Cookies

### 1. Introduction to Form Handling

Form handling is one of the most important responsibilities of a backend server.
A form is a structured way for users to send data from the frontend (browser) to the backend (server). This data may include:

* User name
* Email address
* Password
* Feedback
* Search queries

The backend must correctly receive, read, validate, and process this data.

### 2. How Form Data Is Sent from Frontend to Backend
- The backend should not care which frontend library or framework is sending the data.
- When a user submits a form, the browser sends an HTTP request to the server.
- This request can be sent using:

* GET method → data is sent in the URL
* POST method → data is sent in the request body

Modern frontend tools such as:

* React
* Angular
* Vue
* Plain HTML forms
* Template engines (EJS, Pug, Handlebars)

- all send data in the same HTTP format.
- The backend must be able to handle data coming from any frontend library or framework.

### 3. Backend Processing of Form Data

The backend performs the following tasks:

1. Receive the request
2. Extract the form data
3. Convert the raw data into a readable format
4. Validate the data
5. Store or process the data
6. Send a response back to the client

If the backend fails to read the data properly, the entire application breaks.

### 4. Browser-Stored Data (Cookies & Sessions)

The browser can store data on the client side, such as:

* Login status
* User preferences
* Tokens
* Session identifiers

This data is automatically sent to the backend with every request.

Example:

* Cookies are automatically attached to HTTP requests
* Session IDs are used to identify users

This allows the server to recognize:

* Who the user is
* Whether the user is logged in
* What actions the user can perform

#### 4.1 Cookies – Automatic Data Transfer

Cookies are:
- Small pieces of data stored in the browser
- Sent automatically with every request to the same domain

- Example Uses
* Login sessions
* Authentication tokens
* User preferences
* Tracking user activity

This is why cookies are heavily used for sessions.

#### 4.1  What Are Sessions?

A session is a way to remember a user across multiple requests.

* How Sessions Work

1. User logs in
2. Server creates a session
3. Session ID is stored in a cookie
4. Cookie is sent on every request
5. Server identifies the user using the session ID

Key Point
- Sensitive data is stored on the server
- Browser only stores a session identifier

### 5. Understanding Raw (Unreadable) Data from Requests

When data is sent from the frontend to the server, it does not arrive as plain readable text.

Instead, it arrives as:

* A raw data stream
* A buffer
* A blob of data

This raw data is not directly human-readable.

For example:

* The browser sends encoded data
* The server receives it as binary or encoded text

### 6. Converting Raw Data into Readable Format

The backend must decode and parse this raw data.

Common parsing formats:

* `application/x-www-form-urlencoded`
* `application/json`
* `multipart/form-data`

Backend frameworks provide tools to handle this conversion:

* Express.js → `express.json()` and `express.urlencoded()`
* Body parsers convert raw data into JavaScript objects

Without parsing:

* The server receives meaningless data
* The application cannot use the form values

### 7. Why Parsing Is Necessary

Parsing is required because:

* Browsers send data in encoded form
* Servers receive data as streams
* Applications need structured objects to work with

After parsing, the backend can access form values like:

* `req.body.username`
* `req.body.email`
* `req.body.password`

### 8. Role of Sessions and Cookies in Form Handling

Sessions and cookies help maintain state between requests.

* HTTP is stateless
* Sessions store user data on the server
* Cookies store session identifiers in the browser

When a form is submitted:

* The browser sends cookies
* The server identifies the user session
* The server processes data accordingly
