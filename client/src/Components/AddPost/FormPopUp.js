import React, { Component } from "react";
import "./AddPost.css";
import {
  //Container,
  //List,
  //ListGroupItem,
  Button,
  //ListGroup,
  //Form,
  //FormGroup
} from "reactstrap";

import DatePicker from "react-date-picker";
import Select from "react-select";
import axios from "axios";
const base_url = require("../../config/keys").base_uri;
const items = [
  { value: "airport", label: "Airport" },
  { value: "secunderabad", label: "Secunderabad" },
  { value: "campus", label: "BPHC" },
];
const time = [
  { value: "1-2", label: "1am-4am" },
  { value: "2-3", label: "4am-7am" },
  { value: "3-4", label: "7am-10am" },
  { value: "4-5", label: "10am-1pm" },
  { value: "5-6", label: "1pm-4pm" },
  { value: "6-7", label: "4pm-7pm" },
  { value: "7-8", label: "7pm-10pm" },
  { value: "8-9", label: "10pm-1am" },
];
const noOfPeople = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
];
class FormPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postOwner: "",
      members: [""],
      // sourceLocation: { value: null, label: "Enter Start Location" },
      sourceLocation: null,
      destinationLocation: null,
      date: "",
      dateObject: new Date(),
      timeSlot: "",
      people: "",
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({
      postOwner: user,
    });
  }
  render() {
    // console.log(sourceLocation);
    return (
      <form class="text-left border border-light p-5">
        <div>
          <label htmlFor="Start location">Start location</label>
          {/* <select
            class="custom-select custom-select-sm"
            options={items}
            defaultValue={{ label: "Start Location..." }}
            onChange={(start) => {
              this.setState({ sourceLocation: start.value }, () =>
                console.log(this.state.sourceLocation)
              );
            }}
          ></select> */}
          <Select
            options={items}
            defaultValue={{ label: "Start Location..." }}
            onChange={(start) => {
              this.setState({ sourceLocation: start.value }, () =>
                console.log(this.state.sourceLocation)
              );
            }}
          ></Select>
        </div>
        <div>
          <label htmlFor="End location">End location</label>
          <Select
            options={items}
            defaultValue={{ label: "End Location..." }}
            onChange={(end) => {
              this.setState({ destinationLocation: end.value }, () =>
                console.log(this.state.destinationLocation)
              );
            }}
          ></Select>
        </div>
        {/* <div>
          <label htmlFor="date">Date</label>
          <input
            id="date"
            type="date"
            onChange={dat => {
              this.setState({ date: dat }, () => console.log(this.state.date));
              // console.log(sourceLocation);
            }}
          />
        </div> */}
        <div>
          <DatePicker
            className="dateselect"
            onChange={(dat) => {
              this.setState(
                {
                  dateObject: dat,
                  date:
                    dat.getDate() +
                    "-" +
                    (dat.getMonth() + 1) +
                    "-" +
                    dat.getFullYear(),
                },
                () => console.log(this.state.date),
                () => console.log(this.state.dateObject)
              );
              // console.log(sourceLocation);
            }}
            value={this.state.dateObject}
          ></DatePicker>
        </div>
        <div>
          <label htmlFor="TimeSlot">Time Slot</label>
          <Select
            options={time}
            defaultValue={{ label: "Time for travel..." }}
            onChange={(time) => {
              this.setState({ timeSlot: time.value }, () =>
                console.log(this.state.timeSlot)
              );
              // console.log(sourceLocation);
            }}
          ></Select>
        </div>
        <div>
          <label htmlFor="people">Number of People</label>
          <Select
            defaultValue={{ label: "Number of companions..." }}
            options={noOfPeople}
            onChange={(peep) => {
              this.setState({ people: peep.value }, () =>
                console.log(this.state.people)
              );
              // console.log(sourceLocation);
            }}
          ></Select>
        </div>
        <Button
          onClick={() => {
            if (this.state.sourceLocation === null)
              alert("Start Location empty");
            else if (this.state.destinationLocation === null)
              alert("End Location empty");
            else if (this.state.date < new Date())
              alert("Date cannot be less than today ");
            else if (this.state.timeSlot === null) alert("Time Slot empty");
            else if (this.state.people === null)
              alert("You want to travel alone?");
            else if (
              this.state.sourceLocation === this.state.destinationLocation
            )
              alert("Start and End location same");
            else {
              console.log(this.state);
              axios
                .post(base_url + "/post/add", this.state)
                .then(function(response) {
                  console.log(response);
                  alert("Form submitted");
                })
                .catch(function(error) {
                  console.log(error);
                });
            }
          }}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default FormPopUp;
