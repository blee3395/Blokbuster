const express  = require('express');

const imdbapiController = require('../controllers/imdbapiController');

const router = express.Router();

router.get('/',
  imdbapiController.getPopularMovies,
  (req, res) => {
    return res.status(200).json(res.locals.popularMovies);
  }
)

module.exports = router;