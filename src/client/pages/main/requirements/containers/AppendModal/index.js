import React from "react";
import axios from "axios";

import AppendModelComponent from "../../components/AppendModal";

class AppendModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: "",
    };
  }
  handleChange = (e) => {
    const description = e.target.value;
    this.setState({ description: description });
  };

  render() {
    return (
      <AppendModelComponent
        {...this.props}
        appendComplete={this.props.appendComplete}
        handleChange={this.handleChange}
      />
    );
  }
}

export default AppendModal;
