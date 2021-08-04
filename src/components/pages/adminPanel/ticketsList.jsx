import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import LocationsList from "../../common/locationsList";
import AirlinesList from "../../common/airlinesList";

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);

  const [searchParams, setSearchParams] = useState({ travelDate: "" });
  const getTickets = async () => {
    const apiURL = "http://localhost:5001/api/bfly/tickets";
    const headers = { "Content-Type": "application/json" };
    const payload = searchParams;
    try {
      const response = await axios.post(apiURL, payload, {
        headers,
      });
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

  return (
    <>
      <div className="full-width ticket-list-headig">
        <p className="inline fsize18 ">Tickts List</p>
        <div className="tool-wrapper">
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
              onClick={() =>
                setSearchParams({ ...searchParams, travelDate: "" })
              }
            >
              <i class="bi bi-x-square"></i>
            </button>
          </div>
          <div className="inline">
            <LocationsList getLocation={getLocation} />
          </div>
          <div className="inline">
            <AirlinesList getAirline={getAirline} />
          </div>
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
            <th>Qty</th>
            <th>Purchase Price</th>
            <th>Agent Code</th>
            <th>Entry Date</th>
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
              <td className="text-center">{ticket.ticketsQty}</td>
              <td className="text-center">{ticket.purchasePrice}</td>
              <td className="text-center">{ticket.userId}</td>
              <td className="text-center">
                {moment(ticket.datePurchased).format("DD MMM, YYYY")}
              </td>
              <td className="fcLightGreen pointer">Allow Sale</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TicketsList;
