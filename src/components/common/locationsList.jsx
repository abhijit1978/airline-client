import React, { useEffect, useState } from "react";
import axios from "axios";

const LocationsList = ({ getLocation }) => {
  const [locations, setLocations] = useState([]);
  const getLocations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/locations",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setLocations(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <div className="source-dest">
      <label htmlFor="">Location</label>
      <select
        name="location"
        id="Location"
        onChange={(e) => getLocation(e.target.value)}
      >
        <option value="">Select Location</option>
        {locations.map((location) => (
          <option key={location._id} value={location.locationCode}>
            {location.locationName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LocationsList;
