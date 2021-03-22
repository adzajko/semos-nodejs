const router = require('express').Router();
const {
  addArtist,
  deleteArtist,
  editArtist,
  getAllArtists,
  getArtistById
} = require('../controllers/artists.controller');

router
  .route('/artists')
  .get(getAllArtists)
  .post(addArtist);

router
  .route('/artists/:id')
  .put(editArtist)
  .delete(deleteArtist)
  .get(getArtistById);

module.exports = router;
