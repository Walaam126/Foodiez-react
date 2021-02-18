import axios from "axios";
import instance from "./instance";

import * as types from "./types";

export const fetchIngredient = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/ingredient");
      dispatch({
        type: types.FETCH_INGREDIENT,
        payload: { ingredients: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createIngredient = (newIngredient) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newIngredient) formData.append(key, newIngredient[key]);
      //need to change it
      const res = await instance.post(`/category/${newIngredient.categoryId}/ingredients`, formData);
      dispatch({
        type: types.CREATE_INGREDIENT,
        payload: { newIngredient: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
