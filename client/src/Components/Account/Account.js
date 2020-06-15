import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import "./Account.css";
import Navigation_bar from "../Navigation_bar";
import Jumbotron from "react-bootstrap/Jumbotron";
const base_url = require("../../config/keys").base_uri;

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = { myPosts: [], myRides: [] };
    this.getPreviousRides = this.getPreviousRides.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getMyPosts = this.getMyPosts.bind(this);
  }
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      userName: user,
    });
  }
  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  getPreviousRides = () => {
    console.log("On account page of ", this.state.userName);
    var params = {
      name: this.state.userName,
      type: 1,
    };

    axios
      .get(base_url + "/user/prevRides", { params })
      .then((response) => {
        console.log(
          "Response obtained from database for prevRides where user is a member",
          response.data
        );
        this.setState({ myRides: response.data });
      })
      .catch((err) => console.log(err));
  };

  getMyPosts = () => {
    const params = {
      name: this.state.userName,
      type: 2,
    };

    axios
      .get(base_url + "/user/prevRides", { params })
      .then((response) => {
        this.setState({
          myPosts: response.data,
        });

        // return <h1>test </h1>;
      })
      .catch((err) => console.log(err));
  };

  render() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn.localeCompare("false") === 0) {
      return <Redirect to="/login" />;
    }
    if (this.state.myPosts === undefined || this.state.myPosts.length == 0) {
      this.getMyPosts();
    }
    if (this.state.myRides === undefined || this.state.myRides.length == 0) {
      this.getPreviousRides();
      console.log(this.state.myRides);
    }

    return (
      <div>
        <Navigation_bar />
        <div class="jumbotron bg-dark text-white">
          <h1 align="center" class="text-info">
            My Posts
          </h1>
          <div class="container ">
            {/* <ListGroup> */}

            {this.state.myPosts.map((post) => {
              const { sourceLocation, destinationLocation, date } = post;

              return (
                <Jumbotron>
                  <div class="row p-3 mb-2 bg-transparent text-dark">
                    {/* <ListGroup.Item key={_id}> */}
                    <div class="col">
                      <h4 class="text-primary">Source {sourceLocation}</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-success">
                        Destination {destinationLocation}
                      </h4>
                    </div>
                    {/* <h4 align="left">Source : {sourceLocation}</h4>
                      <h4>Destination : {destinationLocation} </h4> */}
                    <div class="col">
                      <h4 class="text-warning">Date of Journey {date}</h4>
                    </div>

                    <hr />
                    {/* </ListGroup.Item> */}
                  </div>
                </Jumbotron>
              );
            })}
            {/* </ListGroup> */}
          </div>
        </div>

        <div class="jumbotron bg-dark text-white">
          <h1 align="center" class="text-info">
            My Rides
          </h1>
          <div class="container ">
            {/* <ListGroup> */}
            {this.state.myRides.map((post) => {
              const {
                sourceLocation,
                destinationLocation,
                date,
                postOwner,
              } = post;
              return (
                <Jumbotron>
                  <div class="row p-3 mb-2 bg-transparent text-dark">
                    {/* <ListGroup.Item key={_id}> */}
                    <div class="col">
                      <h4 class="text-primary">Source : {sourceLocation}</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-success">
                        Destination {destinationLocation}
                      </h4>
                    </div>
                    {/* <h4 align="left">Source : {sourceLocation}</h4>
                      <h4>Destination : {destinationLocation} </h4> */}
                    <div class="col">
                      <h4 class="text-warning">Date of Journey {date}</h4>
                    </div>
                    <div class="col">
                      <h4 class="text-info">Cab Leader {postOwner}</h4>
                    </div>
                    <hr />
                    {/* </ListGroup.Item> */}
                  </div>
                </Jumbotron>
              );
            })}
            {/* </ListGroup> */}
          </div>
        </div>
      </div>
    );
  }
}
//view previous rides
//view upcoming rides

export default Account;
