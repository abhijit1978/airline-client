import React, { PureComponent } from "react";

class PrintContent extends React.PureComponent {
  render() {
    return (
      <div className="print-container">
        <p style={{ marginBottom: "10px", textAlign: "right" }}>
          Original - Thu, 09­ Sep­ 2021 at 8:15
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
                  <thead>
                    <tr>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Airline PNR Number
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Booked on
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Status
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Booking ID
                      </th>
                    </tr>
                  </thead>
                  <tbody width="100%" cellSpacing="0" cellPadding="0">
                    <tr>
                      <td>ABC100</td>
                      <td>Thu, 09­ Sep­ 2021</td>
                      <td>Confirm</td>
                      <td>ABC12345</td>
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
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                        colSpan="2"
                      >
                        Flight
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Departure
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Arrival
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>image</td>
                      <td style={{ verticalAlign: "top" }}>
                        <p style={{ marginBottom: "5px" }}>
                          <strong style={{ fontSize: "18px" }}>Indigo</strong>
                        </p>
                        <p style={{ marginBottom: "5px" }}>
                          <strong>Flight No.: </strong>IN100
                        </p>
                        <p>&nbsp;</p>
                        <p>
                          <strong>Cabin: </strong> Economy
                        </p>
                      </td>
                      <td style={{ verticalAlign: "top" }}>
                        <p style={{ marginBottom: "5px" }}>Kolkata (CCU)</p>
                        <p>Netaji Subhash International Airport</p>
                        <p>&nbsp;</p>
                        <p style={{ fontSize: "18px" }}>
                          Thu, 09­ Sep­ 2021 at 8:15
                        </p>
                      </td>
                      <td style={{ verticalAlign: "top" }}>
                        <p style={{ marginBottom: "5px" }}>Bengaluru (BLR)</p>
                        <p>Kempegowda International Airport</p>
                        <p>&nbsp;</p>
                        <p style={{ fontSize: "18px" }}>
                          11:15, Thu, 09­ Sep­ 2021
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
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        SR
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Passenger Name
                      </th>
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Type
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mr. Hari Sing</td>
                      <td>Adult</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Mrs. Hira Sing</td>
                      <td>Adult</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Hiral Sing</td>
                      <td>
                        Infant, <strong>DOB: </strong>10-12-2020
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
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Terms and Conditions
                      </th>
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
                      <th
                        style={{
                          background: "#66730b",
                          color: "#fff",
                          borderSpacing: "0px",
                        }}
                      >
                        Important Informations
                      </th>
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
