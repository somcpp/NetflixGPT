import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // console.log(movies);
  return (
    <div >
      <div className="px-6 py-2 ">
        <h1 className="text-3xl text-white">{title}</h1>
      </div>
      <div className="flex overflow-x-scroll px-6">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
