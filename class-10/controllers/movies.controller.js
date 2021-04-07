const {
  getAllMovies,
  getMovieById,
  addNewMovie,
  deleteMovie,
  updateMovie
} = require('../services/movies.service');

exports.getAllMovies = (req, res, next) => {
  getAllMovies()
    .then(movies => {
      res.status(200).json(movies);
    })
    .catch(err => {
      res.status(500).json(err);
    });
};
exports.getMovieById = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json('Invalid argument!');
  } else {
    getMovieById(id)
      .then(movie => {
        res.status(200).json(movie);
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
exports.addNewMovie = (req, res, next) => {
  const movie = req.body;
  if (
    !movie.title ||
    !movie.releaseDate ||
    !movie.boxOffice ||
    !movie.genre ||
    !movie.posterUrl
  ) {
    res.status(400).json('Invalid arguments!');
  } else {
    addNewMovie(movie)
      .then(() => {
        res.status(201).json('Movie added!');
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
exports.editMovie = (req, res, next) => {
  const id = req.params.id;
  const movie = req.body;
  if (
    !id ||
    !movie.title ||
    !movie.releaseDate ||
    !movie.boxOffice ||
    !movie.genre ||
    !movie.posterUrl
  ) {
    res.status(400).json('Invalid arguments!');
  } else {
    updateMovie(id, movie)
      .then(() => {
        res.status(200).json('Updated movie!');
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
exports.deleteMovie = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).json('Invalid ID!');
  } else {
    deleteMovie(id)
      .then(() => {
        res.status(200).json('Movie deleted!');
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
};
