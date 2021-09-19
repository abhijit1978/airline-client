import React, { useState } from "react";
import { useDispatch } from "react-redux";
import utils from "../../../utils/utils";

import { setFareInfo } from "../../../appStore";

const FareSummary = ({ ticket, onTicketsCountChange }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(ticket);

  const handleChange = (e, type) => {
    if (type === "qty") {
      setData({ ...data, bookQty: e.target.value });
      dispatch(setFareInfo({ bookQty: e.target.value }));
      onTicketsCountChange(e.target.value);
    }
    if (type === "oc") {
      dispatch(setFareInfo({ otherCharges: e.target.value }));
      setData({ ...data, otherCharges: e.target.value });
    }
    if (type === "ic") {
      dispatch(setFareInfo({ infantCharges: e.target.value }));
      setData({ ...data, infantCharges: e.target.value });
    }
  };

  return (
    <div className="fare-summary-wrapper">
      <div className="fare-row full-width">
        <label className="fsize15">No of Tickets</label>
        <input
          className="fare-input"
          type="number"
          value={data.bookQty}
          onChange={(e) => handleChange(e, "qty")}
          name="ticketQty"
          min="1"
          max={data.salable.qty}
        />
      </div>

      <div className="fare-row full-width">
        <label className="fsize15">Fare / ticket</label>
        <span className="fare-values">
          {data.salable.salePrice.toLocaleString()}
        </span>
      </div>
      <div className="fare-row full-width">
        <label className="fsize15">Other Charges</label>
        <input
          className="fare-input"
          type="number"
          value={data.otherCharges ? data.otherCharges : ""}
          name="otherCharges"
          onChange={(e) => handleChange(e, "oc")}
        />
      </div>
      <div className="fare-row full-width">
        <label className="fsize15">Infant Charges</label>
        <input
          className="fare-input"
          type="number"
          value={data.infantCharges ? data.infantCharges : ""}
          name="infanCharges"
          onChange={(e) => handleChange(e, "ic")}
        />
      </div>
      <div className="fare-row full-width">
        <label className="fsize18 fcLightGreen">Total Fare</label>
        <span className="fare-values">
          <strong className="fsize18 fcLightGreen">
            {utils.getTotalFare(data)}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default FareSummary;
