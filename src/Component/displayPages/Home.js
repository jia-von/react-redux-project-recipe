import MainHeader from "../logic/MainHeader";
import "../../style/Home.css"
import {connect} from "react-redux";
import React from "react";
import Footer from "../logic/Footer";


class Home extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <MainHeader titleHeader="Good Girls Eat"/>
        <h2>Are you ready to cook?</h2> 
        <figure className="eggBenedictBreakfast"> {/*Start of Egg_Benedict_Breakfast @link: https://spoonacular.com/recipes/classic-eggs-benedict-639594*/}

          <div className="overlay"> {/*className overlay was created to replect the CSS where an overlay can be inserted @link: https://www.w3schools.com/howto/howto_css_overlay.asp*/}
          
          {/* <img src={Egg_Benedict_Breakfast} id="Egg Benedict Breakfast"/> */}
          <ul className="recipeText">
            <li class="foodtitle">Classic Eggs Benedict on Avocado Toast</li>
            <li>The key to this brunch classic is delicious simplicity: poached fresh eggs, Canadian bacon, toasted English muffins, and an authentic hollandaise sauce.</li>
          </ul>
          </div>
        </figure>{/*End of Egg_Benedict_Breakfast*/}

        <figure className="lunchSandwich"> {/*Start of Lunch_Sandwich @link: https://spoonacular.com/recipes/ham-and-swiss-panini-with-mushrooms-and-kale-646191*/}

        <div className="overlay">
          {/* <img src={Lunch_Sandwich} id="Lunch Sandwich"/> */}
          <ul>
            <li class="foodtitle">The Ultimate Good Girl Cheeseburger</li>
            <li>Meat. Cheese. Bacon. What's not to love? </li>
          </ul>
          </div>
        </figure> {/*End of Lunch Sandwich*/}

        <figure className="dinnerStew"> {/*Start of Dinner_Stew @link: https://spoonacular.com/recipes/instant-pot-pressure-cooker-pot-roast-982375*/}
          <div className="overlay">
          {/* <img src={Dinner_Stew} id="Dinner Stew"/> */}
          <ul>
            <li class="foodtitle">Roasted Lamb & Butter Glazed Vegetables </li>
            <li> Slow-roasted lamb in an absolutely mouth-watering, creamy glaze! This is like the best dinner your mom ever made you, only better.</li>
          </ul>
          </div>
        </figure> {/*End of Dinner_Stew*/}
        <Footer />
      </div>
          );
          }
        }
export default connect((state) => {return {recipe: state};})(Home);
