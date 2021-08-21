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
      console.log(response);
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
          <Link to="/book-ticket">
            <i className="bi bi-file-earmark-text"></i> Ticket Booking
          </Link>
        </li>
      )}
      {user.isLoggedIn && user.userType === "Super Admin" && (
        <li>
          <Link to="/admin-panel">
            <i className="bi bi-bounding-box"></i> Admin Dashboard
          </Link>
        </li>
      )}
      <li>
        <Link to="/user-profile">
          <i className="bi bi-file-earmark-richtext"></i> Profile
        </Link>
      </li>
      <li>
        <Link to="/change-password">
          <i className="bi bi-pencil-square"></i>Change Password
        </Link>
      </li>
      <li onClick={logoutUser} className="logout-link">
        <i className="bi bi-box-arrow-left"></i>Logout
      </li>
    </ul>
  );
};

export default UserLinks;
