import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./../pages/home";
import AboutUspage from "./../pages/aboutUs";
import ContactUsPage from "../pages/contactUs";
import ServicesPage from "../pages/services";
import TicketBooking from "../pages/bookTicket";
import AdminDashboard from "../pages/adminPanel/dashboard";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route
          path="/admin-panel"
          render={(props) => <AdminDashboard {...props} />}
        />
        <Route
          path="/book-ticket"
          render={(props) => <TicketBooking {...props} />}
        />
        <Route
          path="/contact-us"
          render={(props) => <ContactUsPage {...props} />}
        />
        <Route
          path="/our-services"
          render={(props) => <ServicesPage {...props} />}
        />
        <Route
          path="/about-us"
          render={(props) => <AboutUspage {...props} />}
        />
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
      </Switch>
    </>
  );
};

export default Routes;
