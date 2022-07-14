const e = require('express');
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
  // console.log('req.body: ', req.body)
  console.log('trying to add a movie to favs')
  const { id, title, year, image, plot, directors, stars, genres, imDbRating, contentRating } = req.body;
  
  profile.Favorite.find({id:id})
    .then(data => {
      if (data.length >= 1) {
        return next({
          log: 'favoriteController.addMovie error',
          status: 400,
          message: { err: 'Movie already exists in favorites' },
        })
      } else {
        profile.Favorite.create({
                                  id: id, 
                                  title: title, 
                                  year: year, 
                                  image: image,
                                  plot: plot,
                                  directors: directors,
                                  stars: stars,
                                  genres: genres,
                                  imDbRating: imDbRating,
                                  contentRating: contentRating
                                })
          .then(data => {
            return next()
          })
          .catch(err => {
            return next({
              log: 'favoriteController.addMovie error',
              status: 400,
              message: { err: 'Cannot add movie' },
            })
          })
      }
    })

}

module.exports = favoriteController;