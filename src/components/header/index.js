import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./header.css";

class Header extends Component{
    render(){
        return(
            <Navbar fixed="top" className="dark-bar" variant="dark" >
                <Navbar.Brand href="/">Meme<b>Garage</b></Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link title="Login" to="/login" id="basic-nav-item" >Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;