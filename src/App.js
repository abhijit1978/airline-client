import React from "react";
import { Provider } from "react-redux";
import store from "./appStore/store";
import { BrowserRouter as Router } from "react-router-dom";

// import logo from "./logo.svg";
import SampleComponent from "./components/sampleComponent";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <h1>Hello world!!!</h1>
          <SampleComponent />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
