import React from "react";
import { Route, Switch } from "react-router-dom";

import TicketPurchase from "./ticketPurchase";
import UsersList from "./usersList";
import TicketsList from "./ticketsList";
import LocationsTable from "./locationsTable";
import AirlinesTable from "./airlinesTable";
import BookedTicketsList from "./bookedTicketsList";

const AdminRoutes = (props) => {
  return (
    <Switch>
      <Route
        path="/admin-panel/purchase-entry"
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
      <Route
        path="/admin-panel/booked-tickets"
        render={(props) => <BookedTicketsList {...props} />}
      />
      <Route
        path="/admin-panel/locations"
        render={(props) => <LocationsTable {...props} />}
      />
      <Route
        path="/admin-panel/airlines"
        render={(props) => <AirlinesTable {...props} />}
      />
    </Switch>
  );
};

export default AdminRoutes;
