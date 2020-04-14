import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../MainHeader";

class AdminLayout extends Component {
  render() {
    return (
      <div>
        <MainHeader />[<Link to="/admin/requisite">requisite</Link>/
        <Link to="/admin/complete">compelte</Link>/
        <Link to="/admin/statistics">statistics</Link>]{this.props.children}
      </div>
    );
  }
}

export default AdminLayout;
