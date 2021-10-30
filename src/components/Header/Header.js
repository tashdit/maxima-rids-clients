import React from "react";
import "./Header.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {

  const { user, logOut } = useAuth()
  return (
    <div>

      <Navbar id="header" sticky="top" className="header" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home" className="logo"><h1> <a href="/">Maxima</a></h1></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home" className="nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/doctors" className="nav-link">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/ourServices" className="nav-link">Services</Nav.Link>
            {user?.email ? <Nav.Link onClick={logOut} as={Link} to="/login">Log Out</Nav.Link> :
              <Nav.Link as={Link} to="/login" className="nav-link">Log In</Nav.Link>}
            <Nav.Link as={Link} to="/registar" className="nav-link">Registar</Nav.Link>
            <Navbar.Text className="userName">
              Signed in as: <a href="#login" className="nav-link">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      {/* <Navbar sticky="top" className="header" collapseOnSelect expand="lg" >
        <Container>
          <Navbar.Brand href="#home" className="logo">MediLab</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
            <Nav.Link as={Link} to="/ourServices">Services</Nav.Link>

            {user?.email ? <Nav.Link onClick={logOut} as={Link} to="/login">Log Out</Nav.Link> :
              <Nav.Link as={Link} to="/login">Log In</Nav.Link>}
            <Nav.Link as={Link} to="/registar">Registar</Nav.Link>
            <Navbar.Text>
              Signed in as: <a href="#login">{user?.displayName}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}



      {/* <header id="header" classNameName="fixed-top d-flex align-items-center">
        <div className="container d-flex justify-content-between">
          <div className="logo">
            <h1>
              <a href="index.html">Maxim</a>
            </h1>
          </div>

          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a className="nav-link scrollto active" href="#hero">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#about">
                  About
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#services">
                  Services
                </a>
              </li>
              <li>
                <a className="nav-link scrollto " href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#team">
                  Team
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>*/}
    </div>
  );
};

export default Header;
