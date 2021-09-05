import React from "react";
import { useLocation } from "react-router-dom";
import FareSummary from "./fareSummary";
import PassengerContactInfo from "./passengerContactInfo";
import PassengerInfo from "./passengerInfo";

import takeoff from "../../../assets/images/takeoff.png";
import landing from "../../../assets/images/landing.png";

const BookTicket = () => {
  const location = useLocation();
  console.log(location.state);
  const { state } = { ...location };
  const getSource = () => {
    const loc = state.location.locationName;
    const sepaIndex = loc.indexOf("-");
    return loc.substr(0, sepaIndex);
  };
  const getDestination = () => {
    const loc = state.location.locationName;
    const sepaIndex = loc.indexOf("-");
    return loc.substr(sepaIndex + 2);
  };
  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <div className="col3_4 pr15">
          <h3>Travel Information</h3>
          <div className="travel-details mb30 full-width relaive">
            <div className="col6 text-center">
              <div className="img-wrapper">
                <img src={takeoff} style={{ marginTop: "16px" }} />
              </div>

              <p className="text-center pb15">
                <span className="fsize26 fcLightGreen">{getSource()}</span> at{" "}
                {state.departureTime}
              </p>
            </div>
            <div className="col6 text-center">
              <div className="img-wrapper">
                <img src={landing} />
              </div>
              <p className="text-center pb15">
                <span className="fsize26 fcLightGreen">{getDestination()}</span>{" "}
                at {state.arrivalTime}
              </p>
            </div>
            <div className="flight-name">
              <img src="../../../logo-AA.png" alt="" style={{ opacity: "1" }} />
              <strong>{state.airlineName}</strong> :{" "}
              <span className="fsize13">{state.flightNumber}</span>
            </div>
          </div>
          <h3>Passenger Information</h3>
          <div className="passenget-details">
            <PassengerInfo />
            <PassengerInfo />
            <PassengerInfo />
            <PassengerInfo />
          </div>
          <div className="contact-details">
            <PassengerContactInfo />
          </div>
        </div>
        <div className="col4 pl15">
          <h3>Fare Summary</h3>
          <FareSummary />
          <button className="primary book-ticket">Book Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
