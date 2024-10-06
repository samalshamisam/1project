import React from 'react';
import { HashLink } from 'react-router-hash-link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
function NavBar() {
    return (
        <>
            <Navbar bg="dark" expand="lg">
                <Container>
                    <NavLink to="/">
                    <img src="images/logo.png" alt="" />
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="navlinks justify-content-end">
                            <HashLink to="/#latest">Latest Builds</HashLink>
                            <HashLink to="/#process">Process</HashLink>
                            <HashLink to="/#service">Services</HashLink>
                            <HashLink to="/#contact">Contact Us</HashLink>
                            <NavLink to="/Projects">Projects</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
            {/* end navbar  */}
        </>
    )
}


export default NavBar