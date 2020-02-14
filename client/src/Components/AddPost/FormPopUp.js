import React, { Component } from "react";
import "./AddPost.css";
import {
  Container,
  List,
  ListGroupItem,
  Button,
  ListGroup,
  Form,
  FormGroup
} from "reactstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import DatePicker from "react-date-picker";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];
const items = [
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" }
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
class FormPopUp extends Component {
  state = {
    startLocation: { value: null, label: "Enter Start Location" },
    endLocation: { value: null, label: "Enter End Location" },
    date: new Date(),
    timeSlot: { value: null, label: "Enter Time Slot" },
    people: { value: null, label: "Enter Number of People" }
  };

  render() {
    // console.log(startLocation);
    return (
      <form>
        <div>
          <label htmlFor="Start location">Start location</label>
          <Select
            options={items}
            onChange={start => {
              this.setState({ startLocation: start }, () =>
                console.log(this.state.startLocation.value)
              );
              // console.log(startLocation);
            }}
            value={this.state.startLocation}
          ></Select>
        </div>
        <div>
          <label htmlFor="End location">End location</label>
          <Select
            options={items}
            onChange={end => {
              this.setState({ endLocation: end }, () =>
                console.log(this.state.endLocation.value)
              );
              // console.log(startLocation);
            }}
            value={this.state.endLocation}
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
              this.setState({ date: dat }, () => console.log(this.state.date));
              // console.log(startLocation);
            }}
            value={this.state.date}
          ></DatePicker>
        </div>
        <div>
          <label htmlFor="TimeSlot">Time Slot</label>
          <Select
            options={time}
            onChange={time => {
              this.setState({ timeSlot: time }, () =>
                console.log(this.state.timeSlot.value)
              );
              // console.log(startLocation);
            }}
            value={this.state.timeSlot}
          ></Select>
        </div>
        <div>
          <label htmlFor="people">Number of People</label>
          <Select
            options={noOfPeople}
            onChange={peep => {
              this.setState({ people: peep }, () =>
                console.log(this.state.people.value)
              );
              // console.log(startLocation);
            }}
            value={this.state.people}
          ></Select>
        </div>
        <Button
          onClick={() => {
            if (this.state.startLocation.value === null)
              alert("Start Location empty");
            else if (this.state.endLocation.value === null)
              alert("End Location empty");
            else if (this.state.date < new Date())
              alert("Date cannot be less than today ");
            else if (this.state.timeSlot.value === null)
              alert("Time Slot empty");
            else if (this.state.people.value === null)
              alert("You want to travel alone?");
            else if (
              this.state.startLocation.value === this.state.endLocation.value
            )
              alert("Start and End location same");
            else console.log(JSON.stringify(this.state));
          }}
        >
          Submit
        </Button>
      </form>
    );
  }
}

export default FormPopUp;
