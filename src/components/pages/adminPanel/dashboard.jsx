import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AdminRoutes from "./adminRoutes";

const AdminDashboard = (props) => {
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    if (!Object.keys(user).length) {
      props.history.replace("/");
    }
  }, [user]);

  return (
    <div className="page-wrapper full-width">
      <aside className="col5">
        <p className="form-heading">Links</p>
        <table className="colored">
          <tbody>
            <tr>
              <td>
                <Link to="/admin-panel/ticket-purchase">Ticket Purchase</Link>
              </td>
            </tr>

            <tr>
              <td>
                <Link to="/admin-panel/tickets-list">Tickets</Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link to="/admin-panel/users-list">Users</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </aside>
      <section className="col4_5 pr-15">
        <AdminRoutes />
      </section>
    </div>
  );
};

export default AdminDashboard;
