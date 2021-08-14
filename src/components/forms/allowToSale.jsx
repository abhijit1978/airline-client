import React from "react";
import moment from "moment";

const AllowToSale = ({ onTogglePopup, ticket }) => {
  return (
    <div className="allow-to-sale">
      <p className="fsize13 full-width">
        <span className="col3 mb10">
          Locaion: <i className="pl5 fcLightGreen">{ticket.location}</i>
        </span>
        <span className="col3 mb10">
          Airline: <i className="pl5 fcLightGreen">{ticket.airlineName}</i>
        </span>
        <span className="col3 mb10">
          PNR: <i className="pl5 fcLightGreen">{ticket.pnr}</i>
        </span>
        <span className="col3 mb10">
          Flight#: <i className="pl5 fcLightGreen">{ticket.flightNumber}</i>
        </span>
        <span className="col3 mb10">
          Travel Date:
          <i className="pl5 fcLightGreen">
            {moment(ticket.travelDate).format("DD MMM, YYYY")}
          </i>
        </span>
      </p>
      <hr />
      <div className="full-width form-row mt15">
        <div className="col6 relaive pr5">
          <label className="inline">From</label>
          <input className="inline" type="date" name="fromDate" id="FromDate" />
          <button className="resetDate">
            <i class="bi bi-x-square"></i>
          </button>
        </div>
        <div className="col6 relaive pl5">
          <label className="inline">To</label>
          <input className="inline" type="date" name="toDate" id="ToDate" />
          <button className="resetDate">
            <i class="bi bi-x-square"></i>
          </button>
        </div>
      </div>
      <div className="full-width form-row">
        <div className="col6 relaive pr5">
          <label className="inline">Price</label>
          <input
            className="inline"
            type="number"
            name="salePrice"
            id="SalePrice"
          />
        </div>
        <div className="col6 relaive pl5">
          <label className="inline">Min Qty</label>
          <input
            className="inline"
            type="number"
            name="minQuantity"
            id="MinQuantity"
          />
        </div>
      </div>
      <div className="full-width text-center mt30">
        <button className="primary">Submit</button>
      </div>
    </div>
  );
};

export default AllowToSale;
