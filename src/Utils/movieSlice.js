import { createSlice } from "@reduxjs/toolkit"

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        nowPLayingMovies : null,
        TrailerVideo : null,
    },
    reducers : {
        addNowPlayingMovies : (state, action) => {
            state.nowPLayingMovies = action.payload;
        },
        addTrailerVideo : (state, action) => {
            state.TrailerVideo = action.payload;
        }
    }

})

export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;