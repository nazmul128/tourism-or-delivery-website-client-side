import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';


import './ContactUs.css'


const ContactUs = () => {
    return (

        <div className='row mt-5 contact-background'>
            <div className='col-md-6 col-sm-12'>
                <h1 className='text-white  mt-4'> Contact Us</h1>
                <ListGroup style={{ margin: '0px 60px' }} variant="flush">
                    <ListGroup className='m-1 text-white'>+8801840763872 </ListGroup>
                    <ListGroup className='m-1 text-white'>shafayat537@gmail.com </ListGroup>
                    <ListGroup className='m-1 text-white'>Zigatola Bus stand, Dhaka, Bangladesh </ListGroup>
                </ListGroup>
                <div>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-google-plus-g"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
            <div className='col-md-6 col-sm-12'>
                <div >
                    <h5 className='text-white mt-4'>How can we help</h5>
                    <form action="">
                        <p><strong className='text-white me-3'>Name:</strong><input type="name" value="" placeholder="Your Name" /></p>
                        <p><strong className='text-white me-3'>Email:</strong><input type="email" name="" id="" placeholder="Your Email" /></p>
                        <textarea className='ms-5' name="" placeholder="Write Message" id="" cols="30" rows="3"></textarea><br />
                        <Button>Send us message</Button>
                    </form>
                </div>
            </div>
          
        </div>
      
    );
};

export default ContactUs;