import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

const TicketsList = () => {
  const [tickets, setTickets] = useState([]);
  const getTickets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/tickets",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setTickets(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getTickets();
  }, []);

  return (
    <>
      <p className="form-heading">Tickts List</p>
      <table className="colored">
        <thead>
          <tr>
            <th>Location</th>
            <th>Airline</th>
            <th>PNR</th>
            <th>Flight# </th>
            <th>Travel Date</th>
            <th>Dep Time</th>
            <th>Arr Time</th>
            <th>Qty</th>
            <th>Agent Code</th>
            <th>Entry Date</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, index) => (
            <tr key={ticket._id}>
              <td>{ticket.location}</td>
              <td>{ticket.airlineName}</td>
              <td>{ticket.pnr}</td>
              <td>{ticket.flightNumber}</td>
              <td>{moment(ticket.travelDate).format("DD MMM, YYYY")}</td>
              <td>{ticket.departureTime}</td>
              <td>{ticket.arrivalTime}</td>
              <td>{ticket.ticketsQty}</td>
              <td>{ticket.userId}</td>
              <td>{moment(ticket.datePurchased).format("DD MMM, YYYY")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TicketsList;
