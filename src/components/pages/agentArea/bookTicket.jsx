import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FareSummary from "./fareSummary";
import PassengerContactInfo from "./passengerContactInfo";
import PassengerInfo from "./passengerInfo";

import takeoff from "../../../assets/images/takeoff.png";
import landing from "../../../assets/images/landing.png";

const BookTicket = () => {
  const airlines = useSelector((state) => state.common.airlines);
  const location = useLocation();
  const { state } = { ...location };
  const [passengers, setPassenters] = useState(state.bookQty);
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

  const getIcon = (name) => {
    const airline = airlines.find((item) => item.airlineName === name);
    return `../../../../logo-${airline.alias}.png`;
  };

  const getPassengerInfo = () => {
    let passengersList = [];
    for (let p = 1; p <= passengers; p++) {
      passengersList.push(<PassengerInfo key={p} passId={p} />);
    }
    return passengersList;
  };

  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <div className="col3_4 pr15">
          <h3>Travel Information</h3>
          <div className="travel-details mb30 full-width relaive">
            <div className="col6 text-center">
              <div className="img-wrapper">
                <img
                  src={takeoff}
                  style={{ marginTop: "16px" }}
                  alt="takeoff"
                />
              </div>

              <p className="text-center pb15">
                <span className="fsize26 fcLightGreen">{getSource()}</span> at{" "}
                {state.departureTime}
              </p>
            </div>
            <div className="col6 text-center">
              <div className="img-wrapper">
                <img src={landing} alt="landing" />
              </div>
              <p className="text-center pb15">
                <span className="fsize26 fcLightGreen">{getDestination()}</span>{" "}
                at {state.arrivalTime}
              </p>
            </div>
            <div className="flight-name">
              <img
                src={getIcon(state.airlineName)}
                alt=""
                style={{ opacity: "1" }}
              />
              <strong>{state.airlineName}</strong> :{" "}
              <span className="fsize13">{state.flightNumber}</span>
            </div>
          </div>
          <h3>Passenger Information</h3>
          <div className="passenget-details">{getPassengerInfo()}</div>
          <div className="contact-details">
            <PassengerContactInfo />
          </div>
        </div>
        <div className="col4 pl15">
          <h3>Fare Summary</h3>
          <FareSummary ticket={state} onTicketsCountChange={setPassenters} />
          <button className="primary book-ticket">Book Ticket</button>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
