import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <img
          src="./images/ilm-logo.png"
          // width="30"
          // height="30"
          className="d-inline-block align-top"
          alt=""
        />
        {/* ILM Academy Dismissal App */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          {/* <Nav.Link href="#link">Link</Nav.Link> */}
          <NavDropdown title="Select Grade/Class" id="basic-nav-dropdown">
            <NavDropdown.Item
              as={Link}
              to="/FirstGrade"
            >
              First Grade
            </NavDropdown.Item>
            {/* <NavDropdown.Item href="#action/3.2"> */}
            {/* Another action */}
            {/* </NavDropdown.Item> */}
            {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
            {/* <NavDropdown.Divider /> */}
            {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
