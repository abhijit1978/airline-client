import React from "react";

const PassengerInfo = () => {
  return (
    <div className="passenger-info full-width">
      <div className="gender-wrapper mr15">
        <select name="gender">
          <option value="Mr">Mr.</option>
          <option value="Ms">Ms.</option>
          <option value="Mrs">Mrs.</option>
        </select>
      </div>
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="First and Middle Name"
          className="full-width"
        />
      </div>
      <div className="col3 mr15">
        <input type="text" placeholder="Last Name" className="full-width" />
      </div>
    </div>
  );
};

export default PassengerInfo;
