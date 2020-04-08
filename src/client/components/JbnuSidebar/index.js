import React, { Component } from "react";

import "./style.css";

export class JbnuSidebar extends Component {
  render() {
    return (
      <div className="jbnu-sidebar">
        <img
          className="jbnu-sidebar-brand"
          src="img/modern_ui/PNG/signature_vertical_02_bold.png"
        />
        <hr height="4px" />
        <span className="jbnu-sidebar-info">
          Contact - hyunchan.park@jbnu.ac.kr
        </span>
        <hr />
        <span className="jbnu-sidebar-info">Info - www.jiant.com </span>
      </div>
    );
  }
  1;
}

export default JbnuSidebar;
