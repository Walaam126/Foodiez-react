import { List } from "../styles";
import IngredientIem from "./IngredientIem";

function IngredientList() {
  return (
    <div>
      <h2>Ingredient List</h2>
      <IngredientIem />
      <List>{""}</List>
    </div>
  );
}

export default IngredientList;
