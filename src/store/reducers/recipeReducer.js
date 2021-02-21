const initialState = {
    recipe: [],
    loading: true,
  };
  export const recipeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "FETCH_RECIPE":
        state.loading = false;
        return {
          ...state,
          recipe: action.payload.recipe,
        };
      case "CREATE_RECIPE":
          console.log(action.payload.newRecipe)
        return {
          ...state,
          recipe: [...state.recipe, action.payload.newRecipe.newRecipe],
        };
      default:
        return state;
    }
  };
  
  export default recipeReducer;
  