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

      //  Reference for how to toggle boolean values
      // https://www.geeksforgeeks.org/how-to-toggle-a-boolean-using-javascript/#:~:text=A%20boolean%20value%20can%20be%20toggled%20in%20JavaScript,it%20on%20a%20false%20value%20would%20return%20true.

      array.map((recipes) =>
        recipes.map((recipe) =>
          recipe.id === id ? (recipe.favorites = !recipe.favorites) : null
        )
      );
      return array;

    case "SEARCH_RECIPE":
      //adds a searched array to the store using the results from a user title search or a individual recipe search

      const searchedArray = state.slice();
      searchedArray.push(action.value);
      return searchedArray;

    default:
      return state;
  }
};

export default recipeReducer;
