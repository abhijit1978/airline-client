import { combineReducers } from "redux";
import sampleReducer from "./sample/reducer";
import commonReducer from "./commom/reducer";
import userReducer from "./user/reducer";
import bookingReducer from "./booking/reducers";

const rootReducer = combineReducers({
  sample: sampleReducer,
  common: commonReducer,
  user: userReducer,
  booking: bookingReducer,
});

export default rootReducer;
