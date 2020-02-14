import React, { Component } from "react";
import Modal from "react-modal";
import {
  Container,
  List,
  ListGroupItem,
  Button,
  ListGroup,
  Form,
  FormGroup
} from "reactstrap";
import FormPopUp from "./FormPopUp";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }
  closeModal() {
    this.setState({ modalIsOpen: false });
  }
  render() {
    return (
      <div>
        <Button
          className="remove-btn"
          color="danger"
          size="sm"
          onClick={this.openModal}
        >
          +
        </Button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <button onClick={this.closeModal}>close</button>
          <FormPopUp />
        </Modal>
      </div>
    );
  }
}

export default AddPost;
