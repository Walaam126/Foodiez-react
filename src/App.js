import "./App.css";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import CategoryList from "./components/CategoryList";
import CategoryDetail from "./components/CategoryDetail";
import CategoryForm from "./components/CategoryForm";
import Navbar from "./components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={"/categories/new"}>
          <CategoryForm />
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
