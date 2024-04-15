import React from 'react'
import { IMG_CDN } from '../Utils/Constants'

const MovieCard = ({path}) => {
  if (!path) return null;
  return (
    <div className='w-48 md:w-48 pr-4'>
      <img src={IMG_CDN + path} alt='dsf'></img>
    </div>
  )
}

export default MovieCard