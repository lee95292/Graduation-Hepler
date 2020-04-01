import React, { Component } from "react";
import { Card, Accordion, Button, ProgressBar, Badge } from "react-bootstrap";
import PopupModal from "./popupModal";
import axios from "axios";
//temporary data

const userData = {
  track: "산학",
  diploma: "석사"
};
class CheckList extends Component {
  state = {
    popupShow: false,
    requisites: []
  };
  getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  };
  getProgress = () => {
    const full = this.getRandomIntInclusive(3, 7);
    return [this.getRandomIntInclusive(0, full), full];
  };
  handlePopupShow = () => {
    this.setState({ ...this.state, popupShow: true });
  };

  handlePopupClose = () => {
    this.setState({ ...this.state, popupShow: false });
  };
  componentDidMount() {
    const url =
      "/requisite/list?track=" +
      userData.track +
      "&diploma=" +
      userData.diploma;
    axios
      .get(url)
      .then(res => {
        console.log(res.data);
        this.setState({
          ...this.state,
          requisites: res.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const rawReq = this.state.requisites,
      requisiteSet = {};

    rawReq.map(val => {
      const catagory = val.catagory;
      if (!requisiteSet[catagory]) {
        requisiteSet[catagory] = Array(val.name);
      } else {
        requisiteSet[catagory] = requisiteSet[catagory].concat(val.name);
      }
    });

    console.log(this.state.popupShow);

    let reqList = [];
    let key = 0;
    for (let catagory in requisiteSet) {
      let detailList = requisiteSet[catagory].map((val, index) => {
        const progessInfo = this.getProgress();
        let complete = progessInfo[0] === progessInfo[1];
        return (
          <div className="detail" key={index}>
            <h5>{val}</h5>
            <ProgressBar
              striped
              variant="info"
              now={(progessInfo[0] / progessInfo[1]) * 100}
            />
            <div> &nbsp;</div>
            진행상황 ( {progessInfo[0]} / {progessInfo[1]}) &nbsp;
            {complete ? (
              <Badge pill variant="success">
                완료
              </Badge>
            ) : (
              <Badge pill variant="warning">
                {progessInfo[1] - progessInfo[0]}개 미완료
              </Badge>
            )}
            <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div align="right">
              {!complete && (
                <Button variant="primary" onClick={this.handlePopupShow}>
                  추가
                </Button>
              )}
            </div>
            <hr />
          </div>
        );
      });
      key++;
      reqList = reqList.concat(
        <Card key={key}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={key}>
              <h3>{catagory}</h3>
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey={key}>
            <Card.Body>{detailList}</Card.Body>
          </Accordion.Collapse>
        </Card>
      );
    }
    console.log(reqList);
    return (
      <div>
        <Accordion defaultActiveKey="0">{reqList}</Accordion>
        <PopupModal
          show={this.state.popupShow}
          handleClose={this.handlePopupClose}
        />
      </div>
    );
  }
}

export default CheckList;
