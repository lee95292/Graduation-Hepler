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
          <div className="main-layout-title">
            <div className="main-layout-title-main">
              JIANT
              <span className="main-layout-title-sub">
                포트폴리오 관리 시스템
              </span>
            </div>
          </div>

          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
