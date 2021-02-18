import { List, Title } from "../styles";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { useState } from "react";
import { createCategory } from "../store/actions/categoryAction";
function CategoryForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [category, setCategory] = useState({
    name: "",
    image: "",
  });
  const handleChange = (event) =>
    setCategory({
      ...category,
      [event.target.name]: event.target.value,
    });
  const handleImage = (event) => {
    setCategory({ ...category, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createCategory(category));
    history.push("/categories");
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <Title>Category Form</Title>
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
                  value={category.name}
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

export default CategoryForm;
