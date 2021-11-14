import React from "react";

const BankDetails = () => {
  return (
    <div className="page-wrapper full-width">
      <h3 className="text-center mb10 fcLightGreen">
        <i className="bi bi-safe-fill"></i> Bank Details
      </h3>
      <table className="user-profile">
        <tbody>
          <tr>
            <td>Account Name</td>
            <td>BARKAT TOURS AND TRAVELS</td>
          </tr>
          <tr>
            <td>Account Number</td>
            <td>911020026725238</td>
          </tr>
          <tr>
            <td>Account Type</td>
            <td>Current</td>
          </tr>
          <tr>
            <td>IFSC Code</td>
            <td>UTIB0001404</td>
          </tr>
          <tr>
            <td>Bank Name</td>
            <td>AXIS BANK LTD</td>
          </tr>
          <tr>
            <td>Branch</td>
            <td>KANDI</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BankDetails;
