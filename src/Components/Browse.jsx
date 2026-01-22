import React, { useEffect } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {

  useNowPlayingMovies()

  return (
    <div>
        <Header/>
        {
          /*
            MainContainer
              - videoBackground
              - VideoTitle
            SecondaryContainer
              - MovieList * n
              - cards * n
          */
        }
        <MainContainer/>
        <SecondaryContainer/>
    </div>
  )
}

export default Browse