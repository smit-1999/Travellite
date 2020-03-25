import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';
import {Button, Form} from 'react-bootstrap';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
const base_url = require("../../config/keys").base_uri;
  
class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: null,
      mobile: null,
      email: null,
      username: null,
    password: null
    };
    this.handleChange = this.handleChange.bind(this);
    //this.handleForgot = this.handleForgot.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  
handleChange(event) {
  this.setState({ username: event.target.value });
}
handleSubmit() {
  alert("A user was submitted: " + this.state.mobile + this.state.name);
  //  const data = {
  //     firstname:"shikhar",
  //     lastname:"dhawale",
  //     email:"gmail",
  //     mob:"000",
  //     username: "poiuyt",
  //     password: "zxc"
  // };
  //   axios.post(base_url + '/user/add',data)
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
}
  
  render() {
    return (
      <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <MDBCard>
            <MDBCardBody>
              <form>
                <p className="h4 text-center py-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    icon="fas fa-user-tie"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => this.setState({ name: e.target.value })}
                  />
                  <MDBInput
                    label="Mobile number"
                    icon="fas fa-mobile-alt"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => this.setState({ mobile: e.target.value })}
                  />
                  <MDBInput
                    label="Your email"
                    icon="fas fa-envelope"
                    group
                    type="email"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <MDBInput
                    label="Username"
                    icon="far fa-user-circle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                    onChange={e => this.setState({ username: e.target.value })}
                  />
                  <MDBInput
                    label="Your password"
                    icon="fas fa-lock"
                    group
                    type="password"
                    validate
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                </div>
                <div className="text-center py-4 mt-3">
                  <MDBBtn color="blue" type="submit" onClick={this.handleSubmit} href="/login">
                    Register
                  </MDBBtn>
                </div>
              </form>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    );
  }
}

export default Register;
