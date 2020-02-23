import React, { Component } from "react";
import "./Login.css";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import profile from "../Profile/Profile";
import account from "../Account/Account";
import login from "../Login/Login";
import { Form } from "reactstrap";
import keys from "../../config/keys";
const base_uri = keys.base_uri;
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ username: event.target.value });
  }
  handleClick() {
    console.log("Click happened");
    const data = {
      username: "zxc",
      password: "zxc"
    };
    axios
      .post(base_uri + "/user/authentication", data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log("password incorrect");
      });
  }
  handleForgot() {
    alert("Credentials have been sent to your email address");
  }
  handleSubmit() {
    alert("A user was submitted: " + this.state.password + this.state.username);
  }
  // mystyle = {
  //   float : "middle",
  //   height: "300px",
  //   width: "500px",
  //   padding: "10px",
  //   fontFamily: "Arial",
  //   border: "1px solid",
  //   background: "009900",
  //   margin : "200px"
  // };
  // constructor(props){
  // super(props);
  // this.state = {};
  // }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div class="flex-container">
        <form>
          <br />
          <div title="Username">
            <label>
              Username :
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </label>
          </div>
          <br />
          <div title="Password">
            <label>
              Password :
              <input
                type="text"
                placeholder="password"
                value={this.state.password}
                onChange={e => this.setState({ password: e.target.value })}
              />
            </label>
          </div>
          <div>
            <Button onClick={this.handleSubmit} class="submit">
              {" "}
              Submit{" "}
            </Button>
            <br />
            <Button
              type="button"
              class="forgotpsw"
              onClick={this.handleForgot}
              class="forgot"
            >
              Forgot password
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
