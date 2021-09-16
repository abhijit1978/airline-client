import {
  SET_BOOKING_TICKET,
  SET_PASSENGER_INFO,
  SET_PASSENGER_CONTACT_INFO,
} from "./action.types";

export const setBookingTicket = (data) => {
  return {
    type: SET_BOOKING_TICKET,
    payload: data,
  };
};

export const setPassengerInfo = (data) => {
  return {
    type: SET_PASSENGER_INFO,
    payload: data,
  };
};

export const setPassengerContactInfo = (data) => {
  return {
    type: SET_PASSENGER_CONTACT_INFO,
    payload: data,
  };
};
