import React, { Component } from "react";
import "./login.css";

class login extends Component {
  render() {
    return (
      <div className="login">
        <form class="box" onSubmit="">
          <h1>Login</h1>
          <input type="text" name="" placeholder="UserName" />
          <input type="password" name="" placeholder="Password" />
          <input type="submit" name="" value="Login" />
        </form>
      </div>
    );
  }
}

export default login;
