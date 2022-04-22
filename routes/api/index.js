const express = require('express');
const router = express.Router();

router.use('/user', require('./user'));
router.use('/movie', require('./movie'));

module.exports = router;