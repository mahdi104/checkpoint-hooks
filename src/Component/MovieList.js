import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ moviesData, title, rate }) => {
  return (
    <div>
      {moviesData
        .filter((el) => el.name.toLowerCase().includes(title.toLowerCase()))
        .filter((el) => el.rating >= rate)
        .map((el) => (
          <MovieCard el={el} key={el.id} />
        ))}
    </div>
  );
};

export default MovieList;
