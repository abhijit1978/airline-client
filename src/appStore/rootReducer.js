import { combineReducers } from "redux";
import sampleReducer from "./sample/reducer";

const rootReducer = combineReducers({
  sample: sampleReducer,
});

export default rootReducer;
