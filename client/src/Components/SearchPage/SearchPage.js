import React, { Component } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";
import "./SearchPage.css";
import TimePicker from "react-time-picker";
import axios from "axios";
var moment = require("moment");

const locationOptions = [
  { value: "airport", label: "Airport" },
  { value: "secunderabad", label: "Secunderabad" },
  { value: "campus", label: "BPHC" }
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
    let dateSelected;

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
    console.log("Parameters psassed ", params);
    //console.log(this.state);
    axios
      .get("http://localhost:4000/post", { params })
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
        <div>
          {posts.map(post => {
            const { _id, sourceLocation, destinationLocation, isFilled } = post;
            // console.log(_id, sourceLocation, destinationLocation);
            return (
              <div key={_id}>
                <h2>{sourceLocation}</h2>
                <p>{destinationLocation}</p>
                <p>{isFilled}</p>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default SearchPage;
