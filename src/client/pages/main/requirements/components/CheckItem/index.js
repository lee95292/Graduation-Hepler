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
    const done = completes.length,
      progress = (done / num_of_pass) * 100,
      progressVariant = progress >= 100 ? "success" : "info";

    const completesView = showComplete && (
      <ul className="check-item-list">
        {completes.map((complete) => (
          <div key={complete._id} className="check-item-subitem">
            <li>
              {complete.description}
              <div style={({ align: "right" }, { color: "green" })}>
                [approved]
              </div>
            </li>
            <hr />
          </div>
        ))}
      </ul>
    );

    return (
      <div className="check-item" key={_id}>
        <div className="check-item-head" onClick={this.handleCompleteShow}>
          <h5>{name}</h5>
          <ProgressBar
            striped
            className="check-item-progress"
            variant={progressVariant}
            label={`[${done}개 완료]`}
            now={progress}
          />
          진행상황 ( {done} / {num_of_pass}) &nbsp;
          {num_of_pass <= done ? (
            <Badge pill variant="light">
              완료
            </Badge>
          ) : (
            <Badge pill variant="dark">
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
          <hr />
        </div>
        {completesView}
        <hr />
      </div>
    );
  }
}

export default CheckItem;
