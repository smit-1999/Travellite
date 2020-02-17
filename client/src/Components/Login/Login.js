import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';

class Login extends Component {
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
      username: "zxc",
      password: "zxc"
  };
    axios.post('http://localhost:4000/user/authentication',data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log('password incorrect');
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.handleClick()}>
          Login
        </button>
      </div>
    );
  }
}

export default Login;