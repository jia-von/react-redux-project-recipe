import React from "react";
import "../../style/MyGoodRecipe.css";
import MainHeader from "../logic/MainHeader";
import Footer from "../logic/Footer";
import { connect } from "react-redux";
import { faHeart, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toggleFavorites } from "../../actions/recipeAction";
/*
CITATION: Aaron and Corinna debugged a search issue together. 
Aaron ended up writing 5 lines of code to fix one bug and make a suggestion about another bug.
Also I am Aaron. I wrote this citation. 
*/
//   * solid heart  <i class="fas fa-heart"></i>
//   * open heart <i class="far fa-heart"></i>

class MyGoodRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteRecipeArray: [],
    };
  }
  searchFavorites = () => {
    let userFavoriteArray = [];
    console.log("working");

    this.props.recipe.map((recipe) =>
      recipe.map((indrecipe) =>
        indrecipe.favorites ? userFavoriteArray.push(indrecipe) : null
      )
    );
    return userFavoriteArray;
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
        <MainHeader titleHeader="Favorited Recipes" />

        {/*
    Render of results of favorites
 */}
        <h3>You will see recipes that you favorite here</h3>
        {/* {this.searchFavorites()} */}
        {this.searchFavorites() ? (
          this.searchFavorites().map((indrecipe) => (
            <>
              <h2>{indrecipe.title}</h2>
              <i
                className="fas fa-heart"
                onClick={() => this.toggleFavorite(indrecipe.id)}
              >
                {indrecipe.favorites ? (
                  <FontAwesomeIcon icon={faHeart} />
                ) : (
                  <FontAwesomeIcon icon={faHamburger} />
                )}{" "}
              </i>
              <figure>
                <img
                  src={indrecipe.image ? indrecipe.image : ""}
                  alt="Food Recipe To See"
                />
                <figcaption>
                  <ul>
                    <li className="label">
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
                                  <>
                                    {ingredient.name ? (
                                      ingredient.name
                                    ) : (
                                      <>Not available</>
                                    )}
                                    ,{" "}
                                  </>
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
            </>
          ))
        ) : (
          <>
            (<h2>" No Favorited recipes yet"</h2>)
          </>
        )}

        <Footer />
      </div>
    );
  }
}
export default connect((state) => {
  return { recipe: state };
})(MyGoodRecipes);
