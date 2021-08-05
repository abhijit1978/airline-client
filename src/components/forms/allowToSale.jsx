import React from "react";

const AllowToSale = ({ onTogglePopup, ticket }) => {
  console.log({ ticket });
  return (
    <div className="allow-to-sale">
      <div className="full-width form-row">
        <div className="col6 relaive pr5">
          <label className="inline">From</label>
          <input className="inline" type="date" name="fromDate" id="FromDate" />
          <button className="resetDate">
            <i class="bi bi-x-square"></i>
          </button>
        </div>
        <div className="col6 relaive pl5">
          <label className="inline">To</label>
          <input className="inline" type="date" name="toDate" id="ToDate" />
          <button className="resetDate">
            <i class="bi bi-x-square"></i>
          </button>
        </div>
      </div>
      <div className="full-width form-row">
        <div className="col6 relaive pr5">
          <label className="inline">Price</label>
          <input
            className="inline"
            type="number"
            name="salePrice"
            id="SalePrice"
          />
        </div>
        <div className="col6 relaive pl5">
          <label className="inline">Min Qty</label>
          <input
            className="inline"
            type="number"
            name="minQuantity"
            id="MinQuantity"
          />
        </div>
      </div>
      <div className="full-width text-center mt30">
        <button className="primary">Submit</button>
      </div>
    </div>
  );
};

export default AllowToSale;
