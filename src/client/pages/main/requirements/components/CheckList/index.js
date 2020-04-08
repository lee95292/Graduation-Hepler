import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

import PopupModal from "../PopupModal";
import CheckItem from "../CheckItem";
import CheckCatagory from "../../CheckCatagory";

//temporary data
const userData = {
  track: "산학",
  diploma: "석사",
};

class CheckList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popupShow: false,
    };
  }

  handlePopupShow = () => {
    this.setState({ popupShow: true });
  };

  handlePopupClose = () => {
    this.setState({ popupShow: false });
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
  render() {
    const { requisites } = this.props,
      catagorySet = {};

    //Catagory set으로 묶기
    //TODO: progressInfo 데이터로 교체하기
    requisites.map((val) => {
      const catagory = val.catagory;
      const progessInfo = this.getProgress();
      const requisite = {
        ...val,
        from: progessInfo[0],
        to: progessInfo[1],
      };
      if (!catagorySet[catagory]) {
        catagorySet[catagory] = Array(requisite);
      } else {
        catagorySet[catagory] = catagorySet[catagory].concat(requisite);
      }
    });

    let reqList = [];
    let key = 0;
    for (let catagory in catagorySet) {
      let detailList = catagorySet[catagory].map((requisite) => {
        return (
          <CheckItem
            {...requisite}
            key={requisite._id}
            handlePopupShow={this.handlePopupShow}
          />
        );
      });
      key++;
      reqList = reqList.concat(
        <CheckCatagory catagory={catagory} detailList={detailList} />
      );
    }
    console.log(reqList);
    return (
      <div>
        {reqList}
        <PopupModal
          show={this.state.popupShow}
          handleClose={this.handlePopupClose}
        />
      </div>
    );
  }
}

export default CheckList;
