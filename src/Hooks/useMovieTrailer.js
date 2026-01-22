import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo, selectTrailerVideo } from '../redux/moviesSlice';
import { API_OPTIONS } from '../Utils/constants';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getMovievideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type === "Trailer");
    // console.log(filterData);
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovievideos();
  }, []);
}

export default useMovieTrailer