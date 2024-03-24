import { React } from "react";

function MainContent({ apiData }) {
  return (
    <ul className="movies">
      {apiData &&
        apiData.map((movie) => (
          <li key={movie.id} className="movie">
            <img src={movie.cover} alt="cover" />
            <div>
              <h3>{movie.title}</h3>
              <p>Director: {movie.director}</p>
              <p>Starring: {movie.actors}</p>
              <p>Genre: {movie.genre}</p>
              <p>Year: {movie.year}</p>
            </div>
          </li>
        ))}
    </ul>
  );
}

export default MainContent;
