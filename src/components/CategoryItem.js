import { ListItem } from "../styles";
import { Link } from "react-router-dom";
function CategoryItem({ category }) {
  return (
    <ListItem>
      <Link to={`/categories/${category.slug}`}>
        <img src={category.image} alt="foodhoto" />
      </Link>
      <p>{category.name}</p>
    </ListItem>
  );
}

export default CategoryItem;
