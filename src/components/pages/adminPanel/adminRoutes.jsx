import React from "react";
import { Route, Switch } from "react-router-dom";

import TicketPurchase from "./ticketPurchase";
import UsersList from "./usersList";
import TicketsList from "./ticketsList";

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
      <Route
        path="/admin-panel/tickets-list"
        render={(props) => <TicketsList {...props} />}
      />
    </Switch>
  );
};

export default AdminRoutes;
