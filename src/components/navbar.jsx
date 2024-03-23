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
          <Link to="/comingsoon">Coming Soon</Link>
        </li>
        <li>
          <Link to="/classics">Classics</Link>
        </li>
        <li>
          <Link to="/trending">Trending</Link>
        </li>
        <li>
          <Link to="/recommendations">Recommendations</Link>
        </li>
        <li>
          <Link to="/newreleases">New Releases</Link>
        </li>
        <li>
          <Link to="/updateMovie">Update Movies</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
