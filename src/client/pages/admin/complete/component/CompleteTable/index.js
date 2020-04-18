import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

import "./style.css";
class CompleteTable extends Component {
  render() {
    const { completeList } = this.props;
    return (
      <Table>
        <thead>
          <tr>
            <th>user email</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {completeList.map((complete) => (
            <tr key={complete._id} className="complete-table-tr">
              <td>{complete.userEmail}</td>
              <td>{complete.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}

export default CompleteTable;
