import React, { useState } from "react";
import axios from "axios";
import utils from "../../utils/utils";
import { API_HEADER_FORMDATA, signUpURL } from "../../configs/app.config";

const SignUpForm = () => {
  const [regSuccess, setRegSuccess] = useState(false);
  const [regFailure, setRegFailure] = useState({ state: false, message: "" });

  const [formValues, setFormValues] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    agencyName: "",
    email: "",
    alternateNo: "",
    postOffice: "",
    houseNoStreeetName: "",
    cityTownVillage: "",
    policeStation: "",
    pin: "",
    state: "",
    aadharNo: "",
    aadharImage: "",
    pan: "",
    panImage: "",
    password: "",
    confirmPassword: "",
  });

  const submitRegistration = (e) => {
    e.preventDefault();
    const formData = utils.validateRegistrationForm(formValues);
    if (!formData) {
      setRegFailure({
        state: true,
        message: "All fields marked with * are mandetory",
      });
    } else {
      axios
        .post(signUpURL, formData, API_HEADER_FORMDATA)
        .then(() => {
          setRegSuccess(true);
          setRegFailure({
            state: false,
            message: "",
          });
        })
        .catch(() => {
          setRegFailure({
            state: true,
            message: "Form submission failed due to invalid data.",
          });
        });
    }
  };

  return (
    <>
      <div className="form-wrapper registration-form">
        <form onSubmit={submitRegistration} autoComplete="off">
          <div className="full-width form-row">
            {regFailure.state && (
              <p className="regisration-error">{regFailure.message}</p>
            )}
            <div className="col3">
              <input
                autoComplete="false"
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
                autoComplete="false"
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
                autoComplete="false"
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
            <input
              autoComplete="false"
              type="text"
              name="agencyName"
              placeholder="Agency Name *"
              required
              minLength="2"
              maxLength="100"
              onChange={(e) =>
                setFormValues({ ...formValues, agencyName: e.target.value })
              }
              style={{ width: "100%" }}
            />
          </div>
          <div className="full-width form-row">
            <div className="col3">
              <input
                autoComplete="false"
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
                autoComplete="false"
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
                autoComplete="false"
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
                autoComplete="false"
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
                autoComplete="false"
                type="text"
                name="cityTownVillage"
                placeholder="City / Town / Village *"
                required
                minLength="3"
                maxLength="50"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    cityTownVillage: e.target.value,
                  })
                }
              />
            </div>
            <div className="col3">
              <input
                autoComplete="false"
                type="text"
                name="policeStation"
                placeholder="Police Stations *"
                required
                minLength="3"
                maxLength="50"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    policeStation: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="full-width form-row">
            <div className="col3">
              <input
                autoComplete="false"
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
                autoComplete="false"
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
                autoComplete="false"
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
                autoComplete="false"
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
              <input
                type="file"
                name="aadharImgUrl"
                id="AadharImgUrl"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    aadharImage: e.target.files[0],
                  })
                }
              />
            </div>
          </div>

          <div className="full-width form-row">
            <div className="col4 pr8">
              <input
                autoComplete="false"
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
              <input
                type="file"
                name="panImgUrl"
                id="PANImgUrl"
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    panImage: e.target.files[0],
                  })
                }
              />
            </div>
          </div>

          <hr />

          <div className="full-width form-row password-row">
            <div className="col6 pr8">
              <input
                autoComplete="false"
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
                autoComplete="false"
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
            <button
              className="primary hvr-bounce-to-bottom"
              onClick={submitRegistration}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {regSuccess && (
        <div className="registration-success">
          <div className="fcLightGreen text-center">
            <i className="bi bi-check2-circle" style={{ fontSize: "80px" }}></i>{" "}
            <br />
            <p className="text-center fsize30 mt15">Thank You!</p>
            <p className="text-center fsize22 mt15">
              Your application is submitted successfully.
            </p>
            <p className="text-center mt30">
              You will be notified when your application will be approved.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default SignUpForm;
