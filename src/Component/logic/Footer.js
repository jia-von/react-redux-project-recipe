//This is the Footer.js component we is used in Home.js, Recipes.js, GirlRec.js, MyGoodRecipes.js, and ContactUs.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faSearch,
  faHamburger,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "../../style/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer">
    <Link to="/Home">
      <FontAwesomeIcon title="Home" icon={faHome} />
    </Link>
    <Link to="/GirlRec">
      <FontAwesomeIcon icon={faHamburger} />
    </Link>
    <Link to="/Recipes">
      <FontAwesomeIcon icon={faSearch} />
    </Link>
    <Link to="/MyGoodRecipes">
      <FontAwesomeIcon icon={faHeart} />
    </Link>
    <Link to="/ContactUs">
      <FontAwesomeIcon icon={faEnvelope} />
    </Link>
  </div>
);

export default Footer;
