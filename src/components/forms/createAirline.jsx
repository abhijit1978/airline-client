import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setAirlines } from "../../appStore";

const CreateAirline = ({ onTogglePopup }) => {
  const dispatch = useDispatch();
  const airlines = useSelector((state) => state.common.airlines);

  const [formValues, setFormValues] = useState({
    airlineName: "",
    airlineCode: "",
    alias: "",
  });

  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const submitLogin = () => {
    const url = "http://localhost:5001/api/bfly/airlines/";
    const headers = { "Content-Type": "application/json" };
    axios
      .post(url, formValues, { headers })
      .then((response) => {
        console.log(response);
        onTogglePopup(false);
        //Add new Airline in Redux Store
        dispatch(setAirlines([...airlines, response.data]));
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
        <div className="form-wrapper col3_4 allow-to-sale">
          <div className="full-width form-row">
            <label>Airline Name</label>
            <input
              type="text"
              name="airlineName"
              value={formValues.airlineName}
              onChange={(e) =>
                setFormValues({ ...formValues, airlineName: e.target.value })
              }
              placeholder="Airline Name"
            />
          </div>
          <div className="full-width form-row">
            <label>Airline Code</label>
            <input
              type="text"
              name="airlineCode"
              value={formValues.airlineCode}
              onChange={(e) =>
                setFormValues({ ...formValues, airlineCode: e.target.value })
              }
              placeholder="Airline Code"
            />
          </div>
          <div className="full-width form-row">
            <label>Alias</label>
            <input
              type="text"
              name="alias"
              value={formValues.alias}
              onChange={(e) =>
                setFormValues({ ...formValues, alias: e.target.value })
              }
              placeholder="Alias"
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
      </div>
    </>
  );
};

export default CreateAirline;
