import React, { useState } from "react";
import { useSelector } from "react-redux";

import Popup from "../../common/popup";
import CreateLocation from "../../forms/createLocation";

const LocationsTable = () => {
  const [showPopup, setShowPopup] = useState({
    state: false,
    locationData: {},
    action: "",
  });

  const locations = useSelector((state) => state.common.locations);

  const getPopupHeading = () => {
    return showPopup.action === "create" ? "Create Location" : "Edit Location";
  };

  return (
    <>
      <table className="colored col4_5">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Location Name</th>
            <th>Location Code</th>
            <th>Action</th>
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
                    action: "edit",
                  })
                }
              >
                <strong>Edit</strong>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="col5 text-center">
        <button
          className="primary hvr-bounce-to-bottom"
          onClick={() =>
            setShowPopup({ ...showPopup, state: true, action: "create" })
          }
        >
          Create New Location
        </button>
      </div>
      {showPopup.state && (
        <Popup heading={getPopupHeading()} onTogglePopup={setShowPopup}>
          <CreateLocation
            onTogglePopup={setShowPopup}
            action={showPopup.action}
            data={showPopup.locationData}
          />
        </Popup>
      )}
    </>
  );
};

export default LocationsTable;
