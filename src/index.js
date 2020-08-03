import React from "react";
// import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./App";

render(
  <React.StrictMode>
    <Router>
      <Route path="/" component={App} exact />
      <Route path="/about_us" component={AboutUs} />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
