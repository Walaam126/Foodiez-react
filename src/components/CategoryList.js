import { List } from "../styles";
import CategoryItem from "./CategoryItem";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function CategoryList() {
  console.log("categories page");
  const loading = useSelector((state) => state.categoryReducer.loading);
  const categories = useSelector((state) => state.categoryReducer.categories);

  let categoriesList = [];

  return (
    <div>
      <h2>Category List</h2>
      {loading ? (
        <p>loading True</p>
      ) : (
        categories.map((category) => (
          <CategoryItem category={category} key={category.id} />
        ))
      )}

      <List>{categoriesList}</List>
    </div>
  );
}

export default CategoryList;
