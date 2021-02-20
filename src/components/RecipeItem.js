import React from "react";
import { RecipeImg } from "../styles";
const RecipeItem = () => {
  return (
    <div class="card me-4 mb-4" style={{ width: "18rem" }}>
      <RecipeImg
        src="https://www.thedinnerbite.com/wp-content/uploads/2019/11/instant-pot-pressure-cooker-creamy-broccoli-soup-img-15.jpg"
        class="card-img-top"
        alt="recipeimg"
      />

      <div class="card-body">
        <h5 class="card-title">Brocolli soup</h5>
        <p class="card-text">water,brocolli</p>
      </div>
    </div>
  );
};

export default RecipeItem;
