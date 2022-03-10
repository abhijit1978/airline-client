import React from "react";

const ContactUsPage = () => {
  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <div className="col6">
          <h1 className="mb30 fcLightGreen heading-font">Contact Us</h1>
          <div className="full-width mb50">
            <div className="circle-icon mr15">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <div className="contact-content lhight150">
              <p className="fcDeepGreen fsize15">
                <strong>Address</strong>
              </p>
              <p className="lhight150 fsize15">
                Gunanandabati, Jajan Kalibari Road,
                <br />
                P.O.: Kandi, Dist.: Murshidabad, Pin: 742140,
                <br />
                West Bengal, India
                <br />
                [Near Punjab national Bank]
              </p>
            </div>
          </div>
          <div className="full-width mb50">
            <div className="circle-icon mr15">
              <i className="bi bi-envelope-open-fill"></i>
            </div>
            <div className="contact-content lhight150 fsize13">
              <p className="fcDeepGreen fsize15">
                <strong>Email</strong>
              </p>
              <p className="lhight150 fsize15">
                barkat.tat@gmail.com <br />
                barkat.travel@gmail.com
              </p>
            </div>
          </div>
          <div className="full-width">
            <div className="circle-icon mr15">
              <i className="bi bi-phone-vibrate-fill"></i>
            </div>
            <div className="contact-content lhight150 fsize13">
              <p className="fcDeepGreen fsize15">
                <strong>Phone</strong>
              </p>
              <p className="lhight150 fsize15">
                +91-9732555815 , <br />
                +91-9476455772, <br />
                03482-255199
              </p>
            </div>
          </div>
        </div>
        <div className="col6 contact-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3646.9748121450116!2d88.03916281424699!3d23.925945984503098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f99ac349b84ead%3A0x82e673b62b38d6df!2sBARKAT%20TOURS%20AND%20TRAVELS%20RAIL%2CAIR%20TICKTING%2C%20MONEY%20TRANSFER!5e0!3m2!1sen!2sin!4v1637532822997!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            style={{ border: 0 }}
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
