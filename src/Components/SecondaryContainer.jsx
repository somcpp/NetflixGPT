import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import { selectNowPlayingMovies, selectTopRatedMovies, selectPopularMovies, selectUpcommingMovies } from '../redux/moviesSlice'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector(selectNowPlayingMovies);
  const popularMovies = useSelector(selectPopularMovies);
  const topRatedMovies = useSelector(selectTopRatedMovies);
  const upcommingMovies = useSelector(selectUpcommingMovies);

  return (
    <div className='bg-black'>
      {
        /*
          MovieList - popular
          MovieList - Now playing
          MovieList - Trending
          Movielist - horror
        */
      }
      <div className='relative -mt-72 z-10 pl-12'>
        <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>
        <MovieList title={"Trending"} movies={popularMovies}/>
        <MovieList title={"Top Rated"} movies={topRatedMovies}/>
        <MovieList title={"Upcomming Movies"} movies={upcommingMovies}/>
      </div>
      
    </div>
  )
}

export default SecondaryContainer