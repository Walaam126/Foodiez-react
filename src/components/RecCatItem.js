import React from "react";
import { useSelector } from "react-redux";
import RecIngItem from "./RecIngItem";
const RecCatItem = (props) => {
  const category = props.category;
  const allingredients = useSelector(
    (state) => state.ingredientReducer.ingredients
  );

  let ingredients = [];
  let ingredientsList = [];
  if (category.ingredients.length > 0) {
    ingredients = category.ingredients.map((ingredient) =>
      allingredients.find((_ingredient) => _ingredient.id === ingredient.id)
    );
    ingredientsList = ingredients.map((ingredient) => {
      if (ingredient)
        return (
          <RecIngItem
            ingredient={ingredient}
            key={ingredient.id}
            setRecipe={props.setRecipe}
            recipe={props.recipe}
            ingNames={props.ingNames}
            setNames={props.setNames}
          />
        );
    });
  }

  return (
    <div
      className="accordion accordion-flush"
      id="accordionFlushExample"
      style={{ borderBottom: "1px solid #ced4da" }}
    >
      <div className="accordion-item">
        <h2 className="accordion-header" id={`flush-heading${category.slug}`}>
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${category.slug}`}
            aria-expanded="false"
            aria-controls={`flush-collapse${category.slug}`}
          >
            {category.name}
          </button>
        </h2>
        <div
          id={`flush-collapse${category.slug}`}
          className="accordion-collapse collapse"
          aria-labelledby={`flush-heading${category.slug}`}
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">
            {ingredientsList.length > 0 ? (
              ingredientsList
            ) : (
              <p>no ingredients available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecCatItem;
