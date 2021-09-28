import React, { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

import { setInfantsInfo } from "../../../../appStore";

const InfantInfo = ({ infantId }) => {
  const dispatch = useDispatch();
  const [infantInfo, setInfantInfo] = useState({
    infantId: infantId,
    sex: "Male",
    name: "",
    dob: "",
  });

  const onDOBChange = (date) => {
    setInfantInfo({
      ...infantInfo,
      dob: moment(date).format("YYYY-MM-DD"),
    });
    dispatch(
      setInfantsInfo({ ...infantInfo, dob: moment(date).format("YYYY-MM-DD") })
    );
  };

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
            dispatch(setInfantsInfo({ ...infantInfo, sex: e.target.value }))
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
            dispatch(setInfantsInfo({ ...infantInfo, name: e.target.value }))
          }
        />
      </div>
      <div className="col3 mr15">
        <Datetime
          dateFormat="DD-MM-YYYY"
          timeFormat={false}
          onChange={(value) => onDOBChange(value)}
        />
      </div>
    </div>
  );
};

export default InfantInfo;
