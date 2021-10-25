import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import Popup from "../../common/popup";
import ConfirmSaleForm from "../../forms/confirmSaleForm";

import { API_HEADER, bookedTicketsURL } from "../../../configs/app.config";

const BookedTicketsList = ({ history }) => {
  const [tickets, setTickets] = useState([]);
  const [showPopup, togglePopup] = useState({ status: false, data: {} });

  const fetchData = async () => {
    const response = await axios.post(bookedTicketsURL, API_HEADER);
    setTickets(response.data);
  };

  useEffect(() => {
    async function fetchBookedTickets() {
      await fetchData();
    }
    fetchBookedTickets();
  }, []);

  useEffect(() => {
    if ((showPopup.status === false) & (showPopup.data === "Sale confirmed.")) {
      async function fetchBookedTickets() {
        await fetchData();
      }
      fetchBookedTickets();
    }
  }, [showPopup.data]);

  const getTotal = (data) => {
    return (
      data.fareDetails.bookQty * data.fareDetails.rate +
      data.fareDetails.infantCharges
    );
  };

  const confirmSale = (ticket) => {
    togglePopup({ status: true, data: ticket });
  };

  const showTicketDetails = (ticket) => {
    history.push({
      pathname: "/ticket-print",
      copyType: "Duplicate",
      data: ticket,
    });
  };

  return (
    <>
      <div className="seach-params-container"></div>
      <table className="booked-tickets-list colored" width="100%">
        <thead>
          <tr>
            <th colSpan="6">Travel Info</th>
            <th colSpan="4">Booking Info</th>
            <th colSpan="4">Agent Info</th>
            <th colSpan="2">Actions</th>
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
            <th>Total</th>
            <th>Ticket ID</th>
            <th>Booked On</th>
            <th>Agent Name</th>
            <th>Agent ID</th>
            <th>Sale</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tickets.length &&
            tickets.map((ticket) => (
              <tr key={ticket._id}>
                <td>{ticket.travel.pnr}</td>
                <td>{ticket.travel.location.locationCode}</td>
                <td>{moment(ticket.travel.travelDate).format("DD-MM-YYYY")}</td>
                <td>
                  {ticket.travel.departureTime} - {ticket.travel.arrivalTime}
                </td>
                <td>{ticket.travel.airlineName}</td>
                <td>{ticket.travel.flightNumber}</td>
                <td>{ticket.fareDetails.bookQty}</td>
                <td>{ticket.fareDetails.rate}</td>
                <td>{ticket.fareDetails.infantCharges}</td>
                <td>{getTotal(ticket)}</td>
                <td>{ticket._id}</td>
                <td>{moment(ticket.agent.bookingDate).format("DD-MM-YYYY")}</td>
                <td>{ticket.agent.agentName.firstName}</td>
                <td>{ticket.agent.agentID}</td>
                <td>
                  {ticket.action.saleReff === "na" ? (
                    <span
                      className="pointer fcRed"
                      onClick={() => confirmSale(ticket)}
                    >
                      Pending
                    </span>
                  ) : (
                    ticket.action.saleReff
                  )}
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
      {showPopup.status && (
        <Popup heading="Confirm Sale" onTogglePopup={togglePopup}>
          <ConfirmSaleForm data={showPopup.data} onTogglePopup={togglePopup} />
        </Popup>
      )}
    </>
  );
};

export default BookedTicketsList;
