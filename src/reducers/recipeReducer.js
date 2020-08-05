import { v4 as uuid } from "uuid";

const recipeReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      const newComment = {
        uniqueId: uuid(),
        value: action.value,
      };
      const newState = state.slice();
      newState.push(newComment);
      return newState;
    default:
      return state;
  }
};

export default recipeReducer;
