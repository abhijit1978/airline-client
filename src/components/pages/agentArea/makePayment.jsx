import React, { useState, useEffect } from "react";

const MakePayment = () => {
  const [formData, setFormData] = useState({
    amount: "",
    bankName: "",
    bankBranchName: "",
    transactionID: "",
  });

  const [msg, setMsg] = useState({ type: "", message: "" });

  const valiidateData = () => {
    let isValid = true;
    for (let key in formData) {
      if (!formData[key]) {
        isValid = false;
        break;
      }
    }
    return isValid;
  };

  const handleSubmit = () => {
    if (!valiidateData()) {
      console.log("Failed");
    } else {
      console.log("Success");
    }
  };
  return (
    <div className="page-wrapper full-width">
      <h3 className="text-center mb10 fcLightGreen">
        <i className="bi bi-wallet-fill"></i> Make Payment
      </h3>
      <div className="payment-wrapper">
        <div className="row">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            id="Amount"
            value={formData.amount}
            onChange={(e) => {
              setFormData({ ...formData, amount: e.target.value });
            }}
          />
        </div>
        <div className="row">
          <label>Bank Name</label>
          <input
            type="text"
            name="bankName"
            id="BankName"
            value={formData.bankName}
            onChange={(e) => {
              setFormData({ ...formData, bankName: e.target.value });
            }}
          />
        </div>
        <div className="row">
          <label>Bank Brabch Name</label>
          <input
            type="text"
            name="bankBranchName"
            id="BankbranchName"
            value={formData.bankBranchName}
            onChange={(e) => {
              setFormData({ ...formData, bankBranchName: e.target.value });
            }}
          />
        </div>
        <div className="row">
          <label>Transaction ID</label>
          <input
            type="text"
            name="transactionID"
            id="TransactionID"
            value={formData.transactionID}
            onChange={(e) => {
              setFormData({ ...formData, transactionID: e.target.value });
            }}
          />
        </div>
        <div className="row text-center">
          <button
            className="primary hvr-bounce-to-bottom"
            onClick={handleSubmit}
          >
            Confirm Payment
          </button>
          <div className="row">
            {msg.type && msg.message && (
              <p className={msg.type === "error" ? "scRed" : "fcLightGreen"}>
                {msg.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
