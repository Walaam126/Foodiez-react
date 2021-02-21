import React from "react";
import { RecipeImg } from "../styles";
import { Link } from "react-router-dom";

const RecipeItem = ({ recipe }) => {
  return (
    <div
      class="card mx-3 mb-3 text-center"
      style={{ width: "17rem", padding: "0px" }}
    >
      <Link to={`/recipe/${recipe.slug}`}>
        <RecipeImg
          src={recipe.image}
          class="card-img-top"
          alt="recipeimg"
        />
      </Link>
      <div class="card-body">
        <h5 class="card-title">{recipe.name}</h5>
      </div>
    </div>
  );
};

export default RecipeItem;
