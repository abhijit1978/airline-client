import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { setUser } from "./../../appStore";

const UserLinks = ({ toggleUserLinkList, user }) => {
  const dispatch = useDispatch();

  const logoutUser = () => {
    toggleUserLinkList(false);
    dispatch(setUser({}));
  };
  return (
    <ul className="user-links">
      {user.isLoggedIn && (
        <li>
          <i class="bi bi-file-earmark-text"></i>
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
        <i class="bi bi-file-earmark-richtext"></i> Profile
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
