import React from "react";
// import ReactDOM from "react-dom";
import "./style/index.css";
//import App from "./App";
import FoodDetails from "./Component/FoodDetails";
import GirlRec from './Component/GirlRec';
import { render } from "@testing-library/react";
import AboutUs from "./Component/AboutUs";
import Home from "./Component/Home";
import Nav from "./Component/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import MyGoodRecipes from "./Component/MyGoodRecipes";

render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mygoodrecipes" component={MyGoodRecipes} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/fooddetails" component={FoodDetails} />
        <Route path="/GirlRec" component={GirlRec} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
