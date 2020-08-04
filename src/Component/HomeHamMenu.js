
import "../style/index.css";
import React from 'react';

// import Nav from './Component/Nav';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// import Calculator from './Component/ContactUs';
// import PastCalculations from './Component/FoodDetails';
// import Home from './Component/MyGoodRecipes';

class HomeHamMenu extends React.Component {



  myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  render() {
  return(
    <div className="mobile-container">
<h1>cssdsd</h1>
    <div className="topnav">
      <a href="#home" class="active">Logo</a>
      <div className="myLinks">
        <a href="#news">News</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
      </div>
      <a href="javascript:void(0);" className="icon" onclick="myFunction()">
        <i class="fa fa-bars"></i>
      </a>
    </div>
    </div>
  );
}
}
export default HomeHamMenu;



