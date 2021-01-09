import React, { useState,useEffect } from "react";
import axios from "axios";
import {baseURL} from "../../constants/constants"
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import Spinner from "../elements/Spinner/Spinner";
import "./Movie.css";

function  Movie(props) {
  const [movie,setMovie] = useState(null);
  const [loading,setLoading] = useState(false);
  const [movieId,setMovieId] = useState(props.match.params.movieId);


  useEffect(()=>{
      setLoading(true);
      //first fetch the movie data and then actors
      const endpoint = `${baseURL}/movies/${movieId}`;
      const movieData = fetchMovieData(endpoint);
      
      movieData.then(movieData => {
        console.log("movieData",movieData);
        setMovie(movieData.data[0]);
        setLoading(false);
      })
  },[]);

  async function fetchMovieData(url) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      throw new Error("Error while fetching movie data", error);
    }
  }

  return (
    <div>
      {movie ? (
        <div>
          <Navigation movie={props.location.movieName} />
          <MovieInfo
            movie={movie}
          />
        </div>
      ) : null}

      {loading ? <Spinner /> : null}
    </div>
  );
}

export default Movie;
