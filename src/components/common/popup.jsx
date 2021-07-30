import React from "react";
import { useDispatch } from "react-redux";
import { showLoginForm } from "./../../appStore";

const Popup = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="popup-center">
      <header>
        <span>{props.heading}</span>
        <div className="close-button" onClick={() => dispatch(showLoginForm())}>
          X
        </div>
      </header>
      <div className="content-area">{props.children}</div>
    </div>
  );
};

export default Popup;
