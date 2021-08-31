import React from "react";

const PassengerContactInfo = () => {
  return (
    <div className="passenger-info full-width">
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="Contact Number"
          className="full-width"
        />
      </div>
      <div className="col3 mr15">
        <input type="text" placeholder="Email ID" className="full-width" />
      </div>
    </div>
  );
};

export default PassengerContactInfo;
