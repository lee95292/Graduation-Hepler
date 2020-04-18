import React, { Component } from "react";
import { Table } from "react-bootstrap";

import "./style.css";

export class UserListTable extends Component {
  render() {
    const { userList, handleClickUser, curUser } = this.props;
    const userTableBody = userList.map((user) => (
      <tr
        key={user._id}
        onClick={() => handleClickUser(user)}
        className={`userlist-table-tr ${
          curUser.email === user.email && "userlist-table-tr-active"
        }`}
      >
        <td>
          {user.name} / {user.email}
        </td>
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
            <th>Name / Email</th>
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
