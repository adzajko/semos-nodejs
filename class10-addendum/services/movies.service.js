const Movie = require('../models/Movie.model');

exports.getAllMovies = async () => {
  const allMovies = await Movie.find();
  return allMovies;
};

/**
 * Mongoose, unlike the regular client does not need to convert strings and numbers into Object Ids beforehand.
 * @param {string} id 
 * @returns 
 */
exports.getMovieById = async id => {
  const foundMovie = await Movie.findOne({ _id: id });
  return foundMovie;
};

exports.deleteMovie = async id => {
  await Movie.deleteOne({ _id: id });
};

exports.addNewMovie = async ({
  title,
  releaseDate,
  genre,
  boxOffice,
  posterUrl
}) => {
  const newMovie = new Movie({
    title,
    releaseDate,
    boxOffice,
    posterUrl,
    genre
  });
  try {
    newMovie.save();
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (id, movieBody) => {
  const newMovie = {
    title: movieBody.title,
    releaseDate: movieBody.releaseDate,
    boxOffice: movieBody.boxOffice,
    posterUrl: movieBody.posterUrl,
    genre: movieBody.genre
  };

  try {
    await Movie.updateOne(
      { _id: id },
      {
        $set: newMovie // Use of the atomic operator $set
      }
    );
  } catch (error) {
    console.log(error);
  }
};
