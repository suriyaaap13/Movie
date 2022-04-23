# Movie

An API that allows its users to rate a movie

## Table of Contents
* Generalinfo
* Technology
* API reference
* Setup
* Functionality
* status

## Introduction
    
    This API allows authorized users to rate movies 
    
## Technology
    1. Node.js
    2. Express
    3. Mongodb
    4. Mongoose
## API reference
   A list of 50 movies data has been taken from this api where **list_id = 10** and **page_no = 1, 2 ,3** (3 pages of data has been collected)
   https://api.themoviedb.org/4/list/{list_id}?page={page_no}&api_key=<<api_key>>

## Setup
    Open your terminal and type the following comments
    1. npm install --save-dev nodemon
    2. npm install
    3. create a .env file in the root of the project
    4. Register in https://developers.themoviedb.org/3/getting-started/introduction and get your own API_KEY
    5. Paste
        API_KEY = <<Your API KEY>>
        ACCESS_TOKEN_SECRET = <<Enter a Secret of your choice>>
    7. Install Mongodb
    8. Install Postman
    9. Install Robo3T

## Functionality
 Register User
   ![]("https://github.com/suriyaaap13/Movie/blob/master/Images/Register-1.png")
    

    Login User
    Fetch Movie List
    Rate a Movie
    Open List

## Status
    This project is completely developed and has all required functionality. 
