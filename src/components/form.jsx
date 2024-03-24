import { React, useState } from "react";
import axios from "axios";

function AddForm() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [starring, setStarring] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [cover, setCover] = useState("");

  const axiosPostData = (newObject) => {
    // Parse the 'starring' string into an array of strings
    newObject.actors = newObject.actors.split(", ");

    axios.post(`http://localhost:9000/addItem`, newObject).then((response) => {
      console.log(response);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newObject = {
      title: title,
      director: director,
      actors: starring,
      genre: genre,
      year: year,
      cover: cover,
    };
    axiosPostData(newObject);
  };

  return (
    <div>
      <form className="myForm" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Image"
          value={cover}
          onChange={(e) => setCover(e.target.value)}
        />
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          type="text"
          placeholder="Starring"
          value={starring}
          onChange={(e) => setStarring(e.target.value)}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default AddForm;
