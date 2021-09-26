import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import PrintContent from "./printContent";

const TicketPrint = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "Ticket",
  });
  return (
    <div className="page-wrapper full-width">
      <PrintContent ref={componentRef} />
      <button className="button primary" onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};

export default TicketPrint;
