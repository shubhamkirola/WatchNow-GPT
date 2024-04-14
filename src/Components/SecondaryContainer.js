import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const data = useSelector(store => store.movies);
  if (!data) return;



  return (
    <div className='relative z-20 -mt-28'>
      <MovieList title='NEW ONEs' movies={data?.nowPlayingMovies}/>
      <MovieList title='OLD ONEs' movies={data?.nowPlayingMovies}/>
      <MovieList title='VERY ONEs' movies={data?.nowPlayingMovies}/>
    </div>
  )
}

export default SecondaryContainer