import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPlayingMovies : null,
        PopularMovies : null,
        UpcomingMovies : null,
        TopRatedMovies : null,
        TrailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.PopularMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.UpcomingMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.TopRatedMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.TrailerVideo = action.payload;
        }
    }

})

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcomingMovies,  } = moviesSlice.actions;

export default moviesSlice.reducer;