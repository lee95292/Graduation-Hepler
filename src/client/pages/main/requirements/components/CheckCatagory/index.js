import React, { Component } from "react";
import { Card } from "react-bootstrap";

import "./style.css";

class CheckCatagory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }
  handleShow = () => {
    this.setState({ show: !this.state.show });
  };
  render() {
    const { catagory, detailList } = this.props;
    const { show } = this.state;
    return (
      <div className="checklist-catagory">
        <Card key={catagory}>
          <Card.Header
            onClick={this.handleShow}
            className="checklist-catagory-head"
          >
            <h3 className="checklist-catagory-title">{catagory}</h3>
          </Card.Header>
          {show && (
            <Card.Body className="checklist-catagory-body">
              {detailList}
            </Card.Body>
          )}
        </Card>
      </div>
    );
  }
}

export default CheckCatagory;
