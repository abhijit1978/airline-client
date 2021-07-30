import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from "./../pages/home";
import AboutUspage from "./../pages/aboutUs";
import ContactUsPage from "../pages/contactUs";
import ServicesPage from "../pages/services";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/contact-us" render={() => <ContactUsPage />} />
        <Route path="/our-services" exact render={() => <ServicesPage />} />
        <Route path="/about-us" render={() => <AboutUspage />} />
        <Route path="/" exact render={() => <HomePage />} />
      </Switch>
    </>
  );
};

export default Routes;
