import { DetailWrapper, List } from "../styles";
import IngredientList from "./IngredientList";
import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function CategoryDetail() {
  const categories = useSelector((state) => state.categoryReducer.categories);
  const { categorySlug } = useParams();
  const category = categories.find(
    (_category) => _category.slug === categorySlug
  );
  if (!category) {
    return <Redirect to="/catgories" />;
  }
  return (
    <DetailWrapper>
      <h1>{category.name}</h1>
      <img src={category.image} alt="foodphoto" />
    </DetailWrapper>
  );
}

export default CategoryDetail;
