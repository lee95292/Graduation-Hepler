import React, { Component } from "react";
import RequisiteForm from "../../components/RequisiteAppendForm";
import axios from "axios";
import FormedRequisiteTable from "../../components/FormedRequisiteTable";

import "./style.css";

class AdminRequisiteContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      requisites: [],
      form: {
        catagory: "",
        track: "",
        name: "",
        diploma: "",
        num_of_pass: 1,
      },
    };
  }

  componentDidMount() {
    this.handleUpdate();
  }

  handleUpdate = () => {
    axios.get("/api/requisite/listall").then((res) => {
      this.setState({ requisites: res.data });
      console.log(res.data);
    });
  };

  handleRequisiteRemove = (id) => {
    console.log("id", id);
    axios
      .get(`/api/requisite/delete/${id}`)
      .then((res) => {
        const updated = this.state.requisites.filter((rq) => rq._id !== id);
        console.log("updated, res", updated, res);
        this.setState({
          requisites: updated,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleAppendFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/requisite/create", this.state.form)
      .then((res) => {
        this.handleUpdate();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleAppendFormChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };
  render() {
    const { requisites } = this.state;
    return (
      <div className="admin-requisite">
        <hr />
        <div className="admin-requisite-append">
          <RequisiteForm
            onSubmit={this.handleAppendFormSubmit}
            onChange={this.handleAppendFormChange}
            onUpdate={this.handleAppend}
          />
        </div>
        <div className="admin-requisite-table">
          <FormedRequisiteTable
            requisites={requisites}
            handleRequisiteRemove={this.handleRequisiteRemove}
          />
        </div>
      </div>
    );
  }
}

export default AdminRequisiteContainer;
