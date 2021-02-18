import { List, Title } from "../styles";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import { Link } from "react-router-dom";
function CategoryList() {
  const loading = useSelector((state) => state.categoryReducer.loading);
  const categories = useSelector((state) => state.categoryReducer.categories);

  let categoriesList = categories.map((category) => (
    <CategoryItem category={category} key={category.id} />
  ));
  return (
    <div>
      <Title>Category List</Title>
      {loading ? <Loading /> : true}
      <List>
        {categoriesList}
        <Link to={`/categories/new`}>
          <button type="button" class="btn btn-primary">
            Add New
          </button>
        </Link>
      </List>
    </div>
  );
}

export default CategoryList;
