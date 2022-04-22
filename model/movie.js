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
        rating: {
            type: Number,
            min: 1,
            max: 10
        }
   }]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;