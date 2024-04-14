import React from 'react'
import MovieCard from './MovieCard'
// import { useSelector } from 'react-redux';

const MovieList = ({movies, title}) => {



  return (
  <div className='pl-2'>
    <h1 className='pb-2 font-bold text-4xl text-white'>{title}</h1>
      <div className='flex overflow-x-auto mb-4 no-scrollbar'>
        <div className='flex flex-row gap-4'>
          {movies?.map((movie) => <MovieCard key={movie.id} path={movie.poster_path}/>)}
        </div>
      </div>
    </div>
  )
}

export default MovieList