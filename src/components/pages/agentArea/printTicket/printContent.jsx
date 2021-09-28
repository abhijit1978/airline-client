import React, { PureComponent } from "react";
import moment from "moment";

class PrintContent extends React.PureComponent {
  getIcon = (name) => {
    const airline = this.props.airlines.find(
      (item) => item.airlineName === name
    );
    return `../../../../logo-${airline.alias}.png`;
  };

  render() {
    const { agent, fareDetails, passenger, travel, _id } = {
      ...this.props.data,
    };
    return (
      <div className="print-container">
        <p style={{ marginBottom: "10px", textAlign: "right" }}>
          Original - {moment().format("dddd, MMMM Do YYYY")}
          <a href="https://www.google.co.in/">just check</a>
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
                <table width="100%" cellSpacing="0" cellPadding="0">
                  <thead>
                    <tr>
                      <th className="print-heading">Airline PNR Number</th>
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
                      <td>Confirm</td>
                      <td>{_id}</td>
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
                        <p>{travel.location.locationName}</p>
                        <p>{travel.location.locationName}</p>
                        <p>&nbsp;</p>
                        <p style={{ fontSize: "15px" }}>
                          {moment(new Date(travel.travelDate)).format(
                            "dddd, MMMM Do YYYY"
                          )}{" "}
                          at {travel.departureTime}
                        </p>
                      </td>
                      <td>
                        <p>{travel.location.locationName}</p>
                        <p>{travel.location.locationName}</p>
                        <p>&nbsp;</p>
                        <p style={{ fontSize: "15px" }}>
                          {moment(new Date(travel.travelDate)).format(
                            "dddd, MMMM Do YYYY"
                          )}{" "}
                          at {travel.arrivalTime}
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
                      passenger.infants.map((inf) => (
                        <tr>
                          <td>{inf.infId}</td>
                          <td>{inf.name}</td>
                          <td>
                            Infant, {inf.sex}, <strong>DOB: </strong>
                            {inf.dob}
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
                            This group ticket is 100% Non Refundable, Non
                            Changeable & Non Cancellable.
                          </li>
                          <li>
                            Charged fare is totally agreed between "BUYER &
                            SELLER", any issues related to fares thereafter will
                            not be entertained.
                          </li>
                          <li>
                            Check flight & passenger(s) details directly by
                            logging / calling to the respective airlines, any
                            dispute with in 24 hours prior to departure will not
                            be entertained.
                          </li>
                          <li>
                            No updates will be shared from our end in respect to
                            flight cancellation / changes in timings, "BUYER"
                            had to check directly with the respective airlines
                            before departure.
                          </li>
                          <li>Web checkin not allowed in this ticket.</li>
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
