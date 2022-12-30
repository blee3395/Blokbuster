import mongoose from 'mongoose';
import config from 'config'
import dotenv from 'dotenv'

dotenv.config()

type Database = {
  DB_URI: string,
  DB_NAME: string
}

const DATABASE: Database = config.get('DATABASE')

mongoose.connect(process.env.DB_URI, {
  // options for the connect method to parse the URI
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
  // sets the name of the DB that our collections are part of
  dbName: DATABASE.DB_NAME
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

export default Favorite