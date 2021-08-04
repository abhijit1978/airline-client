import { SET_LOCATIONS, SET_AIRLINES } from "./action.types";

const initialState = {
  locations: [],
  airlines: [],
};

const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOCATIONS:
      return {
        ...state,
        locations: action.payload,
      };
    case SET_AIRLINES:
      return {
        ...state,
        airlines: action.payload,
      };

    default:
      return state;
  }
};

export default commonReducer;
