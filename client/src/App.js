import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation_bar from "./Components/Navigation_bar";
import { BrowserRouter, Switch, Router, Route } from "react-router-dom";
import "./App.css";
import SearchPage from "./Components/SearchPage";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Profile from "./Components/Profile";
import Account from "./Components/Account";
import { Navbar } from "reactstrap";
import AddPost from "./Components/AddPost/AddPost";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation_bar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/account" component={Account} />
          <Route path="/" component={SearchPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
