import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import {
  API_HEADER,
  usersURL,
  statementUrl,
  updateBalanceUrl,
} from "../../../configs/app.config";

const AccountStatement = () => {
  const today = moment();
  const [users, setUsers] = useState([]);
  const [trans, setTrans] = useState([]);
  const [activeUser, setActiveUser] = useState("");
  const [month, setMonth] = useState(today.format("M"));
  const [year, setYear] = useState(today.format("YYYY"));
  const [pop, setPop] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.post(usersURL, API_HEADER);
      setUsers(response.data);
    } catch (error) {
      console.log("som error");
    }
  };

  const getUserTransactions = async () => {
    try {
      const response = await axios.post(
        statementUrl,
        { id: activeUser },
        API_HEADER
      );
      setTrans(response.data.statement);
    } catch (error) {
      setTrans([]);
    }
  };

  useEffect(() => {
    async function fetchUsers() {
      await getUsers();
    }
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeUser) {
      async function fetchTrans() {
        getUserTransactions();
      }
      fetchTrans();
    }
  }, [activeUser]);

  useEffect(() => {}, [pop]);

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

  const handleConfirmReceipt = async () => {
    const payload = {
      userID: pop.userID,
      amount: pop.payment.amount,
      _id: pop._id,
    };
    await axios
      .post(updateBalanceUrl, payload, API_HEADER)
      .then(async () => {
        await getUserTransactions();
      })
      .catch((err) => console.log(err));

    setPop("");
  };

  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <div className="full-width mb10 text-right">
          <label className="mr10">Select User</label>
          <select
            value={activeUser}
            onChange={(e) => setActiveUser(e.target.value)}
            className="mr15"
          >
            <option value="">Select user</option>
            {users.length &&
              users.map((user) => (
                <option value={user._id} key={user._id}>
                  {user.name.firstName} {user.name.lastName}
                </option>
              ))}
          </select>
          <label className="mr10">Select Period</label>
          <select
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            style={{ width: "100px", minWidth: "auto" }}
            className="mr5"
          >
            <option value="">Select Month</option>
            <option value="01">Jan</option>
            <option value="02">Feb</option>
            <option value="03">Mar</option>
            <option value="04">Apr</option>
            <option value="05">May</option>
            <option value="05">Jun</option>
            <option value="07">Jul</option>
            <option value="08">Aug</option>
            <option value="09">Sep</option>
            <option value="10">Oct</option>
            <option value="11">Nov</option>
            <option value="12">Dec</option>
          </select>
          <input
            type="number"
            value={year}
            className="mr15"
            style={{ width: "100px" }}
            placeholder="YYYY"
            onChange={(e) => setYear(e.target.value)}
            minLength="4"
            maxLength="4"
          />
          <button className="primary">Get Statement</button>
        </div>

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
            {trans.length &&
              trans.map((tran) => (
                <tr>
                  <td>{moment(tran.transDate).format("DD-MM-YYYY")}</td>
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
                        <span
                          className="fcLightGreen pointer"
                          onClick={() => setPop(tran)}
                        >
                          Pending
                        </span>
                      ) : (
                        "Received"
                      )
                    ) : (
                      ""
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {pop && (
          <div className="popup-center confirm">
            <header>Receipt Confirmation</header>
            <div className="content-area">
              <p className="text-center">Are you sure?</p>
              <div className="text-center mt15 full-width">
                <button className="primary mr10" onClick={handleConfirmReceipt}>
                  Confirm
                </button>
                <button className="cancel" onClick={() => setPop("")}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountStatement;
