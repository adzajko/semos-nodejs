const express = require('express');
const cors = require('cors');
const applicationRoutes = require('./routes/index.routes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const uuid = require('uuid');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cors());
app.use(
  express.urlencoded({
    extended: false

  })
);

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use(cookieParser(process.env.SECRET))
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
    genid: (req) => {
        return uuid.v4();
    }
}))


app.use(applicationRoutes);

module.exports = app;
