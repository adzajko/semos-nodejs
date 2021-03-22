const {
  addSong,
  deleteSong,
  findSongById,
  getAllSongs,
  editSong
} = require('../services/songs.service');

exports.getAllSongs = (req, res, next) => {
  getAllSongs()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).send(err);
    });
};

exports.getSongById = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Invalid input parameter!');
  } else {
    findSongById(id)
      .then(song => {
        if (!song) {
          res.status(404).send('Song not found!');
        } else {
          res.status(200).send(song);
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};

exports.addSong = (req, res, next) => {
  const songInfo = req.body;
  const { name, genre, releaseDate, artist } = songInfo;
  if (!name || !genre || !releaseDate || !artist) {
    res.status(400).send('Bad input parameters!');
  } else {
    addSong(songInfo)
      .then(() => {
        res.status(201).send('Song created!');
      })
      .catch(err => {
        console.trace(err);
        res.status(500).send(err);
      });
  }
};

exports.editSong = (req, res, next) => {
  const id = req.params.id;
  const songInfo = req.body;
  if (!id || !songInfo) {
    res.status(400).send('Missing input parameters!');
  } else {
    editSong(id, songInfo)
      .then(() => {
        res.status(200).send('Song edited!');
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
};

exports.deleteSong = (req, res, next) => {
  const id = req.params.id;
  if (!id) {
    res.status(400).send('Missing ID!');
  } else {
    deleteSong(id)
      .then(() => {
        res.status(200).send('Song Deleted!');
      })
      .catch(err => {
        console.log(err);
        res.status(500).send(err);
      });
  }
};
