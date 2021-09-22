import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FareSummary from "./fareSummary";
import PassengerContactInfo from "./passengerContactInfo";
import PassengerInfo from "./passengerInfo";
import utils from "../../../utils/utils";

import takeoff from "../../../assets/images/takeoff.png";
import landing from "../../../assets/images/landing.png";
import { resetAll } from "../../../appStore";

const BookTicket = () => {
  const dispatch = useDispatch();
  const agentInfo = useSelector((state) => state.user.user);
  const airlines = useSelector((state) => state.common.airlines);
  const bookingInfo = useSelector((state) => state.booking.tickets);

  const [passengers, setPassenters] = useState(bookingInfo.bookQty);
  const [bookingError, setBookingError] = useState([]);

  const getSource = () => {
    const loc = bookingInfo.location.locationName;
    const sepaIndex = loc.indexOf("-");
    return loc.substr(0, sepaIndex);
  };

  const getDestination = () => {
    const loc = bookingInfo.location.locationName;
    const sepaIndex = loc.indexOf("-");
    return loc.substr(sepaIndex + 2);
  };

  const getIcon = (name) => {
    const airline = airlines.find((item) => item.airlineName === name);
    return `../../../../logo-${airline.alias}.png`;
  };

  const getPassengerInfo = () => {
    let passengersList = [];
    for (let p = 1; p <= passengers; p++) {
      passengersList.push(<PassengerInfo key={p} passId={p} />);
    }
    return passengersList;
  };

  const handleBookTicket = () => {
    const error = utils.validateBookingInfo(bookingInfo);
    setBookingError(error);
    if (!error.length) {
      const fareInfo = { ...bookingInfo.fareSummary };
      fareInfo.totalFare = utils.getTotalFare(bookingInfo);
      const finalBookingObj = {
        travel: {
          airlineName: bookingInfo.airlineName,
          flightNumber: bookingInfo.flightNumber,
          location: bookingInfo.location,
          travelDate: bookingInfo.travelDate,
          departureTime: bookingInfo.departureTime,
          arrivalTime: bookingInfo.arrivalTime,
          pnr: bookingInfo.airlineName,
        },
        passenger: {
          passengers: bookingInfo.passengerInfo,
          contacts: bookingInfo.passengerContactInfo,
        },
        fareDetails: fareInfo,
        agent: {
          agentName: agentInfo.name,
          agentID: agentInfo.userID,
          id: agentInfo.id,
          email: agentInfo.email,
          bookingDate: new Date(),
        },
      };
      console.log(bookingInfo);
      console.log(finalBookingObj);
    }
  };

  useEffect(() => {
    return () => {
      dispatch(
        resetAll({
          passengerInfo: [],
          passengerContactInfo: {},
          fareSummary: {
            bookQty: 1,
            rate: 0,
            otherCharges: 0,
            infantCharges: 0,
            totalFare: 0,
          },
        })
      );
    };
  }, []);

  const handleTicketsCountChange = (count) => {
    setPassenters(count);
  };

  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <div className="col3_4 pr15">
          <h3>Travel Information</h3>
          <div className="travel-details mb30 full-width relaive">
            <div className="col6 text-center">
              <div className="img-wrapper">
                <img
                  src={takeoff}
                  style={{ marginTop: "16px" }}
                  alt="takeoff"
                />
              </div>

              <p className="text-center pb15">
                <span className="fsize26 fcLightGreen">{getSource()}</span> at{" "}
                {bookingInfo.departureTime}
              </p>
            </div>
            <div className="col6 text-center">
              <div className="img-wrapper">
                <img src={landing} alt="landing" />
              </div>
              <p className="text-center pb15">
                <span className="fsize26 fcLightGreen">{getDestination()}</span>{" "}
                at {bookingInfo.arrivalTime}
              </p>
            </div>
            <div className="flight-name">
              <img
                src={getIcon(bookingInfo.airlineName)}
                alt=""
                style={{ opacity: "1" }}
              />
              <strong>{bookingInfo.airlineName}</strong> :{" "}
              <span className="fsize13">{bookingInfo.flightNumber}</span>
            </div>
          </div>
          {bookingError.length ? (
            <div className="booking-error">
              <h4 className="text-center fcRed">Validation Error</h4>
              <ol>
                {bookingError.map((item, index) => (
                  <li className="fsize13 mb5" key={index}>
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
          <h3>Passenger Information</h3>
          <div className="passenget-details">{getPassengerInfo()}</div>
          <div className="contact-details">
            <PassengerContactInfo />
          </div>
        </div>
        <div className="col4 pl15">
          <h3>Fare Summary</h3>
          <FareSummary onTicketsCountChange={handleTicketsCountChange} />
          <button
            className="primary book-ticket hvr-bounce-to-bottom"
            onClick={handleBookTicket}
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookTicket;
