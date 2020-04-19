import React, { Component } from "react";
import AdminLayout from "../../../components/AdminLayout";

import CatagoryStatistics from "./container/catagory";

class AdminStatisticsPage extends Component {
  render() {
    return (
      <AdminLayout>
        <h1>카테고리별 실적현황</h1>
        <CatagoryStatistics />
      </AdminLayout>
    );
  }
}

export default AdminStatisticsPage;
