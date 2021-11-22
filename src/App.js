import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import AppHeader from "./components/appHeader/appHeader";
import Reoutes from "./components/common/routes";
import {
  locationsURL,
  airlinesURL,
  activeUserURL,
  API_HEADER,
} from "./configs/app.config";

import "./App.css";

import { setLocations, setAirlines, setUser } from "./appStore";

function App() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : "";
  const dispatch = useDispatch();

  const getAndUpdateUser = async () => {
    await axios
      .post(activeUserURL, { id: user.id }, API_HEADER)
      .then((response) => {
        dispatch(setUser(response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getLocations = async () => {
    try {
      const response = await axios.post(locationsURL, API_HEADER);
      dispatch(setLocations(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAirlines = async () => {
    try {
      const response = await axios.post(airlinesURL, API_HEADER);
      dispatch(setAirlines(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLocations();
    getAirlines();
    if (Object.keys(user).length) {
      getAndUpdateUser();
    }

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
