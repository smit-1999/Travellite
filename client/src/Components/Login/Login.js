import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import "./Login.css";
import axios from "axios";
import { Redirect } from "react-router-dom";
const base_url = require("../../config/keys").base_uri;

// componentWillMount(){}
// componentDidMount(){}
// componentWillUnmount(){}

// componentWillReceiveProps(){}
// shouldComponentUpdate(){}
// componentWillUpdate(){}
// componentDidUpdate(){}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedin: false,
      username: null,
      password: null,
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
    if (this.state.username === null || this.state.username === "") {
      alert("enter username");
    } else if (this.state.password === null || this.state.password === "") {
      alert("enter password");
    } else {
      const data = {
        username: this.state.username,
        password: this.state.password,
      };
      axios
        .post(base_url + "/user/authentication", data)
        .then((response) => {
          console.log(response);
          if (!response.data.status.localeCompare("0")) {
            alert("Username doesnt exists");
          } else if (!response.data.status.localeCompare("2")) {
            alert("Incorrect Password");
          } else if (!response.data.status.localeCompare("1")) {
            this.setState({
              isLoggedin: true,
              username: data.username,
            });
          } else {
            alert("Error , Try Again ... !!!");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  render() {
    if (this.state.isLoggedin) {
      console.log(this.state.username);
      localStorage.setItem("user", this.state.username);
      localStorage.setItem("loggedIn", true);
      return <Redirect to="/search" />;
    }
    return (
      <MDBContainer className="mt-5" center>
        <MDBRow center>
          <MDBCol md="6">
            <MDBCard>
              <MDBCardBody>
                <form>
                  <p className="h4 text-center py-4">Log in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Username"
                      icon="fas fa-user-tie"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={this.state.username}
                      onChange={(e) =>
                        this.setState({ username: e.target.value })
                      }
                    />
                    <MDBInput
                      label="Your password"
                      icon="far fa-lock"
                      group
                      type="password"
                      validate
                      value={this.state.password}
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
                      Log in
                    </MDBBtn>
                  </div>
                  <div className="text-center">
                    Not a member..? <a href="/register">Register</a>
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

export default Login;

// <div class="col-md-5 offset-md-1 mt-md-4 mb-4 white-text">

//           <h5 class="font-weight-bold">Address</h5>
//           <p class="mb-0">1632 Main Street</p>
//           <p class="mb-0">New York, 94126</p>
//           <p class="mb-4 pb-2">United States</p>

//           <h5 class="font-weight-bold">Phone</h5>
//           <p class="mb-4 pb-2">+ 01 234 567 89</p>

//           <h5 class="font-weight-bold">Email</h5>
//           <p>info@gmail.com</p>

//         </div>

{
  /* <div class=" z-depth-1 my-0 px-0">
      <section class="my-md-5" 
        style= {{backgroundImage: "url(" + background + ")", backgroundSize: "cover", backgroundPosition: "center",height:"100%"}}>
      <div class="rgba-black-strong rounded p-5">
          <div className="w3-display-right">
          <MDBContainer>
            <MDBRow>
              <MDBCol md="5">
                <MDBCard> 
                  <MDBCardBody>
                    <form>
                      <p className="h4 text-center py-4">Log in</p>
                      <div className="grey-text">
                        <MDBInput
                          label="Username"
                          icon="user"
                          group
                          type="text"
                          validate
                          error="wrong"
                          success="right"
                          value={this.state.username}
                          onChange={e => this.setState({ username: e.target.value })}
                        />
                        <MDBInput
                          label="Your password"
                          icon="lock"
                          group
                          type="password"
                          validate
                          value={this.state.password}
                          onChange={e => this.setState({ password: e.target.value })}
                        />
                      </div>
                      <div className="text-center py-4 mt-3">
                        <MDBBtn color="blue" type="submit" onClick={this.handleSubmit} href="/search">
                          Log in
                        </MDBBtn>
                      </div>
                    </form>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        </div>
      </section>
      </div> */
}
