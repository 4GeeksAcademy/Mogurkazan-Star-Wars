import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const Navbar = () => {
  const [isNavVisible, setNavVisible] = useState(false);

  const toggleNav = () => {
    setNavVisible(!isNavVisible);
  };

  return (
    <div>
      <div id="container">
        <div
          id="burger"
          className={isNavVisible ? "active" : ""}
          onClick={toggleNav}
        >
          <div className="bun top"></div>
          <div className="filling"></div>
          <div className="bun bottom"></div>
        </div>
      </div>

      <nav className={`${isNavVisible ? "show" : ""} sw-nav`}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li className="red">
            <Link to="/characters">Characters</Link>
          </li>
          <li className="orange">
            <Link to="/films">Films</Link>
          </li>
          <li className="yellow">
            <Link to="/species">Species</Link>
          </li>
          <li className="green">
            <Link to="/starships">Starships</Link>
          </li>
          <li className="blue">
            <Link to="/vehicles">Vehicles</Link>
          </li>
          <li className="purple">
            <Link to="/planets">Planets</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};