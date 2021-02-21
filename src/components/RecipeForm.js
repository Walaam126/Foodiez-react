import { Title } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import {createRecipe} from "../store/actions/recipeAction"
import RecCatList from "./RecCatList";
function RecipeForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState({
    name: "",
    image: "",
    description: "",
    ingredients: [],
  });
  const [ingNames, setNames] = useState([]);

  const handleChange = (event) =>
    setRecipe({
      ...recipe,
      [event.target.name]: event.target.value,
    });
  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(recipe.ingredients)
    dispatch(createRecipe(recipe));
    history.push("/recipes");
  };
  

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            {" "}
            <div className="mt-5 me-5">
              {" "}
              <RecCatList
                setRecipe={setRecipe}
                recipe={recipe}
                ingNames={ingNames}
                setNames={setNames}
              />
            </div>
          </div>
          <div className="col-6">
            <Title>New Recipe</Title>

            <br></br>

            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  Title
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="name"
                  aria-label="name"
                  aria-describedby="basic-addon1"
                  name="name"
                  onChange={handleChange}
                  value={recipe.name}
                />
              </div>

              <div className="input-group mb-3">
                <label className="input-group-text" htmlFor="inputGroupFile01">
                  Image
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  name="image"
                  onChange={handleImage}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Ingredients</span>
                <textarea
                  className="form-control"
                  aria-label="With textarea"
                  name="ingredients"
                  value={ingNames}
                  disabled
                ></textarea>
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="form4Example3">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                  name="description"
                  onChange={handleChange}
                  value={recipe.description}
                  style={{ height: "450px" }}
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block mb-4 float-end"
              >
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

export default RecipeForm;
