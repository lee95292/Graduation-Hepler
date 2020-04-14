import React, { Component } from "react";
import AdminRequisiteContainer from "./containers/AdminRequisiteContainer";
import AdminLayout from "../../../components/AdminLayout";

export class AdminPage extends Component {
  render() {
    return (
      <AdminLayout>
        <AdminRequisiteContainer />
      </AdminLayout>
    );
  }
}

export default AdminPage;
