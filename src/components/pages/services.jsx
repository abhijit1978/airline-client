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
          <div
            className="row"
            style={{ marginLeft: "-15px", marginRight: "-15px" }}
          >
            <div className="service-content col4">
              <div className="inner">
                <img
                  src={imgTicket}
                  alt="Airline Ticket Booking"
                  className="float-left mr15 service-image"
                />
                <p className="fcLightGreen mb10 fsize16 service-name">
                  Airline Ticket Booking
                </p>
                <p className="fsize15 lhight150 text-justify">
                  Some description about the service. Some description about the
                  service. Some description about the service. Some description
                  about the service. Some description about the service. Some
                  description about the service. Some description about the
                  service.
                </p>
              </div>
            </div>
            <div className="service-content col4">
              <div className="inner">
                <img
                  src={imgTravel}
                  alt="Domestic and International Tour Packages"
                  className="float-left mr15 service-image"
                />
                <p className="fcLightGreen mb10 fsize16 service-name">
                  Domestic & International Tour Packages
                </p>
                <p className="fsize15 lhight150">
                  Some description about the service. Some description about the
                  service. Some description about the service. Some description
                  about the service. Some description about the service. Some
                  description about the service. Some description about the
                  service.
                </p>
              </div>
            </div>
            <div className="service-content col4">
              <div className="inner">
                <img
                  src={imgVisa}
                  alt="Visa Assistance"
                  className="float-left mr15 service-image"
                />
                <p className="fcLightGreen mb10 fsize16 service-name">
                  Visa Assistance
                </p>
                <p className="fsize15 lhight150  text-justify">
                  Some description about the service. Some description about the
                  service. Some description about the service. Some description
                  about the service. Some description about the service. Some
                  description about the service. Some description about the
                  service.
                </p>
              </div>
            </div>
            <div className="service-content col4">
              <div className="inner">
                <img
                  src={imgHotel}
                  alt="Hotel Bookings"
                  className="float-left mr15 service-image"
                />
                <p className="fcLightGreen mb10 fsize16 service-name">
                  Hotel Bookings
                </p>
                <p className="fsize15 lhight150 text-justify">
                  Some description about the service. Some description about the
                  service. Some description about the service. Some description
                  about the service. Some description about the service. Some
                  description about the service. Some description about the
                  service.
                </p>
              </div>
            </div>
            <div className="service-content col4">
              <div className="inner">
                <img
                  src={imgInsurance}
                  alt="Customized Holidays Travel Insurance"
                  className="float-left mr15 service-image"
                />
                <p className="fcLightGreen mb10 fsize16 service-name">
                  Customized Holidays Travel Insurance
                </p>
                <p className="fsize15 lhight150 text-justify">
                  Some description about the service. Some description about the
                  service. Some description about the service. Some description
                  about the service. Some description about the service. Some
                  description about the service. Some description about the
                  service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FloatingContactUs />
    </>
  );
};

export default ServicesPage;
