import "../style/App.css";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import RecGallery from "./RecGallery";
import React, { Component } from "react";


const Home = () => {
  render();
  {
    return (
      <>
        <MainHeader titleHeader="Good Girls Eat" />

        <RecGallery recGallery="RecGallery"/>

        <Footer />
      </>

    );
  }
}
