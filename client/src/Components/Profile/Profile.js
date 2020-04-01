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

  getUserDetails = () => {
    console.log("bhkm");
    const params = {
      userName: "Saarthak"
    };
    axios
      .get(base_url + "/user/userDetails", { params })
      .then(function(response) {
        this.setState({ userDetails: response.data });
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    console.log(this.state.userDetails);
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
    return <div>Profile works</div>;
  }
}

export default Profile;
