const express = require('express');
const router = express.Router();
const verify = require('../../config/verifyToken');

const movieController = require('../../controller/movie_controller');

router.post('/list', verify, movieController.movieList);
router.post('/rate/:id', verify, movieController.rateMovie);
router.post('/open-list', movieController.openList);

module.exports = router;