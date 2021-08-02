import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import LocationsList from "../common/locationsList";
import AirlinesList from "../common/airlinesList";

const TicketBooking = (props) => {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!Object.keys(user).length) {
      props.history.replace("/");
    }
  }, [user]);
  const getLocation = (location) => {
    console.log("New location", location);
  };

  const getAirline = (airline) => {
    console.log("New Airline", airline);
  };

  return (
    <div className="page-wrapper full-width">
      <section className="full-width booking-container">
        <p>Book Tickets</p>
        <div className="tool-bar full-width">
          <LocationsList getLocation={getLocation} />
          <AirlinesList getAirline={getAirline} />
          <div className="travel-date">
            <label htmlFor="">Travel Date: </label>{" "}
            <Datetime
              dateFormat="YYYY-MM-DD"
              timeFormat={false}
              onChange={(value) =>
                console.log(moment(value).format("YYYY-MM-DD"))
              }
            />
          </div>
        </div>
        <div className="ticket-list-container">
          <ul>
            <li>Ticket 1</li>
            <li>Ticket 1</li>
            <li>Ticket 1</li>
            <li>Ticket 1</li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TicketBooking;
