import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import { useDispatch } from "react-redux";
import LocationsList from "../../common/locationsList";
import { setBookingTicket } from "./../../../appStore";
import {
  API_HEADER,
  getSalableURL,
  baseURL,
} from "../../../configs/app.config";

const TicketSearch = ({ history }) => {
  const dispatch = useDispatch();
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
      setErrorMsg("");
      try {
        const response = await axios.post(
          getSalableURL,
          formValues,
          API_HEADER
        );
        const data = response.data.map((item) => {
          return { ...item, bookQty: 1 };
        });
        setTickets(data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getIcon = (name) => {
    const airline = airlines.find((item) => item.airlineName === name);
    return `${baseURL}${airline.airlineLogo}`;
  };

  const handleBookQtyChange = (qty, index) => {
    const data = tickets.map((item, indx) => {
      if (indx === index) {
        return { ...item, bookQty: qty };
      } else return item;
    });

    setTickets(data);
  };

  const handleBook = (ticket) => {
    if (ticket.bookQty > ticket.salable.qty) {
      return;
    } else {
      history.push({
        pathname: "/book-ticket",
        state: ticket,
      });
      dispatch(setBookingTicket(ticket));
    }
  };

  return (
    <div className="page-wrapper full-width">
      <section className="full-width booking-container">
        <p>Book Tickets</p>
        <div className="ticket-search tool-bar full-width text-center relaive">
          <div className="inline mr15">
            <LocationsList getLocation={getLocation} />
          </div>
          <div className="travel-date inline">
            <label htmlFor="">Travel Date: </label>{" "}
            <Datetime
              dateFormat="DD-MM-YYYY"
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
            className="primary inline book-ticket-btn hvr-bounce-to-bottom"
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
                <th colSpan="2">Book Ticket</th>
              </tr>
            </thead>
            <tbody>
              {tickets.length ? (
                tickets.map((ticket, index) => (
                  <tr key={ticket._id}>
                    <td className="text-center">
                      <img
                        src={getIcon(ticket.airlineName)}
                        alt={ticket.airlineName}
                      />
                      <span className="airline-name inline fsize15">
                        {ticket.airlineName}
                      </span>
                    </td>
                    <td className="text-center">
                      <span className="fsize26" style={{ paddingRight: "3px" }}>
                        {moment(ticket.travelDate).format("DD")}
                      </span>
                      <span className="fsize15">
                        {moment(ticket.travelDate).format("MMM' YYYY")}
                      </span>
                    </td>
                    <td className="text-center fsize15">
                      {ticket.departureTime}
                    </td>
                    <td className="text-center fsize15">
                      {ticket.arrivalTime}
                    </td>
                    <td className="text-center fsize15">
                      {ticket.salable.qty}
                    </td>
                    <td className="text-center fsize15">
                      {ticket.salable.salePrice}
                    </td>
                    <td className="text-center relaive">
                      <input
                        name="bookQty"
                        style={{ width: "50px" }}
                        type="number"
                        min="1"
                        max={ticket.salable.qty}
                        value={ticket.bookQty}
                        onChange={(e) =>
                          handleBookQtyChange(e.target.value, index)
                        }
                      />
                      {ticket.bookQty > ticket.salable.qty && (
                        <div className="qty-error-msg">
                          Can not book more than available stock
                        </div>
                      )}
                    </td>
                    <td className="text-center relaive">
                      <button
                        className={
                          ticket.bookQty > ticket.salable.qty
                            ? "primary disabled"
                            : "primary hvr-bounce-to-bottom"
                        }
                        style={{ marginTop: "0px" }}
                        onClick={() => handleBook(ticket)}
                      >
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

export default TicketSearch;
