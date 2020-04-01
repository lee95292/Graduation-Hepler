import React, { Component } from "react";
import RequisiteForm from "./requisiteForm";
import axios from "axios";

class admin extends Component {
  state = {
    requisites: []
  };

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate = () => {
    axios.get("/requisite/listall").then(res => {
      this.setState({ ...this.state, requisites: res.data });
      console.log(res.data);
    });
  };
  handleAppend = res => {
    const prevReq = this.state.requisites.concat(res.data);
    this.setState({ requisites: prevReq });
    console.log("prevReq:" + prevReq);
  };

  handleItemRemove = id => {
    axios
      .get("/requisite/delete?id=" + id)
      .then(res => {
        this.handleUpdate();
        console.log(id);
      })
      .catch(error => {
        console.log(error);
      });
  };
  render() {
    const requisites = this.state.requisites;
    const reqList = requisites.map((val, index) => (
      <span key={index}>
        {JSON.stringify(val)}
        <button
          key={index}
          onClick={e => {
            this.handleItemRemove(val._id);
            e.stopPropagation();
          }}
        >
          지우기
        </button>
      </span>
    ));
    return (
      <div>
        <hr />
        <RequisiteForm onUpdate={this.handleAppend} />
        <hr />
        {reqList}
      </div>
    );
  }
}

export default admin;
