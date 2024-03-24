import { React, useState } from "react";
import axios from "axios";

function DeleteDropdown({ apiData }) {
  const [selectedMovie, setSelectedMovie] = useState("");
  let handleMovieSelect = (e) => {
    const selectedId = e.target.value;
    setSelectedMovie(selectedId);
  };

  const axiosDeleteData = async (id) => {
    await axios.delete(`http://localhost:9000/deleteItem/${id}`);
  };

  return (
    <div>
      <div className="myForm">
        <label>Remove a movie</label>
        <select name="movie" onChange={handleMovieSelect} value={selectedMovie}>
          <option value="">Select a movie to delete</option>
          {apiData.map((movie) => (
            <option key={movie.id} value={movie.id}>
              {movie.title}
            </option>
          ))}
        </select>
        <button
          type="button"
          onClick={() => axiosDeleteData(selectedMovie)}
          disabled={!selectedMovie}
        >
          Delete that B!
        </button>
      </div>
    </div>
  );
}

export default DeleteDropdown;
