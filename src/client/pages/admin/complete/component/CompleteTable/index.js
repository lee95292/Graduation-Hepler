import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

class CompleteTable extends Component {
  render() {
    const { completeList } = this.props;
    console.log("this.props", this.props);
    return (
      <Table>
        <thead>
          <tr>
            <th>id</th>
            <th>user email</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
          {completeList.map((complete) => (
            <tr key={complete._id}>
              <td>{complete._id}</td>
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
