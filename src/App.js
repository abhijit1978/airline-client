import React from "react";
import { Provider } from "react-redux";
import store from "./appStore/store";
import { BrowserRouter as Router } from "react-router-dom";

import AppHeader from "./components/appHeader/appHeader";
import Reoutes from "./components/common/routes";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <AppHeader />

          {/* <div className="container"> */}
          <Reoutes />
          {/* </div> */}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
