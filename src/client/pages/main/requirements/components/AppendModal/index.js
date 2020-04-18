import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class PopupModal extends Component {
  render() {
    const {
      show,
      handleClose,
      appendComplete,
      handleChange,
      userInfo,
    } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>활동 추가하기</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea cols="50" onChange={(e) => handleChange(e)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={appendComplete}>
            append
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PopupModal;
