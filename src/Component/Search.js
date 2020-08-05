import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import MainHeader from "./MainHeader";

import React, { Component } from "react";

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
