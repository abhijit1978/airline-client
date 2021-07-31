import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Popup from "../common/popup";
import LoginForm from "./../forms/loginForm";

import { showLoginForm, setUser } from "./../../appStore";

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
                <ul className="user-links">
                  {user.isLoggedIn && (
                    <li>
                      <i class="bi bi-file-earmark-bar-graph"></i>
                      <Link to="/book-ticket">Ticket Booking</Link>
                    </li>
                  )}
                  {user.isLoggedIn && user.userType === "Super Admin" && (
                    <li>
                      <i class="bi bi-bounding-box"></i>
                      <Link to="/admin-panel">Admin Dashboard</Link>
                    </li>
                  )}
                  <hr />
                  <li>
                    <i class="bi bi-card-heading"></i> Profile
                  </li>
                  <li>
                    <i class="bi bi-pencil-square"></i>Change Password
                  </li>
                  <hr />
                  <li onClick={() => dispatch(setUser({}))}>
                    <i class="bi bi-box-arrow-left"></i>Logout
                  </li>
                </ul>
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
