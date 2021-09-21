import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className="app-header">
      <div className="logo-wrapper inline pointer">
        <Link to="/">Barkat Fly</Link>
      </div>
      <Navigations />
      <UserArea />
    </header>
  );
};

export default AppHeader;
