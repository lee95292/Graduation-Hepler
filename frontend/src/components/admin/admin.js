import React, { Component } from "react";
import RequisiteForm from "./requisiteForm";
import axios from "axios";

class admin extends Component {
  state = {
    requisites: []
  };

  componentDidMount() {
    axios.get("/requisite/listall").then(res => {
      this.handleUpdate(res);
      console.log(res.data);
    });
  }

  handleUpdate = res => {
    const prevReq = this.state.requisites.concat(res.data);
    this.setState({ requisites: prevReq });
    console.log("prevReq:" + prevReq);
  };

  render() {
    const requisites = this.state.requisites;
    const reqList = requisites.map((val, index) => (
      <span key={index}>{JSON.stringify(val)}</span>
    ));
    return (
      <div>
        <hr />
        <RequisiteForm onUpdate={this.handleUpdate} />
        <hr />
        {reqList}
      </div>
    );
  }
}

export default admin;
