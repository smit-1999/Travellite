import React, { Component } from "react";
import Select from "react-select";
import { Redirect } from "react-router-dom";
import Navigation_bar from "../Navigation_bar";
import AddPost from "../AddPost";
import "./SearchPage.css";
import { Jumbotron, ListGroup } from "react-bootstrap";
import axios from "axios";
import { MDBContainer, MDBRow, MDBCol, MDBJumbotron } from "mdbreact";
import DatePicker from "react-date-picker";
import Button from "react-bootstrap/Button";
import "react-day-picker/lib/style.css";
//import DatePicker from "reactstrap-date-picker";
const base_url = require("../../config/keys").base_uri;
const locationOptions = [
  { value: "airport", label: "Airport" },
  { value: "secunderabad", label: "Secunderabad" },
  { value: "campus", label: "BPHC" },
];

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      date: new Date(),
      source: null,
      destination: null,
      time: "10:00",
      posts: [],
      // disabled: false
    };

    this.requestGroup = this.requestGroup.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      userName: user,
    });
  }

  requestGroup = (postid, postowner) => {
    // if (this.state.disabled) this.setState({ disabled: !this.state.disabled });
    // this.setState({ disabled: true });
    axios
      .post(base_url + "/notif/add", {
        postOwner: postowner,
        postId: postid,
        typeofNotif: "request",
        requester: this.state.userName,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    /*method for posting it to users request array*/
    axios
      .put(base_url + "/user", {
        userId: this.state.userName,
        postId: postid,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    alert("Your request has been processed");
  };

  submitRequest = () => {
    const today = new Date().setHours(0, 0, 0, 0);

    console.log("user ", this.state.userName);
    if (this.state.date === null) alert("Please enter date");
    else if (this.state.source === null && this.state.destination === null) {
      alert("Enter destination and source!");
    } else if (this.state.source === this.state.destination) {
      alert("Same source and destination.");
    } else if (this.state.date.setHours(0, 0, 0, 0) < today) {
      alert("Enter valid date");
    } else if (this.state.destination === null || this.state.source === null) {
      alert("Please fill in the required fields");
    } else {
      let datObject = new Date().setHours(0, 0, 0, 0);
      datObject = this.state.date;
      let paramDate =
        datObject.getDate() +
        "-" +
        (datObject.getMonth() + 1) +
        "-" +
        datObject.getFullYear();
      console.log("Date for parameter", paramDate);
      const params = {
        sourceLocation: this.state.source,
        destinationLocation: this.state.destination,
        date: paramDate,
      };
      console.log("Printing date selected", this.state.date);
      //console.log(this.state);
      axios
        .get(base_url + "/post", { params })
        .then((response) => {
          this.setState({
            posts: response.data,
          });
          console.log("Search response received", this.state.posts);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
  onChange = (date) => {
    this.setState({ date });
    console.log(this.state.date);
  };
  handleChange(value, formattedValue) {
    // this.setState({
    //   value: value, // ISO String, ex: "2016-11-19T12:00:00.000Z"
    //   formattedValue: formattedValue // Formatted String, ex: "11/19/2016"
    // });
  }
  onChangetime = (time) => this.setState({ time });
  render() {
    const loggedIn = localStorage.getItem("loggedIn");
    if (loggedIn.localeCompare("false") === 0) {
      return <Redirect to="/login" />;
    }
    const posts = this.state.posts;
    console.log("Printing posts fetched : ", posts.data);
    return (
      <div>
        <Navigation_bar />

        <MDBContainer className="mt-5 text-center">
          <MDBRow>
            <MDBCol>
              <Jumbotron style={{ backgroundColor: "lightsteelblue" }}>
                <div className="row">
                  <div
                    className="sourceSelect"
                    style={{ width: "25%", margin: "1%" }}
                  >
                    <Select
                      options={locationOptions}
                      defaultValue={{ label: "Source..." }}
                      onChange={(e) => {
                        this.setState({
                          source: e.label,
                        });
                      }}
                    />
                  </div>
                  <div
                    className="destSelect"
                    style={{ width: "25%", margin: "1%" }}
                  >
                    <Select
                      options={locationOptions}
                      defaultValue={{ label: "Destination..." }}
                      onChange={(e) => {
                        this.setState({
                          destination: e.label,
                        });
                      }}
                    />
                  </div>
                  {/* <div>
                    <DatePicker
                      id="date-picker"
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </div> */}

                  <DatePicker
                    className="dateSelect"
                    onChange={this.onChange}
                    value={this.state.date}
                  />
                </div>
                <hr />
                <Button
                  className="Submit"
                  color="green"
                  onClick={this.submitRequest}
                >
                  Search
                </Button>
              </Jumbotron>
            </MDBCol>
          </MDBRow>
        </MDBContainer>

        <div class="container ">
          {/* <ListGroup> */}
          {posts.map((post) => {
            const {
              _id,
              sourceLocation,
              destinationLocation,
              isFilled,
              date,
              postOwner,
            } = post;
            // console.log(_id, sourceLocation, destinationLocation);
            return (
              // <ListGroup.Item key={_id}>
              <Jumbotron>
                <div class="col">
                  <h3>Cab Leader : {postOwner}</h3>
                </div>

                <div class="col">
                  <h6>Source : {sourceLocation}</h6>
                </div>

                <div class="col">
                  <h6>Destination : {destinationLocation}</h6>
                </div>

                <div class="col">
                  <h6>Filled : {isFilled}</h6>
                </div>

                <div class="col">
                  <h6>Date : {date}</h6>
                </div>

                <hr />
                <div align="center">
                  <Button
                    className="submit"
                    onClick={() => this.requestGroup(_id, postOwner)}
                    // disabled={this.state.disabled}
                    variant="primary"
                    align="center"
                  >
                    Request
                    {/* {this.state.disabled ? "Requested" : "Request"} */}
                  </Button>
                </div>
                <hr />
              </Jumbotron>
            );
          })}
        </div>

        <AddPost />
      </div>
    );
  }
}

export default SearchPage;
