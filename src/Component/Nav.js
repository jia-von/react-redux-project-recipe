import "../style/App.css";
import React from "react";
import { Link, Router } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <Link to="/Home">
          <li>Home</li>
        </Link>
        <Link to="/MyGoodRecipes">
          <li>My Good Recipes</li>
        </Link>
        <Link to="/ContactUs">
          <li>Contact Us</li>
        </Link>
        <Link to="/AboutUs">
          <li>About Us</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
