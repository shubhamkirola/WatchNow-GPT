import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const SecondaryContainer = () => {

  const data = useSelector(store => store.movies);
  if (!data) return;



  return (
    data.nowPlayingMovies && (
    <div className='bg-black'>
      <div className=" mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={data?.nowPlayingMovies}/>
        <MovieList title={"Upcoming"} movies={data?.UpcomingMovies}/>
        <MovieList title={"TopRated"} movies={data?.TopRatedMovies}/>
        <MovieList title={"Popular"} movies={data?.PopularMovies}/>
      </div>
    </div>
    )
  )
}

export default SecondaryContainer;