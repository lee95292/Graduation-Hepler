import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class RequisiteTable extends Component {
  render() {
    const { requisiteList, handleClickRequisite } = this.props;
    const requisiteTableBody = requisiteList.map((requisite) => (
      <tr key={requisite._id} onClick={() => handleClickRequisite(requisite)}>
        <td>{requisite.name}</td>
        <td>{requisite.catagory}</td>
        <td>{requisite.num_of_pass}</td>
      </tr>
    ));
    return (
      <Table>
        <thead>
          <tr>
            <th>Requisite</th>
            <th>Catagory</th>
            <th>Number of Approval</th>
          </tr>
        </thead>
        <tbody>{requisiteTableBody}</tbody>
      </Table>
    );
  }
}

export default RequisiteTable;
