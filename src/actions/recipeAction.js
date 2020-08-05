const addComment = (commentInput) => {
  return {
    type: "ADD_COMMENT",
    value: commentInput,
  };
};
const addRecipe = (recipeArray) => {
  return {
    type: "ADD_RECIPE",
    value: recipeArray,
  };
};

export { addComment };
