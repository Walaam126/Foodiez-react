import React from "react";
import RecipeItem from "./RecipeItem";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { List, Title } from "../styles";
import Loading from "./Loading";
const RecipeList = () => {
  const recipe = useSelector((state) => state.recipeReducer.recipe);
  const loading = useSelector((state) => state.recipeReducer.loading);

  const recipeList = recipe.map((recipe) => <RecipeItem recipe={recipe} />);
  return (
    <div>
      <Title>Recipe List</Title>
      {loading ? <Loading /> : true}
      <List>
        {recipeList}
        <Link to={`/recipes/new`}>
          <img
            src="https://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-add-icon.png"
            alt="foodhoto"
            style={{ width: "200px", height: "160px" }}
            className="mb-5"
          />
        </Link>
      </List>
    </div>
  );
};

export default RecipeList;
