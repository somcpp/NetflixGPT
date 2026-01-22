import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies : (state,action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies,addTrailerVideo} = moviesSlice.actions

export const selectNowPlayingMovies = (state) => state.movies.nowPlayingMovies;
export const selectTrailerVideo = (state) => state.movies.trailerVideo;

export default moviesSlice.reducer;