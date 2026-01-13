const express = require('express');
const app = express();
const userModel = require('./usermodel');

app.use(express.json());

// Home route
app.get('/', (req, res) => {
    res.send('Server running');
});

app.get('/create', async (req, res) => {
    let createduser = await userModel.create({
        name: "harshta",
        email: "harshta@gmail.com",
        username: "harshta"
    })
    res.send(createduser);
});

app.get('/update', async (req, res) => {
    let updateduser = await userModel.findOneAndUpdate({ username: "harsh" }, { name: "harsh vardan sharma" }, { new: true })
    res.send(updateduser);

});


app.get('/delete', async (req, res) => {
    let deleteuser = await userModel.findOneAndDelete({ username: "harshta" });
    res.send(deleteuser);
});

app.get('/read', async (req, res) => {
    let readuser = await userModel.findOne({ username: "harshta" });
    res.send(readuser)

});

app.listen(3000);
