import { Request, Response, NextFunction } from 'express';
import config from 'config';
import fetch from 'node-fetch';

const QUERY_PATH = config.get('QUERY_PATH');
const API_KEY = config.get('API_KEY')

const getPopularMovies = async (req: Request, res: Response, next: NextFunction) => {
  // Offline testing
  // res.locals.popularMovies = top250.items
  // res.locals.popularMovies = shrekSearch.results;
  // return next();
  try {
    const response = await fetch(`${QUERY_PATH}/MostPopularMovies/${API_KEY}`, 
      // {cache: 'force-cache'}
    )
    const data = await response.json()
    res.status(200).send(data?.items)
  }
  catch(err) {
    return next({
      log: 'ERROR: getPopularMovies',
      status: 500,
      message: { err: 'Cannot get popular movies from API' },
    })
  }
}

export default getPopularMovies;