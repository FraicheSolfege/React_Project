import {React, useState} from 'react';
import axios from 'axios';



function DeleteDropdown(){
    const [movies, setMovies] =useState([])
    const [selectedMovie, setSelectedMovie] = useState('')

    
    const axiosDeleteData = async(id) => {
        await axios.delete(`http://localhost:9000/deleteItem/${id}`);
      }

      return(
        <div>
            <div className="myForm">
            <label>Remove a movie</label>
            <select name="movie"></select>
            </div>
        </div>
      )
}




export default DeleteDropdown