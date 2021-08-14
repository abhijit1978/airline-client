import React from "react";
import { useSelector } from "react-redux";

const AirlinesList = ({ getAirline }) => {
  const airlines = useSelector((state) => state.common.airlines);

  return (
    <div className="airlines-list">
      <label htmlFor="">Airlines</label>
      <select
        name="airline"
        id="Airline"
        onChange={(e) => getAirline(e.target.value)}
      >
        <option value="">Select Airline</option>
        {airlines.map((airline) => (
          <option key={airline._id} value={airline.airlineName}>
            {airline.airlineName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AirlinesList;
