import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movieList: [
      { id: 1, title: "Power" },
      { id: 2, title: "Prison break" },
      { id: 3, title: "24" },
    ],
  },
  reducers: {
    addMovie: (state, action) => {
      state.movieList.push(action.payload);
    },
    removeMovie: (state, action) => {
      state.movieList = state.movieList.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});



// Action creators are generated for each case reducer function
export const { addMovie, removeMovie } = moviesSlice.actions;

export default moviesSlice.reducer;
