import React from "react";
import { useSelector } from "react-redux";
import { Categorylist } from "../styles";
import RecCatItem from "./RecCatItem";
const RecCatList = (props) => {
  const categories = useSelector((state) => state.categoryReducer.categories);
  let categoriesList = categories.map((category) => (
    <RecCatItem
      category={category}
      key={category.id}
      setRecipe={props.setRecipe}
      recipe={props.recipe}
      ingNames={props.ingNames}
      setNames={props.setNames}
    />
  ));

  return (
    <Categorylist
      className="accordion accordion-flush"
      id="accordionFlushExample"
      style={{
        backgroundColor: "#e5e5e5",
        marginTop: "130px",
        padding: "20px",
      }}
    >
      <h5>Food Category</h5>
      {categoriesList}
    </Categorylist>
  );
};

export default RecCatList;
