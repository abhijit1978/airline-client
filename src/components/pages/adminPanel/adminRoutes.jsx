import React from "react";
import { Route, Switch } from "react-router-dom";

import TicketPurchase from "./ticketPurchase";
import UsersList from "./usersList";

const AdminRoutes = (props) => {
  return (
    <Switch>
      <Route
        path="/admin-panel/ticket-purchase"
        render={(props) => <TicketPurchase {...props} />}
      />
      <Route
        path="/admin-panel/users-list"
        render={(props) => <UsersList {...props} />}
      />
    </Switch>
  );
};

export default AdminRoutes;
