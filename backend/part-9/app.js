const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const path = require("path");

const User = require("./models/user");

const app = express();
const PORT = 3000;
const JWT_SECRET = "mysecretkey";

// ================= MIDDLEWARE =================
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// ================= AUTH MIDDLEWARE =================
function isLoggedIn(req, res, next) {
    const token = req.cookies.token;
    if (!token) return res.redirect("/login");

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.user = data;
        next();
    } catch {
        res.redirect("/login");
    }
}

// ================= ROUTES =================

// Register page
app.get("/", (req, res) => {
    res.render("index");
});

// Login page
app.get("/login", (req, res) => {
    res.render("login");
});

// Dashboard
app.get("/dashboard", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.render("dashboard", { user });
});

// Edit profile page
app.get("/edit", isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user.id);
    res.render("edit", { user });
});

// ================= REGISTER =================
app.post("/create", async (req, res) => {
    const { username, email, password, age } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

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

// ================= LOGIN =================
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

// ================= UPDATE PROFILE =================
app.post("/edit/:id", isLoggedIn, async (req, res) => {
    if (req.params.id !== req.user.id) {
        return res.status(403).send("Unauthorized");
    }

    const { username, email, age } = req.body;

    await User.findByIdAndUpdate(req.user.id, {
        username,
        email,
        age
    });

    res.redirect("/dashboard");
});

// ================= LOGOUT =================
app.post("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
});

// ================= SERVER =================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
