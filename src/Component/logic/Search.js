import { connect } from "react-redux";
import React, { Component } from "react";
import { searchRecipe } from "../../actions/recipeAction";
import "../../style/search.css";

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
    let newArray = [];
    console.log("Works");
    {
      this.props.recipe.map((recipe) =>
        recipe.map((indrecipe) =>
          indrecipe.title.indexOf(this.state.userSearch) != -1
            ? newArray.push(indrecipe)
            : console.log("not")
        )
      );
    }
    console.log(newArray);
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
        <p>Find your new favourite recipe!</p>
        <input
          type="text"
          name="userInput"
          id="userInput"
          placeholder="Search... "
          value={this.state.userSearch}
          onChange={(event) =>
            this.updateItem("userSearch", event.target.value)
          }
        />
        <input type="submit" id="submit"/>
      </form>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(Search);
