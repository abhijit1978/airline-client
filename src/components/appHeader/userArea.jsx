import React, { useState } from "react";
import { useSelector } from "react-redux";

import Popup from "../common/popup";
import LoginForm from "./../forms/loginForm";
import UserLinks from "./usrLinks";

const UserArea = () => {
  const [showPopup, togglePopup] = useState(false);
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
            <span onClick={() => togglePopup(true)}>
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
        <Popup heading="User Login" onTogglePopup={togglePopup}>
          <LoginForm onTogglePopup={togglePopup} />
        </Popup>
      )}
    </>
  );
};

export default UserArea;
