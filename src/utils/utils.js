const getTotalFare = (data) => {
  const otherCharges = data.fareSummary.otherCharges
    ? data.fareSummary.otherCharges
    : 0;
  const infantCharges = data.fareSummary.infantCharges
    ? data.fareSummary.infantCharges
    : 0;
  const totalfare =
    parseInt(data.fareSummary.bookQty) * parseInt(data.salable.salePrice) +
    parseInt(otherCharges) +
    parseInt(infantCharges);
  return totalfare;
};

const validatePassengerInfo = (data) => {
  let error = 0;
  if (
    !data.passengerInfo.length ||
    data.passengerInfo.length !== parseInt(data.fareSummary.bookQty)
  ) {
    error = 1;
  } else {
    let count = 0;
    data.passengerInfo.forEach((element) => {
      if (!element.firstName || !element.lastName) {
        count = 1;
      }
    });
    if (count > 0) {
      error = 1;
    }
  }
  return error;
};

const validateBookingInfo = (data, user) => {
  const error = [];

  if (validatePassengerInfo(data)) error.push("Passenger information missing.");

  if (!validateEmail(data.passengerContactInfo.emailID))
    error.push("Invalid Email.");

  if (!validateMobile(data.passengerContactInfo.contactNumber))
    error.push("Invalid Mobile  Number.");

  if (data.salable.qty < data.bookQty)
    error.push("Ticket quantity is not valid.");

  if (data.fareSummary.infantCharges && data.fareSummary.infantCharges % 1500) {
    error.push("Infant changes must be multiple of 1500");
  }

  if (data.fareSummary.bookQty * data.fareSummary.rate > user.limit) {
    error.push(
      "You don't have sufficient limit. Please contact Barkat Tours and Traves"
    );
  }

  return error;
};

const validateEmail = (email) => {
  if (!email) return false;
  const validPattern = /^\S+@\S+\.\S+$/;
  return validPattern.test(String(email.trim()).toLowerCase()) ? true : false;
};

const validateMobile = (mobNum) => {
  if (!mobNum) return false;
  return mobNum.toString().length === 10 ? true : false;
};

const validateRegistrationForm = (data) => {
  let formData = new FormData();
  let formError = false;
  const optionalFields = ["alternateNo", "middleName"];
  for (let key in data) {
    if (!optionalFields.includes(key)) {
      if (!data[key]) {
        formError = true;
        break;
      } else {
        formData.append(key, data[key]);
      }
    } else {
      if (!data[key]) {
        formData.append(key, -1);
      } else {
        formData.append(key, data[key]);
      }
    }
  }

  if (formError) {
    return false;
  } else {
    return formData;
  }
};

const formatNum = (num) => {
  return num.toLocaleString("en-IN", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });
};

export default {
  getTotalFare,
  validateBookingInfo,
  validateEmail,
  validateMobile,
  validateRegistrationForm,
  formatNum,
};
