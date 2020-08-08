import React from "react";
import "../../style/MyGoodRecipe.css";
import MainHeader from "../logic/MainHeader";
import Footer from "../logic/Footer";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";
import Search from "../logic/Search";

class MyGoodRecipes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <MainHeader titleHeader="My Good Recipes" />
        <Search />
        {this.props.recipe.map((recipe) =>
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
})(MyGoodRecipes);
