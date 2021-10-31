import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Navigations from "./navigations";
import UserArea from "./userArea";

import { setUser } from "./../../appStore";

const AppHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      dispatch(setUser(JSON.parse(userData)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const limit = 100000;
  console.log(user.user);
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
      {user && user.userType === "Agent" && (
        <div className="agent-limit inline fsize13">
          Available Limit:
          <span className="fsize18"> {user.limit.toLocaleString("en-IN")}</span>
        </div>
      )}
      <UserArea />
    </header>
  );
};

export default AppHeader;
