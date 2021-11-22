import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./../pages/home";
import AboutUspage from "./../pages/aboutUs";
import ContactUsPage from "../pages/contactUs";
import ServicesPage from "../pages/services";
import TicketSearch from "../pages/agentArea/ticketSearch";
import AdminDashboard from "../pages/adminPanel/dashboard";
import EditProfile from "../pages/editProfile";
import ChangePassword from "../pages/changePassword";
import BookTicket from "../pages/agentArea/ticketBooking";
import TicketPrint from "../pages/agentArea/printTicket";
import MyTickets from "../pages/agentArea/myAccount/myTickets";
import BankDetails from "../pages/bankDetails";
import MakePayment from "../pages/agentArea/makePayment";
import AccountStatement from "../pages/adminPanel/accounts";
import Accounts from "../pages/agentArea/accounts";

const Routes = (props) => {
  return (
    <>
      <Switch>
        <Route
          path="/admin-panel"
          render={(props) => <AdminDashboard {...props} />}
        />
        <Route
          path="/search-ticket"
          render={(props) => <TicketSearch {...props} />}
        />
        <Route
          path="/bank-details"
          render={(props) => <BankDetails {...props} />}
        />
        <Route
          path="/make-payment"
          render={(props) => <MakePayment {...props} />}
        />
        <Route
          path="/statement"
          render={(props) => <AccountStatement {...props} />}
        />
        <Route path="/accounts" render={(props) => <Accounts {...props} />} />
        <Route
          path="/book-ticket"
          render={(props) => <BookTicket {...props} />}
        />
        <Route
          path="/my-tickets"
          render={(props) => <MyTickets {...props} />}
        />
        <Route
          path="/ticket-print"
          render={(props) => <TicketPrint {...props} />}
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
        <Route
          path="/user-profile"
          render={(props) => <EditProfile {...props} />}
        />
        <Route
          path="/change-password"
          render={(props) => <ChangePassword {...props} />}
        />
        <Route path="/" exact render={(props) => <HomePage {...props} />} />
      </Switch>
    </>
  );
};

export default Routes;
