import { createStore } from "redux";
// import { createStore, applyMiddleware } from "redux";

// import thunk from "redux-thunk";
// import logger from "redux-logger";

import rootReducer from "./rootReducer";

// const store = createStore(rootReducer, applyMiddleware(logger, thunk));
const store = createStore(rootReducer);

export default store;
