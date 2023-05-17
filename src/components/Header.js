import React from 'react';
import KMLogo from '../app/assets/img/Screen Shot 2022-06-26 at 8.51.36 PM.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';

export default class Header extends React.Component {
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
          <NavbarBrand href="/">
          <img
            alt="logo"
            src={KMLogo}
            style={{
              height: 40,
              width: 115
            }}
          />

          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/about/">About US</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/contact/">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/concession/">Concession</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

