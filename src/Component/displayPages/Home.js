import MainHeader from "../logic/MainHeader";
import "../../style/Home.css"
import {connect} from "react-redux";
import React from "react";
import Footer from "../logic/Footer";

class Home extends React.Component {
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
          <Footer />
      </div>
          );
          }
        }
export default connect((state) => {return {recipe: state};})(Home);
