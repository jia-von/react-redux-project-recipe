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
        "https://api.edamam.com/search?q=chicken&app_id=243f16f9&app_key=819a5992ef814566f4860aaaf9edec40"
      )
      .then((res) => {
        // console.log(res);
        this.props.dispatch(addRecipe(res.data.hits));
      });
    // console.log(this.props);
  }

  render() {
    return <div></div>;
  }
}

export default connect((state) => {
  return { recipe: state };
})(PopulateStore);
