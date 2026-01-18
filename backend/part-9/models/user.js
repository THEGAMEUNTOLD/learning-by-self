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
