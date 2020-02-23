import React, { Component } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";
import "./SearchPage.css";
import TimePicker from "react-time-picker";
import keys from "../../config/keys";

import axios from "axios";
import {
  Alerts,
  Button,
  Col,
  Row,
  Jumbotron,
  ListGroup
} from "react-bootstrap";
var moment = require("moment");

const base_uri = keys.base_uri;
const locationOptions = [
  { value: "Airport", label: "Airport" },
  { value: "Secunderabad", label: "Secunderabad" },
  { value: "BPHC", label: "BPHC" }
];
class SearchPage extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
      source: null,
      destination: null,
      time: "10:00",
      posts: []
    };
  }
  submitRequest = () => {
    const today = new Date().setHours(0, 0, 0, 0);

    if (this.state.date === null) alert("Please enter date");
    else if (this.state.source === null && this.state.destination === null) {
      alert("Enter destination and source!");
    } else if (this.state.source === this.state.destination) {
      alert("Same source and destination.");
    } else if (this.state.date.setHours(0, 0, 0, 0) < today) {
      alert("Enter valid date");
    } else if (this.state.source === null) {
      alert("");
    }

    const params = {
      startLocation: this.state.source,
      endLocation: this.state.destination
    };
    axios
      .get(base_uri + "/post", { params })
      .then(response => {
        this.setState({
          posts: response.data
        });
        console.log("Search response received", this.state.posts);
      })
      .catch(function(error) {
        console.log(error);
        console.log(base_uri + "/post");
      });
  };
  onChange = date1 => {
    console.log("Date before setting is ", this.state.date);
    this.setState({ date: date1 });
    console.log("Date selected in search box is", date1);
    console.log("Date set in current state is ", this.state.date);
  };
  onChangetime = time => this.setState({ time });
  render() {
    const posts = this.state.posts;
    return (
      <div>
        <div className="Panel" class="flex-container">
          <div className="sourceSelect">
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
          <div className="destSelect">
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

          <button className="Search" color="green" onClick={this.submitRequest}>
            Search
          </button>
        </div>
        <ListGroup>
          {posts.map(post => {
            const { _id, startLocation, endLocation, isFilled, date } = post;
            return (
              <ListGroup.Item
                className="float-left ml-5 mt-4 w-75 h-auto"
                variant="primary"
                key={_id}
              >
                <Row>
                  <Col class="postSource">{startLocation} </Col>
                  <Col class="postDestination">{endLocation}</Col>
                  <Col class="postDate"> {date} </Col>

                  <Button
                    className="float-right mr-4 md-2"
                    variant="primary"
                    active
                  >
                    Join
                  </Button>
                </Row>
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  }
}

export default SearchPage;
