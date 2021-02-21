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
}

export default CategoryList;
