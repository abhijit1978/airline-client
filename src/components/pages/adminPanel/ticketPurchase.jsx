import React, { useState } from "react";
import Datetime from "react-datetime";
import moment from "moment";
import axios from "axios";

import AirlinesList from "./../../common/airlinesList";
import LocationsList from "./../../common/locationsList";
import { useSelector } from "react-redux";
import CreateAirline from "../../forms/createAirline";
import Popup from "../../common/popup";
import CreateLocation from "../../forms/createLocation";

import "react-datetime/css/react-datetime.css";

const TicketPurchase = () => {
  const user = useSelector((state) => state.user.user);

  const [showPopup, setShowPopup] = useState({
    state: false,
    popType: "",
  });

  const [formValues, setFormValues] = useState({
    userId: user.id,
    airlineName: "",
    flightNumber: "",
    location: "",
    travelDate: "",
    departureTime: "",
    arrivalTime: "",
    pnr: "",
    purchasePrice: "",
    ticketsQty: "",
  });
  const [message, toggleErrorMessage] = useState({
    success: false,
    error: false,
    errMessage: "",
  });
  const getLocation = (location) => {
    setFormValues({ ...formValues, location });
  };

  const getAirline = (airlineName) => {
    setFormValues({ ...formValues, airlineName });
  };

  const submitPurchase = async () => {
    let validate = 0;
    for (let key in formValues) {
      if (!formValues[key]) {
        validate += 1;
      }
    }
    if (!validate) {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/bfly/tickets/purchase",
          formValues,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        console.log(response);
        toggleErrorMessage({
          ...message,
          success: true,
          error: false,
          message: "",
        });
      } catch (error) {
        toggleErrorMessage({
          ...message,
          success: false,
          error: true,
          message: error.response.data,
        });
      }
    } else {
      toggleErrorMessage({
        ...message,
        success: false,
        error: true,
        message: "",
      });
    }
  };

  const getFormStyle = () => {
    let formStyle = {};
    if (message.success) formStyle = { background: "#dcffdc" };
    if (message.error) formStyle = { background: "#ffeaea" };
    return formStyle;
  };

  const togglePopup = () => {
    setShowPopup({ ...showPopup, state: false, popType: "" });
  };

  return (
    <>
      <div className="form-heading relative full-width">
        <div className="float-right">
          <span className="inline fcLightGreen pointer fsize13 mr15 mt5 ">
            <strong
              onClick={() =>
                setShowPopup({ ...showPopup, state: true, popType: "location" })
              }
            >
              Create Location
            </strong>
          </span>
          <span className="inline fcLightGreen pointer fsize13 mt5 ">
            <strong
              onClick={() =>
                setShowPopup({ ...showPopup, state: true, popType: "airline" })
              }
            >
              Create Airline
            </strong>
          </span>
        </div>
      </div>
      <div className="purchase-form" style={getFormStyle()}>
        <ul>
          <li className="full-width">
            <div className="flight-number col3 ">
              <label htmlFor="FlightNumber">FlightNumber</label>
              <input
                type="text"
                autoComplete="false"
                name="flightNumber"
                id="FlightNumber"
                placeholder="Alpha-Num, Limit 3-50 Chars"
                value={formValues.flightNumber}
                onChange={(e) =>
                  setFormValues({ ...formValues, flightNumber: e.target.value })
                }
              />
            </div>
            <div className="flight-number col3">
              <label htmlFor="PNR">PNR</label>
              <input
                autoComplete="false"
                type="text"
                name="pnr"
                id="PNR"
                placeholder="Alpha-Num, Limit 3-50 Chars"
                onChange={(e) =>
                  setFormValues({ ...formValues, pnr: e.target.value })
                }
              />
            </div>
          </li>
          <li className="full-width">
            <div className="airline-name col3">
              <AirlinesList getAirline={getAirline} />
            </div>
            <div className="location col3">
              <LocationsList getLocation={getLocation} />
            </div>
          </li>

          <li className="full-width">
            <div className="travel-date col3">
              <label htmlFor="">Travel Date</label>
              <Datetime
                dateFormat="YYYY-MM-DD"
                timeFormat={false}
                onChange={(value) =>
                  setFormValues({
                    ...formValues,
                    travelDate: moment(value).format("YYYY-MM-DD"),
                  })
                }
              />
            </div>
            <div className="derature-time col4">
              <label htmlFor="DepartureTime">Departure Time</label>
              <input
                type="time"
                name="departureTime"
                id="DepartureTime"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    departureTime: e.target.value,
                  })
                }
              />
            </div>
            <div className="arrival-time col4">
              <label htmlFor="ArrivalTime">Arrival Time</label>
              <input
                type="time"
                name="arrivalTime"
                id="ArrivalTime"
                onChange={(e) =>
                  setFormValues({ ...formValues, arrivalTime: e.target.value })
                }
              />
            </div>
          </li>

          <li className="full-width">
            <div className="purchase-price col3">
              <label htmlFor="PurchasePrice">Purchase Price</label>
              <input
                type="number"
                name="purchasePrice"
                id="PurchasePrice"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    purchasePrice: e.target.value,
                  })
                }
              />
            </div>
            <div className="purchase-quantity col3">
              <label htmlFor="Quantity">Quantity</label>
              <input
                type="number"
                name="quantity"
                id="Quantity"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    ticketsQty: e.target.value,
                  })
                }
              />
            </div>
          </li>
          <li>
            <div className="purchase-price col3"> &nbsp; </div>
            <button className="primary" onClick={submitPurchase}>
              Submit Purchase
            </button>
          </li>
          <li>
            {message.success && (
              <p className="fcDeepGreen">
                Ticket addedd successfully &#128512;
              </p>
            )}
            {message.error && (
              <p className="fcRed">
                {!message.message ? (
                  <span>
                    All fields are mendetory. Please fill all fields &#128549;
                  </span>
                ) : (
                  message.message
                )}
              </p>
            )}
          </li>
        </ul>
      </div>
      {showPopup.state && (
        <Popup heading="Allow to sale" onTogglePopup={togglePopup}>
          {showPopup.popType === "airline" && (
            <CreateAirline onTogglePopup={togglePopup} action="create" />
          )}
          {showPopup.popType === "location" && (
            <CreateLocation onTogglePopup={togglePopup} action="create" />
          )}
        </Popup>
      )}
    </>
  );
};

export default TicketPurchase;
