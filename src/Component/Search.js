import axios from "axios";
import React, { Component } from "react";
import { connect } from "react-redux";
import MainHeader from "./MainHeader";

class Search extends Component {
  state = {
    results: [],
  };

  getResult = () => {
    axios
      .get("https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772")
      .then((response) => {
        const newArray = [];
        const indresults = response.data.meals[0];
        console.log(indresults);
        // indresults = indresults.filter((filtres) =>
        //   filtres.startsWith("strmeal")
        // );
        // console.log(typeof indresults);
        // const newitem = indresults.map((indvalue) => {
        newArray.push(indresults);
        this.setState({ results: newArray });
        //   console.log(indresults);
      });
    // return;
  };
  render() {
    return (
      <>
        <MainHeader titleHeader="Search" />
        <div>
          {/* {this.getResult()} */}
          {console.log(this.state.idMeal)}
        </div>
      </>
    );
  }
}

export default connect((state) => {
  return { recipe: state };
})(Search);

{
  /* <button
            onClick={() => {
              this.getResult();
            }}
          ></button> */
}
{
  /* <p>{this.props.recipe.map((indrecipe) => ({ indrecipe }))} </p> */
}
