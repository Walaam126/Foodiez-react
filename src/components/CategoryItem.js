import { ListItem } from "../styles";
import { Link } from "react-router-dom";
function CategoryItem({ category }) {
  return (
    <ListItem>
      <p>{category.name}</p>
      <Link to={`/categories/${category.slug}`}>
        <img src={category.image} alt="foodhoto" />
      </Link>
    </ListItem>
  );
}

export default CategoryItem;
