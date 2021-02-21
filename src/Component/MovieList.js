import React from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";
const MovieList = ({ moviesData, title, rate }) => {
  return (
    <div>
      {moviesData
        .filter((el) => el.name.toLowerCase().includes(title.toLowerCase()))
        .filter((el) => el.rating >= rate)
        .map((el) => (
          <Link to={{ pathname: `/details/${el.name}`, state: { el: el } }}>
            <MovieCard el={el} key={el.id} />
          </Link>
        ))}
    </div>
  );
};

export default MovieList;
