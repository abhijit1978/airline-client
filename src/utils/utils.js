const getTotalFare = (data) => {
  const otherCharges = data.otherCharges ? data.otherCharges : 0;
  const infantCharges = data.infantCharges ? data.infantCharges : 0;
  const totalfare =
    parseInt(data.bookQty) * parseInt(data.salable.salePrice) +
    parseInt(otherCharges) +
    parseInt(infantCharges);
  return totalfare.toLocaleString();
};

const validatePassengerInfo = (data) => {
  let error = 0;
  if (
    !data.passengerInfo.length ||
    data.passengerInfo.length !== parseInt(data.bookQty)
  ) {
    error = 1;
  } else {
    let count = 0;
    data.passengerInfo.forEach((element) => {
      if (!element.firstName.trim() || !element.lastName.trim()) {
        count = 1;
      }
    });
    if (count > 0) {
      error = 1;
    }
  }
  return error;
};

const validateBookingInfo = (data) => {
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

  return error;
};

const validateEmail = (email) => {
  const validPattern = /^\S+@\S+\.\S+$/;
  if (!email) return false;

  return validPattern.test(String(email.trim()).toLowerCase()) ? true : false;
};

const validateMobile = (mobNum) => {
  if (!mobNum) return false;
  return mobNum.length === 10 ? true : false;
};

export default {
  getTotalFare,
  validateBookingInfo,
  validateEmail,
  validateMobile,
};
