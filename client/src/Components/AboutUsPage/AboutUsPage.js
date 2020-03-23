import React, { Component } from 'react';
import './AboutUsPage.css';
import Navigation_bar from "../Navigation_bar";
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
    return (
      <div>
      <Navigation_bar/>
      <div class="container my-5">
        <section class="team-section text-center dark-grey-text">
          <h3 class="font-weight-bold pb-2 mb-4">Our amazing Scrum team</h3>
            <p class="text-muted w-responsive mx-auto mb-5">About team software engineering project team blahblah</p>
              <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                  <div class="avatar mx-auto">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg" class="rounded-circle z-depth-1"
                    alt="Sample avatar"></img>
                  </div>
                  <h5 class="font-weight-bold mt-4 mb-3">Smit Shah</h5>
                  <p class="text-uppercase blue-text"><strong>Product Owner</strong></p>
      <p class="grey-text">email</p>
      <p class="grey-text">mobile</p>
      <ul class="list-unstyled mb-0">
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar"></img>
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Shikhar Dhawale</h5>
      <p class="text-uppercase blue-text"><strong>Scrum Master</strong></p>
      <p class="grey-text">shikhar.dhawale@gmail.com</p>
      <p class="grey-text">9619733480</p>
      <ul class="list-unstyled mb-0">
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar"></img>
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Sarthak Jain</h5>
      <p class="text-uppercase blue-text"><strong>Backend Developer</strong></p>
      <p class="grey-text">email</p>
      <p class="grey-text">mobile</p>
      <ul class="list-unstyled mb-0">
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
    
    <div class="col-lg-3 col-md-6 mb-4">
      <div class="avatar mx-auto">
        <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" class="rounded-circle z-depth-1"
          alt="Sample avatar"></img>
      </div>
      <h5 class="font-weight-bold mt-4 mb-3">Dhruv Gupta</h5>
      <p class="text-uppercase blue-text"><strong>Frontend Developer</strong></p>
      <p class="grey-text">email</p>
      <p class="grey-text">mobile</p>
      <ul class="list-unstyled mb-0">
        <a class="p-2 fa-lg fb-ic">
          <i class="fab fa-facebook-f blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-instagram blue-text"> </i>
        </a>
        <a class="p-2 fa-lg ins-ic">
          <i class="fab fa-github blue-text"> </i>
        </a>
      </ul>
    </div>
    
  </div>
  
</section>


</div></div>
    );
  }
}

export default AboutUsPage;

