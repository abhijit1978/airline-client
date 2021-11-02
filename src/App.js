import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AppHeader from "./components/appHeader/appHeader";
import Reoutes from "./components/common/routes";
import { locationsURL, airlinesURL, API_HEADER } from "./configs/app.config";

import "./App.css";

import { setLocations, setAirlines } from "./appStore";

function App(props) {
  const dispatch = useDispatch();
  const getLocations = async () => {
    try {
      const response = await axios.get(locationsURL, API_HEADER);
      dispatch(setLocations(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAirlines = async () => {
    try {
      const response = await axios.get(airlinesURL, API_HEADER);
      dispatch(setAirlines(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getLocations();
    getAirlines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("props at appjs ========== ", props);
  return (
    <div className="App">
      <AppHeader />
      <Reoutes />
    </div>
  );
}

export default App;
