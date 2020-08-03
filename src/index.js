import React from "react";
// import ReactDOM from "react-dom";
import "./style/index.css";
//import App from "./App";
import AboutUs from "./Component/AboutUs";

import { render } from "@testing-library/react";
//import { Provider } from "react-redux";
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
        <Route path="/Home" component={Home} />
        <Route path="/MyGoodRecipes" component={MyGoodRecipes} />
        <Route path="/ContactUs" component={ContactUs} />
        <Route path="/AboutUs" component={AboutUs} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
