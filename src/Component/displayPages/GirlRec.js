import React from "react";
import food2 from "../../images/food2.jpg";
import food3 from "../../images/food3.jpg";
import food4 from "../../images/food4.jpg";
import food1 from "../../images/food1.jpg";
import food5 from "../../images/food5.jpg";
import food6 from "../../images/food6.jpg";
import food7 from "../../images/food7.jpg";
import food8 from "../../images/food8.jpg";
import MainHeader from "../logic/MainHeader";
import "../../style/GirlRec.css";
import Footer from "../logic/Footer";
class GirlRec extends React.Component {
  render() {
    // const { authors } = this.state;
    return (
      <div>
        <MainHeader titleHeader="Our Favorite Eats" />
        <div className="GirlRecContainer">
          <main>
            <h2>Bibu's Pick</h2>
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
            <h2>Jia's Pick</h2>
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
            <h2>Osase's's Pick</h2>
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
            <h2>Corinna's Pick</h2>
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
