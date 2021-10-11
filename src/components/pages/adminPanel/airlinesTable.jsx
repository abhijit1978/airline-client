import React, { useState } from "react";
import { useSelector } from "react-redux";

import Popup from "../../common/popup";
import CreateAirline from "../../forms/createAirline";

const AirlinesTable = () => {
  const [showPopup, setShowPopup] = useState({
    state: false,
    airlineData: {},
    action: "",
  });
  const airlines = useSelector((state) => state.common.airlines);

  const getPopupHeading = () => {
    return showPopup.action === "create" ? "Create Airline" : "Edit Airline";
  };

  return (
    <>
      <table className="colored col4_5">
        <thead>
          <tr>
            <th>Sr</th>
            <th colSpan="2">Airline</th>
            <th>Airline Code</th>
            <th>Alias</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map((airline, index) => (
            <tr key={airline._id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">
                <img
                  src={`http://localhost:5001${airline.airlineLogo}`}
                  alt={airline.airlineName}
                  style={{
                    height: "30px",
                    display: "inline-block",
                    verticalAlign: "middle",
                  }}
                />
              </td>
              <td className="text-center">{airline.airlineName}</td>
              <td className="text-center">{airline.airlineCode}</td>
              <td className="text-center">{airline.alias}</td>
              <td
                className="text-center fcLightGreen pointer"
                onClick={() =>
                  setShowPopup({
                    ...showPopup,
                    state: true,
                    airlineData: airline,
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
          Create New Airline
        </button>
      </div>
      {showPopup.state && (
        <Popup heading={getPopupHeading()} onTogglePopup={setShowPopup}>
          <CreateAirline
            onTogglePopup={setShowPopup}
            action={showPopup.action}
            data={showPopup.airlineData}
          />
        </Popup>
      )}
    </>
  );
};

export default AirlinesTable;
