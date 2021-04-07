require('dotenv').config();
const http = require('http');
const app = require('./app');
const { connectMongo } = require('./util/db/db');

const port = process.env.PORT;
const server = http.createServer(app);

/**
 * Ensure that the MongoDB is connected before launching the server.
 */
connectMongo(() => {
  server.listen(port, () => {
    console.log('API running!');
  });
});
