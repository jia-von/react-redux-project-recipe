import React from "react";
import "../../style/MyGoodRecipe.css";
import MainHeader from "../logic/MainHeader";
import Footer from "../logic/Footer";
import { connect } from "react-redux";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFavorites } from "../../actions/recipeAction";

//   * solid heart  <i class="fas fa-heart"></i>
//   * open heart <i class="far fa-heart"></i>

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
  toggleFavorite(id) {
    const recipeTitle = id;
    console.log(recipeTitle);
    this.props.dispatch(toggleFavorites(recipeTitle));
  }
  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    // if recipeList state is empty use this.state.recipeList else use this.props.recipe

    let recipes =
      this.state.recipeList > 0 ? this.state.recipeList : this.props.recipe;

    return (
      <div>
        <MainHeader titleHeader="Recipes" />
        {/*  
        Form used to query the global storage of information
     */}

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

        {/*
    Render of the results - or on default the entire list of recipes
 */}

        {recipes.map((recipe) =>
          recipe.map((indrecipe) => (
            <>
              <h2>{indrecipe.title}</h2>
              <i
                className="fas fa-heart"
                onClick={() => this.toggleFavorite(indrecipe.id)}
              >
                {indrecipe.favorites ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} />
                )}{" "}
              </i>
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
                        {indrecipe.analyzedInstructions.length > 0 ? (
                          indrecipe.analyzedInstructions.map(
                            (analyzedInstruction) =>
                              analyzedInstruction.steps.map((stepsInd) =>
                                stepsInd.ingredients.map((ingredient) => (
                                  <>{ingredient.name}, </>
                                ))
                              )
                          )
                        ) : (
                          <>Not Avaialble</>
                        )}
                      </span>
                    </li>
                    <li>
                      <span className="topicHeader">Total Time: </span>
                      <span className="topicP">
                        {indrecipe.readyInMinutes ? (
                          <>{indrecipe.readyInMinutes} minutes</>
                        ) : (
                          <>Not Available</>
                        )}
                      </span>
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
