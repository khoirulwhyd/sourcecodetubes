import React, { Component } from "react";
import {Navbar, Nav, Container} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
  
import Home from "./Home";
import Book from "./Book";
import About from "./About";
import BookPage from "./BookPage";
import Peminjaman from "./Peminjaman";
import Pengembalian from "./Pengembalian";

export default class NavbarComp extends Component {
    render() {
        return (
            <Router>
            <div>
                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Perpus Poltek Malang</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                                <Nav.Link as={Link} to={"/book"}>Book</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    {/* <Route exact path="/">
                        <Register />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route> */}
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route  path="/book">
                        <BookPage />
                    </Route>
                    <Route  path="/inputBuku">
                        <Book />
                    </Route>
                    <Route  path="/peminjaman">
                        <Peminjaman />
                    </Route>
                    <Route  path="/pengembalian">
                        <Pengembalian />
                    </Route>
                </Switch>
            </div>
            </Router>
        );
    }
}