const fs = require('fs/promises');

/**
 * Async function that returns a promise with all the songs, read from the DB file.
 * @returns {Promise<Array>} List of all the songs.
 */
const songReader = async () => {
  const rawData = await fs.readFile(process.env.SONGS_PATH);
  return JSON.parse(rawData);
};

/**
 * Async function that writes content to the DB file.
 * @param {Array} content JSON array representing the new songs.
 */
const songWriter = async content => {
  await fs.writeFile(process.env.SONGS_PATH, content);
};

module.exports = class Song {
  constructor() {}

  /**
   * Static method for retrieving all songs.
   * @returns {Promise<Array>} The list of songs.
   */
  static getSongs() {
    return songReader();
  }

  /**
   * Async function that saves the new songs to the DB file.
   * @param {Array} songs An array of songs.
   * @returns
   */
  static saveSongs(songs) {
    return songWriter(JSON.stringify(songs));
  }
};
