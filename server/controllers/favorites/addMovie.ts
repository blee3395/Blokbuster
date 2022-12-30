import { Request, Response, NextFunction } from 'express';

import Favorite from '../../models/profile';

const addMovie = async (req: Request, res: Response, next: NextFunction) => {
  
  const { id, title, year, image, plot, directors, stars, genres, imDbRating, contentRating } = req.body;
   
  try {
    await Favorite.updateOne({id: id},
      {
        $setOnInsert: {
          title: title, 
          year: year, 
          image: image,
          plot: plot,
          directors: directors,
          stars: stars,
          genres: genres,
          imDbRating: imDbRating,
          contentRating: contentRating
        }
      },
      {upsert: true}
    )
  }    
  catch(err: any) {
    return next({
      log: 'ERROR: addMovie',
      status: 500,
      message: { err: 'Cannot add movie' },
    })
  }
}

export default addMovie;