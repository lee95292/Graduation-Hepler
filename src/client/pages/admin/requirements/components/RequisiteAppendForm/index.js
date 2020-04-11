import React, { Component } from "react";
import axios from "axios";

class RequirementAppendForm extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <div>
        <h2>create requisite</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          catagory:
          <input type="text" name="catagory" onChange={onChange} required />
          <br />
          track:
          <input type="text" name="track" onChange={onChange} required />
          <br />
          name:
          <input type="text" name="name" onChange={onChange} required />
          <br />
          diploma
          <input type="text" name="diploma" onChange={onChange} required />
          <br />
          <input type="submit" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default RequirementAppendForm;
