import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchCategory } from "./actions/categoryAction";
import { fetchIngredient } from "./actions/ingredientAction";
import { fetchRecipe } from "./actions/recipeAction";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCategory());
store.dispatch(fetchIngredient());
store.dispatch(fetchRecipe());

export default store;
