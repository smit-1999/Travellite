import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBPopover,
  MDBPopoverHeader,
  MDBPopoverBody
} from "mdbreact";
import "../Navigation_bar/Navigation_bar.css"
import { Button, Jumbotron, ListGroup } from "react-bootstrap";
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom";

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
const base_url = require("../../config/keys").base_uri;

class Navigation_bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isOpen: false,
      notifs: []
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
    this.getNotification = this.getNotification.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleForgot = this.handleForgot.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleLogin = this.toggleLogin.bind(this);
  }

  getNotification = async () => {
    console.log("notif works");
    const params = {
      userName: "Saarthak"
    };
    await axios
      .get(base_url + "/notif/ownerRequests", { params })
      .then(response => {
        this.setState({ notifs: response.data });
        console.log("qwe");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      username: user
    });
    console.log("heelo");
  }

  toggleLogin = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("user", "");
  };

  toggleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    const notifs = this.state.notifs;
    return (
      <div>
        <MDBNavbar color="black" dark expand="md">
          <MDBNavbarBrand href="/search">
            <strong className="white-text">Travellite</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse} />
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <MDBNavbarNav left>
              <MDBNavItem>
                <strong className="white-text">Hi {this.state.username}</strong>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              
              <MDBNavItem>

                <MDBDropdown dropleft>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="far fa-bell" onClick = {this.getNotification}/>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem header><strong>Notifications</strong></MDBDropdownItem>
                    <MDBDropdownItem>
                      <ListGroup>
                        {notifs.map(notif => {
                        const { 
                        requester,_id
                        } = notif;
                        // console.log(_id, sourceLocation, destinationLocation);
                        return (
                        <ListGroup.Item key={_id}>
                        <p className="p">{requester} has requested to join with you in a ride</p>
                        <hr />                
                      </ListGroup.Item>              
                        );
                        })}
                      </ListGroup>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>

              <MDBNavItem>
                <MDBDropdown>
                  <MDBDropdownToggle nav caret>
                    <MDBIcon icon="user" />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="dropdown-default">
                    <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                    <MDBDropdownItem href="/account">Account</MDBDropdownItem>
                    <MDBDropdownItem href="/login" onClick={this.toggleLogin}>
                      Logout
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavbarBrand href="/about">
                  <strong className="white-text align-center">About Us</strong>
                </MDBNavbarBrand>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBNavbar>
      </div>
    );
  }
}
export default Navigation_bar;




 


// <MDBNavbarBrand>
//                     <strong>
//                       <i className=""  ></i>
//                     </strong>
//               </MDBNavbarBrand>





// <Button
//                   className="submit"
//                   onClick={() => this.requestGroup(_id, postOwner)}
//                   // disabled={this.state.disabled}
//                   variant="primary"
//                 >
//                   Request
//                   {/* {this.state.disabled ? "Requested" : "Request"} */}
//                 </Button>

//                 <hr />