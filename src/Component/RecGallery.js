import React from "react";
import food1 from "../images/food1.jpg";
import food2 from "../images/food2.jpg";
import food3 from "../images/food3.jpg";
import food4 from "../images/food4.jpg";
import food5 from "../images/food5.jpg";
import food6 from "../images/food6.jpg";
import food7 from "../images/food7.jpg";
import food8 from "../images/food8.jpg";


class RecGallery extends React.Component {
    
    render () {
        
        return (
            <div className="RecGallery">
            <h2>Are you ready to cook?</h2>
            <figure>
            <img src={food1} alt="RecGallery"></img>
            </figure>
            </div>
        );
    }
  }
  export default RecGallery;
  