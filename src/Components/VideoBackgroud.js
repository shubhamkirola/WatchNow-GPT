import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../Hooks/useMovieTrailer';

const VideoBackgroud = ({movieID}) => {

    const trailerVideo = useSelector(store => store.movies?.TrailerVideo);
    useMovieTrailer(movieID);

  return (
    <div>
      <iframe
        className='w-full aspect-video'
        src={"https://www.youtube.com/embed/" + trailerVideo?.key + "?si=ZIdgEWub0OgJ6lb9?&autoplay=1&mute=1"}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen>
      </iframe>
    </div>
  )
}

export default VideoBackgroud;