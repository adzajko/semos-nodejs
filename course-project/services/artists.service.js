const uuid = require('uuid');
const Artist = require('../models/Artist.model');

exports.getAllArtists = async () => {
  const allArtists = await Artist.getArtists();
  return allArtists;
};

exports.findArtistById = async id => {
  const allArtists = await Artist.getArtists();
  const foundArtist = allArtists.find(artist => artist.id == id);
  return foundArtist;
};

exports.addNewArtist = async name => {
  const allArtists = await Artist.getArtists();
  const newArtist = {
    id: uuid.v4(),
    name
  };

  allArtists.push(newArtist);
  await Artist.saveArtists(allArtists);
};

exports.editArtist = async (id, artistName) => {
  const allArtists = await Artist.getArtists();
  const foundArtistIndex = allArtists.findIndex(artist => artist.id == id);
  if (!foundArtistIndex) {
    throw new Error('Artist does not exist.');
  }
  allArtists[foundArtistIndex] = {
    ...allArtists[foundArtistIndex],
    name: artistName
  };

  await Artist.saveArtists(allArtists);
};

exports.deleteArtist = async id => {
  const allArtists = await Artist.getArtists();
  const updatedArtists = allArtists.filter(artist => artist.id != id);

  await Artist.saveArtists(updatedArtists);
};
