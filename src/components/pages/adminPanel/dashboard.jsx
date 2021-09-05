import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import AdminRoutes from "./adminRoutes";

const AdminDashboard = ({ history }) => {
  const user = useSelector((state) => state.user.user);

  // Redirect to home page if not logged in
  useEffect(() => {
    if (!Object.keys(user).length) {
      history.replace("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

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
