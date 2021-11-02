import React from 'react';
import {  Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import useAuth from '../../hooks/useAuth';
import {  NavLink } from 'react-router-dom';

const Header = () => {
        const {user,logOut}= useAuth()
    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/home">Home</Nav.Link>
                        <Nav.Link href="#services">Services</Nav.Link>
                        <Nav.Link href="#gallery">Gallery</Nav.Link>
                        <Nav.Link href="#camp">Camp</Nav.Link>
                        <Nav.Link href="#about">About us</Nav.Link>
                        {/* <Button>Login</Button> */}
                        {
                                user.email && <span className="text-secondary fw-bold ms-4 me-1">{user.displayName}</span>
                            }
                        {
                                user.email ?
                                <Dropdown>
                                    <Dropdown.Toggle variant="warning" id="dropdown-basic" className="text-white fw-bold ms-3 text-center">
                                   Profile
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="bg-light">
                                       <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/MyBooking/:email">My Booking</NavLink></Dropdown.Item>
                                       <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/booking">Manage Booking</NavLink></Dropdown.Item>
                                       <Dropdown.Item><NavLink className="text-decoration-none text-success" to="/add">Add a new Tour</NavLink></Dropdown.Item>
                                       <Dropdown.Item onClick={logOut} className="text-success">Sign Out</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                :
                                <NavLink className="text-decoration-none text-white fs-6 ms-3 fw-bold btn btn-warning btn-sm" to="/login">Sign In</NavLink>
                            }
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;