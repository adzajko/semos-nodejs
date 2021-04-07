const express = require('express');
const applicationRoutes = require('./routes/index.routes');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(
  express.urlencoded({
    extended: false
  })
);

app.use(express.json());

app.use(applicationRoutes);
module.exports = app;
