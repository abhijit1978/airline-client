import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NavLink } from "react-router-dom";

const Navigations = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <nav className="inline">
      <ul className="main-nav">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/our-services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
