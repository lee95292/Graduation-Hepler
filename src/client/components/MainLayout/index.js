import React, { Component, Children } from "react";
import Sidebar from "../Sidebar";
import "./style.css";

export class MainLayout extends Component {
  render() {
    return (
      <div className="main-layout">
        <Sidebar />
        <div className="main-layout-child">
          <h1>JIANT - graduation helper</h1>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout;
