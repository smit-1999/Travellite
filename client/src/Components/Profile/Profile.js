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
  MDBCardText,
  MDBCardTitle,
  MDBCardImage
} from "mdbreact";
const base_url = require("../../config/keys").base_uri;
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: [], userName: "" };

    this.getUserDetails = this.getUserDetails.bind(this);
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  getUserDetails = async () => {
    console.log("get user details works");
    const params = {
      userName: "abc"
    };
    //const userName = "Saarthak";
    await axios
      .get(base_url + "/user/userDetails", {
        params
      })
      .then(response => {
        this.setState({ notifs: response.data });
        console.log("inside");
        //console.log(params);
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    //console.log(this.state.userDetails);
  };

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      userName: user
    });
    console.log("heelo");
  }

  render() {
    let username = "smit",
      mob = "123",
      emailid = "x@g.com";
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn.localeCompare("false") === 0) {
      return <Redirect to="/Login" />;
    } else {
      //this.getUserDetails();
      //console.log(this.state.userDetails);
    }
    return (
      <div>
<<<<<<< HEAD
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
                  <MDBCardTitle className="h2">
                    My Account Details
                    <div>
                      {" "}
                      <MDBIcon icon="user-check" />{" "}
                    </div>
                  </MDBCardTitle>
                  <hr className="my-4" />
                  <MDBRow className="mt-3">
                    {" "}
                    Username <MDBIcon icon="user" className="pl-3" />
                  </MDBRow>
                  <MDBRow className="mt-3">
                    {" "}
                    Email Id <MDBIcon icon="envelope" className="pl-3" />{" "}
                  </MDBRow>
                  <MDBRow className="mt-3">
                    {" "}
                    Mobile <MDBIcon icon="mobile-alt" className="pl-3" />
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
=======
        Profile works
        <Button onClick={this.getUserDetails}>Get User Details</Button>
>>>>>>> 658dc8d7614c1d77fc59fda4f7b7d450ab0745dc
      </div>
    );
  }
}

export default Profile;
