import React from "react";
import Navigations from "./navigations";
import UserArea from "./userArea";

const AppHeader = () => {
  return (
    <header className="app-header">
      <div className="logo-wrapper inline">Barkat Fly</div>
      <Navigations />
      <UserArea />
    </header>
  );
};

export default AppHeader;
