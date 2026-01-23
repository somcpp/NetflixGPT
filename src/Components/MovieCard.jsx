import React from 'react'
import { IMG_CDN } from '../Utils/constants'

const MovieCard = ({posterPath}) => {

  return (
    <div className='w-44 pr-4'>
        <img src={IMG_CDN + posterPath} alt="poster" />
    </div>
  )
}

export default MovieCard