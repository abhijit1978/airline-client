import React, { useState, useEffect } from "react";
import axios from "axios";

import Popup from "../../common/popup";
import SetUserRole from "../../forms/setUserRole";
import SetLimit from "../../forms/setLimit";
import {
  API_HEADER,
  baseURL,
  usersURL,
  roleURL,
} from "../../../configs/app.config";

const UsersList = () => {
  const [users, setUser] = useState([]);
  const [confPop, setConfPop] = useState("");
  const [showPopup, togglePopup] = useState({
    status: false,
    userId: "",
    roleUpdate: false,
    setLimit: false,
  });

  const getUsers = async () => {
    try {
      const response = await axios.get(usersURL, API_HEADER);
      setUser(response.data);
      togglePopup({
        ...showPopup,
        roleUpdate: false,
        setLimit: false,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (
      (!showPopup.status && showPopup.roleUpdate) ||
      (!showPopup.status && showPopup.setLimit)
    ) {
      async function fetch() {
        await getUsers();
      }
      fetch();
    }
  }, [showPopup]);

  const rejectUser = () => {
    const payload = {
      type: "Unknown",
      id: confPop._id,
    };
    axios
      .put(roleURL, payload, API_HEADER)
      .then(async () => {
        const response = await axios.get(usersURL, API_HEADER);
        setUser(response.data);
        setConfPop("");
      })
      .catch((err) => {
        console.log("reject user fail", err);
        setConfPop("");
      });
  };

  const getIsActiveValue = (user) => {
    return !user.isApproved || user.userType === "Unknown" ? (
      <strong
        className="fcLightGreen pointer"
        onClick={() =>
          togglePopup({
            ...showPopup,
            status: true,
            userId: user._id,
            roleUpdate: true,
          })
        }
      >
        Approve User
      </strong>
    ) : (
      <span className="pointer" onClick={() => setConfPop(user)}>
        Reject
      </span>
    );
  };

  const handleSetLimit = (user) => {
    togglePopup({
      ...showPopup,
      status: true,
      userId: user._id,
      setLimit: true,
    });
  };

  return (
    <>
      <table className="colored">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Contact No.</th>
            <th>City</th>
            <th>Pin</th>
            <th>Aadhar</th>
            <th>PAN</th>
            <th>Role</th>
            <th>Available Limit</th>
            <th>Is Approved</th>
            <th>Allow Limit</th>
          </tr>
        </thead>
        <tbody>
          {/* userID name email contactNo alternateNo address aadharNo aadharImgUrl pan panImgUrl userType limit */}
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.userID}</td>
              <td>{`${user.name.firstName} ${user.name.lastName}`}</td>
              <td>{user.email}</td>
              <td>
                {user.contactNo}
                {user.alternateNo != "-1" ? `, ${user.alternateNo}` : ""}
              </td>
              <td>{user.address.cityTownVillage}</td>
              <td className="text-right">{user.address.pin}</td>
              <td>
                <a target="_blank" href={`${baseURL}${user.aadharImgUrl}`}>
                  {user.aadharNo}
                </a>
              </td>
              <td>
                <a target="_blank" href={`${baseURL}${user.panImgUrl}`}>
                  {user.pan}
                </a>
              </td>
              <td>{user.userType}</td>
              <td className="text-right">
                {user.limit.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </td>
              <td>{getIsActiveValue(user)}</td>
              <td>
                {user.userType === "Unknown" ? (
                  <span className="">NA</span>
                ) : (
                  <strong
                    className="fcLightGreen pointer"
                    onClick={() => handleSetLimit(user)}
                  >
                    Set Limit
                  </strong>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showPopup.status && (
        <Popup heading="User Approval" onTogglePopup={togglePopup}>
          {showPopup.roleUpdate && (
            <SetUserRole popup={showPopup} onTogglePopup={togglePopup} />
          )}
          {showPopup.setLimit && (
            <SetLimit popup={showPopup} onTogglePopup={togglePopup} />
          )}
        </Popup>
      )}
      {confPop && (
        <div className="popup-center confirm">
          <header>Reject Confirmation</header>
          <div className="content-area">
            <p className="text-center">Are you sure?</p>
            <div className="text-center mt15 full-width">
              <button className="primary mr10" onClick={rejectUser}>
                Confirm
              </button>
              <button className="cancel" onClick={() => setConfPop("")}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UsersList;
