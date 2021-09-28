import {
  SET_BOOKING_TICKET,
  SET_PASSENGER_INFO,
  SET_INFANT_INFO,
  SET_PASSENGER_CONTACT_INFO,
  SET_FARE_INFO,
  RESET_ALL,
  UPDATE_PSG_INFO_ON_QTY_CHANGE,
  SET_BOOKED_TICKET_INFO,
} from "./action.types";

const initialState = {
  tickets: {
    passengerInfo: [],
    infantInfo: [],
    passengerContactInfo: {},
    fareSummary: {
      bookQty: 1,
      rate: 0,
      otherCharges: 0,
      infantCharges: 0,
      totalFare: 0,
    },
  },
  bookedTicket: {},
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BOOKING_TICKET:
      const ticketData = { ...action.payload };
      ticketData.fareSummary = {
        bookQty: action.payload.bookQty,
        rate: action.payload.salable.salePrice,
        otherCharges: 0,
        infantCharges: 0,
        totalFare: 0,
      };
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ...ticketData,
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
        psg.sort((a, b) =>
          parseInt(a.psgId) > parseInt(b.psgId)
            ? 1
            : parseInt(b.psgId) > parseInt(a.psgId)
            ? -1
            : 0
        );
        return {
          ...state,
          tickets: {
            ...state.tickets,
            passengerInfo: psg,
          },
        };
      }

    case SET_INFANT_INFO:
      const infants = [...state.tickets.infantInfo];
      const infantFoundIndex = infants.findIndex(
        (item) => item.infantId === action.payload.infantId
      );
      if (infantFoundIndex >= 0) {
        infants[infantFoundIndex] = action.payload;
        return {
          ...state,
          tickets: {
            ...state.tickets,
            infantInfo: infants,
          },
        };
      } else {
        infants.push(action.payload);
        infants.sort((a, b) =>
          parseInt(a.infantId) > parseInt(b.infantId)
            ? 1
            : parseInt(b.infantId) > parseInt(a.infantId)
            ? -1
            : 0
        );
        return {
          ...state,
          tickets: {
            ...state.tickets,
            infantInfo: infants,
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

    case SET_FARE_INFO:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          fareSummary: {
            ...state.tickets.fareSummary,
            ...action.payload,
          },
        },
      };

    case RESET_ALL:
      return {
        ...state,
        tickets: action.payload,
      };

    case UPDATE_PSG_INFO_ON_QTY_CHANGE:
      return {
        ...state,
        tickets: {
          ...state.tickets,
          passengerInfo: action.payload,
        },
      };

    case SET_BOOKED_TICKET_INFO: {
      return {
        ...state,
        bookedTicket: action.payload,
      };
    }

    default:
      return state;
  }
};

export default bookingReducer;
