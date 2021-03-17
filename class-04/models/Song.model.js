const fs = require('fs/promises');

const songReader = async () => {
  const rawData = await fs.readFile(process.env.SONGS_PATH);
  return JSON.parse(rawData);
};

const songWriter = async content => {
  await fs.writeFile(process.env.SONGS_PATH, content);
};

module.exports = class Song {
  constructor() {}

  static getSongs() {
    return songReader();
  }

  static saveSongs(songs) {
    return songWriter(JSON.stringify(songs));
  }
};
