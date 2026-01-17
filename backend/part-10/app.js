const express = require('express');
const mongoose = require('mongoose');

const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");

// Middleware
app.use(express.json());

// MongoDB Connection
mongoose.connect("mongodb://127.0.0.1:27017/testingdatabase")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Home route
app.get('/', (req, res) => {
    res.send("Hey");
});

// Create user
app.get('/create', async (req, res) => {
    try {
        const user = await userModel.create({
            username: "harsh",
            age: 25,
            email: "harsh@gmail.com"
        });
        res.json(user);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating user");
    }
});

// Create post & link user
app.get('/post/create', async (req, res) => {
    try {
        // Find the first user in the database
        let user = await userModel.findOne();

        // If no user exists, create one
        if (!user) {
            user = await userModel.create({
                username: "harsh",
                age: 25,
                email: "harsh@gmail.com"
            });
        }

        // Create the post linked to the user
        const post = await postModel.create({
            postdata: "hello saare log kaise ho",
            user: user._id
        });

        // Push post to user's posts array
        user.posts.push(post._id);
        await user.save();

        res.json({ user, post });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error creating post");
    }
});

// Start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
