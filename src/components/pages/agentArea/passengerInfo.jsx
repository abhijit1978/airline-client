import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { setPassengerInfo } from "../../../appStore";

const PassengerInfo = ({ passId }) => {
  const dispatch = useDispatch();
  const [psgInfo, setPsgInfo] = useState({
    psgId: passId,
    title: "Mr.",
    firstName: "",
    lastName: "",
  });

  return (
    <div className="passenger-info full-width">
      <div className="gender-wrapper mr15">
        <select
          name="title"
          value={psgInfo.title}
          onChange={(e) => setPsgInfo({ ...psgInfo, title: e.target.value })}
          onBlur={(e) =>
            dispatch(setPassengerInfo({ ...psgInfo, title: e.target.value }))
          }
        >
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
          value={psgInfo.firstName}
          onChange={(e) =>
            setPsgInfo({ ...psgInfo, firstName: e.target.value })
          }
          onBlur={(e) =>
            dispatch(
              setPassengerInfo({ ...psgInfo, firstName: e.target.value })
            )
          }
        />
      </div>
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="Last Name"
          className="full-width"
          value={psgInfo.lastName}
          onChange={(e) => setPsgInfo({ ...psgInfo, lastName: e.target.value })}
          onBlur={(e) =>
            dispatch(setPassengerInfo({ ...psgInfo, lastName: e.target.value }))
          }
        />
      </div>
    </div>
  );
};

export default PassengerInfo;
