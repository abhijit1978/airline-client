import React, { useState } from "react";
import { useSelector } from "react-redux";

import Popup from "../common/popup";
import SignUpForm from "../forms/signUpForm";
import LoginForm from "./../forms/loginForm";
import ForgotPassword from "../forms/forgotPassword";
import UserLinks from "./usrLinks";

const UserArea = () => {
  const [showPopup, togglePopup] = useState(false);
  const user = useSelector((state) => state.user.user);

  const getInitial = () => {
    const { firstName, lastName } = { ...user.name };
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
  };

  const [showUserLinksList, toggleUserLinkList] = useState(false);
  const [loginForm, showLoginForm] = useState(false);
  const [signUpForm, showSignUpForm] = useState(false);
  const [forgotPsw, showForgotPsw] = useState(false);

  const handleLoginClick = () => {
    showLoginForm(true);
    togglePopup(true);
    showSignUpForm(false);
    showForgotPsw(false);
  };

  const handleForgotPsw = () => {
    showLoginForm(false);
    togglePopup(true);
    showSignUpForm(false);
    showForgotPsw(true);
  };

  const handleSignUpClick = () => {
    showLoginForm(false);
    showSignUpForm(true);
    togglePopup(true);
    showForgotPsw(false);
  };

  return (
    <>
      <div className="header-right-content">
        <div className="login">
          {!Object.keys(user).length ? (
            <span onClick={handleLoginClick}>
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
        <Popup
          heading={
            loginForm
              ? "User Login"
              : signUpForm
              ? "User Registration"
              : "Forgot Password"
          }
          onTogglePopup={togglePopup}
        >
          {loginForm && (
            <LoginForm
              onTogglePopup={togglePopup}
              openSignup={handleSignUpClick}
              openForgotPsw={handleForgotPsw}
            />
          )}
          {signUpForm && <SignUpForm onTogglePopup={togglePopup} />}
          {forgotPsw && <ForgotPassword onTogglePopup={togglePopup} />}
        </Popup>
      )}
    </>
  );
};

export default UserArea;
