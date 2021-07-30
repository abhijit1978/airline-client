import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Popup from "../common/popup";
import LoginForm from "./loginForm";

import { showLoginForm } from "./../../appStore";

const UserArea = () => {
  const dispatch = useDispatch();
  const showPopup = useSelector((state) => state.popup.showPopup);
  const user = useSelector((state) => state.user.user);
  console.log("user ================> ", user);
  return (
    <>
      <div className="header-right-content">
        <div className="login">
          {!Object.keys(user).length ? (
            <span onClick={() => dispatch(showLoginForm())}>
              <i className="bi bi-box-arrow-in-right"></i>
              <span className="inline">Login</span>
            </span>
          ) : (
            <>
              Welcome <strong>{user.name.firstName}</strong>
            </>
          )}
        </div>
      </div>
      {showPopup && (
        <Popup heading="User Login">
          <LoginForm />
        </Popup>
      )}
    </>
  );
};

export default UserArea;
