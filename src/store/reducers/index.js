import { combineReducers } from "redux";

import categoryReducer from "./categoryReducer";
import ingredientReducer from "./ingredientReducer";

const rootReducer = combineReducers({
  categoryReducer: categoryReducer,
  ingredientReducer: ingredientReducer,
});

export default rootReducer;
