import { SHOW_LOGIN_FORM } from "./action.types";

const initialState = {
  showPopup: false,
};

const popupReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOGIN_FORM:
      return {
        ...state,
        showPopup: !state.showPopup,
      };

    default:
      return state;
  }
};

export default popupReducer;
