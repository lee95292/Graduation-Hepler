import React, { Component } from "react";
import axios from "axios";

import CompleteTableComponent from "../../component/CompleteTable";

class CompleteTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      completes: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/complete/all")
      .then((res) => {
        this.setState({ completes: res.data });
        console.log("res.data", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { completes } = this.state;
    return <CompleteTableComponent completes={completes} />;
  }
}

export default CompleteTable;
