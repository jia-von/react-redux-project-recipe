//import React from "react";
import "../style/App.css";
import React, { Component } from 'react';
//import axios from "axios";

class App extends React.Component {
  constructor(props)
  {
    super(props);
    this.state= {
      items: [], 
      isLoaded:false,
    }
  }

  componentDidMount () {

    fetch('https://api.edamam.com/search?q=chicken&app_id=243f16f9&app_key=819a5992ef814566f4860aaaf9edec40')
    .then(res => res.json())
    .then(json => {
      this.setState({
        isLoaded:true,
        items:json,
      })
   
    });
    
  }

  render()
  {
    var { isLoaded, items } = this.state;
    if(!isLoaded) {
      return <div>Loading ....</div>
    }
    else {

      return (
        <ul>
           {items.map( item => 
             <li>{item.hits.recipe.label}</li>
           )}
         </ul>
        
          );
    }
}}

export default App;
