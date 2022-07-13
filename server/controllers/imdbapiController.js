const fetch = require('node-fetch');
const fs = require('fs');
// const { isNamedExportBinding } = require('typescript');
const testFile = require('./popularMovies.json')

const imdbapiController = {};

const apiKey = 'k_kw4j52u2';

imdbapiController.getPopularMovies = (req, res, next) => {
  // console.log('getting pop movies')
  // console.log(testFile.items);
  res.locals.popularMovies = testFile.items
  return next();
  
  // fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`)
  //   .then(data => data.json())
  //   .then(formattedData => {
  //     console.log({formattedData})
  //     res.locals.popularMovies = formattedData.items
  //     return next()
  //   })
  //   .catch(error => {
  //       return next({
  //         log: 'imdbapiController.getPopularMovies error',
  //         status: 400,
  //         message: { err: 'Cannot get popular movies' },
  //       })
  //     })
}

imdbapiController.getMovie = (req, res, next) => {
  const {id} = req.params;

  fetch(`https://imdb-api.com/en/API/Title/${apiKey}/${id}`)
    .then(data => data.json())
    .then(formattedData => {
      res.locals.movieInfo = formattedData
      return next()
    })
    .catch(error => {
      return next({
        log: 'imdbapiController.getMovie error',
        status: 400,
        message: { err: 'Cannot get the movie requested' },
      })
    })
}











module.exports = imdbapiController