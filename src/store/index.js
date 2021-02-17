import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { fetchCategory } from "./actions/categoryAction";
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

store.dispatch(fetchCategory());

export default store;
