const mongodb = require('mongodb');

/**
 * Private property, the MongoDB Instance.
 * @type {mongodb.Db}
 */
let _db;
const connectMongo = callback => {
  /**
   * Connect to Mongo using the DB field in .env
   */
  mongodb.MongoClient.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
    .then(client => {
      _db = client.db();
      callback();
    })
    .catch(err => {
      throw err;
    });
};

/**
 * Getter function for the MongoDB Instance.
 * @returns {mongodb.Db} Returns the MongoDB instance.
 */
const getDbConnection = () => {
  if (_db) {
    return _db;
  }
  /**
   * Throw error if a database connection could not be established.
   */
  throw new Error('Could not connect to Mongo!');
};

module.exports = {
  connectMongo,
  getDbConnection
};
