const express = require('express');

const favoriteController = require('../controllers/favoriteController')

const router = express.Router();

router.get('/',
  favoriteController.getFavorites,
  (req, res) => {
    res.status(200).json(res.locals.favorites)
  }
)

router.post('/', 
  favoriteController.addMovie,
  (req, res) => {
    res.status(200).json({})
  }
);

module.exports = router;
