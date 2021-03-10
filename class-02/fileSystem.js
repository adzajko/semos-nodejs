const fs = require('fs');
const path = require('path');

/**
 * Concatenated path using the path module, __dirname means the root folder directory
 */
const pathToFile = path.join(__dirname, 'files', 'sampleFile.txt');

/**
 * Function that writes content to a file.
 */
const writeF = () => {
  fs.writeFile(
    pathToFile,
    'Baba Gjura',
    {
      encoding: 'utf-8'
    },
    err => {
      if (err) throw err;
      console.log('File written');
    }
  );
};


/**
 * Function to read the content of a file.
 * @param {*} callBack the callback function to be passed as argument.
 */
const readF = callBack => {
  fs.readFile(
    pathToFile,
    {
      encoding: 'utf-8'
    },
    (err, data) => {
      if (err) throw err;
      callBack(data);
    }
  );
};

module.exports = {
  writeF,
  readF
};
