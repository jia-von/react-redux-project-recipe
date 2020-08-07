import React from "react";
import PropTypes from "prop-types";
import "./style/index.css";
import { createStore } from "redux";
import FoodDetails from "./Component/displayPages/FoodDetails";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "./Component/displayPages/Home";
import Nav from "./Component/logic/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUs from "./Component/displayPages/ContactUs";
import MyGoodRecipes from "./Component/displayPages/MyGoodRecipes";
import recipeReducer from "./reducers/recipeReducer";
import GirlRec from "./Component/displayPages/GirlRec";
import PopulateStore from "./Component/logic/PopulateStore";
import { addRecipe } from "./actions/recipeAction";
import RecipeSearch from "./Component/displayPages/RecipeSearch";

const store = createStore(recipeReducer);
store.subscribe(() => console.log(store.getState()));
const Root = (store) => (
  <Provider store={store.store}>
    <Router>
      <Nav />
      <PopulateStore />
      <Route path="/" exact component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/mygoodrecipes" component={MyGoodRecipes} />
      <Route path="/contactus" component={ContactUs} />

      <Route path="/recipes" component={RecipeSearch} />
      <Route path="/fooddetails" component={FoodDetails} />
      <Route path="/girlRec" component={GirlRec} />
    </Router>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

render(<Root store={store} />, document.getElementById("root"));
