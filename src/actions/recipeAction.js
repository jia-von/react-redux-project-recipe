/**
 Future Feature for adding comments to individual recipes

const addComment = (commentInput) => {
  return {
    type: "ADD_COMMENT",
    value: commentInput,
  };
};
*/
const addRecipes = (recipe) => {
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

export { addRecipes, searchRecipe };
