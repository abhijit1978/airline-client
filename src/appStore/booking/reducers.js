import {
  SET_BOOKING_TICKET,
  SET_PASSENGER_INFO,
  SET_PASSENGER_CONTACT_INFO,
} from "./action.types";

const initialState = {
  tickets: {
    passengerInfo: [],
    passengerContactInfo: {},
    fareSummary: {
      ticketsCount: "",
      rate: "",
      otherCharges: "",
      infactCharges: "",
      totalFare: "",
    },
  },
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_TICKET:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ...action.payload,
        },
      };

    case SET_PASSENGER_INFO:
      const psg = [...state.tickets.passengerInfo];
      const foundIndex = psg.findIndex(
        (item) => item.psgId === action.payload.psgId
      );
      if (foundIndex >= 0) {
        psg[foundIndex] = action.payload;
        return {
          ...state,
          tickets: {
            ...state.tickets,
            passengerInfo: psg,
          },
        };
      } else {
        psg.push(action.payload);
        return {
          ...state,
          tickets: {
            ...state.tickets,
            passengerInfo: psg,
          },
        };
      }

    case SET_PASSENGER_CONTACT_INFO:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          passengerContactInfo: action.payload,
        },
      };

    default:
      return state;
  }
};

export default bookingReducer;
