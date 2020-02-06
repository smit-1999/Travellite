import React, { Component, useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Route } from "react-router";
import profile from "../Profile/Profile";
import account from "../Account/Account";
import login from "../Login/Login";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container
} from "reactstrap";
import { Dropdown } from "react-bootstrap";
import { DropdownDivider } from "react-bootstrap/Dropdown";
const bell = require("../../images/bell-png-5.png");

class Navigation_bar extends Component {
  state = {
    isOpen: false
  };
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
          <Container>
            <NavbarBrand href="/">Travellit</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar></Nav>
              <img
                src={bell}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="Notification bell"
              />

              <pre class="tab"> </pre>

              <Dropdown>
                <Dropdown.Toggle
                  color="dark"
                  variant="success"
                  id="dropdown-basic"
                ></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="/profile">Profile</Dropdown.Item>
                  <Dropdown.Item href="/account">My Account</Dropdown.Item>
                  <Dropdown.Divider></Dropdown.Divider>
                  <Dropdown.Item href="/login">Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
export default Navigation_bar;
