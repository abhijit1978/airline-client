import React from "react";
import Navigations from "./navigations";

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo-wrapper inline">Barkat Fly</div>
      <Navigations />
      <div className="header-right-content">
        <div className="login">
          <i class="bi bi-box-arrow-in-right"></i>
          <span className="inline">Login</span>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
