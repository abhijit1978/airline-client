import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import moment from "moment";
import { statementUrl, API_HEADER } from "../../../configs/app.config";

const Accounts = () => {
  const [trans, setTrans] = useState([]);
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    async function fetch() {
      await getUserTransactions();
    }
    if (Object.keys(user).length) {
      fetch();
    }
  }, [user]);

  const getTransDetails = (tran) => {
    if (tran.transType === "debit") {
      return (
        <span>
          <span className="fcLightGreen">Ticket ID:</span> $
          {tran.ticket.ticketID}, <span className="fcLightGreen">PNR:</span> $
          {tran.ticket.pnr}, <span className="fcLightGreen">Travel Date:</span>{" "}
          ${moment(new Date(tran.ticket.travelDate)).format("DD-MMM-YYYY")}
        </span>
      );
    } else {
      return `${tran.payment.bankName}, ${
        tran.payment.branchName
      } vide Transaction ID: ${tran.payment.transID} dated ${moment(
        trans.transDate
      ).format("DD-MM-YYYY")}`;
    }
  };

  const getUserTransactions = async () => {
    try {
      const response = await axios.post(
        statementUrl,
        { id: user.id },
        API_HEADER
      );
      setTrans(response.data.statement);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <table className="booked-tickets-list colored" width="100%">
          <thead>
            <tr>
              <th>Date</th>
              <th>Transaction Details</th>
              <th>Debit</th>
              <th>Credit</th>
              <th>Approval</th>
            </tr>
          </thead>
          <tbody>
            {trans.length ? (
              trans.map((tran) => (
                <tr key={tran._id}>
                  <td>{moment(trans.transDate).format("DD-MM-YYYY")}</td>
                  <td>{getTransDetails(tran)}</td>
                  <td className="text-right">
                    {tran.transType === "debit"
                      ? tran.ticket.totalFare.toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                      : ""}
                  </td>
                  <td className="text-right">
                    {tran.transType === "credit"
                      ? tran.payment.amount.toLocaleString("en-IN", {
                          maximumFractionDigits: 2,
                          minimumFractionDigits: 2,
                        })
                      : ""}
                  </td>
                  <td>
                    {tran.transType === "credit" ? (
                      !tran.payment.confirmReceipt ? (
                        <span className="fcLightGreen">Pending</span>
                      ) : (
                        "Received"
                      )
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Loading ....</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
