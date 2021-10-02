import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import moment from "moment";
import { salableURL, API_HEADER } from "../../configs/app.config";

const AllowToSale = ({ onTogglePopup, ticket }) => {
  const locations = useSelector((state) => state.common.locations);
  const [formValues, setFormValues] = useState({
    startDate: "",
    endDate: "",
    salePrice: "",
    qty: 1,
  });

  const submitForm = () => {
    const finalData = { ...ticket, ...formValues };
    finalData.locationCode = finalData.location;
    const locName = locations.find(
      (loc) => loc.locationCode === ticket.location
    );
    finalData.locationName = locName.locationName;

    axios
      .post(salableURL, finalData, API_HEADER)
      .then(() => {
        onTogglePopup(false);
      })
      .catch((err) => {
        console.log("Some error .....", err);
      });
  };

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
        <span className="col3 mb10">
          Pur Price:
          <i className="pl5 fcLightGreen">{ticket.purchasePrice}</i>
        </span>
      </p>
      <hr />
      <div className="full-width form-row mt15">
        <div className="col6 relaive pr5">
          <label className="inline">From</label>
          <input
            className="inline"
            type="date"
            name="fromDate"
            id="FromDate"
            onChange={(e) =>
              setFormValues({ ...formValues, startDate: e.target.value })
            }
          />
          <button className="resetDate">
            <i className="bi bi-x-square"></i>
          </button>
        </div>
        <div className="col6 relaive pl5">
          <label className="inline">To</label>
          <input
            className="inline"
            type="date"
            name="toDate"
            id="ToDate"
            onChange={(e) =>
              setFormValues({ ...formValues, endDate: e.target.value })
            }
          />
          <button className="resetDate">
            <i className="bi bi-x-square"></i>
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
            onChange={(e) =>
              setFormValues({ ...formValues, salePrice: e.target.value })
            }
          />
        </div>
        <div className="col6 relaive pl5">
          <label className="inline">Quantity</label>
          <input
            className="inline"
            type="number"
            name="minQuantity"
            id="MinQuantity"
            onChange={(e) =>
              setFormValues({ ...formValues, qty: e.target.value })
            }
            value={formValues.qty}
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

export default AllowToSale;
