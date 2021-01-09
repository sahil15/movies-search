const movies = require("./movies.json").movies;
module.exports = {
    getMovies : function () {
        return movies
    },
    getMovieInformation : function (movieId) {
        const filteredMovie = movies.filter(movie => movie.id == movieId);
        console.log("filteredMovie",filteredMovie);
        return filteredMovie;
    },
    getSearchResults: function (queryParam) {
        const filteredMovies = movies.filter(movie => (movie.Plot.indexOf(queryParam) >= 0 || movie.Title.indexOf(queryParam) >= 0 || movie.SoundEffects.indexOf(queryParam) >= 0));
        return filteredMovies;
    }
  }
