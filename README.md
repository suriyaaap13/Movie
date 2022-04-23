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

##Functionality
   ######Register User
        To Register a new user post request has to be sent to /api/user/register with _name, email and password_ in the request body. Onece the registration is done the user is created and can continue to login. The following image give a picture of registration request.<br/>
    ![Register User](https://user-images.githubusercontent.com/76957372/164882812-436035e8-abd7-4e9a-bdf3-cd2689876cfa.png)
   ######Login User
        Once the user is register the user can send a post request to /api/user/login with _email and password_ in the request body. On a successful login the user will be given an accesstoken(The accessToken expires after 5mintues) which can be used to retrive movie list and rate a movie.Note: The following picture paints the image of the above statements..<br/>
        ![Login User](https://user-images.githubusercontent.com/76957372/164883014-c7a30dcd-5b00-46fb-9f74-fa71e1b1fa81.png)<br/>
   ######Fetch Movie List      
        To retrive movie list send a post request to /api/movie/list with header holding the value of accessToken against key auth-token. The accessToken expires after 5mins so may get a Forbidden error, in that case login again and generate a new token and replace the header with the new token. Refer to below image incase of any doubts.
        ![Retrive Movie LIst](https://user-images.githubusercontent.com/76957372/164883328-2d2b07ff-5742-4363-9f0c-66f22cca7cf6.png)<br/> 
   ######Rate a Movie
        Copy the id of a movie that you want to rate, paste the id in params against key id(reger image), in the Header section paste the access token against key "auth-token", add the rating you wish to give to the movie in the body against key "rating" and send a post request to /api/movie/rate/:id . If the accessToken is expired you will get a "Forbidden Error" in that case generate a new accessToken and paste it in the Header. <br/>
        ![Rate a Movie](https://user-images.githubusercontent.com/76957372/164883565-a17d6277-4dc4-4ea9-85f2-4c7a48b6b29a.png)
        ![Rate Movie Header](https://user-images.githubusercontent.com/76957372/164883571-48468277-92e9-45e9-86fd-cf9584e061f8.png)
        ![Rate Movie Body](https://user-images.githubusercontent.com/76957372/164883568-064030e3-f928-4fc3-8e49-e3bc56fc36d1.png)<br/>
   ######Open List
        This is an open API that shows the list of movies in the list along with their rating, if there was no ratings present it will be marked with a **NA** (Not Attempted) tag.
        ![Open List](https://user-images.githubusercontent.com/76957372/164883769-204b80bd-7085-459a-ab26-055196cbf782.png)<br/>

## Status
    This project is completely developed and has all required functionality. 
