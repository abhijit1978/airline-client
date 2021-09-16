import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setPassengerContactInfo } from "../../../appStore";

const PassengerContactInfo = () => {
  const dispatch = useDispatch();
  const [psgContactInfo, setPsgContactInfo] = useState({
    contactNumber: "",
    emailID: "",
  });

  const updateContactInfo = (e, type) => {
    const value = e.target.value;
    if (type === "phone") {
      if (value.length === 10) {
        dispatch(
          setPassengerContactInfo({
            ...psgContactInfo,
            contactNumber: value,
          })
        );
      } else {
        console.log("invalid phone number");
      }
    } else {
      const validPattern = /^\S+@\S+\.\S+$/;
      if (validPattern.test(String(value).toLowerCase())) {
        dispatch(
          setPassengerContactInfo({
            ...psgContactInfo,
            emailID: value,
          })
        );
      } else {
        console.log("invalid email");
      }
    }
  };

  return (
    <div className="passenger-info full-width">
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="Contact Number"
          className="full-width"
          value={psgContactInfo.contactNumber}
          onChange={(e) =>
            setPsgContactInfo({
              ...psgContactInfo,
              contactNumber: e.target.value,
            })
          }
          onBlur={(e) => updateContactInfo(e, "phone")}
        />
      </div>
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="Email ID"
          className="full-width"
          value={psgContactInfo.emailID}
          onChange={(e) =>
            setPsgContactInfo({ ...psgContactInfo, emailID: e.target.value })
          }
          onBlur={(e) => updateContactInfo(e, "email")}
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
        />
      </div>
    </div>
  );
};

export default PassengerContactInfo;
