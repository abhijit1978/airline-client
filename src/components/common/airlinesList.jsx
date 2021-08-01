import React, { useEffect, useState } from "react";
import axios from "axios";

const AirlinesList = ({ getAirline }) => {
  const [airlines, setAirlines] = useState([]);
  const getAirlines = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/airlines",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setAirlines(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getAirlines();
  }, []);

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
