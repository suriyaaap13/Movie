const User = require('../model/user');
const Movie = require('../model/movie');

// sends the locally stored movie list
module.exports.movieList = async (req, res)=>{
    const movie = await Movie.find({});
    return res.status(200).json({
        movieList: movie
    });
}


module.exports.rateMovie = async (req, res)=>{

    try{
        // Finds the movie with params.id
        const movie = await Movie.findById(req.params.id)
        const user = await User.findById(req.user._id);
        // Stores the ratings array in local variable and iterates through the variable 
        const ratingsArray = movie.ratings;
        ratingsArray.forEach(async (element) => {
            // when current object's by(user id) matches we are pulling the previous entry rom the database
            if(user._id.valueOf()===element.by.valueOf()){
                await Movie.findByIdAndUpdate(req.params.id, {$pull: {ratings: {_id: element._id}}});
            }
        });
        // creating a fresh new update entry
        const newValue = {
            by: user,
            value: req.body.rating
        }
        // pushing the update to the database and saving it
        await movie.ratings.push(newValue);
        await movie.save();
        return res.status(200).json({
            message: "Rating submitted successfully",
        });
    }catch(err){
        // Handling Error
        console.log("Error ", err);
        res.status(400).json({message: "Invalid Input check Movie ID/body "});
    }
    
}

module.exports.openList = async (req, res)=>{
    // fetching all the movies
    const movies = await Movie.find({});
    const display = [];
    // iterating through the movies array
    await movies.forEach(async eachMovie=>{
        let tot = 0;
        const elementLen = eachMovie.ratings.length;
        // iterating through the ratings and finding the total value to get a rating
        await eachMovie.ratings.forEach((element)=>{
            tot+=element.value;
        });
        const update = {
            title: eachMovie.title,
            rating: tot==0 ? "NA" : parseFloat(tot/elementLen).toFixed(2)
        }
        display.push(update);
    });
    res.status(200).json(display);
}