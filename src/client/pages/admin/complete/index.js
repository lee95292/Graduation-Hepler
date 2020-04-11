import React, { Component } from "react";
import AdminLayout from "../../../components/AdminLayout";
import CompleteTable from "./container/CompleteTable";

export class AdminCompletePage extends Component {
  render() {
    return (
      <AdminLayout>
        <CompleteTable />
      </AdminLayout>
    );
  }
}

export default AdminCompletePage;
