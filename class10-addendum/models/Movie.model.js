const mongoose = require('mongoose');

/**
 * Define a schema for Mongoose, similar to the jsonvalidator in shell
 * The various types that can be used are found in mongoose.Types
 */
const movieSchema = mongoose.Schema({
  title: String,
  releaseDate: String,
  boxOffice: String,
  posterUrl: String,
  genre: String,
})

/**
 * Instantiate a new model for use in your app.
 */
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;