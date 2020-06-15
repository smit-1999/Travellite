import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import {
  MDBJumbotron,
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBCardBody,
  MDBCardTitle,
  MDBCardImage,
} from "mdbreact";
import Navigation_bar from "../Navigation_bar";
const base_url = require("../../config/keys").base_uri;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: [],
      userName: "-",
      email: ".com",
      mobile: "123",
    };

    this.getUserDetails = this.getUserDetails.bind(this);
  }

  //componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  getUserDetails = async () => {
    console.log("Querying for", this.state.userName);
    const params = {
      userName: this.state.userName,
    };

    await axios
      .get(base_url + "/user/userDetails", { params })
      .then((response) => {
        this.setState({
          userDetails: response.data,
          mobile: response.data[0].mob,
          email: response.data[0].email,
        });

        console.log("Inside get req", response.data[0]);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentWillMount() {
    const user = localStorage.getItem("user");
    this.setState({
      userName: user,
    });
  }

  render() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn.localeCompare("false") === 0) {
      return <Redirect to="/login" />;
    }

    if (
      (this.state.userDetails === undefined ||
        this.state.userDetails.length == 0) &&
      this.state.userName != "-"
    ) {
      this.getUserDetails();
      console.log("Obtained user details", this.state.userDetails);
    }
    return (
      <div>
        <Navigation_bar />
        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <MDBJumbotron>
                <MDBCardBody>
                  <MDBCardImage
                    className="img-fluid"
                    src="https://cdn2.f-cdn.com/contestentries/1465388/8851154/5c3e839cde852_thumb900.jpg"
                    waves
                  />
                  <MDBCardTitle className="h2 text-info">
                    My Account Details
                    <div>
                      {" "}
                      <MDBIcon icon="user-check" />{" "}
                    </div>
                  </MDBCardTitle>
                  <hr className="my-4" />
                  <MDBRow className="mt-5">
                    <h3 class="text-primary">Username :</h3>

                    <h3 class="text-secondary"> {this.state.userName} </h3>
                  </MDBRow>
                  <MDBRow className="mt-5">
                    {" "}
                    <h3 class="text-primary">Email Id : </h3>
                    <h3 class="text-secondary"> {this.state.email} </h3>
                  </MDBRow>
                  <MDBRow className="mt-5">
                    {" "}
                    <h3 class="text-primary">Mobile : </h3>
                    <h3 class="text-secondary"> {this.state.mobile} </h3>
                  </MDBRow>

                  <div className="pt-2">
                    <MDBBtn outline color="primary" className="waves-effect">
                      Update <MDBIcon far icon="edit" />
                    </MDBBtn>
                  </div>
                </MDBCardBody>
              </MDBJumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Profile;
