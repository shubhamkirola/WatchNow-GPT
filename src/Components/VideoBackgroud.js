import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackgroud = ({movieID}) => {

    const trailerVideo = useSelector(store => store.movies?.TrailerVideo);
    useMovieTrailer(movieID);

  return (
    <div className='w-full'>
      <iframe
        className='w-full aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=ZIdgEWub0OgJ6lb9?showinfo=0&autoplay=1&mute=1&controls=0&rel=0&loop=1&playlist=" + trailerVideo?.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackgroud;