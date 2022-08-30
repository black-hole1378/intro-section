import React from "react";
import { Link } from "react-router-dom";
import ComponyDropDown from "./ComponyDropDown";
import DropDownFeature from "./DropDownFeature";
import "./styles/navbar.css";
function Navbar(props) {
  return (
    <div className="navbar-container">
      <DropDownFeature />
      <ComponyDropDown />
      <Link to="/career" className="link career-link">
        Careers
      </Link>
      <Link to="/about" className="link about-link">
        About
      </Link>
    </div>
  );
}

export default Navbar;
