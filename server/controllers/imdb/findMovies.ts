import { Request, Response, NextFunction } from 'express';
import config from 'config';
import fetch from 'node-fetch';

const QUERY_PATH = config.get('QUERY_PATH');
const API_KEY = config.get('API_KEY')

const findMovies = async (req: Request, res: Response, next: NextFunction) => {
  const { input } = req.params;

  try {
    const response = await fetch(`${QUERY_PATH}/SearchMovie/${API_KEY}/${input}`)
    const data = await response.json()
    // Outputs object with key 'results'
    // Results is array with movie objects
    // Each movie obj has id, image and title properties
    res.status(200).send(data.results)
  }
  catch (err) {
    return next({
      log: 'ERROR: getMovie',
      status: 500,
      message: { err: `Cannot find movie with given input: '${input}'` },
    })
  }
}

export default findMovies;