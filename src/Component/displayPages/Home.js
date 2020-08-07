import "../../style/App.css";
import Footer from "../logic/Footer";
import MainHeader from "../logic/MainHeader";
import RecGallery from "./RecGallery";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <RecGallery recGallery="RecGallery" />

        <Footer />
      </>
    );
  }
}
