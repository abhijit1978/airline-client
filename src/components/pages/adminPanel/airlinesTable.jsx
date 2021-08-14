import React from "react";
import { useSelector } from "react-redux";

const AirlinesTable = () => {
  const airlines = useSelector((state) => state.common.airlines);
  return (
    <>
      <div className="form-heading relative full-width">
        <div className="float-right">
          <button
            className="primary"
            // onClick={() =>
            //   setShowPopup({ ...showPopup, state: true, popType: "airline" })
            // }
          >
            Create New Airline
          </button>
        </div>
      </div>
      <table className="colored">
        <thead>
          <tr>
            <th>Sr</th>
            <th>Airlines Name</th>
            <th>Airlines Code</th>
            <th>Alias</th>
            <th colSpan="2">Action</th>
          </tr>
        </thead>
        <tbody>
          {airlines.map((airline, index) => (
            <tr key={airline._id}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{airline.airlineName}</td>
              <td className="text-center">{airline.airlineCode}</td>
              <td className="text-center">{airline.alias}</td>
              <td className="text-center">Edit</td>
              <td className="text-center">Delete</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AirlinesTable;
