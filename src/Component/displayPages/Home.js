import MainHeader from "../logic/MainHeader";
import "../../style/Home.css"
import {connect} from "react-redux";
import React from "react";
import Footer from "../logic/Footer";
import Egg_Benedict_Breakfast from "../../images/Egg_Benedict_Breakfast.jpg";
import Lunch_Sandwich from "../../images/Lunch_Sandwich.jpg";
import Dinner_Stew from "../../images/Dinner_Stew.jpg";

class Home extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <MainHeader titleHeader="Good Girls Eat"/>
        <h2>Are you ready to cook?</h2> 
        <figure className="eggBenedictBreakfast"> {/*Start of Egg_Benedict_Breakfast @link: https://spoonacular.com/recipes/classic-eggs-benedict-639594*/}

          <div className="overlay"> {/*className overlay was created to replect the CSS where an overlay can be inserted @link: https://www.w3schools.com/howto/howto_css_overlay.asp*/}
          
          <img src={Egg_Benedict_Breakfast} alt="Egg Benedict Breakfast"/>
          <ul className="recipeText">
            <li>Classic Eggs Benedict</li>
            <li>The key to this brunch classic is delicious simplicity: poached fresh eggs, Canadian bacon, toasted English muffins, and an authentic hollandaise sauce. Eggs Benedict can be intimidating for a first-timer, but it doesn’t need to be.</li>
          </ul>
          </div>
        </figure>{/*End of Egg_Benedict_Breakfast*/}

        <figure className="lunchSandwich"> {/*Start of Lunch_Sandwich @link: https://spoonacular.com/recipes/ham-and-swiss-panini-with-mushrooms-and-kale-646191*/}

        <div className="overlay">
          <img src={Lunch_Sandwich} alt="Lunch Sandwich"/>
          <ul>
            <li>Ham and Swiss Panini With Mushrooms and Kale</li>
            <li>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</li>
          </ul>
          </div>
        </figure> {/*End of Lunch Sandwich*/}

        <figure className="dinnerStew"> {/*Start of Dinner_Stew @link: https://spoonacular.com/recipes/instant-pot-pressure-cooker-pot-roast-982375*/}
          <div className="overlay">
          <img src={Dinner_Stew} alt="Dinner Roast"/>
          <ul>
            <li>Instant Pot Pressure Cooker Pot Roast</li>
            <li> Instant Pot Pressure Cooker Pot Roast Recipe is a lot like the recipe used in slow cooker, only better. Not only does it taste great, but it also shreds easily for leftover sliders or wraps. Not only that,it is a quick and easy this recipe is to make.</li>
          </ul>
          </div>
        </figure> {/*End of Dinner_Stew*/}
          <Footer />
      </div>
          );
          }
        }
export default connect((state) => {return {recipe: state};})(Home);
