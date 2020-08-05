import { v4 as uuid } from "uuid";

const recipeReducer = (state = [], action) => {
  switch (action.type) {
    // case "ADD_COMMENT":
    //   const newComment = {
    //     uniqueId: uuid(),
    //     value: action.value,
    //   };
    //   const newState = state.slice();
    //   newState.push(newComment);
    //   return newState;
    case "ADD_RECIPE":
      console.log(action.value);
      const newRecipe = {
        recipe: action.value,
      };
      const newArray = state.slice();
      newArray.push(newRecipe);
      return newArray;

    default:
      return state;
  }
};

export default recipeReducer;
