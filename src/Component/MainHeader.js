import React, { Component } from "react";

export default class MainHeader extends Component {
  render() {
    const titleHeader = this.props.titleHeader;
    return (
      <>
        <h1 className="bgHeader">{titleHeader}</h1>
      </>
    );
  }
}
