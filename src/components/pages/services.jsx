import React from "react";
import FloatingContactUs from "../common/floatingContactUs";
import imgTicket from "./../../assets/images/img-ticket.jpg";
import imgTravel from "./../../assets/images/img-travel.jpg";
import imgVisa from "./../../assets/images/img-visa.jpg";
import imgHotel from "./../../assets/images/img-hotel.jpg";
import imgInsurance from "./../../assets/images/img-insurance.jpg";
import imgBanner from "./../../assets/images/service-banner.jpg";

const ServicesPage = () => {
  return (
    <>
      <img
        src={imgBanner}
        alt=""
        style={{ position: "absolute", width: "100%" }}
      />
      <div className="service-banner"></div>
      <div className="page-wrapper full-width">
        <div className="container">
          <h1 className="fcLightGreen mb30 service-page-heading">
            We are happy server you as...
          </h1>
          <div className="service-content col6 mb30 pr15">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-file-earmark-text-fill mr5 fsize30"></i>{" "}
              Airline Ticket Booking
            </p>
            <img
              src={imgTicket}
              alt="Airline Ticket Booking"
              className="float-left mr15 service-image"
            />
            <p className="fsize15 lhight150 text-justify">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30 pl15">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-file-image-fill fsize30"></i> Domestic and
              International Tour Packages
            </p>
            <img
              src={imgTravel}
              alt="Domestic and
              International Tour Packages"
              className="float-left mr15 service-image"
            />
            <p className="fsize15 lhight150 pl30">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30 pr15">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-file-person-fill fsize30"></i> Visa Assistance
            </p>
            <img
              src={imgVisa}
              alt="Visa Assistance"
              className="float-left mr15 service-image"
            />
            <p className="fsize15 lhight150 pl30 text-justify">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30 pl15">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-building fsize30"></i> Hotel Bookings
            </p>
            <img
              src={imgHotel}
              alt="Hotel Bookings"
              className="float-left mr15 service-image"
            />
            <p className="fsize15 lhight150 pl30 text-justify">
              Some description about the service. Some description about the
              service. Some description about the service. Some description
              about the service. Some description about the service. Some
              description about the service. Some description about the service.
            </p>
          </div>
          <div className="service-content col6 mb30 pr15">
            <p className="fcLightGreen mb10 fsize18">
              <i className="bi bi-shield-fill-check fsize30"></i> Customized
              Holidays Travel Insurance
            </p>
            <img
              src={imgInsurance}
              alt="Customized
              Holidays Travel Insurance"
              className="float-left mr15 service-image"
            />
            <p className="fsize15 lhight150 pl30 text-justify">
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
