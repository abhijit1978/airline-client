import React, { PureComponent } from "react";
import moment from "moment";
import { baseURL } from "../../../../configs/app.config";

class PrintContent extends PureComponent {
  getIcon = (name) => {
    const airline = this.props.airlines.find(
      (item) => item.airlineName === name
    );
    return `${baseURL}${airline.airlineLogo}`;
  };
  getSrcAirport = (code) => {
    const location = this.props.locations.find(
      (item) => item.locationCode === code
    );
    return location.srcAirportName;
  };
  getDestAirport = (code) => {
    const location = this.props.locations.find(
      (item) => item.locationCode === code
    );
    return location.destAirportName;
  };
  getLocation = (location) => {
    return location.split("-");
  };

  getArrivalTime = (trv) => {
    if (trv.arrivalTime < trv.departureTime) {
      return moment(new Date(trv.travelDate))
        .add(1, "days")
        .format("dddd, MMMM Do YYYY");
    }
    return moment(new Date(trv.travelDate)).format("dddd, MMMM Do YYYY");
  };

  getAgencyName = () => {
    const { name, agencyName } = this.props.user;
    return agencyName
      ? agencyName
      : `${name.firstName} ${name.middleName != -1 ? name.middleName : ""} ${
          name.lastName
        }`;
  };

