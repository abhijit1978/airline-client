import React, { useState } from "react";
import axios from "axios";
import { API_HEADER, setLimitURL } from "../../configs/app.config";

const SetUserRole = ({ popup, onTogglePopup }) => {
  const [formValues, setFormValues] = useState({
    limit: 0,
    id: popup.userId,
  });
  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const handleSetLimit = () => {
    if (!formValues.limit) {
      return;
    }
    axios
      .put(setLimitURL, formValues, API_HEADER)
      .then(() => {
        onTogglePopup({
          ...popup,
          status: false,
          roleUpdate: true,
        });
      })
      .catch((err) => {
        toggleErrorMessage({
          ...toggleErrorMessage,
          status: true,
          message: err.response.data,
        });
      });
  };

  return (
    <>
      <div className="form-wrapper role-change-form">
        <div className="full-width form-row text-center">
          <label>Allow Limit</label>
          <input
            type="number"
            id="UserLimit"
            name="userLimit"
            value={formValues.limit}
            onChange={(e) =>
              setFormValues({ ...formValues, limit: e.target.value })
            }
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
            onClick={handleSetLimit}
          >
            Change Role
          </button>
        </div>
      </div>
    </>
  );
};

export default SetUserRole;
