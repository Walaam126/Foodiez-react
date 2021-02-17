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
      const newCategory = action.payload.newCategory;
      return {
        ...state,
        categories: [...state.categories, newCategory],
      };
    default:
      return state;
  }
};

export default categoryReducer;
