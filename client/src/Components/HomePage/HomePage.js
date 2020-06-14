import React, { Component } from "react";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBBtn,
  MDBIcon,
} from "mdbreact";
import "./HomePage.css";
const taxi = require("../../images/taxi2.jpg");
class HomePage extends Component {
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
      <div className="bg">
        <MDBMask className="d-flex justify-content-center align-items-center gradient">
          <MDBContainer>
            <MDBRow>
              <MDBCol
                md="6"
                className="white-text text-center text-md-left mt-xl-5 mb-5"
              >
                <h1 className="h1-responsive  mt-sm-5">
                  Travellite......
                  <MDBIcon icon="car-side" />
                </h1>
                <hr className="hr-light" />
                <h6 className="mb-4">Info</h6>
                <MDBBtn color="white" href="/login">
                  Login{" "}
                </MDBBtn>
                <MDBBtn color="white" href="/register">
                  Sign Up{" "}
                </MDBBtn>
              </MDBCol>

              <MDBCol md="6" xl="5" className="mt-xl-5"></MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBMask>
      </div>
    );
  }
}

export default HomePage;
