import React, { useState } from "react";
import axios from "axios";
import { confirmSaleUrl, API_HEADER } from "../../configs/app.config";

const ConfirmSaleForm = ({ data, onTogglePopup }) => {
  const [formData, setFormData] = useState({
    id: data._id,
    saleReff: "",
    saleDate: new Date(),
  });

  const [validationError, setValidationError] = useState({
    isValid: true,
    message: "",
  });

  const isValidData = () => {
    console.log(data);
    if (!formData.saleReff || !formData.id) {
      return false;
    } else {
      return true;
    }
  };

  const submitForm = () => {
    if (!isValidData()) {
      setValidationError({
        isValid: false,
        message: "Invalid Sale Reference.",
      });
    } else {
      axios
        .post(confirmSaleUrl, formData, API_HEADER)
        .then((response) => {
          console.log(response);
          onTogglePopup({ status: false, data: response.data.message });
          setValidationError({
            isValid: true,
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
          setValidationError({
            isValid: false,
            message: "Technical Error.",
          });
        });
    }
  };

  return (
    <>
      <div className="form-wrapper col3_4 conrim-sale allow-to-sale">
        <div className="full-width form-row">
          <label>Sale reference</label>
          <input
            type="text"
            name="saleRef"
            value={formData.saleRef}
            onChange={(e) =>
              setFormData({ ...formData, saleReff: e.target.value })
            }
            placeholder="Sale Reference"
          />
        </div>
        {!validationError.isValid && (
          <p className="login-error-message text-center">
            {validationError.message}
          </p>
        )}
        <div className="full-width text-center mt30">
          <button className="primary hvr-bounce-to-bottom" onClick={submitForm}>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
};

export default ConfirmSaleForm;
