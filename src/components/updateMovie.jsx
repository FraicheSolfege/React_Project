import React, { useState } from "react";
import axios from "axios";

function UpdateMovie({ apiData }) {
  const [selectedMovieId, setSelectedMovieId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    starring: "",
    genre: "",
    year: "",
    cover: "",
  });

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedMovieId(selectedId);
    const selectedMovie = apiData.find(
      (movie) => movie.id === parseInt(selectedId)
    );
    if (selectedMovie) {
      setFormData({
        title: selectedMovie.title,
        director: selectedMovie.director,
        starring: selectedMovie.actors.join(", "),
        genre: selectedMovie.genre,
        year: selectedMovie.year,
        cover: selectedMovie.cover,
      });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // \/ UPDATE FUNCTION BELOW \/ \\
  // You should build up a new version of the object that you'd like to change
  // along with it's CORRECT ID, the same one it already has in the json file.
  // Feed that object in as the argument.
  const axiosUpdateItem = async (updateObject) => {
    await axios.put(`http://localhost:9000/updateOne`, updateObject);
  };
  // /\ UPDATE FUNCTION ABOVE /\ \\

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedMovie = {
      id: parseInt(selectedMovieId),
      title: formData.title,
      director: formData.director,
      actors: formData.starring.split(", "),
      genre: formData.genre,
      year: parseInt(formData.year),
      cover: formData.cover,
    };
    axiosUpdateItem(updatedMovie);
  };

  return (
    <div>
      <h2>Update Movie</h2>
      <select value={selectedMovieId} onChange={handleSelectChange}>
        <option value="">Select a movie</option>
        {apiData.map((movie) => (
          <option key={movie.id} value={movie.id}>
            {movie.title}
          </option>
        ))}
      </select>
      {selectedMovieId && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Title"
          />
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            placeholder="Director"
          />
          <input
            type="text"
            name="starring"
            value={formData.starring}
            onChange={handleChange}
            placeholder="Starring"
          />
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="Genre"
          />
          <input
            type="text"
            name="year"
            value={formData.year}
            onChange={handleChange}
            placeholder="Year"
          />
          <input
            type="text"
            name="cover"
            value={formData.cover}
            onChange={handleChange}
            placeholder="Cover URL"
          />
          <button type="submit">Update Movie</button>
        </form>
      )}
    </div>
  );
}

export default UpdateMovie;
