import "../style/App.css";

import MainHeader from "./MainHeader";

import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <>
        <MainHeader titleHeader="Good Girls Eat" />
        <p>Body</p>
        <p>Footer</p>
        <p>Hamburger</p>
      </>
    );
  }
}
