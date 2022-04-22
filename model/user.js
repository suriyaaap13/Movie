const mongoose = require('mongoose');

// Create user model
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
        min: 6,
        max: 255
    }, 
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6
    }
},{
    timestamps: true
});

const User = mongoose.model('user', userSchema);
module.exports = User;