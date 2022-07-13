import { parseJsonConfigFileContent } from 'typescript';

const profile = require('../models/profile');

const favoriteController = {}

favoriteController.getFavorites = (req, res, next) => {
  profile.Favorite.find()
    .then(data => {
      res.locals.favorites = data;
      return next();
    })
    .catch(err => {
      return next({
        log: 'favoriteController.getFavorites error',
        status: 400,
        message: { err: 'Cannot get favorites movies' },
      })
    })
}

favoriteController.addMovie = (req, res, next) => {
  console.log('req.body: ', req.body)
  
  profile.create()
    .then(data => {

    })
    .catch(err => {
      return next({
        log: 'favoriteController.addMovie error',
        status: 400,
        message: { err: 'Cannot movie' },
      })
    })

}

export default favoriteController;