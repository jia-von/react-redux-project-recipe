import "../style/App.css";
import React, { Component } from "react";
import MainHeader from "./MainHeader";
import { render } from "@testing-library/react";

import RecGallery from "./RecGallery";



const Home = () => {
  render();
  {
    return (
      <>
        <MainHeader titleHeader="Good Girls Eat" />

        <RecGallery recGallery="RecGallery"/>

      </>
    );
  }
};

export default Home;
