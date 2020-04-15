import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class RequirementAppendForm extends Component {
  render() {
    const { onSubmit, onChange } = this.props;
    return (
      <div>
        <h2>create requisite</h2>
        <Form onSubmit={(e) => onSubmit(e)}>
          <Form.Row>
            <Form.Group as={Col} controlId="track">
              <Form.Label>트랙</Form.Label>
              <Form.Control
                name="track"
                onChange={onChange}
                type="text"
                placeholder="산학"
              />
            </Form.Group>

            <Form.Group as={Col} controlId="progress">
              <Form.Label>과정(석,박사)</Form.Label>
              <Form.Control
                name="diploma"
                onChange={onChange}
                type="text"
                placeholder="석사"
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="name">
            <Form.Label>활동명</Form.Label>
            <Form.Control
              name="name"
              onChange={onChange}
              placeholder="영어 논문 "
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId="catagory">
              <Form.Label>카테고리</Form.Label>
              <Form.Control
                onChange={onChange}
                name="catagory"
                placeholder="글로벌 역량"
              />
            </Form.Group>

            <Form.Group controlId="numOfPass">
              <Form.Label>충족요건 개수</Form.Label>
              <Form.Control
                onChange={onChange}
                name="num_of_pass"
                placeholder="6"
              />
            </Form.Group>
          </Form.Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default RequirementAppendForm;
