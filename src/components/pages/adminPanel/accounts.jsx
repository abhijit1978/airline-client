import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import utils from "../../../utils/utils";

import {
  API_HEADER,
  usersURL,
  statementUrl,
  updateBalanceUrl,
  pendingPaymentRequestUrl,
  paymentRejectUrl,
  activeUserURL,
} from "../../../configs/app.config";

const AccountStatement = () => {
  // const today = moment();
  const [users, setUsers] = useState([]);
  const [trans, setTrans] = useState([]);
  const [activeUser, setActiveUser] = useState("");
  // const [month, setMonth] = useState(today.format("M"));
  // const [period, setPeriod] = useState(today.format("YYYY"));
  const [pop, setPop] = useState("");
  const [activeUserData, setActiveUserData] = useState("");

  const getUsers = async () => {
    try {
      const response = await axios.post(usersURL, API_HEADER);
      setUsers(response.data);
    } catch (error) {
      console.log("som error");
    }
  };

  const getActiveUserData = async () => {
    try {
      const response = await axios.post(
        activeUserURL,
        { id: activeUser },
        API_HEADER
      );
      setActiveUserData(response.data || {});
    } catch (error) {
      console.log("get user balance error");
    }
  };

  const getPendingRecipts = async () => {
    const pendingReceipts = await axios.post(
      pendingPaymentRequestUrl,
      API_HEADER
    );
    setTrans(pendingReceipts.data);
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
      await getPendingRecipts();
    }
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (activeUser) {
      async function fetchTrans() {
        getUserTransactions();
        getActiveUserData();
      }
      fetchTrans();
    } else {
      async function fetchTrans() {
        await getPendingRecipts();
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
      let userName = "";
      if (!activeUser) {
        const user = users.filter((user) => user._id === tran.userID);
        const { firstName, middleName, lastName } = { ...user[0]["name"] };
        userName = `${firstName} ${
          middleName != -1 ? middleName : ""
        } ${lastName}`;
      }

      return `${tran.payment.bankName}, ${
        tran.payment.branchName
      } vide Transaction ID: ${tran.payment.transID} dated ${moment(
        trans.transDate
      ).format("DD-MM-YYYY")} ${userName}`;
    }
  };

  const handleConfirm = () => {
    pop.type === "accept" ? handleAccept() : handleReject();
  };

  const handleAccept = async () => {
    const payload = {
      userID: pop.tran.userID,
      amount: pop.tran.payment.amount,
      _id: pop.tran._id,
    };
    await axios
      .post(updateBalanceUrl, payload, API_HEADER)
      .then(async () => {
        if (activeUser) {
          await getUserTransactions();
          await getActiveUserData();
        } else {
          await getPendingRecipts();
        }
      })
      .catch((err) => console.log(err));

    setPop("");
  };

  const handleReject = async () => {
    const payload = {
      _id: pop.tran._id,
    };
    await axios
      .post(paymentRejectUrl, payload, API_HEADER)
      .then(async () => {
        activeUser ? await getUserTransactions() : await getPendingRecipts();
      })
      .catch((err) => console.log(err));

    setPop("");
  };

  return (
    <div className="page-wrapper full-width">
      <div className="container">
        <div className="full-width mb10 text-right inline">
          {activeUser && (
            <div className="float-left bal-summary">
              <div className="inline mr5">
                <label>Limit:</label>{" "}
                {utils.formatNum(activeUserData?.user?.limit || 0)}
              </div>
              <div className="inline mr5">
                <label>Due:</label>{" "}
                {utils.formatNum(activeUserData?.user?.balance.due || 0)}
              </div>
              <div className="inline">
                <label>Balance:</label>{" "}
                {utils.formatNum(activeUserData?.user?.balance.balance || 0)}
              </div>
            </div>
          )}
          <div className="float-right">
            <label className="mr10">User</label>
            <select
              value={activeUser}
              onChange={(e) => setActiveUser(e.target.value)}
              className="mr15"
            >
              <option value="">User</option>
              {users.length &&
                users.map((user) => (
                  <option value={user._id} key={user._id}>
                    {user.name.firstName} {user.name.lastName}
                  </option>
                ))}
            </select>
            <label className="mr10">Period</label>
            <input
              type="month"
              className="mr15"
              // onChange={(e) => setPeriod(e.target.value)}
            />
            <button className="primary">Get Statement</button>
          </div>
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
            {users.length && trans.length ? (
              trans.map((tran) => (
                <tr
                  key={tran._id}
                  style={
                    tran.transType === "credit" && !tran.payment.confirmReceipt
                      ? { background: "rgb(158 182 26 / 30%)" }
                      : {}
                  }
                >
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
                  <td style={{ textAlign: "center" }}>
                    {tran.transType === "credit" ? (
                      !tran.payment.confirmReceipt ? (
                        <>
                          <span
                            className="fcDeepGreen pointer"
                            onClick={() => setPop({ type: "accept", tran })}
                          >
                            Accept
                          </span>{" "}
                          /{" "}
                          <span
                            className="fcRed pointer"
                            onClick={() => setPop({ type: "reject", tran })}
                          >
                            Reject
                          </span>
                        </>
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
                <td colSpan={5} className="text-center">
                  <strong>No transactions found for this user.</strong>
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {pop && (
          <div className="popup-center confirm">
            <header>
              {pop.type === "accept"
                ? "Confirm accept payment"
                : "Confirm reject & delete"}
            </header>
            <div className="content-area">
              <p className="text-center">Are you sure?</p>
              <div className="text-center mt15 full-width">
                <button className="primary mr10" onClick={handleConfirm}>
                  <i className="bi bi-check2-circle mr5"></i> Confirm
                </button>
                <button className="cancel" onClick={() => setPop("")}>
                  <i className="bi bi-x-circle mr5"></i> Cancel
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
