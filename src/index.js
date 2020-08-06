import React from "react";
import PropTypes from "prop-types";
import "./style/index.css";
import { createStore } from "redux";
import AboutUs from "./Component/AboutUs";
import FoodDetails from "./Component/FoodDetails";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import Home from "./Component/Home";
import Nav from "./Component/Nav";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import MyGoodRecipes from "./Component/MyGoodRecipes";
import Footer from "./Component/Footer";

import recipeReducer from "./reducers/recipeReducer";
import GirlRec from "./Component/GirlRec";
import PopulateStore from "./Component/PopulateStore";

const store = createStore(recipeReducer);

store.subscribe(() => console.log(store.getState()));
store.dispatch(PopulateStore);

const Root = (store) => (
  <Provider store={store.store}>
    <Router>
      <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/mygoodrecipes" component={MyGoodRecipes} />
        <Route path="/contactus" component={ContactUs} />
        <Route path="/aboutus" component={AboutUs} />
        <Route path="/fooddetails" component={FoodDetails} />
        <Route path="/footer" component={Footer} />
        <Route path="/girlrec" component={GirlRec} />

    </Router>
  </Provider>
);
Root.propTypes = {
  store: PropTypes.object.isRequired,
};

render(<Root store={store} />, document.getElementById("root"));
