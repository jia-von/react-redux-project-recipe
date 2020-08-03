
// import "../style/App.css";
import React from 'react';
import Home from './Component/Home';
import Nav from './Component/Nav';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ContactUs from './Component/ContactUs';
import MyGoodRecipes from './Component/MyGoodRecipes';

function App() {
  return (
    <Router>
    <main className="container">
      <h1>Good Girls Eat</h1>
    <Nav />
    <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Home" component={Home} />
    <Route path="/MyGoodRecipes" component={MyGoodRecipes} />
    <Route path="/ContactUs" component={ContactUs} />
    </Switch>   
    </main>
    </Router>
  );
}
  export default App;
