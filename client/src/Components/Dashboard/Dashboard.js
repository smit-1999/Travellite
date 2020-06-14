import React, { Component } from "react";
import {
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBRow,
  MDBListGroup,
  MDBListGroupItem,
  MDBBadge,
  MDBIcon,
} from "mdbreact";
import { Bar, Pie } from "react-chartjs-2";
import { Redirect } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Navigation_bar from "../Navigation_bar";
{
  /* <form>
<div>
    <Button onClick = {() => {  
        axios
            .get(base_url + "/post")
            .then(function(response) {
                console.log(response.data[0].postOwner);
            })
            .catch(function(error) {
                console.log(error);
            });              
        }}
    >
    Refresh Statistics
    </Button>
</div>
</form> */
}
var randomColor = require("randomcolor");
const base_url = require("../../config/keys").base_uri;
// const list1 = [];
// const dataBarlist = [];
// const list2 = [];
const backgroundColorlist = [];
class Dashboard extends Component {
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
      one_list: [],
      two_list: [],
      three_list: [],
      four_list: [],
      timeSlot: "",
      people: "",
      num_notifs: 0,
      cab_group_empty: 0,
      cab_group_filled: 0,
      list1: [],
      list2: [],
      dataBarlist: [],
      backgroundColorlist: [],
    };
    //this.componentDidMount = this.componentDidMount.bind(this);
  }
  fillState = async () => {
    await axios
      .get(base_url + "/post")
      .then((response) => {
        const list_temp = [];
        const list_temp2 = [];
        const list_temp3 = [];
        const list_temp4 = [];
        const list_temp5 = [];
        const people_list = [];
        //this.setState({ list1: response.data });
        console.log(response.data);
        response.data.forEach((date) => {
          list_temp.push(date);
        });
        response.data.forEach(({ people }) => {
          if (people == "") {
            people_list.push(0);
          } else {
            people_list.push(parseInt(people));
          }
        });
        console.log(people_list);
        response.data.forEach(({ isfilled }) => {
          if (isfilled === true) {
            const s = this.state.cab_group_filled;
            this.setState({
              cab_group_filled: s + 1,
            });
          }
        });
        const n = response.data.length;
        const s1 = this.state.cab_group_filled;
        this.setState({
          cab_group_empty: n - s1,
        });
        console.log(list_temp2);
        //console.log(this.state.cab_group_filled)
        list_temp.forEach(({ date }) => {
          list_temp2.push(date);
        });
        //console.log(response.data);
        //console.log("qwe");
        //console.log(this.state.list1);
        //console.log(list_temp2);
        const list5 = new Set(list_temp2);
        const array = [...list5];
        const month_list = [];
        list_temp2.forEach((date) => {
          var pieces = date.split("-");
          if (pieces[1] == "") {
            month_list.push(0);
          } else {
            var myInt = parseInt(pieces[1]);
            month_list.push(myInt);
          }
        });
        const num_list = [1, 2, 3, 4, 5, 6, 7, 8];
        const one_map = new Map();
        const two_map = new Map();
        const three_map = new Map();
        const four_map = new Map();
        for (var i = 0; i < num_list.length; i++) {
          one_map.set(i + 1, 0);
          two_map.set(i + 1, 0);
          three_map.set(i + 1, 0);
          four_map.set(i + 1, 0);
        }
        for (var i = 0; i < people_list.length; i++) {
          if (people_list === 1) {
            const s = one_map.get(month_list[i]);
            one_map.set(month_list[i], s + 1);
          }
          if (people_list[i] === 2) {
            const s = two_map.get(month_list[i]);
            two_map.set(month_list[i], s + 1);
          }
          if (people_list[i] === 3) {
            const s = three_map.get(month_list[i]);
            three_map.set(month_list[i], s + 1);
          }
          if (people_list[i] === 4) {
            const s = four_map.get(month_list[i]);
            four_map.set(month_list[i], s + 1);
          }
          console.log(people_list[i], month_list[i]);
        }
        console.log(four_map);
        console.log(month_list + "monthlist");
        this.setState({
          one_list: [...[...one_map.values()]],
        });
        this.setState({
          two_list: [...[...two_map.values()]],
        });
        this.setState({
          three_list: [...[...three_map.values()]],
        });
        this.setState({
          four_list: [...[...four_map.values()]],
        });
        this.setState({
          list1: array,
        });
        console.log(this.state.list1 + ":list1");
        const m = new Map();
        array.map((num) => {
          m.set(num, 0);
        });
        // array.forEach(()=>{
        //     list_temp3.push(0);
        // });
        list_temp2.map((num) => {
          m.set(num, m.get(num) + 1);
        });
        const a1 = [...m.values()];
        console.log(a1);
        const a = [...a1];
        console.log(a + "a");
        this.setState({
          list2: a,
        });
        console.log(this.state.list1);
        console.log(this.state.list2);
        array.map(() => {
          var color = randomColor();
          list_temp4.push(color);
        });
        this.setState({
          backgroundColorlist: list_temp4,
        });
        console.log(this.state.backgroundColorlist);
      })
      .catch(function(error) {
        console.log(error);
      });
    await axios.get(base_url + "/notif").then((response) => {
      this.setState({
        num_notifs: response.data.length,
      });
      console.log(this.state.num_notifs);
    });
  };

  render() {
    const barChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        xAxes: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)",
            },
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
    };
    const dataPie = {
      labels: this.state.list1,
      datasets: [
        {
          data: this.state.list2,
          backgroundColor: this.state.backgroundColorlist,
        },
      ],
    };

    const dataBar = {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      datasets: [
        {
          label: "#1",
          data: this.state.one_list,
          backgroundColor: "rgba(245, 74, 85, 0.5)",
          borderWidth: 1,
        },
        {
          label: "#2",
          data: this.state.two_list,
          backgroundColor: "rgba(90, 173, 246, 0.5)",
          borderWidth: 1,
        },
        {
          label: "#3",
          data: this.state.three_list,
          backgroundColor: "rgba(245, 192, 50, 0.5)",
          borderWidth: 1,
        },
        {
          label: "#4",
          data: this.state.four_list,
          backgroundColor: "rgba(120, 40, 70, 0.5)",
          borderWidth: 1,
        },
      ],
    };
    // <ListGroup>
    //     {notifs.map((notif) => {
    //         const { requester, _id } = notif;
    //         console.log(_id);
    //         return (
    //         <ListGroup.Item key={_id}>
    //             <p className="p">
    //             {requester} has requested to join with you in a
    //             ride
    //             </p>
    //             <hr />
    //             <MDBBtn color="blue" className="notifButton">
    //             <i class="fas fa-check"></i>
    //             </MDBBtn>
    //             <MDBBtn color="red" className="notifButton">
    //             <i class="fas fa-times"></i>
    //             </MDBBtn>
    //         </ListGroup.Item>
    //         );
    //     })}
    // </ListGroup>
    return (
      <div>
        <Navigation_bar />
        <MDBRow className="mb-4">
          <MDBCol md="8" className="mb-4">
            <button onClick={this.fillState}>REFRESH</button>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <Bar data={dataBar} height={270} options={barChartOptions} />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md="4" className="mb-4">
            <MDBCard className="mb-4">
              <MDBCardHeader>
                Number of Posts on a Particular Date
              </MDBCardHeader>
              <MDBCardBody>
                <Pie
                  data={dataPie}
                  height={300}
                  options={{ responsive: true }}
                />
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="mb-4">
              <MDBCardBody>
                <MDBListGroup className="list-group-flush">
                  <MDBListGroupItem>
                    Sales
                    <MDBBadge
                      color="success-color"
                      pill
                      className="float-right"
                    >
                      22%
                      <MDBIcon icon="arrow-up" className="ml-1" />
                    </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    Number of posts
                    <MDBBadge color="danger-color" pill className="float-right">
                      5%
                      <MDBIcon icon="arrow-down" className="ml-1" />
                    </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    Number of notifications sent
                    <MDBBadge
                      color="primary-color"
                      pill
                      className="float-right"
                    >
                      {this.state.num_notifs}
                    </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    Number of cab groups empty
                    <MDBBadge
                      color="primary-color"
                      pill
                      className="float-right"
                    >
                      {this.state.cab_group_empty}
                    </MDBBadge>
                  </MDBListGroupItem>
                  <MDBListGroupItem>
                    Number of cab groups filled
                    <MDBBadge
                      color="primary-color"
                      pill
                      className="float-right"
                    >
                      {this.state.cab_group_filled}
                    </MDBBadge>
                  </MDBListGroupItem>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>
    );
  }
}
export default Dashboard;
