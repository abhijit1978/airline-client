import React from "react";

import { NavLink } from "react-router-dom";

const Navigations = () => {
  // const user = useSelector((state) => state.user.user);
  return (
    <nav className="inline">
      <ul className="main-nav">
        <li>
          <NavLink exact to="/">
            <i className="bi bi-house-fill"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/our-services">
            <i className="bi bi-snow2"></i> Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/about-us">
            <i className="bi bi-people-fill"></i> About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">
            <i className="bi bi-geo-alt-fill"></i> Contact Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigations;
