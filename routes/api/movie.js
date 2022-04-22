const express = require('express');
const router = express.Router();
const verifyToken = require('../../config/verifyToken');

const movieController = require('../../controller/movie_controller');

router.post('/list', movieController.movieList);
router.post('/rate/:id', movieController.rateMovie);

module.exports = router;