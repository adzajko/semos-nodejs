require('dotenv').config();
const http = require('http');
const expressApp = require('./app');
const path = require('path');

const pathToArtists = path.join(__dirname, 'db', 'artists.json');
const pathToSongs = path.join(__dirname, 'db', 'songs.json');

process.env.ARTISTS_PATH = pathToArtists;
process.env.SONGS_PATH = pathToSongs;

const server = http.createServer(expressApp);
const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log('Started on port ' + port);
});
