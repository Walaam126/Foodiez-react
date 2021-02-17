import { List } from "../styles";
import IngredientIem from "./IngredientIem";
import { useSelector } from "react-redux";
import Loading from "./Loading";
function IngredientList({ ingredients }) {
  const loading = useSelector((state) => state.ingredientReducer.loading);
  let ingredientsList = ingredients.map((ingredient) => (
    <IngredientIem ingredient={ingredient} key={ingredient.id} />
  ));
  return (
    <div>
      {loading ? <Loading /> : true}
      <List>{ingredientsList}</List>
    </div>
  );
}

export default IngredientList;
