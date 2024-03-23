import {React, useEffect, useState } from "react";
import axios from 'axios';

function Search(){
    const [apiData, setApiData] = useState([]);

// \/ GET ALL FUNCTIONS BELOW \/ \\
  // Gets it all and gives it to ya.
  // axiosGetData should be used inside a useEffect
  // when being used for a component. Doesn't 
  // always have to though.
  const axiosGetAllData = async() => {
    await axios.get('http://localhost:9000/api')
    .then(res => {
      const returnedApiData = res.data;
      setApiData(returnedApiData);
    })
  }
  // ||   Should be used for the initial get all
  // \/ upon loading the display screen.
  useEffect(() => {
    axiosGetAllData();
  }, []);
  // /\ GET ALL FUNCTIONS ABOVE /\ \\
    return (
      <h1>Search...</h1>
        // <ul className="movies">
        //     {apiData.map(movie => (
        //         <li className="movie">
        //             <img src={`/images/coverart/${movie.cover}`} alt="cover"/>
        //             <div>
        //             <h3>{movie.title}</h3>
        //             <p>Director: {movie.director}</p>
        //             {/* <p>{`Starring: ${movie.actors}`}` </p> */}
        //             <p>Starring: {movie.actors.join(', ')}</p>
        //             <p>Genre: {movie.genre}</p>

        //             <p>Year: {movie.year}</p>
        //             </div>
        //         </li>
        //     ))}
        // </ul>
    )
}

export default Search