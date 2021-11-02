import React from 'react';
import './About.css'

const About = () => {
    return (
        <div id='about'>
            <h1 className='my-5 text-primary'>Welcome to Interactive
                Camping Ground</h1>
            <p>Campers span a broad range of age, ability, and ruggedness, and campsites are designed in many ways as well. Many campgrounds have sites with facilities such as fire rings, barbecue grills, utilities, shared bathrooms and laundry, as well as access to nearby recreational facilities, however, not all campsites have similar levels of development.</p>
            <div className='about'>
                <div className='paragraph'>
                    <i class="fas fa-caravan"></i>
                    <p>30 CAMPER SITES</p>
                </div>
                <div>
                    <i class="fas fa-truck-pickup"></i>
                    <p>25 CARAVAN SITES*</p>
                </div>
                <div>
                    <i class="fas fa-campground"></i>
                    <p>50 TENT SITES</p>
                </div>
                <div>
                    <i class="fas fa-house-damage"></i>
                    <p>10 CABIN HOUSES</p>
                </div>
            </div>
        </div>
    );
};

export default About;