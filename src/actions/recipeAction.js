const addComment = (commentInput) => {
  return {
    type: "ADD_COMMENT",
    value: commentInput,
  };
};
const addRecipe = (recipeArray) => {
  return {
    type: "ADD_RECIPE",
    recipe: recipeArray,
  };
};

export { addComment, addRecipe };
