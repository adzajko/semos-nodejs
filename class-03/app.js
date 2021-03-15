const express = require('express');
const app = express();
const applicationRoutes = require('./routes/index.routes');
const morgan = require('morgan');
const path = require('path');
const fs = require('fs');

const pathToLogs = path.join(__dirname, 'logs', 'access.log');

/**
 * Function that writes logs to a file in APPEND mode.
 */
const accessLogStream = fs.createWriteStream(pathToLogs, {
    flags: 'a'
})
app.use(morgan('combined', {
    stream: accessLogStream
}));

/**
 * Middleware for parsing incoming requests' body
 */
app.use(
  express.urlencoded({
    extended: false
  })
);

/**
 * Middleware to parse all bodies to json
 */
app.use(express.json());

/**
 * Serve static files with express.
 */
// app.use('/hello', express.static(__dirname +'/public'))

/**
 * Application routes
 */
app.use(applicationRoutes);

module.exports = app;
