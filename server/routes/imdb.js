const express  = require('express');

const imdbapiController = require('../controllers/imdbapiController');

const router = express.Router();

router.get('/:id', 
  imdbapiController.getMovie,
  (req, res) => {
    res.status(200).json(res.locals.movieInfo)
    res.sendFile(path.resolve(__dirname, ''))
  }
)

router.get('/',
  imdbapiController.getPopularMovies,
  (req, res) => {
    // console.log('data ', res.locals.popularMovies)
    return res.status(200).json(res.locals.popularMovies);
  }
)

module.exports = router;