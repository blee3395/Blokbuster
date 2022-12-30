const { Router } = require('express');

// const { findMovies, getMovie, getPopularMovies } = require('../controllers/imdbapiController');

import findMovies from '../controllers/imdb/findMovies';
import getPopularMovies from '../controllers/imdb/getPopularMovies';
// import getMovie from '../controllers/imdb/getMovie';


const router = Router();

router.get('/search/:input', findMovies)

// router.get('/:id', getMovie)

router.get('/', getPopularMovies)

export default router;