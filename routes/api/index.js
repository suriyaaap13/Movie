const express = require('express');
const router = express.Router();

router.use('/movie', require('./movie'));
router.use('/user', require('./user'));


module.exports = router;