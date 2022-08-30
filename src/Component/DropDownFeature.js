import React from "react";
import { Link } from "react-router-dom";
import "./styles/dropdown.css";
import toDo from "./images/icon-todo.svg";
import Reminder from "./images/icon-reminders.svg";
import Planning from "./images/icon-planning.svg";
import Calender from "./images/icon-calendar.svg";
import updateComponent from "./HighSidebar";
function DropDownFeature(props) {
  return (
    <div className="dropdown">
      <button
        className="feature-button"
        id="dropdown-feature"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={() => props.control("", "navbar")}
      >
        Features &nbsp; <img className="arrow-icon" src={props.icon} alt="" />
      </button>
      <ul
        className="dropdown-menu feature-items feature-dropdown"
        aria-labelledby="dropdown-feature"
      >
        <li>
          <img className="icons" src={toDo} alt="" />
          <Link to="/path" className="link">
            Todo List
          </Link>
        </li>
        <li>
          <img className="icons" src={Calender} alt="" />
          <Link to="/path" className="link">
            Calender
          </Link>
        </li>
        <li>
          <img className="icons" src={Reminder} alt="" />
          <Link to="/path" className="link">
            Reminder
          </Link>
        </li>
        <li>
          <img className="icons" src={Planning} alt="" />
          <Link to="/path" className="link">
            Reminder
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default updateComponent(DropDownFeature);
