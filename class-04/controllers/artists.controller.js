const {
  getAllArtists,
  addNewArtist,
  findArtistById,
  deleteArtist,
  editArtist
} = require('../services/artists.service');

exports.getAllArtists = (req, res, next) => {
  getAllArtists()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.debug(err);
      res.status(500).send();
    });
};

exports.getArtistById = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Missing ID!');
  } else {
    findArtistById(id)
      .then(artist => {
        if (!artist) {
          res.status(404).send('Artist not found!');
        } else {
          res.status(200).send(artist);
        }
      })
      .catch(err => {
        console.trace(err);
        res.status(500).send();
      });
  }
};

exports.addArtist = (req, res, next) => {
  const artistName = req.body.name;
  if (!artistName || artistName.length < 3) {
    res.status(400).send('Invalid input for artist name!');
  } else {
    addNewArtist(artistName)
      .then(() => {
        res.status(201).send('Artist created!');
      })
      .catch(err => {
        console.trace(err);
        res.status(500).send('Error creating artist!');
      });
  }
};

exports.editArtist = (req, res, next) => {
  const id = req.params.id;
  const artistInfo = req.body;
  if (!id || !artistInfo) {
    res.status(400).send('Invalid input!');
  } else {
    editArtist(id, artistInfo.name)
      .then(() => {
        res.status(200).send('Artist edited!');
      })
      .catch(err => {
        console.trace(err);
        res.status(500).send();
      });
  }
};

exports.deleteArtist = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Missing paramater: ID!');
  } else {
    deleteArtist(id)
      .then(() => {
        res.status(200).send('Artist deleted!');
      })
      .catch(err => {
        console.trace(err);
        res.status(500).send('Error deleting artist!');
      });
  }
};
