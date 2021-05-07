import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import React from 'react';

class Navigation extends React.Component {
  render () {
    return (
      <Navbar default>
        <Navbar.Header>
          <Navbar.Brand>
            <a href='#home' id='my-nav-item'>ToDo List</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem id='my-nav-item'>
            Contact Info
          </NavItem>
          <NavItem id='my-nav-item'>
            Navigation2
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
export default Navigation;
