import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
export default function RecipeDetail() {
  const recipes = useSelector((state) => state.recipeReducer.recipe);
  const allIngredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  const { recipeSlug } = useParams();
  const recipe = recipes.find((_recipe) => _recipe.slug === recipeSlug);
  let recipeIngredients = [];
  if (recipe.ingredients.length !== 0) {
    recipeIngredients = recipe.ingredients.map((ingredient) =>
      allIngredients.find((_ingredient) => {
        if (_ingredient.id === ingredient.id) {
          return ingredient;
        }
      })
    );
  }
  if (!recipe) {
    return <Redirect to="/" />;
  }
  console.log(recipeIngredients);
  return (
    <div className="container">
      <div class="row">
        <div class="col-md-7">
          <h1 class="my-4">{recipe.name}</h1>
          <img class="img-fluid" src={recipe.image} alt="" />
          <h5 class="my-4">Ingredients</h5>
          <ul class="list-unstyled">
            {recipeIngredients.map((ing) => (
              <li>{ing.name}</li>
            ))}
          </ul>
        </div>
        <div class="col-md-5">
          <h3 class="my-4">Recipe Description</h3>
          <p>{recipe.description}</p>
        </div>
      </div>
    </div>
  );
}
