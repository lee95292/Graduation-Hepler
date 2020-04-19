import React, { Component } from "react";
import Layout from "../../components/Layout";
import SignIn from "../../components/SignIn";

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
      route: "/",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    if (email === "lee95292@jbnu.ac.kr" && password === "lee95292pwd") {
      this.setState({ isLoggedIn: true, route: "/main" });
      console.log("main page route");
    } else if (email === "admin@jbnu.ac.kr" && password === "adminpwd") {
      this.setState({ isLoggedIn: true, route: "/admin" });
      console.log("admin page route");
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const { route, isLoggedIn } = this.state;
    return (
      <Layout>
        <SignIn
          route={route}
          isLoggedIn={isLoggedIn}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </Layout>
    );
  }
}

export default Account;
