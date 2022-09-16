import mongoose from 'mongoose';
import * as dotenv from 'dotenv'
dotenv.config()

const MONGO_URI = process.env.DB_URI;

mongoose.connect(MONGO_URI, {
  // options for the connect method to parse the URI
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: 'blokbuster'
})
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err: Error) => console.log('Error connecting to MongoDB :', err));

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
  id: {
    type: String,
    required: true
  },
  title: String,
  year: Number,
  image: String,
  plot: String,
  directors: String,
  stars: String,
  genres: String,
  imDbRating: Number,
  contentRating: String,
  personalRating: Number,
  lastSeen: String,
  review: String,
  recommend: Boolean
})

const Favorite = mongoose.model('favorite', favoriteSchema)

module.exports = {
  Favorite
}