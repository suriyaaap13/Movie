// requiring library
require('dotenv').config();
const express = require('express');
const db = require('./config/mongoose');
const bodyParser = require('body-parser');
const axios = require('axios');
const User = require('./model/user');
const Movie = require('./model/movie');

const app = express();

//////////////////////////// Middleware /////////////////////////

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

async function APIDRAMA() {
    const dummy = await User.find({});
    const movieCheck = await Movie.find({title: "Ice Age: Continental Drift"});
    if(!movieCheck[0]){
        //////////////////// Make a request for a user with a given ID///////////
        const api = [
            `https://api.themoviedb.org/4/list/10?page=1&api_key=${process.env.API_KEY}`,
            `https://api.themoviedb.org/4/list/10?page=2&api_key=${process.env.API_KEY}`,
            `https://api.themoviedb.org/4/list/10?page=3&api_key=${process.env.API_KEY}`
        ]
        api.forEach((link)=>{
        axios.get(link)
            .then( function (response) {
             response.data.results.forEach(async (element, index)=>{
                try{
                await Movie.create(element);
                // console.log("Data Fetched Successfully ", index);
                }catch(err){
                console.log('Error ', err);
                }
            });
            })
            .catch(function (error) {
            // handle error
            console.log(error);
            });
        });
        
    }
}

APIDRAMA();





/////////////////////// Route Middleware ///////////////////////
app.use('/', require('./routes'));



app.listen(3000, (err)=>{
    if(err){console.log("Error",err);}
    console.log("Server is up and running in PORT 3000");
})