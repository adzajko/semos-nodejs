require('dotenv').config();
const http = require('http');
const app = require('./app');
const mongoose = require('./util/db/db');

const port = process.env.PORT;
const server = http.createServer(app);

mongoose
  .then(() => {
    server.listen(port, () => {
      console.log('API Running!');
    });
  })
  .catch(err => {
    console.log(err);
    process.exit(-1);
  });
