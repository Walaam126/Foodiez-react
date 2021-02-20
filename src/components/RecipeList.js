import React from "react";
import RecipeItem from "./RecipeItem";

const RecipeList = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <RecipeItem />
      </div>
    </div>
  );
};

export default RecipeList;
