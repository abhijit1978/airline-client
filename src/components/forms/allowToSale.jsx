import React, { useState } from "react";
import { useSelector } from "react-redux";
import Datetime from "react-datetime";
import axios from "axios";
import moment from "moment";
import { salableURL, API_HEADER } from "../../configs/app.config";
import "react-datetime/css/react-datetime.css";

const AllowToSale = ({ onTogglePopup, ticket }) => {
  const locations = useSelector((state) => state.common.locations);
  const [formValues, setFormValues] = useState({
    startDate: "",
    endDate: "",
    salePrice: "",
    qty: 1,
  });
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const validateForm = () => {
    let isValid = true;
    for (let key in formValues) {
      if (!formValues[key]) {
        isValid = false;
      }
    }
    return isValid;
  };

  const submitForm = () => {
    if (!validateForm()) {
      setError({ status: true, message: "All fields are mandetory." });
    } else {
      const finalData = { ...ticket, ...formValues };
      finalData.locationCode = finalData.location;
      const locName = locations.find(
        (loc) => loc.locationCode === ticket.location
      );
      finalData.locationName = locName.locationName;

      axios
        .post(salableURL, finalData, API_HEADER)
        .then(() => {
          setError({ status: false, message: "" });
          onTogglePopup(false);
        })
        .catch((err) => {
          console.log("Some error .....", err);
        });
    }
  };

  return (
    <div className="allow-to-sale">
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
          <label className="inline" style={{ verticalAlign: "top" }}>
            From
          </label>
          <Datetime
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            onChange={(value) =>
              setFormValues({
                ...formValues,
                startDate: moment(value).format("YYYY-MM-DD"),
              })
            }
          />
        </div>
        <div className="col6 relaive pl5 overflow-datatime">
          <label className="inline" style={{ verticalAlign: "top" }}>
            To
          </label>
          <Datetime
            dateFormat="DD-MM-YYYY"
            timeFormat={false}
            onChange={(value) =>
              setFormValues({
                ...formValues,
                endDate: moment(value).format("YYYY-MM-DD"),
              })
            }
          />
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
      {error.status && (
        <p className="login-error-message text-center">{error.message}</p>
      )}
      <div className="full-width text-center mt30">
        <button className="primary hvr-bounce-to-bottom" onClick={submitForm}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AllowToSale;
