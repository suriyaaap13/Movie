const User = require('../model/user');
const Movie = require('../model/movie');

module.exports.movieList = async (req, res)=>{
    const movie = await Movie.find({});
    return res.status(200).json({
        movieList: movie
    });
}
module.exports.rateMovie = async (req, res)=>{
    console.log(req.user);
    const movies = await Movie.findById(req.params.id);
    console.log(movies);
    const arr = movies.ratings;
    const has = arr.includes(req.user);
    console.log(has);
    const filter = { _id: req.params.id };
    const update = { $push: {
        ratings: {
            by: req.user,
            rating: req.body.rating
       }
    } };
    console.log(filter);
    console.log(update);
    await Movie.updateOne(filter, update);
    console.log(movies);

    return res.status(200).json({
        message: "Rating submitted successfully",
        // movie: newMovie
    });
}