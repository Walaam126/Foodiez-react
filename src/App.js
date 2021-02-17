import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
function App() {
  return (
    <Switch>
      <Route path="/categories/:categorySlug">
        <CategoryDetail />
      </Route>
      <Route path="/categories">
        <CategoryList />
      </Route>
      <Route exact path="/"></Route>
    </Switch>
  );
}

export default App;
