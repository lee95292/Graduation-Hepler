import React, { Component, Fragment } from "react";
import Layout from "../../components/Layout";
import SignIn from "../../components/SignIn";

class Account extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <SignIn />
        </Layout>
      </Fragment>
    );
  }
}

export default Account;
