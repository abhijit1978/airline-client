import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Navigations from "./navigations";
import UserArea from "./userArea";

import { setUser } from "./../../appStore";

const AppHeader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = sessionStorage.getItem("user");
    if (user) {
      dispatch(setUser(JSON.parse(user)));
    }
  }, []);

  return (
    <header className="app-header">
      <div className="logo-wrapper inline">Barkat Fly</div>
      <Navigations />
      <UserArea />
    </header>
  );
};

export default AppHeader;
