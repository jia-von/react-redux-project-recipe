import "../style/App.css";

import MainHeader from "./MainHeader";

import RecGallery from "./RecGallery";

import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <>
          <MainHeader titleHeader="Good Girls Eat" />
          <RecGallery recGallery="RecGallery" />
        </>
      </div>
    );
  }
}

// const Home = () => {
//   render()
//   {
//     return (
//     );
//   }
// };

// export default Home;
