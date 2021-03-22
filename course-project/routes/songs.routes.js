const router = require('express').Router();
const {
  addSong,
  deleteSong,
  editSong,
  getAllSongs,
  getSongById
} = require('../controllers/songs.controller');

router
  .route('/songs')
  .get(getAllSongs)
  .post(addSong);

router
  .route('/songs/:id')
  .put(editSong)
  .get(getSongById)
  .delete(deleteSong);

module.exports = router;
