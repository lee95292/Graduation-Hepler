import React, { Component } from "react";
import axios from "axios";

class RequirementAppendForm extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <div>
        <h2>create requisite</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          카테고리:
          <input type="text" name="catagory" onChange={onChange} required />
          <br />
          트랙:
          <input type="text" name="track" onChange={onChange} required />
          <br />
          이름:
          <input type="text" name="name" onChange={onChange} required />
          <br />
          과정(석,박사)
          <input type="text" name="diploma" onChange={onChange} required />
          <br />
          이수항목 개수
          <input type="text" name="num_of_pass" onChange={onChange} />
          <br />
          <input type="submit" />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default RequirementAppendForm;
