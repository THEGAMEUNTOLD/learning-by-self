const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/part-7')
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
