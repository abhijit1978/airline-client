import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import utils from "../../../utils/utils";

import { setFareInfo, updatePsgInfoOnQtyChange } from "../../../appStore";

const FareSummary = ({ ticket, onTicketsCountChange }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState(ticket);
  const passengerInfo = useSelector(
    (state) => state.booking.tickets.passengerInfo
  );
  const handleChange = (e, type) => {
    const value = e.target.value;
    if (type === "qty") {
      setData({ ...data, bookQty: value });
      dispatch(setFareInfo({ bookQty: value }));
      if (passengerInfo.length && passengerInfo.length > value) {
        const psgInfo = passengerInfo.filter((item) => item.psgId <= value);
        dispatch(updatePsgInfoOnQtyChange(psgInfo));
      }
      onTicketsCountChange(value);
    }
    if (type === "oc") {
      dispatch(setFareInfo({ otherCharges: value }));
      setData({ ...data, otherCharges: value });
    }
    if (type === "ic") {
      dispatch(setFareInfo({ infantCharges: value }));
      setData({ ...data, infantCharges: value });
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
