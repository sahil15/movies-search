const movies = require("./movies.json").movies;
module.exports = {
    getMovies : function () {
        return movies
    }
  }
