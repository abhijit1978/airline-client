import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import LocationsList from "../../common/locationsList";
import AirlinesList from "../../common/airlinesList";
import AllowToSale from "../../forms/allowToSale";
import Popup from "./../../common/popup";
import { API_HEADER, ticketsURL } from "../../../configs/app.config";

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);
  const [showPopup, togglePopup] = useState({
    state: false,
    selectedTicket: {},
  });
  const [searchParams, setSearchParams] = useState({ travelDate: "" });
  const getTickets = async () => {
    const payload = searchParams;
    try {
      const response = await axios.post(ticketsURL, payload, API_HEADER);
      setTickets(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTickets();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  const getLocation = (location) => {
    setSearchParams({ ...searchParams, location });
  };

  const getAirline = (airlineName) => {
    setSearchParams({ ...searchParams, airlineName });
  };

  const allowToSale = (ticket) => {
    const travelDt = new Date(ticket.travelDate);
    const today = new Date();

    if (today < travelDt) {
      return (
        <span
          className="pointer fcLightGreen"
          onClick={() =>
            togglePopup({
              ...showPopup,
              state: true,
              selectedTicket: ticket,
            })
          }
        >
          Allow Sale
        </span>
      );
    } else {
      return <span style={{ cursor: "not-allowed" }}>Ticket Expired</span>;
    }
  };

  return (
    <>
      <div className="full-widthtool-wrapper ticket-list-headig">
        <div className="inline relaive">
          <label>Travel Date</label>
          <input
            type="date"
            name="searchByTraveDate"
            id="searchByTraveDate"
            value={searchParams.travelDate}
            onChange={(e) =>
              setSearchParams({ ...searchParams, travelDate: e.target.value })
            }
          />
          <button
            className="resetDate"
            onClick={() => setSearchParams({ ...searchParams, travelDate: "" })}
          >
            <i className="bi bi-x-square"></i>
          </button>
        </div>
        <div className="inline">
          <LocationsList getLocation={getLocation} />
        </div>
        <div className="inline">
          <AirlinesList getAirline={getAirline} />
        </div>
      </div>

      <table className="colored">
        <thead>
          <tr>
            <th>Travel Date</th>
            <th>Location</th>
            <th>Airline</th>
            <th>PNR</th>
            <th>Flight# </th>
            <th>Dep Time</th>
            <th>Arr Time</th>
            <th>Pur Price</th>
            <th>Pur Date</th>
            <th>Pur Qty</th>
            <th>Booked Qty</th>
            <th>Qty In Hand</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={ticket._id}>
              <td className="text-center">
                {moment(ticket.travelDate).format("DD MMM, YYYY")}
              </td>
              <td className="text-center">{ticket.location}</td>
              <td className="text-center">{ticket.airlineName}</td>
              <td className="text-center">{ticket.pnr}</td>
              <td className="text-center">{ticket.flightNumber}</td>
              <td className="text-center">{ticket.departureTime}</td>
              <td className="text-center">{ticket.arrivalTime}</td>
              <td className="text-center">{ticket.purchasePrice}</td>
              <td className="text-center">
                {moment(ticket.datePurchased).format("DD MMM, YYYY")}
              </td>
              <td className="text-center">{ticket.ticketsQty}</td>
              <td className="text-center">{ticket.stock.booked}</td>
              <td className="text-center">{ticket.stock.inHand}</td>
              <td>{allowToSale(ticket)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup.state && (
        <Popup heading="Allow to sale" onTogglePopup={togglePopup}>
          <AllowToSale
            onTogglePopup={togglePopup}
            ticket={showPopup.selectedTicket}
          />
        </Popup>
      )}
    </>
  );
};

export default TicketsList;
