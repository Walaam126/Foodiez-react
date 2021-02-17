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
    case "DELETE_CATEGORY":
      const remainingCategories = state.categories.filter(
        (category) => category.id !== action.payload.categoryID
      );
      return {
        ...state,
        categories: remainingCategories,
      };
    case "CREATE_CATEGORY":
      const newCategory = action.payload.newCategory;
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    case "UPDATE_CATEGORY":
      const UpdatedCategories = state.categories.map((category) => {
        if (category.id === action.payload.updatedCategory.id)
          return action.payload.updatedCategory;
        else return category;
      });
      return {
        ...state,
        categories: UpdatedCategories,
      };
    default:
      return state;
  }
};

export default categoryReducer;
