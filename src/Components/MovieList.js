import React from 'react'
import MovieCard from './MovieCard'
// import { useSelector } from 'react-redux';

const MovieList = ({movies, title}) => {

  return (
  <div className='px-2'>
    <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll no-scrollbar'>
        <div className='flex'>
          {movies?.map((movie) => <MovieCard key={movie.id} path={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieList