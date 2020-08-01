import React from "react";
// import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
// import { createStore } from "redux";
// import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { render } from "react-dom";
import AboutUs from "./components/AboutUs";

render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App} exact />
      <Route path="/about_us" component={AboutUs} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
