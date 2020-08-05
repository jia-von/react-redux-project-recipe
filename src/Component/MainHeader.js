import React, { Component } from "react";

export default class MainHeader extends Component {
  render() {
    const titleHeader = this.props.titleHeader;
    return (
      <div className="bgHeader">
        <h1>{titleHeader}</h1>
      </div>

    );
  }
}
