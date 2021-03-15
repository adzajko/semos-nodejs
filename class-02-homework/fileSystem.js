const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'sample.txt');

const writeDataToFile = (data, callBack) => {
  fs.writeFile(
    pathToFile,
    data,
    {
      encoding: 'utf-8'
    },
    err => {
      if (err) throw err;
      callBack(true);
    }
  );
};

const readDataFromFile = callback => {
  fs.readFile(pathToFile, {
      encoding: 'utf-8'
  }, (err, data) => {
    if (err) throw err;
    callback(data);
  });
};

module.exports = {
  writeDataToFile,
  readDataFromFile
};
