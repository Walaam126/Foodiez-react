import "./App.css";
import { Route, Switch } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
import CategoryForm from "./components/CategoryForm";
import IngredientForm from "./components/IngredientForm";
import Navbar from "./components/Navbar";
import RecipeForm from "./components/RecipeForm";
import RecipeList from "./components/RecipeList";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/recipes/new"}>
          <RecipeForm />
        </Route>
        <Route path={"/recipes"}>
          <RecipeList />
        </Route>
        <Route path={"/categories/new"}>
          <CategoryForm />
        </Route>
        <Route path="/categories/:categorySlug/ingredient/add">
          <IngredientForm />
        </Route>
        <Route path="/categories/:categorySlug">
          <CategoryDetail />
        </Route>
        <Route path="/categories">
          <CategoryList />
        </Route>
        <Route exact path="/"></Route>
      </Switch>
    </>
  );
}

export default App;
