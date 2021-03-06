import React, { Component } from "react";
import CheckList from "./containers/CheckList";
import MainLayout from "../../../components/MainLayout";

const userInfo = [
  {
    email: "lee95292@jbnu.ac.kr",
    name: "MyeongGyu-Lee",
    diploma: "석사",
    track: "산학",
    grade: 2,
  },
  {
    email: "changheon@jbnu.ac.kr",
    name: "Changheon-Lee",
    diploma: "박사",
    track: "산학",
    grade: 1,
  },
  {
    email: "Hyeongjung@jbnu.ac.kr",
    name: " Hyeongjung-Kim",
    diploma: "박사",
    track: "산학",
    grade: 2,
  },
];

class MainRequirementsPage extends Component {
  render() {
    return (
      <div>
        <MainLayout>
          <CheckList userInfo={userInfo[0]} />
        </MainLayout>
      </div>
    );
  }
}

export default MainRequirementsPage;
