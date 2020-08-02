import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
//import App from "./components/App";
import MyGoodRecipes from "./components/MyGoodRecipes";

ReactDOM.render(
  <React.StrictMode>

    <MyGoodRecipes />

  </React.StrictMode>,
  document.getElementById("root")
);
