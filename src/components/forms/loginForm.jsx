import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { setUser } from "./../../appStore";

const LoginForm = (props) => {
  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState({ email: "", password: "" });
  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const submitLogin = () => {
    const url = "http://localhost:5001/api/bfly/users/login/";
    const headers = { "Content-Type": "application/json" };
    axios
      .put(url, formValues, { headers })
      .then((response) => {
        props.onTogglePopup(false);
        dispatch(setUser(response.data.user));
        sessionStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((err) => {
        console.log();
        toggleErrorMessage({
          ...toggleErrorMessage,
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
