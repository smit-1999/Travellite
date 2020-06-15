import React, { Component } from 'react';
import './AboutUsPage.css';
import { Redirect } from "react-router-dom";
import Navigation_bar from "../Navigation_bar";
const smit = require("../../images/smit.jpg");
const shikhar = require("../../images/shikhar.jpg");
const saarthak = require("../../images/saarthak.jpg");
const dhruv = require("../../images/dhruv.JPG");
class AboutUsPage extends Component {
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
    if (loggedIn.localeCompare("false") === 0) {
      return <Redirect to="/login" />;
    }
    return (
      <div>
      <Navigation_bar/>
      <div class="container my-5">
        <section class="team-section text-center dark-grey-text">
          <h3 class="font-weight-bold pb-2 mb-4">Our amazing Scrum team</h3>
          <h4 class="font-weight-bold pb-2 mb-4">Travellite</h4>
            <p class="text-muted w-responsive mx-auto mb-5">Team T15 </p>
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="avatar mx-auto">
                    <img src={smit} class="rounded-circle z-depth-1 w-100"
                    alt="Sample avatar"></img>
                  </div>
                  <h5 class="font-weight-bold mt-4 mb-3">Smit Shah</h5>
                  <p class="text-uppercase blue-text"><strong>Product Owner</strong></p>
      <p class="grey-text">smitshah1999@gmail.com</p>
      <p class="grey-text">8369785044</p>
      
    </div>
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="avatar mx-auto">
        <img src={shikhar} class="rounded-circle z-depth-1 w-100"
          alt="Sample avatar"></img>
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Shikhar Dhawale</h5>
      <p class="text-uppercase blue-text"><strong>Scrum Master</strong></p>
      <p class="grey-text">shikhar.dhawale@gmail.com</p>
      <p class="grey-text">9619733480</p>
      
    </div>
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="avatar mx-auto">
        <img src={saarthak} class="rounded-circle z-depth-1 w-100"
          alt="Sample avatar"></img>
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Sarthak Jain</h5>
      <p class="text-uppercase blue-text"><strong>Developer</strong></p>
      <p class="grey-text">saarthakjain001@gmail.com</p>
      <p class="grey-text">873997296</p>
      
    </div>
    
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="avatar mx-auto">
        <img src={dhruv} class="rounded-circle z-depth-1 w-100"
          alt="Sample avatar"></img>
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Dhruv Gupta</h5>
      <p class="text-uppercase blue-text"><strong>Developer</strong></p>
      <p class="grey-text">dhruvgup98@gmail.com</p>
      <p class="grey-text">9340194537</p>
      
    </div>
    
  </div>
  
</section>


</div></div>
    );
  }
}

export default AboutUsPage;

