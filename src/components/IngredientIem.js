import { ListItem } from "../styles";
import { Link } from "react-router-dom";
function IngredientIem({ ingredient }) {
  return (
    <ListItem>
      <Link to={`/categories`}>
        <img src={ingredient.image} alt="foodhoto" />
      </Link>
      <p>{ingredient.name}</p>
    </ListItem>
  );
}

export default IngredientIem;
