const mongoose = require('mongoose');

// Create user model
const apiSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        required: true
    }
});

const API = mongoose.model('API', apiSchema);
module.exports = API;