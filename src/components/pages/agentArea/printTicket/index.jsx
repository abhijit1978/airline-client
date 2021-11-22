import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";
import PrintContent from "./printContent";
import moment from "moment";

const TicketPrint = () => {
  const original = useSelector((state) => state.booking.bookedTicket.data);
  const routeData = useLocation();
  const airlines = useSelector((state) => state.common.airlines);
  const user = useSelector((state) => state.user.user);
  const locations = useSelector((state) => state.common.locations);
  const componentRef = useRef();
  const copyType = routeData.copyType;

  const data = copyType === "Original" ? original : routeData.data;

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: `E-Ticket_${data.ticketID}_${moment().format("DD-MM-YYYY")}`,
  });

  return (
    <div className="page-wrapper full-width">
      <PrintContent
        ref={componentRef}
        data={data}
        airlines={airlines}
        locations={locations}
        copyType={copyType}
        user={user}
      />
      <button className="button primary" onClick={handlePrint}>
        Print this out!
      </button>
    </div>
  );
};

export default TicketPrint;
