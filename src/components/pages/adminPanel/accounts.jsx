import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import {
  API_HEADER,
  usersURL,
  statementUrl,
} from "../../../configs/app.config";

const AccountStatement = () => {
  const today = moment();
  const [users, setUsers] = useState([]);
  const [trans, setTrans] = useState([]);
  const [activeUser, setActiveUser] = useState("");
  const [month, setMonth] = useState(today.format("M"));
  const [year, setYear] = useState(today.format("YYYY"));

  const getUsers = async () => {
    try {
      const response = await axios.get(usersURL, API_HEADER);
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

  const getTransDetails = (tran) => {
    if (tran.transType === "debit") {
      return `Ticket ID: ${tran.ticket.ticketID}, PNR: ${tran.ticket.pnr}, Travel Dt. ${tran.ticket.travelDate}`;
    } else {
      return `${tran.payment.bankName}, ${tran.payment.branchName} vide Transaction ID: ${tran.payment.transID}`;
    }
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
                  <td>
                    {tran.transType === "debit" ? tran.ticket.totalFare : ""}
                  </td>
                  <td>
                    {tran.transType === "credit" ? tran.payment.amount : ""}
                  </td>
                  <td>
                    {!tran.payment.confirmReceipt ? "Pending" : "Recdived"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AccountStatement;
