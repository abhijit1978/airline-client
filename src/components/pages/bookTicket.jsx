import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import LocationsList from "../common/locationsList";

const TicketBooking = ({ history }) => {
  const user = useSelector((state) => state.user.user);
  const airlines = useSelector((state) => state.common.airlines);

  useEffect(() => {
    if (!Object.keys(user).length) {
      history.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);
  const [tickets, setTickets] = useState([]);
  const [formValues, setFormValues] = useState({});
  const [errorMsg, setErrorMsg] = useState("");

  const getLocation = (location) => {
    setFormValues({ ...formValues, locationCode: location });
  };

  const handleTicketSearch = async () => {
    if (!formValues.locationCode) {
      setErrorMsg("Loation is Mandetory.");
    } else {
      try {
        const response = await axios.post(
          "http://localhost:5001/api/bfly/tickets/getsalable",
          formValues,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setTickets(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getIcon = (name) => {
    const airline = airlines.find((item) => item.airlineName === name);
    return `../../../logo-${airline.alias}.png`;
  };

  return (
    <div className="page-wrapper full-width">
      <section className="full-width booking-container">
        <p>Book Tickets</p>
        <div className="ticket-search tool-bar full-width text-center">
          <div className="inline mr15">
            <LocationsList getLocation={getLocation} />
          </div>
          <div className="travel-date inline">
            <label htmlFor="">Travel Date: </label>{" "}
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
          <button
            className="primary inline book-ticket-btn"
            style={{ margin: "0 0 0 15px" }}
            onClick={handleTicketSearch}
          >
            <i className="bi bi-search"></i> Search Tickets
          </button>
          {errorMsg && <div className="search-error-msg">{errorMsg}</div>}
        </div>
        <div className="ticket-list-container">
          <table className="colored ticket-booking-list">
            <thead>
              <tr>
                <th>Airline</th>
                <th>Travel Date</th>
                <th>Departure</th>
                <th>Arrival</th>
                <th>Qty Avl</th>
                <th>Price</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {tickets.length ? (
                tickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td className="text-center">
                      <img src={getIcon(ticket.airlineName)} />
                      <span className="airline-name inline">
                        {ticket.airlineName}
                      </span>
                    </td>
                    <td className="text-center">
                      {moment(ticket.travelDate).format("DD MMM, YYYY")}
                    </td>
                    <td className="text-center">{ticket.departureTime}</td>
                    <td className="text-center">{ticket.arrivalTime}</td>
                    <td className="text-center">{ticket.salable.qty}</td>
                    <td className="text-center">{ticket.salable.salePrice}</td>
                    <td className="text-center">
                      <button className="primary" style={{ marginTop: "0px" }}>
                        Book Now
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center">
                    Sorry, No tickets found. Plese select differet options.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default TicketBooking;
