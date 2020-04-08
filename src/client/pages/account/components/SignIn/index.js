import React, { Component } from "react";
import PropTypes from "prop-types";

import axios from "axios";

class SignIn extends Component {
  render() {
    return (
      <div>
        <div className="signin-box">
          <img src="img/google/2x/btn_google_signin_dark_focus_web@2x.png" />
        </div>
      </div>
    );
  }
}

export default SignIn;

SignIn.propTypes = {};

SignIn.defaultProps = {};
