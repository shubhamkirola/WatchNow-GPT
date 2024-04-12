import React, { useEffect } from 'react'
import Header from './Header'
import { API_OPTIONS } from '../Utils/Constants'
import { useDispatch } from "react-redux"
import { addNowPlayingMovies } from '../Utils/movieSlice'
import MainContainer from "./MainContainer"

const Browse = () => {

  const dispatch = useDispatch()

  const getNowPlayingMovies = async() => {
    const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json);

    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  return (
    <>
      <Header/>
      <MainContainer/>
      {/* <SecondaryContainer/> */}
    </> 
  )
}

export default Browse;