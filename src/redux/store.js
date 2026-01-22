import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice"
import userReducer from "./userSlice"

export const store = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer
    }
})