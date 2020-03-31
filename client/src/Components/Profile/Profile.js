import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Profile.css';

class Profile extends Component {
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
    const loggedIn = localStorage.getItem("loggedIn");
    if(loggedIn.localeCompare("false")===0){
      return (
        <Redirect
          to="/Login"
        />
      );
    }
    return (
      <div>Profile works</div>
    );
  }
}

export default Profile;