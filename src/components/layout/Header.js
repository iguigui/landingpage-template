import React from "react";
import { Link } from "react-router-dom";

import logo from "../../img/logo.svg";

const Header = ({ className }) => {
  return (
    <div className="header ui secondary menu">
      <Link to="/" className="item logo">
        <img src={logo} alt="Logo GrilledCode" />
      </Link>
      <div className="right menu">
        <Link to="/services" className="menu item">
          Services
        </Link>
        <Link to="/about" className="menu item">
          About
        </Link>
        <a href="#contactus" className="menu item">
          Contacts Us
        </a>
      </div>
    </div>
  );
};

export default Header;
