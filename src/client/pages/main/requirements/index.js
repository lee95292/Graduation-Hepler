import React, { Component } from "react";
import CheckList from "./components/CheckList";
import MainLayout from "../../../components/MainLayout";

class MainRequirementsPage extends Component {
  render() {
    return (
      <div>
        <MainLayout>
          <CheckList />
        </MainLayout>
      </div>
    );
  }
}

export default MainRequirementsPage;
