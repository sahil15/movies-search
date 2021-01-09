import React from "react";
import FontAwesome from "react-fontawesome";
import MovieThumb from "../MovieThumb/MovieThumb";
import "./MovieInfo.css";

const MovieInfo = props => {
  return (
    <div
      className="rmdb-movieinfo"
      style={{
        background: props.movie.Poster
          ? `url('${props.movie.Poster}')`
          : "#000"
      }}
    >
      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={
              props.movie.Poster
                ? `${props.movie.Poster}`
                : "./images/no_image.jpg"
            }
            clickable={false}
          />
          </div>
          <div className="rmdb-movieinfo-text">
            <h1>{props.movie.Title}</h1>
            <h3>Plot</h3>
            <p>{props.movie.Plot}</p>
            <h3>Location,Language</h3>
            <p>{props.movie.Location},{props.movie.Language}</p>
            <h3>Listing Type</h3>
            <p>{props.movie.listingType}</p>
            <h3>Sound Effects</h3>
            <p>{props.movie.SoundEffects.join()}</p>
            <h3>IMDB RATING</h3>
            <div className="rmdb-rating">
              <meter
                min="0"
                max="100"
                optimum="100"
                low="40"
                high="70"
                value={props.movie.imdbRating * 10}
              />
              <p className="rmdb-score">{props.movie.imdbRating}</p>
            </div>
        
          </div>
          <FontAwesome className="fa-film" name="film" size="5x" />
        </div>
      </div>
  );
};

export default MovieInfo;
