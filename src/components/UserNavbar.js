import React from 'react';
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
  DropdownItem } from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.svg';
import '../styles/Home.css';
import AuthenLogin from "./AuthenLogin.js";

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">reactstrap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2 navbar-search" type="search" placeholder="Explore Deckslash" aria-label="Search" />
                            <button className="btn navbar-button" type="submit">Search</button>
                        </form>
                    </NavItem>
                    <NavItem>
                        <a className="btn navbar-button" href="/login">
                            Log In
                        </a>
                    </NavItem>
                    <NavItem>
                        <a className="btn get-started-button" href="/signup">
                            Sign Up
                        </a>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
      </div>
    );
  }
}
