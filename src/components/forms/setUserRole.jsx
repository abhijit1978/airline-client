import React, { useState } from "react";
import axios from "axios";

const SetUserRole = ({ popup, onTogglePopup }) => {
  const [formValues, setFormValues] = useState({
    type: "Agent",
    id: popup.userId,
  });
  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const changeUserRole = () => {
    if (!formValues.type) {
      return;
    }
    const url = "http://localhost:5001/api/bfly/users/role";
    const headers = { "Content-Type": "application/json" };
    axios
      .put(url, formValues, { headers })
      .then((response) => {
        console.log(response.data);
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
          <label>Select Role</label>
          <select
            value={formValues.type}
            name="userRole"
            id="UserRole"
            onChange={(e) =>
              setFormValues({ ...formValues, type: e.target.value })
            }
          >
            <option value="Agent">Agent</option>
            <option value="Super Admin">Super Admin</option>
          </select>
        </div>

        {errorMessage && (
          <p className="login-error-message text-center">
            {errorMessage.message}
          </p>
        )}
        <div className="full-width text-center mt30">
          <button
            className="primary hvr-bounce-to-bottom"
            onClick={changeUserRole}
          >
            Change Role
          </button>
        </div>
      </div>
    </>
  );
};

export default SetUserRole;
