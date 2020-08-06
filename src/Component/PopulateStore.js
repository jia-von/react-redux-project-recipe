import React, { Component } from "react";
import { connect } from "react-redux";
// import MainHeader from "./MainHeader";
import { addRecipe } from "../actions/recipeAction";
import axios from "axios";

class PopulateStore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    axios
      .get(
        "https://api.spoonacular.com/recipes/complexSearch?apiKey=c5413da4ad594941bce9e89fdadec43c&number=2&addRecipeNutrition=false&addRecipeInformation=true&offset=120"
      )
      .then((res) => {
        console.log(res.data.results);
        // const newres = res.data.results.map((one) => one);
        // console.log(newres);
        // const newnewres = newres.map((one) => one.title);
        // console.log(newnewres);
        this.props.dispatch(addRecipe(res.data.results));
        // console.log(this.props);
      });
  }

  render() {
    console.log(this.props.recipe);
    return (
      <div>
        {this.props.recipe.map((recipe) =>
          recipe.map((indrecipe) => <p>{indrecipe.title}</p>)
        )}
      </div>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(PopulateStore);
