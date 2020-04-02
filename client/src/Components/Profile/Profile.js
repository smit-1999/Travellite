import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import { Button } from "react-bootstrap";
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
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn.localeCompare("false") === 0) {
      return <Redirect to="/Login" />;
    }
    return (
      <div>
        Profile works
        <Button onClick={this.getUserDetails}>Get User Details</Button>
      </div>
    );
  }
}

export default Profile;
