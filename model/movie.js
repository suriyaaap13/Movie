const mongoose = require('mongoose');

// Create user model
const movieSchema = new mongoose.Schema({
    adult: {
        type: Boolean,
        required: true
    }, 
    overview: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    release_date: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    voting_count: {
        type: Number,
        default: 0
    }
},{
    timestamps: true
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;