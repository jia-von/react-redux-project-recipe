import React from "react";
import "../style/MyGoodRecipe.css";
import axios from "axios";
import { createBrowserHistory } from 'history';
import { withRouter } from 'react-router';

import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import Footer from "./Footer";

class MyGoodRecipes extends React.Component {

  state = {
    foodDetails: []
  }

  foodDetail() {
  
    this.props.history.push("/FoodDetails");

  }

  componentDidMount() {
    axios.get('https://api.edamam.com/search?q=chicken&app_id=243f16f9&app_key=819a5992ef814566f4860aaaf9edec40')
      .then(res => {
        console.log(res)
        this.setState({
          foodDetails: res.data.hits
        })
      }
      )
  }
  render() {
    const { foodDetails } = this.state;
    const foodDetailsList = foodDetails.length ? (
      foodDetails.map((foodDetail) => {
        return (
          <figure>
<img src={foodDetail.recipe.image} alt="Food Recipe To See" />
            <figcaption>
              <ul>
                <li className="label">{foodDetail.recipe.label}</li>
                <li ><span className="topicHeader"> Ingredients:</span><span className="topicP"> {foodDetail.recipe.ingredientLines}</span></li>
                <li ><span className="topicHeader">Health Label: </span><span className="topicP">{foodDetail.recipe.healthLabels}</span></li>
                <li ><span className="topicHeader">Calories: </span><span className="topicP">{foodDetail.recipe.calories}</span></li>
                <li ><span className="topicHeader">Total Weight: </span><span className="topicP">{foodDetail.recipe.totalWeight}</span></li>
                <li ><span className="topicHeader">Total Time: </span><span className="topicP">{foodDetail.recipe.totalTime}</span></li>
                <li><span className="topicHeader">Influenced By: </span><span className="topicP"><a href={foodDetail.recipe.url} rel="noopener noreferrer" target="_blank">Click Here to check out their URL</a></span></li>
                <li  className="topics"><span className="topicHeader">Want to read more about this Food? </span><span className="topicP"> <button onClick= {this.foodDetail.bind(this)}>Click Here</button></span></li>
              </ul>
            </figcaption>
          </figure>
        )
      })
    ) : (
        <p>No Food Details Yet </p>
      )
    return (
      <>
        {foodDetailsList}
        <Footer />
      </>
    )
  }
}

export default MyGoodRecipes;
