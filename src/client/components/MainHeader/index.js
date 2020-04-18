import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import "./style.css";

class MainHeader extends Component {
  render() {
    const activeStyle = { color: "gray" };
    return (
      <div className="main-header">
        <img
          className="main-header-logo"
          src="/img/logo/mainlogo.PNG"
          style={{ borderRadius: "4rem" }}
          height="40rem"
          width="50rem"
        />
        <div className="main-header-nav">
          <NavLink
            className="main-header-nav-item"
            exact
            to="/"
            activeStyle={activeStyle}
          >
            메인
          </NavLink>
          <NavLink
            className="main-header-nav-item"
            to="/admin"
            activeStyle={activeStyle}
          >
            관리자
          </NavLink>
        </div>
        <div className="main-header-user">lee95292@jbnu.ac.kr</div>
      </div>
    );
  }
}

export default MainHeader;
