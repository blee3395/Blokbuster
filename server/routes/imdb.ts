import { Router } from 'express';

import { findMovies, getMovie, getPopularMovies } from '../controllers/imdbapiController';

const router = Router();

router.get('/search/:input',
  findMovies,
  (req, res) => {
    res.status(200).json(res.locals.movieResults);
  }
)

router.get('/:id', 
  getMovie,
  (req, res) => {
    res.status(200).json(res.locals.movieInfo)
  }
)

router.get('/',
  getPopularMovies,
  (req, res) => {
    return res.status(200).json(res.locals.popularMovies);
  }
)

export default router;