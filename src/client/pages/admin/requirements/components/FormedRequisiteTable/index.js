import React, { Component } from "react";
import { Table, Button } from "react-bootstrap";

import "./style.css";

export class FormedRequisiteTable extends Component {
  render() {
    const { requisites, handleRequisiteRemove } = this.props;
    return (
      <div className="formed-requisite-table">
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TRACK</th>
              <th>NAME</th>
              <th>DIPLOMA</th>
              <th>CATAGORY</th>
              <th>__</th>
            </tr>
          </thead>
          <tbody>
            {requisites.map((value, index) => (
              <tr key={index}>
                <td>{value._id}</td>
                <td>{value.track}</td>
                <td>{value.name}</td>
                <td>{value.diploma}</td>
                <td>{value.catagory}</td>
                <td>
                  <Button onClick={() => handleRequisiteRemove(value._id)}>
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default FormedRequisiteTable;
