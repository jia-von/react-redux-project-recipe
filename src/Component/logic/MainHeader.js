/* This is the MainHeader commponent which are re-used Home.js, RecipeSearch.js, GirlRec.js, MyGoodRecipes.js, ContactUs.js*/

import React, { Component } from "react";

export default class MainHeader extends Component {
  render() {
    const titleHeader = this.props.titleHeader;
    return (
      <>
        <div className="bgHeader"></div>
        <h1>{titleHeader}</h1>
      </>
    );
  }
}
