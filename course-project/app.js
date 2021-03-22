const express = require('express');
const app = express();
const path = require('path');
/**
 * Application routes
 */
const applicationRoutes = require('./routes/index.routes');

/**
 * Body parser for all requests.
 */
app.use(express.urlencoded({
    extended: false
}))

app.use(express.json())

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(applicationRoutes);

module.exports = app;
