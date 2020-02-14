import React, { Component } from "react";
import Select from "react-select";
import DatePicker from "react-date-picker";
import "./SearchPage.css";

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
      destination: null
    };
  }
  submitRequest = () => {
    //TODO:source & dest not same
    //TODO:historical date NA
    const today = moment(this.state.date).format("DD MMM, YYYY");
    console.log("today is", today);
    if (this.state.source === null && this.state.destination === null) {
      alert("Enter destination and source!");
    } else if (this.state.source === this.state.destination) {
      alert("Same source and destination.");
    } else if (this.state.date < new Date()) {
      alert("Enter valid date");
    }
    //console.log(this.state);
  };
  onChange = date => {
    this.setState({ date });
  };
  render() {
    return (
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
    );
  }
}

export default SearchPage;
