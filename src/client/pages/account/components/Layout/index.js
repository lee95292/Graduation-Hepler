import React, { Component } from "react";

import "./style.css";
// Tab UI, 헤더, 기본디자인
class Layout extends Component {
  render() {
    return <div className="account-layout">{this.props.children}</div>;
  }
}

export default Layout;
