import { List, Title } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { createIngredient } from "../store/actions/ingredientAction";
function IngredientForm() {
  const history = useHistory();
  const dispatch = useDispatch();
    // const { categorySlug } = useParams();
    // const categories = useSelector((state) => state.categoryReducer.categories);
    // const category = categories.find(
    //   (_category) => _category.slug === categorySlug
    // );
  const [ingredient, setIngredient] = useState({
    name: "",
    image: "",
    description: "",
    categoryId: useLocation().state.categoryID,
  });
  const handleChange = (event) =>
    setIngredient({
      ...ingredient,
      [event.target.name]: event.target.value,
    });
  const handleImage = (event) => {
    setIngredient({ ...ingredient, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createIngredient(ingredient));
    history.push("/categories");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <Title>Ingredient Form</Title>
            <br></br>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">
                  Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                  value={ingredient.name}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">
                  Description
                </label>
                <textarea
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  name="description"
                  onChange={handleChange}
                  value={ingredient.description}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example2">
                  Image Link
                </label>
                <input
                  type="file"
                  id="form4Example2"
                  className="form-control"
                  name="image"
                  onChange={handleImage}
                />
              </div>

              <button type="submit" className="btn btn-primary btn-block mb-4">
                Add
              </button>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
}

export default IngredientForm;
