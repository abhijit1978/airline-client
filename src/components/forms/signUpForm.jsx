import React, { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    email: "",
    alternateNo: "",
    postOffice: "",
    houseNoStreeetName: "",
    cityTownVillage: "",
    policeStation: "",
    pin: "",
    state: "",
    aadharNo: "",
    pan: "",
    password: "",
    confirmPassword: "",
  });

  const submitRegistration = () => {
    console.log(formValues);
    const headers = { "Content-Type": "application/json" };

    axios
      .post("http://localhost:5001/api/bfly/users", formValues, {
        headers,
      })
      .then((response) => {
        console.log("Added Successfully.", response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="form-wrapper registration-form">
      <div className="full-width form-row">
        <div className="col3">
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            required
            minLength="3"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, firstName: e.target.value })
            }
          />
        </div>
        <div className="col3 pl8 pr8">
          <input
            type="text"
            name="middleName"
            placeholder="Middle Name"
            minLength="0"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, middleName: e.target.value })
            }
          />
        </div>
        <div className="col3">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            required
            minLength="2"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, lastName: e.target.value })
            }
          />
        </div>
      </div>

      <div className="full-width form-row">
        <div className="col3">
          <input
            type="email"
            name="Email"
            placeholder="Email *"
            required
            minLength="9"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, email: e.target.value })
            }
          />
        </div>
        <div className="col3 pl8 pr8">
          <input
            type="number"
            name="contactNo"
            placeholder="Mobile *"
            required
            minLength="10"
            maxLength="10"
            onChange={(e) =>
              setFormValues({ ...formValues, contactNo: e.target.value })
            }
          />
        </div>
        <div className="col3">
          <input
            type="number"
            name="alternateNo"
            minLength="0"
            maxLength="10"
            placeholder="Alternet No"
            onChange={(e) =>
              setFormValues({ ...formValues, alternateNo: e.target.value })
            }
          />
        </div>
      </div>

      <div className="full-width form-row">
        <div className="col3">
          <input
            type="text"
            name="houseNoStreeetName"
            placeholder="House, Street Name *"
            required
            minLength="3"
            maxLength="50"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                houseNoStreeetName: e.target.value,
              })
            }
          />
        </div>
        <div className="col3 pl8 pr8">
          <input
            type="text"
            name="cityTownVillage"
            placeholder="City / Town / Village *"
            required
            minLength="3"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, cityTownVillage: e.target.value })
            }
          />
        </div>
        <div className="col3">
          <input
            type="text"
            name="policeStation"
            placeholder="Police Stations *"
            required
            minLength="3"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, policeStation: e.target.value })
            }
          />
        </div>
      </div>

      <div className="full-width form-row">
        <div className="col3">
          <input
            type="text"
            name="postOffice"
            placeholder="Post Office *"
            required
            minLength="3"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, postOffice: e.target.value })
            }
          />
        </div>
        <div className="col3 pl8 pr8">
          <input
            type="text"
            name="number"
            placeholder="Pin No. *"
            required
            minLength="6"
            maxLength="6"
            onChange={(e) =>
              setFormValues({ ...formValues, pin: e.target.value })
            }
          />
        </div>
        <div className="col3">
          <input
            type="text"
            name="state"
            placeholder="State *"
            required
            minLength="3"
            maxLength="50"
            onChange={(e) =>
              setFormValues({ ...formValues, state: e.target.value })
            }
          />
        </div>
      </div>

      <hr />

      <div className="full-width form-row">
        <div className="col4 pr8">
          <input
            type="text"
            name="aadharNo"
            placeholder="Aadhar No. *"
            required
            minLength="12"
            maxLength="12"
            onChange={(e) =>
              setFormValues({ ...formValues, aadharNo: e.target.value })
            }
          />
        </div>
        <div className="col3_4">
          <input type="file" name="aadharImgUrl" id="AadharImgUrl" />
        </div>
      </div>

      <div className="full-width form-row">
        <div className="col4 pr8">
          <input
            type="text"
            name="pan"
            placeholder="PAN *"
            required
            minLength="10"
            maxLength="10"
            onChange={(e) =>
              setFormValues({ ...formValues, pan: e.target.value })
            }
          />
        </div>
        <div className="col3_4">
          <input type="file" name="panImgUrl" id="PANImgUrl" />
        </div>
      </div>

      <hr />

      <div className="full-width form-row password-row">
        <div className="col6 pr8">
          <input
            type="password"
            name="password"
            placeholder="Password *"
            required
            minLength="8"
            maxLength="20"
            onChange={(e) =>
              setFormValues({ ...formValues, password: e.target.value })
            }
          />
        </div>
        <div className="col6">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password *"
            required
            minLength="8"
            maxLength="20"
            onChange={(e) =>
              setFormValues({
                ...formValues,
                confirmPassword: e.target.value,
              })
            }
          />
        </div>
      </div>

      <div className="full-width text-center">
        <button className="primary" onClick={submitRegistration}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
