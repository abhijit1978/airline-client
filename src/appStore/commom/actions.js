import { SET_LOCATIONS, SET_AIRLINES } from "./action.types";

export const setLocations = (data) => {
  return {
    type: SET_LOCATIONS,
    payload: data,
  };
};

export const setAirlines = (data) => {
  return {
    type: SET_AIRLINES,
    payload: data,
  };
};
