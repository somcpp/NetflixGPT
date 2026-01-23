import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../Utils/constants";
import { addNowPlayingMovies, addPopularMovies, addTopRatedMovies, addUpcommingMovies } from "../redux/moviesSlice";

const useAllMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS,
    );
    const res = await data.json();

    dispatch(addNowPlayingMovies(res.results));
  };

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS,
    );
    const res = await data.json();

    dispatch(addPopularMovies(res.results));
  };

  const getTopRatedMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
      API_OPTIONS,
    );
    const res = await data.json();
    console.log(res);
    dispatch(addTopRatedMovies(res.results));
  };

  const getUpcommingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      API_OPTIONS,
    );
    const res = await data.json();

    dispatch(addUpcommingMovies(res.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
    getPopularMovies();
    getTopRatedMovies();
    getUpcommingMovies();

  }, []);
};

export default useAllMovies;
