import React from "react";
import Navbar from "./Navbar";
import "./styles/header.css";
import MenuIcon from "@mui/icons-material/Menu";
import $ from "jquery";
import { Link } from "react-router-dom";
function Header() {
  const handle = () => {
    $(".sidebar").fadeIn(1000);
  };

  return (
    <header className="header">
      <div className="left-header-container">
        <Link to="/" className="logo">
          snap
        </Link>
        <Navbar />
      </div>
      <div className="right-header-container">
        <button
          className="btn btn-secondary-outline logIn-button"
          type="button"
        >
          Login
        </button>
        <button
          className="btn btn-secondary-outline register-button"
          type="button"
        >
          Register
        </button>
        <button type="button" className="menu-button" onClick={() => handle()}>
          <MenuIcon id="icon" />
        </button>
      </div>
    </header>
  );
}

export default Header;
