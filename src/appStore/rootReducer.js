import { combineReducers } from "redux";
import sampleReducer from "./sample/reducer";
import commonReducer from "./commom/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  sample: sampleReducer,
  common: commonReducer,
  user: userReducer,
});

export default rootReducer;
