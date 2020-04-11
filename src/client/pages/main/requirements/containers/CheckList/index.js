import React, { Component } from "react";
import axios from "axios";

import CheckList from "../../components/CheckList";

class CheckListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupShow: false,
      popupId: "",
      popupDescription: "",
      requisites: [],
      completes: [],
    };
  }

  componentDidMount() {
    axios
      .get(
        `/api/requisite/list/${this.props.userInfo.track}/${this.props.userInfo.diploma}`
      )
      .then((res) => {
        this.setState({
          requisites: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get(`/api/complete/${this.props.userInfo.email}`)
      .then((res) => {
        this.setState({
          completes: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChangePopupDescription = (e) => {
    const description = e.target.value;
    this.setState({ popupDescription: description });
  };

  appendComplete = () => {
    const data = {
      requisiteId: this.state.popupId,
      description: this.state.popupDescription,
      email: this.props.userInfo.email,
    };

    axios
      .post("/api/complete", data)
      .then((res) => {
        if (JSON.parse(res.data.result)) {
          const newCompletes = this.state.completes.concat(res.data.complete);
          console.log("newCompletes", newCompletes);
          this.setState({ completes: newCompletes });
          this.handlePopupClose();
        } else {
          //TODO: 사라지는 모달 : 실패
        }
        console.log(res);
      })
      .catch((error) => console.log("error", error));
  };
  handlePopupShow = (id) => {
    this.setState({ popupShow: true, popupId: id });
  };

  handlePopupClose = () => {
    this.setState({ popupShow: false });
  };

  render() {
    const { userInfo } = this.props;
    return (
      <div>
        <CheckList
          {...this.state}
          appendComplete={this.appendComplete}
          handlePopupClose={this.handlePopupClose}
          handlePopupShow={this.handlePopupShow}
          handleChangePopupDescription={this.handleChangePopupDescription}
        />
      </div>
    );
  }
}

export default CheckListContainer;
