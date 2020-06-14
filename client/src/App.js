import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import Account from "./Components/Account";
import AboutPage from "./Components/AboutUsPage";
import AddPost from "./Components/AddPost/AddPost";
import Dashboard from "./Components/Dashboard";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
    };
    this.requireAuth = this.requireAuth.bind(this);
    //this.handleForgot = this.handleForgot.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    //this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    if (this.state.flag === false) {
      localStorage.setItem("loggedIn", false);
      this.setState({
        flag: true,
      });
    }
  }
  requireAuth(nextState, replace) {
    const loggedIn = localStorage.getItem("loggedIn");
    console.log(loggedIn);
    alert(loggedIn);
    if (!loggedIn) {
      replace({
        pathname: "/login",
      });
    }
  }
  render() {
    //localStorage.setItem('loggedIn',false);
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/profile" component={Profile} />
            <Route path="/account" component={Account} />
            <Route path="/search" component={SearchPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/addPost" component={AddPost} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route exact path="/" component={HomePage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
