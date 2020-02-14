import React, { Component } from 'react';
import './Register.css';
import axios from 'axios';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}
  
  handleClick(){
    console.log('Click happened');
   const data = {
      firstname:"pranjal",
      lastname:"gupta",
      email:"gmail",
      mob:"000",
      username: "mnb",
      password: "mnb"
  };
    axios.post('http://localhost:4000/user/add',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          Register
        </button>
      </div>
    );
  }
}

export default Register;