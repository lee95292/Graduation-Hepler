import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

class MainHeader extends Component {
  render() {
    return (
      <div className="main-header">
        <img
          className="main-header-logo"
          src="/img/modern_ui/PNG/symbol.pn#g"
          height="40rem"
          width="50rem"
        />
        <div className="main-header-nav">
          <Link className="main-header-nav-item" to="/">
            Main
          </Link>
          <Link className="main-header-nav-item" to="/admin/requisite">
            Admin
          </Link>
        </div>
        <div className="main-header-user">lee95292@jbnu.ac.kr</div>
      </div>
    );
  }
}

export default MainHeader;
