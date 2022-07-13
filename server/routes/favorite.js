const express = require('express');

const favoriteController = require('../controllers/favoriteController')

const router = express.Router();

router.post('/', 
  favoriteController.addMovie,
  (req, res) => {
    res.status(200).json({})
  }
);

module.exports = router;
