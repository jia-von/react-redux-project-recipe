import React, { Component } from "react";
import { connect } from "react-redux";
import { addRecipe } from "../../actions/recipeAction";
import axios from "axios";
import ourInfo from "../../Information";

class PopulateStore extends Component {
  componentDidMount() {

    //   axios
    //     .get(
    //       // The number=2 in the html link is returning us 2 results. If we want more results we just increase that number to what we want.
    //       "https://api.spoonacular.com/recipes/complexSearch?apiKey=c5413da4ad594941bce9e89fdadec43c&number=2&addRecipeNutrition=false&addRecipeInformation=true&offset=120"
    //     )
    //     .then((res) => {
    //       this.props.dispatch(addRecipe(res.data.results));
    //     });
    this.props.dispatch(addRecipe(ourInfo));

  }

  render() {
    // populate ();
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
