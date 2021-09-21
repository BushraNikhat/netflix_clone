import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieListItem from "./MovieListItem";

const MovieList = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://api.themoviedb.org/3/";
  const api_key = "3f6a097543ec5d1a1339cd0cdba04bc6";


  // whenever new fetchUrl will be recieved from home component this useEffect get triggered
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base_url}${fetchUrl}${api_key}`);
        setMovies(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [fetchUrl]);


  return (
    <>
      <div className="listContainer">
        <span className="title">{title}</span>
        
        <div className="movieWrapper d-flex">
          {movies &&
            movies.map((movie) => {
              return (
                <MovieListItem movie={movie} key={movie.key}/>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default MovieList;
