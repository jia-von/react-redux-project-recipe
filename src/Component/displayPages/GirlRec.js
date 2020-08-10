//GirlRec.js component relaates to the Our Favourite Eats page on the website. 

import React from "react";
import food1 from "../../images/food1.jpg";
/* source https://www.bbcgoodfood.com/recipes/chorizo-mozzarella-gnocchi-bake*/
import food2 from "../../images/food2.jpg";
/* source https://www.delish.com/cooking/nutrition/g585/30-healthiest-foods/*/
import food3 from "../../images/food3.jpg";
/* source https://oursaltykitchen.com/paleo-turkey-meatballs-marinara/*/
import food4 from "../../images/food4.jpg";
/* source https://www.researchsnipers.com/37-of-pakistans-population-facing-food-crisis/*/
import food5 from "../../images/food5.jpg";
/* source https://sproutright.com/blogs/news/canadas-food-guide-2019*/
import food6 from "../../images/food6.jpg";
/* source https://www.industryglobalnews24.com/give-your-heart-some-love-with-vibrant-colorful-foods*/
import food7 from "../../images/food7.jpg";
/* source https://www.goodhousekeeping.com/food-recipes/g605/family-style-recipes/*/
import food8 from "../../images/food8.jpg";
/* source https://www.bbcgoodfood.com/recipes/chorizo-mozzarella-gnocchi-bake*/
import MainHeader from "../logic/MainHeader";
import "../../style/GirlRec.css";
import Footer from "../logic/Footer";


class GirlRec extends React.Component {
  render() {
    return (
      <div>
        <MainHeader titleHeader="Our Favorite Eats" />
        <div className="GirlRecContainer">
          <main>
            <h2>Bibu Eats</h2>
            <div className="imgBinder">
              <img src={food1} alt="Bibu's pick"></img>
              <img src={food2} alt="Bibu's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>
            <h2>Jia Eats</h2>
            <div className="imgBinder">
              <img src={food3} alt="Jia's pick"></img>
              <img src={food4} alt="Jia's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>
            <h2>Osase Eats</h2>
            <div className="imgBinder">
              <img src={food5} alt="Osase's pick"></img>
              <img src={food6} alt="Osase's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>
            <h2>Corinna Eats</h2>
            <div className="imgBinder">
              <img src={food7} alt="Corinna's pick"></img>
              <img src={food8} alt="Corinna's pick"></img>
            </div>
            <p>
              lorum This Project will use the "" API to populate recipes.
              Features: - Featured Recipe and gallery on main page - Search
              recipes - using recipe names or tags (eg. keto) - User sign in to
              see favorited recipes - This Project will use the "" API to
              populate recipes. Features: - Featured Recipe and gallery on main
              page - Search recipes -{" "}
            </p>
          </main>
        </div>
        <Footer />
      </div>
    );
  }
}
export default GirlRec;
