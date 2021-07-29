import { SAMPLE_ACTION_TYPE } from "./action.types";

const initialState = {
  sampleState: 10,
};

const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION_TYPE:
      return {
        ...state,
        sampleState: state.sampleState + action.payload,
      };

    default:
      return state;
  }
};

export default sampleReducer;
