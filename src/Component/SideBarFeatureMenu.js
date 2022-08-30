import React from "react";
import { Link } from "react-router-dom";
import "./styles/dropdown.css";
import Calender from "./images/icon-calendar.svg";
import toDo from "./images/icon-todo.svg";
import Reminder from "./images/icon-reminders.svg";
import Planning from "./images/icon-planning.svg";
import updateComponent from "./HighSidebar";
function SideBarFeatureMenu(props) {
  return (
    <React.Fragment>
      <button
        className="feature-button"
        type="button"
        onClick={() => props.control(".feature-items", "sidebar")}
      >
        Features &nbsp; <img className="arrow-icon" src={props.icon} alt="" />
      </button>
      <ul className="feature-items">
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
    </React.Fragment>
  );
}

export default updateComponent(SideBarFeatureMenu);
