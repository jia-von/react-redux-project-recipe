const addComment = (commentInput) => {
  return {
    type: "ADD_COMMENT",
    value: commentInput,
  };
};
const addRecipe = (recipe) => {
  return {
    type: "ADD_RECIPE",
    value: recipe,
  };
};
const searchRecipe = (searched) => {
  return {
    type: "SEARCH_RECIPE",
    value: searched,
  };
};

export { addComment, addRecipe, searchRecipe };
