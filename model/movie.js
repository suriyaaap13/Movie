const { boolean, string } = require('joi');
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
    rating: {
        type: String
    },
    

},{
    timestamps: true
});

const Movie = mongoose.model('movie', movieSchema);
module.exports = Movie;