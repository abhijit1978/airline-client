import React from "react";
import { useSelector } from "react-redux";

const LocationsTable = () => {
  const locations = useSelector((state) => state.common.locations);

  return (
    <>
      <P>Loations list</P>
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
          {locations.map((location, index) => {
            <tr>
              <td>{index}</td>
              <td>{location.locationName}</td>
              <td>{location.locationCode}</td>
              <td>Edit</td>
              <td>Delete</td>
            </tr>;
          })}
        </tbody>
      </table>
    </>
  );
};

export default LocationsTable;
