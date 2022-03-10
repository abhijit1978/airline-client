import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { changeAgencyNameUrl, API_HEADER } from "../../configs/app.config";
import { setUser } from "../../appStore";

const EditProfile = () => {
  const dispatch = useDispatch();
  const usr = useSelector((state) => state.user.user);
  const [user, setUserData] = useState(usr);
  const [editFlag, setEditFlag] = useState("");
  const [agencyName, setAgencyName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    setUserData(usr);
  }, [usr]);

  const updateAgencyName = () => {
    if (agencyName.trim().length > 3) {
      const payload = { id: user.id, agencyName: agencyName.trim() };
      axios
        .post(changeAgencyNameUrl, payload, API_HEADER)
        .then((response) => {
          setUserData(response.data.user);
          dispatch(setUser(response.data.user));
          setEditFlag("");
          setErrorMsg("");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setErrorMsg(true);
    }
  };

  const editMode = () => {
    if (!editFlag) {
      return (
        <>
          <span>{user.agencyName || "Not set yet"}</span>
          {!user.agencyName && (
            <i
              onClick={() => setEditFlag(user)}
              className="bi bi-pencil-square float-right pointer"
            ></i>
          )}
        </>
      );
    } else {
      return (
        <>
          <input
            type="text"
            name="agencyName"
            onChange={(e) => setAgencyName(e.target.value)}
            className="mr10"
          />
          <i
            className="bi bi-arrow-right-circle-fill pointer fsize26 inline"
            onClick={() => updateAgencyName()}
          ></i>
        </>
      );
    }
  };

  if (!Object.keys(user).length) {
    return <>Loading</>;
  } else {
    return (
      <>
        <div className="page-wrapper full-width">
          <div className="container">
            <table className="user-profile">
              <tbody>
                <tr>
                  <td width="130px">User ID</td>
                  <td>{user.userID}</td>
                </tr>
                <tr>
                  <td width="130px">Agency Name</td>
                  <td>{editMode()}</td>
                </tr>
                <tr>
                  <td width="130px">Name</td>
                  <td>
                    {user.name.firstName}{" "}
                    {user.name.middleName != -1 ? user.name.middleName : ""}{" "}
                    {user.name.lastName}
                  </td>
                </tr>
                <tr>
                  <td width="130px">Mobile</td>
                  <td>
                    {user.contactNo}
                    {user.alternateNo != -1 ? `, ${user.alternateNo}` : ""}
                  </td>
                </tr>
                <tr>
                  <td width="130px">Email ID</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td width="130px">Address</td>
                  <td>
                    <p className="mb5">
                      {user.address.houseNoStreeetName},{" "}
                      {user.address.cityTownVillage},{" "}
                    </p>
                    <p>
                      P.O. - {user.address.postOffice},<br />
                      Pin - {user.address.pin},<br />
                      {user.address.state}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="130px">Aadhar</td>
                  <td>{user.aadharNo}</td>
                </tr>
                <tr>
                  <td width="130px">Pan</td>
                  <td>{user.pan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {errorMsg && (
          <p className="text-center fcRed mt15">
            Agency name must contain at least 4 charachters.
          </p>
        )}
      </>
    );
  }
};

export default EditProfile;
