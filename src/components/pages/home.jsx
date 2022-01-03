import React from "react";
import FloatingContactUs from "../common/floatingContactUs";
import homeBanner from "./../../assets/images/banner-runway.jpg";
import iata from "./../../assets/images/iata.jpg";

const HomePage = () => {
  return (
    <>
      <div className="home-banner">
        <img src={homeBanner} alt="home banner" />
      </div>

      <div className="home-heros">
        <div className="container">
          <div className="col3">
            <div className="circle-60 circle-saffron inline mr15">
              <i className="bi bi-file-earmark-text-fill"></i>
            </div>
            <div className="inline">
              <p className="bigger-text fcSafron heading-font">
                Ticket Booking
              </p>
              <p className="smaller-text">
                Book filght tickes all over the globe.
              </p>
            </div>
          </div>
          <div className="col3">
            <div className="circle-60 circle-blue inline mr15">
              <i className="bi bi-people-fill"></i>
            </div>
            <div className="inline">
              <p className="bigger-text fcBlue heading-font">VISA Assistance</p>
              <p className="smaller-text">Small descriptions will come.</p>
            </div>
          </div>
          <div className="col3">
            <div className="circle-60 circle-green inline mr15">
              <i className="bi bi-file-image-fill"></i>
            </div>
            <div className="inline">
              <p className="bigger-text fcLightGreen heading-font">
                Tours & Travel
              </p>
              <p className="smaller-text">
                Travel with us all over India & abroad.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt30">
        <h1 className="fsize22 fcDeepGreen mb30">
          Welcome to{" "}
          <span className="fsize30 fcLightGreen heading-font">
            Barkat Tours and Travels
          </span>
        </h1>
        <p className="mb15 fsize18 lhight150">
          <span className="fcLightGreen">Barkat Tours and Travels</span> has
          emerged as one of the leading travel agencies since its inception in
          2006 at Murshidabad - The Lost kingdom of Siraj-UI-Dolla. For over a
          decade now we are serving the Travel fraternity / Industry / valued
          clients with passion towards the excellence in service.
          <img src={iata} alt="IATA" className="iata" />
        </p>
        <p className="mb15 fsize18 lhight150">
          <span className="fcLightGreen">Barkat Tours and Travels</span> is
          operated by{" "}
          <strong>
            <i>Mr. Barkat Sheikh</i>
          </strong>
          , trusted name in the airline professionals, IATA certified, Trained
          in Ticketing and Visa services, having a combined experience in the
          Travel and Tourism Industry more than a decade. With the enthusiasm
          and experience in the travel and Tourism Industry We are working
          tirelessly to anticipate customer's needs and deliver them the best.
        </p>
        <p className="mb15 fsize18 lhight150">
          Services offered by us are, Airline ticketing, Visa assistance, Hotel
          Bookings, Domestic and International packages, Passport assistant,
          Customized Holidays Travel Insurance etc. We have dedicated account
          managers who are always committed and thrive for excellence with their
          expertise in the Travel and Tourism sector more than 15 years. With
          the high-quality{" "}
          <span className="fcLightGreen">24×7 Customer Services</span> can have
          comprehensive choice with an affordable price from us.
        </p>
      </div>

      <FloatingContactUs />
    </>
  );
};

export default HomePage;
