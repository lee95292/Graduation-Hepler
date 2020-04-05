import React, { Component, Fragment } from "react";
import Account from "./containers/Account";

import axios from "axios";
export class AccountPage extends Component {
  test = () => {
    axios.get("/auth/google").then(res => {
      console.log("test", res);
    });
  };
  render() {
    return (
      <Fragment>
        <button onClick={this.test}>test</button>
        <a href="/auth/google"> google</a>
        <Account />
      </Fragment>
    );
  }
}

export default AccountPage;
