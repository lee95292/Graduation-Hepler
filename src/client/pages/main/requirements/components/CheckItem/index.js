import React, { Component } from "react";
import { ProgressBar, Badge, Button } from "react-bootstrap";

class CheckItem extends Component {
  shouldComponentUpdate(nextProp, nextState) {
    this.props._id !== nextProp._id;
  }
  render() {
    console.log("this.props", this.props);
    const { from, to, name, _id, handlePopupShow } = this.props;

    return (
      <div className="detail" key={_id}>
        <h5>{name}</h5>
        <ProgressBar striped variant="info" now={(from / to) * 100} />
        <div> &nbsp;</div>
        진행상황 ( {from} / {to}) &nbsp;
        {to === from ? (
          <Badge pill variant="success">
            완료
          </Badge>
        ) : (
          <Badge pill variant="warning">
            {to - from}개 미완료
          </Badge>
        )}
        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <div align="right">
          {to !== from && (
            <Button variant="primary" onClick={handlePopupShow}>
              추가
            </Button>
          )}
        </div>
        <hr />
      </div>
    );
  }
}

export default CheckItem;
