const { getDbConnection } = require('../util/db/db');

const { ObjectId } = require('mongodb');

class Movie {
  /**
   * A Javascript feature, the constructor function will always create the fields
   * that are pointed to with this.
   * @param {String} title The Title of the movie.
   * @param {String} releaseDate The Release date of the movie. Prefer Date() formats.
   * @param {String} genre Movie genre.
   * @param {String} boxOffice How much money the movie made at the box office.
   * @param {String} posterUrl The movie poster's URL.
   */
  constructor(title, releaseDate, genre, boxOffice, posterUrl) {
    this.title = title;
    this.releaseDate = releaseDate;
    this.genre = genre;
    this.boxOffice = boxOffice;
    this.posterUrl = posterUrl;
  }

  static getAllMovies = () => {
    const db = getDbConnection();
    return db.collection('movies').find();
  };

  static getMovieById = id => {
    const db = getDbConnection();
    /**
     * Here, id is being transformed to a special MongoDB BSON Type - ObjectId.
     * Without this, the comparison WILL fail.
     */
    return db.collection('movies').findOne({ _id: new ObjectId(id) });
  };

  static deleteMovieById = id => {
    const db = getDbConnection();
    /**
     * Here, id is being transformed to a special MongoDB BSON Type - ObjectId.
     * Without this, the comparison WILL fail.
     */
    return db.collection('movies').deleteOne({ _id: new ObjectId(id) });
  };

  addNewMovie = () => {
    const db = getDbConnection().collection('movies');
    return db.insertOne(this);
  };

  updateMovie = id => {
    const db = getDbConnection().collection('movies');
    return db.updateOne(
      /**
       * Here, id is being transformed to a special MongoDB BSON Type - ObjectId.
       * Without this, the comparison WILL fail.
       */
      { _id: new ObjectId(id) },
      {
        $set: this
      }
    );
  };
}

module.exports = Movie;
