import React, { useState, useEffect } from "react";
import axios from "axios";
import { paymentUrl, API_HEADER } from "../../../configs/app.config";
import { useSelector } from "react-redux";

const MakePayment = () => {
  const user = useSelector((state) => state.user.user);
  const [formData, setFormData] = useState({
    amount: "",
    bankName: "",
    bankBranchName: "",
    transactionID: "",
    userID: user.id,
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
      setMsg({ type: "error", message: "All fields are mandetory." });
    } else {
      axios
        .post(paymentUrl, formData, API_HEADER)
        .then((response) => {
          setMsg({
            type: "success",
            message:
              "Thanks for your payment information. We will varify and confirm you soon.",
          });
        })
        .catch((err) => {
          setMsg({ type: "error", message: err.response.message });
        });
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
              <p
                className={
                  msg.type === "error"
                    ? "fcRed text-center mt15"
                    : "fcLightGreen  text-center mt15"
                }
              >
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
