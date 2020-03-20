import React, { Component} from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
// import { Route } from "react-router";
// import profile from "../Profile/Profile";
// import account from "../Account/Account";
// import login from "../Login/Login";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  // NavItem,
  // NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
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
      <MDBNavbar color="black" dark expand="md">
        <MDBNavbarBrand href="/search">
          <strong className="white-text" >Travellite</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
         <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav left>
            
          </MDBNavbarNav>
          <MDBNavbarNav right>
          <MDBNavItem>
            <MDBNavbarBrand>
              <strong>
          <i class="far fa-bell"></i></strong></MDBNavbarBrand>
            </MDBNavItem>
            <MDBNavItem>
               <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <MDBIcon icon="user" />
                </MDBDropdownToggle>
                <MDBDropdownMenu className="dropdown-default">
                   <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                  <MDBDropdownItem href="/account">Account</MDBDropdownItem>
                  <MDBDropdownItem href="/login">Logout</MDBDropdownItem>  
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavItem>
            <MDBNavItem>
            <MDBNavbarBrand href="/about"><strong className="white-text align-center" >
              About Us
              </strong></MDBNavbarBrand>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    </div>
    );
  }
}
export default Navigation_bar;

