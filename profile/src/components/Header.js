import React from "react";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';

function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" classname="py-4" sticky="top">
            <Container>
                <Navbar.Brand href="#home" style={{fontSize: "24px", borderRight: "2px solid grey", padding:"0 10px"}}>Nicholas Benedict</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#project">Project</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                    </Nav>
                    <Button variant="outline-success">Contact Me</Button>{' '}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;