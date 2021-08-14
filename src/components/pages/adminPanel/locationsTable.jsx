import React, { useState } from "react";
import { useSelector } from "react-redux";

import Popup from "../../common/popup";
import CreateLocation from "../../forms/createLocation";

const LocationsTable = () => {
  const [showPopup, setShowPopup] = useState({
    state: false,
    locationData: {},
  });

  const locations = useSelector((state) => state.common.locations);
  return (
    <>
      <div className="form-heading relative full-width">
        <div className="float-right">
          <button
            className="primary"
            // onClick={() =>
            //   setShowPopup({ ...showPopup, state: true, popType: "location" })
            // }
          >
            Create New Location
          </button>
        </div>
      </div>
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
              <td
                className="text-center fcLightGreen pointer"
                onClick={() =>
                  setShowPopup({
                    ...showPopup,
                    state: true,
                    locationData: location,
                  })
                }
              >
                <strong>Edit</strong>
              </td>
              <td className="text-center fcLightGreen pointer">
                <strong>Delete</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup.state && (
        <Popup heading="Allow to sale" onTogglePopup={setShowPopup}>
          <CreateLocation
            onTogglePopup={setShowPopup}
            action="edit"
            data={showPopup.locationData}
          />
        </Popup>
      )}
    </>
  );
};

export default LocationsTable;
