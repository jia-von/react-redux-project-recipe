import React, { Component } from "react";
import { connect } from "react-redux";
import MainHeader from "./MainHeader";
import { addRecipe } from "../actions/recipeAction";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // addRecipe([{ chicken: "chicken feet" }, { beef: "beef on a bun" }]);

  componentDidMount() {
    const newRecipe = { chicken: "chicken feet" };
    this.setState({ recipe: newRecipe });
    console.log(this.props.recipe);
    this.props.dispatch(addRecipe(this.state.recipe));
  }
  render() {
    return (
      <div>
        <MainHeader titleHeader="Search" />
      </div>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(Search);
