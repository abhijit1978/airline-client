import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { setUser } from "./../../appStore";

const UserLinks = ({ toggleUserLinkList, user }) => {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      const response = await axios.put(
        "http://localhost:5001/api/bfly/users/logout",
        { id: user.id },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      toggleUserLinkList(false);
      dispatch(setUser({}));
      sessionStorage.removeItem("user");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <ul className="user-links">
      {user.isLoggedIn && (
        <li>
          <i className="bi bi-file-earmark-text"></i>
          <Link to="/book-ticket">Ticket Booking</Link>
        </li>
      )}
      {user.isLoggedIn && user.userType === "Super Admin" && (
        <li>
          <i className="bi bi-bounding-box"></i>
          <Link to="/admin-panel">Admin Dashboard</Link>
        </li>
      )}
      <hr />
      <li>
        <i className="bi bi-file-earmark-richtext"></i> Profile
      </li>
      <li>
        <i className="bi bi-pencil-square"></i>Change Password
      </li>
      <hr />
      <li onClick={logoutUser}>
        <i className="bi bi-box-arrow-left"></i>Logout
      </li>
    </ul>
  );
};

export default UserLinks;
