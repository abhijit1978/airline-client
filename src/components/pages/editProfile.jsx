import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const EditProfile = () => {
  const usr = useSelector((state) => state.user.user);
  const [user, setUser] = useState(usr);
  useEffect(() => {
    setUser(usr);
  }, [usr]);
  if (!Object.keys(user).length) {
    return <>Loading</>;
  } else {
    return (
      <>
        <div className="page-wrapper full-width">
          <div className="container">
            <table className="user-profile">
              <tbody>
                <tr>
                  <td width="100px">User ID</td>
                  <td>{user.userID}</td>
                </tr>
                <tr>
                  <td width="100px">Name</td>
                  <td>
                    {user.name.firstName} {user.name.middleName}{" "}
                    {user.name.lastName}
                  </td>
                </tr>
                <tr>
                  <td width="100px">Mobile</td>
                  <td>
                    {user.contactNo}, {user.alternateNo}
                  </td>
                </tr>
                <tr>
                  <td width="100px">Email ID</td>
                  <td>{user.email}</td>
                </tr>
                <tr>
                  <td width="100px">Address</td>
                  <td>
                    <p className="mb5">
                      {user.address.houseNoStreeetName},{" "}
                      {user.address.cityTownVillage},{" "}
                    </p>
                    <p>
                      P.O.: {user.address.postOffice}, Pin.: {user.address.pin},{" "}
                      {user.address.state}
                    </p>
                  </td>
                </tr>
                <tr>
                  <td width="100px">Aadhar</td>
                  <td>{user.aadharNo}</td>
                </tr>
                <tr>
                  <td width="100px">Pan</td>
                  <td>{user.pan}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
};

export default EditProfile;
