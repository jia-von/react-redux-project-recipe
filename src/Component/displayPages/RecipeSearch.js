import React from "react";
import "../../style/MyGoodRecipe.css";
import MainHeader from "../logic/MainHeader";
import Footer from "../logic/Footer";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import Search from "../logic/Search";

class RecipeSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSearch: "",
      recipeList: [],
    };
  }

  search = (event) => {
    event.preventDefault();
    //console.log(this.state);
    // Create an empty Array to hold the recipes that get returned as having the search term in thier title
    let newArray = [];

    const userInput = event.target.value;

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
    this.setState({ recipeList: [newArray] });
    this.updateItem("userSearch", "");
  };
  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    // if searched state is empty? use this.props.recipe else use this.props.searched

    let recipes = this.state.recipeList
      ? this.state.recipeList
      : this.props.recipe;

    return (
      <div>
        <MainHeader titleHeader="Recipes" />
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
          <input type="submit" id="submit" />
        </form>

        {recipes.map((recipe) =>
          recipe.map((indrecipe) => (
            <>
              <h2>{indrecipe.title}</h2>
              <figure>
                <img src={indrecipe.image} alt="Food Recipe To See" />
                <figcaption>
                  <ul>
                    <li className="label">
                      {indrecipe.summary.replace(/(<([^>]+)>)/gi, "")}
                    </li>
                    <li>
                      <span className="topicHeader">Ingredients: </span>
                      <span className="topicP">
                        {indrecipe.analyzedInstructions.map(
                          (analyzedInstruction) =>
                            analyzedInstruction.steps.map((stepsInd) =>
                              stepsInd.ingredients.map((ingredient) => (
                                <>{ingredient.name} , </>
                              ))
                            )
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="topicHeader">Total Time: </span>
                      <span className="topicP">{indrecipe.totalTime}</span>
                    </li>
                    <li>
                      <span className="topicHeader">Influenced By: </span>
                      <span className="topicP">
                        <a
                          href={indrecipe.sourceUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          Click Here to check out their URL
                        </a>
                      </span>
                    </li>
                  </ul>
                </figcaption>
              </figure>
            </>
          ))
        )}
        <Footer />
      </div>
    );
  }
}
export default connect((state) => {
  return { recipe: state };
})(RecipeSearch);
