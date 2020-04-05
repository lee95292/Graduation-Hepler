import React, { Component } from "react";
import CheckList from "./components/CheckList";
import Sidebar from "../../../components/Sidebar";
class MainRequirementsPage extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <CheckList />
      </div>
    );
  }
}

export default MainRequirementsPage;
