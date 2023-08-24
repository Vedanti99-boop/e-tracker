import React from "react";
import "../components/Navbar.css";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div>
        <ul className="nav justify-content-center mt-3">
          <li className="nav-item">
            <NavLink
              className="nav-link active font-color"
              aria-current="page"
              to="/"
            >
              Track
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link font-color" to="/report">
              Report
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link font-color" to="/help">
              Help
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link font-color" to="/login">
              Login
            </NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link font-color" to="**">
              Login
            </NavLink>
          </li> */}
          {/* <li className="nav-item">
            <a className="nav-link disabled" aria-disabled="true">
              Disabled
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
