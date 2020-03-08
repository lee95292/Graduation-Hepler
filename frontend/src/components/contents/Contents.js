import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import CheckList from "../checkList";
import "./contents.css";

export class Contents extends Component {
  render() {
    return (
      <div className="contents">
        <h2>JIANT - Graduation Requirements</h2>
        <div className="inner">
          <Tabs defaultActiveKey="require" id="uncontrolled-tab-example">
            <Tab eventKey="require" title="졸업자격">
              <CheckList />
            </Tab>
            <Tab eventKey="details" title="상세정보"></Tab>
            <Tab eventKey="contact" title="Contact" disabled></Tab>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default Contents;
