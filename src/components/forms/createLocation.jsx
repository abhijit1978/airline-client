import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { setLocations } from "../../appStore";

const CreateLocation = ({ onTogglePopup, action, data }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.common.locations);

  const [formValues, setFormValues] = useState({
    locationName: data && data.locationName ? data.locationName : "",
    locationCode: data && data.locationCode ? data.locationCode : "",
  });

  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const create = () => {
    const url = "http://localhost:5001/api/bfly/locations/";
    const headers = { "Content-Type": "application/json" };
    axios
      .post(url, formValues, { headers })
      .then((response) => {
        onTogglePopup(false);
        dispatch(setLocations([...locations, response.data]));
      })
      .catch((err) => {
        toggleErrorMessage({
          ...toggleErrorMessage,
          status: true,
          message: err.response.data,
        });
      });
  };

  const update = () => {
    const finalData = Object.assign(data, formValues);
    const url = "http://localhost:5001/api/bfly/locations/";
    const headers = { "Content-Type": "application/json" };
    axios
      .put(url, finalData, { headers })
      .then((response) => {
        onTogglePopup({ state: false, locationData: {} });

        const updatedList = locations.map((item) => {
          if (item._id === response.data._id) return response.data;
          else return item;
        });
        dispatch(setLocations(updatedList));
      })
      .catch((err) => {
        toggleErrorMessage({
          ...toggleErrorMessage,
          status: true,
          message: err.response.data,
        });
      });
  };

  const submitForm = () => {
    if (action === "create") create();
    if (action === "edit") update();
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
            <button className="primary" onClick={submitForm}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLocation;
