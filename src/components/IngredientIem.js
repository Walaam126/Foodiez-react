import { ListItem } from "../styles";
import { Link } from "react-router-dom";
function IngredientIem({ ingredient }) {
  return (
    <ListItem>
      <div class="card mx-3 mb-3 text-center" >
        <img src={ingredient.image} alt="foodhoto" />
        <div class="card-body p-1 "  >
        <h5 style={{padding:"0px"}} className="mt-2">{ingredient.name}</h5>
        </div>
      </div>
    </ListItem>
  );
}

export default IngredientIem;
