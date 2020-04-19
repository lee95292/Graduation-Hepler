import React, { Component } from "react";
import PropTypes from "prop-types";
import { Card, Form, Button, ListGroup } from "react-bootstrap";
import { Redirect } from "react-router-dom";

import "./style.css";

class SignIn extends Component {
  render() {
    const { handleSubmit, handleChange, isLoggedIn, route } = this.props;
    return (
      <div className="account-signin">
        <Card>
          <Card.Header>
            <Card.Title>Sigin Jiant!</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              JIANT Online Portfolio System
            </Card.Subtitle>
          </Card.Header>
          <Card.Body>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
              {/* <Card.Link href="#"> 로그인</Card.Link>
              <Card.Link href="#">Another Link</Card.Link> */}
            </Form>
          </Card.Body>
          {isLoggedIn ? <Redirect push to={route} /> : ""}
        </Card>
      </div>
    );
  }
}

export default SignIn;

SignIn.propTypes = {};

SignIn.defaultProps = {};
