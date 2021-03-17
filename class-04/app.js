const express = require('express');
const app = express();

/**
 * Body parser for all requests.
 */
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

/**
 * Application routes
 */
const applicationRoutes = require('./routes/index.routes');
app.use(applicationRoutes);

module.exports = app;
