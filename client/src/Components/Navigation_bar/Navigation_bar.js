import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavbarToggler,
  MDBCollapse,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBBtn,
} from "mdbreact";

import { ListGroup } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "../Navigation_bar/Navigation_bar.css";
// import ReactDOM from "react-dom";
// import { Link } from "react-router-dom";
// import { Route } from "react-router";
// import profile from "../Profile/Profile";
// import account from "../Account/Account";
// import login from "../Login/Login";

const bell = require("../../images/bell-png-5.png");
const base_url = require("../../config/keys").base_uri;

class Navigation_bar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isOpen: false,
      notifs: [],
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
      userName: this.state.username,
    };
    console.log(params.userName);
    await axios
      .get(base_url + "/notif/ownerRequests", { params })
      .then((response) => {
        this.setState({ notifs: response.data });
        console.log("qwe");
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  acceptRequest = async (reqOwner, pId) => {
    console.log("accept works");
    // const params = {
    //   requestOwner: "amit12", //Here the name of the requester has to be used
    //   postId: "5e86f194dda4280d7159e5c0", //Here the postId corresponding to the request has to be used
    //   postOwner: "saksham12" //Here the username from the state has to be used
    //   //Both postId and requestOwner values are obtained when using getNotification Function
    // };
    await axios
      .put(base_url + "/notif/ownerRequests/accept", {
        requestOwner: reqOwner, //Here the name of the requester has to be used
        postId: pId, //Here the postId corresponding to the request has to be used
        postOwner: this.state.username, //Here the username from the state has to be used
        //Both postId and requestOwner values are obtained when using getNotification Function
      })
      .then((response) => {
        //this.setState({ notifs: response.data });
        console.log("inside accept");
        console.log(pId);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  rejectRequest = async (reqOwner, pId) => {
    console.log("reject works");
    // const params = {
    //   requestOwner: "amit12", //Here the name of the requester has to be used
    //   postId: "5e86f194dda4280d7159e5c0", //Here the postId corresponding to the request has to be used
    //   postOwner: "saksham12" //Here the username from the state has to be used
    //   //Both postId and requestOwner values are obtained when using getNotification Function
    // };
    await axios
      .put(base_url + "/notif/ownerRequests/reject", {
        requestOwner: reqOwner, //Here the name of the requester has to be used
        postId: pId, //Here the postId corresponding to the request has to be used
        postOwner: this.state.username, //Here the username from the state has to be used
        //Both postId and requestOwner values are obtained when using getNotification Function
      })
      .then((response) => {
        //this.setState({ notifs: response.data });
        console.log("inside reject");
        console.log(pId);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      username: user,
    });
    console.log("heelo");
  }
  checkAdmin(){
    if (this.state.username == "admin") {
      return (<MDBDropdownItem href="/Dashboard">DashBoard</MDBDropdownItem>) 
    }
  }

  toggleLogin = () => {
    localStorage.setItem("loggedIn", false);
    localStorage.setItem("user", "");
  };

  toggleCollapse = () => {
    this.setState({
      isOpen: !this.state.isOpen,
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
                    <MDBIcon
                      icon="far fa-bell"
                      onClick={this.getNotification}
                    />
                  </MDBDropdownToggle>
                  <MDBDropdownMenu className="notifDropdown">
                    <MDBDropdownItem header>
                      <strong>Notifications</strong>
                    </MDBDropdownItem>
                    <MDBDropdownItem>
                      <ListGroup>
                        {notifs.map((notif) => {
                          const { requester, postId } = notif;
                          // console.log(_id, sourceLocation, destinationLocation);
                          return (
                            <ListGroup.Item key={postId}>
                              <p className="p">
                                {requester} has requested to join with you in a
                                ride
                              </p>
                              <hr />
                              <MDBBtn
                                color="blue"
                                className="notifButton"
                                onClick={() => {
                                  console.log(postId);
                                  this.acceptRequest(requester, postId);
                                }}
                              >
                                <i class="fas fa-check"></i>
                              </MDBBtn>
                              <MDBBtn
                                color="red"
                                className="notifButton"
                                onClick={() => {
                                  console.log(postId);
                                  this.rejectRequest(requester, postId);
                                }}
                              >
                                <i class="fas fa-times"></i>
                              </MDBBtn>
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
                      <div>{ this.checkAdmin()}</div>
                    
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
        {/* <Button onClick={this.acceptRequest}>Accept test</Button> */}
      </div>
    );
  }
}
export default Navigation_bar;
