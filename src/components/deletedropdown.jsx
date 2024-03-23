import {React, useState, useEffect} from 'react';
import axios from 'axios';



function DeleteDropdown(){
    const [movies, setMovies] =useState([])
    const [selectedMovie, setSelectedMovie] = useState('')


    // const populateMovies = movies.keys(movies).map(key => ({
    //   title: key
    // }));

    // function movieHandler(e){
    //   movieSelect = e.target.value;
  // }
  let handleMovieSelect = (e) => {
    setSelectedMovie(e.target.value)
  }

    const axiosDeleteData = async(id) => {
        await axios.delete(`http://localhost:9000/deleteItem/${id}`);
      }

      return(
        <div>
            <div className="myForm">
            <label>Remove a movie</label>
            <select name="movie" onChange={handleMovieSelect}>
            {movies.map((movie) => <option key={movie.id} value={movie.id}>{movie.title}</option>)}
        </select>
            <button type="submit" onClick={() => axiosDeleteData(selectedMovie)}>Delete that B!</button>
            </div>
        </div>
      )
      }




export default DeleteDropdown