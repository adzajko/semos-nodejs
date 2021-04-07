const router = require('express').Router();
const {
  getAllMovies,
  getMovieById,
  deleteMovie,
  addNewMovie,
  editMovie
} = require('../controllers/movies.controller');
router
  .route('/movies')
  .get(getAllMovies)
  .post(addNewMovie);

router
  .route('/movies/:id')
  .get(getMovieById)
  .put(editMovie)
  .delete(deleteMovie);

module.exports = router;
