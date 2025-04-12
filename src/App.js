import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie, removeMovie } from "./Components/SliceMovies";

export default function App() {
  const movies = useSelector((state) => state.movieList.movieList);
  const dispatch = useDispatch();
  const [movieName, setMovieName] = useState("");

  function handleAdd(e) {
    e.preventDefault();
    if (!movieName.trim()) return;

    const newMovie = {
      id: Date.now(),
      title: movieName,
    };

    dispatch(addMovie(newMovie));
    setMovieName("");
  }

  function handleRemove(id) {
    dispatch(removeMovie(id));
  }

  console.log(movies);
  return (
    <div className="App">
      <h1>Movies</h1>
      <form style={{ marginBottom: "34px" }}>
        <input
          value={movieName}
          onChange={(e) => setMovieName(e.target.value)}
        />
        <button onClick={handleAdd}>Add movie</button>
      </form>
      {movies.map((m) => (
        <div key={m.id}>
          {m.title}
          <button
            style={{ marginLeft: "20px" }}
            onClick={() => handleRemove(m.id)}
          >
            Remove movie
          </button>
        </div>
      ))}
    </div>
  );
}
