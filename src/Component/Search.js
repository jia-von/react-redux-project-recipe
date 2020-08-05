import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import MainHeader from "./MainHeader";

class Search extends Component {
  render() {
    return (
      <div>
        <MainHeader titleHeader="Search" />
      </div>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(Search);
