import React from "react";
import "../../style/MyGoodRecipe.css";
import MainHeader from "../logic/MainHeader";
import Footer from "../logic/Footer";
import { createBrowserHistory } from "history";
import { connect } from "react-redux";

class MyGoodRecipes extends React.Component {
  //constructor(props) {
    //super(props);
    //this.state = {};
  //}
  // foodDetail() {
  //   this.props.history.push("/FoodDetails");
  // }
  // var clean = DOMPurify.sanitize(dirty);
  render() {
    console.log(this.props.recipe);
    return (
      <div>
        <MainHeader titleHeader="My Good Recipes" />
        {this.props.recipe.map((recipe) =>
          recipe.map((indrecipe) => (
            <>
              <h2>{indrecipe.title}</h2>
              <figure>
                <img src={indrecipe.image} alt="Food Recipe To See" />
                <figcaption>
                  <ul>
                    <li className="label">{indrecipe.summary}</li>
                    {/* <li>
                    <span className="topicHeader"> Ingredients:</span>
                    <span className="topicP">
                      {" "}
        {indrecipe.analyzedInstructions.steps.map(step) => step.ingredients.map(ingredient) => <p>{ingredient.localizedName}</p>}
                    </span>
                  </li> */}
                    {/* <li>
                    <span className="topicHeader">Health Label: </span>
                    <span className="topicP">
                      {foodDetail.recipe.healthLabels}
                    </span>
                  </li>
                  <li>
                    <span className="topicHeader">Calories: </span>
                    <span className="topicP">{foodDetail.recipe.calories}</span>
                  </li>
                  <li>
                    <span className="topicHeader">Total Weight: </span>
                    <span className="topicP">
                      {foodDetail.recipe.totalWeight}
                    </span>
                  </li> */}
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
                    {/* <li className="topics">
                    <span className="topicHeader">
                      Want to read more about this Food?{" "}
                    </span>
                    <span className="topicP">
                      {" "}
                      <button onClick={this.foodDetail.bind(this)}>
                        Click Here
                      </button>
                    </span>
                  </li> */}
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
  // const { foodDetails } = this.state;
  // const foodDetailsList = foodDetails.length ? (
  //   foodDetails.map((foodDetail) => {
  //     return (
  //       <>
  //         <MainHeader titleHeader="My Good Recipes" />
  //         <figure>
  //           <img src={foodDetail.recipe.image} alt="Food Recipe To See" />
  //           <figcaption>
  //             <ul>
  //               <li className="label">{foodDetail.recipe.label}</li>
  //               <li>
  //                 <span className="topicHeader"> Ingredients:</span>
  //                 <span className="topicP">
  //                   {" "}
  //                   {foodDetail.recipe.ingredientLines}
  //                 </span>
  //               </li>
  //               <li>
  //                 <span className="topicHeader">Health Label: </span>
  //                 <span className="topicP">
  //                   {foodDetail.recipe.healthLabels}
  //                 </span>
  //               </li>
  //               <li>
  //                 <span className="topicHeader">Calories: </span>
  //                 <span className="topicP">{foodDetail.recipe.calories}</span>
  //               </li>
  //               <li>
  //                 <span className="topicHeader">Total Weight: </span>
  //                 <span className="topicP">
  //                   {foodDetail.recipe.totalWeight}
  //                 </span>
  //               </li>
  //               <li>
  //                 <span className="topicHeader">Total Time: </span>
  //                 <span className="topicP">
  //                   {foodDetail.recipe.totalTime}
  //                 </span>
  //               </li>
  //               <li>
  //                 <span className="topicHeader">Influenced By: </span>
  //                 <span className="topicP">
  //                   <a
  //                     href={foodDetail.recipe.url}
  //                     rel="noopener noreferrer"
  //                     target="_blank"
  //                   >
  //                     Click Here to check out their URL
  //                   </a>
  //                 </span>
  //               </li>
  //               <li className="topics">
  //                 <span className="topicHeader">
  //                   Want to read more about this Food?{" "}
  //                 </span>
  //                 <span className="topicP">
  //                   {" "}
  //                   <button onClick={this.foodDetail.bind(this)}>
  //                     Click Here
  //                   </button>
  //                 </span>
  //               </li>
  //             </ul>
  //           </figcaption>
  //         </figure>
  //       </>
  //     );
  //   })
  // ) : (
  //   <p>No Food Details Yet </p>
  // );
  // return <>{foodDetailsList}</>;
}
export default connect((state) => {
  return { recipe: state };
})(MyGoodRecipes);
