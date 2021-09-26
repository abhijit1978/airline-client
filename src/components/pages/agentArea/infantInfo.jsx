import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { setPassengerInfo } from "../../../appStore";

const InfantInfo = ({ infantId }) => {
  const dispatch = useDispatch();
  const [infantInfo, setInfantInfo] = useState({
    infantId: infantId,
    sex: "Male",
    name: "",
    dob: "",
  });

  return (
    <div className="passenger-info full-width">
      <div className="gender-wrapper mr15">
        <select
          name="sex"
          value={infantInfo.sex}
          onChange={(e) =>
            setInfantInfo({ ...infantInfo, sex: e.target.value })
          }
          onBlur={(e) =>
            dispatch(setPassengerInfo({ ...infantInfo, sex: e.target.value }))
          }
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="col3 mr15">
        <input
          type="text"
          placeholder="Full Name"
          className="full-width"
          value={infantInfo.name}
          onChange={(e) =>
            setInfantInfo({ ...infantInfo, name: e.target.value })
          }
          onBlur={(e) =>
            dispatch(setPassengerInfo({ ...infantInfo, name: e.target.value }))
          }
        />
      </div>
      <div className="col3 mr15">
        <Datetime
          dateFormat="DD-MM-YYYY"
          timeFormat={false}
          onChange={(value) =>
            setInfantInfo({
              ...infantInfo,
              dob: moment(value).format("YYYY-MM-DD"),
            })
          }
        />
      </div>
    </div>
  );
};

export default InfantInfo;
