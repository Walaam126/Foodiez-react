import axios from "axios";
import instance from "./instance";

import * as types from "./types";

export const fetchCategory = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/category");
      dispatch({
        type: types.FETCH_CATEGORY,
        payload: { categories: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createCategory = (newCategory) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newCategory) formData.append(key, newCategory[key]);
      const res = await instance.post("/categories/", formData);
      dispatch({
        type: types.CREATE_CATEGORY,
        payload: { newCategory: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
