import React, { useState } from "react";
import axios from "axios";
import moment from "moment";
import { ticketEditURL, API_HEADER } from "../../configs/app.config";
import "react-datetime/css/react-datetime.css";

const EditTicket = ({ onUpdateTicket, ticket }) => {
  const [formValues, setFormValues] = useState({
    _id: ticket._id,
    pnr: ticket.pnr,
    departureTime: ticket.departureTime,
    arrivalTime: ticket.arrivalTime,
    flightNumber: ticket.flightNumber,
  });

  const submitForm = () => {
    axios
      .put(ticketEditURL, formValues, API_HEADER)
      .then(() => {
        onUpdateTicket(true);
      })
      .catch((err) => {
        onUpdateTicket(false);
        console.log("Some error .....", err);
      });
  };

  return (
    <div className="edit-ticket">
      <div className="fsize13 full-width" style={{ marginBottom: "15px" }}>
        <div className="col3 mb10">
          <div className="info-inner">
            Locaion: <i className="pl5 fcLightGreen">{ticket.location}</i>
          </div>
        </div>
        <div className="col3 mb10">
          <div className="info-inner">
            Airline: <i className="pl5 fcLightGreen">{ticket.airlineName}</i>
          </div>
        </div>
        <div className="col3 mb10">
          <div className="info-inner">
            PNR: <i className="pl5 fcLightGreen">{ticket.pnr}</i>
          </div>
        </div>
        <div className="col3 mb10">
          <div className="info-inner">
            Flight#: <i className="pl5 fcLightGreen">{ticket.flightNumber}</i>
          </div>
        </div>
        <div className="col3 mb10">
          <div className="info-inner">
            Travel Date:
            <i className="pl5 fcLightGreen">
              {moment(ticket.travelDate).format("DD MMM, YY")}
            </i>
          </div>
        </div>
        <div className="col3 mb10">
          <div className="info-inner">
            Pur Price:
            <i className="pl5 fcLightGreen">{ticket.purchasePrice}</i>
          </div>
        </div>
      </div>
      <div className="full-width form-row mt15">
        <div className="col6 relaive pr5 overflow-datatime">
          <label
            className="inline fsize13 mr10"
            style={{ verticalAlign: "middle" }}
          >
            Departure Time
          </label>
          <input
            type="time"
            value={formValues.departureTime}
            name="departureTime"
            id="DepartureTime"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                departureTime: e.target.value,
              })
            }
          />
        </div>
        <div className="col6 relaive pl5 overflow-datatime">
          <label
            className="inline fsize13 mr10"
            style={{ verticalAlign: "middle" }}
          >
            Arrival Time
          </label>
          <input
            type="time"
            value={formValues.arrivalTime}
            name="arrivalTime"
            id="ArrivalTime"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                arrivalTime: e.target.value,
              })
            }
          />
        </div>
      </div>
      <div className="full-width form-row">
        <div className="col6 relaive pr5">
          <label
            className="inline fsize13 mr10"
            style={{ verticalAlign: "middle" }}
          >
            Flight Number
          </label>
          <input
            className="inline"
            value={formValues.flightNumber}
            style={{ width: "120px" }}
            type="text"
            name="flightNumber"
            id="FlightNumber"
            onChange={(e) =>
              setFormValues({ ...formValues, flightNumber: e.target.value })
            }
          />
        </div>
      </div>
      <div className="full-width text-center mt30">
        <button className="primary hvr-bounce-to-bottom" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default EditTicket;
