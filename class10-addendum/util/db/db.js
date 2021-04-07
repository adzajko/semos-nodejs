const mongoose = require('mongoose');

/**
 * The Mongoose Connection, the URI string required for connecting to your MongoDB Instance is located in .env
 */
const db = mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

module.exports = db;