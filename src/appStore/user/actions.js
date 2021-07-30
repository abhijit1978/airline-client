import { SET_USER } from "./action.types";

export const setUser = (data) => {
  return {
    type: SET_USER,
    payload: data,
  };
};
