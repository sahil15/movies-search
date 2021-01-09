import React, { useState,useEffect } from "react";
import axios from 'axios';
import "./Home.css";

import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import MovieThumb from "../elements/MovieThumb/MovieThumb";
import {baseURL} from "../../constants/constants";

function Home(){
  const [movies,setMovies] = useState([]);
  const [backgroundMovie,setBackgroundMovie] = useState(null);
  const [loading,setLoading] = useState(false);
  const [searchTerm,setSearchTerm] = useState("");
 
  const searchItems = searchTerm => {
 
    let endpoint = "";
    setMovies([]);
    setLoading(true);
    setSearchTerm(searchTerm);

    if (searchTerm === "") {
      endpoint = `${baseURL}/movies`;
    } else {
      endpoint = `${baseURL}/movies/searchTerm/${searchTerm}`;
    }
    const moviesList = fetchMovies(endpoint);
    setMoviesData(moviesList);
  }

  useEffect(()=>{
        const moviesList = fetchMovies(`${baseURL}/movies`);
        setMoviesData(moviesList);
  },[]);

  const setMoviesData = moviesList => {
    moviesList.then(moviesList => {
      setMovies(moviesList.data);
      setBackgroundMovie(backgroundMovie || moviesList.data[0]);
      setLoading(false);
    })
  }

  async function fetchMovies(url) {
    try {
      const response = await axios.get(url);
      return response;
    } catch (error) {
      console.error(error);
    }
  }

    return (
      <div className="rmdb-home">
        {backgroundMovie ? (
          <div>
            <HeroImage
              image={backgroundMovie.Poster}
              title={backgroundMovie.Title}
              text={backgroundMovie.Plot}
            />
            <SearchBar callback={searchItems} />
          </div>
        ) : null}
        <div className="rmdb-home-grid">
          <FourColGrid
            header={searchTerm ? "Search Result" : "Popular Movies"}
            loading={loading}
          >
            {movies.map((element, i) => {
              return (
                <MovieThumb
                  key={i}
                  clickable={true}
                  image={element.Poster}
                  movieId={element.id}
                  movieName={element.Title}
                />
              );
            })}
          </FourColGrid>
        </div>
      </div>
    );
  }

export default Home;
