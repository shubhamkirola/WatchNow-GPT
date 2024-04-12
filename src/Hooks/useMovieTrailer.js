import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/Constants";

const useMovieTrailer = (movieID) => {

    const dispatch = useDispatch();

    const getVideo = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + movieID + '/videos?language=en-US', API_OPTIONS);
    const json = await data.json();
    // console.log(json)

    const filterData = json?.results?.filter( video => video.type === "Trailer");
    // console.log(filterData);
    const Trailer = filterData?.length ? filterData[0] : filterData;
    // console.log(Trailer?.key);
    dispatch(addTrailerVideo(Trailer));
    }

    useEffect(() => {
     getVideo();
    }, []);


}

export default useMovieTrailer;