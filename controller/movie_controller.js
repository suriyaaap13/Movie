const Movie = require('../model/movie');
module.exports.movieList = async (req, res)=>{
    const movie = await Movie.find({});
    console.log(movie);
    return res.status(200).json({
        movieList: movie
    });
}
module.exports.rateMovie = async (req, res)=>{
    console.log(req.params.id);
    return res.status(200).json({
        message: "Rating submitted successfully"
    });
}