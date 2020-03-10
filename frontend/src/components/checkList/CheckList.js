import React, { Component } from "react";
import { Card, Accordion, Button } from "react-bootstrap";
import axios from "axios";
//temporary data
const userData = {
  track: "연구",
  diploma: "석사"
};
class CheckList extends Component {
  state = {
    requisites: []
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

    console.log(requisiteSet);

    let reqList = [];
    let key = 0;
    for (let catagory in requisiteSet) {
      let detailList = requisiteSet[catagory].map((val, index) => (
        <div className="detail" key={index}>
          {val}
        </div>
      ));
      key++;
      reqList = reqList.concat(
        <Card key={key}>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey={key}>
              {catagory}
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
      </div>
    );
  }
}

export default CheckList;
