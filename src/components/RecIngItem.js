function RecIngItem(props) {
  const ingredient = props.ingredient;

  const handleCheckboxChange = (event) => {
    if (event.target.checked) {
      if (!props.recipe.ingredients.includes(event.target.value)) {
        props.setRecipe({
          ...props.recipe,
          ingredients: [...props.recipe.ingredients, event.target.value],
        });
        props.setNames([...props.ingNames, ingredient.name]);
      }
    } else {
      props.setRecipe({
        ...props.recipe,
        ingredients: props.recipe.ingredients.filter(
          (ingredient) => ingredient !== event.target.value
        ),
      });
      props.setNames(props.ingNames.filter((name) => name !== ingredient.name));
    }
  };
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="checkbox"
        value={`${ingredient.id}`}
        id={`flexCheckDefault${ingredient.slug}`}
        onChange={handleCheckboxChange}
      />
      <label
        className="form-check-label"
        htmlFor={`flexCheckDefault${ingredient.slug}`}
      >
        {ingredient.name}
      </label>
    </div>
  );
}

export default RecIngItem;
