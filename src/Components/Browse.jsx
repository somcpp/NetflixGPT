import useAllMovies from '../Hooks/useAllMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'



const Browse = () => {

  useAllMovies()

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