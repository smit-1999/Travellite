import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import background from "../../images/background.jpg";
import './Login.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
const base_url = require("../../config/keys").base_uri;

// componentWillMount(){}
// componentDidMount(){}
// componentWillUnmount(){}

// componentWillReceiveProps(){}
// shouldComponentUpdate(){}
// componentWillUpdate(){}
// componentDidUpdate(){}


class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedin: false,
      username: null,
    password: null
    };
    this.handleChange = this.handleChange.bind(this);
  //this.handleForgot = this.handleForgot.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.onUsernameChange = this.onUsernameChange.bind(this);
  }
  handleChange(event) {
    this.setState({ username: event.target.value });
    }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  onUsernameChange = (username) => {
    this.setState({ 
      isLoggedin: true,
      username: username
    });
  }
   handleSubmit() {
    alert("A user was submitted: " + this.state.password + this.state.username);
    const data = {
      username: this.username,
      password: this.password
  };
    axios.post(base_url + '/user/authentication',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('password incorrect');
    });
    this.onUsernameChange(this.state.username);
  }
  render() {
    if (this.state.isLoggedin) {
      console.log(this.state.username);
      alert("logged in");
      localStorage.setItem('user',this.state.username)
      return <Redirect to='/search'/>      
    }
    return (
  
   <MDBContainer className ="mt-5">
            <MDBRow>
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
                          onChange={e => this.setState({ username: e.target.value })}
                        />
                        <MDBInput
                          label="Your password"
                          icon="far fa-lock"
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

{/* <div class=" z-depth-1 my-0 px-0">
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
      </div> */}




