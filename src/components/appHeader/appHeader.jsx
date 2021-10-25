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
  const limit = 100000;

  return (
    <header className="app-header">
      <div className="logo-wrapper inline pointer">
        <Link to="/">
          Barkat{" "}
          <span className="logo-part inline">
            <span className="tour">Tours &</span>
            <span className="travel">Travels</span>
          </span>
        </Link>
      </div>
      <Navigations />
      {
        <div className="agent-limit inline fsize13">
          Available Limit:
          <span className="fsize18"> {limit.toLocaleString("en-IN")}</span>
        </div>
      }
      <UserArea />
    </header>
  );
};

export default AppHeader;
