import React from "react";
import {connect} from "react-redux";
import MainHeader from "../logic/MainHeader";
import "../../style/RecGallery.css"

class RecGallery extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
        <MainHeader titleHeader="Good Girls Eat" className="recGalleryHeader"/>
          <h2>Are you ready to cook?</h2> 
            {/*Start of the Recipe Gallery for the landing page*/}
            {this.props.recipe.map((recipe) => 
              recipe.map((indrecipe) => (
            
                <figure className="recGalleryFigure">
                    <img src={indrecipe.image}></img>
                    <ul>
                    <li>
                        {indrecipe.title} 
                      </li>
                      <li>
                        {indrecipe.summary} 
                      </li>
                    </ul>
                </figure>
            )))}
            {/*End of the Recipe Gallery for the landing page*/}
        </div>
            );
            }
          }
export default connect((state) => {return {recipe: state};})(RecGallery);
