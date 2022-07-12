const path = require('path');
const express = require('express');

const app = express();
const PORT = 3000;

// Require routers
const imdbRouter = require('./routes/imdb.js')


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, '../client')));


// Define route handlers
app.use('/imdb', imdbRouter);

// Error handler
app.use((req,res) => res.status(404).send('Error cannot load the page'));

// Global error handler
app.use((err, req, res, next) => {
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