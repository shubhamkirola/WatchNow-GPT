import React from 'react'
import { IMG_CDN } from '../Utils/Constants'

const MovieCard = ({path}) => {
  return (
    <div className='w-48'>
      <img src={IMG_CDN + path} alt='dsf'></img>
    </div>
  )
}

export default MovieCard