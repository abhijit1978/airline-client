import { SAMPLE_ACTION_TYPE } from "./action.types";

export const sampleAction = (data) => {
  return {
    type: SAMPLE_ACTION_TYPE,
    payload: data,
  };
};
