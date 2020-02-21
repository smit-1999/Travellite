import React from 'react';  
import './style.css';  import React, { Component } from 'react';
import './Login.css';
import { Button } from 'reactstrap';
import { Link } from "react-router-dom";
import { Route } from "react-router";
import profile from "../Profile/Profile";
import account from "../Account/Account";
import login from "../Login/Login";

class Popup extends React.Component {  
  render() {  
        return (  
        <div className='popup'>  
            <div className='popup\_inner'>  
                <h1>{this.props.text}</h1>  
                <button onClick={this.props.closePopup}>Submit</button>
            </div>  
        </div>  
        );      
    }  
}  

export default Popup;
