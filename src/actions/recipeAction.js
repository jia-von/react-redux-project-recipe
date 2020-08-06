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

export { addComment, addRecipe };
