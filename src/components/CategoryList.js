import { List, Title } from "../styles";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import Loading from "./Loading";

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
      <List>{categoriesList}</List>
    </div>
  );
}

export default CategoryList;
