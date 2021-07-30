import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./../pages/home";
import AboutUspage from "./../pages/aboutUs";
import ContactUsPage from "../pages/contactUs";
import ServicesPage from "../pages/services";
import TicketBooking from "../pages/bookTicket";
import AdminDashboard from "../pages/adminPanel/dashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/admin-panel" render={() => <AdminDashboard />} />
        <Route path="/book-ticket" render={() => <TicketBooking />} />
        <Route path="/contact-us" render={() => <ContactUsPage />} />
        <Route path="/our-services" exact render={() => <ServicesPage />} />
        <Route path="/about-us" render={() => <AboutUspage />} />
        <Route path="/" exact render={() => <HomePage />} />
      </Switch>
    </>
  );
};

export default Routes;
