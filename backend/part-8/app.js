const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();

//  Correct model import
const User = require('./models/User');

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/userdb')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// View engine
app.set('view engine', 'ejs');

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/read', async (req, res) => {
    const users = await User.find();
    res.render('read', { users });
});

// ✅ CREATE USER (POST)
app.post('/create', async (req, res) => {
    const { name, email, image } = req.body;

    await User.create({
        name,
        email,
        image
    });

    res.redirect('/read');
});

app.get('/read', async (req, res) => {
    const users = await User.find();
    res.render('read', { users });
});


// Server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
