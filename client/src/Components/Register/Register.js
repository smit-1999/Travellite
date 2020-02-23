import React, { Component } from "react";
import "./Register.css";
import axios from "axios";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import profile from "../Profile/Profile";
import account from "../Account/Account";
import { Form } from "reactstrap";

import keys from "../../config/keys";
const base_uri = keys.base_uri;

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstname: null,
      lastname: null,
      email: null,
      mob: null,
      username: null,
      password: null
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleForgot = this.handleForgot.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleForgot.bind(this);
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
  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleClick() {
    console.log(this.state);
    alert("Your credentials are submitted");
  }
  handleForgot() {
    alert("Credentials have been sent to your email address");
  }
  handleSubmit() {
    alert(
      "A user was submitted: " +
        this.state.firstname +
        this.state.lastname +
        this.state.mob
    );
  }
  handleReset(e) {
    alert("A user was resetted: ");
    e.preventDefault();
    e.target.reset();
  }
  handleClick() {
    console.log("Click happened");
    const data = {
      firstname: "shikhar",
      lastname: "dhawale",
      email: "gmail",
      mob: "000",
      username: "poiuyt",
      password: "zxc"
    };
    axios
      .post(base_uri + "/user/add", data)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div class="flex-container">
        <form>
          <br />
          <div title="Firstname">
            <label>
              Firstname :
              <input
                type="text"
                placeholder="firstname"
                value={this.state.firstname}
                onChange={e => this.setState({ firstname: e.target.value })}
              />
            </label>
          </div>
          <br />
          <div title="lastname">
            <label>
              lastname :
              <input
                type="text"
                placeholder="Lastname"
                value={this.state.lastname}
                onChange={e => this.setState({ lastname: e.target.value })}
              />
            </label>
          </div>
          <br />
          <div title="email">
            <label>
              email :
              <input
                type="text"
                placeholder="email"
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </label>
          </div>
          <br />
          <div title="mob">
            <label>
              mob :
              <input
                type="text"
                placeholder="mob"
                value={this.state.mob}
                onChange={e => this.setState({ mob: e.target.value })}
              />
            </label>
          </div>
          <br />
          <div title="username">
            <label>
              username :
              <input
                type="text"
                placeholder="username"
                value={this.state.username}
                onChange={e => this.setState({ username: e.target.value })}
              />
            </label>
          </div>
          <br />
          <div title="password">
            <label>
              password :
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
          </div>
        </form>
      </div>
      // <div>
      //   <button onClick={() => this.handleClick()}>
      //     Register
      //   </button>
      // </div>
    );
  }
}

export default Register;
