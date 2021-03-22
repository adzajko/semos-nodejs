const { getAllArtists } = require('../services/artists.service');

exports.getIndexPage = async(req, res, next) => {
 const allArtists = await getAllArtists();
  res.render('index', {
    pageTitle: 'Poor Mans Spotify',
    artists: allArtists
  })
};
