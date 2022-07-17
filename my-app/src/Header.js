import React from "react";
import routes from "./routes";
import { Link } from "react-router-dom";
import './style.css';
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router-dom";
import { useRef, useState } from "react";
import { login } from "./Firebase";
import { getAuth, signOut } from "firebase/auth";



const auth = getAuth();
signOut(auth).then(() => {
  let history= useHistory();
  history.push('/home')
}).catch((error) => {
  // An error happened.
});

const Header = () => (
  <ul className="nav">
    {routes.map((route, i) => (
      <li key={i}>
        <Link to={route.path}></Link>
      </li>
    ))}

{/* <button type="button" onClick={handleSubmit} className="btn btn-primary">Login</button></div> */}



    <Navbar expand="sm" bg="primary" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="/home"><strong><FontAwesomeIcon icon={faBook} /> Perpustakaan</strong> Politeknik Negeri Malang</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">Tentang Perpustakaan</Nav.Link>
            <Nav.Link href="/book">Tentang Buku</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav>
          <NavDropdown title="Akun" id="basic-nav-dropdown">
            <NavDropdown.Item href="/register">Register</NavDropdown.Item>
            <NavDropdown.Item href="/login">Log In</NavDropdown.Item>
            <NavDropdown.Item type="button" onClick={signOut}>SignOut</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  </ul>

);


export default Header;