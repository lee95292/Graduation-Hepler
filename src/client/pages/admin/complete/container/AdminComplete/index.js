import React, { Component } from "react";
import axios from "axios";

import UserListTable from "../../component/UserListTable";
import RequisiteTable from "../../component/RequisiteTable";
import CompleteTable from "../../component/CompleteTable";

import "./style.css";

class AdminComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completes: [],
      requisites: [],
      userList: [],

      curUser: {},
      curRequisites: [],
      curCompletes: [],
    };
  }

  componentDidMount() {
    console.log("didmount");
    axios
      .get("/api/user/listall")
      .then((userRes) => {
        this.setState({ userList: userRes.data, curUser: userRes.data[0] });
        axios
          .get("/api/requisite/listall")
          .then((reqRes) => {
            console.log("reqRes.data", reqRes.data);
            this.setState({ requisites: reqRes.data });
            this.setCurRequisiteByUser(userRes.data[0], reqRes.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

    axios.get(`/api/complete/listall`).then((res) => {
      this.setState({ completes: res.data });
    });
  }
  setCurRequisiteByUser = (selectedUser, requisites) => {
    const curRequisites = requisites.filter(
      (requisite) =>
        requisite.diploma === selectedUser.diploma &&
        requisite.track === selectedUser.track
    );
    this.setState({ curRequisites: curRequisites });
  };

  setCurCompleteByRequisite = (email, requisite, completes) => {
    const curCompletes = completes.filter(
      (complete) =>
        complete.requisite === requisite._id && complete.userEmail === email
    );

    this.setState({ curCompletes: curCompletes });
  };
  handleClickUser = (selectedUser) => {
    const { requisites, completes } = this.state;
    this.setCurRequisiteByUser(selectedUser, requisites);
    this.setCurCompleteByRequisite(
      selectedUser.email,
      requisites[0],
      completes
    );
    this.setState({ curUser: selectedUser });
  };

  handleClickRequisite = (selectedRequisite) => {
    const { curUser, completes } = this.state;
    this.setCurCompleteByRequisite(curUser.email, selectedRequisite, completes);
  };

  render() {
    const {
      completes,
      userList,
      requisites,
      curCompletes,
      curRequisites,
      curUser,
    } = this.state;
    console.log("curUser", curUser);
    return (
      <div className="admin-complete">
        <div className="admin-complete-item">
          <UserListTable
            curUser={curUser}
            userList={userList}
            handleClickUser={this.handleClickUser}
          />
        </div>
        <div className="admin-complete-item">
          <RequisiteTable
            requisiteList={curRequisites}
            handleClickRequisite={this.handleClickRequisite}
          />
        </div>
        <div className="admin-complete-item">
          <CompleteTable completeList={curCompletes} />
        </div>
      </div>
    );
  }
}

export default AdminComplete;
