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
  //   recipeTitle = this.props.recipe;
  search = (event) => {
    event.preventDefault();
    console.log("Works");
    {
      this.props.recipe.map((recipe) =>
        recipe.map((indrecipe) =>
          indrecipe.title.indexOf(this.state.userSearch) != -1
            ? console.log(indrecipe.title)
            : console.log("not")
        )
      );
    }

    //this.props.dispatch(searchRecipe(this.state.userSearch));
    // const recipeArray = (this.props.recipes.map((recipe) => recipe.map((indrecipe) => indrecipe.title))
    // let newArray = [
    //   ...this.props.recipe.map((recipeArr) =>
    //     recipeArr.map((indrecipe) => indrecipe)
    //   ),
    // ];

    // console.log(typeof newArray);
    // newArray = newArray.filter(
    //   (title) =>
    //     title.toLowerCase().indexOf(this.userSearch.toLowerCase()) !== 1
    // );
    // console.log(recipeArray);
    // state = state.filter((toDo) => toDo.uniqueId !== action.value);
    this.updateItem("userSearch", "");
  };
  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const userInput = "kale";

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
