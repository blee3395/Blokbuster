import { Router } from 'express';

import { getFavorites, addMovie } from '../controllers/favoriteController';

const router = Router();

router.get('/',
  getFavorites,
  (req, res) => {
    res.status(200).json(res.locals.favorites)
  }
)

router.post('/', 
  addMovie,
  (req, res) => {
    res.status(200).json({})
  }
);

export default router;
