const User = require('../model/user');
const Movie = require('../model/movie');

module.exports.movieList = async (req, res)=>{
    const movie = await Movie.find({});
    return res.status(200).json({
        movieList: movie
    });
}
module.exports.rateMovie = async (req, res)=>{

    const movie = await Movie.findById(req.params.id)
    const user = await User.findById(req.user._id);
    const ratingsArray = movie.ratings;
    ratingsArray.forEach(async (element) => {
        console.log(user._id.valueOf()===element.by.valueOf());
        if(user._id.valueOf()===element.by.valueOf()){
            console.log("Hello ");
            const docs = await Movie.findByIdAndUpdate(req.params.id, {$pull: {ratings: element._id}});
            console.log(docs);
        }
    });
    
    const newValue = {
        by: user,
        value: req.body.rating
    }
    await movie.ratings.push(newValue);
    await movie.save();
    return res.status(200).json({
        message: "Rating submitted successfully",
        // movie: newMovie
    });
}