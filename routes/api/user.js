const express = require('express');
const User = require('../../model/user');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// import the user Controller
const userController = require('../../controller/user_controller');

// importing actions of user_controller
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;