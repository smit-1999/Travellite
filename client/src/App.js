import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation_bar from "./Components/Navigation_bar";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Account from "./Components/Account";
import AboutPage from "./Components/AboutUsPage";
import { Navbar } from "reactstrap";
import AddPost from "./Components/AddPost/AddPost";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    //this.handleChange = this.handleChange.bind(this);
    //this.handleForgot = this.handleForgot.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }
  onUsernameChange = username => {
    this.setState({
      username: username
    });
  };
  render() {
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
            <Route path="/">
              {" "}
              This is the index page.Select /x to go to page x
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
