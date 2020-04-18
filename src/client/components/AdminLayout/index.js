import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import MainHeader from "../MainHeader";
import "./style.css";

class AdminLayout extends Component {
  render() {
    return (
      <div className="admin-layout">
        <MainHeader />[
        <NavLink
          to="/admin/requisite"
          className="admin-layout-nav"
          activeStyle={{ fontSize: "1.8rem" }}
        >
          졸업자격
        </NavLink>
        /
        <NavLink
          to="/admin/complete"
          className="admin-layout-nav"
          activeStyle={{ fontSize: "1.8rem" }}
        >
          학생 이수현황
        </NavLink>
        /
        <NavLink
          to="/admin/statistics"
          className="admin-layout-nav"
          activeStyle={{ fontSize: "1.8rem" }}
        >
          실적통계
        </NavLink>
        ]
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default AdminLayout;
