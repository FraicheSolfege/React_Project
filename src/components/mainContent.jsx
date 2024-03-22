import {React, useEffect, useState } from "react";
import axios from 'axios';

function MainContent(){
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
        <ul className="movies">
            {apiData.map(movie => (
                <li className="movie">
                    <img src={`/images/coverart/${movie.cover}`} alt="cover"/>
                    <div>
                    <h3>{movie.title}</h3>
                    <p>Director: {movie.director}</p>
                    {/* <p>{`Starring: ${movie.actors}`}` </p> */}
                    <p>Starring: {movie.actors.join(', ')}</p>
                    <p>Genre: {movie.genre}</p>

                    <p>Year: {movie.year}</p>
                    </div>
                </li>
            ))}
        </ul>
        // <u1 className="movies">
        // <li className="movie"><img src="images/coverart/shawshank.jpg"alt="cover"/><div><h3>The Shawshank Redemption</h3>
        // <p>Director: Frank Darabont</p>
        // <p>Starring: Tim Robbins, Morgan Freeman, Bob Gunton</p>
        // <p>Genre: Drama</p>
        // <p>Year: 1994</p>
        // </div></li>
        // <li className="movie"><img src="images/coverart/godfather.jpg"alt="cover"/><div><h3>The Godfather</h3>
        // <p>Director: Francis Ford Coppola</p>
        // <p>Starring: Marlon Brando, Al Pacino, James Caan</p>
        // <p>Genre: Crime</p>
        // <p>Year: 1972</p>
        // </div></li>
        // <li className="movie"><img src="images/coverart/thedarkknight.jpg"alt="cover"/><div><h3>The Dark Knight</h3>
        // <p>Director: Christopher Nolan</p>
        // <p>Starring: Christian Bale, Heath Ledger, AAron Eckhart</p>
        // <p>Genre: Drama</p>
        // <p>Year: 2008</p>
        // </div></li>
        // <li className="movie"><img src="images/coverart/blankcover.jpg"alt="cover"/><div><h3>Blank</h3>
        // <p>Director: Blank Man</p>
        // <p>Starring: Blank, Blank, Blank</p>
        // <p>Genre: Horror</p>
        // <p>Year: 2024</p>
        // </div></li>
        // </u1>
    )
}

export default MainContent