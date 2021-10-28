import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Popup from "../../common/popup";
import SetUserRole from "../../forms/setUserRole";
import { API_HEADER, usersURL } from "../../../configs/app.config";

const UsersList = () => {
  const [users, setUser] = useState([]);
  const [showPopup, togglePopup] = useState({
    status: false,
    userId: "",
    roleUpdate: false,
  });

  const getUsers = async () => {
    try {
      const response = await axios.get(usersURL, API_HEADER);
      setUser(response.data);
      togglePopup({
        ...showPopup,
        roleUpdate: false,
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
    if (showPopup.roleUpdate) {
      async function fetch() {
        await getUsers();
      }
      fetch();
    }
  }, [showPopup.roleUpdate]);

  const getIsActiveValue = (user) => {
    return user.isApproved ? (
      `Approved`
    ) : (
      <strong
        className="fcLightGreen pointer"
        onClick={() =>
          togglePopup({
            ...showPopup,
            status: !showPopup.status,
            userId: user._id,
          })
        }
      >
        Approve User
      </strong>
    );
  };

  const handleSetLimit = (user) => {
    console.log(user);
  };

  return (
    <>
      <table className="colored">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Date</th>
            <th>City</th>
            <th>Pin</th>
            <th>Role</th>
            <th>Available Limit</th>
            <th>Is Approved</th>
            <th>Allow Limit</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.userID}</td>
              <td>{`${user.name.firstName} ${user.name.lastName}`}</td>
              <td>{moment(user.dateAppied).format("DD MMM, YYYY")}</td>
              <td>{user.address.cityTownVillage}</td>
              <td>{user.address.pin}</td>
              <td>{user.userType}</td>
              <td>{user.limit}</td>
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
          <SetUserRole popup={showPopup} onTogglePopup={togglePopup} />
        </Popup>
      )}
    </>
  );
};

export default UsersList;
