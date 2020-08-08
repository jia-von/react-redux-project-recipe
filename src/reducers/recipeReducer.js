import { v4 as uuid } from "uuid";

const recipeReducer = (state = [], action) => {
  switch (action.type) {
    // Potential feature to add comments to individual recipes. Not completed or working

    // case "ADD_COMMENT":
    //   const newComment = {
    //     uniqueId: uuid(),
    //     value: action.value,
    //   };
    //   const newState = state.slice();
    //   newState.push(newComment);
    //   return newState;
    case "ADD_RECIPES":
      // Used to populate the store with API data

      const newArray = state.slice();
      newArray.push(action.value);
      return newArray;

    case "TOGGLE_FAVORITE":
      // Used for user to be able to favorite recipes
      const id = action.value;
      const array = state.slice();

      {
        array.map((recipes) => recipes.map((recipe) => recipe.id)) === id
          ? recipe.favorites
          : null;
      }
      // console.log(action.value);
      return state;

    case "SEARCH_RECIPE":
      //adds a searched array to the store using the results from a user title search or a individual recipe search

      const searchedArray = state.slice();
      console.log(action.value);
      searchedArray.push(action.value);
      return searchedArray;

    default:
      return state;
  }
};

export default recipeReducer;
