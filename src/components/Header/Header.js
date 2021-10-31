import React from "react";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

  const { user, logOut } = useAuth()
  return (
    <div>

      <Navbar sticky="top" className="header" collapseOnSelect expand="lg" style={{ background: "#000" }}>
        <Container>
          <Navbar.Brand href="#home" className="logo"> <a href="/"> <h3 style={{ color: "#fff" }}>Maxima</h3></a></Navbar.Brand>
          <Navbar.Toggle style={{ background: "#fff" }} />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/addService" className="nav-link">Add Rides</Nav.Link>
            {user?.email && <Nav.Link as={Link} to="/MyRids" className="nav-link">My Rides</Nav.Link>}
            {user?.email && <Nav.Link as={Link} to="/ManageOrders" className="nav-link">Manage Orders</Nav.Link>}
            {user?.email ? <Nav.Link onClick={logOut} as={Link} to="/login">Log Out</Nav.Link> :
              <Nav.Link as={Link} to="/login" className="nav-link">Log In</Nav.Link>}
            <Navbar.Text className="userName"> <a href="#login" style={{ color: "#fff" }}>{user?.displayName}</a>
            </Navbar.Text>
            <Nav.Link as={Link} to="/registar" className="nav-link">Registar</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Header;
