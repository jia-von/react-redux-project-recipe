import { connect } from "react-redux";
import React, { Component } from "react";
import { searchRecipe } from "../../actions/recipeAction";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: "",
    };
  }

  search = (event) => {
    event.preventDefault();
    console.log(this.state);
    // Create an empty Array to hold the recipes that get returned as having the search term in thier title
    let newArray = [];

    // Search through the store with the results from the API searching for titles with the searched text
    // Push the entire recipe to the Array if it matches
    {
      this.props.recipe.map((recipe) =>
        recipe.map((indrecipe) =>
          indrecipe.title
            .toLowerCase()
            .indexOf(this.state.userSearch.toLowerCase()) !== -1
            ? newArray.push(indrecipe)
            : null
        )
      );
    }

    // Dispatch the newArray using search action to create a store result for returned arrays for display on RecipeSearch Page
    this.props.dispatch(searchRecipe(newArray));
    //this.props.dispatch(searchRecipe(this.state.userSearch));
    // const recipeArray = (this.props.recipes.map((recipe) => recipe.map((indrecipe) => indrecipe.title))
    // let newArray = [
    //   ...this.props.recipe.map((recipeArr) =>
    //     recipeArr.map((indrecipe) => indrecipe)
    //   ),
    // ];
    // Clear the search bar once the search is complete
    this.updateItem("userSearch", "");
  };
  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <form onSubmit={this.search}>
        <input
          type="text"
          name="userInput"
          id="userInput"
          value={this.state.userSearch}
          onChange={(event) =>
            this.updateItem("userSearch", event.target.value)
          }
        />
        <input type="submit" />
      </form>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(Search);
