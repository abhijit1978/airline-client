import axios from "axios";
import React, { useState } from "react";
import { forgotPassUrl, API_HEADER } from "../../configs/app.config";

const ForgotPassword = () => {
  const [formValues, setFormValues] = useState({
    email: "",
    aadharNo: "",
    pan: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [newPsw, setNewPsw] = useState("");

  const validateForm = () => {
    let isValid = true;
    for (let key in formValues) {
      if (!formValues[key]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      axios.post(forgotPassUrl, formValues, API_HEADER).then((response) => {
        setErrorMessage(false);
        setNewPsw(response.data.psw);
      });
    } else {
      setNewPsw(false);
      setErrorMessage("All fields are mandetory.");
    }
  };

  return (
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
          <label>PAN</label>
          <input
            type="text"
            name="pan"
            value={formValues.pan}
            onChange={(e) =>
              setFormValues({ ...formValues, pan: e.target.value })
            }
            placeholder="Please PAN"
          />
        </div>
        <div className="full-width form-row">
          <label>Aadhar</label>
          <input
            type="text"
            name="aadhar"
            value={formValues.aadharNo}
            onChange={(e) =>
              setFormValues({ ...formValues, aadharNo: e.target.value })
            }
            placeholder="Please enter Aadhar Number"
          />
        </div>
        {errorMessage && (
          <p className="login-error-message text-center">{errorMessage}</p>
        )}

        <div className="full-width text-center mt30">
          <button
            className="primary hvr-bounce-to-bottom"
            onClick={handleSubmit}
          >
            Generate New Password
          </button>
        </div>
      </div>
      <div className="login-form-right-content">
        <div className="full-width">
          {newPsw && (
            <p className="text-center">
              Your temporary Password is:
              <br />
              <br />
              <strong>{newPsw}</strong>
              <br />
              <br />
              Please login with this password and change it from{" "}
              <span style={{ fontStyle: "italic" }}>"Change Password"</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
