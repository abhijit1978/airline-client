import React from "react";
import homeBanner from "./../../assets/images/runway.jpg";

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
              <i class="bi bi-file-earmark-text-fill"></i>
            </div>
            <div className="inline">
              <p className="bigger-text fcSafron">Ticket Booking</p>
              <p className="smaller-text">Small descriptions will come.</p>
            </div>
          </div>
          <div className="col3">
            <div className="circle-60 circle-blue inline mr15">
              <i class="bi bi-people-fill"></i>
            </div>
            <div className="inline">
              <p className="bigger-text fcBlue">HR Outsourcing </p>
              <p className="smaller-text">Small descriptions will come.</p>
            </div>
          </div>
          <div className="col3">
            <div className="circle-60 circle-green inline mr15">
              <i class="bi bi-file-image-fill"></i>
            </div>
            <div className="inline">
              <p className="bigger-text fcLightGreen">Tours & Travel</p>
              <p className="smaller-text">Small descriptions will come.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt30">
        <h1 className="fsize22 fcDeepGreen">
          Welcome to <span className="fsize30 fcLightGreen">Barkat Fly</span>
        </h1>
        <p>
          <br />
          <br />
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
          This is home page content.
          <br />
          <br />
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
          <br />
          <br />
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
          This is home page content. This is home page content. This is home
          page content. This is home page content. This is home page content.
        </p>
      </div>
    </>
  );
};

export default HomePage;
