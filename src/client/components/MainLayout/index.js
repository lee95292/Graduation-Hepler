import React, { Component, Children } from "react";
import JbnuSidebar from "../JbnuSidebar";
import "./style.css";

export class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <JbnuSidebar />
        <div className="main-layout-child">
          <h1>JIANT - 포트폴리오 관리 시스템</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
