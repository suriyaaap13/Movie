require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const mongoose = require('mongoose');
const Movie = require('./model/movie');


const app = express();

//////////////////// Make a request for a user with a given ID///////////
const api = [
  `https://api.themoviedb.org/4/list/10?page=1&api_key=${process.env.API_KEY}`,
  `https://api.themoviedb.org/4/list/10?page=2&api_key=${process.env.API_KEY}`,
  `https://api.themoviedb.org/4/list/10?page=3&api_key=${process.env.API_KEY}`
]



 axios.get(`https://api.themoviedb.org/4/list/10?page=1&api_key=${process.env.API_KEY}`)
  .then(async function (response) {
    // handle success
    // console.log(response.data.results);
    if(Movie.countDocuments({})){
      response.data.results.forEach(async (element, index)=>{
        try{
          await Movie.create(element);
          console.log("Data Fetched Successfully ", index);
        }catch(err){
          console.log('Error ', err);
        }
      });
    }
     
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  });



// Import Route
const authRoute = require('./routes/auth');

//////////////////////////// Middleware /////////////////////////

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

/////////////////////// Route Middleware ///////////////////////
app.use('/api/user', authRoute);


app.listen(3000, (err)=>{
    if(err){console.log("Error",err);}
    console.log("Server is up and running in PORT 3000");
})