import { combineReducers } from "redux";
import sampleReducer from "./sample/reducer";
import popupReducer from "./popup/reducer";
import userReducer from "./user/reducer";

const rootReducer = combineReducers({
  sample: sampleReducer,
  popup: popupReducer,
  user: userReducer,
});

export default rootReducer;
