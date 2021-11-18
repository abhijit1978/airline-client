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
  console.log(user);
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
          Cr Limit:
          <strong className="fsize15 mr10 fcDeepGreen">
            {" "}
            {user.limit.toLocaleString("en-IN")}
          </strong>
          Due:
          <strong className="fsize15 mr10 fcDeepGreen">
            {" "}
            {user.balance ? user.balance.due.toLocaleString("en-IN") : 0}
          </strong>
          Balance:
          <strong className="fsize15 fcDeepGreen">
            {" "}
            {user.baance ? user.baance.balance.toLocaleString("en-IN") : 0}
          </strong>
        </div>
      )}
      <UserArea />
    </header>
  );
};

export default AppHeader;
