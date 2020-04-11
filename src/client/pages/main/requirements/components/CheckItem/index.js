import React, { Component } from "react";
import { ProgressBar, Badge, Button } from "react-bootstrap";

class CheckItem extends Component {
  render() {
    const { completes, num_of_pass, name, _id, handlePopupShow } = this.props;
    const done = completes.length;
    console.log("check item: ", this.props);
    return (
      <div className="detail" key={_id}>
        <h5>{name}</h5>
        <ProgressBar striped variant="info" now={(done / num_of_pass) * 100} />
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
        <div align="right">
          {num_of_pass > done && (
            <Button variant="primary" onClick={handlePopupShow}>
              추가
            </Button>
          )}
        </div>
        <div>
          {completes.map((complete) => (
            <p>{complete.description}</p>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default CheckItem;
