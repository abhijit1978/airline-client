import React from "react";

const Popup = ({ heading, onTogglePopup, children }) => {
  return (
    <div className="popup-center">
      <header>
        <span>{heading}</span>
        <div className="close-button" onClick={() => onTogglePopup(false)}>
          <i className="bi bi-x"></i>
        </div>
      </header>
      <div className="content-area">{children}</div>
    </div>
  );
};

export default Popup;
