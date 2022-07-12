const fetch = require('node-fetch');
const { isNamedExportBindings } = require('typescript');

const imdbapiController = {};

const apiKey = 'k_kw4j52u2';

imdbapiController.getPopularMovies = (req, res, next) => {
  console.log('getting pop movies')
  fetch(`https://imdb-api.com/en/API/MostPopularMovies/${apiKey}`)
    .then(data => data.json())
    .then(formattedData => {
      // console.log({formattedData})
      res.locals.popularMovies = formattedData
      return next()
    })
    .catch(error => {
        return next({
          log: 'imdbapiController.getPopularMovies error',
          status: 400,
          message: { err: 'Cannot get popular movies' },
        })
      })
}











module.exports = imdbapiController