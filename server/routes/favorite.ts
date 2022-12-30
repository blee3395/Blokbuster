import { Router } from 'express';

import getFavorites from '../controllers/favorites/getFavorites';
import addMovie from '../controllers/favorites/addMovie';

const router = Router();

router.get('/', getFavorites)

router.post('/', addMovie);

export default router;
