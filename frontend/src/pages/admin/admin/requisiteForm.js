import React, { Component } from "react";
import axios from "axios";

class RequisiteForm extends Component {
  state = {
    form: {
      catagory: "",
      track: "",
      name: "",
      diploma: ""
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("handleSubmit");
    console.log(this.state.form);
    axios
      .post("/requisite/create", this.state.form)
      .then(res => {
        console.log(res);
        this.props.onUpdate(res);
      })
      .catch(err => {
        console.log(err);
      });
  };

  handleChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value
      }
    });
  };
  render() {
    return (
      <div>
        <h2>create requisite</h2>
        <form onSubmit={this.handleSubmit}>
          catagory:
          <input
            type="text"
            name="catagory"
            onChange={this.handleChange}
            required
          />
          <br />
          track:
          <input
            type="text"
            name="track"
            onChange={this.handleChange}
            required
          />
          <br />
          name:
          <input
            type="text"
            name="name"
            onChange={this.handleChange}
            required
          />
          <br />
          diploma
          <input
            type="text"
            name="diploma"
            onChange={this.handleChange}
            required
          />
          <br />
          <input type="submit" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default RequisiteForm;
