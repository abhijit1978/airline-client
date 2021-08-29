import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AppHeader from "./components/appHeader/appHeader";
import Reoutes from "./components/common/routes";

import "./App.css";

import { setLocations, setAirlines } from "./appStore";

function App() {
  const dispatch = useDispatch();
  const getLocations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/locations",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(setLocations(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAirlines = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/airlines",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
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

  return (
    <div className="App">
      <AppHeader />
      <Reoutes />
    </div>
  );
}

export default App;
