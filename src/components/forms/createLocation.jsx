import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setLocations } from "../../appStore";

const CreateLocation = ({ onTogglePopup }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.common.locations);

  const [formValues, setFormValues] = useState({
    locationName: "",
    locationCode: "",
  });

  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const submitLogin = () => {
    const url = "http://localhost:5001/api/bfly/locations/";
    const headers = { "Content-Type": "application/json" };
    axios
      .post(url, formValues, { headers })
      .then((response) => {
        console.log(response);
        onTogglePopup(false);
        //Add new Airline in Redux Store
        dispatch(setLocations([...locations, response.data]));
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
            <label>Location Name</label>
            <input
              type="text"
              name="locationName"
              value={formValues.locationName}
              onChange={(e) =>
                setFormValues({ ...formValues, locationName: e.target.value })
              }
              placeholder="Location Name"
            />
          </div>
          <div className="full-width form-row">
            <label>Location Code</label>
            <input
              type="text"
              name="locationCode"
              value={formValues.locationCode}
              onChange={(e) =>
                setFormValues({ ...formValues, locationCode: e.target.value })
              }
              placeholder="Location Code"
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

export default CreateLocation;
