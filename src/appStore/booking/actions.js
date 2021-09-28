import {
  SET_BOOKING_TICKET,
  SET_PASSENGER_INFO,
  SET_PASSENGER_CONTACT_INFO,
  SET_FARE_INFO,
  RESET_ALL,
  UPDATE_PSG_INFO_ON_QTY_CHANGE,
  SET_BOOKED_TICKET_INFO,
  SET_INFANT_INFO,
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

export const setInfantsInfo = (data) => {
  return {
    type: SET_INFANT_INFO,
    payload: data,
  };
};

export const setPassengerContactInfo = (data) => {
  return {
    type: SET_PASSENGER_CONTACT_INFO,
    payload: data,
  };
};

export const setFareInfo = (data) => {
  return {
    type: SET_FARE_INFO,
    payload: data,
  };
};

export const updatePsgInfoOnQtyChange = (data) => {
  return {
    type: UPDATE_PSG_INFO_ON_QTY_CHANGE,
    payload: data,
  };
};

export const resetAll = (data) => {
  return {
    type: RESET_ALL,
    payload: data,
  };
};

export const setBookedTicketInfo = (data) => {
  return {
    type: SET_BOOKED_TICKET_INFO,
    payload: data,
  };
};
