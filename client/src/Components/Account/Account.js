import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import './Account.css';

class Account extends Component {
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
      <div>Account works</div>
    );
  }
}

export default Account;