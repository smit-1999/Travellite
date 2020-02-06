import React, { Component } from "react";
import "./AddPost.css";
import {
  Container,
  List,
  ListGroupItem,
  Button,
  ListGroup,
  Form,
  FormGroup
} from "reactstrap";
import { Label, Input, FormText } from "reactstrap";

class FormPopUp extends Component {
  render() {
    console.log("Butoon");
    return (
      <div>
        <Form>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
            />
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default FormPopUp;
