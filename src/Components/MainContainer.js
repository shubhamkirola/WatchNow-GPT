import React from "react";
import { useSelector } from "react-redux";
import VideoBackgroud from "./VideoBackgroud";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {

    const movies = useSelector(store => store.movies.nowPLayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie); 

    const { original_title, overview, id } = mainMovie;

    return(
        <>
        <VideoTitle title={original_title} description={overview}/>
        <VideoBackgroud movieID={id}/>
        </>
    )
}

export default MainContainer;