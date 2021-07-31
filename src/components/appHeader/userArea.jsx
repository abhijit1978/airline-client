import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Popup from "../common/popup";
import LoginForm from "./../forms/loginForm";

import { showLoginForm } from "./../../appStore";
import UserLinks from "./usrLinks";

const UserArea = () => {
  const dispatch = useDispatch();

  const showPopup = useSelector((state) => state.popup.showPopup);
  const user = useSelector((state) => state.user.user);

  const getInitial = () => {
    const { firstName, lastName } = { ...user.name };
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const [showUserLinksList, toggleUserLinkList] = useState(false);

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
            <div className="loggedin-user">
              <span className="inline user-name">
                Welcome <strong>{user.name.firstName}</strong>
              </span>
              <div
                className="user-image"
                onClick={() => toggleUserLinkList(!showUserLinksList)}
              >
                {getInitial()}
              </div>
              {showUserLinksList && (
                <UserLinks
                  toggleUserLinkList={toggleUserLinkList}
                  user={user}
                />
              )}
            </div>
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
