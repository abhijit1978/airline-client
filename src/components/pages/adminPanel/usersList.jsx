import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import Popup from "../../common/popup";
import SetUserRole from "../../forms/setUserRole";

const UsersList = () => {
  const [users, setUser] = useState([]);
  const [showPopup, togglePopup] = useState({
    status: false,
    userId: "",
    roleUpdate: false,
  });
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5001/api/bfly/users", {
        headers: { "Content-Type": "application/json" },
      });
      setUser(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    if (showPopup.roleUpdate) {
      getUsers();
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

  return (
    <>
      <table className="colored">
        <thead>
          <tr>
            <th>Date</th>
            <th>Code</th>
            <th>Name</th>
            <th>City</th>
            <th>Pin</th>
            <th>Role</th>
            <th>Is Approved</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{moment(user.dateAppied).format("DD MMM, YYYY")}</td>
              <td>{user._id}</td>
              <td>{`${user.name.firstName} ${user.name.lastName}`}</td>
              <td>{user.address.cityTownVillage}</td>
              <td>{user.address.pin}</td>
              <td>{user.userType}</td>
              <td>{getIsActiveValue(user)}</td>
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
