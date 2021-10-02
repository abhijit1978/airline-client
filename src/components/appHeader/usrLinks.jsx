import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { logoutURL, API_HEADER } from "../../configs/app.config";

import { setUser } from "./../../appStore";

const UserLinks = ({ toggleUserLinkList, user }) => {
  const dispatch = useDispatch();

  const logoutUser = async () => {
    try {
      const response = await axios.put(
        logoutURL,
        { id: user.id },
        { headers: API_HEADER }
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
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/search-ticket">
            <i className="bi bi-file-earmark-text"></i> Ticket Booking
          </Link>
        </li>
      )}
      {user.isLoggedIn && user.userType === "Super Admin" && (
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/admin-panel">
            <i className="bi bi-bounding-box"></i> Admin Dashboard
          </Link>
        </li>
      )}
      <li onClick={() => toggleUserLinkList(false)}>
        <Link to="/user-profile">
          <i className="bi bi-person-lines-fill"></i> Profile
        </Link>
      </li>
      <li onClick={() => toggleUserLinkList(false)}>
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
