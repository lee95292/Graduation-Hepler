import React, { Component } from "react";
import AppendRequirement from "./containers/FormedRequisite";
import AdminLayout from "../../../components/AdminLayout";

export class AdminPage extends Component {
  render() {
    return (
      <AdminLayout>
        <AppendRequirement />
      </AdminLayout>
    );
  }
}

export default AdminPage;
