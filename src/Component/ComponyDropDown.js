import React from "react";
import "./styles/dropdown.css";
import { Link } from "react-router-dom";
import updateComponent from "./HighSidebar";
function ComponyDropDown(props) {
  return (
    <div className="dropdown">
      <button
        className="feature-button"
        id="dropdown-company"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => props.control("", "navbar")}
      >
        Company &nbsp; <img className="arrow-icon" src={props.icon} alt="" />
      </button>
      <ul
        className="dropdown-menu company-items company-dropdown"
        aria-labelledby="dropdown-company"
      >
        <li>
          <Link to="/path" className="link">
            History
          </Link>
        </li>
        <li>
          <Link to="/path" className="link">
            Our Team
          </Link>
        </li>
        <li>
          <Link to="/path" className="link">
            Blogs
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default updateComponent(ComponyDropDown);
