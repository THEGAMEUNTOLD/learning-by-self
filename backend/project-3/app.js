const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("./models/user");
const Post = require("./models/post");
const auth = require("./middleware/auth");

const app = express();

/* ---------- DB ---------- */
mongoose.connect("mongodb://127.0.0.1:27017/socialjwt")
    .then(() => console.log("MongoDB connected"));

/* ---------- SETTINGS ---------- */
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* ---------- AUTH ---------- */

// register page
app.get("/register", (req, res) => {
    res.render("register");
});

// register user
app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;

    const hash = await bcrypt.hash(password, 10);
    await User.create({ name, email, password: hash });

    res.redirect("/login");
});

// login page
app.get("/login", (req, res) => {
    res.render("login");
});

// login user
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) return res.redirect("/login");

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.redirect("/login");

    const token = jwt.sign({ id: user._id }, "SECRET_KEY", {
        expiresIn: "1d"
    });

    res.cookie("token", token, { httpOnly: true });
    res.redirect("/home");
});

// logout
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/login");
});

/* ---------- POSTS ---------- */

// home
app.get("/home", auth, async (req, res) => {
    const posts = await Post.find()
        .populate("user")
        .sort({ createdAt: -1 });

    res.render("home", { user: req.user, posts });
});

// create post
app.post("/post", auth, async (req, res) => {
    await Post.create({
        content: req.body.content,
        user: req.user._id
    });

    res.redirect("/home");
});

// like post
app.get("/like/:id", auth, async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (!post.likes.includes(req.user._id)) {
        post.likes.push(req.user._id);
        await post.save();
    }

    res.redirect("/home");
});

// delete post
app.get("/delete/:id", auth, async (req, res) => {
    const post = await Post.findById(req.params.id);

    if (post.user.toString() === req.user._id.toString()) {
        await Post.findByIdAndDelete(req.params.id);
    }

    res.redirect("/home");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
