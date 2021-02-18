import { DetailWrapper, List } from "../styles";
import IngredientList from "./IngredientList";
import { useParams, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CategoryDetail() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const allingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );
  const { categorySlug } = useParams();
  const category = categories.find(
    (_category) => _category.slug === categorySlug
  );

  if (!category) {
    return <Redirect to="/categories" />;
  }
  let ingredients = [];
  if (category.ingredients) {
    ingredients = category.ingredients.map((ingredient) =>
      allingredients.find((_ingredient) => _ingredient.id === ingredient.id)
    );
  }
  return (
    <>
      <DetailWrapper>
        <div className="">
          <h3 className="mt-5">{category.name}</h3>
          <Link
            to={{
              pathname: `/categories/${category.slug}/ingredient/add`,
              state: { categoryID: category.id },
            }}
          >
            {" "}
            <button className="btn btn-sm btn-primary mr-auto">
              Add Ingredient
            </button>
          </Link>
        </div>
      </DetailWrapper>
      {ingredients.length > 0 ? (
        <List>
          <IngredientList ingredients={ingredients} />
        </List>
      ) : (
        <List>No Ingredients yet</List>
      )}
    </>
  );
}

export default CategoryDetail;
