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
      const newArray = state.slice();
      newArray.push(action.value);
      return newArray;

    case "SEARCH_RECIPE":
      const searchedArray = state.slice();

      searchedArray.push(action.value);
      return searchedArray;

    default:
      return state;
  }
};

export default recipeReducer;
