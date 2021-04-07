const Movie = require('../models/Movie.model');

exports.getAllMovies = async () => {
  const allMovies = await Movie.getAllMovies();
  return allMovies.toArray();
};

exports.getMovieById = async id => {
  const foundMovie = await Movie.getMovieById(id);
  return foundMovie;
};

exports.deleteMovie = async id => {
  await Movie.deleteMovieById(id);
};

exports.addNewMovie = async ({
  title,
  releaseDate,
  genre,
  boxOffice,
  posterUrl
}) => {
  const newMovie = new Movie(title, releaseDate, genre, boxOffice, posterUrl);
  await newMovie.addNewMovie();
};

exports.updateMovie = async (id, movieBody) => {
  const newMovie = new Movie(
    movieBody.title,
    movieBody.releaseDate,
    movieBody.genre,
    movieBody.boxOffice,
    movieBody.posterUrl
  );
  await newMovie.updateMovie(id);
};
