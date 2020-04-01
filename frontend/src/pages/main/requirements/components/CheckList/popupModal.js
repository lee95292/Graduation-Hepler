import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class PopupModal extends Component {
  render() {
    const { show, handleClose } = this.props;
    return (
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>í™œë�™ì¶”ê°€</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            append
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PopupModal;
