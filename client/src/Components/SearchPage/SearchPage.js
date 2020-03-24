import React, { Component } from "react";
import Select from "react-select";
import Navigation_bar from "../Navigation_bar";
import DatePicker from "react-date-picker";
import "./SearchPage.css";
import { Button, Jumbotron, ListGroup } from "react-bootstrap";
import axios from "axios";
import {MDBContainer, MDBRow, MDBCol, MDBJumbotron} from 'mdbreact';
const base_url = require("../../config/keys").base_uri;
//var moment = require("moment");

const locationOptions = [
  { value: "airport", label: "Airport" },
  { value: "secunderabad", label: "Secunderabad" },
  { value: "campus", label: "BPHC" }
];
class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName:'',
      date: new Date(),
      source: null,
      destination: null,
      time: "10:00",
      posts: []
    };
    this.componentDidMount= this.componentDidMount.bind(this);
  }
  componentDidMount() {
        
    const user = localStorage.getItem('user')
    this.setState({
        userName: user,
    })
};
  submitRequest = () => {
    const today = new Date().setHours(0, 0, 0, 0);
    let dateSelected;
    console.log("user ", this.state.userName);
    if (this.state.date === null) alert("Please enter date");
    else if (this.state.source === null && this.state.destination === null) {
      alert("Enter destination and source!");
    } else if (this.state.source === this.state.destination) {
      alert("Same source and destination.");
    } else if (this.state.date.setHours(0, 0, 0, 0) < today) {
      alert("Enter valid date");
    }
    const params = {
      sourceLocation: this.state.source,
      destinationLocation: this.state.destination
    };
    
    //console.log(this.state);
    axios
      .get(base_url + "/post", { params })
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log("Search response received", this.state.posts);
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  onChange = date => {
    this.setState({ date });
  };
  onChangetime = time => this.setState({ time });
  render() {
    const posts = this.state.posts;
    console.log("Printing posts fetched : ", posts.data);
    return (
      <div>

        <Navigation_bar />
        <MDBContainer className="mt-5 text-center">
        <MDBRow>
        <MDBCol>
        <Jumbotron style = {{backgroundColor : "lightsteelblue"}}>
          <div className = "row">
            <div className="sourceSelect" 
            style = {{ width : "25%", 
            margin :"1%" }} >
            <Select
              options={locationOptions}
              defaultValue={{ label: "Source..." }}
              onChange={e => {
                this.setState({
                  source: e.label
                });
              }}
            />
          </div>
          <div className="destSelect"
          style = {{ width : "25%", 
          margin :"1%" }}>
            <Select
              options={locationOptions}
              defaultValue={{ label: "Destination..." }}
              onChange={e => {
                this.setState({
                  destination: e.label
                });
              }}
            />
          </div>

          <DatePicker
            className="dateSelect"
            onChange={this.onChange}
            value={this.state.date}
          />

</div><hr/>
          <Button className="Submit" color="green" onClick={this.submitRequest}>
            Search
          </Button>
        </Jumbotron>
        </MDBCol>
        </MDBRow>        
        </MDBContainer>
        <ListGroup>
          {posts.map(post => {
            const { _id, sourceLocation, destinationLocation, isFilled } = post;
            // console.log(_id, sourceLocation, destinationLocation);
            return (
              <ListGroup.Item key={_id}>
                <h2>{sourceLocation}</h2>
                <p>{destinationLocation}</p>
                <p>{isFilled}</p>
                <hr />
                <Button className="submit" color="black">Join</Button>
                <hr />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default SearchPage;
