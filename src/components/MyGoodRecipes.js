import React from "react";
import "../style/App.css";
import axios from "axios";

class MyGoodRecipes extends React.Component {

  state = {
    foodDetails: [ ]
  }

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/posts')

    
    axios.get('https://api.edamam.com/search?q=chicken&app_id=243f16f9&app_key=819a5992ef814566f4860aaaf9edec40')
    .then(res => {
        console.log(res)
        this.setState( {
          foodDetails:res.data.hits
        })
      }
      )
  }
  render() {
   
    const {foodDetails}= this.state;
    const foodDetailsList = foodDetails.length ? (
      foodDetails.map(foodDetail => {
        return (
          //console.log(foodDetails)
         <>
        <div className="containerForMyGoodRecipes">
<figure>
          <div className="foodDetail" key="foodDetail.id">
           
            <div className="picture"><img src={foodDetail.recipe.image}/></div>
            </div>
            <figcaption>
            <div className="label">{foodDetail.recipe.label}</div>
            <div className="ingredientLines">Ingredients: {foodDetail.recipe.ingredientLines}</div>
            </figcaption>
            </figure>
            </div>
            </>
        )
      })
    ) : (
      <p>No Food Details Yet </p>
    )
    return (
      <>
{foodDetailsList}
      </>
    )
  }
}

export default MyGoodRecipes;
