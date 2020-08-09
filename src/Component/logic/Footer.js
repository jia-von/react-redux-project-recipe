import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faHeart,
  faSearch,
  faHamburger,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { faSearch } from "@fortawesome/free-solid-svg-icons";
// import { faHamburger } from "@fortawesome/free-solid-svg-icons";
// import { faQuestion } from "@fortawesome/free-solid-svg-icons";
import "../../style/Footer.css";

const Footer = () => (
  <div className="footer">
    <Link to="/Home">
      <FontAwesomeIcon icon={faHome} />
    </Link>
    <Link to="/Recipes">
      <FontAwesomeIcon icon={faSearch} />
    </Link>
    <Link to="/GirlRec">
      <FontAwesomeIcon icon={faHamburger} />
    </Link>
    <Link to="/MyGoodRecipes">
      <FontAwesomeIcon icon={faHeart} />
    </Link>
    <Link to="/ContactUs">
      <FontAwesomeIcon icon={faQuestion} />
    </Link>
  </div>
);

export default Footer;

/**
 * home <i class="fas fa-home"></i>
 * search <i class="fas fa-search"></i>
 * solid heart  <i class="fas fa-heart"></i>
 * open heart <i class="far fa-heart"></i>
 * hamburger menu <i class="fas fa-bars"></i>
 * 
 * comment <i class="far fa-comment"></i>
 * thumbs up <i class="far fa-thumbs-up"></i>
 * thumbs down <i class="far fa-thumbs-down"></i>
 * email <i class="far fa-envelope"></i>

*/
