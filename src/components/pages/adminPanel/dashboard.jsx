import React from "react";
import { Link } from "react-router-dom";
import AdminRoutes from "./adminRoutes";

const AdminDashboard = () => {
  return (
    <div className="page-wrapper full-width">
      <aside className="col5">
        <ul className="admin-panel-links">
          <li>
            <Link to="/admin-panel/ticket-purchase">Ticket Purchase</Link>
          </li>
          <li>
            <Link to="/admin-panel/users-list">Users</Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
          <li>
            <Link to=""></Link>
          </li>
        </ul>
      </aside>
      <section className="col4_5">
        <AdminRoutes />
      </section>
    </div>
  );
};

export default AdminDashboard;
