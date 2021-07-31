import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { showLoginForm, setUser } from "./../../appStore";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [showErrorMessage, toggleErrorMessage] = useState(false);

  const submitLogin = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5001/api/bfly/users/login/",
        formValues,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(showLoginForm());
      dispatch(setUser(response.data.user));
      sessionStorage.setItem("user", JSON.stringify(response.data.user));
    } catch (error) {
      toggleErrorMessage(!showErrorMessage);
    }
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
          {showErrorMessage && (
            <p className="login-error-message">
              Email or Passord did no match! Please try again.
            </p>
          )}
          <div className="full-width text-center mt15">
            <button className="primary" onClick={submitLogin}>
              Submit
            </button>
          </div>
        </div>
        <div className="login-form-right-content">
          <div className="full-width">
            <p>Not registered yet? Click</p>
            <p className="fcLightGreen pointer mt5">
              Register to become a partner
            </p>
          </div>
          <div className="full-width mt30">
            <p>Forgot password? Click</p>
            <p className="fcLightGreen pointer mt5">Generae new password</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
