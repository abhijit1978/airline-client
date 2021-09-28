import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import PrintContent from "./printContent";

const TicketPrint = () => {
  const data = useSelector((state) => state.booking.bookedTicket.data);
  const airlines = useSelector((state) => state.common.airlines);
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: data._id,
  });
  return (
    <div className="page-wrapper full-width">
      <PrintContent ref={componentRef} data={data} airlines={airlines} />
      <button className="button primary" onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};

export default TicketPrint;
