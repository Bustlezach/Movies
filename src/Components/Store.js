import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "./SliceMovies";

export const store = configureStore({
  reducer: {
    movieList: moviesReducer,
  },
});