  render() {
    const { agent, passenger, travel, _id, ticketID } = {
      ...this.props.data,
    };
    return (
      <div className="print-container">
        <p style={{ marginBottom: "10px", textAlign: "right" }}>
          {this.props.copyType} - {moment().format("dddd, MMMM Do YYYY")}
        </p>
        <table
          width="100%"
          cellSpacing="0"
          cellPadding="0"
          style={{ border: "1px solid #000", borderSpacing: "0px" }}
          className="print-table"
        >
          <tbody>
            <tr>
              <td>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <p className="agencyName">{this.getAgencyName()}</p>
                        <p>
                          {this.props.user.address.houseNoStreeetName},{" "}
                          {this.props.user.address.cityTownVillage},<br />
                          {this.props.user.address.postOffice}, Pin:{" "}
                          {this.props.user.address.pin},{" "}
                          {this.props.user.address.state},
                        </p>
                      </td>
                      <td>
                        <p className="text-right">
                          <i className="bi bi-phone mr10"></i>{" "}
                          {this.props.user.contactNo}
                        </p>
                        <br />
                        <p className="text-right">
                          <i className="bi bi-envelope mr10"></i>{" "}
                          {this.props.user.email}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table width="100%" cellSpacing="0" cellPadding="0">
                  <thead>
                    <tr>
                      <th className="print-heading">PNR Number</th>
                      <th className="print-heading">Booked on</th>
                      <th className="print-heading">Status</th>
                      <th className="print-heading">Booking ID</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>{travel.pnr}</td>
                      <td>
                        {moment(new Date(agent.bookingDate)).format(
                          "dddd, MMMM Do YYYY"
                        )}
                      </td>
                      <td>Confirmed</td>
                      <td>{ticketID}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table cellSpacing="0" cellPadding="0">
                  <thead>
                    <tr>
                      <th className="print-heading" colSpan="2">
                        Flight
                      </th>
                      <th className="print-heading">Departure</th>
                      <th className="print-heading">Arrival</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={{ textAlign: "center" }}>
                        <img
                          src={this.getIcon(travel.airlineName)}
                          alt={travel.airlineName}
                          style={{ height: "50px" }}
                        />
                      </td>
                      <td>
                        <p>
                          <strong className="fsize18">
                            {travel.airlineName}
                          </strong>
                        </p>
                        <p>
                          <strong>Flight No.: </strong>
                          {travel.flightNumber}
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          <strong>Cabin: </strong> Economy
                        </p>
                      </td>
                      <td>
                        <p>
                          {this.getLocation(travel.location.locationName)[0]}
                        </p>
                        <p>
                          {this.getSrcAirport(travel.location.locationCode)}
                        </p>
                        <p>&nbsp;</p>
                        <p style={{ fontSize: "15px" }}>
                          {moment(new Date(travel.travelDate)).format(
                            "dddd, MMMM Do YYYY"
                          )}{" "}
                          at {travel.departureTime}
                        </p>
                      </td>
                      <td>
                        <p>
                          {this.getLocation(travel.location.locationName)[1]}
                        </p>
                        <p>
                          {this.getDestAirport(travel.location.locationCode)}
                        </p>
                        <p>&nbsp;</p>
                        <p style={{ fontSize: "15px" }}>
                          {this.getArrivalTime(travel)} at {travel.arrivalTime}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table cellSpacing="0" cellPadding="0" width="100%">
                  <thead>
                    <tr>
                      <th className="print-heading">SR</th>
                      <th className="print-heading">Passenger Name</th>
                      <th className="print-heading">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {passenger.passengers.map((psg) => (
                      <tr key={psg.psgId}>
                        <td>{psg.psgId}</td>
                        <td>
                          {psg.title} {psg.firstName} {psg.lastName}
                        </td>
                        <td>Adult</td>
                      </tr>
                    ))}
                    {passenger.infants &&
                      passenger.infants.map((inf, index) => (
                        <tr key={`i${inf.infantId}`}>
                          <td
                            style={
                              index === 0
                                ? { borderTop: "1px dashed #c3c3c3" }
                                : {}
                            }
                          >
                            {inf.infantId}
                          </td>
                          <td
                            style={
                              index === 0
                                ? { borderTop: "1px dashed #c3c3c3" }
                                : {}
                            }
                          >
                            {inf.name}
                          </td>
                          <td
                            style={
                              index === 0
                                ? { borderTop: "1px dashed #c3c3c3" }
                                : {}
                            }
                          >
                            Infant, {inf.sex}, <strong>DOB: </strong>
                            {moment(new Date(inf.dob)).format("DD MMMM, YYYY")}
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th className="print-heading">Terms and Conditions</th>
                    </tr>
                  </thead>
                  <tbody width="100%" cellSpacing="0" cellPadding="0">
                    <tr>
                      <td>
                        <ol className="tc">
                          <li>
                            This Ticket is 100%
                            Non-Refundable-Non-Changeable-Non-Cancellable.
                          </li>
                          <li>
                            The charged fare is totally mutually agreed between
                            Seller and buyer, hence any type of issue related
                            fares or ticket will not be entertained or
                            considered.
                          </li>
                          <li>
                            As per Govt. rules and policies Web Check In is
                            mandatory for all passenger prior to scheduled
                            departure. Hence buyer need to confirm the web check
                            prior departure.
                          </li>
                          <li>
                            Any update regarding flight cancellation/ change of
                            flight timings, buyer had to check directly with the
                            respective airline’s prior departure. Seller is not
                            at all responsible for any update from respective
                            airlines.
                          </li>
                          <li>
                            Check flight & passenger(s) details directly by
                            logging / calling to the respective airlines, any
                            dispute within 48 hours prior to departure will not
                            be entertained at any circumstances.
                          </li>
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table>
                  <thead>
                    <tr>
                      <th className="print-heading">Important Informations</th>
                    </tr>
                  </thead>
                  <tbody width="100%" cellSpacing="0" cellPadding="0">
                    <tr>
                      <td>
                        <ol className="tc">
                          <li>
                            Valid Govt. ID proof required at the time of
                            Boarding.
                          </li>
                          <li>
                            Check-in counter opens 2 hours prior to scheduled
                            departure time.
                          </li>
                          <li>
                            Obtain your Boarding pass from check-in counters at
                            least 45 minutes prior to scheduled departure time.
                          </li>
                          <li>
                            Free Baggage allowance is 15 Kilo & Hand Baggage
                            allowance is 7 Kilo.
                          </li>
                        </ol>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default PrintContent;
