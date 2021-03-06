import React from "react";
import "../../style/MyGoodRecipe.css";
import MainHeader from "../logic/MainHeader";
import Footer from "../logic/Footer";
import { connect } from "react-redux";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faOpenHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFavorites } from "../../actions/recipeAction";
import { v4 as uuid } from "uuid";
/*
CITATION: Aaron and Corinna debugged a search issue together. 
Aaron ended up writing 5 lines of code to fix one bug and make a suggestion about another bug.
Also I am Aaron. I wrote this citation. 
*/

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

    // Search through the store with the results from the API searching for titles with the searched text
    // Push the entire recipe to the Array if it matches
    let newArray = [];
    this.props.recipe.map((recipe) =>
      recipe.map((indrecipe) =>
        indrecipe.title
          .toLowerCase()
          .indexOf(this.state.userSearch.toLowerCase()) !== -1
          ? newArray.push(indrecipe)
          : null
      )
    );

    this.setState({ recipeList: [newArray] });
    this.updateItem("userSearch", "");
  };

  toggleFavorite(id) {
    this.props.dispatch(toggleFavorites(id));
  }

  updateItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <div>
        <MainHeader titleHeader="Search Recipes" />
        {/*  
        Form used to query the global storage of information
     */}

        <form className="searchForm" onSubmit={this.search}>
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

            // after you finish null checking your dirty data you can just run this search on submit AND change
            // onChange = {this.search}
          />
          <input type="submit" id="submit" value="Search" />
        </form>

        {/*
    Render of the results - or on default the entire list of recipes
 */}

        {this.state.recipeList.map((recipe) =>
          recipe.map((indrecipe) => (
            <div className="recipeCard" key={uuid()}>
              <h2>{indrecipe.title ? indrecipe.title : <>Not Available</>}</h2>

              <i
                className="fas fa-heart"
                onClick={() => this.toggleFavorite(indrecipe.id)}
              >
                {indrecipe.favorites ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={faOpenHeart} />
                )}{" "}
              </i>
              <figure>
                <img
                  src={indrecipe.image ? indrecipe.image : ""}
                  alt="Food Recipe To See"
                />
                <figcaption>
                  <ul>
                    <li>
                      {indrecipe.summary
                        ? indrecipe.summary.replace(/(<([^>]+)>)/gi, "")
                        : ""}
                    </li>
                    <li>
                      <span className="topicHeader">Ingredients: </span>
                      <span className="topicP">
                        {indrecipe.analyzedInstructions ? (
                          indrecipe.analyzedInstructions.map(
                            (analyzedInstruction) =>
                              analyzedInstruction.steps.map((stepsInd) =>
                                stepsInd.ingredients.map((ingredient) => (
                                  <div key={uuid()}>
                                    {ingredient.name ? (
                                      ingredient.name
                                    ) : (
                                      <>Not available</>
                                    )}
                                    , &nbsp;
                                  </div>
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
                          href={indrecipe.sourceUrl ? indrecipe.sourceUrl : ""}
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
            </div>
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
