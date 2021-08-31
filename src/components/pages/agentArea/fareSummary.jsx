import React from "react";

const FareSummary = () => {
  return (
    <div className="fare-summary-wrapper">
      <table>
        <tbody>
          <tr>
            <td>No of Tickets</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Fare per Ticket</td>
            <td>6780.00</td>
          </tr>
          <tr>
            <td>Other Charges</td>
            <td>0.00</td>
          </tr>
          <tr>
            <td>Infant</td>
            <td>0.00</td>
          </tr>
          <tr className="total-fare">
            <td>Total Fare</td>
            <td className="fcLightGreen">
              <strong>25693.00</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FareSummary;
