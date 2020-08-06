import "../style/App.css";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import RecGallery from "./RecGallery";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <MainHeader titleHeader="Good Girls Eat" />

        <RecGallery recGallery="RecGallery" />

        <Footer />
      </>
    );
  }
}
