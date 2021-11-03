import React from 'react';
import './Footer.css';

import { Button, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                
                <h5 className='m-4 text-primary'>Our Service</h5>
                <ListGroup style={{ margin: '0px 60px' }} variant="contained">
                    <ListGroup className='m-1 text-white'> <Link style={{ textDecoration: 'none', color: 'white' }} to="/details/:id">Booking Information</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="">My Booking</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="/MyBooking">Manage Booking</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="/add">Add a new Tour</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="/booking">User's Details</Link></ListGroup>
                   
                </ListGroup>
            </div>
            <div>
                <h5 className='text-primary mt-4'>information</h5>
                <ListGroup style={{ margin: '0px 60px' }} variant="contained">
                    <ListGroup className='m-1 text-white'> <Link style={{ textDecoration: 'none', color: 'white' }} to="/home">Home</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="/home#services">Services</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="home#gallery">Gallery</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="home#camp">Camp</Link></ListGroup>
                    <ListGroup className='m-1 text-white'><Link style={{ textDecoration: 'none', color: 'white' }} to="home#about">About Us</Link></ListGroup>

                </ListGroup>
            </div>

            <div>
                <h5 className='text-primary mt-4'>Quick Contact</h5>
                <ListGroup style={{ margin: '0px 60px' }} variant="flush">
                    <ListGroup className='m-1' style={{ color: 'white' }}>+8801840763872 </ListGroup>
                    <ListGroup className='m-1' style={{ color: 'white' }}>shafayat537@gmail.com </ListGroup>
                    <ListGroup className='m-1' style={{ color: 'white' }}>Zigatola Bus stand, Dhaka, Bangladesh </ListGroup>
                </ListGroup>
                <div>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
            <div>
                <div>
                    <h5 className='text-primary mt-4'>Send Us Messege</h5>
                    <form action="">
                        <p><strong className='text-white'>Name:</strong><input type="name" value="" placeholder="Your Name" /></p>
                        <p><strong className='text-white'>Email:</strong><input type="email" name="" id="" placeholder="Your Email" /></p>
                        <textarea name="" placeholder="Write Messege" id="" cols="30" rows="5"></textarea><br />
                        <Button>Send us messege</Button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Footer;