import React, { Component, Fragment } from "react";
import { ProgressBar, Badge, Button } from "react-bootstrap";

import "./style.css";

class CheckItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showComplete: false,
    };
  }
  handleCompleteShow = () => {
    this.setState({ showComplete: !this.state.showComplete });
  };
  render() {
    const { completes, num_of_pass, name, _id, handlePopupShow } = this.props;
    const { showComplete } = this.state;
    const done = completes.length;

    const completesView = showComplete && (
      <div>
        {completes.map((complete) => (
          <p key={complete._id}>{complete.description}</p>
        ))}
      </div>
    );

    return (
      <Fragment>
        <div
          className="check-item-head"
          key={_id}
          onClick={this.handleCompleteShow}
        >
          <h5>{name}</h5>
          <ProgressBar
            striped
            variant="info"
            now={(done / num_of_pass) * 100}
          />
          진행상황 ( {done} / {num_of_pass}) &nbsp;
          {num_of_pass <= done ? (
            <Badge pill variant="success">
              완료
            </Badge>
          ) : (
            <Badge pill variant="warning">
              {num_of_pass - done}개 미완료
            </Badge>
          )}
        </div>
        <div align="right">
          {num_of_pass > done && (
            <Button variant="primary" onClick={handlePopupShow}>
              추가
            </Button>
          )}
        </div>
        {completesView}
        <hr />
      </Fragment>
    );
  }
}

export default CheckItem;
