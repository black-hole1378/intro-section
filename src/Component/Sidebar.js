import React from "react";
import "./styles/sidebar.css";
import CloseIcon from "@mui/icons-material/Close";
import SideBarFeatureMenu from "./SideBarFeatureMenu";
import SidebarCompanyMenu from "./SidebarCompanyMenu";
import { Link } from "react-router-dom";
import $ from "jquery";
function Sidebar() {
  const handle = () => {
    $(".sidebar").fadeOut(1000);
  };

  return (
    <div className="sidebar">
      <div className="button-group">
        <button type="button" onClick={() => handle()}>
          <CloseIcon id="close-icon" />
        </button>
      </div>
      <ul className="menu-items">
        <li>
          <SideBarFeatureMenu />
        </li>
        <li>
          <SidebarCompanyMenu />
        </li>
        <li>
          <Link to="/careers" className="tabs-link">
            Careers
          </Link>
        </li>
        <li>
          <Link to="/about" className="tabs-link">
            About
          </Link>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-secodary-outline sidebar-login"
          >
            Login
          </button>
        </li>
        <li>
          <button
            type="button"
            className="btn btn-secodary-outline sidebar-register"
          >
            Register
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
