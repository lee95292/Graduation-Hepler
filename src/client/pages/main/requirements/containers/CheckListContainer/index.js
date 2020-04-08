import React, { Component } from "react";
import axios from "axios";

import CheckList from "../../components/CheckList";

const userData = {
  track: "산학",
  diploma: "석사",
};

export class CheckListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupShow: false,
      requisites: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/api/requisite/list/${userData.track}/${userData.diploma}`)
      .then((res) => {
        console.log(res.data);
        this.setState({
          requisites: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { requisites } = this.state;
    return (
      <div>
        <CheckList requisites={requisites} />
      </div>
    );
  }
}

export default CheckListContainer;
