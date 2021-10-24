import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import PrintContent from "./printContent";

const TicketPrint = () => {
  const original = useSelector((state) => state.booking.bookedTicket.data);
  const routeData = useLocation();
  const airlines = useSelector((state) => state.common.airlines);
  const locations = useSelector((state) => state.common.locations);
  const componentRef = useRef();
  const copyType = routeData.copyType;

  const data = copyType === "Original" ? original : routeData.data;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: data._id,
  });

  return (
    <div className="page-wrapper full-width">
      <PrintContent
        ref={componentRef}
        data={data}
        airlines={airlines}
        locations={locations}
        copyType={copyType}
      />
      <button className="button primary" onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};

export default TicketPrint;
