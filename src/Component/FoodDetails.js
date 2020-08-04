import React from "react";
import "../style/FoodDetails.css";
class FoodDetails extends React.Component {
    goBack() {
        this.props.history.push("/MyGoodRecipes");
      }
render() 
{ 
        return (            
            <div>
            <button onClick= {this.goBack.bind(this)}>Click Here</button>
            <h1>Welcome to Food Details Page</h1>
            </div>
        );
    }
}
    export default FoodDetails;
