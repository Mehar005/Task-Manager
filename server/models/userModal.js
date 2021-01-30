const mongoose = require('mongoose');

const User = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlenght: 3,
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('user', User)

