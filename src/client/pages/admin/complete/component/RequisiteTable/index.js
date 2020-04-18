import React, { Component } from "react";
import { Table } from "react-bootstrap";

import "./style.css";

export class RequisiteTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: "",
    };
  }

  render() {
    const { requisiteList, handleClickRequisite } = this.props;
    const { activeId } = this.state;

    const requisiteTableBody = requisiteList.map((requisite) => (
      <tr
        key={requisite._id}
        onClick={() => {
          handleClickRequisite(requisite);
          this.setState({ activeId: requisite._id });
        }}
        className={`requisite-table-tr ${
          requisite._id === activeId && "requisite-table-tr-active"
        }`}
      >
        <td>{requisite.name}</td>
        <td>{requisite.catagory}</td>
        <td>{requisite.num_of_pass}</td>
      </tr>
    ));
    return (
      <Table bordered>
        <thead>
          <tr>
            <th>Requisite</th>
            <th>Catagory</th>
            <th>Approve required</th>
          </tr>
        </thead>
        <tbody>{requisiteTableBody}</tbody>
      </Table>
    );
  }
}

export default RequisiteTable;
