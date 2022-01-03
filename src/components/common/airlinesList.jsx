import React from "react";
import { useSelector } from "react-redux";

const AirlinesList = ({ getAirline }) => {
  const airlines = useSelector((state) => state.common.airlines);
  const getValues = (e) => {
    const selectedIndex = e.target.options.selectedIndex;
    getAirline(
      e.target.value,
      e.target.options[selectedIndex].getAttribute("data-aid")
    );
  };
  return (
    <div className="airlines-list">
      <label htmlFor="">Airlines</label>
      <select name="airline" id="Airline" onChange={(e) => getValues(e)}>
        <option value="">Select Airline</option>
        {airlines.map((airline) => (
          <option
            key={airline._id}
            data-aid={airline._id}
            value={airline.airlineName}
          >
            {airline.airlineName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AirlinesList;
