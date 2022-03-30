// import { className } from "postcss-selector-parser";
import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="logo">FAHAD'S SOCCER SHOES</div>
      <ul className="nav-links">
        <div className="menu">
          <li>
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/product">
              Products
            </NavLink>
          </li>
          <li>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navigation;
