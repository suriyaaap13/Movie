const mongoose = require('mongoose');

// Create user model
const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    ratings: [{
        by: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        value: {
            type: Number
        }
    }]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;