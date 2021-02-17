const initialState = {
  ingredients: [],
  loading: true,
};
export const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INGREDIENT":
      state.loading = false;
      return {
        ...state,
        ingredients: action.payload.ingredients,
      };

    case "CREATE_INGREDIENT":
      const newIngredient = action.payload.newIngredient;
      return {
        ...state,
        ingredients: [...state.ingredients, newIngredient],
      };
    default:
      return state;
  }
};

export default ingredientReducer;
