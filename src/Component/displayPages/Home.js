//Home.js component is the first page that users see when they get to our website. 
//fixed the <li class="food"> to <li className=""> - Jia
import MainHeader from "../logic/MainHeader";
import "../../style/Home.css"
import React from "react";
import Footer from "../logic/Footer";


class Home extends React.Component {
  render() {
    return (
      <div className="recGalleryContainer">
      <MainHeader titleHeader="Good Girls Eat"/>
        <p id="pHome">Welcome! This site is dedicated to our love for all things delicious. We love breakfast, lunch, and dinner, so here are a few good eats to get you started. Enjoy!</p> 
        <figure className="eggBenedictBreakfast"> {/*Start of Egg_Benedict_Breakfast @link: https://spoonacular.com/recipes/classic-eggs-benedict-639594*/}

          <div className="overlay"> {/*className overlay was created to replect the CSS where an overlay can be inserted @link: https://www.w3schools.com/howto/howto_css_overlay.asp*/}
          

          <ul className="recipeText">
            <li className="foodtitle">Classic Eggs Benedict on Avocado Toast</li>
            <li className="foodText">The key to this brunch classic is delicious simplicity: poached fresh eggs, Canadian bacon, toasted English muffins, and an authentic hollandaise sauce.</li>

          </ul>
          </div>
        </figure>{/*End of Egg_Benedict_Breakfast*/}

        <figure className="lunchSandwich"> {/*Start of Lunch_Sandwich @link: https://spoonacular.com/recipes/ham-and-swiss-panini-with-mushrooms-and-kale-646191*/}

        <div className="overlay">

          <ul>
            <li className="foodtitle">The Ultimate Good Girl Cheeseburger</li>
            <li className="foodText">Meat. Cheese. Bacon. What's not to love? </li>
          </ul>
          </div>
        </figure> {/*End of Lunch Sandwich*/}

        <figure className="dinnerStew"> {/*Start of Dinner_Stew @link: https://spoonacular.com/recipes/instant-pot-pressure-cooker-pot-roast-982375*/}
          <div className="overlay">

          <ul>
            <li className="foodtitle">Roasted Lamb & Butter Glazed Vegetables </li>
            <li className="foodText"> Slow-roasted lamb in an absolutely mouth-watering, creamy glaze! This is like the best dinner your mom ever made you, only better.</li>
          </ul>
          </div>
        </figure> {/*End of Dinner_Stew*/}
        <Footer />
      </div>
          );
          }
        }
export default (Home);
