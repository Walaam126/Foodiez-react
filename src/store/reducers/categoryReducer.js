const initialState = {
  categories: [],
  loading: true,
};
export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CATEGORY":
      state.loading = false;
      return {
        ...state,
        categories: action.payload.categories,
      };

    case "CREATE_CATEGORY":
      let newCategory = action.payload.newCategory;
      newCategory = { ...newCategory, ingredients: [] };
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    case "CREATE_INGREDIENT":
      const ingredientsid = action.payload.newIngredient.id;
      const categoryId = action.payload.newIngredient.categoryId;
      state.categories.forEach((category) => {
        if (category.id === categoryId)
          category.ingredients.push({ id: ingredientsid });
      });
      return {
        ...state,
        categories: [...state.categories],
      };
    default:
      return state;
  }
};

export default categoryReducer;
