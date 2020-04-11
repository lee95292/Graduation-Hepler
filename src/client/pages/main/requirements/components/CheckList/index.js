import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";

import AppendModal from "../../components/AppendModal";
import CheckItem from "../CheckItem";
import CheckCatagory from "../CheckCatagory";

class CheckList extends Component {
  render() {
    const {
        requisites,
        completes,
        popupShow,
        popupId,
        appendComplete,
        handlePopupShow,
        handleChangePopupDescription,
        handlePopupClose,
      } = this.props,
      catagorySet = getCatagorySet(requisites);
    let catagorizedList = [];
    for (let catagory in catagorySet) {
      let detailList = catagorySet[catagory].map((requisite) => {
        const completeList = getCompletesInRequisite(completes, requisite._id);
        return (
          <CheckItem
            {...requisite}
            key={requisite._id}
            completes={completeList}
            handlePopupShow={(id) => handlePopupShow(requisite._id)}
          />
        );
      });

      catagorizedList = catagorizedList.concat(
        <CheckCatagory
          key={catagory}
          catagory={catagory}
          detailList={detailList}
        />
      );
    }
    return (
      <div>
        {catagorizedList}
        <AppendModal
          id={popupId}
          show={popupShow}
          appendComplete={appendComplete}
          handleChange={handleChangePopupDescription}
          handleClose={handlePopupClose}
        />
      </div>
    );
  }
}

function getCompletesInRequisite(completes, requisiteId) {
  return completes.filter((complete) => complete.requisite === requisiteId);
}

function getCatagorySet(requisites) {
  let catagorySet = {};

  requisites.map((requisite) => {
    const catagory = requisite.catagory;
    if (!catagorySet[catagory]) {
      catagorySet[catagory] = Array({ ...requisite });
    } else {
      catagorySet[catagory] = catagorySet[catagory].concat({ ...requisite });
    }
  });

  return catagorySet;
}
export default CheckList;
