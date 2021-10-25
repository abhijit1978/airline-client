import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

import { API_HEADER, bookedTicketsURL } from "../../../../configs/app.config";
import { useSelector } from "react-redux";

const MyTickets = ({ history }) => {
  const [tickets, setTickets] = useState([]);
  const user = useSelector((state) => state.user.user);
  const fetchData = async () => {
    const response = await axios.post(
      bookedTicketsURL,
      { agentId: user.id },
      API_HEADER
    );
    setTickets(response.data);
  };

  useEffect(() => {
    async function fetchBookedTickets() {
      await fetchData();
    }
    fetchBookedTickets();
  }, []);

  const showTicketDetails = (ticket) => {
    history.push({
      pathname: "/ticket-print",
      copyType: "Duplicate",
      data: ticket,
    });
  };

  return (
    <div className="page-wrapper full-width">
      <section className="full-width booking-container">
        <table className="booked-tickets-list colored" width="100%">
          <thead>
            <tr>
              <th colSpan="6">Travel Info</th>
              <th colSpan="7">Booking Info</th>
              <th>Actions</th>
            </tr>
            <tr>
              <th>PNR</th>
              <th>Location</th>
              <th>Date</th>
              <th>Time</th>
              <th>Airine</th>
              <th>Flight</th>
              <th>Tickets</th>
              <th>Rate</th>
              <th>Infant</th>
              <th>Other Charges</th>
              <th>Total</th>
              <th>Ticket ID</th>
              <th>Booked On</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {tickets.length &&
              tickets.map((ticket) => (
                <tr key={ticket._id}>
                  <td>{ticket.travel.pnr}</td>
                  <td>{ticket.travel.location.locationCode}</td>
                  <td className="text-right">
                    {moment(ticket.travel.travelDate).format("DD-MM-YYYY")}
                  </td>
                  <td className="text-right">
                    {ticket.travel.departureTime} - {ticket.travel.arrivalTime}
                  </td>
                  <td>{ticket.travel.airlineName}</td>
                  <td>{ticket.travel.flightNumber}</td>
                  <td className="text-right">{ticket.fareDetails.bookQty}</td>
                  <td className="text-right">{ticket.fareDetails.rate}</td>
                  <td className="text-right">
                    {ticket.fareDetails.infantCharges}
                  </td>
                  <td className="text-right">
                    {ticket.fareDetails.otherCharges}
                  </td>
                  <td className="text-right">{ticket.fareDetails.totalFare}</td>
                  <td>{ticket._id}</td>
                  <td className="text-right">
                    {moment(ticket.agent.bookingDate).format("DD-MM-YYYY")}
                  </td>
                  <td className="text-center">
                    <i
                      className="bi bi-arrows-fullscreen pointer"
                      onClick={() => showTicketDetails(ticket)}
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MyTickets;
