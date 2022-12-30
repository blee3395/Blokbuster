import { Request, Response, NextFunction } from 'express';

import Favorite from '../../models/profile';

const getFavorites = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = await Favorite.distinct('id')
    return res.send(data)
  }
  catch(err: any) {
    return next({
      log: 'ERROR: getFavorites',
      status: 500,
      message: { err: 'Cannot get favorite movies' },
    })
  }
}

export default getFavorites;