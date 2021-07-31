import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

import { showLoginForm, setUser } from "../../appStore";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const submitLogin = () => {
    const headers = { "Content-Type": "application/json" };

    axios
      .patch("http://localhost:5001/api/bfly/users/login/", formValues, {
        headers,
      })
      .then((response) => {
        dispatch(showLoginForm());
        dispatch(setUser(response.data.user));
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
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
      <div className="full-width text-center">
        <button className="primary" onClick={submitLogin}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
