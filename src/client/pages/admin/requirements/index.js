import React, { Component } from "react";
import AppendRequirement from "./containers/FormedRequisite";

export class AdminPage extends Component {
  render() {
    return (
      <div>
        {/* admin_sidebar */}
        <AppendRequirement />
      </div>
    );
  }
}

export default AdminPage;
