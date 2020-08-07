import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/recipeAction";
import axios from "axios";

class PopulateStore extends Component {
  componentDidMount() {
    axios
      .get(
        // The number=2 in the html link is returning us 2 results. If we want more results we just increase that number to what we want.
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=b2e430a5633148b4b33245f34e8e856e&number=2&addRecipeNutrition=false&addRecipeInformation=true&offset=120"
      )
      .then((res) => {
        this.props.dispatch(addRecipe(res.data.results));
      });
  }

  render() {
    return (
      <></>
      // This code is used to dig into the recipe global state props
      // First map gets us into the first array of the prop where our api result is stored
      // Second map iterates through all the recipes that are stored from the api result
      // <div>
      //   {this.props.recipe.map((recipe) =>
      //     recipe.map((indrecipe) => <p>{indrecipe.title}</p>)
      //   )}
      // </div>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(PopulateStore);
