import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { API_HEADER, changePassUrl } from "../../configs/app.config";

const ChangePassword = () => {
  const user = useSelector((state) => state.user.user);
  const [formData, setFormData] = useState({
    oldPassword: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccss] = useState("");

  const validateData = () => {
    let isValid = true;
    for (let key in formData) {
      if (!formData[key]) {
        isValid = false;
        break;
      }
    }

    return isValid;
  };

  const handleChangePassword = () => {
    const isValid = validateData();
    if (!isValid) {
      setSuccss("");
      setError("All fields are mandetory!");
    } else if (formData.password !== formData.confirmPassword) {
      setSuccss("");
      setError("Passwor and Confirm Password did not match!");
    } else {
      const payload = {
        id: user.id,
        oldPassword: formData.oldPassword,
        password: formData.password,
      };
      axios
        .post(changePassUrl, payload, API_HEADER)
        .then(() => {
          setError("");
          setFormData({ oldPassword: "", password: "", confirmPassword: "" });
          setSuccss("Password updated successfully.");
        })
        .catch((err) => {
          setSuccss("");
          setError(err.response.data);
        });
    }
  };
  return (
    <>
      <div className="page-wrapper full-width">
        <div className="change-password">
          <div className="full-width form-row">
            <label>Current Password</label>
            <input
              type="password"
              id="OldPassword"
              name="oldPassword"
              value={formData.oldPassword}
              placeholder="Current Password"
              onChange={(e) =>
                setFormData({ ...formData, oldPassword: e.target.value })
              }
            />
          </div>
          <div className="full-width form-row">
            <label>New Password</label>
            <input
              type="password"
              id="Password"
              name="password"
              value={formData.password}
              placeholder="New Password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div className="full-width form-row">
            <label>Confirm Password</label>
            <input
              type="password"
              id="ConfirmPassword"
              name="ConfirmPassword"
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          {error && (
            <p className="login-error-message text-center">
              <i class="bi bi-x-octagon-fill fsize22 mr10"></i>
              {error}
            </p>
          )}
          {success && (
            <p className="success-message text-center fcLightGreen">
              <i className="bi bi-check2-square fsize22 mr10"></i> {success}
            </p>
          )}
          <div className="full-width text-center mt30">
            <button
              className="primary hvr-bounce-to-bottom"
              onClick={handleChangePassword}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
