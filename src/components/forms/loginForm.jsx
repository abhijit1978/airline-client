import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginURL, API_HEADER } from "../../configs/app.config";

import { setUser } from "./../../appStore";

const LoginForm = ({ onTogglePopup, openSignup, openForgotPsw }) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const submitLogin = () => {
    axios
      .put(loginURL, formValues, API_HEADER)
      .then((response) => {
        onTogglePopup(false);
        //Set user data in Redux Store
        dispatch(setUser(response.data.user));
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((err) => {
        toggleErrorMessage({
          status: true,
          message: err.response.data,
        });
      });
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="form-wrapper login-form">
          <div className="full-width form-row">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formValues.email}
              onChange={(e) =>
                setFormValues({ ...formValues, email: e.target.value })
              }
              placeholder="Please enter registered email"
            />
          </div>
          <div className="full-width form-row">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formValues.password}
              onChange={(e) =>
                setFormValues({ ...formValues, password: e.target.value })
              }
              placeholder="Please enter password"
            />
          </div>
          {errorMessage && (
            <p className="login-error-message text-center">
              {errorMessage.message}
            </p>
          )}
          <div className="full-width text-center mt30">
            <button
              className="primary hvr-bounce-to-bottom"
              onClick={submitLogin}
            >
              Submit
            </button>
          </div>
        </div>
        <div className="login-form-right-content">
          <div className="full-width">
            <p className="text-center mb10">Not registered yet?</p>
            <p
              className="fcLightGreen pointer mt5 text-center"
              onClick={openSignup}
            >
              <span className="fsize18">
                <i className="bi bi-person-lines-fill pr5"></i> Register
              </span>
              <br />
              to become a partner
            </p>
          </div>
          <div className="full-width mt30">
            <p className="text-center">Forgot password?</p>
            <p
              className="fcLightGreen pointer mt5 text-center"
              onClick={openForgotPsw}
            >
              Generae new password
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
