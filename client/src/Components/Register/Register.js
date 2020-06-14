import React, { Component } from "react";
import "./Register.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
const base_url = require("../../config/keys").base_uri;

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      email: null,
      mobile: null,
      username: null,
      password: null,
      redirect: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  handleSubmit = (event) => {
    event.preventDefault();
    const reg_email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const reg_mobile = /^[0]?[6789]\d{9}$/;
    if (this.state.name === null || this.state.name === "") {
      alert("enter name");
    } else if (this.state.email === null || this.state.email === "") {
      alert("enter email");
    } else if (this.state.mobile === null || this.state.mobile === "") {
      alert("enter mobile");
    } else if (this.state.username === null || this.state.username === "") {
      alert("enter username");
    } else if (this.state.password === null || this.state.password === "") {
      alert("enter password");
    } else if (reg_email.test(this.state.email) === false) {
      alert("enter valid email");
    } else if (reg_mobile.test(this.state.mobile) === false) {
      alert("enter valid mobile number");
    } else {
      const data = {
        name: this.state.name,
        email: this.state.email,
        mob: this.state.mobile,
        username: this.state.username,
        password: this.state.password,
        requests: [],
        confirmed: [],
      };
      axios
        .post(base_url + "/user/add", data)
        .then((response) => {
          console.log(response);
          if (response.data === "") {
            alert("Welcome to Travellite !");
            this.setState({
              redirect: true,
            });
          } else if (!response.data.status.localeCompare("0")) {
            alert("username already exists");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <MDBContainer className="mt-5">
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
                      onChange={(e) => this.setState({ name: e.target.value })}
                    />
                    <MDBInput
                      label="Your email"
                      icon="fas fa-envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) => this.setState({ email: e.target.value })}
                    />
                    <MDBInput
                      label="Mobile number"
                      icon="fas fa-mobile-alt"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) =>
                        this.setState({ mobile: e.target.value })
                      }
                    />

                    <MDBInput
                      label="Username"
                      icon="far fa-user-circle"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                    <MDBInput
                      label="Your password"
                      icon="fas fa-lock"
                      group
                      type="password"
                      validate
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      color="blue"
                      type="submit"
                      onClick={this.handleSubmit}
                    >
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
