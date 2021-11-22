import React from "react";
import FloatingContactUs from "../common/floatingContactUs";

const AboutUsPage = () => {
  return (
    <>
      <div className="about-content">
        <div className="page-wrapper full-width">
          <div className="container">
            <div className="col3_4">
              <h1 className="mb30 fcLightGreen">Who We Are...</h1>
              <p className="mb15 fsize18 lhight150">
                <span className="fcLightGreen">Barkat Tours and Travels</span>{" "}
                has emerged as one of the leading travel agencies since its
                inception in 2006 at Murshidabad - The Lost kingdom of
                Siraj-UI-Dolla. For over a decade now we are serving the Travel
                fraternity / Industry / valued clients with passion towards the
                excellence in service.
              </p>
              <p className="mb15 fsize18 lhight150">
                <span className="fcLightGreen">Barkat Tours and Travels</span>{" "}
                is operated by{" "}
                <strong>
                  <i>Mr. Barkat Sheikh</i>
                </strong>
                , trusted name in the airline professionals, IATA certified,
                Trained in Ticketing and Visa services, having a combined
                experience in the Travel and Tourism Industry more than a
                decade. With the enthusiasm and experience in the travel and
                Tourism Industry We are working tirelessly to anticipate
                customer's needs and deliver them the best.
              </p>
              <p className="mb15 fsize18 lhight150">
                Services offered by us are, Airline ticketing, Visa assistance,
                Hotel Bookings, Domestic and International Tour packages,
                Passport assistant, Customized Holidays Travel Insurance etc. We
                have dedicated account managers who are always committed and
                thrive for excellence with their expertise in the Travel and
                Tourism sector more than 15 years. With the high-quality{" "}
                <span className="fcLightGreen">24×7 Customer Services</span> can
                have comprehensive choice with an affordable price from us.
              </p>
            </div>
          </div>
        </div>
      </div>
      <FloatingContactUs />
    </>
  );
};

export default AboutUsPage;
