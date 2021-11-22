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
      await axios.put(logoutURL, { id: user.id }, { headers: API_HEADER });
      toggleUserLinkList(false);
      dispatch(setUser({}));
      localStorage.removeItem("user");
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
      {user.isLoggedIn && user.userType === "Agent" && (
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/my-tickets">
            <i className="bi bi-clipboard-check"></i> My Tickets
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
      {user.isLoggedIn && user.userType === "Super Admin" && (
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/statement">
            <i className="bi bi-card-list"></i> Account Statement
          </Link>
        </li>
      )}
      {user.isLoggedIn && user.userType !== "Super Admin" && (
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/accounts">
            <i className="bi bi-safe"></i> Accounts
          </Link>
        </li>
      )}
      {user.isLoggedIn && (
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/bank-details">
            <i className="bi bi-safe"></i> Bank Details
          </Link>
        </li>
      )}
      {user.isLoggedIn && user.userType !== "Super Admin" && (
        <li onClick={() => toggleUserLinkList(false)}>
          <Link to="/make-payment">
            <i className="bi bi-wallet2"></i> Make Payment
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
