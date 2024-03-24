import * as React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/form">Add Movie</Link>
        </li>
        <li>
          <Link to="/deletedropdown">Remove A Movie</Link>
        </li>
        <li>
          <Link to="/updateMovie">Update Movies</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
