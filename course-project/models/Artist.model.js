const fs = require('fs/promises');

/**
 * Async function that returns contents of a file.
 * @returns {Promise<Array>}
 */
const artistReader = async () => {
  /**
   * Promises way
   */
  //return fs.readFile(process.env.ARTISTS_PATH)
  //                .then(data => JSON.parse(data));

  /**
   * Async Await way - Same results, same methodology
   */
  const rawData = await fs.readFile(process.env.ARTISTS_PATH);
  return JSON.parse(rawData);
};

/**
 * Async function that writes content to file.
 * @param {Array} content Stringified JSON array that will be written to file.
 */
const artistWriter = async content => {
  await fs.writeFile(process.env.ARTISTS_PATH, content);
};


module.exports = class Artist {
  constructor() {}

  /**
   * Static method (don't make an instance to access it!) that retrieves all artists.
   * @returns {Promise<Array>} Array of artists, parsed into javascript objects.
   */
  static getArtists() {
    return artistReader();
  }

  /**
   * Static method to save artists to file.
   * @param {*} artists Artist list that will be saved to the file.
   * @returns {Promise<void>}
   */
  static saveArtists(artists) {
    return artistWriter(JSON.stringify(artists));
  }
};
