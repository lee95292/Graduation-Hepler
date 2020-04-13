import React, { Component, Children } from "react";
import JbnuSidebar from "../JbnuSidebar";
import MainHeader from "../MainHeader";

import "./style.css";

export class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <MainHeader />
        {/* <JbnuSidebar /> */}
        <div className="main-layout-child">
          <h2 className="main-layout-title">
            JIANT<sub> 포트폴리오 관리 시스템</sub>
          </h2>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
