import React from "react";
import "./styles/dropdown.css";
import { Link } from "react-router-dom";
import updateComponent from "./HighSidebar";
function SidebarCompanyMenu(props) {
  return (
    <React.Fragment>
      <button
        className="compony-button"
        type="button"
        onClick={() => props.control(".company-items", "sidebar")}
      >
        Company &nbsp; <img className="arrow-icon" src={props.icon} alt="" />
      </button>
      <ul className="company-items">
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
            Blog
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default updateComponent(SidebarCompanyMenu);
