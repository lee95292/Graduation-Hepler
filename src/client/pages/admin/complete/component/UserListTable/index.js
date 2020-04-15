import React, { Component } from "react";
import { Table } from "react-bootstrap";

export class UserListTable extends Component {
  render() {
    const { userList, handleClickUser } = this.props;
    const userTableBody = userList.map((user) => (
      <tr key={user._id} onClick={() => handleClickUser(user)}>
        <td>{user.email}</td>
        <td>
          {user.diploma}({user.grade})
        </td>
        <td>{user.track}</td>
      </tr>
    ));
    return (
      <Table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Diploma</th>
            <th>Track</th>
          </tr>
        </thead>
        <tbody>{userTableBody}</tbody>
      </Table>
    );
  }
}

export default UserListTable;
