import axios from "axios";
import instance from "./instance";

import * as types from "./types";

export const fetchRecipe = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/recipe");
      dispatch({
        type: types.FETCH_RECIPE,
        payload: { recipe: response.data },
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const createRecipe = (newRecipe) => {
  return async (dispatch) => {
    try {
      console.log(newRecipe)
      const formData = new FormData();
      for (const key in newRecipe) formData.append(key, newRecipe[key]);
      const res = await instance.post(`/recipe/`, formData);
      dispatch({
        type: types.CREATE_RECIPE,
        payload: { newRecipe: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
