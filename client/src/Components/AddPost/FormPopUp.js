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
import { Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-date-picker";
import Select from "react-select";
import axios from "axios";
const base_url = require('../../config/keys').base_uri;
const items = [
  { value: "airport", label: "Airport" },
  { value: "secunderabad", label: "Secunderabad" },
  { value: "campus", label: "BPHC" }
];
const time = [
  { value: "1-2", label: "1-2" },
  { value: "2-3", label: "2-3" },
  { value: "3-4", label: "3-4" },
  { value: "4-5", label: "4-5" }
];
const noOfPeople = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" }
];
const d = new Date();
class FormPopUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postOwner: "",
      members: [""],
      // startLocation: { value: null, label: "Enter Start Location" },
      startLocation: "",
      endLocation: "",
      date: new Date(),
      timeSlot: "",
      people: ""
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
        
    const user = localStorage.getItem('user')
    this.setState({
      postOwner: user,
    })
};
  render() {
    // console.log(startLocation);
    return (
      <form>
        <div>
          <label htmlFor="Start location">Start location</label>
          <Select
            options={items}
            defaultValue={{ label: "Start Location..." }}
            onChange={start => {
              this.setState({ startLocation: start.value }, () =>
                console.log(this.state.startLocation)
              );
            }}
          ></Select>
        </div>
        <div>
          <label htmlFor="End location">End location</label>
          <Select
            options={items}
            defaultValue={{ label: "End Location..." }}
            onChange={end => {
              this.setState({ endLocation: end.value }, () =>
                console.log(this.state.endLocation)
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
              // console.log(startLocation);
            }}
          />
        </div> */}
        <div>
          <DatePicker
            className="dateselect"
            onChange={dat => {
              this.setState(
                {
                  date: new Date(
                    dat.getFullYear(),
                    dat.getMonth(),
                    dat.getDate()
                  )
                },
                () => console.log(this.state.date)
              );
              // console.log(startLocation);
            }}
            value={this.state.date}
          ></DatePicker>
        </div>
        <div>
          <label htmlFor="TimeSlot">Time Slot</label>
          <Select
            options={time}
            defaultValue={{ label: "Time for travel..." }}
            onChange={time => {
              this.setState({ timeSlot: time.value }, () =>
                console.log(this.state.timeSlot)
              );
              // console.log(startLocation);
            }}
          ></Select>
        </div>
        <div>
          <label htmlFor="people">Number of People</label>
          <Select
            defaultValue={{ label: "Number of companions..." }}
            options={noOfPeople}
            onChange={peep => {
              this.setState({ people: peep.value }, () =>
                console.log(this.state.people)
              );
              // console.log(startLocation);
            }}
          ></Select>
        </div>
        <Button
          onClick={() => {
            if (this.state.startLocation === null)
              alert("Start Location empty");
            else if (this.state.endLocation === null)
              alert("End Location empty");
            else if (this.state.date < new Date())
              alert("Date cannot be less than today ");
            else if (this.state.timeSlot === null) alert("Time Slot empty");
            else if (this.state.people === null)
              alert("You want to travel alone?");
            else if (this.state.startLocation === this.state.endLocation)
              alert("Start and End location same");
            else {
              console.log(this.state);
              axios
                .post(base_url + "/post/add", this.state)
                .then(function(response) {
                  console.log(response);
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
