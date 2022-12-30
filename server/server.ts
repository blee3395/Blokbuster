import { Request, Response, NextFunction } from 'express';

import path from 'path';
import express from 'express';
import dotenv from 'dotenv'
import config from 'config';

// Require routers
import imdbRouter from './routes/imdb';
import favoriteRouter from './routes/favorite';

dotenv.config()

const app = express();
const PORT: number = config.get('SERVER_PORT');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '../client/assets')));

// Define route handlers
app.use('/imdb', imdbRouter);
app.use('/profile', favoriteRouter);

// Error handler
app.use((req: Request,res: Response) => res.status(404).send('Error cannot load the page'));

// Global error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});


app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;