import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setPassengerContactInfo } from "../../../../appStore";
import utils from "../../../../utils/utils";

const PassengerContactInfo = () => {
  const dispatch = useDispatch();
  const [psgContactInfo, setPsgContactInfo] = useState({
    contactNumber: "",
    emailID: "",
  });

  const [error, setError] = useState({
    phone: false,
    email: false,
  });

  const updateContactInfo = (e, type) => {
    const value = e.target.value;
    if (type === "phone") {
      if (utils.validateMobile(value)) {
        setError({ ...error, phone: false });
        dispatch(
          setPassengerContactInfo({
            ...psgContactInfo,
            contactNumber: value,
          })
        );
      } else {
        setError({ ...error, phone: true });
      }
    } else {
      if (utils.validateEmail(value)) {
        setError({ ...error, email: false });
        dispatch(
          setPassengerContactInfo({
            ...psgContactInfo,
            emailID: value,
          })
        );
      } else {
        setError({ ...error, email: true });
      }
    }
  };

  return (
    <div className="passenger-info full-width">
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="Contact Number, 10 digit"
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
          placeholder="Email ID i.e sample@gmail.com"
          className="full-width"
          value={psgContactInfo.emailID}
          onChange={(e) =>
            setPsgContactInfo({ ...psgContactInfo, emailID: e.target.value })
          }
          onBlur={(e) => updateContactInfo(e, "email")}
        />
      </div>
      {error.phone && (
        <p className="psgContactError">Mobile Number must be 10 digit.</p>
      )}
      {error.email && <p className="psgContactError">Invalid email.</p>}
    </div>
  );
};

export default PassengerContactInfo;
