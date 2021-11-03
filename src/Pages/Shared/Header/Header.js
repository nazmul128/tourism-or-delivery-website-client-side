import React from 'react';
import { Container, Dropdown, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" fixed="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Tourism</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto ">
                            <Nav.Link as={HashLink} className='navLink' to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} className='navLink' to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} className='navLink' to="home#gallery">Gallery</Nav.Link>
                            <Nav.Link as={HashLink} className='navLink' to="home#about">About us</Nav.Link>
                            <Nav.Link as={HashLink} className='navLink' to="/camp">Camp</Nav.Link>
                            <Nav.Link as={HashLink} className='navLink' to="/contact">Contact Us</Nav.Link>
                            
                        </Nav>
        
                        {
                            user.email && <span className="text-secondary fw-bold ms-4 me-1">{user.displayName}</span>
                        }
                        {
                            user.email ?
                                <Dropdown>
                                    <Dropdown.Toggle variant="primary" id="dropdown-basic" className="text-white fw-bold ms-3 text-center">
                                        Profile
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-light">
                                        <Dropdown.Item><NavLink className="text-decoration-none text-primary" to="/MyBooking/:email">My Booking</NavLink></Dropdown.Item>
                                        <Dropdown.Item><NavLink className="text-decoration-none text-primary" to="/booking">Manage Booking</NavLink></Dropdown.Item>
                                        <Dropdown.Item><NavLink className="text-decoration-none text-primary" to="/add">Add a new Tour</NavLink></Dropdown.Item>
                                        <Dropdown.Item onClick={logOut} className="text-primary">Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-primary btn-sm" to="/login">Sign In</NavLink>
                        }
                    </Navbar.Collapse>
                    
                </Container>
            </Navbar>






        </>
    );
};

export default Header;