import React from "react";
import FloatingContactUs from "../common/floatingContactUs";

const ServicesPage = () => {
  return (
    <>
      <div className="page-wrapper full-width">
        <div className="container">
          <h1 className="fcLightGreen mb30">We are happy server you as...</h1>
          <div className="service-content col6 mb30">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-snow mr5 fsize22"></i> Airline Ticket Booking
            </p>

            <p className="fsize15 lhight150 pl30 pr15">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-snow mr5 fsize22"></i> Domestic and
              International Tour Packages
            </p>
            <p className="fsize15 lhight150 pl30 pr15">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-snow mr5 fsize22"></i> Visa Assistance
            </p>

            <p className="fsize15 lhight150 pl30 pr15">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-snow mr5 fsize22"></i> Passport Assistant
            </p>

            <p className="fsize15 lhight150 pl30 pr15">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-snow mr5 fsize22"></i> Hotel Bookings
            </p>
            <p className="fsize15 lhight150 pl30 pr15">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-snow mr5 fsize22"></i> Customized Holidays
              Travel Insurance
            </p>
            <p className="fsize15 lhight150 pl30 pr15">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
        </div>
      </div>
      <FloatingContactUs />
    </>
  );
};

export default ServicesPage;
