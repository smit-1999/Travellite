import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Route} from 'react-router';
import profile from '../Profile/Profile';
import account from '../Account/Account';
import login from '../Login/Login';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
    Container   
  } from 'reactstrap';

  class Navigation_bar extends Component {
    state={
        isOpen : false
    }
toggle=()=>{
    this.setState({
        isOpen:!this.state.isOpen
    });
}
render() {
    return(
        <div>
        <Navbar color="dark" dark expand="sm" className="mb-5">
            <Container>
                <NavbarBrand href="/">
                    Travellite
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                    <div class="dropdown">
                      <button class="dropbtn">Dropdown
                      <i class="fa fa-caret-down"></i>
                      </button>
                      <div class="dropdown-content">
                        <a >My profile</a>
                        <a >Account</a>
                        <a >Logout</a>
                      </div>
                    </div>
                  </Nav>
                </Collapse>
            </Container>
        </Navbar>
    </div>
    );       
}
}
export default Navigation_bar 