import React from "react";
import { useSelector } from "react-redux";

const LocationsList = ({ getLocation }) => {
  const locations = useSelector((state) => state.common.locations);
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
