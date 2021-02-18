const initialState = {
  categories: [],
  loading: true,
};
export const categoryReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case "FETCH_CATEGORY":
      state.loading = false;
      return {
        ...state,
        categories: action.payload.categories,
      };

    case "CREATE_CATEGORY":
      const newCategory = action.payload.newCategory;
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    case "CREATE_INGREDIENT":
      const ingredientsid = action.payload.newIngredient.id;
      const categoryId= action.payload.newIngredient.categoryId;
      console.log(categoryId)
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
