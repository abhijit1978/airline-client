import React, { useState } from "react";

const FareSummary = ({ ticket, onTicketsCountChange }) => {
  const [data, setData] = useState(ticket);

  const getTotalFare = () => {
    const otherCharges = data.otherCharges ? data.otherCharges : 0;
    const infantCharges = data.infantCharges ? data.infantCharges : 0;
    const totalfare =
      parseInt(data.bookQty) * parseInt(data.salable.salePrice) +
      parseInt(otherCharges) +
      parseInt(infantCharges);
    return totalfare.toLocaleString();
  };

  const handleTicketsCountChange = (e) => {
    setData({ ...data, bookQty: e.target.value });
    onTicketsCountChange(e.target.value);
  };

  return (
    <div className="fare-summary-wrapper">
      <div className="fare-row full-width">
        <label className="fsize15">No of Tickets</label>
        <input
          className="fare-input"
          type="number"
          value={data.bookQty}
          onChange={(e) => handleTicketsCountChange(e)}
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
          onChange={(e) => setData({ ...data, otherCharges: e.target.value })}
        />
      </div>
      <div className="fare-row full-width">
        <label className="fsize15">Infant Charges</label>
        <input
          className="fare-input"
          type="number"
          value={data.infantCharges ? data.infantCharges : ""}
          name="infanCharges"
          onChange={(e) => setData({ ...data, infantCharges: e.target.value })}
        />
      </div>
      <div className="fare-row full-width">
        <label className="fsize18 fcLightGreen">Total Fare</label>
        <span className="fare-values">
          <strong className="fsize18 fcLightGreen">{getTotalFare()}</strong>
        </span>
      </div>
    </div>
  );
};

export default FareSummary;
