import React from "react";
import { NavLink } from "react-router-dom";

import "./sidebar.css";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="brand">
          <div className="brand-content">Menu</div>
        </div>
        <NavLink exact to="/profile">
          My profile
        </NavLink>

        <NavLink exact to="/require">
          Requirements
        </NavLink>
      </div>
    );
  }
}

export default Sidebar;
