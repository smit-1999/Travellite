import axios from "axios";
import {
  MDBBadge,
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
} from "mdbreact";
import React, { Component } from "react";
import { Bar, Pie } from "react-chartjs-2";
var randomColor = require("randomcolor");
const base_url = require("../../config/keys").base_uri;
const backgroundColorlist = [];
class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postOwner: "",
      members: [""],
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
      num_posts: 0,
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
        this.setState({
          num_posts: n,
        });
        const s1 = this.state.cab_group_filled;
        this.setState({
          cab_group_empty: n - s1,
        });
        console.log(list_temp2);
        list_temp.forEach(({ date }) => {
          list_temp2.push(date);
        });
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
          if (people_list[i] == 1) {
            const s = one_map.get(month_list[i]);
            one_map.set(month_list[i], s + 1);
          }
          if (people_list[i] == 2) {
            const s = two_map.get(month_list[i]);
            two_map.set(month_list[i], s + 1);
          }
          if (people_list[i] == 3) {
            const s = three_map.get(month_list[i]);
            three_map.set(month_list[i], s + 1);
          }
          if (people_list[i] == 4) {
            const s = four_map.get(month_list[i]);
            four_map.set(month_list[i], s + 1);
          }
          console.log(people_list[i], month_list[i], "good");
        }
        console.log(one_map);
        console.log(two_map);
        console.log(three_map);
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
        array.forEach((num) => {
          m.set(num, 0);
        });
        list_temp2.forEach((num) => {
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
        array.forEach(() => {
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
    return (
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
            <MDBCardHeader>Number of Posts on a Particular Date</MDBCardHeader>
            <MDBCardBody>
              <Pie data={dataPie} height={300} options={{ responsive: true }} />
            </MDBCardBody>
          </MDBCard>
          <MDBCard className="mb-4">
            <MDBCardBody>
              <MDBListGroup className="list-group-flush">
                {/* <MDBListGroupItem>
                                    Sales
                                    <MDBBadge color="success-color" pill className="float-right">
                                        22%
                                        <MDBIcon icon="arrow-up" className="ml-1"/>
                                    </MDBBadge>
                                </MDBListGroupItem> */}
                <MDBListGroupItem>
                  Number of posts
                  <MDBBadge color="primary-color" pill className="float-right">
                    {this.state.num_posts}
                    {/* <MDBIcon icon="arrow-down" className="ml-1"/> */}
                  </MDBBadge>
                </MDBListGroupItem>
                <MDBListGroupItem>
                  Number of notifications sent
                  <MDBBadge color="primary-color" pill className="float-right">
                    {this.state.num_notifs}
                  </MDBBadge>
                </MDBListGroupItem>
                <MDBListGroupItem>
                  Number of cab groups empty
                  <MDBBadge color="primary-color" pill className="float-right">
                    {this.state.cab_group_empty}
                  </MDBBadge>
                </MDBListGroupItem>
                <MDBListGroupItem>
                  Number of cab groups filled
                  <MDBBadge color="primary-color" pill className="float-right">
                    {this.state.cab_group_filled}
                  </MDBBadge>
                </MDBListGroupItem>
              </MDBListGroup>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    );
  }
}
export default Dashboard;
