import React from "react";
import { useSelector } from "react-redux";

const LocationsTable = () => {
  const locations = useSelector((state) => state.common.locations);
  return (
    <>
      <table className="colored">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Location Name</th>
            <th>Location Code</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {locations.map((location, index) => (
            <tr key={location._id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{location.locationName}</td>
              <td className="text-center">{location.locationCode}</td>
              <td className="text-center">Edit</td>
              <td className="text-center">Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default LocationsTable;
