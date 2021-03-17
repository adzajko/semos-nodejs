const Song = require('../models/Song.model');
const Artist = require('../models/Artist.model');
const uuid = require('uuid');

exports.getAllSongs = async () => {
  const allSongs = await Song.getSongs();
  return allSongs;
};

exports.findSongById = async id => {
  const allSongs = await Song.getSongs();
  const foundSong = allSongs.find(song => song.id == id);
  return foundSong;
};

exports.addSong = async songInfo => {
  const allSongs = await Song.getSongs();
  const allArtists = await Artist.getArtists();
  const newSongId = uuid.v4();
  const newSong = {
    id: newSongId,
    name: songInfo.name,
    artist: songInfo.artist,
    releaseDate: songInfo.releaseDate,
    genre: songInfo.genre
  };

  allSongs.push(newSong);
  const findArtistIndex = allArtists.findIndex(
    artist => artist.id == songInfo.artist.id
  );
  /**
   * Ternary operator evaluation, if the condition before ? is met, the statement after ? will be executed. 
   * Otherwise, the statement after : will be executed.
   */
  allArtists[findArtistIndex].songs
    ? allArtists[findArtistIndex].songs.push({
        id: newSongId,
        name: songInfo.name
      })
    : (allArtists[findArtistIndex].songs = [
        {
          id: newSongId,
          name: songInfo.name
        }
      ]);
  await Artist.saveArtists(allArtists);
  await Song.saveSongs(allSongs);
};

exports.editSong = async (id, songInfo) => {
  const allSongs = await Song.getSongs();
  const foundSongIndex = allSongs.findIndex(song => song.id == id);

  allSongs[foundSongIndex] = {
    ...allSongs[foundSongIndex],
    name: songInfo.name,
    releaseDate: songInfo.releaseDate,
    genre: songInfo.genre
  };

  await Song.saveSongs(allSongs);
};

exports.deleteSong = async id => {
  const allSongs = await Song.getSongs();
  const foundSong = allSongs.find(song => song.id == id);
  const allArtists = await Artist.getArtists();
  const findArtistIndex = allArtists.findIndex(
    artist => artist.id == foundSong.artist.id
  );

  const updatedSongs = allSongs.filter(song => song.id != id);
  allArtists[findArtistIndex].songs = allArtists[findArtistIndex].songs.filter(
    song => song.id != id
  );

  await Artist.saveArtists(allArtists);
  await Song.saveSongs(updatedSongs);
};
