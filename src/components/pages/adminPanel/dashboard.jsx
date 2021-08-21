import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import AdminRoutes from "./adminRoutes";

import { setLocations, setAirlines } from "./../../../appStore";

const AdminDashboard = ({ history }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // Redirect to home page if not logged in
  useEffect(() => {
    if (!Object.keys(user).length) {
      history.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const getLocations = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/locations",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(setLocations(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const getAirlines = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/bfly/airlines",
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      dispatch(setAirlines(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getLocations();
    getAirlines();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-wrapper full-width">
      <nav className="dashboard-navs pl15 pr15">
        <ul>
          <li>
            <NavLink to="/admin-panel/purchase-entry">Purchase Entry</NavLink>
          </li>
          <li>
            <NavLink to="/admin-panel/tickets-list">Purchased Tickets</NavLink>
          </li>
          <li>
            <NavLink to="/admin-panel/users-list">Users</NavLink>
          </li>
          <li>
            <NavLink to="/admin-panel/locations">Locations</NavLink>
          </li>
          <li>
            <NavLink to="/admin-panel/airlines">Airlines</NavLink>
          </li>
        </ul>
      </nav>
      <section className="full-width pr-15 pl15">
        <AdminRoutes />
      </section>
    </div>
  );
};

export default AdminDashboard;
