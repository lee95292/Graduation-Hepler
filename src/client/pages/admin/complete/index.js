import React, { Component } from "react";
import AdminLayout from "../../../components/AdminLayout";
import AdminComplete from "./container/AdminComplete";

export class AdminCompletePage extends Component {
  render() {
    return (
      <AdminLayout>
        <AdminComplete />
      </AdminLayout>
    );
  }
}

export default AdminCompletePage;
