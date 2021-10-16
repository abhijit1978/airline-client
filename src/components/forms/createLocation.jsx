import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { locationsURL, API_HEADER } from "../../configs/app.config";

import { setLocations } from "../../appStore";

const CreateLocation = ({ onTogglePopup, action, data }) => {
  const dispatch = useDispatch();
  const locations = useSelector((state) => state.common.locations);

  const [formValues, setFormValues] = useState({
    locationName: data && data.locationName ? data.locationName : "",
    locationCode: data && data.locationCode ? data.locationCode : "",
    srcAirportName: data && data.srcAirlineName ? data.srcAirlineName : "",
    destAirportName: data && data.destAirlineName ? data.destAirlineName : "",
  });

  const [errorMessage, toggleErrorMessage] = useState({
    status: false,
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    for (let key in formValues) {
      if (!formValues[key]) {
        isValid = false;
      }
    }
    return isValid;
  };

  const create = () => {
    if (!validateForm()) {
      toggleErrorMessage({
        status: true,
        message: "All fields are mandetory.",
      });
    } else {
      axios
        .post(locationsURL, formValues, API_HEADER)
        .then((response) => {
          onTogglePopup(false);
          dispatch(setLocations([...locations, response.data]));
        })
        .catch((err) => {
          toggleErrorMessage({
            status: true,
            message: err.response.data.message.name
              ? err.response.data.message.name
              : err.response.data.message,
          });
        });
    }
  };

  const update = () => {
    const finalData = Object.assign(data, formValues);
    axios
      .put(locationsURL, finalData, API_HEADER)
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
              disabled={action === "edit" ? true : false}
            />
          </div>
          <div className="full-width form-row">
            <label>Airport from</label>
            <input
              type="text"
              name="srcAirportName"
              value={formValues.srcAirportName}
              onChange={(e) =>
                setFormValues({ ...formValues, srcAirportName: e.target.value })
              }
              placeholder="Airport from"
            />
          </div>
          <div className="full-width form-row">
            <label>Airport to</label>
            <input
              type="text"
              name="destAirportName"
              value={formValues.destAirportName}
              onChange={(e) =>
                setFormValues({
                  ...formValues,
                  destAirportName: e.target.value,
                })
              }
              placeholder="Airport to"
            />
          </div>

          {errorMessage.status && (
            <p className="login-error-message text-center">
              {errorMessage.message}
            </p>
          )}
          <div className="full-width text-center mt30">
            <button
              className="primary hvr-bounce-to-bottom"
              onClick={submitForm}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateLocation;
