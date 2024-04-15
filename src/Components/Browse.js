import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import usePopularMovies from '../Hooks/usePopularMovies'
import { useSelector } from 'react-redux'
import GptSearch from './GptSearch'
import useUpcomingMovies from '../Hooks/useUpcomingMovies'
import useTopRatedMovies from '../Hooks/useTopRatedMovies'


const Browse = () => {

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

  return (

    <>
     <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
    </>
  )
}

export default Browse